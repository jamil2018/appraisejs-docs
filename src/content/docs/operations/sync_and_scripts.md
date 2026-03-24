---
title: Sync and Scripts
description: Use the Sync dashboard for day-to-day reconciliation and scripts for maintenance workflows.
sidebar:
  order: 2
---

The primary sync workflow is now available in the Appraise UI.

Open [`Settings -> Sync`](/guides/settings) to review pending differences and run synchronization directly from the app.

## Sync from the UI

The `Sync` dashboard is the fastest way to reconcile filesystem and database drift.

- Use per-target tiles to sync one area at a time.
- Use `Sync All` to run the full reconciliation flow.
- Review numeric badges to see how many differences Appraise detected for each target.
- Let Appraise run prerequisites automatically when one sync depends on another.
- Confirm completion from refreshed counts and success or failure messages.

## Dependency-aware sync order

Whether you trigger sync from the UI or by running `npm run sync-all`, Appraise follows a dependency-aware order:

1. `Modules`
2. `Environments`
3. `Tags`
4. `Template Step Groups`
5. `Template Steps`
6. `Locator Groups`
7. `Locators`
8. `Test Suites`
9. `Test Cases`

## When scripts are still useful

The CLI scripts still matter for repository maintenance and automation:

- Initial bootstrap with `npm run setup`
- CI or scripted local maintenance
- Focused repair or debugging of one sync area
- Feature regeneration preview with `npm run sync-features:dry-run`

## Core setup and maintenance scripts

- `npm run setup`: full initial bootstrap.
- `npm run sync-all`: synchronizes entities and generated artifacts without using the UI.
- `npm run sync-features`: regenerate feature files.
- `npm run sync-features:dry-run`: preview feature regeneration.
- `npm run sync-locator-groups`: reconcile locator group definitions and generated artifacts.
- `npm run sync-locators`: reconcile locator definitions and locator maps.
- `npm run sync-template-steps`: resync template step definitions.

## Locator creator and synchronization

Saving a locator from the UI is not just a form submission.

- Appraise adds the locator to an existing locator group or creates a new group when needed.
- Related locator group files are synchronized as part of that save flow.
- The locator map is updated so the automation workspace stays aligned with what was authored in the UI.

## Recommended operational sequence

1. Pull latest changes.
2. Open `Settings -> Sync` and run `Sync All` when the filesystem or database changed outside the UI.
3. Run a focused smoke test run.
4. Verify reports and dashboard health.
5. Use CLI sync scripts only when you need automation, dry runs, or deeper maintenance.
