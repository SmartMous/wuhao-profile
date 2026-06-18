# Debug Log

## 2026-06-18 — 宇宙背景黑屏问题
- **现象**: 页面背景全黑，无星空粒子
- **原因**: `createStarLayer()` 中速度参数传入数组 `[0.08, 0.08]` 但在粒子的 vx/vy 计算中 `(Math.random() - 0.5) * speedRange` 将数组作为数字相乘，产生 NaN，所有粒子坐标为 NaN，Canvas 无法渲染
- **修复**: 改为传入单个数值 `0.08` 而非数组 `[0.08, 0.08]`，函数签名改为 `createStarLayer(count, sizeRange, speed, opacityRange, color)`

## 2026-06-18 — 打字机切换语言后状态混乱
- **现象**: 切换语言后打字机效果文案不更新或乱序
- **原因**: `restartTyping()` 重置了变量但未清除 pending 的 `setTimeout`，旧的定时器回调继续执行
- **修复**: 使用 `clearTimeout(timer)` 取消排队中的定时器，然后手动调用 `type()` 重新开始

## 2026-06-18 — 首次推送认证失败
- **现象**: `git push` 弹出交互式对话框无法响应
- **原因**: 非交互式终端无法处理 credential prompt
- **修复**: 设置 `GIT_TERMINAL_PROMPT=0` 使用非交互 credential 获取

## 2026-06-18 — 移动端背景粒子不可见
- **现象**: 手机端页面背景几乎全黑，看不到星空粒子
- **原因**: 粒子尺寸过小（远层 min 0.4px）、透明度太低（min 0.15），在高 DPI 移动屏幕上小于实际物理像素
- **修复**: 三层粒子尺寸统一放大（远层 min 0.4→1.2、中层 min 0.8→1.8、近层 min 1.5→2.5），透明度下限提升 2 倍，星云数量和亮度增加

## 2026-06-18 — 语言切换后项目链接图标消失
- **现象**: 切换中英文后"查看项目"链接后面的箭头图标消失
- **原因**: `applyLang()` 使用 `el.textContent = ...` 替换整个元素内容，`<i class="fas fa-arrow-right"></i>` 子元素被清除
- **修复**: HTML 中把 i18n 文本用 `<span data-i18n="projects.view">` 包裹，`<i>` 图标留在 `<span>` 外，不再受 textContent 替换影响

## 2026-06-18 — 移动端导航切换后内容区域空白
- **现象**: 点击导航栏跳转到各 Section，页面一片空白，只有 Hero 可见
- **原因**: `.reveal` 元素初始 `opacity: 0; transform: translateY(40px)`，依赖 IntersectionObserver 添加 `.visible` 类。部分移动浏览器 Observer 初始不触发导致 section 永远不可见
- **修复**: JS 中增加 setTimeout fallback（1s 后强制 reveal 所有元素，1.5s 后触发 skills 动画），降低 threshold 从 0.15/0.3 到 0.1

## 2026-06-18 — 星���粒子背景在移动端始终不可见
- **现象**: 多次调整粒子参数后手机端仍看不到背景
- **决定**: 放弃星空粒子方案，改为数据流传输动效
- **新方案**: 28条水平数据流（dashed line 流动）+ 35个浮动节点（带光晕）+ 节点间连线，配色 cyan/magenta，鼠标靠近节点和流时增亮

## 2026-06-18 — Canvas 数据流背景移动端仍不可见
- **现象**: Canvas 数据流方案在手机端背景仍然全黑
- **原因**: Canvas API 在移动浏览器上可能存在渲染时机、DPR 缩放或性能节流问题，多次调参无效
- **修复**: 彻底移除 Canvas，改为纯 CSS 动画方案 — `radial-gradient` 网格点阵 + 8条 `@keyframes` 水平流光 + 10个浮动 CSS 节点，零 JS 依赖，浏览器原生渲染保证兼容性
