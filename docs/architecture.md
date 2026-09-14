# Architecture — how the code is organized

Technical map of the repository for developers. For agent-oriented pitfalls, also read `AGENTS.md` at the repo root.

## High-level picture

- **Next.js 13.2.4** in **Pages Router** mode with a **static export** (`next export -o build/`). The exported `build/` folder is what Netlify publishes.
- React 18 + TypeScript; type errors are **not** checked during build (see Caveats).
- Styling: Tailwind CSS 3.1 (custom theme in `tailwind.config.js`) + MUI v5 components for form inputs and the mobile drawer.
- No tests, no CI config.

## Directory layout

```
pages/                 All routes
  _app.tsx             Root wrapper (MUI ThemeProvider, CssBaseline, localization)
  index.tsx            Homepage
  unterkuenfte.tsx     Accommodations
  buchung.tsx          Booking-inquiry form
  lage.tsx             Location
  agb.tsx              AGB & Hausordnung (PDFs)
  impressum.tsx        Imprint
  dsgvo.tsx            GDPR/privacy page (very long)
  global.css           Fonts + Tailwind + vis-timeline CSS fixes
components/            Presentational components
public/                Static assets served at site root
build/                 The static export (deploy artifact)
```

## Pages

### `pages/_app.tsx`
- Wraps every page with: MUI `ThemeProvider` (default theme), `CssBaseline` (CSS reset — Tailwind preflight is disabled), and `LocalizationProvider` with the `date-fns` adapter (needed by the date pickers).
- Sets the global `<title>` "Familiencamp Rügen" and viewport meta. Removes the server-side-injected JSS style tag on mount.

### `pages/index.tsx` — Homepage
Defines several sections as local components:

| Section | Content |
| --- | --- |
| `BookingStrip` | Date pickers (Anreise/Abreise) + adults/children + "Verfügbarkeit prüfen" button. Navigates to `/buchung` with URL query params. |
| `HighlightsSection` | Three cards (Lage / Ausstattung / Gemeinschaft) + "Beliebte Ausflugsziele" teaser with a TripAdvisor link. |
| `CTASection` | Background image + "Jetzt reservieren" → `/buchung`. |
| `RoomsSection` | Two `RoomCard`s ("Kleiner Bungalow" ab 40€, "Großer Bungalow" ab 52€) linking to `/unterkuenfte#kleines-haus` / `#grosses-haus`. |

Layout: `MainPageHeader` on top, then `Sidebar` (decorative) + content + `Sidebar`, then `Footer`.

### `pages/unterkuenfte.tsx`
- `AccommodationsContainer` (the two bungalows with anchors `#kleines-haus`, `#grosses-haus`) plus a "Das Gemeinschaftshaus" section (image collage + capacity/text).

### `pages/buchung.tsx` — the most complex page
- Reads query params (`anreise`, `abreise`, `numErwachsene`, `numKinder`) into initial state.
- If `?erfolg=true` → renders confirmation; otherwise renders the Netlify **contact form**.
- Dates are stored as `Range = { start, end }` (the `Range` type is exported by `components/timeline.tsx`).
- Dynamic child-birthday pickers appear based on the children count. Number fields clamp to ≥ 0.
- The vis-timeline `Timeline` component is **imported but not rendered** (commented out) — dead code.

### `pages/lage.tsx`
- Header image + "100m bis zum Strand", Google Maps link, and three cards: Adresse / Telefon / Email.

### `pages/agb.tsx`
- Two `PdfViewer` instances — `/agb.pdf` ("Unsere AGB") and `/hausordnung.pdf` ("Unsere Hausordnung").

### `pages/impressum.tsx` & `pages/dsgvo.tsx`
- Static legal content. `dsgvo.tsx` is ~1,170 lines of formatted HTML-like text.

## Components

