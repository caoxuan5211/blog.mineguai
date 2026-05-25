/* themes/guai/static/js/main.js */
(function () {
  const root = document.documentElement;
  const header = document.querySelector("[data-site-header]");
  const progress = document.querySelector(".reading-progress");
  const loveWalkProgress = document.querySelector(".love-walk-progress");
  const loveWalkCouple = document.querySelector("[data-love-walk-couple]");
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

  let headerScrolled = false;
  const updateHeader = () => {
    if (!header) return;
    const nextScrolled = headerScrolled ? window.scrollY > 48 : window.scrollY > 96;
    if (nextScrolled === headerScrolled) return;
    headerScrolled = nextScrolled;
    header.classList.toggle("is-scrolled", headerScrolled);
  };

  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
    const percent = Math.round(ratio * 100);
    if (progress) {
      progress.style.width = `${percent}%`;
      progress.dataset.progress = `${percent}%`;
    }
    root.style.setProperty("--read-progress", String(ratio));

    if (loveWalkProgress && loveWalkCouple) {
      const trackWidth = loveWalkProgress.clientWidth;
      const coupleWidth = loveWalkCouple.getBoundingClientRect().width;
      const walkable = Math.max(trackWidth - coupleWidth, 0);
      loveWalkCouple.style.setProperty("--love-walk-x", `${(walkable * ratio).toFixed(2)}px`);
      loveWalkCouple.dataset.progress = `${percent}%`;
    }
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
    const cursorReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lastTrailAt = 0;

    const spawnCursorTrail = (x, y) => {
      if (cursorReducedMotion || Date.now() - lastTrailAt < 42) return;
      lastTrailAt = Date.now();

      const trail = document.createElement("span");
      trail.className = "cursor-love-trail";
      trail.style.left = `${x}px`;
      trail.style.top = `${y}px`;
      trail.style.setProperty("--trail-x", `${(Math.random() - 0.5) * 34}px`);
      trail.style.setProperty("--trail-y", `${(Math.random() - 0.5) * 28}px`);
      trail.style.setProperty("--trail-tilt", `${(Math.random() - 0.5) * 80}deg`);
      document.body.appendChild(trail);
      window.setTimeout(() => trail.remove(), 720);
    };

    const restoreCursor = () => {
      try {
        const position = JSON.parse(sessionStorage.getItem("guai-cursor-position") || "null");
        if (!Array.isArray(position)) return;
        cursor.style.left = `${position[0]}px`;
        cursor.style.top = `${position[1]}px`;
        cursor.classList.add("is-visible");
        root.classList.add("has-custom-cursor");
      } catch {
        sessionStorage.removeItem("guai-cursor-position");
      }
    };

    const updateCursor = (x, y) => {
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      cursor.classList.add("is-visible");
      root.classList.add("has-custom-cursor");
      sessionStorage.setItem("guai-cursor-position", JSON.stringify([x, y]));
    };

    restoreCursor();

    window.addEventListener("mousemove", (event) => {
      updateCursor(event.clientX, event.clientY);
      spawnCursorTrail(event.clientX, event.clientY);
    });

    document.addEventListener("mouseover", (event) => {
      if (event.target.closest("a, button")) cursor.classList.add("is-hover");
    });

    document.addEventListener("mouseout", (event) => {
      if (event.target.closest("a, button")) cursor.classList.remove("is-hover");
    });
  }

  document.querySelectorAll("[data-copy-link]").forEach((button) => {
    button.addEventListener("click", async () => {
      const url = button.dataset.copyLink || window.location.href;
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
      } else {
        const input = document.createElement("input");
        input.value = url;
        input.setAttribute("readonly", "");
        input.style.position = "fixed";
        input.style.opacity = "0";
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        input.remove();
      }
      const original = button.textContent;
      button.textContent = "已复制";
      button.classList.add("is-copied");
      window.setTimeout(() => {
        button.textContent = original;
        button.classList.remove("is-copied");
      }, 1400);
    });
  });

  document.querySelectorAll("[data-share-native]").forEach((button) => {
    const data = {
      title: button.dataset.shareTitle || document.title,
      url: button.dataset.shareUrl || window.location.href
    };
    if (!navigator.share) {
      button.hidden = true;
      return;
    }
    button.addEventListener("click", async () => {
      await navigator.share(data);
    });
  });

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

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const hashString = (value) => {
    let hash = 2166136261;
    for (let index = 0; index < value.length; index += 1) {
      hash ^= value.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  };

  const createRandom = (seed) => {
    let state = seed >>> 0;
    return () => {
      state += 0x6D2B79F5;
      let value = state;
      value = Math.imul(value ^ (value >>> 15), value | 1);
      value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
      return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
    };
  };

  const setFloatVars = (element, random, scale = 1) => {
    element.style.setProperty("--float-x", ((random() - 0.5) * 34 * scale).toFixed(2));
    element.style.setProperty("--float-y", ((random() - 0.5) * 30 * scale).toFixed(2));
    element.style.setProperty("--tilt", ((random() - 0.5) * 5.2 * scale).toFixed(2));
  };

  const applyFloatingFields = () => {
    const seedText = [
      document.title,
      document.body.textContent.slice(0, 1600),
      document.querySelectorAll(".post-row, .term-pill, .archive-item, .post-content h1, .post-content h2, .post-content h3").length
    ].join("|");
    const random = createRandom(hashString(seedText));
    document.querySelectorAll(".hero-float-tags a, .tag-cluster a, .term-pill, .post-header-tags a, .post-row, .archive-item").forEach((element) => {
      setFloatVars(element, random);
    });
  };

  const parseFragments = (shell) => {
    const fragments = new Set();
    const addText = (value) => {
      const text = (value || "").replace(/\s+/g, " ").trim();
      if (text && text.length <= 28) fragments.add(text);
    };

    try {
      JSON.parse(shell.dataset.loveFragments || "[]").forEach(addText);
    } catch {
      // Ignore malformed user-provided fragment data.
    }

    document.querySelectorAll(".post-heading, .post-kicker, .post-header-tags a, .post-content h1, .post-content h2, .post-content h3").forEach((element) => {
      addText(element.textContent);
    });

    return Array.from(fragments).slice(0, 14);
  };

  const buildFragments = (shell, random) => {
    const fragments = parseFragments(shell);
    if (!fragments.length) return;

    const layer = document.createElement("div");
    layer.className = "floating-fragments";
    layer.setAttribute("aria-hidden", "true");
    fragments.forEach((text, index) => {
      const fragment = document.createElement("span");
      fragment.className = "floating-fragment";
      fragment.textContent = text;
      fragment.style.setProperty("--frag-x", (8 + random() * 84).toFixed(2));
      fragment.style.setProperty("--frag-y", (10 + random() * 78).toFixed(2));
      fragment.style.setProperty("--frag-tilt", ((random() - 0.5) * 18).toFixed(2));
      fragment.style.setProperty("--frag-speed", (0.012 + random() * 0.024).toFixed(4));
      fragment.style.setProperty("--frag-fall", ((random() - 0.5) * 0.035).toFixed(4));
      fragment.style.opacity = String(0.34 + random() * 0.38);
      fragment.dataset.fragmentIndex = String(index);
      layer.appendChild(fragment);
    });
    document.body.appendChild(layer);
  };

  const groupArticleContent = (shell, random) => {
    const content = shell.querySelector(".post-content");
    if (!content || content.dataset.constellated === "true") return;

    const blocks = Array.from(content.children);
    if (!blocks.length) return;

    const groups = [];
    let current = [];
    blocks.forEach((block) => {
      const startsGroup = /^H[1-3]$/.test(block.tagName);
      if (startsGroup && current.length) {
        groups.push(current);
        current = [];
      }
      current.push(block);
    });
    if (current.length) groups.push(current);

    groups.forEach((group) => {
      const wrapper = document.createElement("section");
      wrapper.className = "content-constellation";
      wrapper.style.setProperty("--cluster-x", ((random() - 0.5) * 44).toFixed(2));
      wrapper.style.setProperty("--cluster-y", ((random() - 0.5) * 38).toFixed(2));
      wrapper.style.setProperty("--cluster-tilt", ((random() - 0.5) * 4.8).toFixed(2));
      content.insertBefore(wrapper, group[0]);
      group.forEach((block) => wrapper.appendChild(block));
    });

    content.dataset.constellated = "true";
  };

  const setupAwakeToggle = () => {
    const toggle = document.querySelector("[data-awake-toggle]");
    if (!toggle) return;

    const apply = (awake) => {
      document.body.classList.toggle("is-awake-reading", awake);
      toggle.setAttribute("aria-pressed", String(awake));
      toggle.textContent = awake ? "失重" : "清醒";
      localStorage.setItem("guai-awake-reading", awake ? "1" : "0");
    };

    apply(localStorage.getItem("guai-awake-reading") === "1");
    toggle.addEventListener("click", () => {
      apply(!document.body.classList.contains("is-awake-reading"));
    });
  };

  const setupDreamReflow = () => {
    if (reducedMotion) return;

    const interactiveSelector = "a, button, input, textarea, select, summary, pre, code, .search-modal, .mobile-menu";
    const reflowTargets = () => Array.from(document.querySelectorAll(".post-row, .content-constellation, .term-pill"));
    let reflowCount = 0;

    document.addEventListener("pointerdown", (event) => {
      if (event.button !== 0 || event.target.closest(interactiveSelector)) return;

      const random = createRandom(hashString(`${location.pathname}:${Date.now()}:${reflowCount}`));
      reflowCount += 1;
      root.style.setProperty("--reflow-phase", String(reflowCount));
      reflowTargets().forEach((element) => {
        element.style.setProperty("--reflow-x", ((random() - 0.5) * 46).toFixed(2));
        element.style.setProperty("--reflow-y", ((random() - 0.5) * 42).toFixed(2));
        element.style.setProperty("--reflow-tilt", ((random() - 0.5) * 6).toFixed(2));
      });
    }, { passive: true });
  };

  const updateDrift = () => {
    if (reducedMotion) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? window.scrollY / max : 0;
    root.style.setProperty("--drift-phase", (ratio * 1000).toFixed(2));
  };

  const initDreamLayer = () => {
    applyFloatingFields();
    const shell = document.querySelector("[data-experimental-article]");
    if (shell) {
      const seedText = `${document.title}|${shell.textContent.slice(0, 2200)}|${shell.dataset.loveFragments || ""}`;
      const random = createRandom(hashString(seedText));
      groupArticleContent(shell, random);
      buildFragments(shell, random);
      setupAwakeToggle();
    }
    setupDreamReflow();
    updateDrift();
    window.addEventListener("scroll", updateDrift, { passive: true });
    window.addEventListener("resize", updateDrift);
  };

  initDreamLayer();
})();
