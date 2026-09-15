# AGENTS.md — Familiencamp Rügen website

Guidance for AI agents and developers working in this repository. Read this file before making changes.

## What this project is

A German-language static website for the holiday rental business **Familiencamp Rügen** (Rügen Grundstücks eGbR). It is a marketing site plus a **booking-inquiry form** (it does *not* take payments or manage availability — submissions arrive as contact-form submissions via Netlify Forms).

The site advertises two rental units ("Kleines Ferienhaus", "Großes Ferienhaus"), a community house, the location near Tromper Wiek/Drewoldke (Altenkirchen, Rügen), and legal pages (AGB, Hausordnung, Datenschutz, Impressum).

## Stack

- **Next.js 13.2.4** — Pages Router, static site generation via `next export`
- **React 18.2**, **TypeScript 4.7** (config: `tsconfig.json`, strict mode on)
- **Tailwind CSS 3.1** with a heavily customized theme (`tailwind.config.js`), `corePlugins.preflight: false`
- **MUI v5** (`@mui/material`, `@mui/x-date-pickers` + `date-fns` adapter) for form inputs and the mobile drawer
- **vis-timeline** (`components/timeline.tsx`) — largely **dead code** (render was removed from the booking page; only the `Range` type is still imported)
- **@react-pdf-viewer** (`components/PdfViewer.tsx`) — renders `agb.pdf` / `hausordnung.pdf`
- **Node 24** (see `.nvmrc`), npm workspaces are **not** used

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Next dev server on http://localhost:3000 |
| `npm run build` | Next production build (writes `.next/`) |
| `npm run export` | `npm run build` + `next export -o build/` — produces the static site |
| `npm run start` | Serve the production build via `next start` |
| `npm run lint` | `next lint` |

### Critical build caveats

- `next.config.js` has `typescript.ignoreBuildErrors: true` and there is **no typecheck script**. `next build` / `next lint` will **not** fail on TypeScript errors. Run `npx tsc --noEmit` yourself if you need a type check.
- The only deployable artifact is the **static export** in `build/` (used by Netlify). Do not add API routes, middleware, `getServerSideProps`, rewrites, or other server-only features — they will not work in the exported site.
- `next.config.js` also chunks `vis-timeline` via `transpilePackages` and adds a `raw-loader` rule for `.node` files — leave both in place.
- **Images are optimized via Netlify Image CDN**, not Next's own optimizer: `next.config.js` sets `images.loaderFile: "./lib/image-loader.ts"`, which emits `/.netlify/images?url=...&w=...&q=...` URLs when `NEXT_PUBLIC_IMAGE_CDN=true` (set in `netlify.toml`) and plain paths otherwise (local dev/builds). This is required because `next export` has no `/_next/image` server — do **not** simply remove `images.loaderFile` or set `unoptimized: true` on a whim. Hero/CTA backgrounds (`main-page-header.tsx`, `side-page-header.tsx`, `CTASection` in `index.tsx`) use `next/image` with `fill` inside `relative isolate` containers, not CSS `bg-[url(...)]`.
- `netlify.toml` defines the deploy (build command `npm run export`, publish `build/`, Node 24, `NEXT_PUBLIC_IMAGE_CDN=true`). Changing build settings there overrides the Netlify UI.

## Repository layout

```
pages/                      # All routes (Pages Router)
  _app.tsx                  # Root: MUI ThemeProvider, CssBaseline, LocalizationProvider (date-fns), <Head> title "Familiencamp Rügen"
  index.tsx                 # Homepage: MainPageHeader, BookingStrip, HighlightsSection, CTASection, RoomsSection, Footer
  unterkuenfte.tsx          # Accommodations: AccommodationsContainer + community house
  buchung.tsx               # Booking inquiry: Netlify form, date/adult/child inputs, child-birthday pickers
  lage.tsx                  # Location: address, phone, email cards, Google Maps link
  agb.tsx                   # AGB + Hausordnung PDFs (via PdfViewer)
  impressum.tsx             # Legal notice
  dsgvo.tsx                 # GDPR/privacy text (long static page)
  global.css                # Fonts (Google), Tailwind directives, vis-timeline CSS overrides

components/                 # Named loosely; most are presentational and Locofy-generated
  navbar.tsx                # Top nav: logo button, links, MUI Drawer for mobile
  main-page-header.tsx      # Hero with background image + headline (wraps Navbar)
  side-page-header.tsx      # Parallax-style header for sub-pages (wraps Navbar)
  footer.tsx                # Footer: company info, season dates, link column
  Sidebar.tsx               # Empty decorative `<div>` (~5% width), hidden on <lg
  room-card.tsx             # Image + title + description + price card
  flex-row.tsx              # Icon + heading bar (used by HighlightsSection / lage)
  container-link.tsx        # Text block + "Jetzt reservieren" button
  accommodations-container.tsx  # Two full accommodation sections (anchors #kleines-haus, #grosses-haus)
  timeline.tsx              # vis-timeline week selector — DEAD CODE (render commented out in buchung.tsx)
  PdfViewer.tsx             # Client-side PDF renderer (unpkg worker), "use client"

lib/
  image-loader.ts           # Custom next/image loader → Netlify Image CDN URLs (see build caveats)
```

