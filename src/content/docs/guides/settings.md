---
title: Settings
description: Manage sync operations and other app-level maintenance tasks.
sidebar:
  order: 14
---

The `Settings` page includes the Appraise sync dashboard.

The **Sync** page is available in `AppraiseJS 0.2` and later.

Open `Settings -> Sync` to review what is out of sync between the filesystem and the database, then run the required synchronization directly from the UI.

## What it does

Each sync tile represents one sync target:

- Modules
- Environments
- Tags
- Template Step Groups
- Template Steps
- Locator Groups
- Locators
- Test Suites
- Test Cases

Appraise compares the current filesystem state with the database state and shows a numeric badge on each tile. The badge is the number of detected differences for that sync target.

The `Sync All` tile shows the total number of pending differences across all targets.

> Screenshot placeholder: Settings page showing the Sync panel with `Sync All`, individual sync tiles, and pending-count badges.

## How it works

When you start a sync from the UI, Appraise runs the requested sync task from the app.

If that task depends on other sync targets, Appraise runs the prerequisites automatically in the correct order.

For example:

- `Sync Locators` runs `Sync Locator Groups` first.
- `Sync Test Cases` may run `Sync Test Suites`, `Sync Template Steps`, and `Sync Tags` first.

This removes the need to remember script order manually and makes sync safer after filesystem changes.

## What you see after sync

After a sync completes:

- Appraise refreshes the pending counts.
- A success message confirms what ran.
- If a sync fails, Appraise shows which sync target failed and the most relevant error message.

## When to use it

Use `Settings -> Sync` when:

- Files changed outside the Appraise UI.
- Database records look outdated.
- Locators, test suites, or test cases appear out of sync.
- You want one controlled place to run synchronization without using scripts manually.

## Related

- [Sync and Scripts](/operations/sync_and_scripts)
- [Synchronization Pipeline](/architecture/synchronization_pipeline)
