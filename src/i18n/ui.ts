export const ui = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.download": "Download",
    "nav.docs": "Docs",

    // Hero
    "hero.kicker": "Open source · MIT · No cloud",
    "hero.title": "Send files between your devices, like AirDrop — but everywhere.",
    "hero.titleAccent": "like AirDrop",
    "hero.subtitle":
      "Mac, Windows, iPhone, Android — Link2Send moves files and folders between any two devices on your network. No cloud, no compression, no sign-up.",
    "hero.cta.primary": "Download for {platform}",
    "hero.cta.primaryGeneric": "Get Link2Send — Free",
    "hero.cta.secondary": "How it works",
    "hero.cta.note": "Free · Open source · macOS 11+ · Windows 10+",

    // Hero chat preview (mockup labels)
    "preview.search": "Search",
    "preview.contactName": "Openclaw",
    "preview.deviceTag": "Mac",
    "preview.contactPlatform": "macOS",
    "preview.contactIP": "192.168.31.138",
    "preview.myIP": "My IP",
    "preview.myIPValue": "192.168.31.248",
    "preview.status": "Online",
    "preview.inputPlaceholder": "Type a message...",
    "preview.msgIncoming": "Send me the project folder?",
    "preview.msgOutgoing": "On it. Folder is a bit large.",
    "preview.fileName": "Project · src/",
    "preview.fileMeta": "237 files · 2.4 GB",
    "preview.fileProgress": "76% · 10 MB/s",
    "preview.fileEta": "~17s left",

    // Social proof row
    "social.kicker": "Trusted by indie devs, designers and small teams",
    "social.openSource": "Open source · MIT",
    "social.crossPlatform": "Mac · Windows · iPhone · Android",
    "social.github": "Star on GitHub",

    // Stats bar
    "stats.kicker": "WHAT THE NUMBERS LOOK LIKE",
    "stats.size": "50 GB+",
    "stats.size.desc": "Largest single transfer tested",
    "stats.parallel": "10 000+",
    "stats.parallel.desc": "Files in one folder, one drag",
    "stats.cloud": "0",
    "stats.cloud.desc": "Cloud servers, accounts or telemetry",
    "stats.encryption": "100%",
    "stats.encryption.desc": "Bytes over mutual TLS 1.3",

    // Platforms
    "platform.windows": "Windows",
    "platform.macos": "macOS",
    "platform.linux": "Linux",
    "platform.ios": "iOS",
    "platform.android": "Android",
    "platform.allPlatforms": "Available on Mac, Windows, iOS and Android",

    // Use cases
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

    // Showcase (3 pillars — benefit-led)
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

    // Compare table
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

    // How it works
    "howItWorks.title": "How it works",
    "howItWorks.subtitle": "Three steps from install to first transfer.",
    "howItWorks.step1.title": "Install on both devices",
    "howItWorks.step1.desc":
      "Grab the right build for each device. First launch generates a unique device certificate locally.",
    "howItWorks.step2.title": "Pair on the same network",
    "howItWorks.step2.desc":
      "Devices on the same Wi-Fi or LAN auto-discover via UDP. Confirm the pairing once with a QR code or short code.",
    "howItWorks.step3.title": "Drop files, hit send",
    "howItWorks.step3.desc":
      "Drag a file or a 50 GB folder. Transfers run over a TLS connection pool with resume and integrity checks built in.",

    // Privacy summary
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

    // Home FAQ
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

    // CTA
    "cta.title": "Stop uploading to send. Just send.",
    "cta.subtitle":
      "Free, open source, and ready in under a minute. The next big file you move is already faster.",
    "cta.button": "Download for {platform}",
    "cta.buttonGeneric": "Download Link2Send — Free",
    "cta.note": "macOS · Windows · iOS · Android",

    // Features page
    "features.title": "Features",
    "features.subtitle":
      "Everything the latest Link2Send ships, grouped by what it does for you.",

    // Feature groups
    "features.group.discovery.title": "Discovery & pairing",
    "features.group.discovery.desc":
      "Find each other on the LAN automatically — and trust each other deliberately.",
    "features.group.security.title": "Security",
    "features.group.security.desc":
      "Mutual TLS, certificate pinning, and a hardened receiver that refuses to write outside its sandbox.",
    "features.group.experience.title": "Day-to-day use",
    "features.group.experience.desc":
      "Chat-style UI, instant previews, folder transfer, favorites — file sharing that feels like messaging.",
    "features.group.privacy.title": "Privacy",
    "features.group.privacy.desc":
      "No accounts, no cloud, no telemetry. The product can't see your files because it isn't online.",

    // Discovery features
    "features.autoDiscovery.title": "Automatic LAN discovery",
    "features.autoDiscovery.desc":
      "UDP broadcast finds nearby devices every 2 seconds. When broadcast is blocked, adaptive unicast keeps known peers visible.",
    "features.qrPairing.title": "QR & short-code pairing",
    "features.qrPairing.desc":
      "Pair across the room with a QR scan, or type a 6-digit code. The certificate fingerprint is verified during pairing.",
    "features.trustedDevices.title": "Trusted device list",
    "features.trustedDevices.desc":
      "Once paired, devices reconnect silently. Revoke trust at any time from the device manager.",

    // Security features
    "features.mtls.title": "Mutual TLS 1.3",
    "features.mtls.desc":
      "Every session is built on rustls 1.3 with mutual certificate auth. Encryption can't be disabled and there is no fallback path.",
    "features.fingerprint.title": "Device fingerprint",
    "features.fingerprint.desc":
      "Each device is identified by the SHA-256 of its self-signed certificate — pinned at pairing time and checked on every connect.",
    "features.pathGuard.title": "Path-traversal guard",
    "features.pathGuard.desc":
      "The receiver rejects absolute paths, '..' segments, NUL bytes and Windows reserved names — files cannot escape the receive folder.",
    "features.encryptedStore.title": "Encrypted message store",
    "features.encryptedStore.desc":
      "Chat history is stored in a local SQLite database encrypted with AES-256-GCM. The on-disk database is unreadable without your device.",

    // Experience features
    "features.chat.title": "Chat-style transfers",
    "features.chat.desc":
      "Send text, emoji, screenshots and files in one timeline. Search, scroll back, treat it like a messenger you actually own.",
    "features.preview.title": "Built-in previews",
    "features.preview.desc":
      "Thumbnails for images, PDFs and Office documents are generated on-device — no upload, no third-party preview service.",
    "features.folder.title": "Folder & huge-file transfer",
    "features.folder.desc":
      "Send a folder of 10 000 files or a 50 GB ISO with one drop. The pool handles concurrency so the UI stays responsive.",
    "features.favorites.title": "Favorites & history",
    "features.favorites.desc":
      "Star important messages or files for quick access. Full session history is searchable and stays only on your devices.",

    // Privacy features
    "features.noCloud.title": "Zero cloud",
    "features.noCloud.desc":
      "No relay servers, no upload step. The product literally has no backend to be breached.",
    "features.noAccount.title": "Zero account",
    "features.noAccount.desc":
      "No sign-up, no email, no phone number. Identity is the device certificate — generated locally on first launch.",
    "features.noTelemetry.title": "Zero telemetry",
    "features.noTelemetry.desc":
      "No analytics, no crash reporting SDK, no advertising IDs. The app makes no outbound internet connections at all.",

    // Download page
    "download.title": "Download Link2Send",
    "download.subtitle":
      "Free and open source under the MIT License. Pick your platform.",
    "download.version": "Version",
    "download.latest": "Latest version",
    "download.released": "Released",
    "download.systemReq": "Requires",
    "download.recommended": "Recommended for your system",
    "download.status.stable": "Available",
    "download.status.pendingReview": "In store review",
    "download.status.beta": "Beta",
    "download.status.planned": "Planned",
    "download.notify.title": "Notify me when it ships",
    "download.notify.placeholder": "you@example.com",
    "download.notify.cta": "Email us",
    "download.checksum.title": "SHA-256 checksum",
    "download.checksum.copy": "Copy",
    "download.checksum.copied": "Copied",
    "download.notice.macos.title": "First launch on macOS",
    "download.notice.macos.body":
      "The build is not yet Apple-notarized. After the first launch, right-click the app in Finder and choose Open, then confirm. macOS will remember the choice afterwards.",
    "download.notice.windows.title": "First launch on Windows",
    "download.notice.windows.body":
      "Windows SmartScreen may warn the first time. Click 'More info' → 'Run anyway'. The installer is signed with our publisher certificate.",
    // Footer
    "footer.description":
      "Cross-platform, encrypted, peer-to-peer file transfer over your local network. No cloud. No accounts.",
    "footer.product": "Product",
    "footer.resources": "Resources",
    "footer.copyright": "Link2Send",
    "footer.contact": "Contact",
    "footer.email": "support@link2send.com",

    // Docs
    "docs.title": "Documentation",
    "docs.gettingStarted": "Getting Started",
    "docs.howItWorks": "How It Works",
    "docs.faq": "FAQ",
    "docs.troubleshooting": "Troubleshooting",

    // Legal
    "legal.privacy": "Privacy Policy",
    "legal.terms": "Terms of Service",
    "legal.legal": "Legal",

    // Common
    "common.learnMore": "Learn more",
    "common.backToTop": "Back to top",
  },
  zh: {
    // Navigation
    "nav.home": "首页",
    "nav.features": "功能",
    "nav.download": "下载",
    "nav.docs": "文档",

    // Hero
    "hero.kicker": "开源 · MIT · 不走云端",
    "hero.title": "在自己的设备之间传文件——像 AirDrop 一样，但跨平台",
    "hero.titleAccent": "像 AirDrop 一样",
    "hero.subtitle":
      "Mac、Windows、iPhone、Android 互传——文件和文件夹直接走局域网。不上云、不压缩、不注册。",
    "hero.cta.primary": "下载 {platform} 版",
    "hero.cta.primaryGeneric": "免费下载邻传",
    "hero.cta.secondary": "看它怎么工作",
    "hero.cta.note": "免费 · 开源 · macOS 11+ · Windows 10+",

    // Hero chat preview (mockup labels)
    "preview.search": "搜索",
    "preview.contactName": "Openclaw",
    "preview.deviceTag": "Mac",
    "preview.contactPlatform": "macOS",
    "preview.contactIP": "192.168.31.138",
    "preview.myIP": "本机 IP",
    "preview.myIPValue": "192.168.31.248",
    "preview.status": "在线",
    "preview.inputPlaceholder": "输入消息...",
    "preview.msgIncoming": "把项目文件夹发我？",
    "preview.msgOutgoing": "这就发，文件夹有点大。",
    "preview.fileName": "Project · src/",
    "preview.fileMeta": "237 个文件 · 2.4 GB",
    "preview.fileProgress": "76% · 10 MB/s",
    "preview.fileEta": "剩余 ~17s",

    // Social proof row
    "social.kicker": "面向独立开发者、设计师与小团队",
    "social.openSource": "开源 · MIT 协议",
    "social.crossPlatform": "Mac · Windows · iPhone · Android",
    "social.github": "在 GitHub 上 Star",

    // Stats bar
    "stats.kicker": "用数字说话",
    "stats.size": "50 GB+",
    "stats.size.desc": "已实测的单次传输上限",
    "stats.parallel": "10 000+",
    "stats.parallel.desc": "一个文件夹的文件数，一次拖入",
    "stats.cloud": "0",
    "stats.cloud.desc": "云服务器 / 账号 / 遥测",
    "stats.encryption": "100%",
    "stats.encryption.desc": "全量字节走双向 TLS 1.3",

    // Platforms
    "platform.windows": "Windows",
    "platform.macos": "macOS",
    "platform.linux": "Linux",
    "platform.ios": "iOS",
    "platform.android": "Android",
    "platform.allPlatforms": "已覆盖 Mac、Windows、iOS、Android",

    // Use cases
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

    // Showcase (3 pillars — benefit-led)
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
      "邻传没有\"我们的服务器可能泄漏\"这一说，因为根本就没有云端。设备间双向 TLS、本地 AES-256-GCM 加密、源代码 MIT 协议公开可审。",
    "showcase.private.point1": "双向 TLS 1.3，加密强制开启不可关闭",
    "showcase.private.point2": "无账号、无遥测、不发起任何外网连接",
    "showcase.private.point3": "源码开源，自己可审",

    // Compare table
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

    // How it works
    "howItWorks.title": "工作原理",
    "howItWorks.subtitle": "从安装到第一次传输，只要三步。",
    "howItWorks.step1.title": "在两台设备上安装",
    "howItWorks.step1.desc":
      "下载对应平台版本。首次启动时本地生成唯一设备证书，作为身份凭证。",
    "howItWorks.step2.title": "同一网络下配对",
    "howItWorks.step2.desc":
      "同一 Wi-Fi 或局域网内的设备会自动 UDP 发现。首次扫码或输入短码确认即配对完成。",
    "howItWorks.step3.title": "拖文件，按发送",
    "howItWorks.step3.desc":
      "拖一个文件或 50 GB 文件夹都行。底层 TLS 连接池负责并发、断点续传与完整性校验。",

    // Privacy summary
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

    // Home FAQ
    "homeFaq.kicker": "快速回答",
    "homeFaq.title": "下载前你最可能问的几个问题",

    "homeFaq.q1": "两台设备必须在同一 Wi-Fi 吗？",
    "homeFaq.a1": "需要在同一局域网内，通常就是同一个 Wi-Fi 或同一台路由器下的有线网络。不同 VLAN、Guest 网络下的设备彼此看不到。",

    "homeFaq.q2": "没网也能用吗？",
    "homeFaq.a2": "可以。邻传只需要局域网，发现和传输都不需要外网。唯一需要联网的环节是从这个网站把 App 下下来。",

    "homeFaq.q3": "数据是加密的吗？",
    "homeFaq.a3": "每一字节都走配对设备之间的双向 TLS 1.3，加密强制开启没有降级路径。本地聊天记录使用 AES-256-GCM 加密保存。",

    "homeFaq.q4": "跟 AirDrop、LocalSend 比有什么不同？",
    "homeFaq.a4": "AirDrop 只在苹果设备间工作。LocalSend 思路接近，但偏单次传输，缺聊天历史、缺原生大文件夹、缺 iOS 原生 App。邻传保留了\"快\"和\"不走云端\"，再叠加跨平台覆盖和真正的聊天式时间线。",

    "homeFaq.q5": "真的免费吗？有什么套路？",
    "homeFaq.a5": "免费、MIT 协议、无遥测、无付费档。\"套路\"就是没有套路——邻传是个工具，不是个服务。我们没有你的数据，因为我们根本没有后端。",

    // CTA
    "cta.title": "别再为了\"传\"先上传到云了。直接发。",
    "cta.subtitle":
      "免费、开源，一分钟内就可以用上。下一个大文件，本可以更快。",
    "cta.button": "下载 {platform} 版",
    "cta.buttonGeneric": "免费下载邻传",
    "cta.note": "macOS · Windows · iOS · Android",

    // Features page
    "features.title": "功能特性",
    "features.subtitle":
      "邻传最新版本的全部能力，按它能为你做什么分组呈现。",

    // Feature groups
    "features.group.discovery.title": "发现与配对",
    "features.group.discovery.desc":
      "在局域网内自动找到彼此——并经过你的明确确认才建立信任。",
    "features.group.security.title": "安全",
    "features.group.security.desc":
      "双向 TLS、证书锁定、受加固的接收端：拒绝任何写到沙箱外的尝试。",
    "features.group.experience.title": "日常使用",
    "features.group.experience.desc":
      "聊天式 UI、即时预览、文件夹传输、收藏——像用 IM 一样传文件。",
    "features.group.privacy.title": "隐私",
    "features.group.privacy.desc":
      "无账号、无云端、无遥测。产品根本看不到你的文件，因为它从不联网。",

    // Discovery features
    "features.autoDiscovery.title": "自动发现局域网设备",
    "features.autoDiscovery.desc":
      "UDP 广播每 2 秒发现附近设备。广播被防火墙拦截时，自适应单播继续保持已知设备在线。",
    "features.qrPairing.title": "二维码 / 短码配对",
    "features.qrPairing.desc":
      "扫码或输入 6 位短码即可配对，配对过程中会校验对端证书指纹。",
    "features.trustedDevices.title": "可信设备列表",
    "features.trustedDevices.desc":
      "配对一次，之后静默重连。可在设备管理中随时撤销信任。",

    // Security features
    "features.mtls.title": "双向 TLS 1.3",
    "features.mtls.desc":
      "基于 rustls 1.3 + 双向证书认证的加密会话。加密不可关闭，无降级路径。",
    "features.fingerprint.title": "设备指纹识别",
    "features.fingerprint.desc":
      "每台设备由其自签名证书的 SHA-256 唯一标识——配对时锁定，每次连接重新校验。",
    "features.pathGuard.title": "路径遍历守卫",
    "features.pathGuard.desc":
      "接收端拒绝绝对路径、`..` 段、NUL 字节、Windows 保留名——文件无法逃出接收目录。",
    "features.encryptedStore.title": "加密消息库",
    "features.encryptedStore.desc":
      "聊天记录保存在本地 SQLite 数据库，使用 AES-256-GCM 加密。离开你的设备无法解读。",

    // Experience features
    "features.chat.title": "聊天式传输",
    "features.chat.desc":
      "文字、表情、截图、文件在同一时间线上发送。可搜索、可回看，像你能掌控的 IM。",
    "features.preview.title": "内置预览",
    "features.preview.desc":
      "图片、PDF、Office 文档缩略图全部本地生成，无需上传，没有第三方预览服务。",
    "features.folder.title": "文件夹与超大文件",
    "features.folder.desc":
      "万级文件夹或 50 GB 单文件一次性拖入。连接池负责并发调度，UI 始终顺滑。",
    "features.favorites.title": "收藏与历史",
    "features.favorites.desc":
      "重要消息或文件标星即可快速回看。完整会话历史可搜索，且只存放在你的设备上。",

    // Privacy features
    "features.noCloud.title": "零云端",
    "features.noCloud.desc":
      "没有中转服务器，也没有上传环节——产品根本没有可被攻破的后端。",
    "features.noAccount.title": "零账号",
    "features.noAccount.desc":
      "不注册、不验证邮箱、不绑定手机号。身份就是首次启动时本地生成的设备证书。",
    "features.noTelemetry.title": "零遥测",
    "features.noTelemetry.desc":
      "无统计 SDK、无崩溃上报、无广告 ID。应用根本不发起任何外网连接。",

    // Download page
    "download.title": "下载邻传",
    "download.subtitle":
      "MIT 协议下完全免费开源。挑选你的平台。",
    "download.version": "版本",
    "download.latest": "最新版本",
    "download.released": "发布日期",
    "download.systemReq": "系统要求",
    "download.recommended": "推荐适合您系统的版本",
    "download.status.stable": "可下载",
    "download.status.pendingReview": "应用商店审核中",
    "download.status.beta": "公测",
    "download.status.planned": "已规划",
    "download.notify.title": "上线后通知我",
    "download.notify.placeholder": "your@example.com",
    "download.notify.cta": "邮件订阅",
    "download.checksum.title": "SHA-256 校验值",
    "download.checksum.copy": "复制",
    "download.checksum.copied": "已复制",
    "download.notice.macos.title": "macOS 首次打开",
    "download.notice.macos.body":
      "本版本暂未完成 Apple 公证。首次打开请在访达中右键点击 App → 选择「打开」 → 再次确认。之后系统会记住选择。",
    "download.notice.windows.title": "Windows 首次安装",
    "download.notice.windows.body":
      "Windows SmartScreen 可能在首次安装时弹出提示。点「更多信息」 → 「仍要运行」即可。安装包已使用我们的发行证书签名。",
    // Footer
    "footer.description":
      "跨平台、加密、点对点的局域网文件传输。无云端，无账号。",
    "footer.product": "产品",
    "footer.resources": "资源",
    "footer.copyright": "邻传 Link2Send",
    "footer.contact": "联系我们",
    "footer.email": "support@link2send.com",

    // Docs
    "docs.title": "文档",
    "docs.gettingStarted": "快速开始",
    "docs.howItWorks": "工作原理",
    "docs.faq": "常见问题",
    "docs.troubleshooting": "故障排查",

    // Legal
    "legal.privacy": "隐私政策",
    "legal.terms": "用户协议",
    "legal.legal": "法律",

    // Common
    "common.learnMore": "了解更多",
    "common.backToTop": "回到顶部",
  },
} as const;
