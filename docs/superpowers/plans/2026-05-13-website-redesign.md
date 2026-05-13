# Link2Send 官网改版实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 把 link2send.com 从"开发者风的功能罗列站"改造成"用户一眼能看懂为什么要下载"的转化型营销站，重点放在场景化卖点 / 与替代方案对比 / 信任建立。

**Architecture:** 保持 Astro 6 + Tailwind 4 + 静态部署到 Cloudflare Pages 的技术栈不动；在现有组件目录下增加 4 个新 section 组件（社交证明 / 使用场景 / 对比表 / 首页 FAQ），重写 Hero / Showcase / StatsBar / CTA 的拷贝与版式，按新的信息架构在首页串起来。文案在 `src/i18n/ui.ts` 集中维护，所有拷贝同时给中英两套。

**Tech Stack:** Astro 6（SSG）· Tailwind CSS 4 · TypeScript · 系统字体栈（无网络字体）· 零客户端 JS（除主题切换/移动菜单/OS 检测脚本）

---

## 0. 定位与拷贝原则

### 一句话定位（新）

**EN:** "Move files between your devices like AirDrop — across Mac, Windows, iPhone and Android. No cloud, no compression, no upload."

**ZH:** "像 AirDrop 一样在自己的设备之间传文件——支持 Mac、Windows、iPhone、Android。不走云端，不压缩，不上传。"

> **理由：** 现版本 hero "Chat in your LAN" 是工程师视角；用户视角是"我有个 5GB 视频要从电脑传手机/Windows 传 Mac/家人之间传照片，微信压、网盘慢、AirDrop 不跨平台"。新定位用 AirDrop 做锚点（最熟悉的心智），再用"跨平台"破除其局限。

### 三大核心价值

1. **极速 (Fast)** — 局域网直连，5 GB 视频几十秒，不上传到云
2. **跨平台 (Universal)** — Mac / Windows / iPhone / Android 互通，AirDrop 做不到
3. **私密 (Private)** — 端到端加密，无账号、无云端、无遥测，开源 MIT

### 三类目标用户场景

1. **iPhone ↔ Windows / Android ↔ Mac 用户** — AirDrop 跨不过去的人。痛点：原图发不过去 / 大视频走云端慢
2. **开发者 / 设计师** — 大文件夹 / 项目源码 / PSD 在本机和团队设备间互传。痛点：网盘慢、压缩、有大小限制
3. **家庭 / 小团队** — 父母手机的照片 → 自己电脑、夫妻之间传文件。痛点：微信压图压视频、要登录、容量小

### 设计与文案原则

- **每个 section 一个核心 take-away**（用户读完一段就该收获一个清晰判断），不堆砌
- **首屏不放产品全功能**，只解决一个问题：让用户判断"这是我要的吗"
- **数字优先**（"50 GB 文件夹一拖即送"、"0 云端服务器"）—— 比形容词有说服力
- **拒绝纯技术词独用**（mTLS / TLS 1.3 / SQLite 这些只能作为信任佐证出现，不能放在卖点位）
- **中英拷贝独立优化**，不直译；中文要符合中文用户语感（如"原图直传"、"不压缩不限速"、"不限大小"），英文要符合北美营销语境（短句、动词开头、避免技术堆砌）

### 参考站点（从中借鉴的具体模式）

- **LocalSend localsend.org** — Hero 的"open-source AirDrop alternative"一句话定位 + 平台徽标行
- **Tailscale tailscale.com** — "Why Tailscale" 的痛点-方案对比段
- **Linear linear.app** — section 节奏与排版克制，背景配色简洁
- **Raycast raycast.com** — "How does it compare with X" 的对比表设计
- **Stripe stripe.com** — 数字突出的 stats bar，字体与排版
- **Things Cultured Code** — 干净的产品截图展示

---

## 1. 信息架构（首页新流程）

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Hero — 一句话定位 + OS 检测下载按钮 + 产品截图           │
│ 2. SocialProofRow — 平台徽标 + 开源/MIT/GitHub Star          │
│ 3. UseCases — 三个真实用户场景卡片                           │
│ 4. Showcase (重写) — 三大价值（快/跨平台/私密），benefit-led │
│ 5. CompareTable — vs AirDrop / 微信 / WeTransfer / 网盘     │
│ 6. StatsBar (重写) — 4 个结果型数字                          │
│ 7. HowItWorks (微调) — 三步走                                │
│ 8. PrivacySummary — 安全/隐私一段话 + 三个 badge             │
│ 9. HomeFAQ — 5 条最高频疑虑                                  │
│ 10. CTASection (重写) — 收尾下载按钮                         │
└─────────────────────────────────────────────────────────────┘
```

> 现首页是 Hero → StatsBar → Showcase → HowItWorks → CTA，五段。新版本 10 段，但每段更短、目的更明确。

---

## 2. 文件结构（增 / 改）

| 路径 | 状态 | 职责 |
|---|---|---|
| `src/i18n/ui.ts` | 改 | 增加 ~80 个新 key（usecases.* / compare.* / privacy.* / homeFaq.* / 重写 hero / showcase / stats / cta） |
| `src/components/Hero.astro` | 改 | 新拷贝 + 新版式（保留 ChatPreview 但调整列宽和高度） |
| `src/components/SocialProofRow.astro` | 新 | 平台徽标 + GitHub Star + MIT badge 一行 |
| `src/components/UseCases.astro` | 新 | 三场景卡片（图标 + 标题 + 一段话 + 引用式痛点） |
| `src/components/Showcase.astro` | 改 | 三大价值改为 benefit-led 而非 capability-led |
| `src/components/CompareTable.astro` | 新 | 对比表（响应式：桌面横表，移动端竖排卡片） |
| `src/components/StatsBar.astro` | 改 | 数字优化为结果型 |
| `src/components/PrivacySummary.astro` | 新 | 一段话 + 三个信任 badge |
| `src/components/HomeFAQ.astro` | 新 | 5 条 FAQ，内部复用 FAQAccordion |
| `src/components/CTASection.astro` | 改 | 拷贝重写，按钮加 OS 检测 |
| `src/pages/en/index.astro` | 改 | 按新 IA 串组件 + JSON-LD FAQ schema |
| `src/pages/zh/index.astro` | 改 | 同上 |
| `public/screenshots/ios/` | 新 | 9 张真实 iOS 截图（已就绪，T12 拷入） |
| `public/screenshots/` | 新 | 桌面 / Android / 合成图占位（T12 清单标记，后续补） |
| `src/data/downloads.ts` | 改 | `currentVersion` 提到 "0.7.3"，`releaseDate` 提到 "2026-05-13" |

> 现有的 `features.astro`、`download.astro`、`docs/` 本轮不重构，留到后续；本计划只动首页 + 强相关 i18n。

---

## 3. 任务拆解

每个任务自带：要碰的文件、改动代码（无占位符）、构建/视觉验证步骤、提交 commit。

> **⚠ 测试约定：** 营销静态页缺乏单元测试场景，TDD 在此不适用。每个任务的"测试"步骤改为：(a) `npm run build` 必须通过；(b) `npm run dev` 后在浏览器打开 `/zh/` 与 `/en/`、亮/暗模式各看一遍，移动 viewport（Chrome devtools 375px 宽）至少看一遍。每个任务结束前必须做完 (a)(b) 才能 commit。

---

### Task 1: 更新 `currentVersion` 到 0.7.3（顺手活）

**Files:**
- Modify: `src/data/downloads.ts:22-25`

- [ ] **Step 1: 改版本与日期**

```ts
// Used only by JSON-LD structured data (SoftwareApplication) for SEO.
// Visible UI shows "Latest version" instead, so this can be updated less frequently.
export const currentVersion = "0.7.3";
export const releaseDate = "2026-05-13";
```

- [ ] **Step 2: build + 检查**

```bash
npm run build
```
预期：`✓ Completed`，无错误。

- [ ] **Step 3: commit**

```bash
git add src/data/downloads.ts
git commit -m "Bump shipping version metadata to v0.7.3"
```

---

### Task 2: 在 `ui.ts` 加全部新文案（en + zh）

> 一次性把后续所有 section 用到的 i18n key 全加进来，避免后续任务每次回头改这一个文件。

**Files:**
- Modify: `src/i18n/ui.ts`（en 块和 zh 块对称增加同样的 key）

- [ ] **Step 1: Hero 文案重写**

把现有 `"hero.*"` 块替换为：

```ts
// English (en 块内)
"hero.kicker": "Open source · MIT · No cloud",
"hero.title": "Send files between your devices, like AirDrop — but everywhere.",
"hero.titleAccent": "like AirDrop",
"hero.subtitle":
  "Mac, Windows, iPhone, Android — Link2Send moves files and folders between any two devices on your network. No cloud, no compression, no sign-up.",
