---
title: Overview
description: High-level system architecture and where each responsibility lives.
sidebar:
  order: 1
---

AppraiseJS is a local-first Next.js platform that combines visual test authoring, orchestration, execution, and reporting in one runtime.

## Architecture map

1. UI layer (`src/app`, `src/components`): authoring screens, the Settings sync dashboard, run dashboards, and report views.
2. Server layer (`src/actions`, `src/app/api`): input validation, persistence, sync and run orchestration, streaming APIs.
3. Core orchestration (`src/lib`, `scripts`): feature generation, sync logic, execution coordination, report parsing, and maintenance scripts.
4. Data layer (`prisma` + SQLite): authoritative model for authored entities, runs, reports, and metrics.
5. Runner layer (`src/tests`): Cucumber + Playwright execution, hooks, trace capture, step libraries.

The following diagram illustrates the architecture flow.

```nomnoml
#direction: right
#stroke: #64748b
#fill: #f8fafc
[UI Pages] -> [Server Actions / API Routes]
[Server Actions / API Routes] -> [Core Libs + Scripts]
[Core Libs + Scripts] -> [Prisma + SQLite]
[Core Libs + Scripts] -> [Cucumber + Playwright]
[Cucumber + Playwright] -> [Cucumber JSON + Traces]
[Cucumber JSON + Traces] -> [Core Libs + Scripts]
[Server Actions / API Routes] -> [UI Pages]
```

## How to read this section

- [Execution Lifecycle](/architecture/execution_lifecycle): request-to-result runtime flow.
- [Synchronization Pipeline](/architecture/synchronization_pipeline): DB <-> filesystem parity and artifact generation.
- [Data and Reporting Model](/architecture/data_model_and_reporting): run/report entities and matching logic.
- [Runtime Services and APIs](/architecture/runtime_services_and_apis): process manager, SSE logs, traces, and downloads.

## Key implementation anchors

- Test run execution: `src/lib/test-run/test-run-executor.ts`
- Process lifecycle and events: `src/lib/test-run/process-manager.ts`
- Report parsing and enum mapping: `src/lib/test-run/report-parser.ts`
- Bidirectional sync: `src/lib/bidirectional-sync.ts`
- Feature generation: `src/lib/feature-file-generator.ts`
- Run orchestration action: `src/actions/test-run/test-run-actions.ts`
