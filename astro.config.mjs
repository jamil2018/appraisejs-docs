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
            { label: "Start Here Home", link: "/start-here/" },
            { label: "Overview", link: "/getting-started/overview/" },
            { label: "Installation", link: "/getting-started/installation/" },
            { label: "Quick Start", link: "/getting-started/quick_start/" },
            { label: "Creating Tests", link: "/tutorials/creating_tests/" },
            { label: "Running Tests", link: "/tutorials/running_tests/" },
            { label: "Viewing Reports", link: "/tutorials/viewing_reports/" },
            { label: "Troubleshooting", link: "/operations/troubleshooting/" },
          ],
        },
        {
          label: "Core Concepts",
          collapsed: false,
          items: [
            { label: "Core Concepts Home", link: "/core-concepts/" },
            {
              label: "Why AppraiseJS",
              link: "/getting-started/why_appraisejs/",
            },
            { label: "Comparison", link: "/getting-started/comparison/" },
            { label: "Architecture Overview", link: "/architecture/overview/" },
          ],
        },
        {
          label: "Build Tests",
          collapsed: false,
          items: [
            { label: "Build Tests Home", link: "/build-tests/" },
            { label: "Modules", link: "/guides/modules/" },
            { label: "Environments", link: "/guides/environments/" },
            { label: "Locator Groups", link: "/guides/locator_groups/" },
            { label: "Locators", link: "/guides/locators/" },
            { label: "Test Suites", link: "/guides/test_suites/" },
            { label: "Test Cases", link: "/guides/test_cases/" },
            {
              label: "Template Step Groups",
              link: "/guides/template_step_groups/",
            },
            { label: "Template Steps", link: "/guides/template_steps/" },
            {
              label: "Template Test Cases",
              link: "/guides/template_test_cases/",
            },
            { label: "Tags", link: "/guides/tags/" },
          ],
        },
        {
          label: "Run And Analyze",
          collapsed: false,
          items: [
            { label: "Run And Analyze Home", link: "/run-and-analyze/" },
            { label: "Test Runs", link: "/guides/test_runs/" },
            { label: "Reports", link: "/guides/reports/" },
            { label: "Dashboard", link: "/guides/dashboard/" },
            { label: "Settings/Sync", link: "/guides/settings/" },
          ],
        },
        {
          label: "Reference",
          collapsed: false,
          items: [
            { label: "Reference Home", link: "/reference/" },
            {
              label: "Step References",
              collapsed: true,
              items: [
                {
                  label: "Parameter Conventions",
                  link: "/references/step_parameter_conventions/",
                },
                { label: "Click Steps", link: "/references/click_steps/" },
                { label: "Input Steps", link: "/references/input_steps/" },
                {
                  label: "Navigation Steps",
                  link: "/references/navigation_steps/",
                },
                { label: "Wait Steps", link: "/references/wait_steps/" },
                { label: "Storage Steps", link: "/references/storage_steps/" },
                { label: "Hover Steps", link: "/references/hover_steps/" },
                {
                  label: "Random Data Steps",
                  link: "/references/random_data_steps/",
                },
                {
                  label: "Assertion Steps",
                  link: "/references/assertion_steps/",
                },
              ],
            },
            {
              label: "Advanced Architecture",
              collapsed: true,
              items: [
                {
                  label: "Execution Lifecycle",
                  link: "/architecture/execution_lifecycle/",
                },
                {
                  label: "Synchronization Pipeline",
                  link: "/architecture/synchronization_pipeline/",
                },
                {
                  label: "Data and Reporting Model",
                  link: "/architecture/data_model_and_reporting/",
                },
                {
                  label: "Runtime Services and APIs",
                  link: "/architecture/runtime_services_and_apis/",
                },
              ],
            },
            {
              label: "Advanced Operations",
              collapsed: true,
              items: [
                {
                  label: "Sync and Scripts",
                  link: "/operations/sync_and_scripts/",
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
