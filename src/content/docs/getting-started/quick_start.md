---
title: Quick Start
description: Build and run your first AppraiseJS flow quickly.
sidebar:
  order: 3
---

## 1. Start AppraiseJS

### If using `create-appraisejs`

```bash
npx create-appraisejs
cd <your-project-name>
npm run dev
```

### If using `appraisejs-core` github clone

```bash
npm run setup
npm run dev
```

## 2. Create baseline entities

1. Environment (`Local`)
2. Module (`Login`)
3. Create locators from `Locators -> Create`
4. Let Appraise suggest an existing locator group or create a new one from the current route
5. Test Suite (`Login flow`)
6. Test Case (`User logs in with valid credentials`)

## 3. Add flow steps

1. Navigate to base URL or login route.
2. Fill email.
3. Fill password.
4. Click submit.
5. Assert success state.

## 4. Run and verify

1. Create test run.
2. Select environment and tests.
3. Submit and monitor status.
4. Open reports for outcomes and failures.

If you later pull filesystem changes or edit automation artifacts outside the UI, open `Settings -> Sync` before running tests again.
