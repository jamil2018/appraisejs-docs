// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";
import starlightNomnoml from "./src/plugins/starlight-nomnoml";

const rawSiteUrl =
  process.env.SITE_URL ??
  process.env.PUBLIC_SITE_URL ??
  process.env.URL ??
  "https://appraisejs-docs.vercel.app";
const site = rawSiteUrl.startsWith("http")
  ? rawSiteUrl
  : `https://${rawSiteUrl}`;

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    starlight({
      plugins: [starlightNomnoml()],
      title: "AppraiseJS",
      description:
        "AppraiseJS documentation for visual test modeling, orchestration, execution, and reporting workflows.",
      customCss: [
        "./src/styles/theme.css",
        "./src/styles/global.css",
        "./src/styles/custom.css",
      ],
      components: {
        Head: "./src/components/overrides/Head.astro",
      },
      head: [
        {
          tag: "meta",
          attrs: {
            name: "robots",
            content:
              "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
          },
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/jamil2018/appraisejs-core",
        },
      ],
      sidebar: [
        {
          label: "Getting Started",
          collapsed: false,
          autogenerate: { directory: "getting-started" },
        },
        {
          label: "Architecture",
          collapsed: false,
          autogenerate: { directory: "architecture" },
        },
        {
          label: "Guides",
          collapsed: false,
          autogenerate: { directory: "guides" },
        },
        {
          label: "References",
          collapsed: false,
          autogenerate: { directory: "references" },
        },
        {
          label: "Tutorials",
          collapsed: false,
          autogenerate: { directory: "tutorials" },
        },
        {
          label: "Operations",
          collapsed: false,
          autogenerate: { directory: "operations" },
        },
      ],
    }),
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
