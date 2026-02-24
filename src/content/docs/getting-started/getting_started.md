---
title: Getting Started
description: Set up AppraiseJS and understand the first workflow.
sidebar:
  order: 2
---

This page helps you install AppraiseJS and understand the minimum setup needed before authoring tests.

## Prerequisites

- Node.js 18+
- npm
- A target web app you can run or access (local/staging URL)

## Installation options

### Option 1: Scaffold a new project (recommended)

```bash
npx create-appraisejs@latest
cd <your-project-name>
npm run setup
npm run dev
```

### Option 2: Clone the core repository

```bash
git clone https://github.com/jamil2018/appraisejs-core.git
cd appraisejs-core
npm run setup
npm run dev
```

Open `http://localhost:3000` after the server starts.

## What `setup` does

`npm run setup` runs the full local bootstrap:

- Installs dependencies
- Creates `.env` (if missing)
- Runs Prisma migrations for SQLite
- Installs Playwright browsers/deps
- Runs initial sync scripts

## First-run checklist

After the app is running:

1. Create an **Environment** with your base URL.
2. Create a **Module**.
3. Add **Locator Groups** and **Locators**.
4. Create a **Test Suite** and **Test Case**.
5. Add test **Steps** using template steps.
6. Create a **Test Run** and execute.
7. Inspect **Reports** and logs.

## Understand the flow

Before writing tests, read:

- [Overview](/getting-started/overview)
- [Quick Start](/getting-started/quick_start)
- [Why AppraiseJS](/getting-started/why_appraisejs)
