# Landing Page Trust & Conversion Repair Plan

## Summary
Rework the AppraiseJS landing page from “visually impressive explanation” into a proof-led engineering page. Keep the dark technical visual identity, but reduce repeated claims, move hard evidence earlier, make CTAs outcome-specific, and give skeptical QA/SDET/engineering leads enough technical confidence to try the local scaffold.

## Key Changes

### Hero: Make The Promise Concrete In The First 5 Seconds
- Keep the core headline direction, but tighten it to: **“Build browser tests visually. Review real Playwright in git.”**
- Rewrite the subcopy to name the user, output, and evaluation path:
  - “AppraiseJS lets QA and SDET teams model browser flows visually, then generates Playwright/Cucumber artifacts engineers can review, run locally, and commit to CI.”
- Replace generic CTA hierarchy with outcome-based CTAs:
  - Primary: **“Generate a local Playwright flow”**
  - Secondary: **“Inspect generated files”**
  - Tertiary: **“View GitHub”**
- Keep the install command, but change the note to set expectation:
  - “Creates a local sample project. No signup. Review the generated `.feature`, step code, locators, and report before adopting anything.”
- Add a compact “15-minute result” proof row directly under the command:
  - `.feature`
  - `*.step.ts`
  - `locators.json`
  - `report.json`
- Mobile: reduce hero vertical height by tightening type scale, CTA spacing, and proof row density so generated-output proof appears sooner.

### Generated Output: Turn This Into The Main Trust Section
- Rename heading from **“Draw the flow. Commit the Playwright.”** to **“What the visual flow actually generates.”**
- Make the artifact preview stronger:
  - Show a small file-tree style preview: `login.feature`, `auth.step.ts`, `auth.locators.json`, `report.json`.
  - Include one concrete snippet each for Gherkin and Playwright step code, not only Gherkin.
  - Label generated output as “reviewable repo files,” not “artifact preview.”
- Add a proof CTA after this section:
  - **“Run the quick start and inspect these files”**
- Reduce repeated positioning cards unless each adds new evidence. Keep three proof cards, but rewrite them as:
  - “QA authors model flows”
  - “Engineers review generated code”
  - “CI runs normal automation”

### Feature And Workflow Sections: Compress The Theatre
- Change **“What is in AppraiseJS?”** to **“Where AppraiseJS fits in your test workflow.”**
- Keep only feature cards that answer adoption questions:
  - Visual flow builder
  - Locator creator
  - Reusable helper steps
  - Generated repo output
  - Local execution
- Merge or shorten the separate execution-model section so it does not repeat the feature carousel.
- For desktop, keep one animated workflow section, but make every step include a concrete artifact or action:
  - Create flow → flow definition
  - Add locators/assertions → locator map
  - Generate code → `.feature` + step definitions
  - Run locally → report/logs
- For mobile, avoid long stacked demo fatigue:
  - Convert animated panels into compact proof cards with one screenshot/mini-demo per card.
  - Do not require users to scroll through multiple tall animations before reaching trust and CTA sections.

### Trust And Positioning: Add Skeptic-Facing Proof
- Move “What engineers keep” earlier, immediately after generated output or integrate it into that section.
- Add a new compact “Why not just Playwright?” comparison block:
  - Playwright: great execution engine; AppraiseJS adds visual authoring and generated reviewable artifacts.
  - Cypress/recorders: AppraiseJS avoids trapped scripts by keeping repo-owned files.
  - TestRail/Gherkin: AppraiseJS connects authoring, locators, generated steps, execution evidence.
- Add a “Built for existing engineering loops” proof strip:
  - Local project
  - Git-reviewed files
  - CI-compatible runs
  - Open source core
- Add one visible GitHub trust signal near the first CTA area:
  - Link to repository
  - License label if available from repo/docs
  - “Review source before installing”
- Add a short “Known boundaries” note to increase trust:
  - Example: “Best for browser workflow automation teams already using or evaluating Playwright. Not a hosted test-management replacement.”

### Conversion: Make The Trial Path Low-Risk
- Replace repeated **“Try locally in 15 minutes”** with more specific action labels:
  - Hero: **“Generate a local Playwright flow”**
  - Proof section: **“Inspect generated files”**
  - Final CTA: **“Run the quick start locally”**
- Add one mid-page CTA after generated-output proof and one final CTA after trust/comparison.
- On mobile, add a compact sticky bottom CTA after the hero scroll point:
  - Text: **“Run quick start”**
  - Secondary icon/link: GitHub
- Ensure every CTA tells the visitor what happens next: local scaffold, no signup, generated files to inspect.

## Implementation Notes
- Primary implementation stays in the existing Astro/Starlight landing structure.
- Preserve the current visual system, font stack, dark grid background, and green technical accent.
- Do not introduce React or a new animation framework.
- Reuse existing component boundaries where possible:
  - Hero messaging and CTA changes in the hero component.
  - Generated artifact proof in the generated-output section.
  - Feature/workflow compression in the existing feature/workflow section.
  - Trust, comparison, and final CTA in the current trust/footer area.
- Keep copy direct, technical, and skeptical-engineer friendly. Avoid generic startup phrases like “revolutionize,” “seamless,” “powerful,” or “AI-powered” unless backed by a concrete workflow.

## Test Plan
- Run `npm run build` as the required validation gate.
- Verify desktop at approximately `1440x1000`:
  - Hero explains product in one glance.
  - Generated-output proof appears immediately after hero.
  - CTAs are visible and outcome-specific.
  - No repeated sections that say the same thing with different visuals.
- Verify mobile at `390x844` using real viewport emulation:
  - No horizontal overflow: `document.documentElement.scrollWidth === document.documentElement.clientWidth`.
  - Hero does not consume excessive scroll before proof.
  - CTAs fit cleanly and remain easy to tap.
  - Feature/workflow content is compressed enough to avoid scroll fatigue.
- Manually check links:
  - Quick start CTA.
  - Generated output anchor.
  - GitHub link.
  - Any new comparison/proof links.
- Check visual polish:
  - No text clipping.
  - No overlapping sticky nav/content.
  - No oversized card stacks on mobile.
  - Reduced-motion behavior remains acceptable.

## Assumptions
- The goal is to improve adoption and trust without a full visual redesign.
- The current Astro-first implementation remains the stack choice.
- The page should sell AppraiseJS as a serious engineering tool, not as a generic visual builder.
- The most important conversion path is local evaluation, not signup or hosted onboarding.
- If exact GitHub stats/license maturity signals are unavailable or unstable, link to the repo and use durable proof instead of hardcoded metrics.
