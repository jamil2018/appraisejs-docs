---
title: Navigation Steps
description: Built-in browser navigation template steps.
sidebar:
  order: 3
---

From `src/tests/steps/actions/navigation.step.ts`:

## Available signatures

- `the user navigates to the {string} url`
- `the user navigates to the base url of the selected environment`
- `the user reloads the page`
- `the user goes back to the previous page`

## Notes

- Environment-based navigation reads selected run environment.
- Navigation waits for `domcontentloaded`.
