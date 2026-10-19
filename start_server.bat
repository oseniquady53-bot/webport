@echo off
title DussT Official Website Server & Public Cloudflare Tunnel
echo ===================================================
echo   ENTER THE DUSST VXRSE - LOCAL & PUBLIC SERVER
echo ===================================================
echo.
cd /d "%~dp0"
echo Starting local threaded server on port 8080 (0.0.0.0)...
start "DussT Local Server" python server.py
timeout /t 2 /nobreak >nul
echo.
echo Starting Cloudflare Tunnel for worldwide access...
start "DussT Cloudflare Tunnel" "%~dp0cloudflared.exe" tunnel --url http://127.0.0.1:8080
echo.
echo ---------------------------------------------------
echo Server is running!
echo Local Phone Wi-Fi URL : http://192.168.1.111:8080
echo Local PC URL          : http://localhost:8080
echo Check the Cloudflare window for your live public URL!
echo ---------------------------------------------------
echo Keep these windows open while testing or sharing.
pause
