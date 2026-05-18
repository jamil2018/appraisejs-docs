# AppraiseJS Landing Page Redesign Plan

## Summary
Redesign the current Starlight splash homepage at `src/content/docs/index.mdx` into a dark, operational developer interface aligned with the supplied plan: precise typography, 4px radii, dense technical visuals, deterministic copy, and Motion.dev-driven execution animations. Use Astro components, CSS, Lucide, Geist fonts, and the existing `motion` dependency. Do not add React Flow or React.

## Key Changes
- Rework the landing page component flow to:
  - Hero with headline `Visual Workflows. Deterministic Automation.`
  - Workflow visualization: Create -> Configure -> Execute -> Generated Output
  - Feature grid: Flow Builder 2.0, Locator Creator, Dynamic Integrator, Portable Output, Local-First, Structured Engine
  - Dedicated Locator Creator showcase
  - Dynamic Step Integrator showcase
  - “Built Around Real Automation” code-mapping section
  - Documentation preview
  - Open source/GitHub section
  - Minimal utility footer
- Replace the current blue/green rounded SaaS style in `src/styles/landing.css` with the plan palette:
  - `#0e0e0e`, `#131313`, `#1b1b1b`, `#393939`, `#ffffff`
  - semantic states `#22c55e`, `#ef4444`, `#3b82f6`
  - global landing radius `4px`
  - shell widths for standard `1400px` and showcase `1600px`
- Keep the implementation within existing Astro architecture:
  - Update `Hero.astro`, `HowItWorksSection.astro`, `ToolingSection.astro`, `GitSection.astro`, `LandingNavbar.astro`, and `LandingFooterSection.astro` where useful.
  - Add small new Astro components only if they reduce duplication, such as reusable terminal/code panels or workflow cards.
  - Keep all landing-specific styling in `src/styles/landing.css`.

## Motion And Interaction
- Use Motion.dev in existing Astro component scripts for:
  - hero workflow traversal
  - terminal/log streaming
  - staggered panel reveals
  - active node/path state changes
- Respect `prefers-reduced-motion` by rendering final/static states.
- Avoid decorative parallax, blobs, glassmorphism, and fake “hacker” effects.
- On mobile, convert complex workflow layouts into stacked panels or horizontally scrollable technical canvases with visible affordances.

## Interface And Content Details
- Update nav CTAs to match the plan:
  - `Get Started`
  - `Explore Docs`
  - `Watch Demo`
  - `GitHub`
- Use concise technical copy centered on:
  - portable workflows
  - local execution
  - real Playwright/Cucumber artifacts
  - no vendor lock-in
  - no black boxes
- Use Lucide icons only where they clarify functional concepts.
- Use Geist Sans and Geist Mono already present in dependencies and project CSS.
- Keep accessibility intact:
  - semantic sections and heading order
  - real links/buttons
  - keyboard-safe mobile nav
  - `aria-hidden` only for decorative visuals
  - readable contrast on all text and controls

## Test Plan
- Run `npm run build` as the required validation gate.
- Start `npm run dev` and verify the homepage at the local Astro URL.
- Check desktop and mobile breakpoints:
  - wide desktop around 1600px
  - standard desktop around 1400px
  - tablet below 1024px
  - mobile around 390px
- Verify:
  - no horizontal body overflow except intentional showcase scrollers
  - landing visuals render without overlapping text
  - Motion.dev animations initialize after Astro navigation
  - reduced-motion mode shows stable final states
  - CTA links resolve correctly
  - media/fonts/icons load without console errors

## Assumptions
- The redesigned landing page is the current docs homepage implemented in `src/content/docs/index.mdx`.
- Motion.dev is the approved animation layer; React Flow will not be added for this pass.
- Existing dependencies are sufficient: `motion`, `@lucide/astro`, `@fontsource/geist-sans`, and `@fontsource/geist-mono`.
- No new screenshots, videos, or generated bitmap assets are required unless later requested.
