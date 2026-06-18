# 代码流程

## 文件结构
```
CusHTML/
├── index.html          # 单页入口，6个Section
├── css/
│   └── style.css       # 全局样式、霓虹主题、响应式
├── js/
│   └── main.js         # 所有JS逻辑（5个模块）
└── docs/
    ├── debuglog.md
    ├── config.md
    ├── code-flow.md
    └── project-detail.md
```

## JS 模块执行流程

### 1. i18n 系统（最先执行）
- 加载中/英双语数据
- 从 localStorage 读取语言偏好（默认 zh-CN）
- `applyLang()` 遍历所有 `[data-i18n]` 元素更新文本
- 暴露 `window._i18n` 供其他模块读取当前语言

### 2. 打字机效果
- 从 `window._i18n` 获取当前语言的 `hero.typing` 文案
- 逐字打出 → 停顿3s → 逐字回删 → 停顿0.8s → 循环
- `restartTyping()` 供 i18n 切换时调用，清除旧 timer 并重新开始

### 3. 宇宙飘荡背景（Canvas）
- 三层星空粒子：远(180颗)、中(80颗)、近(30颗)
- 6团星云渐变光斑
- 每帧：更新位置(正弦波微动 + 边界环绕) → 绘制
- 鼠标靠近中层/近层粒子时引力吸引，粒子发光变亮

### 4. 滚动渐显
- IntersectionObserver 监听 `.reveal` 元素
- 进入视口 15% 时添加 `.visible` 类 → CSS transition 淡入上浮
- Skills section 额外处理：每个 skill-item 依次弹出（stagger 80ms）

### 5. Lightbox 灯箱
- 点击 `.gallery-item` → 显示大图
- 点击背景/关闭按钮/Esc → 关闭

## 数据流
```
localStorage(lang) → i18n.applyLang() → DOM更新 + 打字机重启
用户点击语言下拉框 → change事件 → applyLang() → 同上
用户滚动 → IntersectionObserver → 添加.visible类 → CSS动画
用户移动鼠标 → mousemove事件 → 粒子引力计算
```
