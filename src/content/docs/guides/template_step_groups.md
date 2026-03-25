---
title: Template Step Groups
description: Categorize template steps by action/validation type.
sidebar:
  order: 6
---

Template step groups organize reusable steps for faster authoring.

## Create a template step group

1. Go to `Template Step Groups -> Create`.
2. Enter `Name` (min 3 chars).
3. Add optional description.
4. Select `Type` (`ACTION` or `VALIDATION`).
5. Save.

## Usage

- Every template step must belong to exactly one template step group.
- Group type (`ACTION` or `VALIDATION`) should match the behavior of contained steps.

## Recommended model

- Action groups: `navigation`, `input`, `click`, `store`, `wait`.
- Validation groups: `text assertion`, `visibility assertion`, `navigation assertion`.
