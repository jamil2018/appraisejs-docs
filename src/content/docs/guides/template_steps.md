---
title: Template Steps
description: Define reusable behavior blocks that test cases can compose without rewriting logic.
sidebar:
  order: 7
---

Template steps are reusable behavior units used inside test-case flows.

## Workflow context

Template steps are the reusable action and assertion definitions that keep case authoring consistent across the project.

If you want to pull in a published reusable step instead of creating one
manually, use the AppraiseJS CLI:

```bash
npx appraisejs@latest add step click/double-click
```

That flow installs the step into `automation/steps`, then runs the template-step
sync scripts so the step becomes available in the UI. Use the full guide at
[Install Template Steps with CLI](/operations/install_template_steps_with_cli/)
when you want the registry-based workflow.

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
- [Install Template Steps with CLI](/operations/install_template_steps_with_cli/)
- [Click Steps](/references/click_steps/)
