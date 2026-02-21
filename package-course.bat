@echo off
REM 四柱八字课程打包脚本 (Windows 版本)
REM Package SCORM course into a ZIP file for distribution

setlocal enabledelayedexpansion

echo ======================================
echo   四柱八字课程打包工具
echo   SCORM 2004 Course Packager
echo ======================================
echo.

REM 设置变量
set "COURSE_NAME=四柱八字命理学课程"
set "OUTPUT_DIR=dist"
for /f "tokens=2-4 delims=/ " %%a in ('date /t') do (set TODAY=%%c%%a%%b)
set "ZIP_NAME=%COURSE_NAME%_SCORM_%TODAY%.zip"

REM 检查 scorm 目录是否存在
if not exist "scorm" (
    echo 错误：找不到 scorm 目录
    echo Error: scorm directory not found
    pause
    exit /b 1
)

REM 创建输出目录
if not exist "%OUTPUT_DIR%" mkdir "%OUTPUT_DIR%"

echo 正在打包课程文件...
echo Packaging course files...
echo.

REM 检查必需文件
if not exist "scorm\imsmanifest.xml" (
    echo 错误：缺少必需文件 imsmanifest.xml
    echo Error: Required file imsmanifest.xml not found
    pause
    exit /b 1
)

if not exist "scorm\index.html" (
    echo 错误：缺少必需文件 index.html
    echo Error: Required file index.html not found
    pause
    exit /b 1
)

REM 检查 PowerShell 是否可用
where powershell >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo 错误：需要 PowerShell 来创建 ZIP 文件
    echo Error: PowerShell is required to create ZIP file
    pause
    exit /b 1
)

REM 使用 PowerShell 创建 ZIP 文件
echo 创建 ZIP 文件: %OUTPUT_DIR%\%ZIP_NAME%
powershell -Command "Compress-Archive -Path 'scorm\*' -DestinationPath '%OUTPUT_DIR%\%ZIP_NAME%' -Force"

if exist "%OUTPUT_DIR%\%ZIP_NAME%" (
    echo.
    echo ======================================
    echo   打包完成！
    echo   Packaging completed!
    echo ======================================
    echo.
    echo 输出文件: %OUTPUT_DIR%\%ZIP_NAME%
    for %%A in ("%OUTPUT_DIR%\%ZIP_NAME%") do echo 文件大小: %%~zA 字节
    echo.
    echo 下一步操作：
    echo 1. 将 ZIP 文件上传到您的 LMS 系统
    echo 2. 或者解压后使用 HTTP 服务器预览
    echo.
    echo Next steps:
    echo 1. Upload the ZIP file to your LMS
    echo 2. Or extract and preview with HTTP server
    echo.
) else (
    echo 错误：打包失败
    echo Error: Packaging failed
    pause
    exit /b 1
)

pause
