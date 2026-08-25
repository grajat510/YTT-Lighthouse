# Google Ads — Light House YTT & YRT

Operational playbook for Phase 4. Do not run ads until Phase 0 dates and Unsplash rooms are fixed (both done on this landing page).

## Landing URLs (message match)

| Ad group | Final URL |
|---|---|
| Brand / Light House | `https://YOUR_DOMAIN/?utm_source=google&utm_medium=cpc&utm_campaign=brand` |
| YTT (100 / 200 Hour) | `https://YOUR_DOMAIN/?utm_source=google&utm_medium=cpc&utm_campaign=ytt#ytt` |
| YRT (15 / 20 Day) | `https://YOUR_DOMAIN/?utm_source=google&utm_medium=cpc&utm_campaign=yrt#yrt` |

Add `gad=1` or rely on `gclid` so the splash screen is skipped for paid traffic.

## Conversion setup

1. Set `NEXT_PUBLIC_GA_ID` (e.g. `G-XXXXXXXX`) in Vercel / `.env.local`.
2. Primary conversion: click Apply (`data-conversion="apply"`) → official form.
3. Secondary: WhatsApp click (`data-conversion="whatsapp"`) and click-to-call `+91 9058729492`.
4. If Light House can add a thank-you / gtag on their registration confirmation page, import that as the primary offline-adjacent conversion.

## Campaigns

1. **Brand** — Light House, Sarvadaman Banerji, lighthousekrishna.
2. **YTT** — 100 hour / 200 hour yoga teacher training Rishikesh / India; CYT; dual cert (200 only).
3. **YRT** — 15 day / 20 day yoga retreat Rishikesh.

RSA themes from their language: banks of the Ganges, Shivalik, vegetarian meals, 15/20 days, Certified Yoga Teacher.

## Negatives (shared list)

online yoga teacher training, cheap ytt, 500 hour, donation, pankh, hotel only, mysore ashtanga (unless requested), free ytt, weekend ytt only.

## Remarketing

Audience: visited `/` (or `#ytt` / `#yrt`) but did not click Apply within 7–30 days. Creative stays YTT/YRT only — no Pankh, MTC, or wellness extras.

## Social proof

Use 2–4 Google reviews that mention YTT, the place, teachers, or the Ganges. Do not lead with MTC-only quotes on YTT ads.

## Do not bid on

Online YTT, 500-Hour, Pankh, donate, Align and Awake, Chittavishuddi, 3/5-day wellness as flagship.
