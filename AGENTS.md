# Repository Guidelines

## Project Overview

This repository is the **AppraiseJS documentation site**, built with [Astro](https://astro.build) (v6) and the [Starlight](https://starlight.astro.build) docs theme (`@astrojs/starlight`). It is styled with Tailwind CSS v4 (via `@tailwindcss/vite`), uses `@astrojs/sitemap` for the sitemap, and is deployed to Vercel (`@vercel/analytics`, `@vercel/speed-insights`). The content covers visual test modeling, orchestration, execution, and reporting workflows.

## Project Structure & Module Organization

- `src/content/docs/` — documentation pages as `.md` or `.mdx`, grouped by route area: `getting-started/`, `core-concepts/`, `build-tests/`, `run-and-analyze/`, and `reference/` (which contains `step-references/`, `architecture/`, and `operations/` subsections). The landing page is `src/content/docs/index.mdx` (uses `template: splash`).
- `src/components/` — shared Astro components, including landing-page sections (`Hero.astro`, `FeaturesGridSection.astro`, etc.) and interactive doc demos. PascalCase names.
- `src/components/overrides/` — Starlight component overrides registered in `astro.config.mjs` (`Head`, `ThemeSelect`, `ThemeProvider`).
- `src/styles/` — `theme.css`, `global.css`, `custom.css` (loaded via Starlight `customCss`) and `landing.css` (imported directly by the landing page).
- `src/plugins/` — custom plugins: `starlight-nomnoml.ts` and `remark-nomnoml.ts` enable nomnoml diagram code blocks. Mermaid is also available.
- `src/pages/robots.txt.ts` — generates `robots.txt`. `src/content.config.ts` — Starlight content collection config.
- `public/` — static assets served as-is. Screenshots and videos live under `public/docs/media/`, mirroring the docs route they support.
- `astro.config.mjs` — central config: site URL resolution, Starlight setup, and the explicit `sidebar` navigation tree.
- Generated output goes to `dist/` (do not commit).

## Build, Test, and Development Commands

Run all commands from the repository root.

- `npm install` — install dependencies from `package-lock.json`.
- `npm run dev` — start the Astro dev server, typically at `localhost:4321`.
- `npm run build` — build the production site into `dist/`; this is the main validation command.
- `npm run preview` — serve the built site locally for final checks.
- `npm run astro -- --help` — inspect available Astro CLI commands.

There is no dedicated `npm test` script. Verify affected pages in dev mode and run `npm run build` before submitting.

## Adding or Editing Docs

- Create pages under `src/content/docs/` with lowercase kebab-case filenames (for example `quick-start.mdx`). The file path determines the route.
- **Any new page must be registered in the `sidebar` array in `astro.config.mjs`**, or it will not appear in navigation. Keep `link` values matching the route (trailing slash style used throughout).
- Each page needs frontmatter with at least `title`; `description` is recommended for SEO.
- Reference media via `public/docs/media/...` paths. Optimize large images and videos before adding them.

## Coding Style & Naming Conventions

Use TypeScript-aware Astro conventions and format with Prettier plus `prettier-plugin-astro`. Prefer two-space indentation. Name components in PascalCase (for example `LandingNavbar.astro`); name docs and media paths in lowercase kebab-case (for example `quick-start.mdx`, `locator-picker.png`). Keep reusable behavior in `src/components/` or `src/plugins/` rather than duplicating inline scripts.

## Testing Guidelines

Treat `npm run build` as the required quality gate. When changing navigation, sidebar links, metadata, custom plugins, or media paths, also check the affected route in `npm run dev` or `npm run preview`. For visual updates, confirm media loads from `public/docs/media/` and that links in `.mdx` pages resolve correctly.

## Commit & Pull Request Guidelines

Recent commits use short, imperative summaries such as `fix mobile viewport drift` or `update the creating-tests page`. Keep the subject concise and focused on the visible change. Pull requests should include a brief summary, affected docs or UI areas, validation performed (such as `npm run build`), and screenshots or recordings for layout, media, or visual changes. Link related issues when available.

## Security & Configuration Tips

The site URL is configured through `SITE_URL`, `PUBLIC_SITE_URL`, or `URL` (in that order), falling back to `https://appraisejs-docs.vercel.app`. Set it correctly so canonical URLs, the sitemap, and `robots.txt` are accurate. Do not commit secrets or local environment files. Optimize large media before adding it under `public/docs/media/`.
