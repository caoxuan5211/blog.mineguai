$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$launcher = Join-Path $root "open-writer-protocol.vbs"

if (-not (Test-Path $launcher)) {
    throw "找不到协议启动器：$launcher"
}

$protocolKey = "HKCU:\Software\Classes\guai-blog"
$commandKey = Join-Path $protocolKey "shell\open\command"
$command = "wscript.exe `"$launcher`" `"%1`""

New-Item -Path $protocolKey -Force | Out-Null
New-ItemProperty -Path $protocolKey -Name "(default)" -Value "URL:Guai Blog Writer" -PropertyType String -Force | Out-Null
New-ItemProperty -Path $protocolKey -Name "URL Protocol" -Value "" -PropertyType String -Force | Out-Null
New-Item -Path $commandKey -Force | Out-Null
New-ItemProperty -Path $commandKey -Name "(default)" -Value $command -PropertyType String -Force | Out-Null

Write-Host "已注册 guai-blog:// 协议" -ForegroundColor Green
Write-Host "启动器：$launcher" -ForegroundColor Cyan
