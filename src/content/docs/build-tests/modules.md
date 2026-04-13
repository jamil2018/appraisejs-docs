---
title: Modules
description: Start the asset model by grouping suites and locator work under a stable product area.
sidebar:
  order: 1
---

Modules are the top-level product areas in AppraiseJS. They give suites and locator groups a stable home so the rest of the test model stays readable.

## Workflow context

```nomnoml
#direction: right
#stroke: #64748b
#fill: #f8fafc
[Module] -> [Test Suite]
[Test Suite] -> [Test Case]
[Module] -> [Locator Group]
```

## Do this

1. Go to `Modules -> Create`.
2. Enter `Name` (required).
3. Optionally select `Parent`.
4. Save.

## Minimal example

- Top-level module: `Authentication`
- Optional child module: `Authentication / Social Login`

## What good looks like

- Keep top-level modules feature-oriented (`Auth`, `Checkout`, `Admin`).
- Use one extra child level only when needed.
- Avoid very broad “misc” modules.

## Next step

- [Test Suites](/build-tests/test-suites/)
- [Locator Groups](/build-tests/locator-groups/)
