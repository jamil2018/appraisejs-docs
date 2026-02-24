---
title: Wait Steps
description: Built-in timing and synchronization template steps.
sidebar:
  order: 4
---

From `src/tests/steps/actions/wait.step.ts`:

## Available signatures

- `the user waits for the current page to be loaded`
- `the user waits for the route {string} to be loaded`
- `the user waits for the element {string} to become visible`
- `the user waits for the {string} element to disappear`
- `the user waits for {int} seconds`

## Notes

- Route waiting builds URL from selected environment base URL.
- Element waits use locator resolution and Playwright selector states.
