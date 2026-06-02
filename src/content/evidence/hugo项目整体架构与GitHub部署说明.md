+++
date = '2026-04-25T00:00:00+08:00'
draft = true
title = 'Hugo项目整体架构与GitHub部署说明'
[params]
  showToc = true

+++

## 先说结论

这个博客能部署到 GitHub，不只是因为“用了 Hugo”，更关键是**项目架构从一开始就把“源码”和“构建产物”拆开了**：

1. `F:\myblog` 是 Hugo 源码仓库，负责写文章、配主题、改模板。
2. `F:\myblog\public` 是 Hugo 生成后的静态站点目录，同时它又是一个**独立 Git 仓库**。
3. `public` 的远程仓库指向 `https://github.com/caoxuan5211/caoxuan5211.github.io.git`。
4. 执行 `deploy.ps1` 时，Hugo 先把页面生成到 `public/`，再把 `public/` 里的静态文件推到 GitHub Pages 仓库。

所以，确实可以说：**是架构决定了部署方式**。  
Hugo 只负责“生成静态文件”，而“怎么上传到 GitHub”是当前这个仓库结构和脚本流程决定的。

## 当前项目的整体结构

结合这个仓库，核心目录可以这样理解：

```text
F:\myblog
├── content/           # Markdown 文章内容
├── layouts/           # 对主题模板的覆盖
├── static/            # 原样复制到网站根目录的静态资源
├── assets/            # 需要 Hugo 处理的资源
├── themes/PaperMod/   # 主题（当前是 Git submodule）
├── hugo.toml          # Hugo 主配置
├── deploy.ps1         # 本地一键部署脚本
└── public/            # Hugo 构建输出目录，同时是独立 Git 仓库
```

这里最关键的是最后一行：

```text
public = 构建产物目录 + GitHub Pages 发布仓库
```

这就是整个发布链路的核心设计。

## 这一套架构是怎么工作的

### 1. 内容层：`content/`

你平时写的文章都在 `content/` 下面，比如：

```text
content/blog/
content/posts/
```

这些文件本质上只是 Markdown + Front Matter。  
Hugo 不会把它们原样发到 GitHub，而是会把它们解析后生成 HTML。

### 2. 表现层：主题 + 模板覆盖

当前配置里：

```toml
theme = 'PaperMod'
```

主题在 `themes/PaperMod/`，而且从 `.gitmodules` 可以看出它是一个 Git submodule。  
这表示：

- 主题本身独立维护
- 你的博客仓库只引用它
- 如果你要自定义主题，不一定直接改主题源码，也可以用 `layouts/` 覆盖主题模板

也就是说，这个站点的页面结构不是写死在文章里的，而是：

```text
Markdown 内容
    + Hugo 渲染规则
    + PaperMod 主题模板
    + 你的自定义 layouts/static/assets
    = 最终静态页面
```

### 3. 配置层：`hugo.toml`

`hugo.toml` 决定了站点的全局行为。当前仓库里比较关键的配置有：

- `baseURL = 'https://blog.mineguai.com/'`
- `theme = 'PaperMod'`
- `home = ["HTML", "RSS", "JSON"]`
- 自定义 CSS / JS 通过 `[params.assets]` 注入
- 搜索页依赖 `JSON` 输出和 `fuseOpts`

这里可以看出一件事：  
**Hugo 配置决定“生成什么样的站点”，但不决定“怎么发布到 GitHub”。**

### 4. 构建层：`hugo`

部署脚本里这一句最关键：

```powershell
hugo -D --cleanDestinationDir
```

它做了两件事：

1. 把整个站点重新构建到 `public/`
2. 清理旧的构建产物，避免残留文件

生成后，`public/` 里面就不再是 Markdown，而是：

- `index.html`
- `404.html`
- `index.xml`
- `index.json`
- 各文章目录下的 `index.html`
- CSS / JS / 图片等静态资源

所以从 GitHub Pages 的视角看，它根本不关心 Hugo。  
GitHub Pages 看到的只是一个普通静态网站目录。

## 为什么说“是架构决定部署方式”

因为 GitHub Pages 只认两种东西：

1. 一个仓库里的静态文件
2. 一个可发布的分支/目录

而你当前项目采用的是这类架构：

```text
源码仓库（myblog）
    ↓ 运行 hugo
生成静态文件（public）
    ↓ git push
GitHub Pages 仓库（caoxuan5211.github.io）
    ↓
blog.mineguai.com
```

这里真正决定部署方式的，不是 Markdown，也不是主题，而是下面这几个架构选择：

### 架构选择 1：源码与产物分离

`F:\myblog` 保存源代码，`F:\myblog\public` 保存构建结果。  
这样做的好处是：

