---
title: Tags
description: Use tag expressions for grouping and run filtering.
sidebar:
  order: 3
---

Tags allow selective execution and classification.

## Create a tag

1. Go to `Tags -> Create`.
2. Set `Name`.
3. Set `Tag Expression` (example: `@smoke`).
4. Save.

## Validation rules

- Tag expression must start with `@`.
- Tag expression must be a single token (no spaces).
- Tag expression must include characters after `@`.

## Where tags are used

- Attached to test cases and test suites.
- Used in test-run creation when selection mode is `By Tags`.

## Conventions

- Use short, stable tags: `@smoke`, `@regression`, `@auth`, `@critical`.
- Separate scope tags (`@checkout`) from priority tags (`@p1`).
