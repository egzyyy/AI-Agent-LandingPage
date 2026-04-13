# `/project:new-business-site` Command Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create `.claude/commands/new-business-site.md` — a Claude Code slash command that generates a single self-contained light-theme business landing page (all 12 sections inline) from 5 args: name, color, font, industry, logo.

**Architecture:** One markdown prompt file in `.claude/commands/`. When invoked, Claude generates one `BusinessSite.tsx` file with local helpers + all sections inline, patches `App.tsx` with one route, and patches `index.css` with a Google Fonts import. No separate layout file, no NeuralHelpers dependency.

**Tech Stack:** Claude Code custom commands, React 19, TypeScript, Tailwind CSS v4, `motion/react`, `lucide-react`, Google Fonts CDN

---

## File Map

| Action | File | Responsibility |
|---|---|---|
| **Create** | `.claude/commands/new-business-site.md` | The entire slash command prompt |
| *Generated at runtime* | `resources/js/pages/{slug}/BusinessSite.tsx` | Self-contained single-page site (12 sections) |
| *Patched at runtime* | `resources/js/App.tsx` | 1 import + 1 route |
| *Patched at runtime* | `resources/js/index.css` | Google Fonts `@import` |

> This is a prompt-authoring task. Verification is a manual smoke test in Task 2.

---

## Task 1: Write the complete `new-business-site.md` command file

**Files:**
- Create: `.claude/commands/new-business-site.md`

- [ ] **Step 1: Create `.claude/commands/new-business-site.md` with the full prompt**

Create the file at `.claude/commands/new-business-site.md` with this exact content:

````markdown
You are a business site scaffolder for a Laravel + React + Tailwind project. The user has invoked `/project:new-business-site` with these arguments:

$ARGUMENTS

Follow every step below in order. Do not skip steps. Do not ask for confirmation. Generate all files completely.

---

## Step 1 — Parse arguments

Extract these named arguments from `$ARGUMENTS`:
- `name` — brand name (e.g. `Mira Clinic`, `Sofea Beauty`)
- `color` — Tailwind accent color (e.g. `emerald`, `rose`, `amber`, `sky`, `violet`)
- `font` — Google Font for headings (e.g. `Playfair Display`, `Lora`, `Outfit`, `DM Sans`)
- `industry` — one of: `salon` | `clinic` | `restaurant` | `boutique` | `gym` | `cafe`
- `logo` — Lucide React icon name in lowercase (e.g. `heart-pulse`, `scissors`, `utensils`, `dumbbell`, `coffee`)

Then derive:
- **slug**: kebab-case of `name`, all lowercase, spaces → hyphens, no special chars (e.g. `Mira Clinic` → `mira-clinic`, `SofeaBeauty` → `sofeabeauty`)
- **pascal**: PascalCase of `name`, no spaces (e.g. `Mira Clinic` → `MiraClinic`)
- **LogoIcon**: PascalCase of the `logo` arg (e.g. `heart-pulse` → `HeartPulse`, `scissors` → `Scissors`)
- **fontUrl**: `font` arg with spaces replaced by `+` (e.g. `Playfair Display` → `Playfair+Display`)

> If any required argument is missing from `$ARGUMENTS`, stop and ask the user to provide it before proceeding.

---

## Step 2 — Color token reference

`{color}` is the accent replacing black on interactive/decorative elements. White and neutral backgrounds stay unchanged.

| Purpose | Token |
|---|---|
| Section number circle | `bg-{color}-500 text-white` |
| Primary CTA button | `bg-{color}-600 hover:bg-{color}-700 text-white` |
| Active nav link | `text-{color}-600` |
| Nav link hover | `hover:text-{color}-500` |
| Icon containers | `bg-{color}-50 text-{color}-600` |
| Hover borders | `hover:border-{color}-400` |
| Contact icons | `text-{color}-500` |
| Accent heading spans | `text-{color}-500` |
| Input focus border | `focus:border-{color}-400` |

The dark footer (`bg-black`) and stats bar (`bg-black`) stay black regardless of `{color}`.

---

## Step 3 — Industry content reference

