---
title: Tags
description: Add reusable labels that make run scope, ownership, and priority easier to manage.
sidebar:
  order: 3
---

Tags allow selective execution and classification.

## Workflow context

Tags matter most during run creation, but they also make suites and cases easier to organize long before execution.

## Do this

1. Go to `Tags -> Create`.
2. Set `Name`.
3. Set `Tag Expression` (example: `@smoke`).
4. Save.

## Minimal example

- `@smoke`
- `@regression`
- `@auth`
- `@critical`

## What good looks like

- Attached to test cases and test suites.
- Used in test-run creation when selection mode is `By Tags`.
- Separate scope tags (`@checkout`) from priority tags (`@p1`).

## Next step

- [Running Tests](/getting-started/running-tests/)
- [Test Runs](/run-and-analyze/test-runs/)
