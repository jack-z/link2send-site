---
title: Troubleshooting
description: Fix common Link2Send issues — devices not visible, transfers stalling, firewall blocks.
order: 4
---

# Troubleshooting

## Devices don't see each other

Run through the list in order — most cases land in the first three.

1. **Same network?** Both devices need to be on the same LAN segment. A laptop on Wi-Fi and a phone on cellular won't see each other. A laptop on the 5 GHz SSID and a desktop on the 2.4 GHz SSID *usually* will, but only if the AP bridges them.
2. **AP isolation?** Hotel, café and conference Wi-Fi commonly enable AP isolation, which blocks all peer-to-peer traffic. Switch to a personal hotspot, or pair via the 6-digit short code over a side channel.
3. **Firewall?** Allow Link2Send through the OS firewall:
   - **macOS** — System Settings → Network → Firewall → Options → allow `Link2Send`.
   - **Windows** — Windows Defender Firewall will prompt on first launch; click "Allow access" for both Private and Public networks if both apply.
4. **Manual pairing.** If discovery is blocked but you can reach the peer's IP, you can still pair via QR code or the 6-digit short code. Once paired, Link2Send will reach the peer over the existing session.

## "Receiving…" looks stuck

If the sender shows "Interrupted" but the receiver still says "Receiving…", you're likely on a build older than v0.5.1. Update both devices.

In v0.5.1, the receiver flips to an interrupted state in milliseconds when the sender's connection drops. The partial file and manifest are kept on disk so the next retry resumes safely.

## A transfer is much slower than expected

- **Wi-Fi quality.** A 2.4 GHz channel saturated with neighbouring SSIDs can drop large transfers down to single-digit MB/s. Switch to 5 GHz or use a wired connection on at least one side.
- **Antivirus inspection.** Some endpoint protection products inspect every chunk on disk write, which can halve throughput. Whitelist the receive folder if you trust your peer.
- **Disk speed.** Receiving onto a slow external drive caps the transfer at the drive's write speed. Use a local SSD if you can.

## "First open" warning on macOS

The 0.5.1 build is not yet Apple-notarized. The first time you launch:

1. Right-click the app in Finder → **Open**.
2. Click **Open** in the confirmation dialog.

macOS remembers this choice; subsequent launches go through normally.

## SmartScreen warning on Windows

Windows SmartScreen may flag the installer the first time. Click **More info** → **Run anyway**. The installer is signed with our publisher certificate; Microsoft's reputation system needs a few weeks of installs before the warning goes away.

## File integrity

If you suspect a file is corrupted:

- Check the SHA-256 published on the [download page](/en/download/) (when available).
- Compare the original file's SHA-256 with the received copy. v0.5.1 verifies each chunk as it arrives, so a corrupted result is rare — usually a sign of a disk issue on either side.

## Still stuck?

Email **support@link2send.com** with:

- The Link2Send version on each device (Settings → About).
- Your OS / OS version.
- A short description of what you tried.

The app's built-in **Network Diagnostics** tool produces a small report you can attach.
