+++
date = '2025-10-31T22:44:56+08:00'
draft = true
title = 'Hugo博客配置&markdown语法'
[params]
  showToc = true

+++

## hugo项目结构

```
my-blog/
├── archetypes/         # 内容模板
├── assets/             # 需要 Hugo Pipes 处理的资源 (SCSS, JS)
├── content/            # Markdown 内容
├── layouts/            # 模板布局 (覆盖主题)
├── static/             # 静态文件 (图片, 字体)
├── themes/             # 主题目录
└── hugo.yaml           # 核心配置文件
```

## 快速生成并推送到github网页

### 1.Windows系统

编辑一个***deploy.ps1***文件(`.bat` 是 cmd 的脚本，而 `.ps1` 是 PowerShell 的脚本)实现自动化推送。下面示例统一使用 `main` 作为部署分支：

```C++ {title="main.py" lineNos=inline}
param (
    [string]$msg = $(Read-Host "请输入本次提交信息")
)

$deployBranch = "main"

# 先切到部署分支，确保 public/ 统一使用主分支
Set-Location F:\myblog\public
git switch $deployBranch

# 进入 Hugo 项目根目录并生成网页
Set-Location F:\myblog
hugo -D --cleanDestinationDir

# 进入 public/ 目录
Set-Location F:\myblog\public

# 添加构建产物
git add .

git diff --cached --quiet
if ($LASTEXITCODE -ne 0) {
    git commit -m "$msg"
} else {
    Write-Host "没有可提交的构建变更" -ForegroundColor Yellow
}

# 强制推送到 main 分支
git push -f origin $deployBranch

# 输出提示信息
Write-Host ""
Write-Host "======================================" -ForegroundColor Yellow
Write-Host "✅ 网站已成功部署！" -ForegroundColor Green
Write-Host "🌐 访问地址: https://blog.mineguai.com/" -ForegroundColor Cyan
Write-Host "🌿 部署分支: main" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Yellow

```

## 生成文档间链接

### 1.普通文档链接

目前只用到了相对路径

```markdown
[关于我]({{<ref "KMP.md">}} "悬停指示（标题）")
```

### 2.利用html语法多样化链接显示

```html
<a href="{{< ref "KMP.md" >}}" style="color:red;" title = "悬停指示（标题）">关于我</a>
```

## hugo“模板覆盖”规则

Hugo 会先在我们自己的站点根目录 `layouts/` 下查找模板文件，如果存在就用它，而不用 `themes/PaperMod/layouts/` 的文件（被覆盖了）。

例如：

```
themes/PaperMod/layouts/partials/head.html  # papermod主题自带
myblog/layouts/partials/head.html       # 我们自己的的覆盖文件，会优先使用
```

只要你在 `myblog/layouts/partials/` 里放同路径的文件，Hugo 就会用你自己的版本。
