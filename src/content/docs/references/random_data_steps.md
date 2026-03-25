---
title: Random Data Steps
description: Built-in random test data generation steps.
sidebar:
  order: 7
---

Source: `src/tests/steps/actions/random_data.step.ts`.

See shared placeholder rules in [Step Parameter Conventions](/references/step_parameter_conventions).

All random-data steps share one parameter:

| Parameter | Represents | Expected data |
| --- | --- | --- |
| `{string}` | Variable key to store generated value | New/existing variable name (for example `generatedEmail`). |

## Step catalog

| Signature | Generated value | Example |
| --- | --- | --- |
| `the user generates a random first name and stores it inside the variable {string}` | First name string | `When the user generates a random first name and stores it inside the variable "firstName"` |
| `the user generates a random last name and stores it inside the variable {string}` | Last name string | `When the user generates a random last name and stores it inside the variable "lastName"` |
| `the user generates a random email and stores it inside the variable {string}` | Email string | `When the user generates a random email and stores it inside the variable "generatedEmail"` |
| `the user generates a random password and stores it inside the variable {string}` | Password-like string | `When the user generates a random password and stores it inside the variable "generatedPassword"` |
| `the user generates a random phone and stores it inside the variable {string}` | Phone string | `When the user generates a random phone and stores it inside the variable "generatedPhone"` |
| `the user generates a random address and stores it inside the variable {string}` | Address string | `When the user generates a random address and stores it inside the variable "generatedAddress"` |
| `the user generates a random unique text and stores it inside the variable {string}` | Unique text token | `When the user generates a random unique text and stores it inside the variable "uniqueSlug"` |
| `the user generates a random full name and stores it inside the variable {string}` | Full name string | `When the user generates a random full name and stores it inside the variable "fullName"` |

## Notes

- Generated values are available to later steps through stored-variable access.
- Missing or invalid variable key usage can cause downstream step failures.
