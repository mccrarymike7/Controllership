# Controllership — TOM & Capabilities Matrix

Single-page app for the **Target Operating Model** and **Finance Capabilities Matrix** of an international life insurance controllership function. Built with React, Vite, and Tailwind; content is driven from JSON so you can swap configs (e.g. Aspida vs another entity).

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown (e.g. http://localhost:5173/). Click **Enter** on the landing screen, then use the sidebar to open **Target Operating Model** or **Capabilities Matrix**.

## Build

```bash
npm run build
```

Output is in `dist/`.

## Design

- **Shell**: Fixed left sidebar (nav), top bar (current view title), scrollable main area, optional footer. Layout follows `PROMPT-app-shell-and-design.md`.
- **Colors**: Only the **General Palette** is used: `#140F3C`, `#3B4F6B`, `#5C46A5`, `#EF426F`, `#0A0A0A`, `#5BC0BE` (see `src/theme.js`).
- **Content**: TOM content from `content/tom-config.json`; capabilities matrix from `content/capabilities-matrix.json`. Edit those files to change copy, phases, friction points, proficiency levels, deep-dives, team assessment, and gap analysis without touching code.

## Project structure

- `src/theme.js` — Design tokens (General Palette).
- `src/components/Layout/` — App shell (sidebar, top bar, main).
- `src/pages/` — Landing, TOM page, Capabilities Matrix page.
- `content/` — JSON config for TOM and capabilities matrix.
