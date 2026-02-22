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
          label: "Menu",
          collapsed: false,
          items: [
            { slug: "menu/introduction" },
            {
              label: "GitHub",
              link: "https://github.com/jamil2018/appraisejs-core",
              attrs: {
                target: "_blank",
                rel: "noopener noreferrer",
                class: "sidebar-link-github",
              },
            },
          ],
        },
        {
          label: "Getting Started",
          collapsed: false,
          autogenerate: { directory: "getting-started" },
        },
      ],
    }),
  ],
});