"hero.cta.primary": "Download for {platform}",
"hero.cta.primaryGeneric": "Get Link2Send — Free",
"hero.cta.secondary": "How it works",
"hero.cta.note": "Free · Open source · macOS 11+ · Windows 10+",
```

```ts
// 中文 (zh 块内)
"hero.kicker": "开源 · MIT · 不走云端",
"hero.title": "在自己的设备之间传文件——像 AirDrop 一样，但跨平台",
"hero.titleAccent": "像 AirDrop 一样",
"hero.subtitle":
  "Mac、Windows、iPhone、Android 互传——文件和文件夹直接走局域网。不上云、不压缩、不注册。",
"hero.cta.primary": "下载 {platform} 版",
"hero.cta.primaryGeneric": "免费下载邻传",
"hero.cta.secondary": "看它怎么工作",
"hero.cta.note": "免费 · 开源 · macOS 11+ · Windows 10+",
```

- [ ] **Step 2: SocialProofRow 文案**

en 块插入：
```ts
"social.kicker": "Trusted by indie devs, designers and small teams",
"social.openSource": "Open source · MIT",
"social.crossPlatform": "Mac · Windows · iPhone · Android",
"social.github": "Star on GitHub",
```

zh 块插入：
```ts
"social.kicker": "面向独立开发者、设计师与小团队",
"social.openSource": "开源 · MIT 协议",
"social.crossPlatform": "Mac · Windows · iPhone · Android",
"social.github": "在 GitHub 上 Star",
```

- [ ] **Step 3: UseCases 文案**

en 块：
```ts
"usecases.kicker": "WHO IT'S FOR",
"usecases.title": "Three places where Link2Send replaces something painful",
"usecases.subtitle":
  "Built for the cross-device moments that AirDrop, WeChat and Google Drive never quite solved.",

"usecases.crossOS.tag": "Cross-platform",
"usecases.crossOS.title": "iPhone ↔ Windows. Android ↔ Mac.",
"usecases.crossOS.body":
  "AirDrop ends at Apple's wall. Link2Send doesn't. Send originals, not compressed copies, between any two devices on your Wi-Fi.",
"usecases.crossOS.quote": "Send a 4K video from iPhone to a Windows laptop in 12 seconds — no upload.",

"usecases.devs.tag": "For developers & designers",
"usecases.devs.title": "Move a 5 GB project folder, not just a file",
"usecases.devs.body":
  "Drop an entire src/ tree, a 50 GB ISO or a 200-layer PSD. Resumable, integrity-checked, no cloud quota to hit.",
"usecases.devs.quote": "Folder of 10 000 files. One drag. Done.",

"usecases.daily.tag": "For daily life",
"usecases.daily.title": "Photos and videos without WeChat compression",
"usecases.daily.body":
  "Send originals to family or yourself between phone and laptop — no chat-app compression, no quality loss, no signing in.",
"usecases.daily.quote": "Original quality. No re-encode. No size cap.",
```

zh 块：
```ts
"usecases.kicker": "适合谁用",
"usecases.title": "三个邻传能替你解决的「老毛病」",
"usecases.subtitle":
  "为 AirDrop、微信、网盘都没能搞定的跨设备瞬间而设计。",

"usecases.crossOS.tag": "跨平台",
"usecases.crossOS.title": "iPhone ↔ Windows · Android ↔ Mac",
"usecases.crossOS.body":
  "AirDrop 跨不过苹果生态，邻传可以。同 Wi-Fi 下任意两台设备之间传原图、原视频，不压缩不转码。",
"usecases.crossOS.quote": "iPhone 一段 4K 视频发到 Windows 笔记本，12 秒搞定，不走云端。",

"usecases.devs.tag": "开发 / 设计",
"usecases.devs.title": "项目文件夹一拖即送，不再切网盘",
"usecases.devs.body":
  "整个 src/ 目录、50 GB ISO、200 层 PSD —— 一次拖入。断点续传、逐块校验，不撞网盘容量上限。",
"usecases.devs.quote": "万级文件 · 一次拖入 · 自动并发。",

"usecases.daily.tag": "日常生活",
"usecases.daily.title": "照片视频原图直传，不再被微信压糊",
"usecases.daily.body":
  "手机和电脑之间互传原图、原视频，给家人也行——没有 IM 压缩，没有清晰度损失，不用登录。",
"usecases.daily.quote": "原画质 · 不转码 · 不限大小。",
```

- [ ] **Step 4: Showcase 三大价值（覆盖现有 showcase.*）**

把现有 showcase.* 替换为 benefit-led：

en 块：
```ts
"showcase.kicker": "WHY LINK2SEND",
"showcase.title": "Three things every user notices in the first minute",
"showcase.subtitle":
  "We obsess over the things you actually feel — speed, reach and trust.",

"showcase.fast.title": "Fast — because nothing leaves your network",
"showcase.fast.desc":
  "Files travel directly between devices on your LAN. A 5 GB video moves at full Wi-Fi speed instead of crawling up to the cloud and back down.",
"showcase.fast.point1": "Direct device-to-device, no relay",
"showcase.fast.point2": "4–8 parallel TLS connections per session",
"showcase.fast.point3": "Resumable from the last verified chunk",

"showcase.universal.title": "Universal — Mac, Windows, iPhone, Android",
"showcase.universal.desc":
  "AirDrop is Apple-only. Snapdrop only does single files via browser. Link2Send is a real native app on every major OS — and they all talk to each other.",
"showcase.universal.point1": "Native macOS, Windows, iOS, Android builds",
"showcase.universal.point2": "Files and folders, not just one-shot snippets",
"showcase.universal.point3": "Auto-discovery on the same Wi-Fi, no IP setup",

"showcase.private.title": "Private — by design, not by promise",
"showcase.private.desc":
  "There is no Link2Send server you can leak from, because there isn't one. mTLS between devices, AES-256-GCM at rest, MIT-licensed source you can audit.",
"showcase.private.point1": "Mutual TLS 1.3 — encryption is mandatory, not optional",
"showcase.private.point2": "No accounts, no telemetry, no outbound internet",
"showcase.private.point3": "Open source — verify it yourself",
```

zh 块：
```ts
"showcase.kicker": "为什么选邻传",
"showcase.title": "用户第一分钟就会注意到的三件事",
"showcase.subtitle":
  "我们只死磕你能切身感受到的：快、广、放心。",

"showcase.fast.title": "够快——因为东西不出你的网络",
"showcase.fast.desc":
  "文件在局域网内点对点直传。5 GB 视频按 Wi-Fi 满速跑，不必上传到云再下回来。",
"showcase.fast.point1": "设备直连，不走任何中继",
"showcase.fast.point2": "会话级 4–8 条 TLS 长连接并发",
"showcase.fast.point3": "中断从最后一个已校验的块继续",

"showcase.universal.title": "够广——Mac、Windows、iPhone、Android 全覆盖",
"showcase.universal.desc":
  "AirDrop 只在苹果系统内有效；Snapdrop 只能浏览器里发一个文件。邻传是每个平台上的真原生 App，且互通。",
"showcase.universal.point1": "macOS、Windows、iOS、Android 原生客户端",
"showcase.universal.point2": "文件 / 文件夹通吃，不是一次性 snippet",
"showcase.universal.point3": "同 Wi-Fi 自动发现，无需配置 IP",

"showcase.private.title": "够放心——隐私靠设计，不是靠口号",
"showcase.private.desc":
  "邻传没有"我们的服务器可能泄漏"这一说，因为根本就没有云端。设备间双向 TLS、本地 AES-256-GCM 加密、源代码 MIT 协议公开可审。",
"showcase.private.point1": "双向 TLS 1.3，加密强制开启不可关闭",
"showcase.private.point2": "无账号、无遥测、不发起任何外网连接",
"showcase.private.point3": "源码开源，自己可审",
```

- [ ] **Step 5: CompareTable 文案**

en 块：
```ts
"compare.kicker": "VS THE ALTERNATIVES",
"compare.title": "How Link2Send compares with what you're using today",
"compare.subtitle": "Honest table. We picked the criteria that actually bite.",

"compare.col.feature": "What you care about",
"compare.col.l2s": "Link2Send",
"compare.col.airdrop": "AirDrop",
"compare.col.wechat": "WeChat / IM",
"compare.col.wetransfer": "WeTransfer",
"compare.col.cloud": "Cloud Drive",

"compare.row.cross.label": "Mac ↔ Windows ↔ iPhone ↔ Android",
"compare.row.cross.l2s": "Yes — all four",
"compare.row.cross.airdrop": "Apple devices only",
"compare.row.cross.wechat": "Yes, but compressed",
"compare.row.cross.wetransfer": "Browser only",
"compare.row.cross.cloud": "Browser only",

