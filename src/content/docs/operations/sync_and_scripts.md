---
title: Sync and Scripts
description: Operational scripts used by appraisejs-core.
sidebar:
  order: 2
---

## Core setup and sync scripts

- `npm run setup`: full initial bootstrap.
- `npm run sync-all`: synchronizes entities and generated artifacts.
- `npm run sync-features`: regenerate feature files.
- `npm run sync-features:dry-run`: preview feature regeneration.
- `npm run sync-template-steps`: resync template step definitions.

## Recommended operational sequence

1. Pull latest changes.
2. Run `npm run sync-all`.
3. Run a focused smoke test run.
4. Verify reports and dashboard health.
