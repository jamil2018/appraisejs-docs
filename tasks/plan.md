# Implementation Plan: AppraiseJS Narrative Landing Page

## Overview

Rebuild the AppraiseJS documentation landing page around one representative feature story. The visitor begins with a product idea, watches a coding agent turn it into an AppraiseJS plan, changes one decision, approves its proof, follows implementation, and finishes with evidence that the original intent was delivered.

The page positions AppraiseJS as an agentic quality operating system without leading with category language. Visitors first experience alignment between human intent, agent planning, executable validation, implementation, and evidence. The broader platform is revealed only after that story resolves.

This plan replaces the earlier dashboard-heavy and proof-lens direction. The implementation should be restrained, relationship-driven, and understandable one viewport at a time.

## Approved Product Narrative

```text
Human intent
→ Agent understanding
→ Approved plan
→ Approved proof
→ Implementation
→ Evidence
```

The landing page uses three distinct terms consistently:

- **Story:** the emotional, public-facing journey from idea to evidence.
- **Plan:** the real AppraiseJS artifact authored by the agent and approved by the user.
- **Proof:** the user-facing expression of validations that define and verify success.

AppraiseJS remains responsible for durable state, project binding, visualization, lifecycle gates, review, validation integrity, baseline and implementation evidence, recovery guidance, and completion decisions. Agents author plans, validations, and code. AppraiseJS must not be described as autonomously inventing the work.

## Source Of Truth

Before finalizing claims and UI states, verify them against the current AppraiseJS repository:

- `docs/agent-lifecycle-flow.md`
- `docs/coordinator-api-mcp.md`
- `docs/agent-mcp-setup.md`
- `codex/development plan/appraise-0.5/product direction/plan-builder-feature-implementation-roadmap.md`
- `docs/generated/coordinator-operation-reference.md`

Experimental provider-native features must not appear as general-release capabilities. Avoid volatile numeric claims unless they are verified during the same release.

## Design Direction

### Design read

A narrative developer-tool landing page for users who already work with coding agents. It should feel like following an idea as it gains structure, agreement, proof, and evidence. The visual language is editorial, precise, quiet, and confident.

### Design dials

- `DESIGN_VARIANCE: 7` - asymmetric storytelling with disciplined alignment.
- `MOTION_INTENSITY: 6` - motivated transitions that communicate ownership and causality.
- `VISUAL_DENSITY: 3` - one idea and one dominant artifact per viewport.

### Core visual rules

- Use Astro, native CSS, the existing Tailwind v4 integration, Geist Sans, and Geist Mono.
- Preserve the AppraiseJS logo and emerald identity.
- Use a coherent dark foundation with system-aware light-mode equivalents.
- Let color evolve subtly within one theme: emerald for planning, amber for human feedback, cool cyan for validation, and emerald for verified completion.
- Use one small-radius geometry system. Avoid pill-heavy UI.
- Use negative space as a primary design element.
- Keep each story section to one headline, one supporting sentence, and one dominant visual relationship.
- Prefer abstracted relationships and transformations over screenshots of complete application windows.
- Keep real AppraiseJS terminology where an actual product artifact or action is shown.
- Do not use equal feature-card grids, metric dashboards, fake terminals, generic AI gradients, stock imagery, decorative status dots, or dense software chrome.

### Responsive model

- Desktop may use asymmetric split compositions and scroll-linked handoffs.
- Mobile becomes a strict chronological stack with no horizontal panning or pinned split-screen dependence.
- Every section remains understandable without motion.
- No viewport uses `h-screen`; use stable `min-height` based on `100dvh` where appropriate.

## Final Page Structure

## Section 1: One-Time Timed Hero

The hero contains tension and resolution as one narrative beat.

### Opening state

> **What if your plans could talk to you?**

> **And your agent had to promise it would build exactly what you had in mind.**

No CTA or product interface appears in the opening state. A single line begins forming beneath the copy.

### Transition

The word “promise” or the line beneath it remains visually anchored while the surrounding copy transforms. Do not fade the entire screen to blank.

### Resolved state

> **Turn that promise into an agreement.**

> See the plan. Shape every decision. Agree on what success means before your agent begins building.

Actions:

- **Try AppraiseJS**
- **View on GitHub**

A small plan fragment appears near the edge of the viewport:

```text
Google Meeting Reminders
→ Reminder Timing
→ Notification Delivery
```

### Hero behavior

