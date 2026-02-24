---
title: Test Runs
description: Execute selected tests with environment and runtime options.
sidebar:
  order: 11
---

Test runs execute cases by tag selection or explicit case selection.

## Create a test run

1. Go to `Test Runs -> Create`.
2. Choose selection mode (`By Tags` or `By Test Cases`).
3. Provide run `Name`.
4. Select `Environment`.
5. Set `Test Workers Count` (minimum 1).
6. Select `Browser Engine` (`CHROMIUM`, `FIREFOX`, `WEBKIT`).
7. Submit.

## Runtime behavior

- Name uniqueness is validated.
- Run starts immediately after creation.
- You are redirected to run details if run ID is returned.

## Run details page

Use the details screen to inspect:

- Current run status and result.
- Linked test cases and selection scope.
- Run logs and trace artifacts.
- Linked report access after completion.
