---
title: Sync and Scripts
description: Use the Sync dashboard first and keep scripts for advanced maintenance or automation.
sidebar:
  order: 2
---

This page is advanced on purpose. Beginners should start with [`Settings -> Sync`](/run-and-analyze/settings/) unless the UI is unavailable.

## Use this page when

- You need script-based maintenance.
- You are automating project reconciliation outside the UI.
- You need to understand the full dependency-aware sync order.

## UI-first sync flow

Open [`Settings -> Sync`](/run-and-analyze/settings/) to review pending differences and run synchronization directly from the app.

- Use per-target tiles to sync one area at a time.
- Use `Sync All` to run the full reconciliation flow.
- Review numeric badges to see how many differences Appraise detected for each target.
- Let Appraise run prerequisites automatically when one sync depends on another.
- Confirm completion from refreshed counts and success or failure messages.

```nomnoml
#direction: right
#stroke: #64748b
#fill: #f8fafc
[Filesystem or DB drift] -> [Settings -> Sync]
[Settings -> Sync] -> [Dependency-aware sync order]
[Dependency-aware sync order] -> [Updated entities and artifacts]
[Updated entities and artifacts] -> [Run tests again]
```

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
- Pulling published reusable template steps into an existing scaffold with `npx appraisejs@latest add step ...`

## Core scripts

- `npm run setup`: full initial bootstrap.
- `npm run sync-all`: synchronizes entities and generated artifacts without using the UI.
- `npm run sync-features`: regenerate feature files.
- `npm run sync-features:dry-run`: preview feature regeneration.
- `npm run sync-locator-groups`: reconcile locator group definitions and generated artifacts.
- `npm run sync-locators`: reconcile locator definitions and locator maps.
- `npm run sync-template-steps`: resync template step definitions.

## Related CLI workflow

Installing published steps is separate from the local `npm run ...` scripts:

```bash
npx appraisejs@latest add step <group-slug>/<step-slug>
```

Use that command when you want to merge a published step fragment into
`automation/steps` and then run the template-step sync flow automatically.

- Full guide: [Install Template Steps with CLI](/reference/operations/install-template-steps-with-cli/)

## Related pages

- [Settings](/run-and-analyze/settings/)
- [Install Template Steps with CLI](/reference/operations/install-template-steps-with-cli/)
- [Synchronization Pipeline](/reference/architecture/synchronization-pipeline/)
