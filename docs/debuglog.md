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
