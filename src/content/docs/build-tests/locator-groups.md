---
title: Locator Groups
description: Organize selectors by product area and route so AppraiseJS can suggest the right group automatically.
sidebar:
  order: 4
---

Locator groups cluster related selectors and bind them to a module and route context.

## Workflow context

Locator groups matter because they give captured selectors a route-aware home and make the picker suggestions much more reliable.

## Do this

1. Go to `Locator Groups -> Create`.
2. Set `Name` (must be unique).
3. Select `Module`.
4. Optionally set `Route` (defaults to `/`).
5. Save.

## Minimal example

- Name: `Login Page`
- Module: `Authentication`
- Route: `/login`

## What good looks like

- Keeps selectors scoped and maintainable.
- Reduces collision between similarly named locators.
- Improves discoverability in test-case flow editors.
- Makes route-based locator suggestions possible during live capture.

## Next step

- [Locators](/build-tests/locators/)
- [Modules](/build-tests/modules/)
