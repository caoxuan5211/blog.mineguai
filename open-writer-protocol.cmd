@echo off
setlocal
cd /d "%~dp0"
node scripts\open-writer-protocol.cjs %*
