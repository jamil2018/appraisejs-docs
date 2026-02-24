---
title: Click Steps
description: Built-in click interaction template steps.
sidebar:
  order: 1
---

From `src/tests/steps/actions/click.step.ts`:

## Available signatures

- `the user clicks on the {string} element`
- `the user double clicks on the {string} element`
- `the user right clicks on the {string} element`

## Parameters

- `{string}`: locator name resolved through locator mappings.

## Notes

- Steps fail if locator name cannot be resolved.
- Right click uses Playwright `click({ button: 'right' })`.
