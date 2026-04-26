---
title: FAQ
description: Frequently asked questions about Link2Send.
order: 3
---

# Frequently Asked Questions

## General

### Does Link2Send need an internet connection?
No. Link2Send works entirely on your LAN. No internet connection, no cloud servers, no accounts.

### Is Link2Send free?
Yes. Link2Send is released under the MIT License and is fully free, including for commercial use.

### What platforms are supported?
- **macOS** — available
- **Windows** — available
- **iOS** — submitted to App Store review
- **Android** — submitted to Google Play review
- **Linux** — buildable from source; no official release yet

### Why is the macOS build x64-only?
The 0.5.1 macOS build is an Intel binary. It runs on Apple Silicon Macs through Rosetta. A native Apple Silicon build is on the roadmap.

## Connectivity

### Why can't my devices see each other?
The most common causes:
- The devices are on **different networks or subnets** (e.g. one is on the 5 GHz Wi-Fi, the other on the wired LAN, with no bridge).
- A **firewall** is blocking UDP discovery or the TLS transfer port.
- **AP isolation** is enabled on the Wi-Fi router (common in hotel/conference Wi-Fi).

Try [troubleshooting](/en/docs/troubleshooting/) — or pair manually via QR code or the 6-digit short code.

### What ports does Link2Send use?
The app prefers **UDP 42424** for discovery and a **TCP/TLS port** for transfer. The transfer port is announced inside the discovery message, so it does not need to be a fixed value.

### Can transfers cross Wi-Fi and Ethernet?
Yes, as long as both interfaces are on the same LAN segment.

## Security

### How is data encrypted in transit?
Every session uses TLS 1.3 with mutual certificate authentication (mTLS). Encryption is mandatory; there is no plaintext fallback.

### Can a device on my LAN impersonate someone I trust?
After the first pairing, Link2Send pins the peer's certificate fingerprint. On every reconnection it checks the fingerprint, so a different device cannot pose as a paired peer.

### Are my files stored on any server?
No. Files travel directly between devices. The product has no backend.

### Is the local database encrypted?
Yes. Chat history, sessions and favorites are stored in a SQLite database encrypted with AES-256-GCM. The keys live only on your device.

## File transfer

### Is there a file size limit?
No fixed limit. Large files are streamed in 2 MB chunks; we routinely transfer 50 GB+ files.

### What happens if the transfer is interrupted?
Link2Send saves a manifest of confirmed chunks. On the next attempt the sender re-uses the same task ID and the receiver continues from the last confirmed chunk.

### What happens if my computer loses power mid-transfer?
v0.5.1 enforces strict fsync ordering between chunk write, manifest update and ACK. After power loss the partial file and manifest are consistent — you can resume safely.

### Where are received files saved?
Default: `~/Downloads/Link2Send/`. Configurable in Settings.

## Privacy

### Does Link2Send collect telemetry?
No. There is no analytics SDK, no crash reporter, no advertising ID. The app makes no outbound internet connections at all.

### Do I need an account?
No. Identity is your device's locally-generated certificate. There is nothing to sign up for.