Use this table to populate section content. Substitute literally for the `{industry}` arg.

**Navbar CTA label:**
- salon → `Book Appointment`
- clinic → `Book Consultation`
- restaurant → `Reserve a Table`
- boutique → `Shop Now`
- gym → `Start Free Trial`
- cafe → `Order Now`

**Hero headline (first line / accent line):**
- salon → `Beauty & Care,` / `Redefined.`
- clinic → `Your Health,` / `Our Priority.`
- restaurant → `Great Food,` / `Every Time.`
- boutique → `Style That` / `Speaks for You.`
- gym → `Train Hard,` / `Live Strong.`
- cafe → `Great Coffee,` / `Every Morning.`

**Hero subtext (2 sentences):**
- salon → `Experience premium hair and beauty treatments in a relaxing environment. From haircuts to facials, we take care of everything for you.`
- clinic → `Comprehensive healthcare services delivered by experienced professionals. Your wellness journey starts with a single consultation.`
- restaurant → `Fresh ingredients, bold flavours, and a dining experience you'll want to relive. Book your table and let us take care of the rest.`
- boutique → `Curated fashion for every occasion, from ready-to-wear to custom pieces. Visit us and discover your next favourite outfit.`
- gym → `State-of-the-art equipment, expert trainers, and a community that keeps you motivated. Your transformation starts today.`
- cafe → `Specialty coffee sourced from the finest farms, paired with freshly baked pastries. Come in and stay awhile.`

**Stats (4 items, industry-appropriate numbers):**
- salon → `500+ / Clients/Month`, `8 / Years Open`, `4.9★ / Rating`, `12 / Stylists`
- clinic → `1,200+ / Patients/Month`, `15 / Doctors`, `98% / Satisfaction`, `10 / Years Open`
- restaurant → `300+ / Covers/Day`, `80 / Menu Items`, `3 / Locations`, `12 / Years Open`
- boutique → `2,000+ / Items`, `40+ / Designers`, `5 / Cities`, `8 / Years Open`
- gym → `800+ / Members`, `20 / Trainers`, `5,000 sqft / Space`, `6 / Years Open`
- cafe → `500+ / Cups/Day`, `12 / Blends`, `60 / Seats`, `5 / Years Open`

**Services (6 items with RM prices):**
- salon → `Hair Cut / RM 60`, `Hair Colour / RM 150`, `Facial Treatment / RM 120`, `Manicure / RM 50`, `Pedicure / RM 60`, `Bridal Makeup / RM 350`
- clinic → `General Checkup / RM 80`, `Specialist Referral / RM 150`, `Vaccination / RM 60`, `Dental Cleaning / RM 100`, `Eye Screening / RM 90`, `Health Screening / RM 200`
- restaurant → `Set Lunch (2 courses) / RM 35`, `Set Dinner (3 courses) / RM 75`, `Weekend Brunch / RM 45`, `Private Dining (min 8 pax) / RM 120pp`, `Catering Package / RM 80pp`, `Chef's Tasting Menu / RM 180`
- boutique → `Ready-to-Wear / from RM 150`, `Custom Order / from RM 400`, `Alteration / from RM 30`, `Accessories / from RM 50`, `Seasonal Collection / from RM 200`, `Gift Wrapping / RM 15`
- gym → `Monthly Membership / RM 99`, `Personal Training (1hr) / RM 120`, `Group Class / RM 25`, `Day Pass / RM 30`, `Nutrition Plan / RM 200`, `Corporate Package / RM 79/pax`
- cafe → `Filter Coffee / RM 8`, `Espresso / RM 10`, `All-Day Breakfast / RM 22`, `Lunch Set / RM 18`, `House Pastry / RM 9`, `Bottled Cold Brew / RM 14`

