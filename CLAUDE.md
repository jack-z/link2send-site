# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Official website for Link2Send (邻传) — a cross-platform, local-network, P2P encrypted file transfer tool.

## Tech Stack

- **Framework**: Astro 6 (static site generation)
- **Styling**: Tailwind CSS 4 (via `@tailwindcss/vite`)
- **Deployment**: Cloudflare Pages (static output)
- **i18n**: Path-based routing (`/en/`, `/zh/`) with centralized translations

## Build & Dev Commands

```bash
npm run dev        # Start dev server
npm run build      # Build static site to dist/
npm run preview    # Preview built site locally
```

## Architecture

```
src/
├── i18n/           # Translation system (ui.ts = all strings, utils.ts = helpers)
├── components/     # .astro components (zero client JS except ThemeToggle)
├── layouts/        # BaseLayout (all pages), DocsLayout (docs with sidebar)
├── pages/          # Route pages: /en/*, /zh/*, root redirect
├── content/docs/   # Markdown docs per language (Content Collections)
├── data/           # Structured data (features, downloads, navigation)
└── styles/         # global.css (Tailwind + theme vars)
```

## i18n

- All UI strings in `src/i18n/ui.ts`, keyed by locale (`en`, `zh`)
- Use `useTranslations(lang)` to get a `t()` function in components
- Each page exists under both `/en/` and `/zh/` directories
- `BaseHead.astro` outputs hreflang alternate links for SEO

## SEO

- `BaseHead.astro` handles all meta tags, Open Graph, Twitter Cards, hreflang
- Homepage includes JSON-LD structured data (`SoftwareApplication`)
- `@astrojs/sitemap` generates sitemap with i18n support
- `public/robots.txt` points to sitemap
- `public/_headers` and `public/_redirects` for Cloudflare Pages

## Key Conventions

- All components are `.astro` files — no React/Vue/Svelte (keeps zero client JS)
- Theme toggle and mobile menu use tiny `is:inline` scripts
- Dark mode via `dark` class on `<html>` (Tailwind class strategy)
- Custom colors defined in `@theme` block: `primary-*` (blue) and `accent-*` (indigo)
- FAQ accordion uses native `<details>/<summary>` (no JS)
