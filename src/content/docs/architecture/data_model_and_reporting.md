---
title: Data and Reporting Model
description: Core entities, run records, and parsed reporting structure.
sidebar:
  order: 4
---

AppraiseJS separates authored test design from execution telemetry.

## Authored model (design-time)

- Structure chain: `Module -> TestSuite -> TestCase -> TestCaseStep`.
- Reusable behavior: `TemplateStepGroup -> TemplateStep -> TemplateStepParameter`.
- Selector layer: `LocatorGroup -> Locator`.
- Target context: `Environment`.
- Filtering/grouping: `Tag` with `FILTER` and `IDENTIFIER` types.

## Runtime model (execution-time)

- `TestRun`: one execution instance with `runId`, environment, browser, workers, lifecycle status.
- `TestRunTestCase`: per-case status/result within the run.
- `TestRunLog`: persisted normalized log stream keyed by `runId`.
- `tracePath` and `reportPath`: artifact pointers for debugging and ingestion.

## Report ingestion model

`storeReportFromFile()` parses Cucumber JSON into:

1. `Report`
2. `ReportFeature` + `ReportFeatureTag`
3. `ReportScenario` + `ReportScenarioTag`
4. `ReportStep` and `ReportHook`
5. `ReportTestCase` links back to `TestRunTestCase`

## Scenario-to-test-case matching

Report ingestion matches scenario outcomes using two strategies:

1. Scenario name prefix extraction from `[TestCaseTitle]`.
2. Fallback matching via identifier tags between scenario tags and test-case tags.

## Metrics model

- `TestCaseMetrics`: failure rate, consecutive failures, flaky/repeated-failure flags.
- `TestSuiteMetrics`: last executed timestamp.
- `DashboardMetrics`: aggregate operational counters used by dashboard cards/drawers.

Current thresholds in metric calculator:

- Recent window: 7 days.
- Repeated failure: 3+ consecutive failures.
- Flaky: failure rate > 5% and < 100%.