"compare.row.size.label": "Big files (5 GB+ videos, 50 GB folders)",
"compare.row.size.l2s": "Unlimited",
"compare.row.size.airdrop": "Yes (Apple only)",
"compare.row.size.wechat": "Capped, often re-encoded",
"compare.row.size.wetransfer": "2 GB free, 200 GB paid",
"compare.row.size.cloud": "Quota-bound, slow upload",

"compare.row.original.label": "Original quality (no re-encode)",
"compare.row.original.l2s": "Always",
"compare.row.original.airdrop": "Yes",
"compare.row.original.wechat": "No, photos & videos compressed",
"compare.row.original.wetransfer": "Yes",
"compare.row.original.cloud": "Yes",

"compare.row.cloud.label": "Goes through a cloud server",
"compare.row.cloud.l2s": "No, LAN direct",
"compare.row.cloud.airdrop": "No, peer-to-peer",
"compare.row.cloud.wechat": "Yes, always",
"compare.row.cloud.wetransfer": "Yes, always",
"compare.row.cloud.cloud": "Yes, always",

"compare.row.account.label": "Sign-up required",
"compare.row.account.l2s": "No",
"compare.row.account.airdrop": "Apple ID",
"compare.row.account.wechat": "Yes",
"compare.row.account.wetransfer": "For larger sends",
"compare.row.account.cloud": "Yes",

"compare.row.encrypt.label": "End-to-end encrypted",
"compare.row.encrypt.l2s": "Always (mTLS 1.3)",
"compare.row.encrypt.airdrop": "Yes",
"compare.row.encrypt.wechat": "Transport only",
"compare.row.encrypt.wetransfer": "Transport only",
"compare.row.encrypt.cloud": "Transport only",
```

zh 块：
```ts
"compare.kicker": "vs 替代方案",
"compare.title": "邻传跟你现在在用的工具，到底差在哪",
"compare.subtitle": "诚实对比表，我们挑的都是真正会咬人的指标。",

"compare.col.feature": "你关心的事",
"compare.col.l2s": "邻传",
"compare.col.airdrop": "AirDrop",
"compare.col.wechat": "微信 / IM",
"compare.col.wetransfer": "WeTransfer",
"compare.col.cloud": "云盘",

"compare.row.cross.label": "Mac ↔ Windows ↔ iPhone ↔ Android",
"compare.row.cross.l2s": "全支持",
"compare.row.cross.airdrop": "仅苹果生态",
"compare.row.cross.wechat": "支持，但要压缩",
"compare.row.cross.wetransfer": "仅浏览器",
"compare.row.cross.cloud": "仅浏览器",

"compare.row.size.label": "大文件（5 GB 视频 / 50 GB 文件夹）",
"compare.row.size.l2s": "不限",
"compare.row.size.airdrop": "支持（仅苹果）",
"compare.row.size.wechat": "有上限，常被压缩 / 重编码",
"compare.row.size.wetransfer": "免费 2 GB，付费 200 GB",
"compare.row.size.cloud": "受配额限制，上传慢",

"compare.row.original.label": "原画质（不转码）",
"compare.row.original.l2s": "始终原画质",
"compare.row.original.airdrop": "原画质",
"compare.row.original.wechat": "图片/视频会被压缩",
"compare.row.original.wetransfer": "原画质",
"compare.row.original.cloud": "原画质",

"compare.row.cloud.label": "是否经过云端服务器",
"compare.row.cloud.l2s": "否，局域网直连",
"compare.row.cloud.airdrop": "否，点对点",
"compare.row.cloud.wechat": "是，每次都走",
"compare.row.cloud.wetransfer": "是，每次都走",
"compare.row.cloud.cloud": "是，每次都走",

"compare.row.account.label": "是否要注册账号",
"compare.row.account.l2s": "不需要",
"compare.row.account.airdrop": "需要 Apple ID",
"compare.row.account.wechat": "需要",
"compare.row.account.wetransfer": "大文件需要",
"compare.row.account.cloud": "需要",

"compare.row.encrypt.label": "端到端加密",
"compare.row.encrypt.l2s": "始终（mTLS 1.3）",
"compare.row.encrypt.airdrop": "支持",
"compare.row.encrypt.wechat": "仅传输层",
"compare.row.encrypt.wetransfer": "仅传输层",
"compare.row.encrypt.cloud": "仅传输层",
```

- [ ] **Step 6: StatsBar 重写（覆盖 stats.*）**

en 块：
```ts
"stats.kicker": "WHAT THE NUMBERS LOOK LIKE",
"stats.size": "50 GB+",
"stats.size.desc": "Largest single transfer tested",
"stats.parallel": "10 000+",
"stats.parallel.desc": "Files in one folder, one drag",
"stats.cloud": "0",
"stats.cloud.desc": "Cloud servers, accounts or telemetry",
"stats.encryption": "100%",
"stats.encryption.desc": "Bytes over mutual TLS 1.3",
```

zh 块：
```ts
"stats.kicker": "用数字说话",
"stats.size": "50 GB+",
"stats.size.desc": "已实测的单次传输上限",
"stats.parallel": "10 000+",
"stats.parallel.desc": "一个文件夹的文件数，一次拖入",
"stats.cloud": "0",
"stats.cloud.desc": "云服务器 / 账号 / 遥测",
"stats.encryption": "100%",
"stats.encryption.desc": "全量字节走双向 TLS 1.3",
```

- [ ] **Step 7: PrivacySummary 文案**

en 块：
```ts
"privacy.kicker": "PRIVACY YOU CAN AUDIT",
"privacy.title": "Three guarantees, one source you can read",
"privacy.body":
  "Link2Send has no backend. Devices identify each other via certificates generated locally on first launch. Encryption is mandatory and cannot be turned off. Source is MIT — verify it yourself.",
"privacy.badge.noCloud.title": "No cloud",
"privacy.badge.noCloud.desc": "Files never leave your LAN",
"privacy.badge.noAccount.title": "No account",
"privacy.badge.noAccount.desc": "Identity is a local cert",
"privacy.badge.noTelemetry.title": "No telemetry",
"privacy.badge.noTelemetry.desc": "Zero outbound calls",
```

zh 块：
```ts
"privacy.kicker": "隐私可被审计",
"privacy.title": "三条保证，一份可读源码",
"privacy.body":
  "邻传没有后端。设备之间通过首次启动时本地生成的证书互相识别，加密强制开启不可关闭。源代码 MIT 开源，你可以自己审。",
"privacy.badge.noCloud.title": "无云端",
"privacy.badge.noCloud.desc": "文件不离开你的局域网",
"privacy.badge.noAccount.title": "无账号",
"privacy.badge.noAccount.desc": "身份就是本地证书",
"privacy.badge.noTelemetry.title": "无遥测",
"privacy.badge.noTelemetry.desc": "零外网请求",
```

- [ ] **Step 8: HomeFAQ 文案（5 条）**

en 块：
```ts
"homeFaq.kicker": "QUICK ANSWERS",
"homeFaq.title": "Things people ask before downloading",

"homeFaq.q1": "Do both devices need to be on the same Wi-Fi?",
"homeFaq.a1": "Same LAN — usually that means the same Wi-Fi or wired network. Devices on different VLANs or guest networks won't see each other.",

"homeFaq.q2": "Does it work without internet?",
"homeFaq.a2": "Yes. Link2Send only needs a local network — no internet required for discovery or transfer. The only thing that ever needs internet is the initial download of the app itself.",

"homeFaq.q3": "Is my data encrypted?",
"homeFaq.a3": "Every byte is sent over mutual TLS 1.3 between devices that have explicitly paired. Encryption is mandatory — there is no fallback path. Local message history is encrypted at rest with AES-256-GCM.",

"homeFaq.q4": "How is this different from AirDrop or LocalSend?",
"homeFaq.a4": "AirDrop only works between Apple devices. LocalSend is closer in spirit but is single-shot and lacks chat history, native folder transfer at scale, and an iOS native app. Link2Send keeps the speed and the no-cloud guarantee, but adds cross-platform reach and a real chat-style timeline.",

"homeFaq.q5": "Is it really free? What's the catch?",
"homeFaq.a5": "Free, MIT licensed, no telemetry, no premium tier. The catch is that there isn't one — Link2Send is a tool, not a service. We don't have your data because we don't have a backend.",
```

zh 块：
```ts
"homeFaq.kicker": "快速回答",
"homeFaq.title": "下载前你最可能问的几个问题",

"homeFaq.q1": "两台设备必须在同一 Wi-Fi 吗？",
"homeFaq.a1": "需要在同一局域网内，通常就是同一个 Wi-Fi 或同一台路由器下的有线网络。不同 VLAN、Guest 网络下的设备彼此看不到。",

