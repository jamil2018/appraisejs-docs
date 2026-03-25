---
title: Navigation Steps
description: Built-in browser navigation template steps.
sidebar:
  order: 3
---

Source: `src/tests/steps/actions/navigation.step.ts`.

See shared placeholder rules in [Step Parameter Conventions](/references/step_parameter_conventions).

## Step catalog

### 1. Navigate to URL

Signature: `the user navigates to the {string} url`

What it does:

- Navigates directly to provided URL.
- Waits for `domcontentloaded`.

Parameters:

| Parameter | Represents | Expected data |
| --- | --- | --- |
| `{string}` | Destination URL | Absolute URL (for example `https://example.com/login`). |

Example:

```gherkin
When the user navigates to the "https://example.com/login" url
```

### 2. Navigate to selected environment base URL

Signature: `the user navigates to the base url of the selected environment`

What it does:

- Reads `ENVIRONMENT` runtime value.
- Resolves environment config.
- Navigates to configured `baseUrl`.

Parameters:

- None.

Example:

```gherkin
When the user navigates to the base url of the selected environment
```

### 3. Reload page

Signature: `the user reloads the page`

What it does:

- Reloads current page.
- Waits for `domcontentloaded`.

Parameters:

- None.

Example:

```gherkin
When the user reloads the page
```

### 4. Go back to previous page

Signature: `the user goes back to the previous page`

What it does:

- Executes browser back navigation.
- Waits for `domcontentloaded`.

Parameters:

- None.

Example:

```gherkin
When the user goes back to the previous page
```

## Failure behavior

- Environment-based step fails if environment is unset or unknown.
- Navigation errors bubble up from Playwright as step failures.
