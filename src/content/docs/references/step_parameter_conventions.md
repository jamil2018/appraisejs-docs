---
title: Step Parameter Conventions
description: How AppraiseJS step placeholders map to expected runtime values.
sidebar:
  order: 0
---

Use this page as the base reference for all built-in step signatures.

## Placeholder types

| Placeholder | Expected data | Notes |
| --- | --- | --- |
| `{string}` | Text value | Meaning depends on context (locator name, URL, variable name, literal text, route). |
| `{int}` | Whole number | Used for durations such as seconds. |
| `{boolean}` | `true` or `false` | Use lowercase booleans in step values. |

## Common parameter contexts

| Context | Expected value | Example |
| --- | --- | --- |
| Locator name | Existing locator key from AppraiseJS locators | `loginButton` |
| Variable name | Runtime variable key in test world | `generatedEmail` |
| URL | Absolute URL | `https://example.com/login` |
| Route | Relative route segment or path | `/dashboard` |
| Literal text | Exact or partial expected text content | `Welcome back` |
| Dropdown option | Option value or label resolvable by Playwright `selectOption` | `admin` |

## Data quality guidelines

- Keep locator names stable and human-readable.
- Keep variable names descriptive (`userEmail`, `otpCode`).
- Avoid hard-coded waits when element/route waits are available.
- Prefer deterministic assertions before broad text checks.
