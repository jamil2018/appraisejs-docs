---
title: Storage Steps
description: Built-in variable storage template steps.
sidebar:
  order: 5
---

> Beginners: start with [Template Steps](/guides/template_steps/) if you still need the authoring model first. This page is the exact storage-step reference.

Source: `src/tests/steps/actions/store.step.ts`.

See shared placeholder rules in [Step Parameter Conventions](/references/step_parameter_conventions).

Prefer installing published steps with `npx appraisejs@latest add step ...`
instead of adding the package to your project with `npm install`.

## Use this when

Use storage steps when a later step needs to reuse text captured from the current page or form state.

## Step catalog

### 1. Store element text content

#### Signature

`the user stores the {string} element text inside the variable {string}`

#### Install with CLI

```bash
npx appraisejs@latest add step store/store-element-text
```

#### What it does

- Resolves locator.
- Reads `textContent()`.
- Stores value in runtime variable map.

#### Parameters

| Parameter         | Represents           | Expected data                                               |
| ----------------- | -------------------- | ----------------------------------------------------------- |
| First `{string}`  | Element locator name | Existing locator key (for example `orderIdLabel`).          |
| Second `{string}` | Target variable key  | New/existing variable name (for example `capturedOrderId`). |

#### Example

```gherkin
When the user stores the "orderIdLabel" element text inside the variable "capturedOrderId"
```

### 2. Store text-input current value

#### Signature

`the user stores the {string} text input value inside the variable {string}`

#### Install with CLI

```bash
npx appraisejs@latest add step store/store-text-input-text
```

#### What it does

- Resolves input locator.
- Reads `inputValue()`.
- Stores into runtime variable.

#### Parameters

| Parameter         | Represents          | Expected data                                          |
| ----------------- | ------------------- | ------------------------------------------------------ |
| First `{string}`  | Input locator name  | Existing locator key (for example `emailInput`).       |
| Second `{string}` | Target variable key | New/existing variable name (for example `savedEmail`). |

#### Example

```gherkin
When the user stores the "emailInput" text input value inside the variable "savedEmail"
```

### 3. Store textarea current value

#### Signature

`the user stores the {string} textarea input value inside the variable {string}`

#### Install with CLI

```bash
npx appraisejs@latest add step store/store-textarea-text
```

#### What it does

- Resolves textarea locator.
- Reads `inputValue()`.
- Stores into runtime variable.

#### Parameters

| Parameter         | Represents            | Expected data                                          |
| ----------------- | --------------------- | ------------------------------------------------------ |
| First `{string}`  | Textarea locator name | Existing locator key (for example `notesTextarea`).    |
| Second `{string}` | Target variable key   | New/existing variable name (for example `savedNotes`). |

#### Example

```gherkin
When the user stores the "notesTextarea" textarea input value inside the variable "savedNotes"
```

## Common failures

- Step fails when locator cannot be resolved.
- Stored values are only available within the current scenario world context.

## Related steps

- [Input Steps](/references/input_steps/)
- [Random Data Steps](/references/random_data_steps/)
