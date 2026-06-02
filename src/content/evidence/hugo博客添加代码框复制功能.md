+++
date = '2025-11-07T19:35:23+08:00'
draft = true
title = 'Hugo博客添加代码框复制功能'
tags= ["博客搭建问题"]

+++

由于鼠标拖动复制代码有点费力，我打算给每个代码块添加一个复制按钮（学学大佬orz ）。

经过长时间的搜索学习，我终于加上了（win）。

话不多说。

## 构建

首先，我们要清楚一点，hugo-papermod本身是不包含代码复制按钮功能的。

所以，我们要自己写，包括写css和js，同时要修改hugo的相关配置。

## 步骤

### 1.写css/js文件

- **static\css\extended\code-copy.css**(注意不要写错地方了，当然放在assests/css里面也未尝不可，但是相应的要修改一些文件，本人懒得搞了=-=)

  ```css
  .highlight-copy-btn {
      position: absolute;
      top: 7px;
      right: 7px;
      border: 0;
      border-radius: 4px;
      width: 28px;           /* 固定按钮大小 */
      height: 28px;
      background-color: #777;
      color: #fff;
      display: flex;         /* flex 布局 */
      align-items: center;   /* 垂直居中 */
      justify-content: center; /* 水平居中 */
      cursor: pointer;
      padding: 0;            /* 去掉多余 padding */
  }
  
  .highlight-copy-btn:hover {
      background-color: #666;
  }
  
  /* 控制 svg 图标大小 */
  .highlight-copy-btn i svg {
      width: 16px;
      height: 16px;
      display: block;        /* 避免 inline 导致偏上 */
  }
  
  ```

  

- **static\js\code-copy.js**

  ```js
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
  ```

### 2.修改配置文件

**1.** 把`themes\PaperMod\layouts\partials\head.html`拷贝一份到`layouts\partials\head.html`然后修改后者（[模板覆盖规则]({{<ref "hugo博客配置&markdown语法.md">}} "悬停指示（标题）")）：

在文件结尾添加

  ```html
  {{ range .Site.Params.assets.customCSS }}
    <link rel="stylesheet" href="{{ . | absURL }}">
  {{- end }}
  
  {{ range .Site.Params.assets.customJS }}
    <script type="text/javascript" src="{{ . | absURL }}" defer></script>
  {{- end }}
  
  {{ range $elem := .Site.Params.assets.customjscssraw }}
    {{ $elem | safeHTML }}
  {{- end }}
  
  ```

  **2.** 与之对应的要修改`hugo.toml`：

添加

  ```toml
  [params.assets]
      customCSS = ["css/extended/code-copy.css","css/extended/custom-fonts.css"]
      customJS = ["js/code-copy.js"]
      customjscssraw = [
        "<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/all.min.css' integrity='sha256-2H3fkXt6FEmrReK448mDVGKb3WW2ZZw35gI7vqHOE4Y=' crossorigin='anonymous'>",
        "<script src='https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js'></script>"
      ] #图标库链接
  ```

  这两步其实是实现了：你在`hugo.toml`里面直接添加文件比如`css/extended/code-copy.css`（如上代码），对应的`head.html`里面添加的代码可以利用`range.Site.Params.assets.customJS`对配置中的文件进行链接。感觉其实相当于简化操作，就是原来我们需要在`head.html`里面手动添加\<*link*\>，\<*script*\>等，但是这样操作后我们只需要把css等相对于static的文件路径直接写入明面上的`hugo.toml`配置文件就好了。

  另外，最后的图标库链接可以用自己喜欢的，我只添加了两个用的第二种（当然如果更换图标库js对应的使用代码也要修改，css也要相应调整）。

  这样就实现代码块复制按钮的添加了。

## 思考

如果直接把css和js放在assets里面好像需要用到Hugo 的 **资源管道（Hugo Pipes）**，我没用。

## 参考

[(6 封私信) Hugo添加自定义css和javascript - 知乎](https://zhuanlan.zhihu.com/p/442553846)

[你可真是个大帅哥](https://huuuuuuo.github.io/post/hugo插件之代码块拷贝插件/)
