---
title: Template Steps
description: Build reusable action/assertion step definitions.
sidebar:
  order: 7
---

Template steps are reusable behavior units used inside test-case flows.

## Create a template step

1. Go to `Template Steps -> Create`.
2. Fill `Name`, `Description`, and `Icon`.
3. Select `Template Step Group`.
4. Choose `Type` (`ACTION` or `ASSERTION`).
5. Define `Signature` (Cucumber step text pattern).
6. Configure `Parameters` (type, order).
7. Save.

## Important behavior

- Signature/parameter updates can regenerate function definition previews.
- Generated definitions map to Cucumber `When`/`Then` style based on type.

## Parameter types

- `STRING`: free-text input.
- `NUMBER`: numeric input.
- `BOOLEAN`: true/false input.
- `LOCATOR`: locator-name reference resolved at runtime.

## Related

- [Template Step Groups](/guides/template_step_groups)
- [References](/references/click_steps)
