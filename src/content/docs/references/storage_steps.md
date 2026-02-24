---
title: Storage Steps
description: Built-in variable storage template steps.
sidebar:
  order: 5
---

From `src/tests/steps/actions/store.step.ts`:

## Available signatures

- `the user stores the {string} element text inside the variable {string}`
- `the user stores the {string} text input value inside the variable {string}`
- `the user stores the {string} textarea input value inside the variable {string}`

## Notes

- Stored variables can be reused in later steps.
- Missing locator names cause immediate failure.
