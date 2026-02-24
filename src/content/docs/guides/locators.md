---
title: Locators
description: Define reusable selectors used by template steps.
sidebar:
  order: 5
---

Locators are named selector definitions referenced by test steps.

## Create a locator

1. Go to `Locators -> Create`.
2. Set `Name`.
3. Set `Selector` (`value`, CSS or XPath).
4. Choose `Locator Group`.
5. Save.

## Why locators matter

- Decouples test logic from raw selector strings.
- Reduces update effort when UI selectors change.
- Enables step-level reuse across many cases.

## Sync behavior

- The core repo includes locator sync scripts.
- `npm run sync-locators`
- `npm run sync-locator-groups`
- Locator mappings are maintained in `src/tests` artifacts and consumed during execution.

## Good practices

- Prefer stable `data-testid` selectors.
- Keep naming human-readable (`loginSubmitButton`).
- Do not duplicate the same selector across many locator names.