## UI / styling conventions

- Styling mixes **inline Tailwind arbitrary-value classes** (e.g. `gap-[2rem]`, `rounded-45xl`, `bg-rectangle-805`) with a custom theme. All colors/fonts/screens are defined in `tailwind.config.js` (e.g. `rectangle-805` teal `#34a0a4`, fonts `DM Sans`, `Belleza`, `Montserrat`, `Inter`).
- Some components use the **Locofy pattern**: `CSS.Properties` style objects built with `useMemo`, `defaultProps`, and overridable `Property.*` style props (see `navbar.tsx`, `footer.tsx`).
- Tailwind `corePlugins.preflight: false` — base CSS resets come from MUI `CssBaseline` (wired in `_app.tsx`). Don't re-enable preflight.
- UI copy is **German**. Fonts load from Google Fonts in `pages/global.css`.
- **Do not add code comments** unless asked. This repo contains many commented-out blocks (Locofy leftovers) — leave them as-is unless the task requires removal.
- `react-router-dom` is listed in `package.json` but **not used** anywhere; Next's `next/link` + `next/router` are the routing tools.

## Data / content flows

### Booking inquiry (most complex flow)

1. Homepage `BookingStrip` (`index.tsx`) reads arrival/departure dates and adult/child counts.
2. "Verfügbarkeit prüfen" pushes to `/buchung?anreise=<ISO>&abreise=<ISO>&numErwachsene=N&numKinder=M`.
3. `buchung.tsx` parses those params into initial form state (`Range` = `{start, end}`).
4. The form is a **Netlify form**: `data-netlify="true"`, honeypot `bot-field`, hidden `form-name="contact-form"`, `method="POST"`, `action="/buchung?erfolg=true"`.
5. Field names sent to Netlify: `anreise`, `abreise`, `anzahlGrosseHuette`, `anzahlKleineHuette`, `name`, `email`, `telefon`, `anzahlErwachsene`, `anzahlKinder`, `geburtstagKind1..N`, `Geburtstage der Kinder`, `buchungswunsch`.
6. On successful POST the site redirects to `/buchung?erfolg=true`, which renders the "Anfrage erhalten!" confirmation instead of the form.

### Versioning / static assets

- Everything under `public/` is served at the site root (e.g. `public/agb.pdf` → `/agb.pdf`), copied verbatim into the export.
- Photos used on the site: `public/image*.png`, `cover`, `cta`, `mainpage-header@3x.png`, `sidepage-header@3x.png`, `calendar-1@2x.png`, `sonnenuntergang.png`. The `calendar-11@2x.png` and `*notification*.svg` files are unused legacy assets.
- PDFs `agb.pdf` and `hausordnung.pdf` are embedding PDFs, not generated from code.

## Known issues & things to be careful with

- **`public/transfer/` (45 JPGs, ≈233 MB) is untracked** and must stay that way for now — the owners intend to use some of these photos on the site later. Never commit them, and don't delete files there. `public/sonnenuntergang.png` is also untracked/in-use.
- **Stray file `1` at the repo root** contains shell-error text ("zsh: permission denied: /dev/null") — an accidental redirect. Leave it; it is not referenced by anything.
- **`public/transfer/` images are full-resolution JPGs** (several MB each). Anything served via `next/image` gets resized/re-encoded on the fly by Netlify Image CDN, so delivery is fine — but the source files still bloat the deploy. Keep them out of the repo until actually used.
- **Footer season dates are hardcoded** (`footer.tsx`: `Hauptsaison: 20.06. - 05.09.26`, `Vorsaison: 06.06. - 20.06.26`). These must be updated annually.
- **Accommodation prices** live in `index.tsx` (`RoomCard` "ab 40€" / "ab 52€") and descriptive text lives in `components/accommodations-container.tsx` / `container-link.tsx`.
- **Timeline component is dead code**: `components/timeline.tsx` is fully implemented (vis-timeline week selector, Sat–Sat weeks, season 01.06–31.10 of the selected year) but its render block is commented out in `buchung.tsx`. Only `Range` type is still imported there. Do not assume it renders on the live site.
- **No tests** and no CI configuration exist. Verify with `npm run build` (caveat: doesn't typecheck) or manual `npm run dev` testing.
- `nationalprops`: `PdfViewer.tsx` and the styled assets rely on `public/` paths; the PDF worker is fetched from `https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js` (runtime internet dependency).
- MUI component props (`DatePicker`, `TextField`) are typed loosely as `any` in this codebase — follow suit rather than fighting the types, unless a task specifically asks for typing improvements.