**FAQ (3 Q&A pairs):**
- salon → `Do I need to book in advance? / Yes, we recommend booking at least 2 days in advance. Walk-ins are welcome based on availability.` | `What payment methods do you accept? / We accept cash, credit/debit card, and e-wallet (Touch 'n Go, GrabPay).` | `Do you offer student discounts? / Yes, 10% discount with valid student ID on selected services.`
- clinic → `Do I need a referral to see a specialist? / No referral needed. You can book directly with any of our specialists online or by phone.` | `Is my insurance accepted? / We accept most major insurance panels. Please call ahead to confirm your plan.` | `How early should I arrive for my appointment? / We recommend arriving 10 minutes early to complete registration.`
- restaurant → `Do you accept walk-ins? / Yes, though we recommend reservations for weekends and public holidays.` | `Is there a minimum spend for reservations? / No minimum spend for standard bookings. Private dining requires a deposit.` | `Do you cater for dietary restrictions? / Yes — vegetarian, vegan, gluten-free, and halal options are available.`
- boutique → `What is your return policy? / Items in original condition with tags can be returned within 14 days for exchange or store credit.` | `Do you offer custom sizing? / Yes, all custom orders include 2 complimentary fitting sessions.` | `How long does a custom order take? / Typically 3–4 weeks from confirmation of design and deposit.`
- gym → `Is there a joining fee? / No joining fee for the first month — just your monthly membership.` | `Can I freeze my membership? / Members can freeze for up to 2 months per year with 7 days notice.` | `Do you offer a free trial? / Yes — first 3 days free for new members. No credit card required.`
- cafe → `What are your opening hours? / Mon–Fri: 8am–6pm, Sat–Sun: 9am–5pm. Closed on public holidays.` | `Do you have WiFi? / Yes, complimentary high-speed WiFi for all customers.` | `Do you offer delivery? / Yes, via GrabFood and Foodpanda within a 5km radius.`

**Mission/Vision/Values (3 items, tailored to industry):**
- salon → `Mission: Empower every client to feel their most confident self.` | `Vision: Become the most trusted beauty destination in the city.` | `Values: Creativity · Care · Consistency`
- clinic → `Mission: Deliver compassionate, evidence-based healthcare to every patient.` | `Vision: A healthier community, one consultation at a time.` | `Values: Integrity · Expertise · Compassion`
- restaurant → `Mission: Create memorable dining experiences with honest, seasonal food.` | `Vision: A table for everyone — no pretension, just great cooking.` | `Values: Quality · Hospitality · Sustainability`
- boutique → `Mission: Help every customer discover their signature style.` | `Vision: Fashion that is personal, sustainable, and joyful.` | `Values: Craftsmanship · Inclusivity · Originality`
- gym → `Mission: Help members build strength, confidence, and lasting habits.` | `Vision: The most results-driven fitness community in the region.` | `Values: Discipline · Community · Progress`
- cafe → `Mission: Serve exceptional coffee that brightens your day.` | `Vision: A neighbourhood cafe where everyone feels at home.` | `Values: Craft · Warmth · Consistency`

---

## Step 4 — Generate the single-file business site

**Path:** `resources/js/pages/{slug}/BusinessSite.tsx`

This is one self-contained TSX file. Define local helpers at the top (do NOT import from NeuralHelpers). Then render all 12 sections inside one default export component.

### Local helpers (define before the export)

```tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight, Star, MapPin, Phone, Mail, Clock, Menu, X, {LogoIcon} } from 'lucide-react';

function Reveal({ children, className = '', delay = 0, direction = 'up' }: {
  children: React.ReactNode; className?: string; delay?: number; direction?: 'up' | 'down' | 'left' | 'right';
}) {
  const dirs: Record<string, object> = { up: { y: 30 }, down: { y: -30 }, left: { x: 30 }, right: { x: -30 } };
  return (
    <motion.div
      initial={{ opacity: 0, ...dirs[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ number, title }: { number: number; title: string }) {
  return (
    <Reveal>
      <div className="flex items-center gap-3 mb-8">
        <span className="w-8 h-8 rounded-full bg-{color}-500 text-white text-sm font-bold flex items-center justify-center shrink-0">{number}</span>
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">Section {number} — {title}</span>
        <div className="grow h-px bg-neutral-200" />
      </div>
    </Reveal>
  );
}

function Placeholder({ label, className = '', dark = false }: { label: string; className?: string; dark?: boolean }) {
  return (
    <div className={`border-2 border-dashed ${dark ? 'border-neutral-600 bg-neutral-800' : 'border-neutral-300 bg-neutral-50'} rounded-xl flex items-center justify-center p-4 ${className}`}>
      <span className={`text-xs font-mono uppercase tracking-wider ${dark ? 'text-neutral-400' : 'text-neutral-400'}`}>{label}</span>
    </div>
  );
}
```