"homeFaq.q2": "没网也能用吗？",
"homeFaq.a2": "可以。邻传只需要局域网，发现和传输都不需要外网。唯一需要联网的环节是从这个网站把 App 下下来。",

"homeFaq.q3": "数据是加密的吗？",
"homeFaq.a3": "每一字节都走配对设备之间的双向 TLS 1.3，加密强制开启没有降级路径。本地聊天记录使用 AES-256-GCM 加密保存。",

"homeFaq.q4": "跟 AirDrop、LocalSend 比有什么不同？",
"homeFaq.a4": "AirDrop 只在苹果设备间工作。LocalSend 思路接近，但偏单次传输，缺聊天历史、缺原生大文件夹、缺 iOS 原生 App。邻传保留了"快"和"不走云端"，再叠加跨平台覆盖和真正的聊天式时间线。",

"homeFaq.q5": "真的免费吗？有什么套路？",
"homeFaq.a5": "免费、MIT 协议、无遥测、无付费档。"套路"就是没有套路——邻传是个工具，不是个服务。我们没有你的数据，因为我们根本没有后端。",
```

- [ ] **Step 9: CTASection 重写**

en 块（覆盖 cta.*）：
```ts
"cta.title": "Stop uploading to send. Just send.",
"cta.subtitle":
  "Free, open source, and ready in under a minute. The next big file you move is already faster.",
"cta.button": "Download for {platform}",
"cta.buttonGeneric": "Download Link2Send — Free",
"cta.note": "macOS · Windows · iOS · Android",
```

zh 块：
```ts
"cta.title": "别再为了"传"先上传到云了。直接发。",
"cta.subtitle":
  "免费、开源，一分钟内就可以用上。下一个大文件，本可以更快。",
"cta.button": "下载 {platform} 版",
"cta.buttonGeneric": "免费下载邻传",
"cta.note": "macOS · Windows · iOS · Android",
```

- [ ] **Step 10: build 验证**

```bash
npm run build
```
预期：通过。如果有 TS 报错（来自 `as any` 路径或缺 key），按报错把 key 补齐。

- [ ] **Step 11: commit**

```bash
git add src/i18n/ui.ts
git commit -m "Add i18n strings for redesigned homepage sections"
```

---

### Task 3: 新建 `SocialProofRow.astro`

**Files:**
- Create: `src/components/SocialProofRow.astro`

- [ ] **Step 1: 写组件**

```astro
---
import type { Lang } from "@/i18n/languages";
import { useTranslations } from "@/i18n/utils";

interface Props {
  lang: Lang;
}

const { lang } = Astro.props;
const t = useTranslations(lang);
---

<section class="border-y border-slate-200 bg-white py-8 dark:border-slate-800 dark:bg-slate-950">
  <div class="mx-auto max-w-6xl px-4 sm:px-6">
    <p class="text-center font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-500">
      {t("social.kicker")}
    </p>
    <div class="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-600 dark:text-slate-300">
      <span class="inline-flex items-center gap-2">
        <svg class="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="font-medium">{t("social.openSource")}</span>
      </span>
      <span class="inline-flex items-center gap-2">
        <svg class="h-4 w-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12z M12 8.25v3.75m0 3.75h.008" />
        </svg>
        <span class="font-medium">{t("social.crossPlatform")}</span>
      </span>
      <a
        href="https://github.com/jack-z/link2send-site"
        rel="noopener"
        class="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-1 font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
      >
        <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
        {t("social.github")}
      </a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: build + 浏览器看一眼（暂未挂到首页，看 dev 即可）**

```bash
npm run build
```

- [ ] **Step 3: commit**

```bash
git add src/components/SocialProofRow.astro
git commit -m "Add SocialProofRow component for trust signals"
```

> **注：** GitHub URL `https://github.com/jack-z/link2send-site` 是网站源码仓库；如果将来 App 主仓库公开，应改为指向 App 仓库。

---

### Task 4: 新建 `UseCases.astro`

**Files:**
- Create: `src/components/UseCases.astro`

- [ ] **Step 1: 写组件**

```astro
---
import type { Lang } from "@/i18n/languages";
import { useTranslations } from "@/i18n/utils";

interface Props {
  lang: Lang;
}

const { lang } = Astro.props;
const t = useTranslations(lang);

type Case = {
  tagKey: string;
  titleKey: string;
  bodyKey: string;
  quoteKey: string;
  icon: "phone" | "code" | "heart";
  accent: "primary" | "accent" | "emerald";
};

const cases: Case[] = [
  {
    tagKey: "usecases.crossOS.tag",
    titleKey: "usecases.crossOS.title",
    bodyKey: "usecases.crossOS.body",
    quoteKey: "usecases.crossOS.quote",
    icon: "phone",
    accent: "primary",
  },
  {
    tagKey: "usecases.devs.tag",
    titleKey: "usecases.devs.title",
    bodyKey: "usecases.devs.body",
    quoteKey: "usecases.devs.quote",
    icon: "code",
    accent: "accent",
  },
  {
    tagKey: "usecases.daily.tag",
    titleKey: "usecases.daily.title",
    bodyKey: "usecases.daily.body",
    quoteKey: "usecases.daily.quote",
    icon: "heart",
    accent: "emerald",
  },
];

const accentClasses = {
  primary: "bg-primary-50 text-primary-700 dark:bg-primary-950/60 dark:text-primary-300",
  accent: "bg-accent-50 text-accent-700 dark:bg-accent-950/60 dark:text-accent-300",
  emerald: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
} as const;
---

<section class="bg-white py-20 sm:py-24 dark:bg-slate-950">
  <div class="mx-auto max-w-6xl px-4 sm:px-6">
    <div class="mx-auto max-w-3xl text-center">
      <span class="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
        {t("usecases.kicker")}
      </span>
      <h2 class="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] dark:text-white">
        {t("usecases.title")}
      </h2>
      <p class="mt-4 text-lg text-slate-600 dark:text-slate-300">
        {t("usecases.subtitle")}
      </p>
    </div>

    <div class="mt-14 grid gap-6 lg:grid-cols-3">
      {cases.map((c) => (
        <div class="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-slate-900">
          <span class:list={["inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em]", accentClasses[c.accent]]}>
            <span class="inline-flex h-3.5 w-3.5">
              {c.icon === "phone" && (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              )}
              {c.icon === "code" && (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              )}
              {c.icon === "heart" && (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              )}
            </span>
            {t(c.tagKey as any)}
          </span>
          <h3 class="mt-5 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
            {t(c.titleKey as any)}
          </h3>
          <p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {t(c.bodyKey as any)}
          </p>
          <p class="mt-5 border-l-2 border-slate-200 pl-3 text-sm italic text-slate-500 dark:border-slate-700 dark:text-slate-400">
            "{t(c.quoteKey as any)}"
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 2: build + commit**

```bash
npm run build
git add src/components/UseCases.astro
git commit -m "Add UseCases section component"
```

---

### Task 5: 新建 `CompareTable.astro`（响应式）

**Files:**
- Create: `src/components/CompareTable.astro`

- [ ] **Step 1: 写组件**

```astro
---
import type { Lang } from "@/i18n/languages";
import { useTranslations } from "@/i18n/utils";

interface Props {
  lang: Lang;
}

const { lang } = Astro.props;
const t = useTranslations(lang);

const cols = [
  { id: "l2s", labelKey: "compare.col.l2s", highlight: true },
  { id: "airdrop", labelKey: "compare.col.airdrop", highlight: false },
  { id: "wechat", labelKey: "compare.col.wechat", highlight: false },
  { id: "wetransfer", labelKey: "compare.col.wetransfer", highlight: false },
  { id: "cloud", labelKey: "compare.col.cloud", highlight: false },
];

const rows = [
  { id: "cross", labelKey: "compare.row.cross.label" },
  { id: "size", labelKey: "compare.row.size.label" },
  { id: "original", labelKey: "compare.row.original.label" },
  { id: "cloud", labelKey: "compare.row.cloud.label" },
  { id: "account", labelKey: "compare.row.account.label" },
  { id: "encrypt", labelKey: "compare.row.encrypt.label" },
];

function cellKey(rowId: string, colId: string): string {
  return `compare.row.${rowId}.${colId}`;
}
---

