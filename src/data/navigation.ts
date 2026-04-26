import type { Lang } from "@/i18n/languages";

export interface NavItem {
  href: string;
  labelKey: string;
}

export const navItems: NavItem[] = [
  { href: "/", labelKey: "nav.home" },
  { href: "/features/", labelKey: "nav.features" },
  { href: "/download/", labelKey: "nav.download" },
  { href: "/docs/getting-started/", labelKey: "nav.docs" },
];

export function getLocalizedNav(lang: Lang): { href: string; labelKey: string }[] {
  return navItems.map((item) => ({
    ...item,
    href: `/${lang}${item.href}`,
  }));
}
