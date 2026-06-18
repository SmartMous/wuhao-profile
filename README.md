# wuhao-profile

武浩的个人简历主页 | Personal Profile Page

## 访问 / Visit

**<https://SmartMous.github.io/wuhao-profile/>**

## 技术栈 / Tech

- 纯 HTML / CSS / JS（零框架依赖）
- Canvas 星空粒子动画
- 中英文双语切换（localStorage 持久化）
- Font Awesome 图标库（CDN）
- GitHub Pages 静态托管

## 特性 / Features

- 三层视差星空背景 + 星云光晕 + 鼠标引力交互
- Hero 打字机循环效果
- 滚动渐显动画
- 图片灯箱预览
- 视频嵌入
- 深色科技风 UI（霓虹发光 + 玻璃拟态）
- 移动端响应式

## 项目结构 / Structure

```
wuhao-profile/
├── index.html              # 单页入口
├── css/
│   └── style.css           # 全局样式
├── js/
│   └── main.js             # i18n / 背景 / 特效
├── docs/
│   ├── debuglog.md         # 调试日志
│   ├── config.md           # 配置信息
│   ├── code-flow.md        # 代码流程
│   └── project-detail.md   # 项目说明
└── README.md
```

## 本地开发 / Local Dev

```bash
# 直接打开
open index.html

# 或启动本地服务器
python3 -m http.server 3000
```

## 部署 / Deploy

推送 `main` 分支到 `SmartMous/wuhao-profile`，GitHub Pages 自动部署。

---

Built with [Claude Code](https://claude.ai/code)
