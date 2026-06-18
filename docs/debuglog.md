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
