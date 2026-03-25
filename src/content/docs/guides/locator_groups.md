---
title: Locator Groups
description: Organize locators by module and route.
sidebar:
  order: 4
---

Locator groups cluster related selectors and bind them to a module and route context.

## Create a locator group

1. Go to `Locator Groups -> Create`.
2. Set `Name` (must be unique).
3. Select `Module`.
4. Optionally set `Route` (defaults to `/`).
5. Save.

## How locator groups are used by the locator creator

When you create a locator from `Locators -> Create`, Appraise tries to match the picked page pathname to an existing locator group route.

- If a matching route exists, Appraise suggests that locator group automatically.
- If no match exists, Appraise can suggest a new locator group name and a best-fit module.
- You can still override the suggested group, route, or module before saving.

## Why use groups

- Keeps selectors scoped and maintainable.
- Reduces collision between similarly named locators.
- Improves discoverability in test-case flow editors.
- Makes route-based locator suggestions possible during live capture.
