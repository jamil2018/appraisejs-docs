---
title: Navigation Steps
description: Built-in browser navigation template steps.
sidebar:
  order: 3
---

> Beginners: start with [Quick Start](/getting-started/quick_start/) or [Running Tests](/tutorials/running_tests/) if you need the operational context first. This page is the exact navigation-step reference.

Source: `src/tests/steps/actions/navigation.step.ts`.

See shared placeholder rules in [Step Parameter Conventions](/references/step_parameter_conventions).

Prefer installing published steps with `npx appraisejs@latest add step ...`
instead of adding the package to your project with `npm install`.

## Use this when

Use navigation steps when the scenario must move to a URL, use the selected environment base URL, reload, or move backward in browser history.

## Step catalog

### 1. Navigate to URL

#### Signature

`the user navigates to the {string} url`

#### Install with CLI

```bash
npx appraisejs@latest add step navigation/navigate-to-url
```

#### What it does

- Navigates directly to provided URL.
- Waits for `domcontentloaded`.

#### Parameters

| Parameter  | Represents      | Expected data                                           |
| ---------- | --------------- | ------------------------------------------------------- |
| `{string}` | Destination URL | Absolute URL (for example `https://example.com/login`). |

#### Example

```gherkin
When the user navigates to the "https://example.com/login" url
```

### 2. Navigate to selected environment base URL

#### Signature

`the user navigates to the base url of the selected environment`

#### Install with CLI

```bash
npx appraisejs@latest add step navigation/navigate-to-environment-base-url
```

#### What it does

- Reads `ENVIRONMENT` runtime value.
- Resolves environment config.
- Navigates to configured `baseUrl`.

#### Parameters

- None.

#### Example

```gherkin
When the user navigates to the base url of the selected environment
```

### 3. Reload page

#### Signature

`the user reloads the page`

#### Install with CLI

```bash
npx appraisejs@latest add step navigation/reload
```

#### What it does

- Reloads current page.
- Waits for `domcontentloaded`.

#### Parameters

- None.

#### Example

```gherkin
When the user reloads the page
```

### 4. Go back to previous page

#### Signature

`the user goes back to the previous page`

#### Install with CLI

```bash
npx appraisejs@latest add step navigation/go-back
```

#### What it does

- Executes browser back navigation.
- Waits for `domcontentloaded`.

#### Parameters

- None.

#### Example

```gherkin
When the user goes back to the previous page
```

## Common failures

- Environment-based step fails if environment is unset or unknown.
- Navigation errors bubble up from Playwright as step failures.

## Related steps

- [Wait Steps](/references/wait_steps/)
- [Assertion Steps](/references/assertion_steps/)
