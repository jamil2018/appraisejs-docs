---
title: Environments
description: Configure run targets and credentials.
sidebar:
  order: 2
---

Environments define where test runs execute.

## Create an environment

1. Go to `Environments -> Create`.
2. Fill `Name` and `Base URL`.
3. Optionally fill `API Base URL`, `Username`, and `Password`.
4. Save.

## Validation rules

- `Name`: required.
- `Base URL`: required and must be a valid URL.
- `API Base URL`: optional; if provided, must be a valid URL.

## Usage in test runs

- Each test run requires one selected environment.
- Environment-aware navigation and wait steps read this configuration at runtime.
- Environment data drives base URL resolution and target context for the run.

## Tips

- Use stable names like `Local`, `Staging`, `Prod-Snapshot`.
- Keep secrets local; avoid committing sensitive `.env` values.