<section class="bg-slate-50 py-20 sm:py-24 dark:bg-slate-900/40">
  <div class="mx-auto max-w-6xl px-4 sm:px-6">
    <div class="mx-auto max-w-3xl text-center">
      <span class="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
        {t("compare.kicker")}
      </span>
      <h2 class="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] dark:text-white">
        {t("compare.title")}
      </h2>
      <p class="mt-4 text-lg text-slate-600 dark:text-slate-300">
        {t("compare.subtitle")}
      </p>
    </div>

    <!-- Desktop: real table -->
    <div class="mt-14 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:block dark:border-slate-800 dark:bg-slate-900">
      <table class="w-full text-left text-sm">
        <thead>
          <tr class="border-b border-slate-200 bg-slate-50/60 dark:border-slate-800 dark:bg-slate-900/60">
            <th class="w-1/4 px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {t("compare.col.feature")}
            </th>
            {cols.map((c) => (
              <th
                class:list={[
                  "px-5 py-4 text-xs font-semibold uppercase tracking-wider",
                  c.highlight
                    ? "bg-primary-50 text-primary-700 dark:bg-primary-950/40 dark:text-primary-300"
                    : "text-slate-500 dark:text-slate-400",
                ]}
              >
                {t(c.labelKey as any)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
          {rows.map((row) => (
            <tr>
              <td class="px-5 py-4 font-medium text-slate-900 dark:text-white">
                {t(row.labelKey as any)}
              </td>
              {cols.map((c) => (
                <td
                  class:list={[
                    "px-5 py-4 text-slate-600 dark:text-slate-300",
                    c.highlight && "bg-primary-50/40 font-semibold text-primary-800 dark:bg-primary-950/20 dark:text-primary-200",
                  ]}
                >
                  {t(cellKey(row.id, c.id) as any)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <!-- Mobile / tablet: stacked cards -->
    <div class="mt-12 grid gap-4 lg:hidden">
      {rows.map((row) => (
        <div class="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <p class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {t(row.labelKey as any)}
          </p>
          <ul class="mt-3 space-y-2.5 text-sm">
            {cols.map((c) => (
              <li class="flex items-start justify-between gap-3">
                <span
                  class:list={[
                    "shrink-0 font-medium",
                    c.highlight ? "text-primary-700 dark:text-primary-300" : "text-slate-500 dark:text-slate-400",
                  ]}
                >
                  {t(c.labelKey as any)}
                </span>
                <span
                  class:list={[
                    "text-right",
                    c.highlight ? "font-semibold text-primary-800 dark:text-primary-200" : "text-slate-700 dark:text-slate-300",
                  ]}
                >
                  {t(cellKey(row.id, c.id) as any)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 2: build + commit**

```bash
npm run build
git add src/components/CompareTable.astro
git commit -m "Add comparison table component"
```

---

### Task 6: 重写 `Showcase.astro`

> 现版本写死了 chat / transfer / shield 三个 capability tile。新版本切到 fast / universal / private 三个 benefit tile，icon 调整。

**Files:**
- Modify: `src/components/Showcase.astro`（整体重写）

- [ ] **Step 1: 用以下内容覆盖整文件**

```astro
---
import type { Lang } from "@/i18n/languages";
import { useTranslations } from "@/i18n/utils";

interface Props {
  lang: Lang;
}

const { lang } = Astro.props;
const t = useTranslations(lang);

type Tile = {
  accent: "primary" | "accent" | "emerald";
  titleKey: string;
  descKey: string;
  bullets: string[];
  icon: "bolt" | "globe" | "lock";
  num: string;
};

const tiles: Tile[] = [
  {
    num: "01",
    accent: "primary",
    titleKey: "showcase.fast.title",
    descKey: "showcase.fast.desc",
    bullets: ["showcase.fast.point1", "showcase.fast.point2", "showcase.fast.point3"],
    icon: "bolt",
  },
  {
    num: "02",
    accent: "accent",
    titleKey: "showcase.universal.title",
    descKey: "showcase.universal.desc",
    bullets: [
      "showcase.universal.point1",
      "showcase.universal.point2",
      "showcase.universal.point3",
    ],
    icon: "globe",
  },
  {
    num: "03",
    accent: "emerald",
    titleKey: "showcase.private.title",
    descKey: "showcase.private.desc",
    bullets: [
      "showcase.private.point1",
      "showcase.private.point2",
      "showcase.private.point3",
    ],
    icon: "lock",
  },
];

const accentClasses = {
  primary: {
    iconBg: "bg-primary-50 text-primary-600 dark:bg-primary-950/60 dark:text-primary-300 ring-primary-200/50 dark:ring-primary-800/40",
    bullet: "text-primary-500 dark:text-primary-400",
    num: "text-primary-500/80 dark:text-primary-400/70",
    hover: "hover:border-primary-300 dark:hover:border-primary-700",
  },
  accent: {
    iconBg: "bg-accent-50 text-accent-600 dark:bg-accent-950/60 dark:text-accent-300 ring-accent-200/50 dark:ring-accent-800/40",
    bullet: "text-accent-500 dark:text-accent-400",
    num: "text-accent-500/80 dark:text-accent-400/70",
    hover: "hover:border-accent-300 dark:hover:border-accent-700",
  },
  emerald: {
    iconBg: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-300 ring-emerald-200/50 dark:ring-emerald-800/40",
    bullet: "text-emerald-500 dark:text-emerald-400",
    num: "text-emerald-500/80 dark:text-emerald-400/70",
    hover: "hover:border-emerald-300 dark:hover:border-emerald-700",
  },
} as const;
---

<section class="bg-slate-50 py-20 sm:py-24 dark:bg-slate-950">
  <div class="mx-auto max-w-6xl px-4 sm:px-6">
    <div class="mx-auto max-w-3xl text-center">
      <span class="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
        {t("showcase.kicker")}
      </span>
      <h2 class="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] dark:text-white">
        {t("showcase.title")}
      </h2>
      <p class="mt-4 text-lg text-slate-600 dark:text-slate-300">
        {t("showcase.subtitle")}
      </p>
    </div>

    <div class="mt-16 grid gap-6 lg:grid-cols-3">
      {tiles.map((tile) => {
        const classes = accentClasses[tile.accent];
        return (
          <div
            class:list={[
              "group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition dark:border-slate-800 dark:bg-slate-900",
              classes.hover,
            ]}
          >
            <span
              class:list={[
                "absolute right-6 top-6 font-mono text-xs font-semibold tabular-nums",
                classes.num,
              ]}
            >
              {tile.num}
            </span>
            <div
              class:list={[
                "mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1",
                classes.iconBg,
              ]}
            >
              {tile.icon === "bolt" && (
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              )}
              {tile.icon === "globe" && (
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              )}
              {tile.icon === "lock" && (
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              )}
            </div>
            <h3 class="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
              {t(tile.titleKey as any)}
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {t(tile.descKey as any)}
            </p>
            <ul class="mt-6 space-y-2.5 border-t border-slate-100 pt-5 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-300">
              {tile.bullets.map((b) => (
                <li class="flex items-start gap-2.5">
                  <svg
                    class:list={["mt-0.5 h-4 w-4 shrink-0", classes.bullet]}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2.2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>{t(b as any)}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  </div>
</section>
```

- [ ] **Step 2: build + commit**

```bash
npm run build
git add src/components/Showcase.astro
git commit -m "Rework Showcase to benefit-led: fast / universal / private"
```

---

### Task 7: 更新 `StatsBar.astro` 数字版式

> 现 stats 是 4 项技术指标。Task 2 已经把 `stats.*` 文案改成结果型（50 GB+ / 10 000+ / 0 / 100%），这里只需把组件版式让大字数字更突出。

**Files:**
- Modify: `src/components/StatsBar.astro:33-35`

- [ ] **Step 1: 把数字字号放大**

把 `<div class="whitespace-nowrap font-mono text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl dark:text-white tabular-nums">` 替换为：

```astro
<div class="whitespace-nowrap font-mono text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white tabular-nums">
```

- [ ] **Step 2: build + commit**

```bash
npm run build
git add src/components/StatsBar.astro
git commit -m "Enlarge StatsBar numbers for outcome emphasis"
```

---

### Task 8: 新建 `PrivacySummary.astro`

**Files:**
- Create: `src/components/PrivacySummary.astro`

- [ ] **Step 1: 写组件**

```astro
---
import type { Lang } from "@/i18n/languages";
import { useTranslations } from "@/i18n/utils";

interface Props {
  lang: Lang;
}

const { lang } = Astro.props;
const t = useTranslations(lang);

const badges = [
  { titleKey: "privacy.badge.noCloud.title", descKey: "privacy.badge.noCloud.desc", icon: "cloud" },
  { titleKey: "privacy.badge.noAccount.title", descKey: "privacy.badge.noAccount.desc", icon: "user" },
  { titleKey: "privacy.badge.noTelemetry.title", descKey: "privacy.badge.noTelemetry.desc", icon: "signal" },
];
---

<section class="bg-white py-20 sm:py-24 dark:bg-slate-950">
  <div class="mx-auto max-w-6xl px-4 sm:px-6">
    <div class="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
      <div>
        <span class="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
          {t("privacy.kicker")}
        </span>
        <h2 class="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          {t("privacy.title")}
        </h2>
        <p class="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
          {t("privacy.body")}
        </p>
      </div>

      <div class="grid gap-4 sm:grid-cols-3">
        {badges.map((b) => (
          <div class="rounded-2xl border border-slate-200 bg-slate-50/40 p-5 text-center dark:border-slate-800 dark:bg-slate-900/40">
            <div class="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600 ring-1 ring-primary-200/50 dark:bg-primary-950/60 dark:text-primary-300 dark:ring-primary-800/40">
              {b.icon === "cloud" && (
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                  <line x1="3" y1="3" x2="21" y2="21" stroke-width="2" stroke-linecap="round" />
                </svg>
              )}
              {b.icon === "user" && (
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  <line x1="3" y1="3" x2="21" y2="21" stroke-width="2" stroke-linecap="round" />
                </svg>
              )}
              {b.icon === "signal" && (
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12z" />
                </svg>
              )}
            </div>
            <p class="mt-3 text-sm font-semibold text-slate-900 dark:text-white">
              {t(b.titleKey as any)}
            </p>
            <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
              {t(b.descKey as any)}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: build + commit**

```bash
npm run build
git add src/components/PrivacySummary.astro
git commit -m "Add PrivacySummary section component"
```

---

### Task 9: 新建 `HomeFAQ.astro`

> 复用现有 `FAQAccordion.astro`，只组装 5 个 item。

**Files:**
- Create: `src/components/HomeFAQ.astro`

- [ ] **Step 1: 写组件**

```astro
---
import type { Lang } from "@/i18n/languages";
import { useTranslations } from "@/i18n/utils";
import FAQAccordion from "./FAQAccordion.astro";

interface Props {
  lang: Lang;
}

const { lang } = Astro.props;
const t = useTranslations(lang);

const items = [1, 2, 3, 4, 5].map((n) => ({
  question: t(`homeFaq.q${n}` as any),
  answer: t(`homeFaq.a${n}` as any),
}));
---

<section class="bg-slate-50 py-20 sm:py-24 dark:bg-slate-900/40">
  <div class="mx-auto max-w-3xl px-4 sm:px-6">
    <div class="text-center">
      <span class="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
        {t("homeFaq.kicker")}
      </span>
      <h2 class="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {t("homeFaq.title")}
      </h2>
    </div>
    <div class="mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900">
      <FAQAccordion items={items} />
    </div>
  </div>
</section>
```

- [ ] **Step 2: build + commit**

```bash
npm run build
git add src/components/HomeFAQ.astro
git commit -m "Add HomeFAQ section reusing FAQAccordion"
```

---

### Task 10: 重写 `CTASection.astro`

**Files:**
- Modify: `src/components/CTASection.astro`（整体重写）

- [ ] **Step 1: 用以下内容覆盖**

```astro
---
import type { Lang } from "@/i18n/languages";
import { useTranslations } from "@/i18n/utils";

interface Props {
  lang: Lang;
}

const { lang } = Astro.props;
const t = useTranslations(lang);
---

<section class="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-600 to-accent-600 py-20 sm:py-24">
  <div
    class="pointer-events-none absolute inset-0 opacity-25"
    style="background-image:
      radial-gradient(50% 60% at 50% 0%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 60%);"
  ></div>

  <div class="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
    <h2 class="text-4xl font-bold tracking-tight text-white sm:text-5xl">
      {t("cta.title")}
    </h2>
    <p class="mx-auto mt-5 max-w-xl text-lg text-primary-100">
      {t("cta.subtitle")}
    </p>
    <div class="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
      <a
        id="footer-cta-primary"
        href={`/${lang}/download/`}
        data-fallback-label={t("cta.buttonGeneric")}
        data-template={t("cta.button")}
        class="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-primary-700 shadow-lg transition hover:bg-primary-50"
      >
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
        <span data-cta-label>{t("cta.buttonGeneric")}</span>
      </a>
    </div>
    <p class="mt-5 text-sm text-primary-100/80">{t("cta.note")}</p>
  </div>
</section>

<script is:inline>
  (function () {
    const a = document.getElementById("footer-cta-primary");
    if (!a) return;
    const label = a.querySelector("[data-cta-label]");
    if (!label) return;
    const ua = navigator.userAgent;
    let platform = "";
    if (ua.includes("Mac") && !/iPhone|iPad/.test(ua)) platform = "macOS";
    else if (ua.includes("Win")) platform = "Windows";
    if (platform) {
      const tpl = a.getAttribute("data-template") || "";
      label.textContent = tpl.replace("{platform}", platform);
    }
  })();
</script>
```

- [ ] **Step 2: build + commit**

```bash
npm run build
git add src/components/CTASection.astro
git commit -m "Rewrite CTASection with sharper copy and OS-detected button"
```

---

### Task 11: 把新 section 串到首页（en + zh）

> 一次性把两个 index.astro 改成新 IA。注意 hero 和 stats 之间的"How it works"挪到中段（第 7 节），不再紧跟 hero。

**Files:**
- Modify: `src/pages/en/index.astro`
- Modify: `src/pages/zh/index.astro`

- [ ] **Step 1: 重写 `src/pages/en/index.astro`**

整文件覆盖：

```astro
---
import BaseLayout from "@/layouts/BaseLayout.astro";
import Hero from "@/components/Hero.astro";
import SocialProofRow from "@/components/SocialProofRow.astro";
import UseCases from "@/components/UseCases.astro";
import Showcase from "@/components/Showcase.astro";
import CompareTable from "@/components/CompareTable.astro";
import StatsBar from "@/components/StatsBar.astro";
import PrivacySummary from "@/components/PrivacySummary.astro";
import HomeFAQ from "@/components/HomeFAQ.astro";
import CTASection from "@/components/CTASection.astro";
import { useTranslations } from "@/i18n/utils";
import { currentVersion, releaseDate } from "@/data/downloads";

const lang = "en";
const t = useTranslations(lang);

const steps = [
  { num: "01", titleKey: "howItWorks.step1.title", descKey: "howItWorks.step1.desc" },
  { num: "02", titleKey: "howItWorks.step2.title", descKey: "howItWorks.step2.desc" },
  { num: "03", titleKey: "howItWorks.step3.title", descKey: "howItWorks.step3.desc" },
];

const faqItems = [1, 2, 3, 4, 5].map((n) => ({
  "@type": "Question",
  name: t(`homeFaq.q${n}` as any),
  acceptedAnswer: {
    "@type": "Answer",
    text: t(`homeFaq.a${n}` as any),
  },
}));
---

<BaseLayout
  title="Send files between Mac, Windows, iPhone, Android — like AirDrop, but everywhere"
  description="Link2Send moves files and folders between any two devices on your local network — Mac, Windows, iPhone, Android. No cloud, no compression, no sign-up. Free and open source."
  lang={lang}
>
  <Hero lang={lang} />
  <SocialProofRow lang={lang} />
  <UseCases lang={lang} />
  <Showcase lang={lang} />
  <CompareTable lang={lang} />
  <StatsBar lang={lang} />

  <!-- How it works -->
  <section class="relative overflow-hidden bg-white py-20 sm:py-24 dark:bg-slate-950">
    <div class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/40 dark:to-slate-950"></div>
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="mx-auto max-w-2xl text-center">
        <span class="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
          THREE STEPS
        </span>
        <h2 class="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] dark:text-white">
          {t("howItWorks.title")}
        </h2>
        <p class="mt-4 text-lg text-slate-600 dark:text-slate-300">
          {t("howItWorks.subtitle")}
        </p>
      </div>
      <div class="mt-16 grid gap-8 sm:grid-cols-3">
        {steps.map((step) => (
          <div class="relative rounded-2xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-slate-900">
            <span class="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              STEP {step.num}
            </span>
            <h3 class="mt-3 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
              {t(step.titleKey as any)}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {t(step.descKey as any)}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  <PrivacySummary lang={lang} />
  <HomeFAQ lang={lang} />
  <CTASection lang={lang} />

  <script
    type="application/ld+json"
    set:html={JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Link2Send",
      alternateName: "邻传",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "macOS, Windows, iOS, Android",
      softwareVersion: currentVersion,
      datePublished: releaseDate,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      description:
        "Cross-platform peer-to-peer file transfer over your local network. No cloud, no accounts.",
      url: "https://link2send.com",
      downloadUrl: "https://link2send.com/en/download/",
    })}
  />
  <script
    type="application/ld+json"
    set:html={JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems,
    })}
  />
  <script
    type="application/ld+json"
    set:html={JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Link2Send",
      alternateName: "邻传",
      url: "https://link2send.com",
      email: "support@link2send.com",
      logo: "https://link2send.com/icon.png",
    })}
  />
</BaseLayout>
```

- [ ] **Step 2: 重写 `src/pages/zh/index.astro`** （结构对称）

```astro
---
import BaseLayout from "@/layouts/BaseLayout.astro";
import Hero from "@/components/Hero.astro";
import SocialProofRow from "@/components/SocialProofRow.astro";
import UseCases from "@/components/UseCases.astro";
import Showcase from "@/components/Showcase.astro";
import CompareTable from "@/components/CompareTable.astro";
import StatsBar from "@/components/StatsBar.astro";
import PrivacySummary from "@/components/PrivacySummary.astro";
import HomeFAQ from "@/components/HomeFAQ.astro";
import CTASection from "@/components/CTASection.astro";
import { useTranslations } from "@/i18n/utils";
import { currentVersion, releaseDate } from "@/data/downloads";

const lang = "zh";
const t = useTranslations(lang);

const steps = [
  { num: "01", titleKey: "howItWorks.step1.title", descKey: "howItWorks.step1.desc" },
  { num: "02", titleKey: "howItWorks.step2.title", descKey: "howItWorks.step2.desc" },
  { num: "03", titleKey: "howItWorks.step3.title", descKey: "howItWorks.step3.desc" },
];

const faqItems = [1, 2, 3, 4, 5].map((n) => ({
  "@type": "Question",
  name: t(`homeFaq.q${n}` as any),
  acceptedAnswer: {
    "@type": "Answer",
    text: t(`homeFaq.a${n}` as any),
  },
}));
---

<BaseLayout
  title="Mac、Windows、iPhone、Android 之间互传文件——像 AirDrop 一样，但跨平台"
  description="邻传在 Mac、Windows、iPhone、Android 任意两台设备之间传文件和文件夹，全部走局域网。不上云、不压缩、不注册。免费开源。"
  lang={lang}
>
  <Hero lang={lang} />
  <SocialProofRow lang={lang} />
  <UseCases lang={lang} />
  <Showcase lang={lang} />
  <CompareTable lang={lang} />
  <StatsBar lang={lang} />

  <!-- How it works -->
  <section class="relative overflow-hidden bg-white py-20 sm:py-24 dark:bg-slate-950">
    <div class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/40 dark:to-slate-950"></div>
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="mx-auto max-w-2xl text-center">
        <span class="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
          三步上手
        </span>
        <h2 class="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] dark:text-white">
          {t("howItWorks.title")}
        </h2>
        <p class="mt-4 text-lg text-slate-600 dark:text-slate-300">
          {t("howItWorks.subtitle")}
        </p>
      </div>
      <div class="mt-16 grid gap-8 sm:grid-cols-3">
        {steps.map((step) => (
          <div class="relative rounded-2xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-slate-900">
            <span class="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              第 {step.num} 步
            </span>
            <h3 class="mt-3 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
              {t(step.titleKey as any)}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {t(step.descKey as any)}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  <PrivacySummary lang={lang} />
  <HomeFAQ lang={lang} />
  <CTASection lang={lang} />

  <script
    type="application/ld+json"
    set:html={JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Link2Send",
      alternateName: "邻传",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "macOS, Windows, iOS, Android",
      softwareVersion: currentVersion,
      datePublished: releaseDate,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      description:
        "跨平台、加密、点对点的局域网文件传输。无云端、无账号。",
      url: "https://link2send.com",
      downloadUrl: "https://link2send.com/zh/download/",
    })}
  />
  <script
    type="application/ld+json"
    set:html={JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems,
    })}
  />
  <script
    type="application/ld+json"
    set:html={JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Link2Send",
      alternateName: "邻传",
      url: "https://link2send.com",
      email: "support@link2send.com",
      logo: "https://link2send.com/icon.png",
    })}
  />
</BaseLayout>
```

- [ ] **Step 3: build + 浏览器全量回归（重要）**

```bash
npm run build
npm run dev
```

逐项检查（在浏览器里）：
1. 打开 `http://localhost:4321/en/` —— 看完整 10 段流程，跳转/锚点正常
2. 打开 `http://localhost:4321/zh/` —— 同上，且中文文案无英文遗漏
3. 切暗色模式，对比表 / FAQ accordion / 渐变 CTA 都正常
4. Devtools 切 375px 宽（iPhone SE），对比表应该退回到 stacked cards 形态
5. JSON-LD 在 `view-source:` 里能看到 SoftwareApplication / FAQPage / Organization 三块

> 任何一项不对，先停下修，不进 commit。

- [ ] **Step 4: commit**

```bash
git add src/pages/en/index.astro src/pages/zh/index.astro
git commit -m "Wire new homepage sections (UseCases, Compare, Privacy, HomeFAQ)"
```

---

### Task 12: 导入真实 iOS 截图

> 用户已经准备好 9 张真实 iOS App 截图（5 EN + 4 ZH），位于
> `/Users/jackz/Documents/indie developer/link2send/link2send-ios-截图/6.5`。
> 把这些拷到 `public/screenshots/ios/`，并保持文件名清晰。

**Files:**
- Create: `public/screenshots/ios/*.png`（9 张）
- Create: `docs/screenshot-checklist.md`（清单文档，标注已完成 / 待补）

- [ ] **Step 1: 拷贝截图到 public**

```bash
mkdir -p public/screenshots/ios
cp "/Users/jackz/Documents/indie developer/link2send/link2send-ios-截图/6.5/"*.png public/screenshots/ios/
ls public/screenshots/ios/
```
预期输出（9 个文件）：
```
en-01-devices-home.png
en-02-chat.png
en-03-settings.png
en-04-receive-request.png
en-05-transfer-progress.png
zh-01-receive-request.png
zh-02-transfer-progress.png
zh-03-file-saved.png
zh-04-settings.png
```

> 这些截图原始尺寸是 6.5 寸（1284 × 2778），PNG ~1 MB/张。本任务先不强行压缩；如 Lighthouse 投诉过大再用 `pngquant` / `oxipng` 处理。

- [ ] **Step 2: 写 checklist 文档**

`docs/screenshot-checklist.md`：

```markdown
# 官网用产品截图清单

> 路径：`public/screenshots/<platform>/<file>.png`
> 命名约定：`<lang>-<num>-<scene>.png`（保留 iOS 已有命名）

## ✅ 已就绪 — iOS 6.5"
位置：`public/screenshots/ios/`

| 文件 | 内容 | 用途 |
|---|---|---|
| `en-01-devices-home.png` | 设备列表首页（EN） | UseCases · crossOS 卡片 |
| `en-02-chat.png` | 聊天主界面（EN） | Hero / Showcase 备用 |
| `en-03-settings.png` | 设置页（EN） | Privacy section 备用 |
| `en-04-receive-request.png` | 接收请求确认（EN） | UseCases · daily 备用 |
| `en-05-transfer-progress.png` | 传输进度（EN） | UseCases · devs 卡片 |
| `zh-01-receive-request.png` | 接收请求（ZH） | 中文页对位 |
| `zh-02-transfer-progress.png` | 传输进度（ZH） | 中文页对位 |
| `zh-03-file-saved.png` | 保存完成（ZH） | 中文页 daily 备用 |
| `zh-04-settings.png` | 设置（ZH） | 中文页 Privacy 备用 |

## ⏳ 待补 — Desktop / Android
| 期望文件 | 用途 |
|---|---|
| `desktop/chat-light-2x.png` | Hero 桌面端（替代 ChatPreview 静态版） |
| `desktop/chat-dark-2x.png` | Hero 暗色 |
| `desktop/folder-transfer-light-2x.png` | UseCases · devs 卡片桌面端 |
| `android/main.png` | UseCases / 跨平台徽标行 |
| `composite/cross-platform-row.png` | 四端并排合成图 |
```

- [ ] **Step 3: commit**

```bash
git add public/screenshots/ios docs/screenshot-checklist.md
git commit -m "Import real iOS app screenshots into public/screenshots/ios/"
```

---

### Task 12b: 把真实 iOS 截图嵌入 UseCases 卡片

> Task 4 把 UseCases 卡片做成"图标 + 文字 + 引语"的纯文字版。本任务给前两张卡片（crossOS、devs）加一张右侧 iPhone 截图，让用户看到真东西。daily 卡片暂时留纯文字（等中文 zh-03-file-saved 截图也可以补）。

**Files:**
- Modify: `src/components/UseCases.astro`

- [ ] **Step 1: 给 Case 类型加一个可选 `screenshotKey`**

把 `type Case` 块替换为：

```ts
type Case = {
  tagKey: string;
  titleKey: string;
  bodyKey: string;
  quoteKey: string;
  icon: "phone" | "code" | "heart";
  accent: "primary" | "accent" | "emerald";
  screenshotKey?: "crossOS" | "devs";
};
```

把 `cases` 数组里 crossOS 和 devs 项加上 `screenshotKey`：

```ts
const cases: Case[] = [
  {
    tagKey: "usecases.crossOS.tag",
    titleKey: "usecases.crossOS.title",
    bodyKey: "usecases.crossOS.body",
    quoteKey: "usecases.crossOS.quote",
    icon: "phone",
    accent: "primary",
    screenshotKey: "crossOS",
  },
  {
    tagKey: "usecases.devs.tag",
    titleKey: "usecases.devs.title",
    bodyKey: "usecases.devs.body",
    quoteKey: "usecases.devs.quote",
    icon: "code",
    accent: "accent",
    screenshotKey: "devs",
  },
  {
    tagKey: "usecases.daily.tag",
    titleKey: "usecases.daily.title",
    bodyKey: "usecases.daily.body",
    quoteKey: "usecases.daily.quote",
    icon: "heart",
    accent: "emerald",
  },
];
```

- [ ] **Step 2: 在 frontmatter 末尾增加按 lang 选图的 helper**

紧接 `accentClasses` 块下方加：

```ts
const screenshots: Record<NonNullable<Case["screenshotKey"]>, { en: string; zh: string }> = {
  crossOS: {
    en: "/screenshots/ios/en-01-devices-home.png",
    zh: "/screenshots/ios/zh-01-receive-request.png",
  },
  devs: {
    en: "/screenshots/ios/en-05-transfer-progress.png",
    zh: "/screenshots/ios/zh-02-transfer-progress.png",
  },
};

function screenshotFor(key: Case["screenshotKey"]): string | null {
  if (!key) return null;
  return screenshots[key][lang] ?? screenshots[key].en;
}
```

- [ ] **Step 3: 改卡片渲染，让带截图的卡片在 lg 视口下变两列**

把 cases.map 渲染块替换为：

```astro
<div class="mt-14 grid gap-6 lg:grid-cols-3">
  {cases.map((c) => {
    const screenshot = screenshotFor(c.screenshotKey);
    return (
      <div class="flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden dark:border-slate-800 dark:bg-slate-900">
        <div class="flex flex-1 flex-col p-7">
          <span class:list={["inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em]", accentClasses[c.accent]]}>
            <span class="inline-flex h-3.5 w-3.5">
              {c.icon === "phone" && (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              )}
              {c.icon === "code" && (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              )}
              {c.icon === "heart" && (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              )}
            </span>
            {t(c.tagKey as any)}
          </span>
          <h3 class="mt-5 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
            {t(c.titleKey as any)}
          </h3>
          <p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {t(c.bodyKey as any)}
          </p>
          <p class="mt-5 border-l-2 border-slate-200 pl-3 text-sm italic text-slate-500 dark:border-slate-700 dark:text-slate-400">
            "{t(c.quoteKey as any)}"
          </p>
        </div>
        {screenshot && (
          <div class="border-t border-slate-100 bg-gradient-to-b from-slate-50 to-white px-7 pt-6 dark:border-slate-800 dark:from-slate-900/60 dark:to-slate-900">
            <img
              src={screenshot}
              alt={t(c.titleKey as any)}
              loading="lazy"
              decoding="async"
              class="mx-auto h-72 w-auto object-contain object-top"
              width="642"
              height="1389"
            />
          </div>
        )}
      </div>
    );
  })}
</div>
```

- [ ] **Step 4: build + 浏览器看一眼**

```bash
npm run build
npm run dev
```
打开 `/zh/` 与 `/en/`，确认 UseCases 三张卡片中：
- 前两张底部有 iPhone 截图（中英对应不同图）
- 第三张仍是纯文字（不留空白条）
- 截图高度统一（h-72 ≈ 288px）
- 暗色模式下背景渐变正常

- [ ] **Step 5: commit**

```bash
git add src/components/UseCases.astro
git commit -m "Embed real iOS screenshots in UseCases cards"
```

---

### Task 13: 移动端 + 暗色模式回归 + 性能 sanity check

**Files:**
- 无代码改动

- [ ] **Step 1: dev server 起来**

```bash
npm run dev
```

- [ ] **Step 2: 在 Chrome devtools 里逐个检查**

| 页面 | 视口 | 主题 | 检查点 |
|---|---|---|---|
| `/zh/` | 1440px | light | hero 占满首屏，按钮清晰，对比表横向无溢出 |
| `/zh/` | 1440px | dark | 渐变背景 / 表格高亮列 / FAQ accordion 都清晰 |
| `/zh/` | 375px | light | 对比表退化为 stacked cards；hero 单列 |
| `/zh/` | 375px | dark | 同上，对比按钮文字色对比度 |
| `/en/` | 1440px | light | 英文换行不别扭；title 不溢出 |
| `/en/` | 375px | light | 同上 |

- [ ] **Step 3: Lighthouse 跑一次**

```bash
npm run build && npm run preview &
# 在另一终端：用 Chrome devtools → Lighthouse → Performance + SEO + Best Practices
```
预期：所有评分 ≥ 90。如果 LCP > 2.5s，检查 hero 区是否引入了大图或动画。

- [ ] **Step 4: 关掉 dev server，commit 文档（如果有 checklist 备注）**

无改动则不 commit。

---

### Task 14: 一次性合并到 main + 推送

> 上面每个 task 已经有自己的 commit。最后只需要确认无未提交改动并 push。

- [ ] **Step 1: 确认 git status 干净**

```bash
git status
```
预期：`nothing to commit, working tree clean`。如果有未提交的，先 `git diff` 看清楚再决定 commit 还是 discard。

- [ ] **Step 2: push**

```bash
git push
```

- [ ] **Step 3: 验证 Cloudflare Pages 部署**

等 1–2 分钟后访问 https://link2send.com/zh/ 与 https://link2send.com/en/，确认新版上线。

---

## 4. 不在本计划范围内的事（明确列出，避免误改）

- **Features 页 (`/zh/features`、`/en/features`)** —— 留给下一轮。本次首页完成后用户应该已经能转化，features 页是次要的。
- **Download 页大改** —— 本次只更新了版本号，不改卡片版式 / 不加截图。
- **Docs 页** —— 完全不动。
- **Footer / Header** —— 不动。
- **暗色 / 亮色色调微调** —— Tailwind primary/accent 配色不动。
- **App 端代码** —— 不动 `/Users/jackz/AI_Code/opencode/link2send`。

---

## 5. 自检 (self-review)

> 写完计划后对着 spec 重新核一遍。

**5.1 Spec coverage**

| 用户提出的问题 | 计划如何解决 | 任务编号 |
|---|---|---|
| (1) 不突出"为什么下载" | Hero 重写为 AirDrop 类比 + 三大价值 + 用户场景 + 对比表 | T2-T11 |
| (2) 文案描述不 OK | 全量重写 hero / showcase / stats / cta；新增 usecases / compare / privacy / faq 文案，中英分别打磨 | T2 |
| (3) 整体设计布局不够 | 信息架构从 5 段扩到 10 段；对比表 + FAQ + 用户场景 + 信任徽标都是新视觉模块 | T1 IA + T3-T11 |
| 借鉴优秀网站 | 计划 §0 列了 LocalSend / Tailscale / Linear / Raycast / Stripe / Things 的具体借鉴点 | §0 |

**5.2 Placeholder scan**

✅ 无 TBD / TODO / "implement later" 字样
✅ 所有新组件都有完整代码、所有 i18n 都给了具体中英文
✅ "test" 步骤改为 build + 浏览器手验，符合营销静态站性质，已在 §3 任务约定里说明

**5.3 Type / 命名一致性**

- `social.*`、`usecases.*`、`compare.*`、`privacy.*`、`homeFaq.*`、`cta.buttonGeneric / cta.note` 这些新 key 在 T2 加入，T3-T11 引用，名字一致
- 组件 props 都是 `{ lang: Lang }`，与现有组件一致
- `tile.icon` 在 Showcase 改成 `bolt | globe | lock`（T6 与 T2 一致）
- `c.icon` 在 UseCases 是 `phone | code | heart`（T4 内部一致，与 Showcase 不冲突）

---

## 6. 估时（粗）

| 任务 | 预估 |
|---|---|
| T1 (版本号) | 5 min |
| T2 (i18n 大量文案) | 90 min（手动质量把关） |
| T3-T10 (8 个组件新建/改写) | 4-5 hours |
| T11 (首页串组件) | 60 min |
| T12 (导入 iOS 截图 + checklist) | 15 min |
| T12b (UseCases 嵌入真截图) | 30 min |
| T13 (回归) | 60 min |
| T14 (push) | 5 min |
| **合计** | **~8 hours**（一个 focused day） |

> 时间敏感的话，可以分两次 commit window：第一次只做 T1-T11 上线（核心改造），T12-T14 第二天补。
