# Prompt 0003 — Update My Work and reorganize sections

**Date:** 2026-11-19  
**Branch:** feature/PFL-15-face-lift  
**Status:** Completed

## Original Prompt

Implement the following changes to the My Work section using the attached screenshot as the visual reference.

### 1. My Work header

- Move the "My Work" heading from the center to the left, matching the screenshot.
- Add the GitHub icon and Resume button to the right of the heading.
- Use MUI icons for GitHub and Download.
- The GitHub icon should link to my GitHub profile.
- The Resume button should download my resume PDF.
- Check for existing URLs and resume assets. Do not invent missing destinations.
- Match the layout, spacing, sizing, and styling shown in the screenshot.

### 2. Reusable button component

The Hero section already has a custom button built using MUI Button. Refactor this approach into a reusable component supporting three variants:

- **Navigation:** Used by the main header navigation buttons. Preserve the existing active-section highlighting and behavior.
- **Primary:** Red buttons used for "Check out my work" in the Hero section and "Contact me" in the My Work section.
- **Secondary:** Dark charcoal button with no red outline by default, used for Resume.

All three variants should share the same existing custom button shape, with their colors and styles determined by the variant prop.

Add support for an optional icon on the left using MUI Button's `startIcon` functionality.

Update the existing buttons to use this shared component without changing their current appearance or behavior.

The GitHub icon can use MUI IconButton separately.

### 3. Contact Me button

- Replace the existing blue "View more" placeholder button at the bottom of My Work with "Contact me".
- Use the new reusable button component with the Primary variant, matching the existing Hero section button.
- Clicking it should navigate to the Contact section using the existing section navigation behavior.

### 4. Rename components and reorganize files and styles

- Create a `sections` folder inside the existing `components` folder.
- Move the four existing section components into this folder, each with its own descriptively named subfolder:
  - `sections/hero-section/`
  - `sections/work-section/`
  - `sections/about-section/`
  - `sections/contact-section/`
- Rename `home-hero.tsx` to `hero-section.tsx`, its component to `HeroSection`, and its props type to `HeroSectionProps`.
- Rename the existing `components/pages/home/` folder to `components/pages/main-page/`.
- Rename `home.tsx` to `main-page.tsx` and its component to `MainPage`.
- Rename `home.module.scss` to `main-page.module.scss`.
- Move the section-specific styles currently in `home.module.scss` into separate SCSS module files alongside their respective TSX files:
  - `hero-section.module.scss`
  - `work-section.module.scss`
  - `about-section.module.scss`
  - `contact-section.module.scss`
- Keep only page-level styles in `main-page.module.scss`.
- Keep reusable UI components, such as the custom button, outside the `sections` folder.
- Update all affected imports, exports, references, and any affected routes.
- Preserve existing styling and functionality during the reorganization.

### 5. Constraints

- Do not modify the project card or implement its content. That will be handled in a separate prompt.
- Preserve the existing snap-scrolling behavior.
- Preserve the sticky header and active navigation behavior.
- Do not change the hexagonal page background.
- Preserve existing working functionality and responsive behavior.
- Reuse existing styles and components where appropriate rather than introducing unnecessary abstractions.

After implementation, run the relevant build or checks and summarize the changes and verification results.

Attachment: Screenshot of the My Work header showing a left-aligned heading and right-aligned GitHub and Resume controls. No filename was supplied.

## Codex Actions

Built the My Work header with a left-aligned heading and GitHub and Resume actions. Converted the header navigation and both section calls to action to the shared MUI button. Moved the four sections into `components/sections/`, split their styles into local modules, and updated the application entry point to render `MainPage`.

## Files Changed

- Updated `src/app/app.tsx`, `src/app/components/header/header.tsx`, and `src/app/components/header/header.module.scss`.
- Added `src/app/components/custom-button/custom-button.tsx` and `src/app/components/custom-button/custom-button.module.scss`.
- Moved `src/app/pages/home/home.tsx` and `home.module.scss` to `src/app/components/pages/main-page/main-page.tsx` and `main-page.module.scss`.
- Moved `home-hero/home-hero.tsx` to `sections/hero-section/hero-section.tsx` under `src/app/components/`. Moved `work-section/work-section.tsx`, `about-section/about-section.tsx`, and `contact-section/contact-section.tsx` into their respective subfolders under `sections/`.
- Added `hero-section.module.scss`, `work-section.module.scss`, `about-section.module.scss`, and `contact-section.module.scss` in their section folders.

## Decisions

- Used the repository's existing GitHub profile URL and resume PDF path. The resume link uses the browser's download behavior.
- Placed the renamed page at the requested `src/app/components/pages/main-page/` path. The original page was under `src/app/pages/home/`.
- Kept shared scroll snap rules in the page module and reused the section navigation callback for Contact me. The navigation variant uses the existing `aria-current` state for its active border.

## Verification

- `npm.cmd run build` passed outside the sandbox after the sandbox blocked Nx from resolving the Vite configuration.
- TypeScript no-emit check and ESLint on the affected TSX files passed.
- Headless Edge checks of the production build passed at 1280 × 900 and 375 × 820. The checks covered header alignment, MUI icons, primary button styling, section navigation, active navigation, sticky header positioning, scroll snapping, and the project placeholder. The downloaded PDF matched the existing asset byte for byte.
- `git diff --check` passed.

## Outcome

The My Work header and Contact me button are implemented and verified. The project card and hexagonal canvas were preserved.
