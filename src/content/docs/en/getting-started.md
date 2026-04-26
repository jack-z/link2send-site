---
title: Getting Started
description: Install Link2Send v0.5.1 and run your first encrypted transfer in under five minutes.
order: 1
---

# Getting Started

This guide walks you through installing Link2Send on two devices, pairing them, and sending your first file.

## 1. Install on both devices

1. Open the [Download page](/en/download/) on each device.
2. Pick the build that matches your platform:
   - **macOS** → `邻传_0.5.1_x64.dmg` (Intel build; runs on Apple Silicon via Rosetta)
   - **Windows** → `邻传_0.5.1_x64-setup.exe`
   - **iOS / Android** → in store review; subscribe on the download page to be notified
3. Install and launch Link2Send. On first launch the app generates a unique device certificate locally — no sign-up, no email.

## 2. Put both devices on the same network

Link2Send only talks over your LAN. Make sure both devices are on the **same Wi-Fi or Ethernet segment**. Hotel and conference Wi-Fi often block peer-to-peer traffic; if so, switch to a personal hotspot or wired LAN.

## 3. Pair the devices

Devices on the same LAN auto-discover each other within a few seconds via UDP. You'll see the other device appear in the contacts panel.

The first time you connect, you must confirm the pairing. Pick whichever is most convenient:

- **QR code** — scan the QR shown by one device with the other.
- **Short code** — type the 6-digit code shown on one device into the other.

Pairing pins the peer's certificate fingerprint, so future connections are silent and verified.

## 4. Send something

Once paired, you can:

- **Drag and drop** files or folders into the chat window
- Click the **paperclip** to browse and pick files
- **Paste** images or screenshots straight from the clipboard
- Type and send **text messages, emoji, links**

Files are received under `~/Downloads/Link2Send/` by default. The location is configurable in Settings.

## What happens under the hood

- Each transfer runs over a **session-level TLS connection pool** (4–8 long-lived slots).
- Files ≤ 50 MB use a single slot end-to-end; larger files split across up to 4 slots in parallel.
- Each chunk is checksummed; if the connection drops, the next attempt resumes from the last verified chunk.
- The database that holds chat history is encrypted with AES-256-GCM.

If anything misbehaves on the network side, head to [Troubleshooting](/en/docs/troubleshooting/).
