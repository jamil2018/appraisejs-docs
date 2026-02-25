---
title: Storage Steps
description: Built-in variable storage template steps.
sidebar:
  order: 5
---

Source: `src/tests/steps/actions/store.step.ts`.

See shared placeholder rules in [Step Parameter Conventions](/references/step_parameter_conventions).

## Step catalog

### 1. Store element text content

Signature: `the user stores the {string} element text inside the variable {string}`

What it does:

- Resolves locator.
- Reads `textContent()`.
- Stores value in runtime variable map.

Parameters:

| Parameter | Represents | Expected data |
| --- | --- | --- |
| First `{string}` | Element locator name | Existing locator key (for example `orderIdLabel`). |
| Second `{string}` | Target variable key | New/existing variable name (for example `capturedOrderId`). |

Example:

```gherkin
When the user stores the "orderIdLabel" element text inside the variable "capturedOrderId"
```

### 2. Store text-input current value

Signature: `the user stores the {string} text input value inside the variable {string}`

What it does:

- Resolves input locator.
- Reads `inputValue()`.
- Stores into runtime variable.

Parameters:

| Parameter | Represents | Expected data |
| --- | --- | --- |
| First `{string}` | Input locator name | Existing locator key (for example `emailInput`). |
| Second `{string}` | Target variable key | New/existing variable name (for example `savedEmail`). |

Example:

```gherkin
When the user stores the "emailInput" text input value inside the variable "savedEmail"
```

### 3. Store textarea current value

Signature: `the user stores the {string} textarea input value inside the variable {string}`

What it does:

- Resolves textarea locator.
- Reads `inputValue()`.
- Stores into runtime variable.

Parameters:

| Parameter | Represents | Expected data |
| --- | --- | --- |
| First `{string}` | Textarea locator name | Existing locator key (for example `notesTextarea`). |
| Second `{string}` | Target variable key | New/existing variable name (for example `savedNotes`). |

Example:

```gherkin
When the user stores the "notesTextarea" textarea input value inside the variable "savedNotes"
```

## Failure behavior

- Step fails when locator cannot be resolved.
- Stored values are only available within the current scenario world context.
