---
title: Step Parameter Conventions
description: How AppraiseJS step placeholders map to expected runtime values.
sidebar:
  order: 0
---

> Beginners: use [Creating Tests](/getting-started/creating-tests/) or [Template Steps](/build-tests/template-steps/) if you still need the workflow context. This page is the shared placeholder reference for exact step values.

## Use this when

Use this page when you know which step signature you need but need to confirm the expected value format before saving a step or debugging a failure.

## Placeholder types

| Placeholder | Expected data     | Notes                                                                               |
| ----------- | ----------------- | ----------------------------------------------------------------------------------- |
| `{string}`  | Text value        | Meaning depends on context (locator name, URL, variable name, literal text, route). |
| `{int}`     | Whole number      | Used for durations such as seconds.                                                 |
| `{boolean}` | `true` or `false` | Use lowercase booleans in step values.                                              |

## Common parameter contexts

| Context         | Expected value                                                | Example                     |
| --------------- | ------------------------------------------------------------- | --------------------------- |
| Locator name    | Existing locator key from AppraiseJS locators                 | `loginButton`               |
| Variable name   | Runtime variable key in test world                            | `generatedEmail`            |
| URL             | Absolute URL                                                  | `https://example.com/login` |
| Route           | Relative route segment or path                                | `/dashboard`                |
| Literal text    | Exact or partial expected text content                        | `Welcome back`              |
| Dropdown option | Option value or label resolvable by Playwright `selectOption` | `admin`                     |

## Common failures

- Keep locator names stable and human-readable.
- Keep variable names descriptive (`userEmail`, `otpCode`).
- Avoid hard-coded waits when element/route waits are available.
- Prefer deterministic assertions before broad text checks.

## Related steps

- [Navigation Steps](/reference/step-references/navigation-steps/)
- [Wait Steps](/reference/step-references/wait-steps/)
- [Assertion Steps](/reference/step-references/assertion-steps/)