- Play once per page load or session and settle permanently into the resolved state.
- Complete in approximately 4-6 seconds.
- Never block scrolling, navigation, or CTA interaction.
- Render the resolved state when JavaScript is unavailable.
- Under `prefers-reduced-motion`, render the resolved state immediately or use one brief crossfade.
- Keep a stable hero box throughout to prevent layout shift.
- Expose one stable accessible heading and description rather than announcing each visual phase.
- Do not replay merely because the visitor scrolls back to the top.

## Section 2: Start With Intent

> **It starts with a conversation.**

> Describe the outcome. Ask your coding agent to plan it with AppraiseJS.

Show an original, product-neutral coding-agent conversation with exactly two messages:

**You**

> Build reminders for my Google meetings. Use AppraiseJS before implementation.

**Agent**

> I’ll create a plan for your review before writing any code.

The agent response becomes the visual handoff into the next section. Do not reproduce Codex branding or proprietary interface chrome.

## Section 3: See And Shape The Plan

> **Your idea becomes something you can shape.**

> Review the decisions before your agent begins writing code.

Show four connected decisions with substantial space around them:

```text
Connect Calendar
→ Reminder Timing
→ Notification Delivery
→ Changed Meetings
```

The user selects **Reminder Timing**.

Before:

```text
Reminder Timing
15 minutes
```

Feedback:

> Let users choose any reminder between 5 minutes and 24 hours.

After:

```text
Reminder Timing
5 minutes to 24 hours
```

The selected decision transforms while the other decisions remain stable. The agent quietly replies, “Updated.” End with the real action label **Approve plan**.

## Section 4: Agree On Proof

> **Decide what “done” means before the build begins.**

> Every approved decision deserves proof.

This is the largest and most important section after the hero.

Show AppraiseJS asking the agent to create validations for the approved requirements, then focus on one relationship:

**Approved decision**

> Users can choose any reminder between 5 minutes and 24 hours.

**Proposed validation**

> **Given** a meeting begins in 30 minutes  
> **When** the user selects a 15-minute reminder  
> **Then** the reminder arrives 15 minutes before the meeting

A single line connects the decision and validation. The user may choose:

- **Approve validations**
- **Request changes**

Avoid showing the full validation suite, coverage percentages, runtime matrix, locator catalog, or internal hashes in this narrative section. Those details belong in documentation or the later product explorer.

## Section 5: Build Without Losing The Promise

> **Now your agent can build.**

> The approved plan guides the work. The approved validations keep it honest.

Present implementation as one stage in the lifecycle rather than a task board:

```text
Approved plan
→ Agent implementation
→ Validation running
→ Evidence collected
```

Show only a few quiet details:

- Calendar connected
- Reminder preferences implemented
- Notification delivery in progress
- 15-minute reminder validation passing

Agent update:

> Notification delivery is implemented. Verifying behavior when meetings are rescheduled.

The approved plan remains softly visible behind or beside the activity so implementation never appears disconnected from intent.

## Section 6: Follow The Whole Story

> **Did your agent build what you imagined?**

> Return to the original idea and see the evidence behind every decision.

Fold the journey together:

```text
Original idea
→ Approved plan
→ Approved validations
→ Implementation
→ Evidence
```

Resolve it into one completion artifact:

### Google Meeting Reminders

**Verified complete**

> Every approved decision has passing evidence.

Use one quiet action: **View the story**.

Avoid confetti, percentages, charts, or exaggerated success effects.

## Section 7: Reveal The Quality Operating System

Begin with the philosophy before showing the wider product:

> **Every feature has a story.**

> Every story has decisions. Every decision needs proof. Every proof leaves evidence. That’s how software should be built.

Then introduce one large changing visual with a compact selector. Only one capability is expanded at a time:

- **Plan:** Understand tasks, dependencies, feedback, revisions, and approvals.
- **Prove:** Turn approved decisions into executable validations.
- **Build:** Keep implementation aligned with approved intent.
- **Recover:** Guide agents safely when plans, environments, or evidence fail.
- **Verify:** Connect the original idea to final completion evidence.

The visual may expose deeper AppraiseJS product detail, but it must not become a feature wall. Each capability receives one short statement and one focused visual state.

## Section 8: Closing CTA And Footer

> **Give your next idea a story worth following.**

> Start with intent. Shape every decision. Agree on proof. Let your agent build. Finish with evidence.

Actions:

