---
title: Modules
description: Organize your test domain using module hierarchies.
sidebar:
  order: 1
---

Modules are top-level containers for related test assets.

## What modules control

- Grouping of test suites by product area.
- Parent-child hierarchy for large systems.
- Association point for locator groups.

## Create a module

1. Go to `Modules -> Create`.
2. Enter `Name` (required).
3. Optionally select `Parent`.
4. Save.

## Field notes

- `Name` is required.
- `Parent` can be `Root (No Parent)`.

## Recommended structure

- Keep top-level modules feature-oriented (`Auth`, `Checkout`, `Admin`).
- Use one extra child level only when needed.
- Avoid very broad “misc” modules.

## Related pages

- [Test Suites](/guides/test_suites)
- [Locator Groups](/guides/locator_groups)
