# 📥 直接下载链接

<div align="center">

## 🎯 立即下载完整课程

[![下载课程](https://img.shields.io/badge/下载-完整课程包-brightgreen?style=for-the-badge&logo=download)](https://github.com/yutang2049/pdfbazi/archive/refs/heads/copilot/generate-scorm-course-package.zip)
[![查看仓库](https://img.shields.io/badge/GitHub-仓库-blue?style=for-the-badge&logo=github)](https://github.com/yutang2049/pdfbazi)
[![文档](https://img.shields.io/badge/阅读-文档-orange?style=for-the-badge&logo=readme)](README.md)

**文件大小**: 约 3MB (完整仓库) | 340KB (仅课程)  
**包含内容**: 6 章节 + 60 测验题 + SCORM 2004 支持

</div>

---

## ⚡ 快速下载（推荐）

点击下面的链接立即下载完整的 SCORM 2004 课程包：

---

## 🔗 下载方式

### 方式 1：下载预打包的 ZIP 文件

**直接下载地址：**

1. **GitHub Release 下载**（推荐）
   - 访问：https://github.com/yutang2049/pdfbazi/releases
   - 下载最新版本的 `四柱八字课程_SCORM.zip`
   - 文件大小：约 76KB

2. **直接从仓库下载**
   ```
   https://github.com/yutang2049/pdfbazi/archive/refs/heads/main.zip
   ```
   - 下载整个仓库的 ZIP 文件
   - 解压后使用 `scorm/` 目录
   - 文件大小：约 3MB

### 方式 2：使用 Git 命令下载

```bash
# 克隆仓库
git clone https://github.com/yutang2049/pdfbazi.git

# 进入目录
cd pdfbazi

# 自动打包成 SCORM ZIP
./package-course.sh  # Linux/Mac
# 或
package-course.bat   # Windows

# 获取打包文件
# 位置：dist/四柱八字命理学课程_SCORM_*.zip
```

### 方式 3：仅下载课程文件

```bash
# 稀疏克隆（最快）
git clone --depth 1 --filter=blob:none --sparse \
  https://github.com/yutang2049/pdfbazi.git
cd pdfbazi
git sparse-checkout set scorm
```

---

## 📦 下载内容

下载后您将获得：

- ✅ **6 个学习模块**（HTML 格式）
  - module01.html - 干支基础知识
  - module02.html - 干支季节方位
  - module03.html - 阴阳五行通识
  - module04.html - 五行相生相克
  - module05.html - 地支合会刑冲克害
  - module06.html - 合盘简析

- ✅ **6 套测验题目**（60 题）
  - quiz01-06.html - 每章 10 道题

- ✅ **SCORM 配置文件**
  - imsmanifest.xml - SCORM manifest
  - metadata.xml - 课程元数据

- ✅ **样式和脚本**
  - css/style.css - 传统文化风格
  - js/scorm_api.js - SCORM API
  - js/quiz.js - 测验引擎

- ✅ **其他页面**
  - index.html - 课程首页
  - completion.html - 完成页面

**总大小**：340KB（解压后）/ 76KB（压缩后）

---

## 🚀 下载后使用方法

### 📚 方法 A：上传到 LMS 系统

1. 下载 ZIP 文件（不要解压）
2. 登录您的 LMS（Moodle、Blackboard、Canvas等）
3. 选择"导入 SCORM 课程"或"上传内容包"
4. 上传 ZIP 文件
5. 发布课程

### 💻 方法 B：本地浏览器学习

```bash
# 解压 ZIP 文件
unzip 四柱八字课程.zip -d course

# 进入目录
cd course

# 启动 HTTP 服务器
python3 -m http.server 8000

# 打开浏览器
# 访问: http://localhost:8000/index.html
```

---

## 🌐 在线预览

如果您想在下载前预览课程，可以：

1. 访问 GitHub 仓库：https://github.com/yutang2049/pdfbazi
2. 进入 `scorm/` 目录
3. 点击 `index.html` 查看（GitHub 会渲染 HTML）

**注意**：GitHub 预览功能有限，建议下载后使用完整功能。

---

## 📞 需要帮助？

### 下载问题

**Q: 点击链接无法下载？**
- A: 右键点击链接 → "另存为" / "Save Link As"

**Q: 下载速度慢？**
- A: 使用方式 3（稀疏克隆）或等待非高峰时段

**Q: ZIP 文件损坏？**
- A: 重新下载，确保下载完整

### 使用问题

**Q: 如何确认下载完整？**
- A: 检查 ZIP 文件大小应为 76KB 左右
- A: 解压后应包含 20 个文件

**Q: 如何验证文件？**
```bash
# 查看 ZIP 内容
unzip -l 四柱八字课程.zip

# 应该看到：
# - imsmanifest.xml
# - 6 个 module*.html
# - 6 个 quiz*.html
# - css/ 和 js/ 目录
```

---

## 🔄 更新和版本

### 获取最新版本

```bash
# 如果已克隆仓库
cd pdfbazi
git pull origin main
./package-course.sh
```

### 版本历史

- **v1.0** (2026-02-21)
  - 初始版本发布
  - 包含 6 章内容
  - 60 道测验题目
  - 完整 SCORM 2004 支持

---

## 📚 相关文档

- [README.md](README.md) - 主文档
- [DOWNLOAD.md](DOWNLOAD.md) - 详细下载指南
- [QUICKSTART.md](QUICKSTART.md) - 快速开始
- [COMPARISON.md](COMPARISON.md) - 方法对比

---

## 💡 推荐下载方式

| 用户类型 | 推荐方式 | 原因 |
|---------|---------|------|
| **企业/培训机构** | 方式 1 - Release | 最稳定，适合 LMS |
| **个人学习** | 方式 1 - 仓库 ZIP | 最简单，无需 Git |
| **开发者** | 方式 2 - Git 克隆 | 可自动打包，便于更新 |
| **服务器部署** | 方式 3 - 稀疏克隆 | 最快，节省空间 |

---

**立即开始**：选择一种方式，开始下载和学习！ 🎓

**GitHub 仓库**：https://github.com/yutang2049/pdfbazi
