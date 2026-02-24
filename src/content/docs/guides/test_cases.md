---
title: Test Cases
description: Build executable visual scenarios with ordered steps.
sidebar:
  order: 10
---

A test case is a single scenario composed of ordered template steps.

## Create a test case

1. Go to `Test Cases -> Create`.
2. Add title (min 3 chars) and description.
3. Select one or more test suites.
4. Optionally add tags.
5. Build the flow in the diagram editor.
6. Fill required parameters for each step.
7. Save.

## Validation behavior

- At least one suite is required.
- Missing mandatory step parameters block save.
- Generated Gherkin preview reflects current step order.

## Flow design tips

- Keep one business outcome per test case.
- Use clear step labels and stable locator references.
- Use template test cases for repeated patterns.
