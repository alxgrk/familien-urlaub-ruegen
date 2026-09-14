# Website overview (plain language)

This page explains what the **Familiencamp Rügen** website is, what it does, and how it's built — without assuming any technical background.

## What the website is for

The site is the online home of **Familiencamp Rügen**, a family holiday camp run by **Rügen Grundstücks eGbR**. It has two jobs:

1. **Inform** — attract and inform visitors: show the two rental bungalows, the community house, the location on Rügen, and the facilities (beach 100–150 m away, forest site, shared kitchen, playground, etc.).
2. **Take booking inquiries** — let interested guests send a booking request through a web form. The form does **not** take payment and does **not** show real-time availability; it simply delivers messages so the owners can reply.

The whole site is in **German**.

## Pages on the site

| Page | Address | Purpose |
| --- | --- | --- |
| Homepage | `/` | Hero image, quick search ("book this period"), highlights, accommodation previews, CTA |
| Unterkünfte | `/unterkuenfte` | The two bungalows (Kleines / Großes Ferienhaus) + the community house |
| Buchung | `/buchung` | The booking-inquiry form |
| Lage | `/lage` | Address, phone, email, Google Maps link |
| AGB & Hausordnung | `/agb` | The terms & conditions and house rules, shown as embedded PDFs |
| Datenschutz | `/dsgvo` | Privacy notice (GDPR) |
| Impressum | `/impressum` | Legal notice / imprint |

## What happens when someone books

A visitor picks dates and number of guests on the homepage or the booking page, fills in the contact form, and clicks **Abschicken**. The message is delivered as a form submission to **Netlify** (the hosting company), which forwards it as an email notification to the owners. The visitor then sees a "Vielen Dank!" confirmation page.

There is no payment, no login, and no live calendar — all follow-up happens by email or phone.

## How the site is built

- **Framework:** Next.js (a React-based web framework). The site is compiled into **static files** (plain HTML/CSS/JavaScript) and hosted on **Netlify**.
- **Look & feel:** Custom design (originally generated with a "Locofy" tool from a Figma design). Styling uses the **Tailwind CSS** utility framework plus MUI components for the form fields and the mobile menu.
- **Photos & documents:** All images live in the `public/` folder. The terms (`agb.pdf`) and house rules (`hausordnung.pdf`) are uploaded PDF files that are simply embedded on the page.

## Key things to remember

- **The site cannot take bookings or payments automatically.** Requests arrive as messages that the owners answer manually. If you ever need online payments or a live availability calendar, that would be a new feature.
- **Content is not stored in a database.** Everything — texts, prices, dates — is written directly in the code files. Changing content means editing a file (see the [content guide](content-guide.md) for how).
- **The design was originally imported from Figma/Locofy**, which is why some class names in the code look odd (for example the teal color is called `rectangle-805`). That's normal for this project.