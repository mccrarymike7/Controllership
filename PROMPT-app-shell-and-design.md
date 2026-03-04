# Descriptive Prompt: App Shell & Design (Reuse for New Projects)

Use this prompt when you want to build another project that reuses the same layout and design language as the Reinsurance app.

---

## Copy-paste prompt

**Create a single-page application with the following layout and design system.**

### 1. App shell layout

- **Left sidebar (primary navigation)**  
  - Fixed on desktop (e.g. `w-60`), full-height. On mobile: slide-out overlay with a semi-transparent backdrop; hamburger in the top bar toggles it.  
  - Dark background (e.g. navy `#002147`). Logo and app name at the top; optional thin border below.  
  - Navigation items: section labels in small uppercase (e.g. “Concept”, “Prototype”) with icon + text. Support **expandable groups**: one parent item expands to show child items (chevron down/right). Active item: distinct background (e.g. accent blue) and white text; inactive: muted text with hover state.  
  - Optional footer strip at bottom of sidebar: small text (version, env, copyright).

- **Main content area (right of sidebar)**  
  - Takes remaining width (`flex-1`), column layout.  
  - **Top bar**: full-width header bar (e.g. `h-12`), same dark color as sidebar or a landing variant. Left: hamburger (mobile only), “Current view” label, and the **current page/section title**. Right: optional status (e.g. “Network: Optimal” + status dot).  
  - **Main**: scrollable region (`overflow-auto`, `flex-1`) where **content pages** render. No sidebar inside this area—only the selected view’s content.  
  - Optional **footer** below main (e.g. multi-column, small uppercase text, subtle border-top), only when a view is selected.

- **Optional landing state**: When no section is selected, main can show a centered logo and app name on the same dark background instead of content.

### 2. Content pages and “floating” tiles

- **Content pages** are full-width (with padding) inside main. Each page can have its own structure (hero, sections, grids).  
- **Floating tiles** (card-like controls):  
  - Used for things like “stage” or “mode” selection (e.g. 3–5 options).  
  - Each tile: white background, rounded corners (e.g. `rounded-lg`), border, soft shadow; padding for icon, label, short description, and “Details” or similar.  
  - **Active tile**: dark background (e.g. navy), gold/accent bottom border (`border-b-4`), white text, stronger shadow, slight lift (`translate-y-[-4px]`). Optional decorative icon in corner (e.g. large, low opacity).  
  - Tiles can sit in a horizontal row (flex/grid, wrap on small screens).  
  - **Sticky behavior (optional)**: When the user scrolls and the tile row would leave the viewport, render the same row as a **sticky header** (e.g. fixed to top, below or aligned with top bar), with a light background so content scrolls underneath. Use a sentinel (e.g. 1px div) and scroll listener to toggle between in-flow tiles and sticky header; hide the in-flow row when sticky is active to avoid duplicate UI.

### 3. Cards and content blocks

- **Dashboard-style cards**:  
  - Container: white background, rounded (e.g. `rounded-lg`), border (e.g. `border-slate-200`), light shadow.  
  - **Header strip**: top section with distinct background (e.g. light blue `#E8F2F8`) and bottom border; bold title (dark text); optional info icon.  
  - Body: padding; any content (stats, tables, lists, forms).  
- Use these for: snapshot stats, data tables, “recent items”, and secondary panels (e.g. a **right rail** next to main content: fixed-width column of 2–3 such cards for summaries, forecasts, or quick links).

### 4. Visual and typography system

- **Colors**:  
  - Primary dark: navy (e.g. `#002147`) for sidebar, top bar, headers, primary buttons.  
  - Accent: gold (e.g. `#C5A059`) for highlights, active borders, key labels, serif emphasis.  
  - Background: light gray (e.g. `#F8FAFC`) for the main content area.  
  - Card headers: light blue (e.g. `#E8F2F8`) or similar; active nav: blue (e.g. `#4A90B5`).  
  - Borders: slate (e.g. `#E2E8F0`).  
- **Typography**:  
  - Serif for main headings (e.g. “Institutional Architecture”, section titles).  
  - Sans-serif for body and UI.  
  - Small labels: uppercase, tight letter-spacing (e.g. `tracking-widest`), muted color.  
  - Numbers/IDs: monospace where appropriate.  
- **Borders and shadows**: Light borders and `shadow-sm` / `shadow-lg` for cards and tiles; stronger shadow on hover or active.  
- **Decorative detail**: Optional skewed accent strip (e.g. narrow rectangle with gold at 10% opacity) in the top-right of hero or header blocks for depth.

### 5. Other patterns to support

- **Hero / section headers**: Large centered title (serif) with one word or phrase in accent color; short subtitle; optional grid of small nav cards that scroll to sections.  
- **Filter bar**: Full-width bar (dark background) with selects and “GO” button (e.g. Company, Contract); optional “Advanced Search” link.  
- **Tables**: Header row with dark background and white text; compact rows with hover state; optional status badges (e.g. success/warning).  
- **Opening/landing screen**: Optional full-screen view (fixed inset-0) with centered logo and app name; single click/tap “enters” the app and hides this view.  
- **Transitions**: Fade-in (e.g. `animate-in fade-in duration-500`) when switching content views; smooth scroll for in-page anchors.

### 6. Responsive behavior

- Sidebar: visible by default on large screens; off-canvas with overlay on small screens, toggled by top-bar hamburger.  
- Top bar: title truncates if needed; optional status text hidden on very small screens.  
- Content: padding and grid columns reduce or stack on smaller breakpoints; tile row wraps; right rail stacks below main content on small screens.

Implement the shell (sidebar, top bar, main area, optional footer and landing state) and one or two example content pages that use the floating tiles and dashboard cards so the pattern is clear. Use React and Tailwind (or equivalent) and keep the structure reusable for adding more pages and nav items later.

---

## Short version (minimal prompt)

**Build an app with: (1) a fixed left sidebar (navy, logo + nav with expandable groups, active state, mobile overlay), (2) a top bar showing current view title and optional status, (3) a scrollable main area where content pages render to the right of the sidebar, (4) optional footer. Use “floating” tiles for stage/mode selection (white cards, active = navy + gold border + lift; optional sticky-on-scroll), and dashboard-style cards (white, rounded, header strip with light blue, body below) for content and an optional right rail. Colors: navy #002147, gold #C5A059, bg #F8FAFC, accent blue #4A90B5. Serif headings, sans body, uppercase small labels. Support hero sections, filter bars, tables, and an optional full-screen landing view. Responsive: sidebar collapses to overlay on mobile; content stacks. Use React + Tailwind.**
