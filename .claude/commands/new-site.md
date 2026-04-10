You are a site scaffolder for a Laravel + React + Tailwind project. The user has invoked `/project:new-site` with these arguments:

$ARGUMENTS

Follow every step below in order. Do not skip steps. Do not ask for confirmation. Generate all files completely.

---

## Step 1 — Parse arguments

Extract these named arguments from `$ARGUMENTS`:
- `name` — brand name (e.g. `AcmeCorp`)
- `color` — Tailwind color name (e.g. `emerald`, `blue`, `rose`, `violet`, `orange`)
- `font` — Google Font name (e.g. `Poppins`, `Inter`, `Outfit`, `Space Grotesk`)
- `animation` — one of: `fade` | `slide` | `scale` | `none`
- `logo` — Lucide React icon name in lowercase (e.g. `rocket`, `zap`, `cpu`, `star`, `bolt`)

Then derive:
- **slug**: lowercase with hyphens for spaces, no other special chars (e.g. `AcmeCorp` → `acmecorp`, `My Brand` → `my-brand`)
- **pascal**: PascalCase, no spaces (e.g. `AcmeCorp` → `AcmeCorp`, `My Brand` → `MyBrand`)
- **LogoIcon**: PascalCase of the `logo` arg (e.g. `rocket` → `Rocket`, `zap` → `Zap`)
- **fontUrl**: the `font` arg with spaces replaced by `+` for the Google Fonts URL (e.g. `Space Grotesk` → `Space+Grotesk`)

---

## Step 2 — Color token reference

Use `{color}` as the Tailwind color throughout all generated files, substituted literally:

| Purpose | Token |
|---|---|
| Button / logo gradient | `from-{color}-600 to-{color}-700` |
| Hover gradient | `from-{color}-500 to-{color}-600` |
| Accent text | `text-{color}-400` |
| Icon background | `bg-{color}-500/10` |
| Icon border | `border-{color}-500/20` |
| Hover border | `hover:border-{color}-500/30` |
| Badge border | `border-{color}-500/40` |
| Badge background | `bg-{color}-500/10` |
| Glow shadow | `shadow-{color}-900/30` |
| Radial glow div | `bg-{color}-600/15` |

---

## Step 3 — Animation reference

Based on the `animation` arg, use these motion props in **every animated wrapper** in the generated files:

- `fade`: `initial={{ opacity: 0 }}` `whileInView={{ opacity: 1 }}` `viewport={{ once: true, margin: '-80px' }}` `transition={{ duration: 0.6, ease: 'easeOut' }}`
- `slide`: `initial={{ opacity: 0, y: 30 }}` `whileInView={{ opacity: 1, y: 0 }}` `viewport={{ once: true, margin: '-80px' }}` `transition={{ duration: 0.6, ease: 'easeOut' }}`
- `scale`: `initial={{ opacity: 0, scale: 0.95 }}` `whileInView={{ opacity: 1, scale: 1 }}` `viewport={{ once: true, margin: '-80px' }}` `transition={{ duration: 0.6, ease: 'easeOut' }}`
- `none`: Do not use `motion` at all. Replace every animated wrapper with a plain `<div>`.

If `animation` is not `none`, import: `import { motion, AnimatePresence } from 'motion/react';`

---

## Step 4 — Generate File 1: Layout

**Path:** `resources/js/components/{slug}/{pascal}Layout.tsx`