### Component structure

```tsx
export default function {pascal}BusinessSite() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // scroll listener for navbar
  // useEffect(() => { ... window.scrollY > 20 ... }, []);

  return (
    <div className="bg-white text-black min-h-screen font-sans selection:bg-black selection:text-white"
         style={{ '--heading-font': '"{font}"' } as React.CSSProperties}>
      {/* Section 0: Navbar */}
      {/* Section 1: Hero */}
      {/* Section 2: Stats */}
      {/* Section 3: About */}
      {/* Section 4: Mission/Vision/Values */}
      {/* Section 5: Team */}
      {/* Section 6: Services */}
      {/* Section 7: Testimonials */}
      {/* Section 8: FAQ */}
      {/* Section 9: Contact */}
      {/* Section 10: CTA Banner */}
      {/* Section 11: Footer */}
    </div>
  );
}
```

Apply `style={{ fontFamily: '"{font}", serif' }}` on heading elements (`h1`, `h2`, `h3`).

### Section 0 — Navbar

Sticky top, `z-50`. When scrolled: `bg-white/90 backdrop-blur-md shadow-sm border-b border-neutral-100 py-3`. When not scrolled: `bg-transparent py-5`.

- Left: `{LogoIcon}` icon in a `w-9 h-9 rounded-xl bg-{color}-600 flex items-center justify-center text-white` div, then brand name text `{name}` — last word in `text-{color}-600`
- Center (desktop): nav links `['Home', 'About', 'Services', 'FAQ', 'Contact']` as `<button>` elements (no routing needed — smooth scroll targets), active link `text-{color}-600`, inactive `text-neutral-400 hover:text-{color}-500`
- Right (desktop): primary CTA `<button>` in `bg-{color}-600 hover:bg-{color}-700 text-white px-5 py-2.5 rounded-full text-sm font-medium` with industry CTA label
- Mobile: hamburger toggle, `AnimatePresence` overlay (`initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.25 }}`) with large nav links and full-width CTA button

### Section 1 — Hero

`<section className="py-24 bg-white border-b border-neutral-100">` with `min-h-[90vh] flex items-center`.

Two-column `lg:grid-cols-2 gap-16 items-center`:

Left:
- Badge: `<span className="inline-block py-1 px-3 rounded-full bg-{color}-50 text-{color}-700 text-sm font-medium mb-6">` with a relevant emoji + short tagline for the industry
- `<h1>` with two lines — first line white text, second line in `text-{color}-500` italic — use industry hero headline from Step 3
- Subtext paragraph from Step 3
- Two buttons: primary (`bg-{color}-600 hover:bg-{color}-700 text-white px-8 py-4 rounded-full ... flex items-center`) + secondary (`bg-white border-2 border-neutral-200 hover:border-{color}-400 px-8 py-4 rounded-full`)

Right:
- `<div className="relative h-[500px]">`
- `<Placeholder label="Hero Image" className="h-full !rounded-3xl" />`
- Floating badge: `absolute -bottom-4 -left-4 bg-white border-2 border-neutral-200 p-4 rounded-2xl shadow-lg flex items-center gap-3` with a `<Star>` icon in `bg-{color}-100 rounded-full` + social proof text

### Section 2 — Stats

`<section className="py-20 bg-black text-white border-b border-neutral-800">`

4-column grid, `text-center`. Each stat:
- Large number: `text-4xl md:text-5xl font-bold text-white mb-2`
- Label: `text-neutral-500 text-xs uppercase tracking-[0.15em]`

Use industry stats from Step 3. First stat has no left border; others have `border-l border-neutral-800`.

### Section 3 — About / Story

`<section className="py-24 bg-white border-b border-neutral-100">`

