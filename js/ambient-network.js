(function () {
  const canvas = document.querySelector(".ambient-network");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!canvas) return;

  const context = canvas.getContext("2d", { alpha: true });
  const pointer = { x: -999, y: -999, active: false };
  let width = 0;
  let height = 0;
  let points = [];
  let meteors = [];
  let frame = 0;

  const isDark = () => document.documentElement.dataset.theme === "dark";

  const createPoint = (index, count) => {
    const band = index / Math.max(count - 1, 1);
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.16,
      size: 1.6 + Math.random() * 3.2,
      twinkle: Math.random() * Math.PI * 2,
      depth: 0.45 + band * 0.75
    };
  };

  const createMeteor = () => ({
    x: Math.random() * width,
    y: Math.random() * height * 0.42,
    length: 72 + Math.random() * 86,
    speed: 1.4 + Math.random() * 1.8,
    life: 0,
    ttl: 110 + Math.random() * 70,
    delay: Math.random() * 420
  });

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    const count = Math.max(18, Math.min(54, Math.round(width / 34)));
    points = Array.from({ length: count }, (_, index) => createPoint(index, count));
    meteors = Array.from({ length: Math.max(2, Math.min(4, Math.round(width / 420))) }, createMeteor);
  };

  const movePoint = (point) => {
    point.x += point.vx * point.depth;
    point.y += point.vy * point.depth;
    if (point.x < -40) point.x = width + 40;
    if (point.x > width + 40) point.x = -40;
    if (point.y < -40) point.y = height + 40;
    if (point.y > height + 40) point.y = -40;
  };

  const drawLine = (start, end, alpha) => {
    const hue = isDark() ? "128, 180, 231" : "91, 124, 164";
    context.strokeStyle = `rgba(${hue}, ${alpha})`;
    context.lineWidth = 0.7;
    context.beginPath();
    context.moveTo(start.x, start.y);
    context.lineTo(end.x, end.y);
    context.stroke();
  };

  const drawStar = (point, time) => {
    const shimmer = (Math.sin(time * 0.002 + point.twinkle) + 1) / 2;
    const alpha = 0.38 + shimmer * 0.42 + point.depth * 0.08;
    const radius = point.size * (0.42 + point.depth * 0.18);
    const glow = context.createRadialGradient(point.x, point.y, 0, point.x, point.y, radius * 5.5);
    glow.addColorStop(0, `rgba(226, 243, 255, ${alpha})`);
    glow.addColorStop(0.34, `rgba(142, 190, 239, ${alpha * 0.32})`);
    glow.addColorStop(1, "rgba(142, 190, 239, 0)");
    context.fillStyle = glow;
    context.beginPath();
    context.arc(point.x, point.y, radius * 5.5, 0, Math.PI * 2);
    context.fill();

    context.fillStyle = `rgba(255, 255, 255, ${Math.min(1, alpha + 0.18)})`;
    context.beginPath();
    context.arc(point.x, point.y, Math.max(0.75, radius), 0, Math.PI * 2);
    context.fill();
  };

  const drawMeteor = (meteor) => {
    if (meteor.delay > 0) {
      meteor.delay -= 1;
      return;
    }

    meteor.life += 1;
    meteor.x += meteor.speed;
    meteor.y += meteor.speed * 0.42;
    const progress = meteor.life / meteor.ttl;
    const alpha = Math.sin(Math.min(1, progress) * Math.PI) * 0.48;
    const tailX = meteor.x - meteor.length;
    const tailY = meteor.y - meteor.length * 0.42;
    const gradient = context.createLinearGradient(tailX, tailY, meteor.x, meteor.y);
    gradient.addColorStop(0, "rgba(170, 214, 255, 0)");
    gradient.addColorStop(0.72, `rgba(170, 214, 255, ${alpha * 0.55})`);
    gradient.addColorStop(1, `rgba(255, 255, 255, ${alpha})`);
    context.strokeStyle = gradient;
    context.lineWidth = 1.2;
    context.beginPath();
    context.moveTo(tailX, tailY);
    context.lineTo(meteor.x, meteor.y);
    context.stroke();

    if (meteor.life > meteor.ttl || meteor.x > width + meteor.length) {
      Object.assign(meteor, createMeteor());
      meteor.x = -meteor.length;
      meteor.delay = 260 + Math.random() * 520;
    }
  };

  const draw = (time = 0) => {
    context.clearRect(0, 0, width, height);
    const maxDistance = Math.min(230, Math.max(132, width * 0.16));
    const dark = isDark();
    points.forEach((point, index) => {
      if (!reducedMotion) movePoint(point);
      for (let next = index + 1; next < points.length; next += 1) {
        const other = points[next];
        const distance = Math.hypot(point.x - other.x, point.y - other.y);
        const lineAlpha = dark ? 0.055 : 0.18;
        if (distance < maxDistance) drawLine(point, other, (1 - distance / maxDistance) * lineAlpha);
      }
      if (dark) {
        drawStar(point, time);
      } else {
        context.fillStyle = `rgba(94, 132, 178, ${0.15 + point.depth * 0.08})`;
        context.beginPath();
        context.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        context.fill();
      }
    });

    if (dark && !reducedMotion) meteors.forEach(drawMeteor);

    if (pointer.active) {
      points.slice(0, 10).forEach((point) => drawLine(pointer, point, dark ? 0.035 : 0.08));
    }
    if (!reducedMotion) frame = requestAnimationFrame(draw);
  };

  const start = () => {
    cancelAnimationFrame(frame);
    resize();
    draw();
  };

  window.addEventListener("resize", start);
  window.addEventListener("mousemove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
  }, { passive: true });
  document.addEventListener("mouseleave", () => {
    pointer.active = false;
  });
  new MutationObserver(start).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  start();
})();
