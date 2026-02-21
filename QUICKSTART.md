# 快速下载指南 ⚡

## 三步快速下载课程

### 方法 1️⃣：自动打包（Linux/Mac）
```bash
git clone https://github.com/yutang2049/pdfbazi.git
cd pdfbazi
./package-course.sh
# ZIP 文件位于: dist/四柱八字命理学课程_SCORM_*.zip
```

### 方法 2️⃣：自动打包（Windows）
```cmd
git clone https://github.com/yutang2049/pdfbazi.git
cd pdfbazi
package-course.bat
:: ZIP 文件位于: dist\四柱八字命理学课程_SCORM_*.zip
```

### 方法 3️⃣：手动下载
1. 点击页面上的绿色 **"Code"** 按钮
2. 选择 **"Download ZIP"**
3. 解压后使用 `scorm/` 目录中的内容

---

## 下载后如何使用

### 📚 上传到 LMS 学习
1. 登录 Moodle/Blackboard/Canvas
2. 选择"导入 SCORM 课程"
3. 上传 ZIP 文件（不要解压）
4. 开始学习

### 💻 本地浏览器学习
```bash
cd scorm
python3 -m http.server 8000
# 访问: http://localhost:8000/index.html
```

---

## 课程包含

- ✅ 6 个学习章节（干支基础、五行、地支等）
- ✅ 60 道测验题目（每章 10 题）
- ✅ 30+ 详细例题（含解析）
- ✅ 完整 SCORM 2004 支持
- ✅ 传统文化设计风格

**文件大小**: 仅 76KB（压缩后）/ 340KB（解压后）

---

## 需要更多帮助？

📖 查看详细文档：
- [完整下载指南](DOWNLOAD.md) - 多种下载方法和常见问题
- [课程使用文档](scorm/README.md) - SCORM 包详细说明

💬 遇到问题？
- 提交 Issue: https://github.com/yutang2049/pdfbazi/issues

---

**祝学习愉快！** 🎓