`SectionLabel number={3} title="About / Story"`

Two-column `lg:grid-cols-2 gap-16 items-center`:
- Left: `<Placeholder label="About Image" className="h-[450px] !rounded-3xl" />`
- Right: `<h2>` heading, 3 paragraphs of brand story tailored to the industry (invent professional founding story, growth, and current mission)

### Section 4 — Mission / Vision / Values

`<section className="py-24 bg-neutral-50 border-b border-neutral-100">`

`SectionLabel number={4} title="Mission / Vision / Values"`

3-column card grid:
```tsx
<div className="bg-white p-10 rounded-3xl border-2 border-neutral-100 text-center hover:border-{color}-400 transition-all">
  <div className="w-16 h-16 rounded-full bg-{color}-50 text-{color}-600 flex items-center justify-center mx-auto mb-6">
    <Placeholder label="Icon" className="w-16 h-16 !rounded-full !border-{color}-200" />
  </div>
  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
  <p className="text-neutral-500 leading-relaxed text-sm">{item.desc}</p>
</div>
```

Use Mission/Vision/Values content from Step 3.

### Section 5 — Team

`<section className="py-24 bg-white border-b border-neutral-100">`

`SectionLabel number={5} title="Our Team"`

Centered heading + subtext, then `grid grid-cols-2 lg:grid-cols-4 gap-6`:
- Each card: `group relative overflow-hidden rounded-3xl bg-neutral-100 aspect-[3/4] cursor-pointer border-2 border-transparent hover:border-{color}-400 transition-all`
- `<Placeholder label="Photo {i}" className="!h-full !rounded-3xl !border-0" />`
- Gradient overlay: `absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent`
- Name + role text at bottom: `absolute bottom-0 left-0 w-full p-5 text-white`
- Invent 4 realistic team members with names and roles appropriate to the industry

### Section 6 — Services / Price List

`<section className="py-24 bg-neutral-50 border-b border-neutral-100">`

`SectionLabel number={6} title="Services / Price List"`

Centered heading + subtext. Then a flex column-row layout:
```tsx
<div className="flex flex-col lg:flex-row gap-12 mb-20">
  <div className="w-full lg:w-5/12">
    <Placeholder label="Service Category Image" className="h-[400px] !rounded-3xl" />
    <div className="mt-4 flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-{color}-50 flex items-center justify-center text-{color}-600">
        <{LogoIcon} size={18} />
      </div>
      <span className="font-bold text-lg">Our Services</span>
    </div>
  </div>
  <div className="w-full lg:w-7/12 flex flex-col justify-center">
    {/* 6 service items as price list rows */}
    {/* Each row: service name left, dotted line, RM price right */}
    {/* border-b border-neutral-200 py-6 hover:border-{color}-400 */}
  </div>
</div>
```

Use 6 service items from Step 3. Format: `service name` left, dashed spacer, `RM XX` right in `font-bold`.

### Section 7 — Testimonials

`<section className="py-24 bg-white border-b border-neutral-100">`

`SectionLabel number={7} title="Testimonials"`

Two-column `lg:grid-cols-2 gap-16 items-center`:
- Left: `<h2>` heading, short intro paragraph, 3 dot indicators (first in `bg-black`, rest in `bg-neutral-200`)
- Right: quote card `bg-white p-10 rounded-3xl border-2 border-neutral-100 shadow-lg`:
  - Large quotation mark SVG in `text-neutral-200`
  - Italic testimonial quote (invent realistic review for the industry)
  - Avatar: `<Placeholder label="Avatar" className="w-12 h-12 !rounded-full shrink-0" />` + customer name + role/label

### Section 8 — FAQ

`<section className="py-24 bg-neutral-50 border-b border-neutral-100">`

`SectionLabel number={8} title="FAQ"`

