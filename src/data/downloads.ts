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

export const currentVersion = "0.7.0";
export const releaseDate = "2026-05-10";

/**
 * Release host serving signed installers under /releases/latest/.
 */
export const DOWNLOAD_HOST = "https://download.link2send.com";

export function downloadUrl(file: string): string {
  return `${DOWNLOAD_HOST}/releases/latest/${file}`;
}

export const downloads: DownloadItem[] = [
  {
    platform: "macOS",
    icon: "macos",
    status: "stable",
    notice: "macOSGatekeeper",
    formats: [
      {
        label: ".dmg Installer",
        file: "Link2Send-mac-universal.dmg",
        url: downloadUrl("Link2Send-mac-universal.dmg"),
        note: "Universal",
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
        file: "Link2Send-windows-x64.exe",
        url: downloadUrl("Link2Send-windows-x64.exe"),
        note: "x64",
      },
    ],
    systemReq: "Windows 10+",
  },
  {
    platform: "iOS",
    icon: "ios",
    status: "stable",
    formats: [
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/link2send/id6763858424",
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
