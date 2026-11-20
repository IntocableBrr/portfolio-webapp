# Prompt 0004 — Reorganize Pages and Components

**Date:** 2026-11-20  
**Branch:** feature/PFL-15-face-lift  
**Status:** Completed

## Original Prompt

- User requested restructuring MainPage and its sections under `src/app/pages/main-page/`, renaming four reusable components with an `App` prefix, adding component and section barrels, updating references, preserving behavior/appearance, and running the production build. Detailed organizational requirements were omitted here for brevity.

## Codex Actions

- Moved MainPage and all four section folders into `src/app/pages/main-page/` and removed the empty former pages folder.
- Renamed CustomButton, Header, ShapeGrid, and ScrollStack folders, component files, exported names, props types, and stylesheet files where applicable.
- Added reusable component barrels, the central components barrel, and barrels for all four page sections.
- Updated routing/import references and exposed section navigation prop types through their barrels.
- Confirmed no stale names or old paths remain in `src`.

## Files Changed

- `src/app/app.tsx`
- `src/app/components/app-button/` (renamed CustomButton files and new barrel)
- `src/app/components/app-header/` (renamed Header files and new barrel)
- `src/app/components/app-shape-grid/` (renamed ShapeGrid files and new barrel)
- `src/app/components/app-scroll-stack/` (renamed ScrollStack files and new barrel)
- `src/app/components/index.ts`
- `src/app/pages/main-page/` (moved MainPage files and all section files; added section barrels)

## Decisions

- Kept ShapeGrid and ScrollStack stylesheet assets as CSS, matching their existing format, and renamed them to match their new TSX files.
- Internal Header-to-button dependencies remain direct to avoid a barrel cycle; external consumers use the central components barrel.
- The unrelated existing `src/app/pages/projects/` page was preserved.

## Verification

- `npm.cmd run build` — passed; Nx/Vite production build completed and emitted `dist/portfolio-webapp/` artifacts.
- `git diff --check` — passed with no whitespace errors.
- Stale-name/path search under `src` — no matches.
- No tests were run; the requested production build was run.

## Outcome

- The requested page and component reorganization is complete. Component styling and behavior were retained, and the production build passes.
