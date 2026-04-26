export const ui = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.download": "Download",
    "nav.docs": "Docs",

    // Hero
    "hero.kicker": "LAN MESSENGER · TLS 1.3 · mTLS",
    "hero.title": "Chat in your LAN. Move files and folders in a snap.",
    "hero.titleAccent": "in your LAN",
    "hero.subtitle":
      "Link2Send is a local-network messenger for Mac, Windows, iOS and Android. Text, files, entire folders — end-to-end encrypted, never via the cloud.",
    "hero.cta.primary": "Download for {platform}",
    "hero.cta.primaryGeneric": "Download Now",
    "hero.cta.secondary": "See all features",

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

    // Stats bar
    "stats.kicker": "ENGINEERED FOR YOUR NETWORK",
    "stats.encryption": "TLS 1.3 · mTLS",
    "stats.encryption.desc": "Mutual cert auth on every byte",
    "stats.parallel": "4–8 parallel slots",
    "stats.parallel.desc": "TLS connection pool per session",
    "stats.size": "50 GB+ folders",
    "stats.size.desc": "Resumable, integrity-checked",
    "stats.cloud": "0 cloud servers",
    "stats.cloud.desc": "Files never leave your LAN",

    // Platforms
    "platform.windows": "Windows",
    "platform.macos": "macOS",
    "platform.linux": "Linux",
    "platform.ios": "iOS",
    "platform.android": "Android",
    "platform.allPlatforms": "Available on Mac, Windows, iOS and Android",

    // Showcase (3 pillars)
    "showcase.kicker": "WHAT IT DOES",
    "showcase.title": "Built for working across your own devices",
    "showcase.subtitle":
      "A messenger, a transfer tool and an encrypted bridge — running on your local network only.",

    "showcase.chat.title": "LAN messenger",
    "showcase.chat.desc":
      "Send text, emoji, links, screenshots and clipboard images in a single timeline. Search, scroll back, favorite — everything stays on your devices.",
    "showcase.chat.point1": "Chat-style timeline with full history",
    "showcase.chat.point2": "Image, PDF and Office previews built in",
    "showcase.chat.point3": "Local SQLite, encrypted with AES-256-GCM",

    "showcase.transfer.title": "Files & folders, drag-and-drop",
    "showcase.transfer.desc":
      "Drop one screenshot or a 50 GB project folder — Link2Send streams it across with progress, integrity checks and resume.",
    "showcase.transfer.point1": "Single file or 10 000-file folder, same flow",
    "showcase.transfer.point2": "Resume from the last verified chunk",
    "showcase.transfer.point3": "Power-loss safe with strict fsync ordering",

    "showcase.secure.title": "Secure and fast",
    "showcase.secure.desc":
      "Mutual TLS 1.3 over a 4–8 slot connection pool. Encrypted by default, parallel by design, no cloud in the middle.",
    "showcase.secure.point1": "TLS 1.3 + mTLS, encryption cannot be disabled",
    "showcase.secure.point2": "4–8 parallel TLS slots multiplex large transfers",
    "showcase.secure.point3": "Reverse-slot fallback for asymmetric NAT",


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

    // CTA
    "cta.title": "Stop uploading. Start sending.",
    "cta.subtitle":
      "Download Link2Send and move your files between devices in seconds — without the cloud middleman.",
    "cta.button": "Get Link2Send",

    // Features page
    "features.title": "Features",
    "features.subtitle":
      "Everything Link2Send v0.5.1 ships, grouped by what it does for you.",

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
      "The receiver rejects absolute paths, ‘..’ segments, NUL bytes and Windows reserved names — files cannot escape the receive folder.",
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
      "Windows SmartScreen may warn the first time. Click ‘More info’ → ‘Run anyway’. The installer is signed with our publisher certificate.",
    // Footer
    "footer.description":
      "Cross-platform, encrypted, peer-to-peer file transfer over your local network. No cloud. No accounts.",
    "footer.product": "Product",
    "footer.resources": "Resources",
    "footer.github": "GitHub",
    "footer.license": "MIT License",
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
    "hero.kicker": "局域网即时通讯 · TLS 1.3 · mTLS",
    "hero.title": "局域网聊天，文件夹一拖即送",
    "hero.titleAccent": "局域网",
    "hero.subtitle":
      "邻传是一款覆盖 Mac、Windows、iOS、Android 的局域网通讯工具：发消息、传文件、传整个文件夹，全程端到端加密，不经云端。",
    "hero.cta.primary": "下载 {platform} 版",
    "hero.cta.primaryGeneric": "立即下载",
    "hero.cta.secondary": "查看完整功能",

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

    // Stats bar
    "stats.kicker": "为你的网络而生",
    "stats.encryption": "TLS 1.3 · mTLS",
    "stats.encryption.desc": "每一字节双向证书认证",
    "stats.parallel": "4–8 并发连接",
    "stats.parallel.desc": "会话级 TLS 长连接池",
    "stats.size": "50 GB+ 文件夹",
    "stats.size.desc": "可断点续传，逐块校验",
    "stats.cloud": "0 云端服务器",
    "stats.cloud.desc": "文件不离开你的局域网",

    // Platforms
    "platform.windows": "Windows",
    "platform.macos": "macOS",
    "platform.linux": "Linux",
    "platform.ios": "iOS",
    "platform.android": "Android",
    "platform.allPlatforms": "已覆盖 Mac、Windows、iOS、Android",

    // Showcase (3 pillars)
    "showcase.kicker": "邻传可以做什么",
    "showcase.title": "为「在自己的设备之间工作」而生",
    "showcase.subtitle":
      "聊天工具、传输工具、加密通道三合一——只在你的局域网里运行。",

    "showcase.chat.title": "局域网即时通讯",
    "showcase.chat.desc":
      "在熟悉的聊天界面里发文字、表情、图片、链接、截图，搜索、回看、收藏，记录全部留在你的设备上。",
    "showcase.chat.point1": "聊天式时间线，可搜索可回看",
    "showcase.chat.point2": "图片、PDF、Office 文档内置预览",
    "showcase.chat.point3": "本地 SQLite + AES-256-GCM 加密存储",

    "showcase.transfer.title": "文件 / 文件夹一拖即送",
    "showcase.transfer.desc":
      "拖一张截图或 50 GB 项目文件夹，邻传都按统一流程传输：实时进度、逐块校验、可断点续传。",
    "showcase.transfer.point1": "单文件与万级文件夹同一套流程",
    "showcase.transfer.point2": "中断后从最后一个已确认的块继续",
    "showcase.transfer.point3": "fsync 顺序屏障，掉电也不损坏",

    "showcase.secure.title": "安全 · 高效",
    "showcase.secure.desc":
      "双向 TLS 1.3 + 4–8 条长连接池：默认强加密，并发可拉满，全程不经云端。",
    "showcase.secure.point1": "TLS 1.3 + mTLS，加密强制开启不可关闭",
    "showcase.secure.point2": "4–8 条 TLS slot 并发，大文件分片到多 slot",
    "showcase.secure.point3": "对称 NAT 时反向拨号兜底，不卡握手",


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

    // CTA
    "cta.title": "别再上传了，直接发吧",
    "cta.subtitle":
      "下载邻传，几秒内即可在设备之间互传文件，跳过云端中转。",
    "cta.button": "获取邻传",

    // Features page
    "features.title": "功能特性",
    "features.subtitle":
      "邻传 v0.5.1 的全部能力，按它能为你做什么分组呈现。",

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
    "footer.github": "GitHub",
    "footer.license": "MIT 许可证",
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
