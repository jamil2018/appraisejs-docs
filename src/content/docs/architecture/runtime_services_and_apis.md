---
title: Runtime Services and APIs
description: Process management, log streaming, traces, and artifact download endpoints.
sidebar:
  order: 5
---

The runtime layer provides operational APIs around test execution.

## Process management service

`ProcessManager` is a singleton registry keyed by `runId` that:

- Registers spawned run processes.
- Parses stdout/stderr for custom JSON events.
- Emits normalized events (`scenario::end`) for server-side listeners.
- Cleans up listeners and process handles on unregister.

## Streaming logs (SSE)

`GET /api/test-runs/[runId]/logs`:

1. Confirms run exists.
2. Rejects live stream if run is already completed/cancelled.
3. Waits briefly for process registration to avoid race conditions.
4. Streams stdout/stderr lines as SSE events.
5. Filters internal event JSON from user-facing logs.

## Trace viewer endpoint

`POST /api/test-runs/[runId]/trace/[testCaseId]`:

- Validates run/test-case association.
- Confirms trace file exists.
- Spawns `npx playwright show-trace <tracePath>`.

`GET` on same route checks whether trace-viewer process is active.

## Artifact download endpoint

`GET /api/test-runs/[runId]/download`:

- Collects existing run log file and trace zips.
- Bundles files via `archiver` into a downloadable zip.
- Returns `404` if no artifacts are available.

## Logging and storage path

- During execution: logs are streamed from process output.
- After completion: logs are persisted to `TestRunLog` for historical retrieval.
- Report JSON and traces remain file-backed and linked from DB paths.
