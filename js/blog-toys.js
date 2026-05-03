(function () {
  const progress = document.createElement("div");
  progress.className = "mg-reading-progress";
  document.body.appendChild(progress);

  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? window.scrollY / max : 0;
    progress.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
  };

  const toast = document.createElement("div");
  toast.className = "mg-toast";
  document.body.appendChild(toast);
  let toastTimer;

  const showToast = (message) => {
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 1800);
  };

  const tools = document.createElement("div");
  tools.className = "mg-quick-tools";
  tools.innerHTML = `
    <button class="mg-tool-button" type="button" data-action="random" title="随机读一篇" aria-label="随机读一篇">?</button>
    <button class="mg-tool-button" type="button" data-action="top" title="回到顶部" aria-label="回到顶部">↑</button>
  `;
  document.body.appendChild(tools);

  let posts = [];
  fetch("/index.json")
    .then((response) => (response.ok ? response.json() : []))
    .then((data) => {
      const seen = new Set();
      posts = data.filter((item) => {
        const key = item && item.permalink;
        if (!key || seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    })
    .catch(() => {
      posts = [];
    });

  tools.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    if (button.dataset.action === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (button.dataset.action === "random") {
      if (!posts.length) {
        showToast("文章索引还没准备好");
        return;
      }
      const next = posts[Math.floor(Math.random() * posts.length)];
      window.location.href = next.permalink;
    }
  });

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();
})();
