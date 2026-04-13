(function() {
  'use strict';

  // 切换图标
  function flashCopyMessage(el, iconName) {
    el.innerHTML = `<i data-feather="${iconName}"></i>`;
    feather.replace(); // 更新图标
    setTimeout(function() {
      el.innerHTML = '<i data-feather="copy"></i>'; // 恢复复制图标
      feather.replace();
    }, 1000);
  }

  // 复制文本
  async function copyText(text, btn) {
    try {
      await navigator.clipboard.writeText(text);
      flashCopyMessage(btn, 'check');   // 成功图标
    } catch (e) {
      flashCopyMessage(btn, 'x');       // 失败图标
    }
  }

  // 为每个代码块添加按钮
  function addCopyButton(containerEl) {
    var copyBtn = document.createElement("button");
    copyBtn.className = "highlight-copy-btn";
    copyBtn.innerHTML = '<i data-feather="copy"></i>';

    var codeEl = containerEl.querySelector("pre code");
    if (!codeEl) return;

    copyBtn.addEventListener('click', function() {
      copyText(codeEl.innerText, copyBtn);
    });

    containerEl.style.position = "relative";
    containerEl.appendChild(copyBtn);
    feather.replace(); // 初始化图标
  }

  // 初始化所有高亮块
  function init() {
    var highlightBlocks = document.getElementsByClassName('highlight');
    Array.prototype.forEach.call(highlightBlocks, addCopyButton);
  }

  document.addEventListener("DOMContentLoaded", init);
})();