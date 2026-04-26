---
title: How It Works
description: Architecture overview of Link2Send v0.5.1 — discovery, mTLS session, connection pool, and integrity guarantees.
order: 2
---

# How It Works

Link2Send is a **peer-to-peer** application. There are no central servers — devices on the same LAN talk to each other directly. This page is a technical overview of v0.5.1.

## Layers

```
┌─────────────────────────────────────────────┐
│ UI                                           │
│   Desktop: Vue 3 + Tauri (Rust)             │
│   Mobile:  Flutter + Rust FFI               │
├─────────────────────────────────────────────┤
│ Service layer (Rust)                        │
│   API · Diagnostics · Thumbnail cache       │
├─────────────────────────────────────────────┤
│ Core (Rust)                                 │
│   Identity · Discovery · Pairing            │
│   Session · Transfer · Storage              │
└─────────────────────────────────────────────┘

Network: UDP discovery + adaptive unicast ↔ TLS 1.3 session pool
Storage: SQLite (AES-256-GCM) + local filesystem
```

## Discovery

On startup the app emits **UDP announcements** every 2 seconds. Each announcement carries the device id, name, platform, transfer port and certificate fingerprint. Devices stop appearing if no announcement is heard for ~15 seconds.

If broadcast is blocked by a router or firewall, Link2Send falls back to **adaptive unicast** to known peers, so previously paired devices stay reachable.

## Identity & encryption

- Each device generates a **keypair and self-signed certificate** on first launch.
- The device's identity is the **SHA-256 fingerprint of that certificate**.
- All sessions are **TLS 1.3 with mutual certificate authentication (mTLS)** via [rustls](https://github.com/rustls/rustls).
- Encryption is **mandatory** — there is no plaintext fallback path.

Pairing pins the peer's fingerprint. Future connections check the fingerprint on every TLS handshake and refuse on mismatch, blocking impersonation even on a compromised LAN.

## The session connection pool (v0.5.1)

Earlier versions opened one TCP connection per file. v0.4.1 introduced a **session-level pool** that v0.5.1 hardens:

- Each session keeps **4–8 long-lived TLS streams** (slots).
- Files ≤ 50 MB are sent on one slot end-to-end.
- Larger files are split across up to **4 slots in parallel**.
- A single session caps at **5 concurrent files**.
- When the sender can't dial the receiver (asymmetric NAT, strict firewall), the sender requests a **reverse slot**: the receiver dials back over the existing session.
- If a slot drops mid-transfer, v0.5.1 attempts up to 3 reconnects with 250 ms / 1 s / 4 s exponential back-off plus jitter.

## File transfer

Each file is split into **2 MB chunks**. For every chunk the receiver:

1. Writes the chunk data
2. Calls `fsync` on the data file
3. Updates the manifest (`Acked`)
4. Calls `fsync` on the manifest
5. Sends the ACK

This strict ordering means a sudden power loss can never produce a "complete" file with zeroed regions. If the connection drops, the next attempt resumes from the last `Acked` chunk by reusing the partial file plus manifest.

## Receiver hardening (v0.5.1)

- **Path-traversal guard** — the receiver rejects absolute paths, `..` segments, NUL bytes, and Windows reserved names. A malicious peer cannot write outside the receive folder.
- **Atomic deduplication** — when two transfers arrive with the same filename, an `O_EXCL` reservation prevents a silent overwrite; the second file gets a numeric suffix.
- **Cancel-aware reads** — pressing cancel surfaces in milliseconds instead of waiting for a TCP keepalive timeout.

## Local storage

- Sessions and message history live in a **local SQLite database** encrypted with **AES-256-GCM**.
- Received files are stored in plaintext at `~/Downloads/Link2Send/` (configurable). The receive folder is **not** automatically encrypted — keep your device secure.
- The app makes **no outbound internet connections**. There is no analytics SDK, no crash reporter, no push channel.
