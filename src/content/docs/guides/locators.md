---
title: Locators
description: Capture reusable selectors from a live page or create them manually.
sidebar:
  order: 5
---

The locator creator is available in `AppraiseJS 0.2` and later.

Locators are named selector definitions referenced by test steps. In AppraiseJS, they can be created manually or captured from a live page with the built-in Chromium picker.

## Locator creator flow

Open `Locators -> Create` to access the two-part creation flow:

- `Launch Chromium Picker`
- `Finalize Locator`

> Screenshot placeholder: Create Locator page showing the `Launch Chromium Picker` and `Finalize Locator` sections.

The picker launches a local Chromium session and injects an Appraise picker panel into the page, so selectors can be captured without a browser extension.

## Launch Chromium

You can launch the picker in two ways:

- From a saved environment
- From a direct URL

This supports both known application environments and one-off pages that need to be inspected directly.

When launch starts, Appraise opens a local companion process and starts Chromium with the picker overlay enabled inside the page.

## Pick an element

Inside Chromium, use the floating Appraise picker panel:

1. Click `Start picking`.
2. Hover over the target element.
3. Click the element once.
4. Review the proposed selector.
5. Click `Use selector`.

After confirmation, the selected locator is sent back to the Appraise UI automatically.

> Screenshot placeholder: In-browser Appraise Locator Picker overlay showing `Start picking`, selector preview, and `Use selector`.

## What Appraise captures

When a locator is picked, Appraise captures:

- The selector
- The current URL
- The current pathname
- The page title
- The element tag name
- Accessible or visible text when available
- The selector strategy used

This metadata is used to prefill the locator form and reduce manual entry.

## Autofill and suggestions

After the picker returns a result, Appraise can suggest:

- A locator name based on accessible text or visible text
- The selector value
- An existing locator group based on the current route
- A new locator group name if no route match exists
- A module suggestion for a new locator group

If the current route already matches an existing locator group, Appraise suggests attaching the locator there.

If no matching group exists, Appraise can suggest creating a new group using the current route and a best-fit module.

## Finalize and save

Before saving, you can still edit all fields manually, including:

- Locator name
- Selector
- Existing group selection
- New group name
- Route
- Module

When the locator is saved, Appraise:

- Adds it to an existing locator group or creates a new group
- Synchronizes related locator group files
- Updates the locator map so the automation workspace stays aligned with the UI

## Sync behavior

- Saving from the locator creator is both a capture workflow and a synchronization workflow.
- For broader filesystem or database drift, use [`Settings -> Sync`](/guides/settings) to review pending locator-related differences and run sync from the UI.
- The core repo still includes locator sync scripts for repository-wide reconciliation and automation.
- `npm run sync-locators`
- `npm run sync-locator-groups`
- Locator mappings are maintained in `src/tests` artifacts and consumed during execution.

> Video placeholder: End-to-end flow showing Chromium launch, element selection, autofill, and saving a new locator.

## When to use it

- You need to capture a selector from a live page.
- You want Appraise to suggest a locator name and group automatically.
- You want to create a locator without editing files manually.
- You want the saved locator to sync back into the automation workspace without running separate sync commands.

## Good practices

- Prefer stable `data-testid` selectors.
- Keep naming human-readable (`loginSubmitButton`).
- Use the picker for discovery, then adjust the final selector if the proposed value is too brittle.
- Do not duplicate the same selector across many locator names.
