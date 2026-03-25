import type { StarlightPlugin } from "@astrojs/starlight/types";
import remarkNomnoml from "./remark-nomnoml";

export default function starlightNomnoml(): StarlightPlugin {
  return {
    name: "starlight-nomnoml",
    hooks: {
      "config:setup"({ addIntegration }) {
        addIntegration({
          name: "starlight-nomnoml-integration",
          hooks: {
            "astro:config:setup"({ updateConfig }) {
              updateConfig({
                markdown: {
                  remarkPlugins: [remarkNomnoml],
                },
              });
            },
          },
        });
      },
    },
  };
}
