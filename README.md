# 四柱八字命理学完整课程 📚

本仓库提供完整的四柱八字命理学 SCORM 2004 在线课程包，包含 6 个核心章节、60 道测验题目和详细的学习资料。

## 🚀 快速开始

### 方法一：一键打包下载（推荐）

```bash
# 1. 克隆仓库
git clone https://github.com/yutang2049/pdfbazi.git
cd pdfbazi

# 2. 运行打包脚本
./package-course.sh

# 3. 获取 ZIP 文件
# 打包完成的文件位于：dist/四柱八字命理学课程_SCORM_*.zip
```

### 方法二：直接下载 ZIP

1. 点击页面上方的绿色 **"Code"** 按钮
2. 选择 **"Download ZIP"**
3. 解压后，课程文件在 `scorm/` 目录

### 方法三：仅下载课程目录

```bash
git clone --depth 1 --filter=blob:none --sparse https://github.com/yutang2049/pdfbazi.git
cd pdfbazi
git sparse-checkout set scorm
```

## 📥 详细下载指南

查看 **[DOWNLOAD.md](DOWNLOAD.md)** 获取完整的下载和使用说明，包括：
- 多种下载方法
- LMS 系统上传指南
- 本地预览方法
- 常见问题解答

## 📁 目录结构

```
pdfbazi/
├── scorm/                    # SCORM 2004 课程包（主要内容）
│   ├── index.html           # 课程首页
│   ├── module01-06.html     # 6 个学习章节
│   ├── quiz01-06.html       # 6 套测验题目
│   ├── imsmanifest.xml      # SCORM 配置文件
│   ├── css/                 # 样式文件
│   ├── js/                  # 功能脚本
│   └── README.md            # 课程详细文档
├── 四柱八字.txt              # 原始教材（1.6MB）
├── 四柱八字.docx             # 教材文档版本
├── package-course.sh        # 一键打包脚本
└── DOWNLOAD.md              # 下载使用指南

```

## 📖 课程内容

本课程共 **6 个核心章节**，系统讲解四柱八字命理学：

### 第一章：干支基础知识
- 天干地支的应用由来
- 六十甲子的排列规律
- 四柱八字的基本概念
- 5 个详细例题

### 第二章：干支季节方位
- 天干的方位及五行属性
- 地支的季节性与方位
- 四季划分与节气对应
- 6 个详细例题

### 第三章：阴阳五行通识
- 阴阳哲学的基本概念
- 五行理论与相生相克
- 阴阳五行的宇宙观
- 6 个详细例题

### 第四章：五行相生相克
- 天干的冲克关系
- 天干的合化规律
- 实际命理应用
- 5 个详细例题

### 第五章：地支合会刑冲克害
- 地支六冲详解
- 三合局与六合
- 地支相害与相刑
- 10 个详细例题

### 第六章：合盘简析
- 干支综合应用
- 四柱关系分析
- 命理分析方法
- 5 个详细例题

## ✨ 课程特色

- ✅ **完整 SCORM 2004 标准**：兼容主流 LMS（Moodle、Blackboard、Canvas）
- ✅ **60 道测验题目**：每章 10 题，即时反馈，巩固学习
- ✅ **30+ 详细例题**：理论联系实际，深入浅出
- ✅ **传统文化设计**：深红金色配色，彰显中华传统美学
- ✅ **响应式布局**：支持电脑、平板多设备学习
- ✅ **零依赖部署**：纯原生 JavaScript，无需额外安装

## 🎯 使用方式

### 1️⃣ 上传到 LMS 系统（推荐）

适用于学校、培训机构等场景：

```bash
# 打包课程
./package-course.sh

# 将生成的 ZIP 文件上传到：
# - Moodle
# - Blackboard
# - Canvas
# - TalentLMS
# 等任何支持 SCORM 2004 的 LMS 系统
```

### 2️⃣ 本地预览学习

适用于个人学习场景：

```bash
# 进入课程目录
cd scorm

# 启动本地服务器（三选一）
python3 -m http.server 8000    # Python 方式
php -S localhost:8000           # PHP 方式  
npx http-server -p 8000        # Node.js 方式

# 打开浏览器访问
# http://localhost:8000/index.html
```

## 📊 课程统计

- **总文件数**：20 个
- **总大小**：约 340KB（高度优化）
- **学习章节**：6 章
- **测验题目**：60 题
- **例题数量**：30+ 个
- **学习时长**：约 8 小时

## 🔧 技术规范

- **SCORM 版本**：2004 第三版
- **编码格式**：UTF-8
- **浏览器支持**：Chrome 60+, Firefox 55+, Edge 79+, Safari 11+
- **移动端**：支持响应式布局
- **依赖项**：无（纯原生实现）

## 📚 相关文档

- [scorm/README.md](scorm/README.md) - SCORM 课程包详细文档
- [DOWNLOAD.md](DOWNLOAD.md) - 完整下载使用指南

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

如需改进课程内容或修复问题：
1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/improvement`)
3. 提交更改 (`git commit -m '改进课程内容'`)
4. 推送到分支 (`git push origin feature/improvement`)
5. 创建 Pull Request

## 📄 版权说明

- 课程内容基于《四柱八字.txt》教材
- 遵循 SCORM 2004 第三版标准
- 供个人学习使用

## 🎓 学习建议

1. 按章节顺序学习，循序渐进
2. 每章学完立即完成测验
3. 重点理解例题的分析思路
4. 可结合实际案例练习
5. 定期复习，巩固知识

---

**开始学习**：[查看下载指南](DOWNLOAD.md) | [查看课程文档](scorm/README.md)

祝学习顺利！ 🎉
