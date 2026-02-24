---
title: Synchronization Pipeline
description: How AppraiseJS keeps UI data and filesystem artifacts in sync.
sidebar:
  order: 3
---

AppraiseJS maintains bidirectional parity between database entities and test artifacts.

## Synchronization modes

- Entity sync scripts (`sync-modules`, `sync-test-suites`, etc.) align DB records with source-of-truth files.
- Feature regeneration (`sync-features`) performs DB <-> feature-file bidirectional sync.
- Template step managers update step-definition files while preserving structure and JSDoc metadata.

## `sync-all` orchestration

`npm run sync-all` executes scripts in dependency-aware order:

1. `sync-modules`
2. `sync-environments`
3. `sync-tags`
4. `sync-template-step-groups`
5. `sync-template-steps`
6. `sync-locator-groups`
7. `sync-locators`
8. `sync-test-suites`
9. `sync-test-cases`

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
- Enables teams to reconcile DB and filesystem changes after merges.
- Reduces manual sync drift across locators, steps, suites, and features.
