# 📦 课程下载流程图

```
┌─────────────────────────────────────────────────────────────┐
│                  四柱八字课程下载方式                           │
└─────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────┼───────────────┐
              │               │               │
              ▼               ▼               ▼
      ┌───────────┐   ┌───────────┐   ┌───────────┐
      │ 方法 1    │   │ 方法 2    │   │ 方法 3    │
      │ 自动打包   │   │ 直接下载   │   │ 稀疏克隆   │
      └───────────┘   └───────────┘   └───────────┘
              │               │               │
              ▼               ▼               ▼
      ┌───────────┐   ┌───────────┐   ┌───────────┐
      │git clone  │   │点击 Code  │   │git clone  │
      │cd pdfbazi │   │Download ZIP│   │--sparse   │
      │./package  │   │解压文件    │   │set scorm  │
      └───────────┘   └───────────┘   └───────────┘
              │               │               │
              └───────────────┼───────────────┘
                              │
                              ▼
              ┌───────────────────────────────┐
              │    获得课程文件 (340KB)        │
              │  - 6个学习模块                 │
              │  - 6套测验题目                 │
              │  - SCORM配置文件               │
              └───────────────────────────────┘
                              │
              ┌───────────────┼───────────────┐
              │               │               │
              ▼               ▼               ▼
      ┌───────────┐   ┌───────────┐   ┌───────────┐
      │ 使用方式1  │   │ 使用方式2  │   │ 使用方式3  │
      │ LMS系统   │   │ 本地预览   │   │ Web部署   │
      └───────────┘   └───────────┘   └───────────┘
              │               │               │
              ▼               ▼               ▼
      上传ZIP文件    启动HTTP服务器    部署到服务器
      到Moodle等     python -m http     nginx/apache
                     .server 8000
```

## 详细步骤

### 🎯 方法 1：自动打包（最推荐）

**适用于**: Linux, macOS, WSL

```bash
# 第 1 步：克隆仓库
git clone https://github.com/yutang2049/pdfbazi.git

# 第 2 步：进入目录
cd pdfbazi

# 第 3 步：运行打包脚本
./package-course.sh         # Linux/Mac
# 或
package-course.bat          # Windows

# 第 4 步：获取 ZIP 文件
# 位置：dist/四柱八字命理学课程_SCORM_YYYYMMDD.zip
```

**优点**：
- ✅ 自动化，一键完成
- ✅ 包含所有必需文件
- ✅ 文件结构正确
- ✅ 适合批量制作

---

### 💾 方法 2：直接下载（最简单）

**适用于**: 所有用户

```
第 1 步：访问 GitHub 页面
  https://github.com/yutang2049/pdfbazi
  
第 2 步：点击绿色 "Code" 按钮

第 3 步：选择 "Download ZIP"

第 4 步：解压下载的文件

第 5 步：使用 scorm/ 目录中的内容
```

**优点**：
- ✅ 无需安装 Git
- ✅ 适合不熟悉命令行的用户
- ✅ 可以获得完整仓库内容

---

### 🔍 方法 3：稀疏克隆（最高效）

**适用于**: 仅需课程文件的用户

```bash
# 仅下载 scorm 目录
git clone --depth 1 --filter=blob:none --sparse \
  https://github.com/yutang2049/pdfbazi.git

cd pdfbazi
git sparse-checkout set scorm
```

**优点**：
- ✅ 下载速度快
- ✅ 节省磁盘空间
- ✅ 只获取需要的文件

---

## 使用场景

### 📚 场景 1：企业培训/学校教学

```
推荐方法：方法 1（自动打包）
使用方式：上传到 LMS 系统

流程：
1. 运行 ./package-course.sh
2. 获得标准 SCORM ZIP 文件
3. 登录 LMS（Moodle/Blackboard/Canvas）
4. 导入 SCORM 课程包
5. 设置访问权限
6. 通知学员开始学习
```

### 💻 场景 2：个人学习

```
推荐方法：方法 2（直接下载）
使用方式：本地预览

流程：
1. 下载并解压 ZIP 文件
2. 进入 scorm 目录
3. 运行: python3 -m http.server 8000
4. 浏览器打开: http://localhost:8000/index.html
5. 开始学习
```

### 🌐 场景 3：在线发布

```
推荐方法：方法 3（稀疏克隆）
使用方式：Web 服务器部署

流程：
1. 克隆 scorm 目录到服务器
2. 配置 Nginx/Apache
3. 设置正确的 MIME 类型
4. 开放访问权限
5. 提供访问链接
```

---

## 文件清单

下载后您将获得：

```
课程文件 (20 个文件，340KB)
├── 核心文件
│   ├── index.html          - 课程首页
│   ├── imsmanifest.xml     - SCORM 配置
│   └── metadata.xml        - 课程元数据
├── 学习模块 (6 个)
│   ├── module01.html       - 干支基础知识
│   ├── module02.html       - 干支季节方位
│   ├── module03.html       - 阴阳五行通识
│   ├── module04.html       - 五行相生相克
│   ├── module05.html       - 地支合会刑冲克害
│   └── module06.html       - 合盘简析
├── 测验题目 (6 套，60 题)
│   ├── quiz01.html         - 第一章测验
│   ├── quiz02.html         - 第二章测验
│   ├── quiz03.html         - 第三章测验
│   ├── quiz04.html         - 第四章测验
│   ├── quiz05.html         - 第五章测验
│   └── quiz06.html         - 综合案例测验
├── 样式和脚本
│   ├── css/style.css       - 传统文化风格
│   ├── js/scorm_api.js     - SCORM API 接口
│   └── js/quiz.js          - 测验交互逻辑
└── 其他
    ├── completion.html     - 完成页面
    └── README.md           - 课程文档
```

---

## 快速命令参考

### Linux / macOS

```bash
# 下载并打包
git clone https://github.com/yutang2049/pdfbazi.git && cd pdfbazi && ./package-course.sh

# 本地预览
cd scorm && python3 -m http.server 8000

# 查看文件
ls -lh scorm/
```

### Windows (PowerShell)

```powershell
# 下载并打包
git clone https://github.com/yutang2049/pdfbazi.git; cd pdfbazi; .\package-course.bat

# 本地预览
cd scorm; python -m http.server 8000

# 查看文件
dir scorm
```

---

## 故障排除

### ❓ 问题：Git 未安装

**解决方案**：
- Windows: 下载 [Git for Windows](https://git-scm.com/download/win)
- Mac: 安装 Xcode Command Line Tools
- Linux: `sudo apt install git` 或 `sudo yum install git`

### ❓ 问题：打包脚本无法执行

**解决方案**：
```bash
# 赋予执行权限
chmod +x package-course.sh

# 或直接用 bash 运行
bash package-course.sh
```

### ❓ 问题：本地预览无法打开

**解决方案**：
1. 确保使用 HTTP 服务器（不要直接双击 HTML 文件）
2. 检查防火墙设置
3. 尝试其他端口：`python3 -m http.server 8080`

---

**更多帮助**: 查看 [DOWNLOAD.md](DOWNLOAD.md) 或 [提交 Issue](https://github.com/yutang2049/pdfbazi/issues)
