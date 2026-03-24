---
title: Template Test Cases
description: Create reusable flow blueprints when many cases share the same structure.
sidebar:
  order: 8
---

Template test cases let you design scenario blueprints once and instantiate test cases from them.

## Workflow context

```nomnoml
#direction: right
#stroke: #64748b
#fill: #f8fafc
[Template Step Group] -> [Template Step]
[Template Step] -> [Template Test Case]
[Template Test Case] -> [Generated Test Case]
```

Use template test cases when the flow stays stable but the scenario data varies.

## Do this

1. Go to `Template Test Cases -> Create`.
2. Enter title and description.
3. Build the flow in the visual editor.
4. Save.

## Generate from template

1. Go to `Test Cases -> Create From Template`.
2. Pick a template test case.
3. Provide scenario-specific values.
4. Generate and save.

## Minimal example

- Template: `Standard login flow`
- Generated cases: `Valid login`, `Invalid password`, `Locked account`

## What good looks like

- Repeated flows with only data variation.
- Team-wide standardization for common scenarios.

## Next step

- [Test Cases](/guides/test_cases/)
- [Template Steps](/guides/template_steps/)
