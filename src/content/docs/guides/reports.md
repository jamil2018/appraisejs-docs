---
title: Reports
description: Analyze run outcomes, scenario details, and execution metrics.
sidebar:
  order: 12
---

Reports are generated from Cucumber JSON output after run completion.

## Report views

- `Reports` list page: run-level summary table.
- Report detail page: pass/fail totals, environment details, scenario-level breakdown.
- Metric report: `/reports/test-cases`
- Metric report: `/reports/test-suites`

## What you can inspect

- Total/passed/failed tests.
- Step-level outcomes and durations.
- Environment context used for the run.
- Linked run state and logs.

## Debug flow

1. Start from failed report rows.
2. Drill into scenario/step details.
3. Open run logs and Playwright traces for root-cause analysis.
