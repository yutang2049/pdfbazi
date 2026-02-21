# 📊 下载方法对比

快速选择最适合您的下载方式！

## 对比表格

| 特性 | 方法1：自动打包 | 方法2：直接下载 | 方法3：稀疏克隆 |
|------|----------------|----------------|----------------|
| **适用系统** | Linux/Mac/WSL | 全平台 | Linux/Mac/WSL |
| **需要Git** | ✅ 是 | ❌ 否 | ✅ 是 |
| **技术难度** | ⭐⭐ 中等 | ⭐ 简单 | ⭐⭐⭐ 较难 |
| **下载大小** | ~2MB | ~3MB | ~1MB |
| **下载速度** | 快 | 中等 | 最快 |
| **文件结构** | 完美 | 需手动整理 | 完美 |
| **适合场景** | LMS上传 | 个人学习 | 开发/部署 |
| **ZIP格式** | ✅ 自动生成 | ⚠️ 需手动 | ⚠️ 需手动 |
| **更新方便** | ✅ git pull | ❌ 重新下载 | ✅ git pull |

## 使用场景推荐

### 🎓 企业培训 / 学校教学

**推荐：方法 1（自动打包）**

**理由**：
- ✅ 生成标准 SCORM ZIP，可直接上传 LMS
- ✅ 文件结构符合 SCORM 标准
- ✅ 适合批量制作和分发
- ✅ 可自动化流程

**命令**：
```bash
git clone https://github.com/yutang2049/pdfbazi.git
cd pdfbazi
./package-course.sh  # Linux/Mac
# 或
package-course.bat   # Windows
```

---

### 💻 个人学习 / 快速预览

**推荐：方法 2（直接下载）**

**理由**：
- ✅ 无需安装 Git
- ✅ 操作最简单
- ✅ 适合非技术用户
- ✅ 可获得完整资料（包括教材txt）

**步骤**：
1. 访问 https://github.com/yutang2049/pdfbazi
2. 点击 "Code" → "Download ZIP"
3. 解压后使用 `scorm/` 目录

---

### 🌐 Web 部署 / 在线发布

**推荐：方法 3（稀疏克隆）**

**理由**：
- ✅ 仅下载需要的 scorm 目录
- ✅ 下载速度最快
- ✅ 节省服务器空间
- ✅ 便于 Git 版本控制

**命令**：
```bash
git clone --depth 1 --filter=blob:none --sparse \
  https://github.com/yutang2049/pdfbazi.git
cd pdfbazi
git sparse-checkout set scorm
```

---

### 🔧 开发 / 二次开发

**推荐：方法 1 或 3**

**理由**：
- ✅ 保留 Git 历史，便于追踪变更
- ✅ 可使用 git pull 更新
- ✅ 支持分支和版本管理
- ✅ 便于贡献代码

---

## 详细对比

### 下载大小对比

```
方法 1：完整克隆 + 打包
├── 克隆大小：~2MB
└── ZIP 文件：76KB（压缩）

方法 2：直接下载 ZIP
└── 下载大小：~3MB（包含所有文件）

方法 3：稀疏克隆
└── 下载大小：~1MB（仅 scorm 目录）
```

### 时间消耗对比

假设网速为 10Mbps：

| 方法 | 下载时间 | 准备时间 | 总时间 |
|------|---------|---------|--------|
| 方法1 | ~2秒 | ~1秒 | **~3秒** |
| 方法2 | ~3秒 | ~0秒 | **~3秒** |
| 方法3 | ~1秒 | ~0秒 | **~1秒** |

### 磁盘占用对比

| 方法 | 磁盘占用 |
|------|----------|
| 方法1 | ~3MB（包含 Git 仓库） |
| 方法2 | ~4MB（包含所有文件） |
| 方法3 | ~2MB（仅 scorm + Git） |

---

## 特殊情况建议

### 情况 1：网络环境差

**推荐：方法 3（稀疏克隆）**
- 下载量最小
- 可断点续传
- 失败后可重试

### 情况 2：不熟悉命令行

**推荐：方法 2（直接下载）**
- 全程图形界面操作
- 无需学习 Git 命令
- 适合初学者

### 情况 3：需要频繁更新

**推荐：方法 1 或 3（Git 方式）**
- 使用 `git pull` 快速更新
- 无需重新下载所有文件
- 保留本地修改

### 情况 4：多人协作

**推荐：方法 1（完整克隆）**
- Fork 仓库后协作开发
- 提交 Pull Request
- 完整的版本历史

### 情况 5：离线环境

**推荐：方法 2（直接下载）**
- 下载一次即可离线使用
- 包含所有必需文件
- 无需网络连接

---

## 命令速查

### 快速下载（推荐新手）

```bash
# 最快的完整下载
git clone --depth 1 https://github.com/yutang2049/pdfbazi.git
cd pdfbazi
./package-course.sh
```

### 快速克隆（推荐高级用户）

```bash
# 最快的 scorm 下载
git clone --depth 1 --filter=blob:none --sparse \
  https://github.com/yutang2049/pdfbazi.git && \
cd pdfbazi && \
git sparse-checkout set scorm
```

### 快速本地预览

```bash
# 下载后立即预览
cd scorm && python3 -m http.server 8000
# 访问: http://localhost:8000/index.html
```

---

## 常见问题

### Q: 我应该选择哪个方法？

**A**: 根据您的需求选择：
- 🎓 **企业/学校** → 方法 1
- 💻 **个人学习** → 方法 2
- 🌐 **在线部署** → 方法 3

### Q: 下载后如何验证文件完整性？

**A**: 检查以下文件是否存在：
```bash
ls scorm/imsmanifest.xml  # SCORM 配置文件
ls scorm/index.html        # 课程首页
ls scorm/module*.html      # 6 个模块
ls scorm/quiz*.html        # 6 个测验
```

### Q: 可以同时使用多种方法吗？

**A**: 可以！例如：
1. 用方法2快速预览
2. 满意后用方法1生成标准ZIP
3. 用方法3部署到服务器

---

**下一步**: 选择您的方法，开始下载！

- 📖 [详细下载指南](DOWNLOAD.md)
- ⚡ [快速开始](QUICKSTART.md)
- 🔄 [下载流程图](DOWNLOAD_GUIDE.md)
