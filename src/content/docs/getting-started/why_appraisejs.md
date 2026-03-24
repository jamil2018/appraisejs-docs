---
title: Why AppraiseJS
description: Understand the collaboration and maintenance problems AppraiseJS is designed to solve.
sidebar:
  order: 4
---

AppraiseJS exists to remove the usual split between visual test authoring, execution infrastructure, and debugging output.

## Use this page when

You need the product rationale behind AppraiseJS before deciding whether to adopt it or roll your own framework stack.

## The problem it solves

- Traditional browser-test stacks force teams to stitch together authoring, execution, and reporting from different tools.
- Test knowledge often lives mostly in code, which slows collaboration with QA-heavy teams.
- Debug context gets fragmented across logs, CI output, and third-party dashboards.
- Teams spend time maintaining sync glue instead of improving test coverage.

## What AppraiseJS changes

- One local app for authoring, execution, reports, dashboard metrics, and sync recovery.
- A visual-first model built around reusable template steps, locator groups, suites, and cases.
- Generated artifacts stay inspectable and portable instead of becoming hidden platform state.
- Runs, reports, logs, traces, and metrics stay linked to the authored entities that produced them.

## What this means in practice

- New QA contributors can reach a first successful run faster.
- Developers still get generated artifacts and advanced internals when they need them.
- Mixed teams share one workflow instead of translating between separate test-management and runner tools.

## Read next

- [Comparison](/getting-started/comparison/)
- [Architecture Overview](/architecture/overview/)
