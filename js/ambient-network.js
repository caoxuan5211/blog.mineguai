(function () {
  const canvas = document.querySelector(".ambient-network");
  if (!canvas) return;

  const context = canvas.getContext("2d", { alpha: true });
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pointer = { x: -999, y: -999, active: false };
  let width = 0;
  let height = 0;
  let ratio = 1;
  let objects = [];
  let threads = [];
  let frame = 0;

  const isDark = () => document.documentElement.dataset.theme === "dark";
  const randomBetween = (min, max) => Math.random() * (max - min) + min;
  const choose = (items) => items[Math.floor(Math.random() * items.length)];
  const objectPool = (dark) => dark
    ? ["heartOrbit", "rose", "envelope", "crescent", "heartOrbit", "rose", "stamp", "envelope", "heartOrbit", "spark"]
    : ["envelope", "rose", "heartOrbit", "stamp", "crescent", "spark", "envelope", "rose"];

  const palette = (dark) => ({
    rose: dark ? "236, 132, 166" : "155, 70, 93",
    accent: dark ? "139, 226, 214" : "0, 107, 100",
    gold: dark ? "236, 205, 118" : "164, 130, 49",
    paper: dark ? "20, 35, 32" : "247, 242, 232",
    ink: dark ? "230, 234, 223" : "24, 39, 34"
  });

  const createObject = (type = choose(objectPool(isDark()))) => {
    const dark = isDark();
    const sizeRanges = {
      envelope: dark ? [56, 128] : [38, 100],
      rose: dark ? [54, 124] : [34, 96],
      heartOrbit: dark ? [58, 132] : [42, 108],
      stamp: dark ? [40, 92] : [30, 82],
      crescent: dark ? [44, 104] : [28, 76],
      spark: dark ? [10, 24] : [9, 22]
    };
    const alphaRanges = {
      envelope: dark ? [0.26, 0.52] : [0.13, 0.34],
      rose: dark ? [0.28, 0.56] : [0.13, 0.34],
      heartOrbit: dark ? [0.3, 0.58] : [0.15, 0.36],
      stamp: dark ? [0.22, 0.44] : [0.12, 0.3],
      crescent: dark ? [0.3, 0.6] : [0.14, 0.34],
      spark: dark ? [0.14, 0.34] : [0.12, 0.28]
    };
    const [minSize, maxSize] = sizeRanges[type] || sizeRanges.envelope;
    const [minAlpha, maxAlpha] = alphaRanges[type] || alphaRanges.envelope;
    const size = randomBetween(minSize, maxSize);
    return {
      type,
      x: randomBetween(-120, width + 120),
      y: randomBetween(-90, height + 120),
      size,
      vx: randomBetween(-0.12, 0.12),
      vy: randomBetween(-0.1, 0.11),
      rot: randomBetween(-0.7, 0.7),
      spin: randomBetween(-0.0022, 0.0022),
      alpha: randomBetween(minAlpha, maxAlpha),
      pulse: randomBetween(0, Math.PI * 2)
    };
  };

  const createThread = () => ({
    x: randomBetween(-40, width + 40),
    y: randomBetween(-60, height + 60),
    length: randomBetween(150, 430),
    rot: randomBetween(-0.95, 0.95),
    speed: randomBetween(0.06, 0.18),
    alpha: isDark() ? randomBetween(0.12, 0.28) : randomBetween(0.06, 0.16),
    bend: randomBetween(-22, 22)
  });

  const resize = () => {
    ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    const mobile = width < 680;
    const objectCount = mobile
      ? Math.max(12, Math.min(22, Math.round(width / 34)))
      : Math.max(24, Math.min(42, Math.round(width / 38)));
    const threadCount = mobile ? 5 : Math.max(8, Math.min(16, Math.round(width / 120)));

    const pool = objectPool(isDark());
    objects = Array.from({ length: objectCount }, (_, index) => createObject(pool[index % pool.length]));
    threads = Array.from({ length: threadCount }, createThread);
  };

  const moveObject = (object) => {
    object.x += object.vx;
    object.y += object.vy;
    object.rot += object.spin;
    object.pulse += 0.006;
    if (object.x < -160) object.x = width + 110;
    if (object.x > width + 160) object.x = -110;
    if (object.y < -130) object.y = height + 110;
    if (object.y > height + 150) object.y = -100;
  };

  const drawEnvelope = (object, colors) => {
    const w = object.size * 1.45;
    const h = object.size * 0.72;
    context.fillStyle = `rgba(${colors.paper}, ${object.alpha * 0.42})`;
    context.strokeStyle = `rgba(${colors.rose}, ${object.alpha})`;
    context.lineWidth = 0.9;
    context.beginPath();
    context.roundRect(-w / 2, -h / 2, w, h, 5);
    context.fill();
    context.stroke();
    context.beginPath();
    context.moveTo(-w / 2, -h / 2);
    context.lineTo(0, h * 0.08);
    context.lineTo(w / 2, -h / 2);
    context.moveTo(-w / 2, h / 2);
    context.lineTo(-w * 0.05, h * 0.02);
    context.moveTo(w / 2, h / 2);
    context.lineTo(w * 0.05, h * 0.02);
    context.strokeStyle = `rgba(${colors.rose}, ${object.alpha * 0.52})`;
    context.stroke();
  };

  const drawRose = (object, colors) => {
    const s = object.size;
    context.strokeStyle = `rgba(${colors.rose}, ${object.alpha})`;
    context.lineWidth = 0.9;
    context.beginPath();
    for (let index = 0; index < 3; index += 1) {
      const r = s * (0.12 + index * 0.08);
      context.ellipse(0, 0, r * 1.4, r, object.rot + index * 0.9, 0, Math.PI * 1.72);
    }
    context.moveTo(0, s * 0.18);
    context.bezierCurveTo(s * 0.04, s * 0.42, -s * 0.1, s * 0.62, -s * 0.02, s * 0.86);
    context.moveTo(-s * 0.04, s * 0.52);
    context.bezierCurveTo(-s * 0.25, s * 0.42, -s * 0.28, s * 0.63, -s * 0.06, s * 0.62);
    context.moveTo(s * 0.02, s * 0.62);
    context.bezierCurveTo(s * 0.25, s * 0.5, s * 0.24, s * 0.73, s * 0.02, s * 0.72);
    context.stroke();
  };

  const drawHeartOrbit = (object, colors) => {
    const s = object.size * 0.42;
    context.strokeStyle = `rgba(${colors.rose}, ${object.alpha * 0.64})`;
    context.lineWidth = 1;
    context.beginPath();
    context.ellipse(0, 0, object.size * 0.72, object.size * 0.34, 0.28, 0, Math.PI * 2);
    context.stroke();
    context.strokeStyle = `rgba(${colors.gold}, ${object.alpha * 0.34})`;
    context.beginPath();
    context.ellipse(0, 0, object.size * 0.48, object.size * 0.22, -0.34, 0, Math.PI * 2);
    context.stroke();

    context.fillStyle = `rgba(${colors.rose}, ${object.alpha})`;
    context.beginPath();
    context.moveTo(0, s * 0.45);
    context.bezierCurveTo(-s * 1.2, -s * 0.35, -s * 0.7, -s * 1.2, 0, -s * 0.42);
    context.bezierCurveTo(s * 0.7, -s * 1.2, s * 1.2, -s * 0.35, 0, s * 0.45);
    context.fill();
  };

  const drawCrescent = (object, colors) => {
    const s = object.size * 0.5;
    context.fillStyle = `rgba(${colors.gold}, ${object.alpha * 0.86})`;
    context.beginPath();
    context.arc(0, 0, s, Math.PI * 0.18, Math.PI * 1.82);
    context.arc(s * 0.34, -s * 0.06, s * 0.82, Math.PI * 1.76, Math.PI * 0.24, true);
    context.closePath();
    context.fill();
    context.fillStyle = `rgba(${colors.rose}, ${object.alpha * 0.78})`;
    const h = s * 0.22;
    context.beginPath();
    context.moveTo(-s * 0.08, h * 0.55);
    context.bezierCurveTo(-h * 2.2, -h * 0.32, -h * 1.15, -h * 1.8, 0, -h * 0.66);
    context.bezierCurveTo(h * 1.15, -h * 1.8, h * 2.2, -h * 0.32, -s * 0.08, h * 0.55);
    context.fill();
  };

  const drawStamp = (object, colors) => {
    const w = object.size;
    const h = object.size * 0.68;
    context.strokeStyle = `rgba(${colors.gold}, ${object.alpha})`;
    context.fillStyle = `rgba(${colors.paper}, ${object.alpha * 0.22})`;
    context.lineWidth = 0.9;
    context.setLineDash([2, 3]);
    context.strokeRect(-w / 2, -h / 2, w, h);
    context.setLineDash([]);
    context.fillRect(-w / 2, -h / 2, w, h);
    context.beginPath();
    context.arc(-w * 0.13, 0, h * 0.2, 0, Math.PI * 2);
    context.strokeStyle = `rgba(${colors.rose}, ${object.alpha * 0.72})`;
    context.stroke();
    context.beginPath();
    context.moveTo(w * 0.08, -h * 0.18);
    context.lineTo(w * 0.28, -h * 0.18);
    context.moveTo(w * 0.08, 0);
    context.lineTo(w * 0.33, 0);
    context.moveTo(w * 0.08, h * 0.18);
    context.lineTo(w * 0.24, h * 0.18);
    context.stroke();
  };

  const drawSpark = (object, colors) => {
    const s = object.size * (0.82 + Math.sin(object.pulse) * 0.12);
    context.strokeStyle = `rgba(${choose([colors.rose, colors.accent, colors.gold])}, ${object.alpha})`;
    context.lineWidth = 0.8;
    context.beginPath();
    context.moveTo(-s * 0.5, 0);
    context.lineTo(s * 0.5, 0);
    context.moveTo(0, -s * 0.5);
    context.lineTo(0, s * 0.5);
    context.moveTo(-s * 0.28, -s * 0.28);
    context.lineTo(s * 0.28, s * 0.28);
    context.moveTo(s * 0.28, -s * 0.28);
    context.lineTo(-s * 0.28, s * 0.28);
    context.stroke();
  };

  const drawObject = (object, dark) => {
    const colors = palette(dark);
    context.save();
    context.translate(object.x, object.y);
    context.rotate(object.rot);
    context.globalAlpha = 0.88;

    if (object.type === "envelope") drawEnvelope(object, colors);
    if (object.type === "rose") drawRose(object, colors);
    if (object.type === "heartOrbit") drawHeartOrbit(object, colors);
    if (object.type === "stamp") drawStamp(object, colors);
    if (object.type === "crescent") drawCrescent(object, colors);
    if (object.type === "spark") drawSpark(object, colors);

    context.restore();
  };

  const drawThread = (thread, dark) => {
    const colors = palette(dark);
    context.save();
    context.translate(thread.x, thread.y);
    context.rotate(thread.rot);
    const gradient = context.createLinearGradient(-thread.length / 2, 0, thread.length / 2, 0);
    gradient.addColorStop(0, `rgba(${colors.rose}, 0)`);
    gradient.addColorStop(0.46, `rgba(${colors.rose}, ${thread.alpha})`);
    gradient.addColorStop(0.56, `rgba(${colors.gold}, ${thread.alpha * 0.72})`);
    gradient.addColorStop(1, `rgba(${colors.accent}, 0)`);
    context.strokeStyle = gradient;
    context.lineWidth = 0.8;
    context.beginPath();
    context.moveTo(-thread.length / 2, 0);
    context.bezierCurveTo(-thread.length / 6, thread.bend, thread.length / 6, -thread.bend, thread.length / 2, 0);
    context.stroke();
    context.restore();

    if (!reducedMotion) {
      thread.y += thread.speed;
      thread.x += Math.sin(thread.y * 0.004) * 0.04;
      if (thread.y > height + 100) {
        Object.assign(thread, createThread());
        thread.y = -80;
      }
    }
  };

  const drawPointerPull = (dark) => {
    if (!pointer.active) return;
    const colors = palette(dark);
    objects.slice(0, 12).forEach((object) => {
      const distance = Math.hypot(pointer.x - object.x, pointer.y - object.y);
      if (distance > 280) return;
      context.strokeStyle = `rgba(${colors.accent}, ${(1 - distance / 280) * 0.13})`;
      context.lineWidth = 0.7;
      context.beginPath();
      context.moveTo(pointer.x, pointer.y);
      context.quadraticCurveTo((pointer.x + object.x) / 2, (pointer.y + object.y) / 2 - 18, object.x, object.y);
      context.stroke();
    });
  };

  const draw = () => {
    const dark = isDark();
    context.clearRect(0, 0, width, height);
    threads.forEach((thread) => drawThread(thread, dark));
    objects.forEach((object) => {
      if (!reducedMotion) moveObject(object);
      drawObject(object, dark);
    });
    drawPointerPull(dark);
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
