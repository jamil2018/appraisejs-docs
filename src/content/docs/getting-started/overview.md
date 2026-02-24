---
title: Overview
description: What AppraiseJS is and what it can do.
sidebar:
  order: 1
---

AppraiseJS is a local-first, visual test development and execution platform.  
It combines test authoring, orchestration, and reporting in a single Next.js app, while generating portable test artifacts (Gherkin + Cucumber/Playwright execution flow) behind the scenes.

At a high level, you model test logic in the UI and AppraiseJS handles the pipeline:

1. Define test assets (modules, suites, cases, steps, locators, environments).
2. Generate and sync executable test artifacts.
3. Run tests with configurable execution options.
4. Persist logs/results and expose detailed reports and metrics.

## What AppraiseJS is built for

- No-code or low-code test authoring for web automation.
- Shared usage across QA, manual testers, and developers.
- Local project ownership with inspectable files and schema-backed data.
- Fast setup via `create-appraisejs` or direct repo setup scripts.

## Core capabilities

- Visual test modeling: build a hierarchy of **Modules -> Test Suites -> Test Cases -> Steps**.
- Visual test modeling: compose scenarios with reusable **Template Steps** (actions and assertions).
- Reusable selector system: manage **Locator Groups** and **Locators** for stable element references.
- Environment-aware execution: define environments (base URLs and credentials) and run against selected targets.
- Tag-driven orchestration: use identifier/filter tags to select and organize execution scope.
- Test run management: create named test runs, track lifecycle, and control worker concurrency.
- Test run management: execute against multiple browser engines (Chromium, Firefox, WebKit).
- Runtime visibility: stream/store run logs, access run artifacts, and inspect execution traces.
- Report ingestion and analytics: parse Cucumber JSON into structured report entities.
- Report ingestion and analytics: surface pass/fail outcomes, durations, and dashboard metrics.
- Filesystem + database sync: sync entities and generated artifacts bidirectionally.
- Filesystem + database sync: regenerate `.feature` files from authored test data.

## Mental model

Think of AppraiseJS as a test control plane with an integrated execution engine:

- Author in UI -> persist in DB.
- Generate/sync Gherkin artifacts.
- Execute with Cucumber + Playwright.
- Parse and store results.
- Explore logs, reports, and metrics in the app.

If you want to start using these capabilities immediately, continue to [Getting Started](/getting-started/getting_started) and then [Quick Start](/getting-started/quick_start).
