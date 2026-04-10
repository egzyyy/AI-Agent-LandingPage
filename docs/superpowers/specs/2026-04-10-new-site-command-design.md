# Design Spec: `/project:new-site` Claude Code Command

**Date:** 2026-04-10
**Status:** Approved
**Author:** egzyyy

---

## Overview

A single Claude Code slash command stored at `.claude/commands/new-site.md` that generates a fully wired, branded mini-site (Layout + 3 pages + router entries) based on the NeuralForge design system. The user passes 5 inline args; Claude generates all files in one shot.

---

## Invocation

```
/project:new-site name="AcmeCorp" color="emerald" font="Poppins" animation="slide" logo="rocket"
```

### Arguments

| Arg | Type | Description |
|---|---|---|
| `name` | string | Brand name — used in logo text, page titles, footer copy |
| `color` | string | Tailwind color name (e.g. `blue`, `emerald`, `rose`, `violet`) — becomes the primary accent |
| `font` | string | Google Font name to import and apply site-wide |
| `animation` | `fade` \| `slide` \| `scale` \| `none` | Motion style applied to reveal animations |
| `logo` | string | Lucide React icon name used in the navbar logo mark |

---

## Files Generated

Given `name="AcmeCorp"`, the command produces:

```
resources/js/
├── components/
│   └── acmecorp/
│       └── AcmeCorpLayout.tsx     ← branded navbar + footer
└── pages/
    └── acmecorp/
        ├── Home.tsx               ← hero, 3-feature grid, CTA
        ├── About.tsx              ← story block, 3-value cards
        └── Contact.tsx            ← contact form + info panel
```

`App.tsx` is also patched to add 3 new routes under `/acmecorp/*` wrapped in `<AcmeCorpLayout>`.

**Naming convention:**
- Directory: kebab-case of `name` (e.g. `acmecorp`)
- Component prefix: PascalCase of `name` (e.g. `AcmeCorp`)
- Layout file: `{PascalName}Layout.tsx`

---

## Architecture

### Reuse
All pages import shared primitives from the existing `NeuralHelpers.tsx`:
- `Reveal` — scroll-triggered animation wrapper (behaviour overridden by `animation` arg)
- `GlowBadge` — glowing chip label
- `GlassCard` — glassmorphism card container
- `PageHeader` — page hero section
- `SectionLabel` — numbered section divider

No primitives are duplicated. Customisation is applied only in the new layout and page files.

### Color application
The `color` arg maps to Tailwind scale tokens used consistently:
- Primary action / gradient: `{color}-500` → `{color}-600`
- Icon backgrounds: `{color}-500/10`, borders: `{color}-500/20`
- Accent text: `{color}-400`
- Glow/shadow: `{color}-900/30`

The dark base (`bg-[#05050F]`) and neutral grays remain unchanged.

### Font application
Claude adds a Google Fonts `@import` for the chosen font at the top of `resources/js/index.css` and sets `font-family` on the layout wrapper div.

### Animation mapping

| `animation` arg | Behaviour |
|---|---|
| `fade` | `initial={{ opacity: 0 }}` → `animate={{ opacity: 1 }}` |
| `slide` | `initial={{ opacity: 0, y: 30 }}` → `animate={{ opacity: 1, y: 0 }}` (NeuralForge default) |
| `scale` | `initial={{ opacity: 0, scale: 0.95 }}` → `animate={{ opacity: 1, scale: 1 }}` |
| `none` | No `motion` wrapper — plain `<div>` |

### Logo
The `logo` arg is the Lucide icon name (e.g. `rocket`, `zap`, `cpu`). Claude imports it from `lucide-react` and uses it inside a `w-9 h-9 rounded-xl bg-gradient-to-br from-{color}-500 to-{color}-700` icon wrapper in the navbar.

---

## Per-Page Content

### `Home.tsx`
- **Hero** — full-viewport, brand headline, subtext, two CTA buttons (primary + outline), social proof micro-bar
- **Features grid** — 3-column `GlassCard` grid with icons, titles, descriptions
- **CTA banner** — centered `GlowBadge` + headline + single primary button

### `About.tsx`
- **PageHeader** — badge, title, subtitle via `PageHeader` helper
- **Story block** — two-column layout: text left, `GlassCard` visual right
- **Values grid** — 3 `GlassCard` cards with icon, title, one-liner

### `Contact.tsx`
- **PageHeader** — badge, title, subtitle
- **Two-column layout** — contact form (name, email, message, submit) left; info panel (email, location, hours as `GlassCard` items) right

---

## Router Patch (`App.tsx`)

Claude appends to the existing routes array (does not touch NeuralForge routes):

```tsx
// {name} site
<Route path="/{slug}" element={<{PascalName}Layout />}>
  <Route index element={<{PascalName}Home />} />
  <Route path="about" element={<{PascalName}About />} />
  <Route path="contact" element={<{PascalName}Contact />} />
</Route>
```

---

## Output Confirmation

After generating all files Claude prints:

```
✓ {name} mini-site created
  Layout:  resources/js/components/{slug}/{PascalName}Layout.tsx
  Pages:   resources/js/pages/{slug}/Home.tsx
           resources/js/pages/{slug}/About.tsx
           resources/js/pages/{slug}/Contact.tsx
  Routes:  /{slug}, /{slug}/about, /{slug}/contact
  
Run `npm run dev` and visit http://localhost:5173/{slug}
```

---

## Constraints & Non-Goals

- The command does **not** generate new backend routes or controllers.
- The command does **not** create a new Vite entry point — it uses the existing SPA.
- The command does **not** modify `NeuralHelpers.tsx` or `NeuralLayout.tsx`.
- Font import assumes internet access for Google Fonts CDN at dev time.
- The `logo` arg must be a valid Lucide icon name — no validation is performed by the command.
