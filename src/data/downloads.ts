export type DownloadStatus = "stable" | "pending-review" | "beta" | "planned";

export interface DownloadFormat {
  label: string;
  file?: string;
  url?: string;
  note?: string;
  sha256?: string;
}

export interface DownloadItem {
  platform: string;
  icon: string;
  formats: DownloadFormat[];
  systemReq: string;
  status: DownloadStatus;
  notice?: "macOSGatekeeper" | "windowsSmartscreen";
}

export const currentVersion = "0.5.1";
export const releaseDate = "2026-04-25";

/**
 * Cloudflare R2 bucket bound to dl.link2send.com.
 * Upload release artifacts to the bucket root and they become accessible at
 * https://dl.link2send.com/<filename>.
 */
export const DOWNLOAD_HOST = "https://dl.link2send.com";

export function downloadUrl(file: string): string {
  return `${DOWNLOAD_HOST}/${encodeURIComponent(file)}`;
}

export const downloads: DownloadItem[] = [
  {
    platform: "macOS",
    icon: "macos",
    status: "stable",
    notice: "macOSGatekeeper",
    formats: [
      {
        label: ".dmg (Intel)",
        file: `邻传_${currentVersion}_x64.dmg`,
        url: downloadUrl(`邻传_${currentVersion}_x64.dmg`),
        note: "x64",
      },
    ],
    systemReq: "macOS 11+",
  },
  {
    platform: "Windows",
    icon: "windows",
    status: "stable",
    notice: "windowsSmartscreen",
    formats: [
      {
        label: ".exe Installer",
        file: `邻传_${currentVersion}_x64-setup.exe`,
        url: downloadUrl(`邻传_${currentVersion}_x64-setup.exe`),
        note: "x64",
      },
    ],
    systemReq: "Windows 10+",
  },
  {
    platform: "iOS",
    icon: "ios",
    status: "pending-review",
    formats: [
      {
        label: "App Store",
      },
    ],
    systemReq: "iOS 13+",
  },
  {
    platform: "Android",
    icon: "android",
    status: "pending-review",
    formats: [
      {
        label: "Google Play",
      },
    ],
    systemReq: "Android 5.0+",
  },
];
