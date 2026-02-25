---
title: Getting Started
description: Set up AppraiseJS and understand the first workflow.
sidebar:
  order: 2
---

This page follows the setup model documented in `appraisejs-core`.

## Prerequisites

- Node.js 18+
- npm

## Installation options

### Option 1: Scaffold a new project (recommended)

```bash
npx create-appraisejs
cd <your-project-name>
npm run setup
npm run dev
```

Open `http://localhost:3000` after startup.

### Option 2: Clone appraisejs-core

```bash
git clone https://github.com/jamil2018/appraisejs-core.git
cd appraisejs-core
npm run setup
npm run dev
```

## Common scripts

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run test`

## First-run checklist

- Create an environment.
- Create a module, locator group, and locators.
- Create a test suite and a test case.
- Add case steps from template steps.
- Create a test run and execute it.
- Inspect reports and dashboard metrics.
