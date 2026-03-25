---
title: Synchronization Pipeline
description: How AppraiseJS keeps UI data and filesystem artifacts in sync.
sidebar:
  order: 3
---

AppraiseJS maintains bidirectional parity between database entities and test artifacts.

The primary operator surface for this flow is the [`Settings -> Sync`](/guides/settings) dashboard. It exposes pending-difference counts in the UI, while the same underlying sync tasks remain available through CLI scripts for maintenance and automation.

The locator creator is part of that model: live selector capture happens in the UI, but saved locators still flow back into synchronized filesystem artifacts.

## Synchronization modes

- The `Settings -> Sync` UI compares filesystem state with database state and lets users trigger reconciliation from one place.
- Entity sync scripts (`sync-modules`, `sync-test-suites`, etc.) remain available for scripted workflows and maintenance.
- Feature regeneration (`sync-features`) performs DB <-> feature-file bidirectional sync.
- Template step managers update step-definition files while preserving structure and JSDoc metadata.

## UI-driven sync orchestration

When a user starts a sync from the UI, Appraise can run prerequisite sync targets automatically before the requested target.

`Sync All` in the UI and `npm run sync-all` both follow the same dependency-aware order:

1. `sync-modules`
2. `sync-environments`
3. `sync-tags`
4. `sync-template-step-groups`
5. `sync-template-steps`
6. `sync-locator-groups`
7. `sync-locators`
8. `sync-test-suites`
9. `sync-test-cases`

Examples:

- Running `Sync Locators` triggers `sync-locator-groups` first.
- Running `Sync Test Cases` may trigger suite, template-step, and tag sync prerequisites first.

## Bidirectional feature sync

`performBidirectionalSync()` combines both directions in one pass:

1. Filesystem -> DB: scans `.feature` files and merges new suites/scenarios/steps/tags.
2. DB -> Filesystem: regenerates feature files from persisted suites/cases/steps.

`performDryRunSync()` previews intended changes without mutation.

## Feature generation behavior

- Feature files are generated under module hierarchy paths.
- Scenario title format is `Scenario: [Test Case Title] description`.
- Gherkin step keywords are normalized (`Given/When/Then/And`) from authored steps.
- Suite and case tags are emitted with deduplication logic.
- Generated files include warning headers to prevent manual drift.

## Why this architecture helps

- Supports visual-first authoring while keeping executable artifacts portable.
- Lets teams capture selectors from a live page without breaking source-controlled parity.
- Enables teams to reconcile DB and filesystem changes after merges from the UI or scripts.
- Reduces manual sync drift across locators, steps, suites, and features.
