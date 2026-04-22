# Dimple Beauty Salon — PRD

## Original Problem Statement
Build a marketing website for **Dimple Beauty Salon (Only For Ladies)** — a women-owned beauty parlour at Giriraj Darshan CHS, Sector 9, Kopar Khairane Road, Navi Mumbai 400709. 4.6★ on Google with 258+ reviews. Phone: 098678 73647. LGBTQ+ friendly. Open till 9 PM. Services include hair, skin, nails, waxing, spa, bridal makeup.

## User Choices (Feb 2026)
- **Scope:** Marketing site only — Home, Services, Gallery, About, Contact
- **Design:** Luxury & modern (deep emerald #064E3B + gold #C5A059, editorial Vogue feel)
- **Language:** Bilingual EN / हिंदी toggle
- **Contact method:** WhatsApp + click-to-call redirect to 098678 73647
- **Images:** Curated stock images everywhere; owner will upload actual gallery photos later

## Architecture
- **Frontend:** React 19 (CRA + CRACO), Tailwind CSS, shadcn/ui available, lucide-react icons, react-router-dom, single-page scroll site
- **Fonts:** Cormorant Garamond (serif display) + DM Sans (body) via Google Fonts
- **Backend:** FastAPI + MongoDB template unchanged — no backend logic added (pure marketing)
- **State:** React Context for language (EN/HI) with localStorage persistence
- **Animations:** CSS reveal on scroll via IntersectionObserver, slow-zoom hero, marquee strip, subtle hover scales

## What's Been Implemented (Feb 2026 — initial release)
- Sticky navbar with logo, anchor nav, EN/हिंदी toggle, desktop Call CTA, mobile drawer
- Hero with editorial split layout, dual CTAs (WhatsApp + Call), 4.6★ Google rating + open-now indicator, "Since 2014" badge, animated marquee strip
- About section with image + 10+ year badge, 4 stats (years, rating, reviews, ladies-only), trust badges
- Services bento grid (6 editorial tiles): Hair Studio, Skin & Facials, Nail Atelier, Waxing & Threading, Body Spa, Bridal & Makeup — each with tags
- Gallery with asymmetric grid (5 stock tiles + 1 dashed placeholder for owner's upcoming photos)
- Testimonials (3 real Google reviews: Ashwini, Pallavi, Aisha)
- Contact with Studio Address, Hours, Phone, Instagram, **live Google Maps embed** showing actual Dimple Beauty Salon location, Open-in-Maps link, WhatsApp + Call CTAs
- Dark emerald footer with tagline, studio address, contact, hours, year
- Floating sticky actions (WhatsApp green-pulse + Call emerald) in bottom-right
- Full bilingual translations for every string (including testimonials, marquee, stats, services)
- All interactive elements carry unique `data-testid` attributes

## User Personas
1. **Local Navi Mumbai woman** looking for a trusted neighbourhood salon → lands, sees 4.6★ + 10 years trust, taps Call/WhatsApp
2. **Bride-to-be** researching bridal packages → scans Services bento, reads testimonials, opens on Maps
3. **Hindi-first visitor** → toggles हिंदी, reads everything natively, calls salon

## Testing
- Iteration 1: 100% pass (26/26 assertions). All data-testids present, CTAs link correctly, map iframe loads, language toggle works, mobile menu opens at 390px.

## Prioritized Backlog
- **P1** — Image upload CMS so owner can upload real gallery photos without redeploying (object storage + simple admin page)
- **P1** — WhatsApp message pre-fill with service context when a specific service tile is tapped
- **P2** — Service price sheet PDF download + hidden price hints on cards
- **P2** — Appointment booking (pick service + date + time, persisted to MongoDB with owner notification)
- **P2** — Google Reviews live feed via Places API
- **P3** — Bridal lookbook page with before/after slider
- **P3** — Instagram feed embed on gallery
- **P3** — Marathi as a third language option

## Next Tasks
- Collect real interior photos from owner and replace placeholder tile
- Verify business hours for all 7 days (currently single "Open till 9 PM" line)
- Add favicon + OG social image with brand marks
