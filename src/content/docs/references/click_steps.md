---
title: Click Steps
description: Built-in click interaction template steps.
sidebar:
  order: 1
---

Source: `src/tests/steps/actions/click.step.ts`.

See shared placeholder rules in [Step Parameter Conventions](/references/step_parameter_conventions).

## Step catalog

### 1. Click element

Signature: `the user clicks on the {string} element`

What it does:

- Resolves locator by name.
- Performs a standard Playwright click.

Parameters:

| Parameter | Represents | Expected data |
| --- | --- | --- |
| `{string}` | Target locator name | Existing locator key (for example `loginButton`). |

Example:

```gherkin
When the user clicks on the "loginButton" element
```

### 2. Double click element

Signature: `the user double clicks on the {string} element`

What it does:

- Resolves locator by name.
- Performs `dblclick()` on the matched element.

Parameters:

| Parameter | Represents | Expected data |
| --- | --- | --- |
| `{string}` | Target locator name | Existing locator key (for example `rowItem`). |

Example:

```gherkin
When the user double clicks on the "rowItem" element
```

### 3. Right click element

Signature: `the user right clicks on the {string} element`

What it does:

- Resolves locator by name.
- Performs `click({ button: 'right' })`.

Parameters:

| Parameter | Represents | Expected data |
| --- | --- | --- |
| `{string}` | Target locator name | Existing locator key (for example `contextMenuTarget`). |

Example:

```gherkin
When the user right clicks on the "contextMenuTarget" element
```

## Failure behavior

- Step fails if locator cannot be resolved.
- Step fails if element is not interactable in current page state.
