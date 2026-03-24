---
title: Template Steps
description: Define reusable behavior blocks that test cases can compose without rewriting logic.
sidebar:
  order: 7
---

Template steps are reusable behavior units used inside test-case flows.

## Workflow context

Template steps are the reusable action and assertion definitions that keep case authoring consistent across the project.

## Do this

1. Go to `Template Steps -> Create`.
2. Fill `Name`, `Description`, and `Icon`.
3. Select `Template Step Group`.
4. Choose `Type` (`ACTION` or `ASSERTION`).
5. Define `Signature` (Cucumber step text pattern).
6. Configure `Parameters` (type, order).
7. Save.

## Minimal example

- Name: `Click element`
- Type: `ACTION`
- Signature: `the user clicks on the {string} element`
- Parameter: locator name

## What good looks like

- `STRING`: free-text input.
- `NUMBER`: numeric input.
- `BOOLEAN`: true/false input.
- `LOCATOR`: locator-name reference resolved at runtime.

## Next step

- [Template Step Groups](/guides/template_step_groups/)
- [Click Steps](/references/click_steps/)