| File | Role |
| --- | --- |
| `navbar.tsx` | Logo button ("Familienurlaub Rügen") → home, desktop link row, **MUI Drawer** hamburger menu on mobile. Uses the Locofy style-prop pattern. |
| `main-page-header.tsx` | Full-screen hero (background image `mainpage-header@3x.png`) with tagline. Wraps `Navbar`. |
| `side-page-header.tsx` | Sub-page header (fixed 1920px-wide background image), wraps `Navbar`. |
| `footer.tsx` | Company info, **hardcoded season dates**, link column, copyright. Very prop-heavy (Locofy pattern). |
| `Sidebar.tsx` | Empty decorative 5%-width div, hidden below `lg` breakpoint. |
| `room-card.tsx` | Image + title + description + price card (adds the "/ Nacht" suffix). |
| `flex-row.tsx` | Teal icon+heading bar (used in HighlightsSection, lage). |
| `container-link.tsx` | Text block + "Jetzt reservieren" button → `/buchung`. |
| `accommodations-container.tsx` | The two bungalow sections with photo columns and `ContainerLink` text. |
| `timeline.tsx` | **Dead code** — a fully implemented vis-timeline week selector (Sat–Sat weeks, season 01.06–31.10). Render is commented out in `buchung.tsx`; only its `Range` type is used. |
| `PdfViewer.tsx` | Client-side PDF render (`@react-pdf-viewer`), worker from unpkg. |

## Styling model

- **Tailwind arbitrary values** are the dominant style mechanism: e.g. `gap-[2rem]`, `rounded-45xl`, `bg-rectangle-805`, `text-[0.81rem]`. Theme tokens live in `tailwind.config.js`:
  - Colors: `rectangle-805` (#34a0a4, teal = brand), `rectangle-807` (#1a759f, blue), `dimgray`, `color-text`, `lavender`, `light-text-color`, …
  - Fonts: `DM Sans`, `Belleza`, `Montserrat`, `Inter` (loaded from Google Fonts in `pages/global.css`).
  - Screens: custom breakpoints xl ≥1201, lg 961–1200, md 681–960, sm ≤680.
  - Radii: `45xl`(64px), `13xl`(32px), `81xl`(100px), …
- **Locofy pattern** in several components: computed `CSS.Properties` via `useMemo`, `defaultProps`, and `Property.*`-typed overridable props (see `footer.tsx`, `navbar.tsx`).
- **Preflight disabled** — `corePlugins.preflight: false`; base resets come from MUI `CssBaseline`.
- The project is **Locofy-generated** (git history shows "Pushed from Locofy Builder"); class names and prop names are often odd/legacy (e.g. `bisZu3Personen` reused for the big house, `cayoBeachFontSize`).

## Public assets (`public/`)

Served at the site root and copied verbatim into the export.

| Group | Files |
| --- | --- |
| Photos in use | `image*.png`, `mainpage-header@3x.png`, `sidepage-header@3x.png`, `cover@2x.png`, `cta@3x.png`, `calendar-1@2x.png`, `sonnenuntergang.png` (untracked) |
| Icons/SVG | `icncircle-circlemd{,.1-.5}.svg`, `vector.svg`, `magnifier--24--outline.svg` |
| Legacy/unused | `calendar-11@2x.png`, `notification*.svg` |
| PDFs | `agb.pdf`, `hausordnung.pdf` |
| Untracked media | `sonnenuntergang.png`, `transfer/` (45 full-res JPGs, ~233 MB — not committed, kept for later) |

## Config files

- `next.config.js` — `reactStrictMode`, `typescript.ignoreBuildErrors: true`, `transpilePackages: ['vis-timeline']`, webpack `raw-loader` rule for `.node` files.
- `tailwind.config.js` — theme tokens (see above).
- `tsconfig.json` — strict TS, Next.js defaults.
- `postcss.config.js` — Tailwind + autoprefixer.
- `.nvmrc` — Node 24.

## Caveats

- `next build` / `next lint` **do not typecheck** (`ignoreBuildErrors: true`); use `npx tsc --noEmit` manually.
- Static export only — no API routes, `getServerSideProps`, middleware, or rewrites in production.
- `@react-pdf-viewer` worker loads from `https://unpkg.com/pdfjs-dist@3.11.174/...` at runtime (needs internet).
- `react-router-dom` is installed but unused; everything routes through `next/link` + `next/router`.