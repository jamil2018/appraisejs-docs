---
title: Assertion Steps
description: Built-in validation template steps.
sidebar:
  order: 8
---

> Beginners: start with [Viewing Reports](/tutorials/viewing_reports/) or [Creating Tests](/tutorials/creating_tests/) if you still need the workflow context first. This page is the exact assertion-step reference.

Source: `src/tests/steps/validations/*.step.ts`.

See shared placeholder rules in [Step Parameter Conventions](/references/step_parameter_conventions).

## Use this when

Use assertion steps when the scenario must validate page text, element state, or route state after an action.

## Text assertion steps

### 1. Contains text assertion

Signature: `the element {string} should {boolean} contain the text {string}`

What it does:

- Resolves locator.
- Reads `textContent()`.
- Asserts contains or does-not-contain based on boolean flag.

Parameters:

| Parameter         | Represents                     | Expected data                                          |
| ----------------- | ------------------------------ | ------------------------------------------------------ |
| First `{string}`  | Element locator name           | Existing locator key (for example `toastMessage`).     |
| `{boolean}`       | Positive or negative assertion | `true` for must contain, `false` for must not contain. |
| Second `{string}` | Target text                    | Expected literal/partial text value.                   |

Example:

```gherkin
Then the element "toastMessage" should true contain the text "Saved successfully"
```

### 2. Equals text assertion

Signature: `the element {string} should {boolean} equal the text {string}`

What it does:

- Resolves locator.
- Reads `textContent()`.
- Asserts exact equality or inequality based on boolean flag.

Parameters:

| Parameter         | Represents                     | Expected data                                      |
| ----------------- | ------------------------------ | -------------------------------------------------- |
| First `{string}`  | Element locator name           | Existing locator key (for example `pageTitle`).    |
| `{boolean}`       | Positive or negative assertion | `true` for must equal, `false` for must not equal. |
| Second `{string}` | Expected exact text            | Exact value expected in element.                   |

Example:

```gherkin
Then the element "pageTitle" should true equal the text "Dashboard"
```

## State assertion steps

### 3. Visibility assertion

Signature: `the visibility status of the {string} element should be {boolean}`

What it does:

- Resolves locator.
- Uses Playwright visibility check.
- Asserts visible/non-visible state.

Parameters:

| Parameter   | Represents           | Expected data                                       |
| ----------- | -------------------- | --------------------------------------------------- |
| `{string}`  | Element locator name | Existing locator key.                               |
| `{boolean}` | Expected visibility  | `true` for visible, `false` for hidden/not visible. |

Example:

```gherkin
Then the visibility status of the "successBanner" element should be true
```

### 4. Active/enabled assertion

Signature: `the element {string} should have active status {boolean}`

What it does:

- Resolves locator.
- Uses Playwright enabled-state check.
- Asserts enabled/disabled expectation.

Parameters:

| Parameter   | Represents            | Expected data                                               |
| ----------- | --------------------- | ----------------------------------------------------------- |
| `{string}`  | Element locator name  | Existing locator key.                                       |
| `{boolean}` | Expected active state | `true` for active/enabled, `false` for not active/disabled. |

Example:

```gherkin
Then the element "submitButton" should have active status true
```

### 5. URL route equality assertion

Signature: `the url route should be equal to {string}`

What it does:

- Waits for network idle.
- Extracts current pathname from URL.
- Compares pathname to expected route.

Parameters:

| Parameter  | Represents        | Expected data                          |
| ---------- | ----------------- | -------------------------------------- |
| `{string}` | Expected pathname | Route path (for example `/dashboard`). |

Example:

```gherkin
Then the url route should be equal to "/dashboard"
```

## Common failures

- Assertions fail when the locator is missing, the expected state is wrong, or the page has not reached the required state yet.
- Route assertions can fail when the environment or navigation step did not land where you expected.

## Related steps

- [Navigation Steps](/references/navigation_steps/)
- [Wait Steps](/references/wait_steps/)

## Known limitation

The signature below exists but is currently stubbed (no implementation body):

- `the element {string} should contain the text inside the stored variable {string}`
