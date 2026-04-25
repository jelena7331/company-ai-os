# 公司 AI OS 系统

一个现代化的企业级 AI 操作系统，集成多种 AI 能力，为团队提供智能化工作助手。

## ✨ 特性

- 🤖 **AI 对话助手** - 智能理解需求，提供精准响应
- 🎨 **多模态支持** - 支持文本、图像、视频等多种内容形式
- 🛠️ **丰富工具集** - 图像生成、文档分析、代码助手等多种工具
- 🎯 **企业级安全** - 数据加密存储，确保信息安全
- 💎 **现代化界面** - 简洁美观的用户界面，流畅的交互体验

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000 查看应用

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 📦 技术栈

- **React 18** - 用户界面库
- **TypeScript** - 类型安全的 JavaScript
- **Vite** - 快速的构建工具
- **Tailwind CSS** - 实用优先的 CSS 框架
- **React Router** - 路由管理
- **Lucide React** - 精美的图标库

## 🎯 核心功能

### 1. 首页
- 英雄区域展示
- 快速输入框
- 核心能力展示
- 特性介绍

### 2. AI 对话
- 实时对话交互
- 消息历史记录
- 文件上传支持
- 智能建议

### 3. 工具广场
- 多种 AI 工具
- 分类筛选
- 搜索功能
- 热门工具推荐

## 📁 项目结构

```
company-ai-os/
├── src/
│   ├── components/      # 可复用组件
│   │   ├── Header.tsx
│   │   └── Sidebar.tsx
│   ├── pages/          # 页面组件
│   │   ├── HomePage.tsx
│   │   ├── ChatPage.tsx
│   │   └── ToolsPage.tsx
│   ├── App.tsx         # 应用主组件
│   ├── main.tsx        # 应用入口
│   └── index.css       # 全局样式
├── public/             # 静态资源
├── index.html          # HTML 模板
├── package.json        # 项目配置
├── tsconfig.json       # TypeScript 配置
├── tailwind.config.js  # Tailwind 配置
└── vite.config.ts      # Vite 配置
```

## 🎨 设计理念

- **简洁现代** - 采用现代化的设计语言，界面简洁清晰
- **渐变配色** - 使用蓝色到青色的渐变，营造科技感
- **卡片布局** - 使用卡片式设计，信息层次分明
- **流畅动画** - 添加过渡动画，提升用户体验

## 🔧 自定义配置

### 修改主题色

编辑 `tailwind.config.js` 中的颜色配置：

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // 自定义颜色
      }
    }
  }
}
```

### 添加新工具

在 `src/pages/ToolsPage.tsx` 的 `tools` 数组中添加新工具配置。

## 📝 待办事项

- [ ] 集成真实的 AI API
- [ ] 添加用户认证系统
- [ ] 实现文件上传功能
- [ ] 添加更多工具模板
- [ ] 优化移动端体验
- [ ] 添加暗色模式
- [ ] 实现数据持久化

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！
