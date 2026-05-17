# Repository Guidelines

## Project Structure & Module Organization

This repository is the AppraiseJS documentation site built with Astro and Starlight. Documentation pages live in `src/content/docs/` as `.md` or `.mdx`, grouped by route areas such as `getting-started/`, `build-tests/`, `run-and-analyze/`, and `reference/`. Shared Astro components are in `src/components/`; Starlight overrides are in `src/components/overrides/`. Styles are in `src/styles/`, custom plugins are in `src/plugins/`, and generated output goes to `dist/`. Static files, screenshots, and videos belong in `public/`, especially `public/docs/media/`.

## Build, Test, and Development Commands

Run commands from the repository root.

- `npm install`: install dependencies from `package-lock.json`.
- `npm run dev`: start the Astro dev server, typically at `localhost:4321`.
- `npm run build`: build the production site into `dist/`; use this as the main validation command.
- `npm run preview`: serve the built site locally for final checks.
- `npm run astro -- --help`: inspect available Astro CLI commands.

There is currently no dedicated `npm test` script. Verify affected pages in dev mode and run `npm run build` before submitting.

## Coding Style & Naming Conventions

Use TypeScript-aware Astro conventions and format with Prettier plus `prettier-plugin-astro`. Prefer two-space indentation. Name components in PascalCase, for example `LandingNavbar.astro`; name docs and media paths in lowercase kebab-case, for example `quick-start.mdx` or `locator-picker.png`. Keep reusable behavior in `src/components/` or `src/plugins/` rather than duplicating inline scripts.

## Testing Guidelines

Treat `npm run build` as the required quality gate. When changing navigation, sidebar links, metadata, custom plugins, or media paths, also check the affected route in `npm run dev` or `npm run preview`. For visual updates, confirm media loads from `public/docs/media/` and links in `.mdx` pages resolve correctly.

## Commit & Pull Request Guidelines

Recent commits use short, imperative summaries such as `fix mobile viewport drift` or `update the creating-tests page`. Keep the subject concise and focused on the visible change. Pull requests should include a brief summary, affected docs or UI areas, validation performed such as `npm run build`, and screenshots or recordings for layout, media, or visual changes. Link related issues when available.

## Security & Configuration Tips

The site URL is configured through `SITE_URL`, `PUBLIC_SITE_URL`, or `URL`; set it correctly so canonical URLs, sitemap, and `robots.txt` are accurate. Do not commit secrets or local environment files. Optimize large media before adding it under `public/docs/media/`.
