# Landing Page Improvement Plan

## Summary
Make the AppraiseJS landing page more tool-first, proof-heavy, and conversion-oriented for skeptical QA engineers, SDETs, automation engineers, technical leads, and engineering managers. Replace the current live hero video with a new hero animation built from GPT Images 2.0-generated visual frames/assets for better fidelity and clearer first-impression storytelling.

## Key Changes

- Rework the hero around the concrete product outcome:
  - New headline direction: “Build browser tests visually. Commit real Playwright/Cucumber code.”
  - Subhead should say AppraiseJS turns visual flows, locators, and assertions into repo-owned files that run locally and in CI.
  - Move “Bridge QA and Engineering” out of the hero headline; reuse it later only as a team benefit.

- Replace the hero video with a GPT Images 2.0-backed animation:
  - Use GPT Images 2.0 to generate high-fidelity app-like visual frames/assets for the new hero animation.
  - The animation should resemble the actual AppraiseJS product experience, not a generic AI SaaS dashboard.
  - Generate a small sequence of coherent frames or layered bitmap assets that show:
    - visual flow authoring with nodes such as `Navigate`, `Fill email`, `Fill password`, `Click login`, `Assert dashboard`
    - locator/assertion context being attached
    - generated output files such as `login.feature`, `login.steps.ts`, `locators.json`
    - a local run/report state
  - Implement the animation in the page using HTML/CSS/JS around those generated visual assets.
  - Keep critical labels, filenames, and CTA-adjacent text as real HTML where practical for readability, accessibility, and responsiveness.
  - Optimize generated assets and place them under the existing landing media path, preferably `public/landing/media/hero/`.

- Make the hero animation conversion-focused:
  - It should communicate “visual workflow -> generated Playwright/Cucumber artifacts” within 3-5 seconds.
  - It should be readable in the first viewport without requiring interaction.
  - It should loop smoothly and not feel like a decorative product mockup.
  - It should be lighter, clearer, and more inspectable than the current live capture video.
  - Keep the current live video only as an optional lower-page “View demo” proof asset or nav target.

- Make the first viewport proof-driven:
  - Keep the install command visible.
  - Add a clearer CTA label such as “Generate your first test locally.”
  - Make “Inspect generated output” the main secondary action.
  - Add a short caption near the animation: “Visual flow -> generated Playwright/Cucumber files.”

- Move technical proof earlier:
  - Bring the generated-output content closer to the top.
  - Show a compact artifact chain immediately after the hero:
    `Visual flow -> .feature -> .steps.ts -> locators.json -> report.json`
  - Include a generated project/file artifact preview near the first CTA.

- Reduce repetition:
  - Keep one strong “15-minute evaluation” section.
  - Keep one strong “generated output” section.
  - Keep one concise “engineering loop” section.
  - Shrink or remove the large workflow proof section if the new hero animation already communicates the workflow.

- Strengthen developer trust and positioning:
  - Surface “Open source core,” “local-first,” “no hosted runner,” and “no generated-code black box” earlier.
  - Add a “What engineers can inspect” checklist near generated output.
  - Move the comparison/tradeoffs section higher and tighten why AppraiseJS exists instead of Playwright alone, Cypress/recorders, TestRail, plain Gherkin, or custom frameworks.

## Implementation Notes

- Primary page composition remains in `src/content/docs/index.mdx`.
- Update `src/components/Hero.astro` to remove the live video hero treatment and render the new GPT Images 2.0-backed animation.
- Extract the hero animation into a dedicated component if the markup or frame/layer orchestration becomes large.
- Store generated hero animation assets under `public/landing/media/hero/` with lowercase kebab-case filenames.
- Preserve the existing dark technical aesthetic, typography, sticky nav, install-copy behavior, and responsive structure.
- Do not introduce new runtime dependencies unless absolutely necessary; prefer CSS keyframes and lightweight HTML structure.
- Do not use generic fake dashboard imagery. The generated frames/assets must reflect AppraiseJS concepts and the real product’s visual language.

## Test Plan

- Run `npm run build`.
- Preview the landing page locally.
- Check desktop first viewport for:
  - product purpose understandable in under 5 seconds
  - GPT Images 2.0-backed animation readable and believable
  - install command visible
  - generated-output path visible or clearly linked
  - CTA labels clear
- Check mobile on real device or trusted viewport for:
  - headline readability
  - animation legibility
  - asset scaling/cropping
  - CTA accessibility
  - generated-output section remains scannable
- Click-check install copy, mobile sticky CTA copy, quick-start links, generated-output anchor, GitHub link, and optional live demo link if retained.

## Assumptions

- Scope is the landing page only, not documentation pages.
- Mobile scroll behavior is already validated on real devices and should not drive this change.
- The current live hero video is accurate but not clear enough for the hero.
- GPT Images 2.0 should be used specifically for the new hero animation assets that replace the video, not merely for miscellaneous supporting imagery.
- Core product explanation should still rely on accessible page text and real artifact names, even when the animation uses generated visual frames.
