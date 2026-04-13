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
      logo: {
        src: "./public/logo.svg",
        alt: "AppraiseJS",
      },
      description:
        "AppraiseJS documentation for visual test modeling, orchestration, execution, and reporting workflows.",
      customCss: [
        "./src/styles/theme.css",
        "./src/styles/global.css",
        "./src/styles/custom.css",
      ],
      components: {
        Head: "./src/components/overrides/Head.astro",
        ThemeSelect: "./src/components/overrides/ThemeSelect.astro",
        ThemeProvider: "./src/components/overrides/ThemeProvider.astro",
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
          label: "Start Here",
          collapsed: false,
          items: [
            { label: "Overview", link: "/getting-started/overview/" },
            { label: "Installation", link: "/getting-started/installation/" },
            { label: "Quick Start", link: "/getting-started/quick-start/" },
            { label: "Creating Tests", link: "/getting-started/creating-tests/" },
            { label: "Running Tests", link: "/getting-started/running-tests/" },
            { label: "Viewing Reports", link: "/getting-started/viewing-reports/" },
            { label: "Troubleshooting", link: "/getting-started/troubleshooting/" },
          ],
        },
        {
          label: "Core Concepts",
          collapsed: false,
          items: [
            { label: "Overview", link: "/core-concepts/" },
            {
              label: "Why AppraiseJS",
              link: "/core-concepts/why-appraisejs/",
            },
            { label: "Comparison", link: "/core-concepts/comparison/" },
            { label: "Architecture Overview", link: "/core-concepts/architecture-overview/" },
          ],
        },
        {
          label: "Build Tests",
          collapsed: false,
          items: [
            { label: "Overview", link: "/build-tests/" },
            { label: "Modules", link: "/build-tests/modules/" },
            { label: "Environments", link: "/build-tests/environments/" },
            { label: "Locator Groups", link: "/build-tests/locator-groups/" },
            { label: "Locators", link: "/build-tests/locators/" },
            { label: "Test Suites", link: "/build-tests/test-suites/" },
            { label: "Test Cases", link: "/build-tests/test-cases/" },
            {
              label: "Template Step Groups",
              link: "/build-tests/template-step-groups/",
            },
            { label: "Template Steps", link: "/build-tests/template-steps/" },
            {
              label: "Template Test Cases",
              link: "/build-tests/template-test-cases/",
            },
            { label: "Tags", link: "/build-tests/tags/" },
          ],
        },
        {
          label: "Run And Analyze",
          collapsed: false,
          items: [
            { label: "Overview", link: "/run-and-analyze/" },
            { label: "Test Runs", link: "/run-and-analyze/test-runs/" },
            { label: "Reports", link: "/run-and-analyze/reports/" },
            { label: "Dashboard", link: "/run-and-analyze/dashboard/" },
            { label: "Settings/Sync", link: "/run-and-analyze/settings/" },
          ],
        },
        {
          label: "Reference",
          collapsed: false,
          items: [
            { label: "Overview", link: "/reference/" },
            {
              label: "Step References",
              collapsed: true,
              items: [
                {
                  label: "Parameter Conventions",
                  link: "/reference/step-references/step-parameter-conventions/",
                },
                { label: "Click Steps", link: "/reference/step-references/click-steps/" },
                { label: "Input Steps", link: "/reference/step-references/input-steps/" },
                {
                  label: "Navigation Steps",
                  link: "/reference/step-references/navigation-steps/",
                },
                { label: "Wait Steps", link: "/reference/step-references/wait-steps/" },
                { label: "Storage Steps", link: "/reference/step-references/storage-steps/" },
                { label: "Hover Steps", link: "/reference/step-references/hover-steps/" },
                {
                  label: "Random Data Steps",
                  link: "/reference/step-references/random-data-steps/",
                },
                {
                  label: "Assertion Steps",
                  link: "/reference/step-references/assertion-steps/",
                },
              ],
            },
            {
              label: "Advanced Architecture",
              collapsed: true,
              items: [
                {
                  label: "Execution Lifecycle",
                  link: "/reference/architecture/execution-lifecycle/",
                },
                {
                  label: "Synchronization Pipeline",
                  link: "/reference/architecture/synchronization-pipeline/",
                },
                {
                  label: "Data and Reporting Model",
                  link: "/reference/architecture/data-model-and-reporting/",
                },
                {
                  label: "Runtime Services and APIs",
                  link: "/reference/architecture/runtime-services-and-apis/",
                },
              ],
            },
            {
              label: "Advanced Operations",
              collapsed: true,
              items: [
                {
                  label: "Sync and Scripts",
                  link: "/reference/operations/sync-and-scripts/",
                },
                {
                  label: "Install Template Steps with CLI",
                  link: "/reference/operations/install-template-steps-with-cli/",
                },
              ],
            },
          ],
        },
      ],
    }),
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
