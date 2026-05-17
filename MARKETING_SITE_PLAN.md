# Marketing Site Plan - ptautorepair.ca

This file is the working plan for the P&T Auto Limited marketing site.

## Context

P&T Auto Limited needs a small public marketing site at `ptautorepair.ca`, hosted on Vercel.

The shop management SaaS app is a separate project and will eventually live at `app.ptautorepair.ca`. The marketing site should remain separate from that app.

Current subdomain split:

- `ptautorepair.ca` and `www.ptautorepair.ca` -> this marketing site
- `app.ptautorepair.ca` -> shop management app later
- `send.ptautorepair.ca` -> Resend email infrastructure, leave alone

## Goals

1. Replace the current Namecheap parking page with a legitimate business website.
2. Improve domain trust for transactional emails sent through Resend.
3. Create a credible customer-facing web presence for P&T Auto Limited.
4. Practice the Vercel deploy flow before deploying the shop management app.

## Business Details

- Business name: P&T Auto Limited
- Location: Grand Falls-Windsor, Newfoundland and Labrador
- Address: 1 Earle Street, Grand Falls-Windsor, NL A2A 2J9
- Phone: 709 489 2282
- Email: ptautoltd@gmail.com
- Hours:
  - Monday-Friday: 9:00 AM-5:00 PM
  - Saturday: 9:00 AM-flexible
  - Sunday: Closed
- Positioning: Clean, professional local auto repair shop. Family owned, established operation, practical and trustworthy rather than flashy.
- History: Family owned shop in operation since 1969 and incorporated in 1971. Run by Orville Penney, the owner's grandfather, now 86.
- Important positioning note: P&T Auto Limited is now an auto repair shop, not a vehicle dealer. Historic newspaper clippings may mention American Motors, Renault, used vehicle sales, or dealer activity, but those references should be presented only as archival history.

## Brand Direction

The brand should feel like a modern, capable 21st-century repair shop that has not forgotten where it came from. The site should be a homage to Orville Penney's legacy and the history of P&T Auto Limited, while still making it clear that the business today is a practical, technologically capable auto repair shop.

The orange/black logo provides a strong visual identity. The newspaper clippings, vintage ads, classic car photos, shop photos, and Orville photo should not be treated as throwaway nostalgia. They should carry the story: this is an established Grand Falls-Windsor shop with deep roots, family ownership, and decades of trust behind the current service work.

The overall feel should balance:

- Legacy: family-owned, serving the area since 1969, Orville Penney's role, archival newspaper material, old ads, classic vehicles.
- Modern capability: diagnostics, AC, engine repair, current service bays, clear contact information, clean responsive design, confident technical tone.
- Local credibility: real shop photos, real address, real phone number, no generic stock-photo feel.

Use the historic material carefully:

- Present it as heritage, archive, history, and proof of continuity.
- Do not imply current dealership status.
- Do not list American Motors, Renault, used vehicle sales, or vehicle dealer services as current offerings.
- Keep current services front and center: exhaust, brakes, suspension, oil changes, tires, diagnostics, AC, and engine repair.
- Use copy such as "serving Grand Falls-Windsor since 1969", "family owned for generations", and "modern repairs backed by decades of local trust".

## Services

P&T Auto Limited specializes in:

- Exhaust
- Brakes
- Suspension
- Oil changes
- Tires
- Diagnostics
- Air conditioning
- Engine repair

## Build Direction

- Host: Vercel
- Suggested stack: Next.js App Router, static one-page site
- Contact form: out of scope for v1
- Booking flow: out of scope for v1
- Blog/CMS: out of scope for v1
- Style: clean and professional, but still clearly an auto repair shop

## Asset Intake

Place provided assets in:

- `public/assets/logos/` - logo files, wordmarks, alternate logo versions
- `public/assets/photos/` - shop exterior, bays, vehicles, team, equipment, or local business photos
- `public/assets/favicon/` - favicon or icon source files

Preferred formats:

- Logos: SVG, PNG, or high-quality JPG
- Photos: JPG or PNG, original resolution preferred
- Favicon source: SVG, PNG, or ICO

After assets are added, review them before final styling and choose the best ones for the homepage.

## Minimum Content For V1

The v1 site should include:

- Business name and tagline
- Short description of the shop
- Family-owned/history section
- Services list
- Hours
- Address
- Phone number
- Email
- Favicon
- Footer with copyright line

No contact form for v1. Contact info should be clearly displayed instead.

## DNS Changes

Apply these only after the Vercel deployment works successfully.

In Namecheap, on the `ptautorepair.ca` domain:

1. Remove the URL Redirect at `@` pointing to `http://www.ptautorepair.ca/`.
2. Remove the `www` CNAME pointing to `parkingpage.namecheap.com.`.
3. Add the apex record for `@` exactly as Vercel specifies.
4. Add the `www` CNAME exactly as Vercel specifies.
5. Leave these email records alone:
   - `resend._domainkey` TXT
   - `send` TXT
   - `send` MX
   - `_dmarc` TXT
6. Optional later improvement: update `_dmarc` from `v=DMARC1; p=none;` to include aggregate reporting once a receiving inbox exists for the reporting address.

## Acceptance Criteria

- `https://ptautorepair.ca` loads the new site.
- `https://www.ptautorepair.ca` loads the same site or redirects cleanly.
- HTTPS certificate is valid.
- No mixed content warnings.
- Lighthouse scores are at least 90 for Performance, Accessibility, Best Practices, and SEO.
- A `mail-tester.com` test email from the app's Resend setup improves compared with the pre-change baseline.

## Out Of Scope

- Changes to the shop management app
- Deploying `app.ptautorepair.ca`
- Email infrastructure changes
- Booking system
- Customer portal
- Contact form
- Dynamic integrations
