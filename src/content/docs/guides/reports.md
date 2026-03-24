---
title: Reports
description: Read execution outcomes quickly enough to decide what to fix next.
sidebar:
  order: 12
---

Reports are generated from Cucumber JSON output after run completion.

## Workflow context

Reports are the shortest route from a finished run to a useful debugging decision. Start here before you open raw logs or traces.

## Do this

- `Reports` list page: run-level summary table.
- Report detail page: pass/fail totals, environment details, scenario-level breakdown.
- Metric report: `/reports/test-cases`
- Metric report: `/reports/test-suites`

## Minimal example

- Open the newest failed report.
- Read summary totals and scenario rows.
- Open logs or traces only for the failed scenario that still looks ambiguous.

## What good looks like

1. Start from failed report rows.
2. Drill into scenario/step details.
3. Open run logs and Playwright traces for root-cause analysis.

## Next step

- [Viewing Reports](/tutorials/viewing_reports/)
- [Dashboard](/guides/dashboard/)
