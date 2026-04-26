export type FeatureGroup =
  | "discovery"
  | "security"
  | "experience"
  | "privacy";

export interface Feature {
  iconKey: string;
  group: FeatureGroup;
  titleKey: string;
  descKey: string;
}

export const featureGroups: FeatureGroup[] = [
  "discovery",
  "security",
  "experience",
  "privacy",
];

export const features: Feature[] = [
  // Discovery & pairing
  {
    iconKey: "discovery",
    group: "discovery",
    titleKey: "features.autoDiscovery.title",
    descKey: "features.autoDiscovery.desc",
  },
  {
    iconKey: "qr",
    group: "discovery",
    titleKey: "features.qrPairing.title",
    descKey: "features.qrPairing.desc",
  },
  {
    iconKey: "trusted",
    group: "discovery",
    titleKey: "features.trustedDevices.title",
    descKey: "features.trustedDevices.desc",
  },

  // Security
  {
    iconKey: "security",
    group: "security",
    titleKey: "features.mtls.title",
    descKey: "features.mtls.desc",
  },
  {
    iconKey: "fingerprint",
    group: "security",
    titleKey: "features.fingerprint.title",
    descKey: "features.fingerprint.desc",
  },
  {
    iconKey: "shield",
    group: "security",
    titleKey: "features.pathGuard.title",
    descKey: "features.pathGuard.desc",
  },
  {
    iconKey: "vault",
    group: "security",
    titleKey: "features.encryptedStore.title",
    descKey: "features.encryptedStore.desc",
  },

  // Experience
  {
    iconKey: "chat",
    group: "experience",
    titleKey: "features.chat.title",
    descKey: "features.chat.desc",
  },
  {
    iconKey: "preview",
    group: "experience",
    titleKey: "features.preview.title",
    descKey: "features.preview.desc",
  },
  {
    iconKey: "folder",
    group: "experience",
    titleKey: "features.folder.title",
    descKey: "features.folder.desc",
  },
  {
    iconKey: "favorites",
    group: "experience",
    titleKey: "features.favorites.title",
    descKey: "features.favorites.desc",
  },

  // Privacy
  {
    iconKey: "privacy",
    group: "privacy",
    titleKey: "features.noCloud.title",
    descKey: "features.noCloud.desc",
  },
  {
    iconKey: "noAccount",
    group: "privacy",
    titleKey: "features.noAccount.title",
    descKey: "features.noAccount.desc",
  },
  {
    iconKey: "noTelemetry",
    group: "privacy",
    titleKey: "features.noTelemetry.title",
    descKey: "features.noTelemetry.desc",
  },
];
