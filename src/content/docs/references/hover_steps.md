---
title: Hover Steps
description: Built-in hover interaction template steps.
sidebar:
  order: 6
---

> Beginners: start with [Locators](/guides/locators/) if you still need the UI-element workflow first. This page is the exact hover-step reference.

Source: `src/tests/steps/actions/hover.step.ts`.

See shared placeholder rules in [Step Parameter Conventions](/references/step_parameter_conventions).

## Use this when

Use hover when the UI reveals state only after pointer movement, such as menus, tooltips, or nested controls.

## Step catalog

### Hover over element

Signature: `the user hovers the cursor over the {string} element`

What it does:

- Resolves locator by name.
- Runs Playwright `hover()` on the target element.

Parameters:

| Parameter  | Represents          | Expected data                                     |
| ---------- | ------------------- | ------------------------------------------------- |
| `{string}` | Target locator name | Existing locator key (for example `menuTrigger`). |

Example:

```gherkin
When the user hovers the cursor over the "menuTrigger" element
```

## Common failures

- Step fails if locator is missing.
- Step fails if hover action cannot be completed.

## Related steps

- [Click Steps](/references/click_steps/)
- [Wait Steps](/references/wait_steps/)
