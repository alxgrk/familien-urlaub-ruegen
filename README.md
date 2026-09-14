# familien-urlaub-ruegen

German-language static website for **Familiencamp Rügen** (Rügen Grundstücks eGbR) — a family holiday camp on Rügen with two rental bungalows, a community house, and a booking-inquiry form.

## Tech

Next.js 13 (static export) · React 18 · TypeScript · Tailwind CSS · MUI v5 · @react-pdf-viewer · deployed to Netlify (via `next export` → `build/`).

## Quick start

```bash
nvm use        # Node 24
npm install
npm run dev    # http://localhost:3000
```

```bash
npm run export # static site into build/  (Netlify publish directory)
```

Note: the build deliberately doesn't typecheck (`typescript.ignoreBuildErrors: true`); use `npx tsc --noEmit` for a type check.

## Docs

- [AGENTS.md](AGENTS.md) — developer/agent reference with all technical details and pitfalls
- [docs/](docs/README.md) — human-centered documentation (overview, content editing, booking flow, architecture, deployment)