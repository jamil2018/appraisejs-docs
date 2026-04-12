---
title: Overview
description: Read the AppraiseJS system in product language after onboarding, then follow links into the advanced internals.
sidebar:
  order: 1
---

Read this page after the onboarding spine if you want the system story without dropping straight into implementation details.

AppraiseJS is a local-first platform that keeps four concerns connected: modeling test intent, generating executable artifacts, running tests, and inspecting results.

## Simplified architecture map

1. Product model: modules, suites, cases, locators, template steps, environments, and tags.
2. Sync and generation: AppraiseJS turns the authored model into runnable artifacts and keeps files and database state aligned.
3. Execution: test runs choose scope, environment, browser, and worker settings.
4. Results: reports, logs, traces, and metrics feed the debugging and operational workflow.

```nomnoml
#direction: right
#stroke: #64748b
#fill: #f8fafc
[Authored assets] -> [Sync and generated artifacts]
[Sync and generated artifacts] -> [Test runs]
[Test runs] -> [Reports, logs, traces]
[Reports, logs, traces] -> [Author updates]
```

## Read next

- [Execution Lifecycle](/reference/architecture/execution-lifecycle/) for request-to-result runtime flow.
- [Synchronization Pipeline](/reference/architecture/synchronization-pipeline/) for DB and filesystem parity.
- [Data and Reporting Model](/reference/architecture/data-model-and-reporting/) for report persistence and metrics.
- [Runtime Services and APIs](/reference/architecture/runtime-services-and-apis/) for process management, streaming, and artifacts.

## Advanced note

If you are still working through the first-run path, stop here and return to [Overview](/getting-started/overview/), [Installation](/getting-started/installation/), or [Quick Start](/getting-started/quick-start/). The linked pages below this point are intentionally deep-dive material.
