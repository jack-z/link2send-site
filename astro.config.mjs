import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://link2send.com",
  output: "static",
  build: {
    format: "directory",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          zh: "zh-CN",
        },
      },
      filter: (page) => !page.includes("/404"),
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        // Boost homepage and primary marketing pages
        const url = item.url;
        if (/\/(en|zh)\/$/.test(url)) {
          return { ...item, priority: 1.0, changefreq: "weekly" };
        }
        if (/\/(en|zh)\/(download|features)\/$/.test(url)) {
          return { ...item, priority: 0.9, changefreq: "weekly" };
        }
        if (url.endsWith("/")) {
          return { ...item, priority: 0.7, changefreq: "monthly" };
        }
        return item;
      },
    }),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
