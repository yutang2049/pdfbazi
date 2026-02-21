# 📥 课程下载指南

## 如何下载四柱八字命理学完整课程

本指南将帮助您下载并使用完整的四柱八字命理学 SCORM 课程包。

---

## 方法一：下载 ZIP 压缩包（推荐）

### 步骤 1：自动打包课程

我们提供了一键打包脚本，可以将所有课程文件打包成标准的 SCORM ZIP 文件。

#### 在 Linux/Mac 系统上：

```bash
# 1. 克隆仓库
git clone https://github.com/yutang2049/pdfbazi.git
cd pdfbazi

# 2. 运行打包脚本
./package-course.sh

# 3. 打包完成后，文件位于 dist/ 目录
# 例如：dist/四柱八字命理学课程_SCORM_20260221.zip
```

#### 在 Windows 系统上：

```powershell
# 1. 克隆仓库
git clone https://github.com/yutang2049/pdfbazi.git
cd pdfbazi

# 2. 手动创建 ZIP 文件
# 方法 A：使用 PowerShell
Compress-Archive -Path scorm\* -DestinationPath dist\四柱八字课程.zip

# 方法 B：使用文件管理器
# - 进入 scorm 目录
# - 选择所有文件（Ctrl+A）
# - 右键 -> 发送到 -> 压缩(zipped)文件夹
```

### 步骤 2：获取 ZIP 文件

打包完成后，您将得到一个 ZIP 文件，包含：

- ✅ 所有 6 个学习模块（HTML 格式）
- ✅ 所有 6 套测验题目
- ✅ SCORM 配置文件（imsmanifest.xml）
- ✅ 样式表和 JavaScript 文件
- ✅ 课程首页和完成页面

**文件大小**：约 340KB（非常小巧！）

---

## 方法二：直接从 GitHub 下载

### 选项 A：下载整个仓库

1. 访问：https://github.com/yutang2049/pdfbazi
2. 点击绿色的 **"Code"** 按钮
3. 选择 **"Download ZIP"**
4. 下载完成后解压，课程文件位于 `scorm/` 目录

### 选项 B：仅下载 scorm 目录

```bash
# 使用 GitHub CLI（需要先安装 gh）
gh repo clone yutang2049/pdfbazi -- --depth=1 --single-branch
cd pdfbazi/scorm
```

或者使用 sparse checkout（仅下载特定目录）：

```bash
git clone --depth 1 --filter=blob:none --sparse https://github.com/yutang2049/pdfbazi.git
cd pdfbazi
git sparse-checkout set scorm
```

---

## 方法三：从 GitHub Release 下载（推荐给非技术用户）

如果仓库提供了 Release 版本：

1. 访问：https://github.com/yutang2049/pdfbazi/releases
2. 找到最新版本（如 v1.0）
3. 下载 `四柱八字课程_SCORM.zip`
4. 直接使用，无需任何配置

> **注意**：Release 版本可能还未创建，请使用方法一或方法二。

---

## 📦 下载后的使用方法

### 用途 1：上传到 LMS 学习管理系统

适用于：Moodle、Blackboard、Canvas、TalentLMS 等

**步骤**：

1. 登录您的 LMS 系统
2. 找到"导入 SCORM 课程"或"上传内容包"功能
3. 上传 ZIP 文件（不要解压）
4. 系统会自动识别并安装课程
5. 发布课程供学员学习

**支持的 LMS 系统**：
- ✅ Moodle 3.5+
- ✅ Blackboard Learn
- ✅ Canvas LMS
- ✅ TalentLMS
- ✅ 所有支持 SCORM 2004 标准的系统

### 用途 2：本地预览学习

如果您没有 LMS 系统，也可以在本地浏览器中学习：

**方法 A：使用 Python（推荐）**

```bash
# 1. 解压 ZIP 文件
unzip 四柱八字课程.zip -d course

# 2. 进入课程目录
cd course

# 3. 启动本地服务器
python3 -m http.server 8000

# 4. 打开浏览器访问
# http://localhost:8000/index.html
```

**方法 B：使用 Node.js**

```bash
# 1. 安装 http-server（仅首次）
npm install -g http-server

# 2. 解压并进入课程目录
unzip 四柱八字课程.zip -d course
cd course

# 3. 启动服务器
http-server -p 8000

# 4. 打开浏览器访问
# http://localhost:8000/index.html
```

**方法 C：直接用浏览器打开（不推荐）**

