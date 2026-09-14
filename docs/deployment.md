# Deployment — build and publish the site

How to produce the static site and publish it to Netlify.

## Prerequisites

- **Node.js 24** (see `.nvmrc`). Recommended: `nvm use` (or your version manager) in the project root.
- Dependencies installed once: `npm install`.
- Netlify account with access to the site (the site is hosted on Netlify, which also handles the booking-form submissions).

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server at http://localhost:3000 (hot reload) |
| `npm run build` | Production build into `.next/` |
| `npm run export` | `npm run build` + `next export -o build/` — the **deployable static site** |
| `npm run lint` | `next lint` |

## Build + deploy step by step

1. Make your content/code changes.
2. Sanity-check locally: `npm run dev`, open http://localhost:3000 and click through the pages (esp. the booking form, mobile menu, PDFs).
3. Build the static site:
   ```bash
   npm run export
   ```
   This creates/updates the `build/` directory.
4. **Important caveat:** the build does **not** catch TypeScript errors (`typescript.ignoreBuildErrors: true` is set on purpose). If you want a type check, run `npx tsc --noEmit` manually.
5. Publish `build/` to Netlify:
   - If Netlify is wired directly to the GitHub repository (`alxgrk/familien-urlaub-ruegen`), the standard option is a **Deploy Settings / CI** build command `npm run export` with **Publish directory** `build/`, then push to `main`. Any linked branch builds work the same way.
   - Alternatively, drag-and-drop: log in to the Netlify dashboard, open the site, and drop the `build/` folder onto the file upload area (this publish-simply workflow also creates a new "deploy").

## Verifying a deploy

- Open the live site and confirm:
  - All pages render (Homepage, Unterkünfte, Buchung, Lage, AGB, Impressum, Datenschutz).
  - Images and fonts load (they are copied from `public/` into `build/`).
  - **The booking form works**: submit a test booking and check the submission arrives (Netlify dashboard → **Forms**). The confirmation page should show "Anfrage erhalten!".
  - The PDF pages (AGB & Hausordnung) render — this requires the unpkg worker to be reachable from the visitor's browser.

## Netlify-specific notes

- **Forms:** the booking form is detected by Netlify via the `data-netlify="true"` + `data-netlify-honeypot="bot-field"` attributes and the hidden `form-name` input (see [booking-flow.md](booking-flow.md)). Submissions show up under **Forms → contact-form** and can be configured to email the owners from the Netlify admin; none of that lives in the code.
- **Static content only:** do not add server features (API routes, middleware, `getServerSideProps`) — the exported site has no Node server.
- **`public/transfer/`:** the large ~233 MB gallery of yet-unused JPGs is **not** committed and therefore not deployed; files only reach the live site when moved/added under `public/` and committed. This is intentional — do not deploy the whole folder.