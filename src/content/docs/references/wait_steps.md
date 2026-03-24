---
title: Wait Steps
description: Built-in timing and synchronization template steps.
sidebar:
  order: 4
---

> Beginners: start with [Running Tests](/tutorials/running_tests/) if you are still learning when waits are necessary. This page is the exact synchronization-step reference.

Source: `src/tests/steps/actions/wait.step.ts`.

See shared placeholder rules in [Step Parameter Conventions](/references/step_parameter_conventions).

## Use this when

Use wait steps when the scenario needs route or element synchronization and fixed-duration waiting is not enough or not appropriate.

## Step catalog

### 1. Wait for current page load

Signature: `the user waits for the current page to be loaded`

What it does:

- Waits for current page to reach `domcontentloaded`.

Parameters:

- None.

Example:

```gherkin
When the user waits for the current page to be loaded
```

### 2. Wait for route to load

Signature: `the user waits for the route {string} to be loaded`

What it does:

- Reads selected environment base URL.
- Combines base URL with provided route.
- Waits for full URL match.

Parameters:

| Parameter  | Represents | Expected data                                             |
| ---------- | ---------- | --------------------------------------------------------- |
| `{string}` | Route path | Relative route (for example `/dashboard` or `dashboard`). |

Example:

```gherkin
When the user waits for the route "/dashboard" to be loaded
```

### 3. Wait for element visibility

Signature: `the user waits for the element {string} to become visible`

What it does:

- Resolves locator by name.
- Waits until selector state is `visible`.

Parameters:

| Parameter  | Represents   | Expected data                                       |
| ---------- | ------------ | --------------------------------------------------- |
| `{string}` | Locator name | Existing locator key (for example `successBanner`). |

Example:

```gherkin
When the user waits for the element "successBanner" to become visible
```

### 4. Wait for element disappearance

Signature: `the user waits for the {string} element to disappear`

What it does:

- Resolves locator by name.
- Waits until selector state is `hidden`.

Parameters:

| Parameter  | Represents   | Expected data                                        |
| ---------- | ------------ | ---------------------------------------------------- |
| `{string}` | Locator name | Existing locator key (for example `loadingSpinner`). |

Example:

```gherkin
When the user waits for the "loadingSpinner" element to disappear
```

### 5. Wait fixed duration

Signature: `the user waits for {int} seconds`

What it does:

- Pauses execution for provided seconds.

Parameters:

| Parameter | Represents          | Expected data                       |
| --------- | ------------------- | ----------------------------------- |
| `{int}`   | Duration in seconds | Positive integer (for example `2`). |

Example:

```gherkin
When the user waits for 2 seconds
```

## Common failures

- Prefer route/element waits over fixed-duration waits where possible.
- Fixed waits are best as last-resort stabilization steps.

## Related steps

- [Navigation Steps](/references/navigation_steps/)
- [Assertion Steps](/references/assertion_steps/)
