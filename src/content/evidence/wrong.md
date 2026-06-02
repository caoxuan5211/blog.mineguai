+++
date = '2025-10-04T18:52:26+08:00'
draft = false
categories = ["wrong"]


title = 'hugo的github网页css显示失败问题'

+++

打开网页后出现异常

当时github_pages生成的网页的css加载异常，`F12`用浏览器控制台看了之后发现是SRI不匹配问题。

后来找到了这篇博客:[hugo发布css无法加载问题 | Le blog de Lz0o0](https://lizhuo.space/zh/posts/error-logs/hugo发布后仅文本显示css无法加载/)

得以解决。
