# 官网用产品截图清单

> 路径：`src/assets/screenshots/<platform>/<file>.png`
> 命名约定：`<lang>-<num>-<scene>.png`（保留 iOS 已有命名）
>
> **注意**：截图放在 `src/assets/`（不是 `public/`），由 Astro `<Image>` 自动转 WebP +
> 响应式 srcset。直接用 `import x from "../assets/..."` 引入。
> 未引入的图不会进 dist。

## ✅ 已就绪 — iOS 6.5"
位置：`src/assets/screenshots/ios/`

| 文件 | 内容 | 用途 | 已上线 |
|---|---|---|---|
| `en-01-devices-home.png` | 设备列表首页（EN） | UseCases · crossOS 卡片 | ✅ |
| `en-02-chat.png` | 聊天主界面（EN） | Hero / Showcase 备用 | — |
| `en-03-settings.png` | 设置页（EN） | Privacy section 备用 | — |
| `en-04-receive-request.png` | 接收请求确认（EN） | UseCases · daily 卡片 | ✅ |
| `en-05-transfer-progress.png` | 传输进度（EN） | UseCases · devs 卡片 | ✅ |
| `zh-01-receive-request.png` | 接收请求（ZH） | UseCases · crossOS 卡片 | ✅ |
| `zh-02-transfer-progress.png` | 传输进度（ZH） | UseCases · devs 卡片 | ✅ |
| `zh-03-file-saved.png` | 保存完成（ZH） | UseCases · daily 卡片 | ✅ |
| `zh-04-settings.png` | 设置（ZH） | Privacy section 备用 | — |

## ⏳ 待补 — Desktop / Android
| 期望文件 | 用途 |
|---|---|
| `desktop/chat-light-2x.png` | Hero 桌面端（替代 ChatPreview 静态版） |
| `desktop/chat-dark-2x.png` | Hero 暗色 |
| `desktop/folder-transfer-light-2x.png` | UseCases · devs 卡片桌面端 |
| `android/main.png` | UseCases / 跨平台徽标行 |
| `composite/cross-platform-row.png` | 四端并排合成图 |
