---
title: Creating Tests
description: End-to-end walkthrough for creating maintainable test assets.
sidebar:
  order: 1
---

This tutorial builds a first-class scenario using the same model as `appraisejs-core`.

## Goal

- Create a login smoke scenario that can be reused in future runs.

## Steps

1. Create module `Authentication`.
2. Create locator group `Login Page` linked to the module.
3. Add locators (`emailInput`, `passwordInput`, `submitButton`, `welcomeBanner`).
4. Create suite `Auth Smoke`.
5. Create case `Valid login shows welcome banner` and add it to the suite.
6. Add step: navigate to selected environment base URL.
7. Add step: fill email input.
8. Add step: fill password input.
9. Add step: click submit button.
10. Add step: assert welcome banner visibility `true`.
11. Save test case.

## Validate before running

- Ensure all mandatory parameters are filled.
- Confirm environment base URL is reachable.
