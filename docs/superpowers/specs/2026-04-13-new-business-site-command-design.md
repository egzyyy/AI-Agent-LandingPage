# Design Spec: `/project:new-business-site` Claude Code Command

**Date:** 2026-04-13
**Status:** Approved
**Author:** egzyyy

---

## Overview

A Claude Code slash command at `.claude/commands/new-business-site.md` that generates a single self-contained business landing page — modelled on `DesignTemplate.tsx` from the `fullstack-landing` project — with all sections inline in one TSX file. The user passes 5 args; Claude generates one page file and patches 2 existing files.

This command is the **light-theme counterpart** to `/project:new-site` (dark/tech). It targets real-world service businesses: salons, clinics, restaurants, boutiques, gyms, cafes.

---

## Invocation

```
/project:new-business-site name="Mira Clinic" color="emerald" font="Playfair Display" industry="clinic" logo="heart-pulse"
```

### Arguments

| Arg | Type | Description |
|---|---|---|
| `name` | string | Brand name — used in navbar, footer, headings, copy |
| `color` | string | Tailwind accent color (e.g. `emerald`, `rose`, `amber`, `sky`, `violet`) |
| `font` | string | Google Font for headings (e.g. `Playfair Display`, `Lora`, `Outfit`, `DM Sans`) |
| `industry` | `salon` \| `clinic` \| `restaurant` \| `boutique` \| `gym` \| `cafe` | Determines content, services, stats, FAQ questions |
| `logo` | string | Lucide React icon name (e.g. `heart-pulse`, `scissors`, `utensils`, `dumbbell`) |

---

## Files Generated

Given `name="Mira Clinic"`, slug = `mira-clinic`, pascal = `MiraClinic`:

```
resources/js/pages/
  └── mira-clinic/
      └── BusinessSite.tsx     ← single self-contained page (all sections inline)
```

`App.tsx` is patched with 1 import + 1 route.
`index.css` is patched with a Google Fonts `@import`.

**Naming convention:**
- Directory/slug: kebab-case of `name` (e.g. `Mira Clinic` → `mira-clinic`)
- Component: PascalCase + `BusinessSite` (e.g. `MiraClinicBusinessSite`)
- Route: `/{slug}` (e.g. `/mira-clinic`)

---

## Architecture

### Single-File Design
`BusinessSite.tsx` is entirely self-contained. It defines its own local helpers (`Reveal`, `SectionLabel`, `Placeholder`) inline at the top of the file — exactly as `DesignTemplate.tsx` does. No imports from NeuralHelpers or any shared helper file.

This isolation means:
- The file works without any dependency on the NeuralForge design system
- The template can be understood and modified independently
- No risk of breaking NeuralForge pages

### Color Application
`{color}` is the Tailwind accent that replaces black in interactive/decorative elements only. The white/neutral backgrounds stay unchanged:

| Purpose | Token |
|---|---|
| Section number circles | `bg-{color}-500 text-white` |
| CTA button (primary) | `bg-{color}-600 hover:bg-{color}-700 text-white` |
| Active nav link | `text-{color}-600` |
| Icon containers | `bg-{color}-50 text-{color}-600` |
| Hover borders | `hover:border-{color}-400` |
| Contact icons | `text-{color}-500` |
| Accent text spans | `text-{color}-500` |

Black CTAs in the template become `{color}` CTAs. Dark footer (`bg-black`) stays black.

### Font Application
`{font}` is imported from Google Fonts in `index.css` and applied to all headings via an inline style on the outermost `<div>`. Body text stays `font-sans`.

### Industry Content Mapping

| `industry` | Navbar CTA | Services (6 items) | Stats (4 items) | FAQ category |
|---|---|---|---|---|
| `salon` | Book Appointment | Hair Cut, Hair Colour, Facial, Manicure, Pedicure, Makeup | Clients/month, Years open, Rating, Staff | Booking & pricing |
| `clinic` | Book Consultation | General Checkup, Specialist Referral, Vaccination, Dental, Eye Care, Pharmacy | Patients/month, Doctors, Satisfaction %, Years open | Appointments & coverage |
| `restaurant` | Reserve a Table | Dine-In, Takeaway, Private Dining, Catering, Weekend Brunch, Chef's Table | Covers/day, Menu items, Years, Locations | Reservations & menu |
| `boutique` | Shop Now | Ready-to-Wear, Custom Order, Alteration, Accessories, Seasonal Collection, Gift Wrapping | Items, Designers, Cities, Years | Sizing & returns |
| `gym` | Start Free Trial | Weight Training, Group Classes, Personal Training, Cardio Zone, Yoga, Nutrition | Members, Trainers, Equipment pieces, Years | Membership & cancellation |
| `cafe` | Order Now | Filter Coffee, Espresso, Pastries, All-Day Breakfast, Lunch Sets, Bottled Drinks | Cups/day, Blends, Seats, Years | Hours, WiFi & delivery |

---

## Page Sections (in order)

All 12 sections are inside one component, one file:

1. **Navbar** — sticky, transparent → white/blur on scroll, logo mark with `{LogoIcon}`, brand name, nav links (Home · About · Services · FAQ · Contact), CTA button in `{color}`
2. **Hero** — `min-h-screen`, two-column, badge/tagline, `<h1>` with `{color}` accent span, subtext, primary + secondary CTA, hero image placeholder with floating social-proof badge
3. **Stats** — `bg-black text-white`, 4-column grid with industry-appropriate numbers
4. **About / Story** — two-column, image placeholder left, 3-paragraph brand story right
5. **Mission / Vision / Values** — `bg-neutral-50`, 3-card grid with icon placeholder, bold heading, description
6. **Team** — 4-card `aspect-[3/4]` grid with photo placeholders, gradient overlay, name + role on hover
7. **Services / Price List** — alternating image + price-list layout, `RM XX` pricing, industry-specific items
8. **Testimonials** — two-column, intro text left, featured quote card right (blockquote + avatar placeholder)
9. **FAQ** — accordion with `AnimatePresence`, `ChevronDown` rotation, 3 industry-relevant Q&A pairs
10. **Contact** — two-column, info (address, phone, email, hours) left, form (name, phone, service select, message) right
11. **CTA Banner** — `bg-neutral-100`, centered headline + persuasive subtext + `{color}` CTA button
12. **Footer** — `bg-black text-neutral-400`, brand col + hours col + contact col, copyright

---

## Router Patch (`App.tsx`)

```tsx
// {name} business site
import {pascal}BusinessSite from './pages/{slug}/BusinessSite';
```

```tsx
        {/* {name} business site */}
        <Route path="/{slug}" element={<{pascal}BusinessSite />} />
```

No layout wrapper — the navbar and footer are inline in the component.

---

## CSS Patch (`index.css`)

```css
@import url('https://fonts.googleapis.com/css2?family={fontUrl}:wght@300;400;600;700;900&display=swap');
```

Added at line 1, before existing `@tailwind` directives.

---

## Constraints & Non-Goals

- Does **not** create multiple page files — everything is inline in `BusinessSite.tsx`
- Does **not** import from `NeuralHelpers.tsx` — helpers are defined locally
- Does **not** create a separate layout component
- Does **not** generate backend routes or controllers
- The `logo` arg must be a valid Lucide icon name — no validation performed
- Pricing values use `RM` prefix (Malaysian Ringgit) by default — appropriate for the target market
- Images use `<Placeholder>` components, not real URLs
