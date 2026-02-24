---
title: Quick Start
description: Build and run your first AppraiseJS test flow.
sidebar:
  order: 3
---

Use this page to go from zero to one complete test run quickly.

## 1. Start the app

From your AppraiseJS project:

```bash
npm run setup
npm run sync-all
npm run dev
```

Open `http://localhost:3000`.

## 2. Create baseline entities

In the UI, create:

1. **Environment**: `Local` -> `http://localhost:3000` (or your app URL)
2. **Module**: `Login`
3. **Locator Group**: `Login page`
4. **Locators**: for email, password, submit button, and success indicator
5. **Test Suite**: `Login flow`
6. **Test Case**: `User logs in with valid credentials`

## 3. Add steps to the test case

Add steps with template-step actions/assertions, for example:

1. Navigate to `/login`
2. Fill email input
3. Fill password input
4. Click submit button
5. Assert success text or navigation

## 4. Run the test

1. Go to **Test Runs** -> **Create Test Run**
2. Select your environment
3. Select the case (or tag)
4. Submit run

The run executes automatically and updates status/logs live.

## 5. Read results

After completion:

- Open **Reports** for pass/fail and step-level details
- Open run logs/traces for debugging failed scenarios

## Troubleshooting

- Missing template steps: run `npm run sync-all`
- Environment mismatch: verify base URL and credentials
- Element not found: verify locator selectors and page state
- Browser execution issues: rerun `npm run install-playwright`