- **Try AppraiseJS**
- **Read the docs**

Footer links:

- Documentation
- GitHub
- Architecture
- Installation

## Implementation Architecture

### Component boundaries

Proposed component structure:

```text
src/content/docs/index.mdx
src/components/landing/
  NarrativeNavbar.astro
  TimedHero.astro
  AgentIntentSection.astro
  ShapePlanSection.astro
  AgreeOnProofSection.astro
  BuildWithPromiseSection.astro
  VerifiedStorySection.astro
  QualityOsExplorer.astro
  NarrativeClosingCta.astro
  NarrativeFooter.astro
src/styles/
  landing.css
```

Interactive behavior should stay in small Astro script islands:

- The timed hero state machine
- The before/after plan-decision transformation
- Validation approval/request-change demonstration
- The Quality OS capability selector

Static HTML should contain the final meaningful state for progressive enhancement and search indexing.

### Content model

Keep the complete Google Meeting Reminders sample story in one typed data module or component-level constant so names, requirements, feedback, validations, and evidence cannot drift between sections.

### Motion model

Every animation must communicate one of:

- Ownership moving from user to agent to AppraiseJS
- Prose becoming a durable plan
- A reviewed decision changing
- A decision gaining proof
- Implementation producing evidence
- The full story resolving into verified completion

Animate transform and opacity only. Use CSS animations, the existing Motion dependency, or IntersectionObserver as appropriate. Do not use scroll listeners that update React or Astro state every frame.

### Asset strategy

- Build the central story visuals as real HTML and CSS so they remain responsive, accessible, and easy to revise.
- Use the generated mockups only as composition references, not production screenshots.
- Use optimized real AppraiseJS captures only inside the final Quality OS explorer when exact product fidelity matters.
- Store any production media under `public/landing/media/quality-os/` with explicit dimensions.

## Implementation Tasks

## Task 1: Lock Claims, Copy, And Story Data

**Description:** Verify all public claims against AppraiseJS 0.5, finalize the visible copy above, and create one canonical Google Meeting Reminders story model.

**Acceptance criteria:**

- [ ] Every capability claim is shipped and source-backed.
- [ ] Experimental provider-native work is excluded or explicitly labeled.
- [ ] The same prompt, plan decisions, feedback, validation, implementation state, and completion evidence are used throughout.
- [ ] Product terms remain consistent: story, plan, decision, validation, and evidence.

**Verification:**

- [ ] Review against current lifecycle, MCP, and roadmap documentation.
- [ ] Product-owner approval of all visible landing-page copy.

**Dependencies:** None

**Files likely touched:**

- `tasks/content-map.md`
- `src/components/landing/story-data.ts`

**Estimated scope:** Small

## Task 2: Establish Tokens, Layout, And Static Page Skeleton

**Description:** Create the shared visual tokens, responsive section shell, navigation, section ordering, and static final states without animation.

**Acceptance criteria:**

- [ ] All eight sections render in their final content order.
- [ ] Each section has one dominant visual and intentional negative space.
- [ ] Light and dark tokens meet WCAG AA contrast.
- [ ] Mobile layouts use a clear chronological stack with no horizontal overflow.

**Verification:**

- [ ] Review at 320, 390, 768, 1024, 1440, and 1600 pixels.
- [ ] Disable JavaScript and confirm the complete story remains understandable.
- [ ] `npm run build`

**Dependencies:** Task 1

**Files likely touched:**

- `src/content/docs/index.mdx`
- `src/components/landing/NarrativeNavbar.astro`
- `src/styles/landing.css`
- `src/styles/theme.css`

**Estimated scope:** Medium

## Task 3: Implement The One-Time Timed Hero

**Description:** Build the tension-to-agreement hero sequence with stable layout, immediate scroll availability, reduced-motion behavior, and a permanent resolved state.

**Acceptance criteria:**

- [ ] The sequence plays once and settles within 4-6 seconds.
- [ ] Scrolling and CTA interaction are never blocked.
- [ ] Reduced-motion and no-JavaScript users receive the resolved hero.
- [ ] Screen readers encounter one stable heading and description.
- [ ] No measurable layout shift occurs between hero states.

**Verification:**

- [ ] Test initial load, return-to-top, tab backgrounding, refresh, and Astro navigation behavior.
- [ ] Test keyboard access and reduced motion.
- [ ] `npm run build`

**Dependencies:** Task 2

**Files likely touched:**

