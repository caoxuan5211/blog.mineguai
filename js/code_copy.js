(function() {
  'use strict';

  function flashCopyMessage(el, msg) {
    el.textContent = msg;
    setTimeout(function() {
      el.textContent = "Copy";
    }, 1000);
  }

  async function copyText(text, btn) {
    try {
      await navigator.clipboard.writeText(text);
      flashCopyMessage(btn, 'Copied!');
    } catch (e) {
      flashCopyMessage(btn, 'Failed :(');
    }
  }

  function addCopyButton(containerEl) {
    var copyBtn = document.createElement("button");
    copyBtn.className = "highlight-copy-btn";
    copyBtn.textContent = "Copy";

    var codeEl = containerEl.querySelector("pre code");
    if (!codeEl) return;

    copyBtn.addEventListener('click', function() {
      copyText(codeEl.innerText, copyBtn);
    });

    containerEl.style.position = "relative";
    containerEl.appendChild(copyBtn);
  }

  var highlightBlocks = document.getElementsByClassName('highlight');
  Array.prototype.forEach.call(highlightBlocks, addCopyButton);
})();
