// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "AppraiseJS",
      customCss: ["./src/styles/custom.css"],
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
      ],
    }),
  ],
});
