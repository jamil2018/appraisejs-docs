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
2. Create environment `Local` with the login application's base URL.
3. Open `Locators -> Create` and launch the Chromium picker from that saved environment.
4. Capture locators for `emailInput`, `passwordInput`, `submitButton`, and `welcomeBanner`.
5. Accept Appraise's locator group suggestion for the login route, or create a new `Login Page` group if needed.
6. Create suite `Auth Smoke`.
7. Create case `Valid login shows welcome banner` and add it to the suite.
8. Add step: navigate to selected environment base URL.
9. Add step: fill email input.
10. Add step: fill password input.
11. Add step: click submit button.
12. Add step: assert welcome banner visibility `true`.
13. Save test case.

## Validate before running

- Ensure all mandatory parameters are filled.
- Confirm environment base URL is reachable.
