---
title: Execution Lifecycle
description: End-to-end flow from creating a run to persisted report data.
sidebar:
  order: 2
---

This page documents the runtime path used by `createTestRunAction`, `executeTestRun`, and `ProcessManager`.

## Request payload (`testRunSchema`)

| Field              | Type                       | Required    | Meaning                                                 |
| ------------------ | -------------------------- | ----------- | ------------------------------------------------------- |
| `name`             | `string`                   | Yes         | Human-readable run name. Must be unique in `TestRun`.   |
| `environmentId`    | `string`                   | Yes         | Database ID for the target `Environment`.               |
| `tags`             | `string[]`                 | Conditional | Tag IDs for tag-based selection mode.                   |
| `testCases`        | `{ testCaseId: string }[]` | Conditional | Explicit case IDs when tag-based selection is not used. |
| `testWorkersCount` | `number`                   | No          | Parallel worker count. Minimum value is `1`.            |
| `browserEngine`    | `BrowserEngine` enum       | Yes         | `CHROMIUM`, `FIREFOX`, or `WEBKIT`.                     |

Selection rule: at least one of `tags` or `testCases` must be provided.

## 1. Run creation and scope resolution

1. Validate payload with `testRunSchema`.
2. Enforce unique run name (`checkUniqueName`).
3. Resolve target environment from `environmentId`; return `400` if not found.
4. Determine filtering mode:
   - Tag mode: `tags.length > 0`
   - Test-case mode: `testCases.length > 0 && tags.length === 0`
5. Build execution scope:
   - Tag mode: collect matching test cases from case-level tags and suite-level tags.
   - Test-case mode: fetch selected cases, extract `IDENTIFIER` tags, and reject request if no identifier tags exist.
6. Create `TestRun` with:
   - `status = RUNNING`
   - `result = PENDING`
   - Connected tags and created `TestRunTestCase` rows for scoped cases.

## 2. Process launch (`executeTestRun`)

`createTestRunAction` invokes `executeTestRun` with:

| Parameter          | Type            | Meaning                                                                     |
| ------------------ | --------------- | --------------------------------------------------------------------------- |
| `testRunId`        | `string`        | External run identifier (`runId`), used as process key and artifact prefix. |
| `environment`      | `Environment`   | Full environment record; `name` is exported to process env.                 |
| `tags`             | `Tag[]`         | Tags converted into Cucumber tag expression (`or` combined).                |
| `testWorkersCount` | `number`        | Controls `--parallel` argument when greater than `1`.                       |
| `browserEngine`    | `BrowserEngine` | Mapped to Playwright browser name (`chromium`/`firefox`/`webkit`).          |
| `headless`         | `boolean`       | Passed as `HEADLESS` env var, defaults to `true`.                           |

Execution steps:

1. Generate report path: `src/tests/reports/cucumber-{runId}-{timestamp}.json`.
2. Set process env vars:
   - `ENVIRONMENT`: environment name (`string`)
   - `HEADLESS`: `"true"` or `"false"` (`string`)
   - `BROWSER`: browser name (`string`)
   - `REPORT_PATH`: absolute cucumber output path (`string`)
3. Build Cucumber args:
   - `-t <tagExpression>` when tags exist
   - `--parallel <count>` when worker count > 1
4. Spawn `npx cucumber-js ...` using `spawnTask`.
5. Register process in `ProcessManager` under `testRunId`.
6. Attach process exit handler that unregisters process immediately.

## 3. Runtime events and trace artifacts

Hooks in `src/tests/hooks/hooks.ts` emit structured JSON events to stdout:

| Field               | Type                                             | Meaning                                                           |
| ------------------- | ------------------------------------------------ | ----------------------------------------------------------------- |
| `event`             | `"scenario::end"`                                | Event discriminator parsed by `ProcessManager`.                   |
| `data.scenarioName` | `string`                                         | Cucumber scenario name.                                           |
| `data.status`       | `"passed" \| "failed" \| "skipped" \| "unknown"` | Scenario outcome derived from step status progression.            |
| `data.tracePath`    | `string \| undefined`                            | ZIP path for failed scenarios (`src/tests/reports/traces/*.zip`). |

Flow:

1. Hooks track per-scenario status during execution.
2. On scenario completion, hooks emit `scenario::end` JSON.
3. `ProcessManager` parses stdout/stderr and re-emits `scenario::end`.
4. `createTestRunAction` listener maps status and updates matching `TestRunTestCase`.
5. Scenario matching uses bracket prefix (`[Test Case Title]`) with fallback handling for tag-only runs.

## 4. Completion, logs, and report persistence

1. Wait for spawned process completion (`waitForTask`).
2. Normalize captured stdout/stderr into `LogEntry[]` and persist in `TestRunLog`.
3. Finalize run status/result:
   - Exit code `0` -> `COMPLETED/PASSED`
   - Non-zero -> `COMPLETED/FAILED`
   - Preserve cancelled states when cancellation already occurred.
4. Persist report tree using `storeReportFromFile(runId, reportPath)`:
   - `Report` -> `ReportFeature` -> `ReportScenario` -> `ReportStep/ReportHook`
   - Link back to run cases through `ReportTestCase`.
5. Trigger metrics updates and revalidation paths for UI consistency.

Flow diagram for this lifecycle:

```nomnoml
#direction: down
#spacing: 60
#stroke: #64748b
#fill: #f8fafc
[UI] -> [createTestRunAction]
[createTestRunAction] -> [DB: Create TestRun + rows]
[createTestRunAction] -> [test-run-executor]
[test-run-executor] -> [ProcessManager: register]
[test-run-executor] -> [Cucumber Hooks: launch]
[Cucumber Hooks: launch] -> [ProcessManager: emit scenario::end]
[ProcessManager: emit scenario::end] -> [createTestRunAction]
[createTestRunAction] -> [DB: update status + tracePath]
[test-run-executor] -> [createTestRunAction: process exit]
[createTestRunAction] -> [report-actions: storeReportFromFile]
[report-actions: storeReportFromFile] -> [DB: report hierarchy]
[createTestRunAction] -> [DB: finalize run + logs]
```

## Failure and guardrail behavior

- Reject run when both `tags` and `testCases` are empty.
- Reject explicit case mode when selected cases have no `IDENTIFIER` tags.
- Skip report generation when run is cancelled.
- Return structured `404` when report file is missing at ingest time.
