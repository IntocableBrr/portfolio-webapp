# Prompt 0005 — Update Hero Grid and Technology Pills

**Date:** 2026-11-20  
**Branch:** feature/PFL-15-face-lift  
**Status:** Completed

## Original Prompt

Make the following changes to the Hero section of my portfolio.

### 1. Shape Grid Component

Update the existing `app-shape-grid` component:

- Rotate the hexagons so they have a vertical orientation, with their points facing up and down, matching the hexagons in the logo to the left of "Jacob Rosa."
- Only change the orientation of the hexagons. Preserve their existing arrangement, sizing, spacing, and grid behavior.
- Modify the existing hexagon hover effect so that it displays the rose logo SVG provided below instead of its current visual effect.
- Preserve the existing hover interaction and behavior, changing only the visual effect to display the rose logo.
- Ensure the rose logo is centered and scales appropriately within each hexagon.

### 2. Rose Logo Component

Create a reusable component named `rose-logo` using the SVG code below.

- Place it in the existing `components` directory, following the same folder structure and conventions as `jacob-rosa-logo`.
- Include its own `index` file.
- Export it through the main `components/index` file.
- Use this component for the existing hexagon hover effect instead of embedding the SVG directly in `app-shape-grid`.

**SVG Code:** [Omitted from journal: supplied rose vector artwork.]

### 3. Technology Labels

Replace the existing technology labels at the bottom of the Hero section with the following, preserving this exact order:

1. React
2. TypeScript
3. Node.js
4. Python
5. Java
6. PostgreSQL
7. AWS

Display each technology inside an individual black pill instead of displaying it as floating text.

**Pill styling:**

- Solid black background.
- No borders or outlines.
- Rounded pill shape.
- Maintain readable text contrast.
- Use the attached screenshot as a reference for the pill's internal padding and spacing only, not its border or colors.
- Maintain consistent spacing between pills and allow them to wrap appropriately on smaller screens.

### 4. Reusable Pill Component

Create a reusable component named `app-pill`.

- Place it in its own folder inside the existing `components` directory.
- Follow the same component structure and naming conventions as the other reusable components.
- Include an `index` file within its folder.
- Export it through the main `components/index` file.
- Make the component reusable with different text content.
- Use `app-pill` to render all seven technology labels.

### 5. Preserve Existing Behavior

- Do not modify the existing scroll-snapping behavior.
- Do not change the header's functionality or styling.
- Preserve the existing Hero section layout except for the requested changes.
- Preserve the hexagon grid's existing interactions and behavior, modifying only its orientation and the visual appearance of its current hover effect.
- Follow the project's existing component organization, styling conventions, and import/export patterns.
- Avoid unrelated changes or unnecessary refactoring.

**Reference attachment:** A screenshot showing the desired pill spacing. The screenshot includes a border, but the implementation must not have one. (Inline attachment with no filename supplied.)

## Codex Actions

- Inspected the existing Hero section, component exports, and canvas grid.
- Rotated the hexagons and updated cell placement and hit detection for the new orientation.
- Created and exported RoseLogo and AppPill. Used RoseLogo in the canvas hover effect and AppPill for the seven technology labels.

## Files Changed

- `src/app/components/app-shape-grid/app-shape-grid.tsx`
- `src/app/components/app-pill/app-pill.tsx`
- `src/app/components/app-pill/app-pill.module.scss`
- `src/app/components/app-pill/index.ts`
- `src/app/components/rose-logo/rose-logo.tsx`
- `src/app/components/rose-logo/index.ts`
- `src/app/components/index.ts`
- `src/app/pages/main-page/sections/hero-section/hero-section.tsx`
- `src/app/pages/main-page/sections/hero-section/hero-section.module.scss`

## Decisions

- Shifted the stagger from columns to rows so regular point-up hexagons still tile with the same radius and center spacing.
- Serialized the reusable SVG once when the canvas effect initializes so each rose can use the existing per-cell opacity and hover trail.
- Used border-box sizing for the technology list so its padding stays within the available width as labels wrap.

## Verification

- Reviewed the source diff and ran `git diff --check`. No whitespace errors were reported.
- No tests, builds, or browser checks were run.

## Outcome

- The Hero uses rose hover artwork and seven black technology pills in the requested order.
