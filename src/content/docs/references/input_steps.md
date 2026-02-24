---
title: Input Steps
description: Built-in form and input interaction template steps.
sidebar:
  order: 2
---

From `src/tests/steps/actions/input.step.ts`:

## Available signatures

- `the user fills in the {string} input field with value {string}`
- `the user clears the {string} field`
- `the user selects the {string} option of the {string} dropdown`
- `the user checks the {string} checkbox`
- `the user unchecks the {string} checkbox`
- `the user fills in the {string} input with data from the stored variable {string}`

## Notes

- Locator parameters are looked up by locator name.
- Stored-variable input fails if variable is missing.
