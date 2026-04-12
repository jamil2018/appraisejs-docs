---
title: Environments
description: Define the target system a run or locator capture should use.
sidebar:
  order: 2
---

Environments define where AppraiseJS should run tests and where the locator picker should launch.

## Workflow context

An environment matters any time AppraiseJS needs a target URL and, optionally, credentials or API context.

## Do this

1. Go to `Environments -> Create`.
2. Fill `Name` and `Base URL`.
3. Optionally fill `API Base URL`, `Username`, and `Password`.
4. Save.

## Minimal example

- `Local` -> `http://localhost:3000`
- `Staging` -> `https://staging.example.com`

## What good looks like

- Each test run requires one selected environment.
- Environment-aware navigation and wait steps read this configuration at runtime.
- The locator creator can launch from a saved environment when you want route-aware selector capture.
- Base URLs stay accurate enough that navigation failures are meaningful instead of random.

## Next step

- [Locators](/build-tests/locators/)
- [Test Runs](/run-and-analyze/test-runs/)
