---
title: Test Suites
description: Group related cases under one feature area so runs and reports stay easier to read.
sidebar:
  order: 9
---

Test suites bundle related test cases for organization and reporting.

## Workflow context

Suites are the feature-level container between modules and cases. They make reporting and selective execution more understandable than a flat list of scenarios.

## Do this

1. Go to `Test Suites -> Create`.
2. Fill `Name` (min 3 chars).
3. Add `Description`.
4. Select one `Module`.
5. Optionally attach `Test Cases` and `Tags`.
6. Save.

## Minimal example

- Module: `Authentication`
- Suite: `Auth Smoke`
- Cases: `Valid login shows welcome banner`, `Invalid login shows error`

## What good looks like

- Logical grouping by feature or flow.
- Better run selection and metrics aggregation.
- Cleaner report slicing by business area.

## Next step

- [Test Cases](/guides/test_cases/)
- [Tags](/guides/tags/)
