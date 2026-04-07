---
title: Random Data Steps
description: Built-in random test data generation steps.
sidebar:
  order: 7
---

> Beginners: start with [Template Steps](/guides/template_steps/) if you still need the authoring context first. This page is the exact random-data reference.

Source: `src/tests/steps/actions/random_data.step.ts`.

See shared placeholder rules in [Step Parameter Conventions](/references/step_parameter_conventions).

Prefer installing published steps with `npx appraisejs@latest add step ...`
instead of adding the package to your project with `npm install`.

## Use this when

Use random-data steps when the scenario needs throwaway values without hard-coding test data in the case itself.

All random-data steps share one parameter:

| Parameter  | Represents                            | Expected data                                              |
| ---------- | ------------------------------------- | ---------------------------------------------------------- |
| `{string}` | Variable key to store generated value | New/existing variable name (for example `generatedEmail`). |

## Step catalog

### Install with CLI

```bash
npx appraisejs@latest add step random-data/generate-random-first-name-and-save-in-variable
npx appraisejs@latest add step random-data/generate-random-last-name-and-save-in-variable
npx appraisejs@latest add step random-data/generate-random-email-and-save-in-variable
npx appraisejs@latest add step random-data/generate-random-password-and-save-in-variable
npx appraisejs@latest add step random-data/generate-random-phone-and-save-in-variable
npx appraisejs@latest add step random-data/generate-random-address-and-save-in-variable
npx appraisejs@latest add step random-data/generate-random-unique-text-and-save-in-variable
npx appraisejs@latest add step random-data/generate-random-full-name-and-save-in-variable
```

| Signature                                                                            | Generated value      | Example                                                                                           |
| ------------------------------------------------------------------------------------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `the user generates a random first name and stores it inside the variable {string}`  | First name string    | `When the user generates a random first name and stores it inside the variable "firstName"`       |
| `the user generates a random last name and stores it inside the variable {string}`   | Last name string     | `When the user generates a random last name and stores it inside the variable "lastName"`         |
| `the user generates a random email and stores it inside the variable {string}`       | Email string         | `When the user generates a random email and stores it inside the variable "generatedEmail"`       |
| `the user generates a random password and stores it inside the variable {string}`    | Password-like string | `When the user generates a random password and stores it inside the variable "generatedPassword"` |
| `the user generates a random phone and stores it inside the variable {string}`       | Phone string         | `When the user generates a random phone and stores it inside the variable "generatedPhone"`       |
| `the user generates a random address and stores it inside the variable {string}`     | Address string       | `When the user generates a random address and stores it inside the variable "generatedAddress"`   |
| `the user generates a random unique text and stores it inside the variable {string}` | Unique text token    | `When the user generates a random unique text and stores it inside the variable "uniqueSlug"`     |
| `the user generates a random full name and stores it inside the variable {string}`   | Full name string     | `When the user generates a random full name and stores it inside the variable "fullName"`         |

## Common failures

- Generated values are available to later steps through stored-variable access.
- Missing or invalid variable key usage can cause downstream step failures.

## Related steps

- [Storage Steps](/references/storage_steps/)
- [Input Steps](/references/input_steps/)
