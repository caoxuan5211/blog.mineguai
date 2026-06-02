param (
    [string]$msg = ""
)

$ErrorActionPreference = "Stop"
$root = "F:\myblog"
$publish = Join-Path $root "public"
$dist = Join-Path $root "dist"
$deployBranch = "main"

if ([string]::IsNullOrWhiteSpace($msg)) {
    $msg = Read-Host "Commit message"
}

Set-Location $publish
git config core.quotepath false
git config core.autocrlf false
git config core.eol lf
git switch $deployBranch
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Set-Location $root
npm run build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

if (-not (Test-Path $dist)) {
    Write-Error "dist 目录不存在，构建失败"
    exit 1
}

Get-ChildItem -LiteralPath $publish -Force |
    Where-Object { $_.Name -ne ".git" } |
    Remove-Item -Recurse -Force

Copy-Item -Path (Join-Path $dist "*") -Destination $publish -Recurse -Force

Set-Location $publish
git add .

git diff --cached --quiet
if ($LASTEXITCODE -ne 0) {
    git commit -m "$msg"
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
} else {
    Write-Host "No build changes to commit" -ForegroundColor Yellow
}

git push -f origin $deployBranch
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Set-Location $root

Write-Host ""
Write-Host "======================================" -ForegroundColor Yellow
Write-Host "Site deployed successfully" -ForegroundColor Green
Write-Host "URL: https://blog.mineguai.com/" -ForegroundColor Cyan
Write-Host "Branch: main" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Yellow
