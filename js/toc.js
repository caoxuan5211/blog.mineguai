/* themes/guai/static/js/toc.js */
(function () {
  const links = Array.from(document.querySelectorAll("[data-toc-link]"));
  const dots = Array.from(document.querySelectorAll("[data-toc-dot]"));
  if (!links.length) return;

  const headings = links
    .map((link) => document.getElementById(link.dataset.targetId))
    .filter(Boolean);

  const ratios = new Map();

  const setActive = (heading) => {
    if (!heading) return;
    links.forEach((link) => {
      const active = link.dataset.targetId === heading.id;
      link.classList.toggle("is-active", active);
      if (active) {
        dots.forEach((dot) => {
          const parent = dot.closest("[data-toc-list]");
          const activeLink = parent?.querySelector(`[data-target-id="${heading.id}"]`);
          if (!parent || !activeLink) return;
          dot.style.top = `${activeLink.offsetTop + activeLink.offsetHeight / 2 - 3}px`;
        });
      }
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => ratios.set(entry.target, entry.intersectionRatio));
    const best = headings
      .map((heading) => ({ heading, ratio: ratios.get(heading) || 0 }))
      .sort((a, b) => b.ratio - a.ratio)[0];
    if (best?.heading) setActive(best.heading);
  }, {
    root: null,
    rootMargin: "-10% 0px -55% 0px",
    threshold: [0, 0.25, 0.5, 0.75, 1]
  });

  headings.forEach((heading) => observer.observe(heading));
  setActive(headings[0]);
})();