- `src/components/landing/TimedHero.astro`
- `src/styles/landing.css`

**Estimated scope:** Medium

## Task 4: Implement Intent And Plan Transformation

**Description:** Build the agent conversation handoff and the plan-review interaction where one decision changes in response to user feedback.

**Acceptance criteria:**

- [ ] The conversation contains only the approved two messages.
- [ ] The visual handoff makes prose becoming a durable plan understandable.
- [ ] Only the selected Reminder Timing decision changes.
- [ ] The before/after state is keyboard-operable and understandable without color.
- [ ] The real action label is “Approve plan.”

**Verification:**

- [ ] Keyboard, focus, reduced-motion, and mobile reading-order checks.
- [ ] Compare terminology and state to current AppraiseJS plan review behavior.
- [ ] `npm run build`

**Dependencies:** Tasks 1-3

**Files likely touched:**

- `src/components/landing/AgentIntentSection.astro`
- `src/components/landing/ShapePlanSection.astro`
- `src/styles/landing.css`

**Estimated scope:** Medium

## Task 5: Implement The Decision-To-Proof Centerpiece

**Description:** Build the largest story section, connecting one approved decision to one readable validation with approve and request-change states.

**Acceptance criteria:**

- [ ] The relationship between decision and validation is immediately understandable.
- [ ] The Given/When/Then scenario matches the approved reminder requirement.
- [ ] Approval and request-change controls provide clear feedback.
- [ ] The section remains restrained and does not expose the full validation dashboard.

**Verification:**

- [ ] Validate scenario fidelity against the story model.
- [ ] Keyboard, screen-reader, reduced-motion, and mobile checks.
- [ ] `npm run build`

**Dependencies:** Task 4

**Files likely touched:**

- `src/components/landing/AgreeOnProofSection.astro`
- `src/styles/landing.css`

**Estimated scope:** Medium

## Task 6: Implement Build And Verified Completion

**Description:** Show implementation remaining attached to approved intent, then resolve the full story into one verified-completion artifact.

**Acceptance criteria:**

- [ ] Implementation reads as one lifecycle stage rather than a task dashboard.
- [ ] The approved plan remains visually connected to work and validation.
- [ ] The final scene reconnects the original idea, plan, validations, implementation, and evidence.
- [ ] Completion language does not imply a guarantee beyond passing approved evidence.

**Verification:**

- [ ] Product-fidelity review against current implementation and completion lifecycle states.
- [ ] Mobile, keyboard, reduced-motion, and static-fallback checks.
- [ ] `npm run build`

**Dependencies:** Task 5

**Files likely touched:**

- `src/components/landing/BuildWithPromiseSection.astro`
- `src/components/landing/VerifiedStorySection.astro`
- `src/styles/landing.css`

**Estimated scope:** Medium

## Task 7: Implement The Quality OS Explorer And Closing

**Description:** Reveal the broader philosophy and capabilities through one changing visual, then add the final CTA and footer.

**Acceptance criteria:**

- [ ] Only one of Plan, Prove, Build, Recover, or Verify is expanded at a time.
- [ ] Each capability has one short statement and one focused visual.
- [ ] MCP-first, recovery, and evidence claims are accurate.
- [ ] The final CTA uses consistent labels and does not compete with duplicate actions.

**Verification:**

- [ ] Keyboard arrow/tab behavior and selected-state semantics.
- [ ] Link validation for docs, GitHub, architecture, and installation.
- [ ] Mobile and reduced-motion checks.
- [ ] `npm run build`

**Dependencies:** Task 6

**Files likely touched:**

- `src/components/landing/QualityOsExplorer.astro`
- `src/components/landing/NarrativeClosingCta.astro`
- `src/components/landing/NarrativeFooter.astro`
- `src/styles/landing.css`

**Estimated scope:** Medium

## Task 8: Align Entry-Point Content And Metadata

**Description:** Update the site description and first-click documentation so users do not immediately encounter the obsolete visual-test-only category after leaving the new landing page.

**Acceptance criteria:**

- [ ] Home metadata and Starlight description reflect the agentic Quality OS direction.
- [ ] Overview, Why AppraiseJS, and Comparison pages align with the new positioning.
- [ ] Visual test authoring remains documented as a capability rather than the headline category.
- [ ] Existing routes and sidebar links remain unchanged in this release slice.

**Verification:**

