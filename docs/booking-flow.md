# The booking-inquiry flow — end to end

How a visitor's booking request travels from the homepage to the owners' mailbox — and where in the code each step happens.

## The short version

1. Visitor picks **Anreise/Abreise dates + number of adults/children** (on the homepage).
2. Clicking **Verfügbarkeit prüfen** opens the booking page **pre-filled** with those values (via URL parameters).
3. Visitor fills the **Kontaktformular** (dates, both houses, name, email, phone, adults, children, children's birthdays, free-text request) and hits **Abschicken**.
4. The browser posts the data to **Netlify Forms**. Netlify stores the submission, emails a notification to the owners, and redirects the visitor back to the booking page.
5. The booking page sees the success marker in the URL and shows **"Anfrage erhalten!"** instead of the form.

There is no availability calendar, no payment, and no automatic reply — the owners answer personally.

## Step by step, with code references

### 1. Homepage quick search (`pages/index.tsx`, `BookingStrip`)

- Defaults: arrival = today, departure = arrival + 7 days, 2 adults, 0 children.
- Departure can never be earlier than arrival + 7 days (enforced when selecting).
- On submit the handler builds a URL and navigates:

  ```
  router.push(`/buchung?anreise=${anreise.toISOString()}&abreise=${abreise.toISOString()}&numErwachsene=${numErwachsene}&numKinder=${numKinder}`)
  ```

  e.g. `/buchung?anreise=2026-06-20T00:00:00.000Z&abreise=2026-06-27T00:00:00.000Z&numErwachsene=2&numKinder=1`

### 2. Booking page reads the URL (`pages/buchung.tsx`)

- `parseQueryParam` reads each query value as an integer (with fallback defaults, e.g. `numErwachsene` → 2, `numKinder` → 0).
- The arrival/departure strings are converted to `Date` and stored as the initial `Range` (`{ start, end }`) shown in the two date pickers.

### 3. The form itself

The form carries these **Netlify attributes** (required for Netlify to detect and process it):

```html
<form data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="contact-form"
      method="POST"
      action="/buchung?erfolg=true">
```

- `data-netlify="true"` — tell Netlify this is a form.
- `data-netlify-honeypot="bot-field"` — the anti-spam honeypot.
- hidden input `name="form-name" value="contact-form"` — part of Netlify's form detection.
- `action="/buchung?erfolg=true"` — where the browser goes after submit.

#### Fields sent to Netlify

| Field name | Source |
| --- | --- |
| `anreise` | arrival DatePicker |
| `abreise` | departure DatePicker |
| `anzahlGrosseHuette` | number field "Große Hütten" |
| `anzahlKleineHuette` | number field "Kleine Hütten" |
| `name` | text field |
| `email` | email field |
| `telefon` | phone field (optional) |
| `anzahlErwachsene` | adults |
| `anzahlKinder` | children |
| `geburtstagKind1`, `geburtstagKind2`, … | one DatePicker per child (rendered dynamically) |
| `Geburtstage der Kinder` | hidden hidden-input with formatted birthdays |
| `buchungswunsch` | the free-text textarea |
| `bot-field` | honeypot (expected to stay empty) |

Note the "Große Hütten" / "Kleine Hütten" labels still use the legacy word *Hütte* (the marketing text now says *Bungalow* / *Ferienhaus*). Renaming goes through `pages/buchung.tsx` — see [content-guide.md](content-guide.md#10-the-wired-form-fields-buchung-page).

### 4. Success state

- Netlify posts the form data (default behavior: same form data POSTed; the page just stays/redirects).
- When the URL contains `?erfolg=true`, `buchung.tsx` treats the submission as successful and renders the **"Anfrage erhalten!"** block with a link back to the homepage.

## Where Netlify fits

- Netlify both **hosts** the static site and **collects the form submissions** (Netlify Forms).
- Submissions arrive in the Netlify dashboard under **Forms → contact-form** and are forwarded as email notifications configured in the Netlify admin — not in the code.
- There is no server logic in this repo (static export only); the form works entirely via Netlify's built-in handling.

## Testing the flow locally

1. `npm run dev` → open http://localhost:3000, choose dates on the homepage, verify the `/buchung?…` URL pre-fills the form.
2. Submitting the form locally does **not** reach Netlify (no deployed site/domain) — a successful deploy is required to receive real submissions.
3. To test the confirmation view without a real submission, open `/buchung?erfolg=true` directly in the browser.