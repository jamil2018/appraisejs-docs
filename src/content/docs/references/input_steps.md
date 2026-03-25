---
title: Input Steps
description: Built-in form and input interaction template steps.
sidebar:
  order: 2
---

Source: `src/tests/steps/actions/input.step.ts`.

See shared placeholder rules in [Step Parameter Conventions](/references/step_parameter_conventions).

## Step catalog

### 1. Fill input with literal value

Signature: `the user fills in the {string} input field with value {string}`

What it does:

- Resolves input locator.
- Fills input with provided literal value.

Parameters:

| Parameter | Represents | Expected data |
| --- | --- | --- |
| First `{string}` | Input locator name | Existing locator key (for example `emailInput`). |
| Second `{string}` | Value to type | Any text value (for example `qa@example.com`). |

Example:

```gherkin
When the user fills in the "emailInput" input field with value "qa@example.com"
```

### 2. Clear field

Signature: `the user clears the {string} field`

What it does:

- Resolves field locator.
- Clears existing value using Playwright `clear()`.

Parameters:

| Parameter | Represents | Expected data |
| --- | --- | --- |
| `{string}` | Input locator name | Existing locator key (for example `searchBox`). |

Example:

```gherkin
When the user clears the "searchBox" field
```

### 3. Select dropdown option

Signature: `the user selects the {string} option of the {string} dropdown`

What it does:

- Resolves dropdown locator.
- Selects the option through `selectOption()`.

Parameters:

| Parameter | Represents | Expected data |
| --- | --- | --- |
| First `{string}` | Option identifier | Option value/label (for example `admin`). |
| Second `{string}` | Dropdown locator name | Existing locator key (for example `roleSelect`). |

Example:

```gherkin
When the user selects the "admin" option of the "roleSelect" dropdown
```

### 4. Check checkbox

Signature: `the user checks the {string} checkbox`

What it does:

- Resolves checkbox locator.
- Marks checkbox checked.

Parameters:

| Parameter | Represents | Expected data |
| --- | --- | --- |
| `{string}` | Checkbox locator name | Existing locator key (for example `termsCheckbox`). |

Example:

```gherkin
When the user checks the "termsCheckbox" checkbox
```

### 5. Uncheck checkbox

Signature: `the user unchecks the {string} checkbox`

What it does:

- Resolves checkbox locator.
- Marks checkbox unchecked.

Parameters:

| Parameter | Represents | Expected data |
| --- | --- | --- |
| `{string}` | Checkbox locator name | Existing locator key (for example `newsletterCheckbox`). |

Example:

```gherkin
When the user unchecks the "newsletterCheckbox" checkbox
```

### 6. Fill input from stored variable

Signature: `the user fills in the {string} input with data from the stored variable {string}`

What it does:

- Reads value from runtime variable store.
- Resolves input locator.
- Fills input with stored value.

Parameters:

| Parameter | Represents | Expected data |
| --- | --- | --- |
| First `{string}` | Input locator name | Existing locator key (for example `emailInput`). |
| Second `{string}` | Variable key | Existing runtime variable name (for example `generatedEmail`). |

Example:

```gherkin
When the user fills in the "emailInput" input with data from the stored variable "generatedEmail"
```

## Failure behavior

- Any locator lookup failure throws immediately.
- Stored-variable fill fails when variable key does not exist.
