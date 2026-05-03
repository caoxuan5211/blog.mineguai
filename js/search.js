/* themes/guai/static/js/search.js */
(function () {
  const form = document.querySelector("[data-search-form]");
  const toggle = document.querySelector("[data-search-toggle]");
  const input = document.querySelector("[data-search-input]");
  const modal = document.querySelector("[data-search-modal]");
  const resultsBox = document.querySelector("[data-search-results]");
  let fuse = null;
  let results = [];
  let activeIndex = -1;

  const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[char]));

  const highlight = (text, query) => {
    const safe = escapeHTML(text);
    if (!query) return safe;
    const pattern = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return safe.replace(new RegExp(`(${pattern})`, "ig"), "<mark>$1</mark>");
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
    render([]);
  };

  const render = (items, query = "") => {
    results = items;
    activeIndex = items.length ? 0 : -1;
    if (!resultsBox) return;
    if (!query) {
      resultsBox.innerHTML = "<div class=\"search-result-meta\">输入关键词后显示结果。</div>";
      return;
    }
    if (!items.length) {
      resultsBox.innerHTML = "<div class=\"search-result-meta\">没有找到相关内容。</div>";
      return;
    }
    resultsBox.innerHTML = items.map((item, index) => `
      <a class="search-result${index === activeIndex ? " is-active" : ""}" href="${escapeHTML(item.url)}" data-search-result>
        <span class="search-result-title">${highlight(item.title, query)}</span>
        <span class="search-result-meta">${escapeHTML((item.tags || ["随记"])[0] || "随记")} · ${escapeHTML(item.date)}</span>
      </a>
    `).join("");
  };

  const updateActive = () => {
    document.querySelectorAll("[data-search-result]").forEach((item, index) => {
      item.classList.toggle("is-active", index === activeIndex);
    });
  };

  fetch("/index.json")
    .then((response) => response.json())
    .then((data) => {
      fuse = new Fuse(data, {
        threshold: 0.3,
        ignoreLocation: true,
        keys: ["title", "content", "tags"]
      });
    })
    .catch(() => {
      if (resultsBox) resultsBox.innerHTML = "<div class=\"search-result-meta\">搜索索引加载失败。</div>";
    });

  toggle?.addEventListener("click", () => {
    if (form?.classList.contains("is-open")) closeSearch();
    else openSearch();
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (activeIndex >= 0 && results[activeIndex]) {
      window.location.href = results[activeIndex].url;
    }
  });

  input?.addEventListener("input", () => {
    const query = input.value.trim();
    if (!fuse || !query) {
      render([], query);
      return;
    }
    const seen = new Set();
    const items = fuse.search(query, { limit: 12 })
      .map((result) => result.item)
      .filter((item) => {
        if (seen.has(item.url)) return false;
        seen.add(item.url);
        return true;
      });
    render(items, query);
  });

  document.addEventListener("keydown", (event) => {
    if (!modal?.classList.contains("is-open")) return;
    if (event.key === "Escape") {
      closeSearch();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      activeIndex = Math.min(results.length - 1, activeIndex + 1);
      updateActive();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      activeIndex = Math.max(0, activeIndex - 1);
      updateActive();
    } else if (event.key === "Enter" && activeIndex >= 0 && results[activeIndex]) {
      window.location.href = results[activeIndex].url;
    }
  });
})();
