---
title: Troubleshooting
description: Common AppraiseJS issues and fixes.
sidebar:
  order: 1
---

## Setup issues

- Migration errors: run `npm run migrate-db`.
- Browser dependency issues: run `npm run install-playwright`.
- Missing template entities or stale filesystem imports: open `Settings -> Sync` and run `Sync All`. If the UI is unavailable, run `npm run sync-all`.

## Execution issues

- Tests not selected: verify run mode (`By Tags` vs `By Test Cases`).
- Environment failures: verify base URL and service availability.
- Selector failures: verify locator values and target page state.
- Entities look outdated after editing files directly: review pending badges in `Settings -> Sync` and run the affected sync tile or `Sync All`.

## Report issues

- Empty report: inspect run logs and confirm cucumber output was generated.
- Inconsistent results: rerun with lower worker count to isolate race conditions.