Centered heading + subtext. Then accordion card:
```tsx
<div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl border-2 border-neutral-100 shadow-sm">
  {faqItems.map((item, i) => (
    <div key={i} className="border-b border-neutral-100 last:border-b-0">
      <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
        className="w-full text-left py-5 flex justify-between items-center group">
        <span className="text-base font-medium group-hover:text-{color}-600 transition-colors">{item.q}</span>
        <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.3 }}
          className="text-neutral-300 group-hover:text-{color}-500 shrink-0 ml-4">
          <ChevronDown size={18} />
        </motion.div>
      </button>
      <AnimatePresence>
        {openFaq === i && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="pb-5 text-neutral-500 leading-relaxed text-sm">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  ))}
</div>
```

Use 3 FAQ Q&A pairs from Step 3.

Below the accordion:
```tsx
<Reveal delay={0.2} className="text-center mt-12">
  <p className="text-neutral-400 text-sm mb-4">Still have questions?</p>
  <button className="bg-{color}-600 hover:bg-{color}-700 text-white px-8 py-3 rounded-full text-sm font-medium transition-all">
    Contact Us
  </button>
</Reveal>
```

### Section 9 — Contact

`<section className="py-24 bg-white border-b border-neutral-100">`

`SectionLabel number={9} title="Contact"`

Two-column `lg:grid-cols-2 gap-16`:

Left (info):
- `<h2>` heading
- 4 info rows: Address / Phone / Email / Operating Hours — each with icon in `w-12 h-12 bg-{color}-50 rounded-full text-{color}-500` + label + value
- Invent plausible contact details appropriate to the industry and Malaysian context

Right (form): `bg-neutral-50 p-10 rounded-3xl border-2 border-neutral-100`
- `<h2>` "Send a Message"
- Fields: Full Name (text), 2-col row [Phone (tel) + Service (select with industry options)], Message (textarea, 3 rows), Submit button (`bg-{color}-600 hover:bg-{color}-700 text-white w-full py-4 rounded-xl`)
- All inputs: `border-2 border-neutral-200 bg-white focus:border-{color}-400 focus:ring-0 outline-none rounded-xl px-5 py-4 text-sm`

### Section 10 — CTA Banner

`<section className="py-24 bg-neutral-100">`

`SectionLabel number={10} title="Call-to-Action"`

Centered, `max-w-3xl mx-auto text-center`:
- `<h2>` closing headline (4–6 words, urgent, benefit-focused, industry-appropriate)
- Subtext paragraph (1–2 sentences)
- Primary CTA button in `bg-{color}-600 hover:bg-{color}-700 text-white px-10 py-5 rounded-full text-lg font-medium`

### Section 11 — Footer

`<footer className="bg-black text-neutral-400 py-16">`

4-column grid, `md:grid-cols-4`:
- Brand col (span 2): `{LogoIcon}` + brand name in white, short blurb, 2 social icon placeholders
- Hours col: operating hours list (3 rows: weekday/Saturday/Sunday with times)
- Contact col: address (`<MapPin>`), phone (`<Phone>`) — use same details as Section 9

Bottom bar: copyright `© {new Date().getFullYear()} {name}. All Rights Reserved.` + Privacy Policy + Terms links.

---

## Step 5 — Patch `resources/js/App.tsx`

**5a — Add import** after the last existing import, before `function App()`:
```tsx
// {name} business site
import {pascal}BusinessSite from './pages/{slug}/BusinessSite';
```

**5b — Add route** inside `<Routes>`, after the last existing `<Route />`:
```tsx
        {/* {name} business site */}
        <Route path="/{slug}" element={<{pascal}BusinessSite />} />
```

Do not touch any existing routes or imports.

---

## Step 6 — Patch `resources/js/index.css`

Insert at line 1, before any existing content:
```css
@import url('https://fonts.googleapis.com/css2?family={fontUrl}:wght@300;400;600;700;900&display=swap');
```

Where `{fontUrl}` = `font` arg with spaces replaced by `+`. Do not remove `@tailwind` directives.

---

## Step 7 — Print confirmation

```
✓ {name} business site created

  Page:    resources/js/pages/{slug}/BusinessSite.tsx
  Route:   /{slug}

  Sections: Navbar · Hero · Stats · About · Mission/Values ·
            Team · Services · Testimonials · FAQ · Contact ·
            CTA Banner · Footer

Run `npm run dev` and visit http://localhost:5173/{slug}
```
````

