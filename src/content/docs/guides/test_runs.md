---
title: Test Runs
description: Create a focused execution with clear scope, environment, and runtime settings.
sidebar:
  order: 11
---

Test runs execute cases by tag selection or explicit case selection.

## Workflow context

Test runs are the handoff from authored assets into execution. This is where you decide exactly what should run and under which conditions.

## Do this

1. Go to `Test Runs -> Create`.
2. Choose selection mode (`By Tags` or `By Test Cases`).
3. Provide run `Name`.
4. Select `Environment`.
5. Set `Test Workers Count` (minimum 1).
6. Select `Browser Engine` (`CHROMIUM`, `FIREFOX`, `WEBKIT`).
7. Submit.

## Minimal example

- Name: `auth-smoke-local-chromium`
- Selection mode: `By Tags`
- Tag: `@smoke`
- Environment: `Local`

## What good looks like

Use the details screen to inspect:

- Current run status and result.
- Linked test cases and selection scope.
- Run logs and trace artifacts.
- Linked report access after completion.

## Next step

- [Running Tests](/tutorials/running_tests/)
- [Reports](/guides/reports/)
