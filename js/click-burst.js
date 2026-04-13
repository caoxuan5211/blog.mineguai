(function() {
  'use strict';

  var FALLBACK_ICONS = ['/1.png'];
  var SUPPORTED_ICONS = (window.mineguaiClickBurstIcons || []).length
    ? window.mineguaiClickBurstIcons
    : FALLBACK_ICONS;

  function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }

  function pickRandomIcon() {
    return SUPPORTED_ICONS[Math.floor(Math.random() * SUPPORTED_ICONS.length)];
  }

  function removeOnAnimationEnd(node) {
    node.addEventListener('animationend', function() {
      node.remove();
    }, { once: true });
  }

  function createRing(x, y) {
    var ring = document.createElement('span');
    ring.className = 'click-burst-ring';
    ring.style.left = x + 'px';
    ring.style.top = y + 'px';
    document.body.appendChild(ring);
    removeOnAnimationEnd(ring);
  }

  function createParticle(x, y, index, total) {
    var particle = document.createElement('img');
    var angle = ((Math.PI * 2) / total) * index + randomBetween(-0.28, 0.28);
    var distance = randomBetween(48, 124);
    var lift = randomBetween(14, 42);
    var deltaX = Math.cos(angle) * distance;
    var deltaY = Math.sin(angle) * distance - lift;

    particle.className = 'click-burst-particle';
    particle.src = pickRandomIcon();
    particle.alt = '';
    particle.decoding = 'async';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.setProperty('--burst-size', randomBetween(18, 34).toFixed(0) + 'px');
    particle.style.setProperty('--burst-x', deltaX.toFixed(2) + 'px');
    particle.style.setProperty('--burst-y', deltaY.toFixed(2) + 'px');
    particle.style.setProperty('--burst-rotate', randomBetween(-140, 140).toFixed(0) + 'deg');
    particle.style.setProperty('--burst-scale', randomBetween(0.86, 1.22).toFixed(2));
    particle.style.setProperty('--burst-duration', randomBetween(760, 1040).toFixed(0) + 'ms');

    document.body.appendChild(particle);
    removeOnAnimationEnd(particle);
  }

  function spawnBurst(x, y) {
    var total = Math.round(randomBetween(8, 12));
    createRing(x, y);

    for (var i = 0; i < total; i += 1) {
      createParticle(x, y, i, total);
    }
  }

  function shouldIgnoreEvent(event) {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return true;
    }

    if (event.pointerType === 'mouse' && event.button !== 0) {
      return true;
    }

    return !!(event.target && event.target.closest && event.target.closest('[data-click-burst-ignore]'));
  }

  function initClickBurst() {
    document.addEventListener('pointerdown', function(event) {
      if (shouldIgnoreEvent(event)) {
        return;
      }

      spawnBurst(event.clientX, event.clientY);
    }, { passive: true });
  }

  document.addEventListener('DOMContentLoaded', initClickBurst);
})();
