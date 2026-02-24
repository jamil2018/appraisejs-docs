---
title: Assertion Steps
description: Built-in validation template steps.
sidebar:
  order: 8
---

From `src/tests/steps/validations/*.step.ts`:

## Text assertions

- `the element {string} should {boolean} contain the text {string}`
- `the element {string} should {boolean} equal the text {string}`

## Visibility assertion

- `the visibility status of the {string} element should be {boolean}`

## Active state assertion

- `the element {string} should have active status {boolean}`

## Navigation assertion

- `the url route should be equal to {string}`

## Notes

- Assertions use `Then` definitions.
- Boolean parameters control positive/negative checks.
- One stored-variable text assertion exists in file but is currently stubbed.