Requirements:
- Imports: `ReactNode` from `react`; `useState`, `useEffect` from `react`; `Link`, `useLocation` from `react-router-dom`; if animation !== `none`: `motion`, `AnimatePresence` from `motion/react`; `Menu`, `X`, `{LogoIcon}` from `lucide-react`
- Nav links array: `[{ name: 'Home', path: '/{slug}' }, { name: 'About', path: '/{slug}/about' }, { name: 'Contact', path: '/{slug}/contact' }]`
- Navbar: fixed top, `z-50`, transparent when at top, `bg-[#05050F]/90 backdrop-blur-xl border-b border-white/[0.06]` when scrolled (use `useEffect` + `window.scrollY` listener, same as NeuralLayout.tsx)
- Logo mark: `<div className="w-9 h-9 rounded-xl bg-gradient-to-br from-{color}-600 to-{color}-700 flex items-center justify-center"><{LogoIcon} size={18} className="text-white" /></div>`
- Brand text: `{name}` — split so the last word renders in `text-{color}-400` (wrap last word in `<span className="text-{color}-400">`)
- Desktop nav: hidden on mobile, `space-x-1` flex row, active link `bg-white/10 text-white`, inactive `text-gray-400 hover:text-white hover:bg-white/5`
- CTA button in header: gradient primary button linking to `/{slug}/contact`
- Mobile menu: hamburger toggle, `AnimatePresence` slide-in overlay (or plain div if `none`) with large nav links and a full-width CTA button
- `<main className="grow pt-[72px]">{children}</main>`
- Footer: `bg-[#05050F] border-t border-white/[0.06] pt-16 pb-8` — brand col (logo + blurb + social icons), then 3 link columns titled Product / Company / Resources with 5 placeholder `<span>` links each, bottom bar with copyright `© {new Date().getFullYear()} {name}. All Rights Reserved.`
- Outermost div: `<div className="min-h-screen flex flex-col bg-[#05050F] text-white font-sans" style={{ fontFamily: '"{font}", sans-serif' }}>`
- Export: `export default function {pascal}Layout({ children }: { children: ReactNode })`

---

## Step 5 — Generate File 2: Home page

**Path:** `resources/js/pages/{slug}/Home.tsx`

Imports:
- `Link` from `react-router-dom`
- if animation !== `none`: `motion` from `motion/react`
- Icons from `lucide-react` as needed (choose 6 relevant icons for the features grid)
- `{ Reveal, GlowBadge, SectionLabel, GlassCard }` from `../../components/neuralforge/NeuralHelpers`

> If `animation` is `none`, do not import `Reveal` — replace every `<Reveal>` wrapper with a plain `<div>`.

Sections:

**Section 1 — Hero** (`<section className="relative min-h-screen flex items-center bg-[#05050F] overflow-hidden">`):
- Grid background div: `className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"`
- Radial glow: `<motion.div animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 7, repeat: Infinity }} className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-{color}-600/15 blur-[130px] rounded-full pointer-events-none" />` (omit if animation=`none`)
- Two-column grid `lg:grid-cols-2 gap-16 items-center`:
  - Left: `GlowBadge` tagline → `<h1>` (white first line, `{color}` gradient second line) → subtext → two CTA buttons → social proof micro-bar (4 avatar divs + "Join 10,000+ users" text)
  - Right (hidden on mobile): `GlassCard` mock dashboard with a status row, a `Placeholder` chart, and two small stat cards

