#!/bin/bash
# 四柱八字课程打包脚本
# Package SCORM course into a ZIP file for distribution

set -e

# 设置变量
COURSE_NAME="四柱八字命理学课程"
OUTPUT_DIR="dist"
TIMESTAMP=$(date +%Y%m%d)
ZIP_NAME="${COURSE_NAME}_SCORM_${TIMESTAMP}.zip"

echo "======================================"
echo "  四柱八字课程打包工具"
echo "  SCORM 2004 Course Packager"
echo "======================================"
echo ""

# 检查 scorm 目录是否存在
if [ ! -d "scorm" ]; then
    echo "错误：找不到 scorm 目录"
    echo "Error: scorm directory not found"
    exit 1
fi

# 创建输出目录
mkdir -p "$OUTPUT_DIR"

echo "正在打包课程文件..."
echo "Packaging course files..."
echo ""

# 进入 scorm 目录并创建 ZIP 文件
cd scorm

# 检查必需文件
REQUIRED_FILES=("imsmanifest.xml" "index.html")
for file in "${REQUIRED_FILES[@]}"; do
    if [ ! -f "$file" ]; then
        echo "错误：缺少必需文件 $file"
        echo "Error: Required file $file not found"
        cd ..
        exit 1
    fi
done

# 创建 ZIP 文件（不包含 scorm 目录本身）
echo "创建 ZIP 文件: ../${OUTPUT_DIR}/${ZIP_NAME}"
zip -r "../${OUTPUT_DIR}/${ZIP_NAME}" . -x "*.DS_Store" "*.git*" "README.md"

cd ..

# 显示结果
if [ -f "${OUTPUT_DIR}/${ZIP_NAME}" ]; then
    FILE_SIZE=$(du -h "${OUTPUT_DIR}/${ZIP_NAME}" | cut -f1)
    echo ""
    echo "======================================"
    echo "  打包完成！"
    echo "  Packaging completed!"
    echo "======================================"
    echo ""
    echo "输出文件: ${OUTPUT_DIR}/${ZIP_NAME}"
    echo "文件大小: ${FILE_SIZE}"
    echo ""
    echo "下一步操作："
    echo "1. 将 ZIP 文件上传到您的 LMS 系统"
    echo "2. 或者解压后使用 HTTP 服务器预览"
    echo ""
    echo "Next steps:"
    echo "1. Upload the ZIP file to your LMS"
    echo "2. Or extract and preview with HTTP server"
    echo ""
else
    echo "错误：打包失败"
    echo "Error: Packaging failed"
    exit 1
fi