某些浏览器出于安全考虑可能会阻止本地文件的 JavaScript 运行，建议使用上述 HTTP 服务器方法。

---

## 📂 课程文件说明

下载的课程包包含以下文件：

```
四柱八字课程/
├── index.html              # 课程首页（从这里开始）
├── completion.html         # 完成页面
├── imsmanifest.xml        # SCORM 配置（LMS 需要）
├── metadata.xml           # 课程元数据
├── css/
│   └── style.css          # 课程样式
├── js/
│   ├── scorm_api.js       # SCORM API
│   └── quiz.js            # 测验功能
├── module01-06.html       # 6 个学习章节
└── quiz01-06.html         # 6 套测验题
```

**学习顺序建议**：

1. 📖 index.html → 课程首页
2. 📚 module01.html → 第一章
3. ✏️ quiz01.html → 第一章测验
4. 📚 module02.html → 第二章
5. ✏️ quiz02.html → 第二章测验
6. ... 以此类推
7. 🎉 completion.html → 完成页面

---

## 🔧 常见问题

### Q1：为什么下载的文件这么小？

**A**：我们的课程包经过精心优化：
- 不包含大型图片或视频
- 纯文本和代码内容
- 使用内联样式和脚本
- 总大小仅约 340KB

### Q2：需要安装什么软件才能学习？

**A**：仅需要以下之一：
- 任何现代浏览器（Chrome、Firefox、Edge、Safari）
- 或者一个支持 SCORM 2004 的 LMS 系统

不需要：
- ❌ 不需要安装特殊软件
- ❌ 不需要网络连接（下载后可离线学习）
- ❌ 不需要数据库

### Q3：如何在手机或平板上学习？

**A**：课程支持响应式设计，可以在移动设备上学习：
1. 将 ZIP 文件上传到支持移动访问的 LMS
2. 或者使用移动设备浏览器访问本地服务器
3. 推荐使用平板或电脑以获得最佳体验

### Q4：下载后没有网络也能学习吗？

**A**：可以！课程所有资源都在本地，无需网络连接。唯一需要网络的场景是：
- 上传到在线 LMS 系统时
- 首次下载课程时

### Q5：可以修改课程内容吗？

**A**：可以！所有文件都是标准的 HTML/CSS/JavaScript：
1. 解压 ZIP 文件
2. 使用文本编辑器（VS Code、Sublime Text 等）编辑
3. 修改后重新打包（使用 package-course.sh）
4. 上传到 LMS 或本地预览

### Q6：如何分享给其他人？

**A**：您可以：
- 📧 通过邮件发送 ZIP 文件
- ☁️ 上传到云盘（百度网盘、OneDrive 等）分享链接
- 🌐 部署到 Web 服务器供他人访问
- 🎓 在您的 LMS 系统中为他人开放访问权限

### Q7：ZIP 文件无法上传到 LMS？

**A**：检查以下几点：
1. 确保 ZIP 文件包含 `imsmanifest.xml`（必需）
2. 确认 LMS 支持 SCORM 2004（而非仅支持 SCORM 1.2）
3. 检查 LMS 的文件大小限制（本课程仅 340KB，一般不会超限）
4. 确保 ZIP 文件的根目录直接包含课程文件，而非嵌套文件夹

---

## 💡 学习建议

### 推荐学习路径：

1. **第一周**：学习第 1-2 章，完成对应测验
2. **第二周**：学习第 3-4 章，完成对应测验
3. **第三周**：学习第 5-6 章，完成对应测验
4. **第四周**：复习所有内容，重做所有测验

### 学习技巧：

- ✅ 每章学完立即做测验，趁热打铁
- ✅ 错题要认真看解析，理解为什么错
- ✅ 结合实际案例练习（课程提供 30+ 例题）
- ✅ 制作知识卡片或思维导图
- ✅ 定期复习，避免遗忘

---

## 📞 技术支持

如有问题，请：

1. 查看 `scorm/README.md` 获取详细文档
2. 访问 https://github.com/yutang2049/pdfbazi/issues 提交问题
3. 查看课程首页的"学习建议"部分

---

## 📄 版权说明

- 课程内容基于《四柱八字.txt》教材
- 遵循 SCORM 2004 第三版标准
- 供个人学习使用
- 商业用途请联系作者

---

## 🎓 祝学习顺利！

八字命理博大精深，希望本课程能帮助您入门并逐步掌握这门传统学问。

**开始学习**：下载课程 → 打开 index.html → 开启命理学习之旅！

---

*最后更新：2026-02-21*