**Section 2 — Features grid** (`py-24 bg-[#07070F]`):
- `SectionLabel number={2} title="Features"`
- Centered heading + subtext
- 6-card `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Each card: `GlassCard` with icon in `{color}` bg, bold title, description (invent professional-sounding feature names relevant to the brand)

**Section 3 — CTA banner** (`py-28 bg-[#05050F] relative`):
- `SectionLabel number={3} title="Get Started"`
- Radial glow pulse (omit if `none`)
- Centered: `GlowBadge` → large heading → subtext → primary CTA `Link` to `/{slug}/contact`

Export: `export default function {pascal}Home()`

---

## Step 6 — Generate File 3: About page

**Path:** `resources/js/pages/{slug}/About.tsx`

Imports: same pattern as Home (helpers, icons, motion if needed). Also import `PageHeader` from `../../components/neuralforge/NeuralHelpers`.

**Section 1 — PageHeader:**
```tsx
<PageHeader badge="Our Story" title="Built for you, by people like you" subtitle="[2-sentence brand origin story — make it professional and generic]" />
```

**Section 2 — Story block** (`py-24 bg-[#05050F]`):
- `SectionLabel number={1} title="Origin Story"`
- Two-column `lg:grid-cols-2 gap-16 items-center`
- Left: `GlassCard` with `Placeholder label="Team Photo" className="h-[400px]"`
- Right: `GlowBadge` → heading → 3 paragraphs of brand story → row of 3 stat `GlassCard`s (invent 3 relevant stats)

**Section 3 — Values grid** (`py-24 bg-[#07070F]`):
- `SectionLabel number={2} title="Our Values"`
- Centered heading + subtext
- 3-column `GlassCard` grid, each with a `{color}`-tinted icon, bold title, and description. Invent 3 values appropriate to the brand.

Export: `export default function {pascal}About()`

---

## Step 7 — Generate File 4: Contact page

**Path:** `resources/js/pages/{slug}/Contact.tsx`

Imports: same helpers + `PageHeader`. Icons: `Mail`, `MessageCircle`, `Globe`, `Clock`, `Send` from `lucide-react`.

**Section 1 — PageHeader:**
```tsx
<PageHeader badge="Contact" title="Let's talk" subtitle="[1-sentence friendly contact invitation]" />
```

**Section 2 — Channels row** (`py-16 border-b border-white/[0.05]`):
- `SectionLabel number={1} title="Contact Channels"`
- 4-column `GlassCard` grid: Live Chat / Email / GitHub / Community — each with icon in `{color}` circle, label, value, sub-label

**Section 3 — Form + info** (`py-24`):
- `SectionLabel number={2} title="Get in Touch"`
- `lg:grid-cols-5 gap-16`
- Info col (span 2): `GlowBadge` → heading → 4 info rows (General email, Sales email, Support email, Response time) → office address block
- Form col (span 3): `GlassCard` with heading + subtext + `<form>` containing:
  - 2-col row: Full Name input + Work Email input
  - 2-col row: Company input + Inquiry Type select (options: General Inquiry, Sales/Enterprise Demo, Technical Support, Partnership, Press/Media)
  - Message textarea (5 rows)
  - Full-width submit button: `bg-gradient-to-r from-{color}-600 to-{color}-700` with `Send` icon
  - Privacy note below button

Export: `export default function {pascal}Contact()`

---

## Step 8 — Patch `resources/js/App.tsx`

Open `resources/js/App.tsx`. Make two changes:

**8a — Add imports** after the last existing import block, before `function App()`:
```tsx
// {name} site
import {pascal}Layout from './components/{slug}/{pascal}Layout';
import {pascal}Home from './pages/{slug}/Home';
import {pascal}About from './pages/{slug}/About';
import {pascal}Contact from './pages/{slug}/Contact';
```

**8b — Add routes** inside `<Routes>`, after the last existing `<Route ... />` line:
```tsx
        {/* {name} site */}
        <Route path="/{slug}" element={<{pascal}Layout><{pascal}Home /></{pascal}Layout>} />
        <Route path="/{slug}/about" element={<{pascal}Layout><{pascal}About /></{pascal}Layout>} />
        <Route path="/{slug}/contact" element={<{pascal}Layout><{pascal}Contact /></{pascal}Layout>} />
```

Do not touch any existing NeuralForge routes or imports.

---

## Step 9 — Patch `resources/js/index.css`

Open `resources/js/index.css`. Insert this line at the very top (line 1), before `@tailwind base`:

```css
@import url('https://fonts.googleapis.com/css2?family={fontUrl}:wght@300;400;600;700;900&display=swap');
```

Where `{fontUrl}` is the `font` arg with spaces replaced by `+`.

Do not remove or reorder the existing `@tailwind` directives.

---

## Step 10 — Print confirmation

After all files are written, output exactly this (with values substituted):

```
✓ {name} mini-site created

  Layout:   resources/js/components/{slug}/{pascal}Layout.tsx
  Pages:    resources/js/pages/{slug}/Home.tsx
            resources/js/pages/{slug}/About.tsx
            resources/js/pages/{slug}/Contact.tsx
  Routes:   /{slug}
            /{slug}/about
            /{slug}/contact

Run `npm run dev` and visit http://localhost:5173/{slug}
```
