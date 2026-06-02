export function initPageMotion() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const root = document.documentElement;

  const updateScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? window.scrollY / max : 0;
    root.style.setProperty("--scroll-ratio", ratio.toFixed(4));
    root.style.setProperty("--wash-y", `${(ratio * 32).toFixed(2)}px`);
  };

  window.addEventListener("scroll", updateScroll, { passive: true });
  window.addEventListener("resize", updateScroll);
  updateScroll();

  if (reduced) return;

  let frame = 0;
  const tick = () => {
    const time = Date.now() / 1000;
    root.style.setProperty("--wash-x", `${(Math.sin(time * 0.22) * 18).toFixed(2)}px`);
    frame = window.requestAnimationFrame(tick);
  };

  tick();
  window.addEventListener("beforeunload", () => window.cancelAnimationFrame(frame), { once: true });
}