- 源仓库更干净，不把大量生成文件混在源码里
- 发布逻辑清晰，`public/` 就是“待上线结果”
- 出问题时容易判断：是“渲染问题”还是“发布问题”

### 架构选择 2：`public/` 自己就是 Git 仓库

这一步特别关键。  
如果 `public/` 只是普通文件夹，那它只能当本地输出目录；  
但当它本身也是一个独立仓库时，它就可以直接承担“发布仓库”的角色。

这就是为什么 `deploy.ps1` 会先：

```powershell
Set-Location F:\myblog\public
git switch main
```

然后再：

```powershell
git add .
git commit -m "$msg"
git push -f origin main
```

这已经不是 Hugo 的行为了，而是标准 Git 发布流程。

### 架构选择 3：GitHub Pages 仓库单独承载静态站点

`public/.git/config` 里可以看到远程仓库：

```text
https://github.com/caoxuan5211/caoxuan5211.github.io.git
```

这意味着部署目标不是当前源码仓库，而是专门用于 Pages 的仓库。  
这样做的好处：

- 页面仓库保持纯静态文件，最适合 GitHub Pages
- Hugo 源码仓库和线上站点解耦
- 可以随时换发布方式，而不必改内容组织方式

### 架构选择 4：自定义域名通过 `CNAME` 绑定

`public/CNAME` 里是：

```text
blog.mineguai.com
```

这说明 GitHub Pages 部署完成后，最终是通过自定义域名访问。  
所以完整链路其实是：

```text
Hugo 源文件
→ 生成 public 静态站点
→ push 到 GitHub Pages 仓库
→ GitHub Pages 提供静态托管
→ CNAME 绑定到 blog.mineguai.com
```

## `deploy.ps1` 在这套架构中的角色

`deploy.ps1` 本质上是“把架构串起来”的自动化脚本。它不是简单执行一个命令，而是在串联四个阶段：

### 阶段 1：进入发布仓库

```powershell
Set-Location F:\myblog\public
git switch $deployBranch
```

目的：确保 `public/` 当前位于要发布的分支。

### 阶段 2：从 Hugo 源码重新生成站点

```powershell
Set-Location F:\myblog
hugo -D --cleanDestinationDir
```

目的：从 `content/ + theme + layouts + static + assets + hugo.toml` 重新生成完整静态站点。

### 阶段 3：提交构建结果

```powershell
Set-Location F:\myblog\public
git add .
git commit -m "$msg"
```

目的：把这次构建结果作为一次独立发布记录保存下来。

### 阶段 4：推送到 GitHub

```powershell
git push -f origin $deployBranch
```

目的：把最新静态站点强制推送到 GitHub Pages 仓库。

注意这里用了 `-f`，说明当前发布策略更偏向“**以本地最新构建结果覆盖线上内容**”。  
这也是架构选择的一部分：线上仓库不是协作开发仓库，而是发布产物仓库。

## 这套方式和 GitHub Actions 自动部署有什么区别

你现在这套不是“GitHub 自动构建”，而是“本地构建 + 推送产物”。

区别可以概括为：

### 当前方式：本地构建后推送 `public/`

优点：

- 本地结果可控，看到什么就发布什么
- Hugo 版本、主题效果、构建参数都由本机控制
- 逻辑直观，出错位置容易定位

缺点：

- 必须在本地执行部署
- 换机器部署时要重配环境
- `public/` 仓库和源仓库要一起维护

### 另一种方式：源码 push 后由 GitHub Actions 构建

优点：

- 不依赖本地环境
- 提交源码后可自动发布
- 不需要把 `public/` 当独立仓库维护

缺点：

- 要额外维护 CI 配置
- 构建失败时排查链路更长
- 主题、子模块、Hugo 版本都要在 CI 里明确配置

所以不是说哪种更“正确”，而是不同架构会导向不同部署方式。  
你现在这套架构，天然更适合**本地构建、独立产物仓库、手动脚本发布**。

## 用一句话理解这套项目

这个 Hugo 博客项目，本质上分成两层：

```text
上层：写内容、配主题、改模板（源码层）
下层：生成 HTML/CSS/JS 并发布到 GitHub Pages（产物层）
```

而 `public/` 这个独立 Git 仓库，就是连接这两层的桥。

## 适合你当前项目的理解方式

如果以后你再看这个仓库，最实用的理解不是“这是一个 Hugo 项目”，而是：

```text
这是一个：
用 Hugo 生成静态页面、
用 PaperMod 负责展示、
用 content 管内容、
用 layouts/static/assets 做定制、
用 public 作为发布产物仓库、
再通过 deploy.ps1 推送到 GitHub Pages 的博客系统。
```

这样你以后想改部署方式、换主题、拆仓库、迁移到 Actions，思路都会更清楚。
