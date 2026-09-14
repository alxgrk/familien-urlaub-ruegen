# Content guide — how to edit the website's texts, prices, and media

This guide is for people who need to update content on the Familiencamp Rügen website (season dates, prices, descriptions, photos, contact details) **without rewriting application code**. It explains exactly which file to open and what to change.

> **Important:** All text on the site is German. After any change, the site must be rebuilt and published — see [deployment.md](deployment.md). The changes below are all in source files; none of it requires programming expertise, but you do need to make the edits carefully (keep quotation marks and punctuation intact).

## 1. Season dates (footer)

Shown at the bottom of every page.

- **File:** `components/footer.tsx`
- **Lines to edit (currently):**

  ```
  Hauptsaison: 20.06. - 05.09.26
  Vorsaison:   06.06. - 20.06.26
  ```

- **When:** a few weeks before each new season. Update the year in `.26`, and adjust dates if the season changes.
- **Note:** This is a known hardcoded item — it must be updated annually.

## 2. Accommodation prices (homepage cards)

- **File:** `pages/index.tsx`
- **Look for:** the two `RoomCard` usages.
  - Kleiner Bungalow → `price="ab 40€"`
  - Großer Bungalow → `price="ab 52€"`
  - `title="Kleiner Bungalow"` / `title="Großer Bungalow"` and `description="3 Betten"` / `description="Bis zu 6 Betten"` are right above.
- **Note:** the price reads "ab 40€ / Nacht" automatically (the `/ Nacht` suffix is added by the `RoomCard` component).

## 3. Accommodation descriptions (Unterkünfte page)

- **File:** `components/accommodations-container.tsx`
- Inside it, `ContainerLink` components carry the text:
  - Small house: `bisZu3Personen="Bis zu 3 Personen"`, `kleinesFerienhaus="Kleines Ferienhaus"`, and the descriptive paragraph `unserKleinesFerienhausIst="..."`.
  - Large house: `bisZu3Personen="Bis zu 6 Personen"`, `kleinesFerienhaus="Großes Ferienhaus"`, and its description.
- **Note:** the property names are legacy and misleading (`bisZu3Personen` is used for both houses). Change only the German strings, keep the surrounding quotes.

## 4. Community house text & capacity

- **File:** `pages/unterkuenfte.tsx`
- Look for "Das Gemeinschaftshaus", "Für gesellige Abende", "Bis zu 20 Personen", and the description paragraph.

## 5. Facilities / highlights on the homepage

- **File:** `pages/index.tsx`, in the `HighlightsSection`
- Sections: **Lage** (beach, forest, market, cycling), **Ausstattung** (coffee machine, fridge, kettle, microwave/grill, vacuum), **Gemeinschaft** (playhouse/TV house, outdoor kitchen, showers, parking, washing machines, ping-pong, volleyball).
- Update the `- item` bullet texts directly.

## 6. Contact details (Lage page)

- **File:** `pages/lage.tsx`
- Address card: "Zittkower Weg 18, 18556 Altenkirchen/Rügen, Deutschland"
- Phone card: `+49 151 64681052`
- Email card: `buchung@familien-urlaub-ruegen.de`
- Google Maps button: the `href` is a long link to "Campingplatz Drewoldke" — edit it if the pin should move.

> **Heads-up:** the phone number here differs from the one in the Impressum/Datenschutz (which belongs to the legally responsible person). Update each place separately.

## 7. Legal contact details (Impressum & Datenschutz)

- **File:** `pages/impressum.tsx` — company name "Rügen Grundstücks eGbR", representative "Julia Gommola Vukov", phone `+49 155 67184861`, email `info@familien-urlaub-ruegen.de`, tax ID `238/292/09187`, Finanzamt Grimma.
- **File:** `pages/dsgvo.tsx` — search for "Rügen Grundstücks GbR" (note: *without* the "e" — legacy) with address/phone `+49 151 64681052` / email `info@familien-urlaub-ruegen.de`. This is a long file; use search.

## 8. Terms & house rules (PDFs)

- The AGB and house rules are **PDF files**, not text: `public/agb.pdf` and `public/hausordnung.pdf`.
- To update them, replace the PDF file (keep the same filename), rebuild, and deploy. The `agb.tsx` page embeds whichever PDF is present.

## 9. Photos

- All photos used on the site sit in `public/` (see the file map in [architecture.md](architecture.md), section "Public assets").
- **To swap a photo:** replace the file at the same path with the same name (e.g. `public/image11@2x.png`), or change the `src` path in the component that uses it.
- **Photos that are still in `public/transfer/`** are a large gallery of full-resolution JPGs (~233 MB) saved for future use. They are *not* currently shown on the site and are **not** version-controlled. Before using them on a page, either move the chosen file to `public/` (outside `transfer/`), ideally optimize/compress it, because these images are several MB each and would slow the page down.

## 10. The wired form fields (Buchung page)

If the booking form needs a new field or a renamed label:

- **File:** `pages/buchung.tsx`
- Each input has a `name` attribute (e.g. `anreise`, `abreise`, `anzahlGrosseHuette`, `anzahlKleineHuette`, `name`, `email`, `telefon`, `anzahlErwachsene`, `anzahlKinder`, `geburtstagKind1..N`, `buchungswunsch`). These names are what Netlify sends in the submission email. If you rename a field, also tell the owners to watch for the new field name.
- Child birthday pickers appear automatically based on the "Anzahl Kinder" value.

## General checklist

- Keep German spelling and umlauts (ä, ö, ü, ß) — files are UTF-8.
- Keep the surrounding code intact: watch the `"` quotes and `{...}` / `<...>` syntax.
- After editing, run the build to make sure nothing broke (see [deployment.md](deployment.md), and note that the build does **not** fail on TypeScript errors — recheck your edits visually with `npm run dev` when possible).