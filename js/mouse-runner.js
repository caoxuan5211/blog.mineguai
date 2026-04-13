(function() {
  'use strict';

  var FRAMES = window.mineguaiMouseRunnerFrames || [];

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function createRunner() {
    var runner = document.createElement('div');
    var img = document.createElement('img');

    runner.className = 'mouse-runner';
    runner.setAttribute('aria-hidden', 'true');

    img.className = 'mouse-runner-frame';
    img.alt = '';
    img.decoding = 'async';
    img.src = FRAMES[0];

    runner.appendChild(img);
    document.body.appendChild(runner);

    return {
      el: runner,
      img: img
    };
  }

  function initMouseRunner() {
    if (!FRAMES.length) {
      return;
    }

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    var runner = createRunner();
    var frameIndex = 0;
    var lastFrameTime = 0;
    var lastTime = 0;
    var padding = 28;
    var state = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
      moving: false
    };

    function updateBoundsTarget(x, y) {
      state.targetX = clamp(x, padding, window.innerWidth - padding);
      state.targetY = clamp(y, padding, window.innerHeight - padding);
    }

    function updateFrame(now, moving) {
      if (!moving) {
        runner.img.src = FRAMES[0];
        frameIndex = 0;
        return;
      }

      if (now - lastFrameTime < 90) {
        return;
      }

      frameIndex = (frameIndex + 1) % FRAMES.length;
      runner.img.src = FRAMES[frameIndex];
      lastFrameTime = now;
    }

    function render() {
      runner.el.style.transform = 'translate(' + state.x.toFixed(1) + 'px, ' + state.y.toFixed(1) + 'px) translate(-50%, -50%)';
      runner.el.classList.toggle('is-facing-left', state.targetX < state.x);
    }

    function tick(now) {
      if (!lastTime) {
        lastTime = now;
      }

      var delta = Math.min((now - lastTime) / 16.67, 2.2);
      var dx = state.targetX - state.x;
      var dy = state.targetY - state.y;
      var distance = Math.hypot(dx, dy);

      state.moving = distance > 4;

      if (state.moving) {
        state.x += dx * 0.11 * delta;
        state.y += dy * 0.11 * delta;
      } else {
        state.x = state.targetX;
        state.y = state.targetY;
      }

      updateFrame(now, state.moving);
      render();

      runner.el.classList.add('is-ready');
      lastTime = now;
      window.requestAnimationFrame(tick);
    }

    document.addEventListener('pointermove', function(event) {
      if (event.pointerType && event.pointerType !== 'mouse') {
        return;
      }

      updateBoundsTarget(event.clientX, event.clientY);
    }, { passive: true });

    window.addEventListener('resize', function() {
      updateBoundsTarget(state.targetX, state.targetY);
      state.x = clamp(state.x, padding, window.innerWidth - padding);
      state.y = clamp(state.y, padding, window.innerHeight - padding);
    });

    render();
    window.requestAnimationFrame(tick);
  }

  document.addEventListener('DOMContentLoaded', initMouseRunner);
})();
