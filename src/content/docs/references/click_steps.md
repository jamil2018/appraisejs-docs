---
title: Click Steps
description: Built-in click interaction template steps.
sidebar:
  order: 1
---

> Beginners: start with [Creating Tests](/tutorials/creating_tests/) or [Template Steps](/guides/template_steps/) if you need the authoring workflow first. This page is the exact click-step reference.

Source: `src/tests/steps/actions/click.step.ts`.

See shared placeholder rules in [Step Parameter Conventions](/references/step_parameter_conventions).

Prefer installing published steps with `npx appraisejs@latest add step ...`
instead of adding the package to your project with `npm install`.

## Use this when

Use click steps when the scenario needs a direct UI action against an existing locator.

## Step catalog

### 1. Click element

#### Signature

`the user clicks on the {string} element`

#### Install with CLI

```bash
npx appraisejs@latest add step click/click
```

#### What it does

- Resolves locator by name.
- Performs a standard Playwright click.

#### Parameters

| Parameter  | Represents          | Expected data                                     |
| ---------- | ------------------- | ------------------------------------------------- |
| `{string}` | Target locator name | Existing locator key (for example `loginButton`). |

#### Example

```gherkin
When the user clicks on the "loginButton" element
```

### 2. Double click element

#### Signature

`the user double clicks on the {string} element`

#### Install with CLI

```bash
npx appraisejs@latest add step click/double-click
```

#### What it does

- Resolves locator by name.
- Performs `dblclick()` on the matched element.

#### Parameters

| Parameter  | Represents          | Expected data                                 |
| ---------- | ------------------- | --------------------------------------------- |
| `{string}` | Target locator name | Existing locator key (for example `rowItem`). |

#### Example

```gherkin
When the user double clicks on the "rowItem" element
```

### 3. Right click element

#### Signature

`the user right clicks on the {string} element`

#### Install with CLI

```bash
npx appraisejs@latest add step click/right-click
```

#### What it does

- Resolves locator by name.
- Performs `click({ button: 'right' })`.

#### Parameters

| Parameter  | Represents          | Expected data                                           |
| ---------- | ------------------- | ------------------------------------------------------- |
| `{string}` | Target locator name | Existing locator key (for example `contextMenuTarget`). |

#### Example

```gherkin
When the user right clicks on the "contextMenuTarget" element
```

## Common failures

- Step fails if locator cannot be resolved.
- Step fails if element is not interactable in current page state.

## Related steps

- [Hover Steps](/references/hover_steps/)
- [Input Steps](/references/input_steps/)
