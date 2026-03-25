---
title: Hover Steps
description: Built-in hover interaction template steps.
sidebar:
  order: 6
---

Source: `src/tests/steps/actions/hover.step.ts`.

See shared placeholder rules in [Step Parameter Conventions](/references/step_parameter_conventions).

## Step catalog

### Hover over element

Signature: `the user hovers the cursor over the {string} element`

What it does:

- Resolves locator by name.
- Runs Playwright `hover()` on the target element.

Parameters:

| Parameter | Represents | Expected data |
| --- | --- | --- |
| `{string}` | Target locator name | Existing locator key (for example `menuTrigger`). |

Example:

```gherkin
When the user hovers the cursor over the "menuTrigger" element
```

## Failure behavior

- Step fails if locator is missing.
- Step fails if hover action cannot be completed.