- [ ] **Step 2: Verify file exists and has 200+ lines**

```bash
wc -l .claude/commands/new-business-site.md
```

Expected: 200+ lines. If under 150, the file was truncated — rewrite.

- [ ] **Step 3: Commit**

```bash
git add .claude/commands/new-business-site.md
git commit -m "feat: add /project:new-business-site slash command for light-theme business site scaffolding"
```

---

## Task 2: Smoke test the command

- [ ] **Step 1: Run the command in Claude Code**

In Claude Code, type:

```
/project:new-business-site name="Bloom Salon" color="rose" font="Playfair Display" industry="salon" logo="scissors"
```

Wait for Claude to finish generating all files.

- [ ] **Step 2: Check expected files exist**

```bash
ls resources/js/pages/bloom-salon/
```

Expected: `BusinessSite.tsx`

- [ ] **Step 3: Check App.tsx patch**

```bash
grep -n "bloom-salon\|BloomSalon" resources/js/App.tsx
```

Expected: 1 import line + 1 route line. Existing NeuralForge + TestProject routes still present.

- [ ] **Step 4: Check index.css font patch**

```bash
head -3 resources/js/index.css
```

Expected: first line is `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;600;700;900&display=swap');`

- [ ] **Step 5: Check color tokens in generated file**

```bash
grep -c "rose" resources/js/pages/bloom-salon/BusinessSite.tsx
```

Expected: 10 or more matches.

- [ ] **Step 6: Check local helpers defined (not imported from NeuralHelpers)**

```bash
grep "from.*NeuralHelpers" resources/js/pages/bloom-salon/BusinessSite.tsx
```

Expected: no output (helpers are defined locally, not imported).

- [ ] **Step 7: Check accordion state exists**

```bash
grep "openFaq" resources/js/pages/bloom-salon/BusinessSite.tsx
```

Expected: `useState`, `setOpenFaq`, and usage in FAQ section.

- [ ] **Step 8: Start dev server and verify routes**

```bash
npm run dev
```

Open `http://localhost:5173/bloom-salon`. Verify:
- [ ] Navbar renders with Scissors icon + "Bloom Salon" brand
- [ ] Primary accent color is rose (buttons, section numbers, icon containers)
- [ ] Headings use Playfair Display font
- [ ] Stats bar is black with salon stats
- [ ] Services section shows salon pricing in RM
- [ ] FAQ accordion opens/closes with animation
- [ ] Existing `/neuralforge` and `/testproject` routes still work

- [ ] **Step 9: Commit smoke test output**

```bash
git add resources/js/pages/bloom-salon/ resources/js/App.tsx resources/js/index.css
git commit -m "test: smoke test /project:new-business-site with BloomSalon (rose/Playfair/salon/scissors)"
```

---

## Self-Review

**Spec coverage check:**
- ✓ 5 args (name, color, font, industry, logo) — Step 1
- ✓ slug (kebab), pascal (PascalCase), LogoIcon, fontUrl — Step 1
- ✓ Color token table (9 tokens) — Step 2
- ✓ Industry content (6 industries × navbar CTA, headline, subtext, stats, services, FAQ, mission/values) — Step 3
- ✓ Single self-contained file with local helpers — Step 4 intro
- ✓ All 12 sections: Navbar, Hero, Stats, About, Mission/Values, Team, Services, Testimonials, FAQ, Contact, CTA Banner, Footer — Step 4 sections 0–11
- ✓ Accordion FAQ with useState + AnimatePresence — Section 8
- ✓ App.tsx patch (1 import + 1 route, no layout wrapper) — Step 5
- ✓ index.css font import at line 1 — Step 6
- ✓ Confirmation output — Step 7
- ✓ Dark footer stays black regardless of color — Step 2 note + Footer section
- ✓ Font applied to headings only — Section 4 note about `style={{ fontFamily }}`

**No placeholders:** All steps have exact commands, expected outputs, and complete content. ✓

**Type consistency:** `openFaq` / `setOpenFaq` used consistently in Step 4 component structure and Section 8. ✓
