/* themes/guai/static/js/main.js */
(function () {
  const root = document.documentElement;
  const header = document.querySelector("[data-site-header]");
  const progress = document.querySelector(".reading-progress");
  const themeButton = document.querySelector("[data-theme-toggle]");
  const themeIcon = document.querySelector("[data-theme-icon]");
  const menuButton = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const cursor = document.querySelector(".cursor-dot");
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

  const storedTheme = localStorage.getItem("guai-theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = storedTheme || (systemDark ? "dark" : "light");

  const setTheme = (theme) => {
    root.dataset.theme = theme;
    localStorage.setItem("guai-theme", theme);
    if (themeIcon) {
      themeIcon.src = theme === "dark" ? "/icons/sun.svg" : "/icons/moon.svg";
    }
    themeButton?.setAttribute("aria-label", theme === "dark" ? "切换浅色模式" : "切换深色模式");
  };

  setTheme(initialTheme);

  themeButton?.addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });

  const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 80);
  };

  const updateProgress = () => {
    if (!progress) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const percent = max > 0 ? Math.round((window.scrollY / max) * 100) : 0;
    progress.style.width = `${percent}%`;
    progress.dataset.progress = `${percent}%`;
  };

  window.addEventListener("scroll", () => {
    updateHeader();
    updateProgress();
  }, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateHeader();
  updateProgress();

  menuButton?.addEventListener("click", () => {
    const open = !mobileMenu?.classList.contains("is-open");
    mobileMenu?.classList.toggle("is-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  });

  mobileMenu?.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      mobileMenu.classList.remove("is-open");
      menuButton?.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileMenu?.classList.contains("is-open")) {
      mobileMenu.classList.remove("is-open");
      menuButton?.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
    if (event.key === "/" && document.activeElement === document.body) {
      event.preventDefault();
      document.querySelector("[data-search-toggle]")?.click();
    }
  });

  if (cursor && !coarsePointer) {
    window.addEventListener("mousemove", (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    });

    document.addEventListener("mouseover", (event) => {
      if (event.target.closest("a, button")) cursor.classList.add("is-hover");
    });

    document.addEventListener("mouseout", (event) => {
      if (event.target.closest("a, button")) cursor.classList.remove("is-hover");
    });
  }

  document.querySelectorAll("pre").forEach((pre) => {
    const code = pre.querySelector("code");
    if (!code) return;

    const lang = Array.from(code.classList)
      .find((name) => name.startsWith("language-"))
      ?.replace("language-", "");

    if (lang) {
      const label = document.createElement("span");
      label.className = "code-lang";
      label.textContent = lang;
      pre.appendChild(label);
    }

    const button = document.createElement("button");
    button.className = "copy-code";
    button.type = "button";
    button.textContent = "复制";
    button.setAttribute("aria-label", "复制代码");
    pre.appendChild(button);

    button.addEventListener("click", async () => {
      await navigator.clipboard.writeText(code.textContent || "");
      button.classList.add("is-copied");
      window.setTimeout(() => button.classList.remove("is-copied"), 1200);
    });
  });
})();
