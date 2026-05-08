/* themes/guai/static/js/search.js */
(function () {
  const form = document.querySelector("[data-search-form]");
  const toggle = document.querySelector("[data-search-toggle]");
  const input = document.querySelector("[data-search-input]");
  const modal = document.querySelector("[data-search-modal]");
  const modalResults = document.querySelector("[data-search-results]");
  const pageForm = document.querySelector("[data-page-search-form]");
  const pageInput = document.querySelector("[data-page-search-input]");
  const pageResults = document.querySelector("[data-page-search-results]");
  let indexPromise = null;
  let activeResults = [];
  let activeIndex = -1;

  const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[char]));

  const decodeHTML = (value) => {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = String(value ?? "");
    return textarea.value;
  };

  const normalize = (value) => String(value ?? "").toLocaleLowerCase();

  const highlight = (text, query) => {
    const safe = escapeHTML(text);
    const token = query.trim();
    if (!token) return safe;
    const pattern = token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return safe.replace(new RegExp(`(${pattern})`, "ig"), "<mark>$1</mark>");
  };

  const snippet = (content, query) => {
    const text = decodeHTML(content).replace(/\s+/g, " ").trim();
    if (!text) return "";
    const lowerText = normalize(text);
    const lowerQuery = normalize(query);
    const hit = lowerText.indexOf(lowerQuery);
    const start = Math.max(0, hit - 42);
    const from = hit >= 0 ? start : 0;
    const value = text.slice(from, from + 116);
    return `${from > 0 ? "..." : ""}${value}${from + 116 < text.length ? "..." : ""}`;
  };

  const loadIndex = () => {
    if (!indexPromise) {
      indexPromise = fetch("/index.json", { credentials: "same-origin" })
        .then((response) => {
          if (!response.ok) throw new Error("search index failed");
          return response.json();
        });
    }
    return indexPromise;
  };

  const scoreItem = (item, query) => {
    const q = normalize(query);
    const title = normalize(decodeHTML(item.title));
    const tags = normalize([...(item.tags || []), ...(item.categories || [])].join(" "));
    const content = normalize(decodeHTML(`${item.summary || ""} ${item.content || ""}`));
    let score = 0;
    if (title === q) score += 90;
    if (title.includes(q)) score += 60;
    if (tags.includes(q)) score += 35;
    if (content.includes(q)) score += 18;
    for (const token of q.split(/\s+/).filter(Boolean)) {
      if (title.includes(token)) score += 18;
      if (tags.includes(token)) score += 10;
      if (content.includes(token)) score += 4;
    }
    return score;
  };

  const search = (data, query) => data
    .map((item) => ({ item, score: scoreItem(item, query) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 12)
    .map((entry) => entry.item);

  const resultHTML = (item, query, active) => {
    const meta = [
      (item.categories || item.tags || ["随记"])[0] || "随记",
      item.date
    ].filter(Boolean).join(" · ");
    return `
      <a class="search-result${active ? " is-active" : ""}" href="${escapeHTML(item.url)}" data-search-result>
        <span class="search-result-title">${highlight(decodeHTML(item.title), query)}</span>
        <span class="search-result-meta">${escapeHTML(meta)}</span>
        <span class="search-result-meta">${highlight(snippet(item.content || item.summary, query), query)}</span>
      </a>
    `;
  };

  const render = (box, items, query = "", keyboard = false) => {
    if (!box) return;
    if (!query) {
      box.innerHTML = "<div class=\"search-result-meta\">输入关键词后显示结果。</div>";
      return;
    }
    if (!items.length) {
      box.innerHTML = "<div class=\"search-result-meta\">没有找到相关内容。</div>";
      return;
    }
    box.innerHTML = items.map((item, index) => resultHTML(item, query, keyboard && index === activeIndex)).join("");
  };

  const runSearch = async (query, target) => {
    const q = query.trim();
    if (!q) {
      if (target === "page") render(pageResults, [], "");
      else render(modalResults, [], "");
      return;
    }
    try {
      const data = await loadIndex();
      const items = search(data, q);
      if (target === "page") {
        render(pageResults, items, q);
        return;
      }
      activeResults = items;
      activeIndex = items.length ? 0 : -1;
      render(modalResults, items, q, true);
    } catch {
      const box = target === "page" ? pageResults : modalResults;
      if (box) box.innerHTML = "<div class=\"search-result-meta\">搜索索引加载失败。</div>";
    }
  };

  const openSearch = () => {
    form?.classList.add("is-open");
    modal?.classList.add("is-open");
    toggle?.setAttribute("aria-label", "关闭搜索");
    window.setTimeout(() => input?.focus(), 20);
  };

  const closeSearch = () => {
    form?.classList.remove("is-open");
    modal?.classList.remove("is-open");
    toggle?.setAttribute("aria-label", "打开搜索");
    if (input) input.value = "";
    activeResults = [];
    activeIndex = -1;
    render(modalResults, [], "");
  };

  const updateActive = () => {
    modalResults?.querySelectorAll("[data-search-result]").forEach((item, index) => {
      item.classList.toggle("is-active", index === activeIndex);
    });
  };

  toggle?.addEventListener("click", () => {
    if (form?.classList.contains("is-open")) closeSearch();
    else {
      openSearch();
      loadIndex().catch(() => {
        if (modalResults) modalResults.innerHTML = "<div class=\"search-result-meta\">搜索索引加载失败。</div>";
      });
    }
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (activeIndex >= 0 && activeResults[activeIndex]) {
      window.location.href = activeResults[activeIndex].url;
      return;
    }
    const q = input?.value.trim();
    if (q) window.location.href = `/search/?q=${encodeURIComponent(q)}`;
  });

  input?.addEventListener("input", () => {
    runSearch(input.value, "modal");
  });

  pageForm?.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  pageInput?.addEventListener("input", () => {
    runSearch(pageInput.value, "page");
    const next = pageInput.value.trim()
      ? `${window.location.pathname}?q=${encodeURIComponent(pageInput.value.trim())}`
      : window.location.pathname;
    window.history.replaceState(null, "", next);
  });

  if (pageInput) {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q") || "";
    pageInput.value = q;
    loadIndex()
      .then(() => runSearch(q, "page"))
      .catch(() => {
        if (pageResults) pageResults.innerHTML = "<div class=\"search-result-meta\">搜索索引加载失败。</div>";
      });
  }

  document.addEventListener("keydown", (event) => {
    if (!modal?.classList.contains("is-open")) return;
    if (event.key === "Escape") {
      closeSearch();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      activeIndex = Math.min(activeResults.length - 1, activeIndex + 1);
      updateActive();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      activeIndex = Math.max(0, activeIndex - 1);
      updateActive();
    } else if (event.key === "Enter" && activeIndex >= 0 && activeResults[activeIndex]) {
      window.location.href = activeResults[activeIndex].url;
    }
  });
})();
