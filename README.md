# AppraiseJS Docs

The documentation website for [AppraiseJS](https://github.com/jamil2018/appraisejs-core) — a tool for designing browser tests visually, generating real Playwright and Cucumber artifacts, and keeping execution local-first.

The site is built with [Astro](https://astro.build) and the [Starlight](https://starlight.astro.build) documentation theme, styled with Tailwind CSS v4, and deployed to Vercel.

## Project Structure

```
.
├── public/                     # Static assets served as-is
│   ├── logo.svg
│   └── docs/media/             # Screenshots and videos used in docs pages
├── src/
│   ├── components/             # Shared Astro components (landing page, demos, doc UI)
│   │   └── overrides/          # Starlight component overrides (Head, theme controls)
│   ├── content/
│   │   └── docs/               # Documentation pages (.md / .mdx)
│   │       ├── getting-started/
│   │       ├── core-concepts/
│   │       ├── build-tests/
│   │       ├── run-and-analyze/
│   │       └── reference/
│   ├── content.config.ts       # Starlight content collection config
│   ├── pages/robots.txt.ts     # Generated robots.txt
│   ├── plugins/                # Custom remark/Starlight plugins (nomnoml diagrams)
│   ├── scripts/                # Client-side scripts (e.g. image lightbox)
│   ├── styles/                 # theme.css, global.css, custom.css, landing.css
│   └── utils/
├── astro.config.mjs            # Astro + Starlight config and sidebar
├── package.json
└── tsconfig.json
```

Starlight renders every `.md` or `.mdx` file in `src/content/docs/` as a route based on its file path. The sidebar navigation is defined explicitly in `astro.config.mjs`.

## Getting Started

Requires Node.js and npm. Run all commands from the repository root.

```bash
npm install
npm run dev
```

The dev server runs at `localhost:4321`.

## Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build the production site to `./dist/`           |
| `npm run preview`         | Preview the build locally before deploying       |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

Treat `npm run build` as the main validation step before submitting changes; there is no dedicated test script.

## Authoring Content

- Add documentation pages under `src/content/docs/` using lowercase kebab-case filenames (for example `quick-start.mdx`).
- Register new pages in the sidebar by editing the `sidebar` array in `astro.config.mjs`.
- Place screenshots and videos under `public/docs/media/`, mirroring the docs route they belong to. Optimize large media before committing.
- Diagrams can be authored with [nomnoml](https://nomnoml.com/) fenced code blocks via the custom `starlight-nomnoml` plugin, or with [Mermaid](https://mermaid.js.org/).

## SEO Configuration

Canonical URLs, the sitemap, and `robots.txt` are derived from the site URL. Set one of `SITE_URL`, `PUBLIC_SITE_URL`, or `URL` in the deployment environment to the production docs URL:

```bash
SITE_URL=https://docs.yourdomain.com
```

If none is set, the build falls back to `https://appraisejs-docs.vercel.app`.

## Learn More

- [Starlight documentation](https://starlight.astro.build/)
- [Astro documentation](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)