- [ ] Search for obsolete primary-positioning phrases.
- [ ] Verify all affected routes in the production build.
- [ ] `npm run build`

**Dependencies:** Task 1

**Files likely touched:**

- `astro.config.mjs`
- `src/content/docs/getting-started/overview.mdx`
- `src/content/docs/core-concepts/why-appraisejs.md`
- `src/content/docs/core-concepts/comparison.md`

**Estimated scope:** Medium

## Task 9: Release Validation And Browser Review

**Description:** Run the full quality gate across build, content, accessibility, responsiveness, performance, and product fidelity.

**Acceptance criteria:**

- [ ] Production build succeeds without broken content or media references.
- [ ] WCAG AA contrast, keyboard navigation, focus visibility, semantics, and reduced motion pass.
- [ ] No horizontal overflow appears between 320 and 1600 pixels.
- [ ] LCP is below 2.5 seconds, INP below 200 milliseconds, and CLS below 0.1 in the target preview environment.
- [ ] Every visible claim and string passes product-fidelity and copy review.

**Verification:**

- [ ] `npx prettier --check .`
- [ ] `npm run build`
- [ ] `npm run preview`
- [ ] Desktop and mobile browser validation in light, dark, reduced-motion, and JavaScript-disabled configurations.
- [ ] Lighthouse and accessibility audit.
- [ ] Capture desktop and mobile screenshots or recordings for review.

**Dependencies:** Tasks 2-8

**Files likely touched:**

- Any landing or entry-point content file based on findings

**Estimated scope:** Medium

## Checkpoints

### Checkpoint 1: Static Narrative After Tasks 1-2

- [ ] Copy, terminology, story data, layout, and mobile order are approved.
- [ ] The page works without JavaScript.
- [ ] Each viewport communicates one idea.

### Checkpoint 2: Core Story After Tasks 3-6

- [ ] The visitor can follow intent, plan, feedback, proof, implementation, and evidence.
- [ ] The hero plays once without blocking interaction.
- [ ] The decision transformation and proof mapping are the visual centerpieces.

### Checkpoint 3: Release Candidate After Tasks 7-9

- [ ] The Quality OS reveal adds depth without becoming a feature wall.
- [ ] Landing, metadata, and first-click docs tell one coherent story.
- [ ] Build, browser, accessibility, performance, and product-fidelity checks pass.

## Dependency Graph

```text
Verified claims and story data
              ↓
Static tokens, layout, and page skeleton
              ↓
One-time timed hero
              ↓
Intent and plan transformation
              ↓
Decision-to-proof centerpiece
              ↓
Build and verified completion
              ↓
Quality OS explorer and closing
              ↓
Release validation

Entry-point docs alignment can proceed after claims are locked,
then rejoins the release-validation gate.
```

## Risks And Mitigations

| Risk                                                        | Impact | Mitigation                                                                                              |
| ----------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------- |
| Timed hero delays access or annoys returning visitors       | High   | Play once, permit immediate interaction, render final state without JS, and skip under reduced motion.  |
| “Promise” is interpreted as a guarantee of perfect code     | High   | Show that the promise becomes approved decisions, validations, and evidence; avoid absolute guarantees. |
| “Story” obscures the real plan artifact                     | Medium | Use story for narrative framing and plan for actual product actions and UI.                             |
| Abstract visuals overstate or misrepresent product behavior | High   | Verify every state against current AppraiseJS and retain real terminology.                              |
| Final explorer regresses into a feature wall                | Medium | Expand one capability at a time with one statement and one visual.                                      |
| Motion harms accessibility or performance                   | High   | Progressive enhancement, transform/opacity only, reduced-motion fallbacks, and isolated scripts.        |
| New landing conflicts with old docs positioning             | High   | Align metadata and first-click docs in the same release.                                                |
| Existing user changes are overwritten                       | Medium | Preserve the current `package-lock.json` modification and stage only authorized redesign files.         |

## Deferred Scope

- Full sidebar and route migration to lifecycle-oriented documentation.
- Provider-native session marketing.
- Pricing, hosted-service, enterprise, customer-logo, or testimonial claims.
- Automatic synchronization of product screenshots from the main AppraiseJS repository.
- Redesign of every documentation content page.

## Approval Boundary

This plan authorizes planning only. Implementation begins after review of this document. The recommended first implementation checkpoint is Tasks 1-2, producing the approved copy, canonical story model, responsive static landing page, and no-JavaScript final states before motion is added.
