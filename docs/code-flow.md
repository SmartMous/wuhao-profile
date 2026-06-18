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

### 3. 多维视差色温律动背景（高性能 HTML5 Canvas）
- 3D 纵深层叠 (Depth Parallax)：摒弃重型 DOM，由单个 Canvas 画布接管。将 110 个高对比感应粒子分派到 Near (1.0)、Mid (0.55) 和 Far (0.25) 三个深度，利用滑动 `scrollY` 换算对等的垂直视差运动偏移量，营造出深邃立体的 3D 飞行舱透视空间。
- 恒动与 Twinkle：粒子具有自运行速度矢量，在屏幕边界环绕漫步；在行进中利用正弦波独立控制亮暗呼吸（Twinkling）。
- 色温滚动过渡 (Scroll Color Grading)：
  - 实时计算滚动完成率 `scrollY / totalScrollHeight`。
  - 首屏为冷冽极地青（Cyan，约 185°） -> 滚动至页面中部平滑调和至赛博蓝紫（Orchid/Purple，约 275°） -> 底部完全过渡至炽热的赛博粉红/宝石红（Ruby Pink，约 340°）。
  - 所有绘制颜色（星云球、连接丝、鼠标引力束和点）均使用该插值计算，形成全场氛围的渐进式变化。
- 鼠标与触控多态响应：
  - 引力场：磁吸附范围内(180px)的粒子受引力影响向指针聚拢。
  - 虚线激光网：生成高亮的虚线激光线，连通指针与最近处微米节点。
  - 测距环与十字准星：在鼠标激活时生成高灵敏、带跑马灯刻度和内十字坐标的瞄准镜浮起。
  - 物理碎屑拖尾：鼠标滑过时持续产生微型物理碎屑花火 (`Spark Class`)，受重力和年龄衰减自然陨落消失，让轨迹充满粒子感。
- 渲染性能：所有计算均通过原生 GPU 硬件加速的 Canvas 2D 绘图上下文处理，不经过任何重型计算。在 Canvas 尺寸设计中采用 high DPI (DPR) 视网膜缩放技术，消除所有高分屏下的毛刺。

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
用户移动/轻触屏幕 → mousemove/touchmove事件 → SVG网格极速拉引力连接与科技准心变换
```
