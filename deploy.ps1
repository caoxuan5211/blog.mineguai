param (
    [string]$msg = ""
)

$ErrorActionPreference = "Stop"
$root = $PSScriptRoot
$publish = Join-Path $root "public"
$dist = Join-Path $root "dist"
$deployBranch = "main"
$deployRemote = "https://github.com/caoxuan5211/blog.mineguai.git"

function Repair-GitProxyEnv {
    $proxyNames = @("https_proxy", "HTTPS_PROXY", "http_proxy", "HTTP_PROXY")
    foreach ($name in $proxyNames) {
        $value = [Environment]::GetEnvironmentVariable($name, "Process")
        if ([string]::IsNullOrWhiteSpace($value)) {
            continue
        }

        if ($value -match "^https://(127\.0\.0\.1|localhost):(\d+)/?$") {
            $fixed = "http://$($Matches[1]):$($Matches[2])"
            [Environment]::SetEnvironmentVariable($name, $fixed, "Process")
            Write-Host "Fixed $name for git: $value -> $fixed" -ForegroundColor Yellow
        }
    }
}

function Push-WithVerification {
    param (
        [string]$branch
    )

    $localHead = git rev-parse HEAD
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

    git push origin $branch
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Push failed. Retrying once without process proxy variables..." -ForegroundColor Yellow
        $savedHttpProxy = $env:http_proxy
        $savedHttpsProxy = $env:https_proxy
        $savedHttpProxyUpper = $env:HTTP_PROXY
        $savedHttpsProxyUpper = $env:HTTPS_PROXY
        $env:http_proxy = ""
        $env:https_proxy = ""
        $env:HTTP_PROXY = ""
        $env:HTTPS_PROXY = ""
        git push origin $branch
        $pushCode = $LASTEXITCODE
        $env:http_proxy = $savedHttpProxy
        $env:https_proxy = $savedHttpsProxy
        $env:HTTP_PROXY = $savedHttpProxyUpper
        $env:HTTPS_PROXY = $savedHttpsProxyUpper
        if ($pushCode -ne 0) { exit $pushCode }
    }

    $remoteHead = (git ls-remote origin "refs/heads/$branch" | ForEach-Object { ($_ -split "\s+")[0] })
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
    if ($remoteHead -ne $localHead) {
        Write-Error "Push verification failed. Local HEAD is $localHead, remote HEAD is $remoteHead"
        exit 1
    }
    Write-Host "Push verified: origin/$branch = $remoteHead" -ForegroundColor Green
}

if ([string]::IsNullOrWhiteSpace($msg)) {
    $msg = Read-Host "Commit message"
}

Repair-GitProxyEnv

Set-Location $publish
git config core.quotepath false
git config core.autocrlf false
git config core.eol lf
git remote set-url origin $deployRemote
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
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

Push-WithVerification $deployBranch

Set-Location $root

Write-Host ""
Write-Host "======================================" -ForegroundColor Yellow
Write-Host "Site deployed successfully" -ForegroundColor Green
Write-Host "URL: https://blog.mineguai.com/" -ForegroundColor Cyan
Write-Host "Branch: main" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Yellow
