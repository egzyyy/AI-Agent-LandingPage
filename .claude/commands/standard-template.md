You are a business site scaffolder for a Laravel + React + Tailwind project. The user has invoked `/project:new-site` with these arguments:

$ARGUMENTS

This command generates a **standard 5-page business website** with a persistent navbar. For a single-page site, use `/project:new-business-site` instead.

Follow every step below in order. Do not skip steps. Do not ask for confirmation. Generate all files completely.

---

## Step 1 — Parse arguments

Extract these named arguments from `$ARGUMENTS`:
- `name` — brand name (e.g. `Mira Clinic`, `Sofea Beauty`) — **required**
- `industry` — one of: `salon` | `clinic` | `restaurant` | `boutique` | `gym` | `cafe` — **required**
- `color` — Tailwind accent color (e.g. `emerald`, `rose`, `amber`, `sky`, `violet`) — **optional, auto-derived in Step 2.5**
- `font` — Google Font for headings (e.g. `Playfair Display`, `Lora`, `Outfit`, `DM Sans`) — **optional, auto-derived in Step 2.5**
- `logo` — Lucide React icon name in lowercase (e.g. `heart-pulse`, `scissors`, `utensils`) — **optional, auto-derived in Step 2.5**
- `variant` — layout style for Hero / About / Services sections: `A` | `B` | `C` — **optional, auto-derived from industry in Step 2.8**

Derive:
- **slug**: kebab-case of `name` (e.g. `Mira Clinic` → `mira-clinic`)
- **pascal**: PascalCase of `name` (e.g. `Mira Clinic` → `MiraClinic`)
- **LogoIcon**: PascalCase of `logo` value (e.g. `heart-pulse` → `HeartPulse`)
- **fontUrl**: `font` value with spaces → `+` (e.g. `DM Sans` → `DM+Sans`)

> If `name` or `industry` is missing, stop and ask. For `color`, `font`, `logo` — proceed to Step 2.5.

---

## Step 2 — Color token reference

| Purpose | Token |
|---|---|
| Primary CTA button | `bg-{color}-600 hover:bg-{color}-700 text-white` |
| Active nav link | `text-{color}-600 bg-{color}-50` |
| Nav link hover | `hover:text-{color}-600 hover:bg-neutral-50` |
| Icon containers | `bg-{color}-50 text-{color}-600` |
| Hover card border | `hover:border-{color}-200` |
| Contact/footer icons | `text-{color}-500` |
| Eyebrow labels | `text-{color}-600` |
| Input focus | `focus:border-{color}-400` |
| Accent badge bg | `bg-{color}-600 text-white` |
| Floating badge on image | `bg-{color}-600 text-white` |

Footer and stats bar stay `bg-black` regardless of color.

---

## Step 2.5 — Auto-derive color, font, and logo from industry

If `color`, `font`, or `logo` were not supplied by the user, derive them now from `industry`:

| Industry | color | font | fontStack | logo |
|---|---|---|---|---|
| salon | rose | Playfair Display | serif | scissors |
| clinic | sky | DM Sans | sans-serif | heart-pulse |
| restaurant | amber | Playfair Display | serif | utensils |
| boutique | violet | Playfair Display | serif | shopping-bag |
| gym | orange | Outfit | sans-serif | dumbbell |
| cafe | amber | DM Sans | sans-serif | coffee |

> `fontStack` is the CSS generic family appended in the heading font constant. Every file must use: `const font = { fontFamily: '"{font}", {fontStack}' };`
> For `fontUrl` replace spaces with `+` (e.g. `DM Sans` → `DM+Sans`).

---

## Step 2.8 — Section Variants

If `variant` was **not** supplied, auto-derive all six section variants from `industry`:

| Industry | heroVariant | aboutVariant | servicesVariant | faqVariant | contactVariant | mvvVariant |
|---|---|---|---|---|---|---|
| salon | B | A | B | A | A | D |
| clinic | B | A | A | A | A | A |
| restaurant | A | B | B | A | A | C |
| boutique | C | C | C | B | B | E |
| gym | A | A | B | C | C | B |
| cafe | A | B | B | A | B | D |

If `variant` **is** supplied (A, B, or C), use it for **all six sections**.

---

### MVV Variant Reference

Use `mvvVariant` for the Mission / Vision / Values section inside the About page.

**MVV A — White pill cards** · neutral-100 border, pill badge, heading, description. Hover lifts shadow:
```tsx
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <Reveal className="text-center mb-16">
      <p className="text-{color}-600 text-sm font-semibold uppercase tracking-widest mb-3">What Drives Us</p>
      <h2 className="text-4xl font-extrabold tracking-tight" style={font}>Our Core Beliefs</h2>
    </Reveal>
    <div className="grid md:grid-cols-3 gap-8">
      {mvv.map((item, i) => (
        <Reveal key={i} delay={i * 0.1}>
          <div className="bg-white rounded-3xl p-10 border border-neutral-100 hover:border-{color}-200 transition-all hover:shadow-lg">
            <span className="inline-block text-xs font-bold text-{color}-600 uppercase tracking-widest mb-4 bg-{color}-50 px-3 py-1 rounded-full">{item.label}</span>
            <h3 className="text-xl font-bold mb-4 mt-2" style={font}>{item.heading}</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">{item.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>
```

**MVV B — Dark strip with accent top border** · neutral-900 bg, white text, rose line on card top:
```tsx
<section className="py-20 bg-neutral-900">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <Reveal className="text-center mb-16">
      <p className="text-{color}-400 text-sm font-semibold uppercase tracking-widest mb-3">What Drives Us</p>
      <h2 className="text-4xl font-extrabold tracking-tight text-white" style={font}>Our Core Beliefs</h2>
    </Reveal>
    <div className="grid md:grid-cols-3 gap-6">
      {mvv.map((item, i) => (
        <Reveal key={i} delay={i * 0.1}>
          <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 relative overflow-hidden hover:bg-white/[0.07] transition-all">
            <div className="absolute top-0 left-0 right-0 h-1 bg-{color}-500 rounded-t-3xl" />
            <span className="inline-block text-xs font-bold text-{color}-400 uppercase tracking-widest mb-5 bg-{color}-500/10 px-3 py-1 rounded-full border border-{color}-500/20">{item.label}</span>
            <h3 className="text-xl font-bold mb-3 text-white" style={font}>{item.heading}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>
```

**MVV C — Large numbered rows** · stacked horizontal rows, giant faded number left, content right:
```tsx
<section className="py-20 bg-neutral-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <Reveal className="mb-12">
      <p className="text-{color}-600 text-sm font-semibold uppercase tracking-widest mb-3">What Drives Us</p>
      <h2 className="text-4xl font-extrabold tracking-tight" style={font}>Our Core Beliefs</h2>
    </Reveal>
    <div className="space-y-5">
      {mvv.map((item, i) => (
        <Reveal key={i} delay={i * 0.1}>
          <div className="group bg-white rounded-2xl border border-neutral-100 hover:border-{color}-200 hover:shadow-md transition-all p-8 flex items-start gap-8">
            <span className="text-6xl font-black text-{color}-100 group-hover:text-{color}-200 transition-colors leading-none shrink-0 select-none">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex-1 pt-1">
              <span className="inline-block text-xs font-bold text-{color}-600 uppercase tracking-widest mb-3 bg-{color}-50 px-3 py-1 rounded-full">{item.label}</span>
              <h3 className="text-xl font-bold mb-2" style={font}>{item.heading}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed max-w-2xl">{item.text}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>
```

**MVV D — Icon cards, hover fills accent color** · 3-col centered, icon top, whole card turns accent on hover:
```tsx
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <Reveal className="text-center mb-16">
      <p className="text-{color}-600 text-sm font-semibold uppercase tracking-widest mb-3">What Drives Us</p>
      <h2 className="text-4xl font-extrabold tracking-tight" style={font}>Our Core Beliefs</h2>
    </Reveal>
    <div className="grid md:grid-cols-3 gap-6">
      {mvv.map((item, i) => (
        <Reveal key={i} delay={i * 0.1}>
          <div className="group text-center rounded-3xl p-10 border border-neutral-100 hover:bg-{color}-600 hover:border-{color}-600 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-{color}-50 group-hover:bg-white/20 text-{color}-600 group-hover:text-white flex items-center justify-center mx-auto mb-6 transition-all">
              {item.icon} {/* Target / Eye / Heart from lucide-react */}
            </div>
            <span className="inline-block text-xs font-bold text-{color}-600 group-hover:text-{color}-200 uppercase tracking-widest mb-3 transition-colors">{item.label}</span>
            <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors" style={font}>{item.heading}</h3>
            <p className="text-neutral-500 group-hover:text-white/70 text-sm leading-relaxed transition-colors">{item.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>
```
Note: import `Target, Eye, Heart` from `lucide-react`. Assign `icon: <Target size={22} />` to Mission, `icon: <Eye size={22} />` to Vision, `icon: <Heart size={22} />` to Values in the mvv data array.

**MVV E — Featured mission card + stacked vision/values** · mission fills large accent card left, V+V stack right:
```tsx
<section className="py-20 bg-neutral-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <Reveal className="mb-12">
      <p className="text-{color}-600 text-sm font-semibold uppercase tracking-widest mb-3">What Drives Us</p>
      <h2 className="text-4xl font-extrabold tracking-tight" style={font}>Our Core Beliefs</h2>
    </Reveal>
    <div className="grid lg:grid-cols-2 gap-6">
      <Reveal direction="right">
        <div className="bg-{color}-600 rounded-3xl p-10 flex flex-col justify-between text-white min-h-[320px]">
          <span className="inline-block text-xs font-bold text-{color}-200 uppercase tracking-widest mb-6 bg-white/10 px-3 py-1 rounded-full self-start">{mvv[0].label}</span>
          <div>
            <h3 className="text-3xl font-black mb-4 leading-tight" style={font}>{mvv[0].heading}</h3>
            <p className="text-{color}-100 text-sm leading-relaxed">{mvv[0].text}</p>
          </div>
        </div>
      </Reveal>
      <div className="flex flex-col gap-6">
        {mvv.slice(1).map((item, i) => (
          <Reveal key={i} direction="left" delay={i * 0.1}>
            <div className="bg-white rounded-3xl p-8 border border-neutral-100 hover:border-{color}-200 hover:shadow-md transition-all flex items-start gap-5 flex-1">
              <div className="w-10 h-10 rounded-xl bg-{color}-50 text-{color}-600 flex items-center justify-center shrink-0">{item.icon}</div>
              <div>
                <span className="inline-block text-xs font-bold text-{color}-600 uppercase tracking-widest mb-2 bg-{color}-50 px-2 py-0.5 rounded-full">{item.label}</span>
                <h3 className="text-lg font-bold mb-2" style={font}>{item.heading}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </div>
</section>
```

If `variant` **is** supplied (A, B, or C), use it for **all six sections**.

---

### Hero Variants

**Hero A — Cinematic** · full-screen image, dark gradient overlay, text anchored bottom-left:
```tsx
<section className="relative min-h-[calc(100vh-72px)] flex items-end pb-20 overflow-hidden">
  <img src="/images/{slug}/hero.jpg" className="absolute inset-0 w-full h-full object-cover" />
  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/10" />
  <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
    <Reveal>
      <span className="inline-block bg-{color}-600 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">{badge}</span>
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none mb-6" style={font}>
        {line1}<br /><em className="text-{color}-400 not-italic">{line2}</em>
      </h1>
      <p className="text-white/70 text-lg max-w-xl mb-10 leading-relaxed">{subtext}</p>
      <div className="flex flex-wrap gap-4">
        {/* Primary CTA: Link to /{slug}/contact — bg-{color}-600 hover:bg-{color}-700 rounded-full px-8 py-4 */}
        {/* Secondary: Link to /{slug}/services — bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full px-8 py-4 */}
      </div>
    </Reveal>
  </div>
  {/* Social proof pill: absolute bottom-8 right-8 hidden md:block — bg-white rounded-2xl shadow-lg */}
</section>
```

**Hero B — Split** · white left panel with all text, full-height image fills right half (no overlay):
```tsx
<section className="min-h-[calc(100vh-72px)] grid lg:grid-cols-2">
  <div className="bg-white flex items-center px-10 lg:px-16 py-24 lg:py-0 order-2 lg:order-1">
    <div className="max-w-lg w-full">
      <span className="inline-block bg-{color}-600 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">{badge}</span>
      <h1 className="text-5xl md:text-6xl font-black tracking-tight text-black leading-tight mb-6" style={font}>
        {line1}<br /><span className="text-{color}-600">{line2}</span>
      </h1>
      <p className="text-neutral-500 text-lg mb-10 leading-relaxed">{subtext}</p>
      <div className="flex flex-wrap gap-4 mb-10">
        {/* Primary CTA: Link to /{slug}/contact — bg-{color}-600 rounded-full px-8 py-4 */}
        {/* Secondary: Link to /{slug}/services — border-2 border-neutral-200 text-black rounded-full px-8 py-4 */}
      </div>
      {/* Social proof pill inline: bg-neutral-50 border border-neutral-100 rounded-2xl px-5 py-3 */}
    </div>
  </div>
  <div className="relative min-h-[50vh] lg:min-h-full order-1 lg:order-2">
    <img src="/images/{slug}/hero.jpg" className="absolute inset-0 w-full h-full object-cover" />
  </div>
</section>
```

**Hero C — Centered Frost** · blurred image background, white/80 overlay, all content centered:
```tsx
<section className="relative min-h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden">
  <img src="/images/{slug}/hero.jpg" className="absolute inset-0 w-full h-full object-cover scale-110 blur-sm" />
  <div className="absolute inset-0 bg-white/80 backdrop-blur-md" />
  <div className="relative text-center max-w-4xl mx-auto px-6">
    <Reveal>
      <span className="inline-block border-2 border-{color}-200 text-{color}-600 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">{badge}</span>
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black leading-none mb-6" style={font}>
        {line1}<br /><span className="text-{color}-600">{line2}</span>
      </h1>
      <p className="text-neutral-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">{subtext}</p>
      <div className="flex flex-wrap justify-center gap-4">
        {/* Primary CTA: Link to /{slug}/contact — bg-{color}-600 rounded-full px-8 py-4 */}
        {/* Secondary: Link to /{slug}/services — border-2 border-neutral-200 text-black rounded-full px-8 py-4 */}
      </div>
    </Reveal>
  </div>
</section>
```

---

### About Variants

**About A — Image left, text right** · 2-column grid, floating accent stat badge bottom-right of image:
```tsx
<section className="py-24 lg:py-32">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
    <Reveal direction="right">
      <div className="relative">
        <img src="/images/{slug}/about.jpg" className="w-full h-140 object-cover rounded-3xl" />
        <div className="absolute -bottom-6 -right-6 bg-{color}-600 text-white p-6 rounded-2xl shadow-xl">
          <p className="text-3xl font-black mb-0.5">{stat1.value}</p>
          <p className="text-xs text-{color}-200 uppercase tracking-wider">{stat1.label}</p>
        </div>
      </div>
    </Reveal>
    <Reveal direction="left" delay={0.15}>
      {/* eyebrow, h2, 3 paragraphs */}
    </Reveal>
  </div>
</section>
```

**About B — Full-width banner image, then 3-column text below** · image spans full width, heading occupies left column, paragraphs fill right 2 columns:
```tsx
<section className="py-24">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <Reveal>
      <img src="/images/{slug}/about.jpg" className="w-full h-80 md:h-[480px] object-cover rounded-3xl mb-16" />
    </Reveal>
    <div className="grid md:grid-cols-3 gap-12">
      <Reveal>
        <p className="text-{color}-600 text-sm font-semibold uppercase tracking-widest mb-3">{eyebrow}</p>
        <h2 className="text-4xl font-extrabold tracking-tight" style={font}>{heading}</h2>
      </Reveal>
      <Reveal delay={0.1} className="md:col-span-2 space-y-5">
        <p className="text-neutral-600 leading-relaxed">{p1}</p>
        <p className="text-neutral-600 leading-relaxed">{p2}</p>
        <p className="text-neutral-600 leading-relaxed">{p3}</p>
      </Reveal>
    </div>
  </div>
</section>
```

**About C — Text left + 2×2 stat cards right, then full-width image strip** · use all 4 Stats from Step 3 for the cards; first card uses accent bg:
```tsx
<section>
  <div className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
      <Reveal>
        <p className="text-{color}-600 text-sm font-semibold uppercase tracking-widest mb-3">{eyebrow}</p>
        <h2 className="text-5xl font-extrabold tracking-tight mb-8" style={font}>{heading}</h2>
        <p className="text-neutral-600 leading-relaxed mb-5">{p1}</p>
        <p className="text-neutral-600 leading-relaxed">{p2}</p>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="grid grid-cols-2 gap-4">
          {/* Card 0: bg-{color}-600 text-white rounded-2xl p-6 */}
          {/* Cards 1-3: bg-neutral-50 border border-neutral-100 rounded-2xl p-6 */}
          {/* Each: text-3xl font-black value + text-xs uppercase tracking-widest label */}
        </div>
      </Reveal>
    </div>
    <Reveal>
      <img src="/images/{slug}/about.jpg" className="w-full h-64 object-cover rounded-3xl" />
    </Reveal>
  </div>
  <div className="bg-neutral-50 py-10">
    <p className="max-w-3xl mx-auto px-6 text-center text-neutral-600 leading-relaxed">{p3}</p>
  </div>
</section>
```

---

### Services Variants

**Services A — Sticky sidebar + scrollable price list** · left sticky column with image; right column white card, each service as icon+name+desc+price row:
```
lg:flex gap-16 | Left 5/12: sticky top-24 — eyebrow, h2, desc, /images/{slug}/services.jpg rounded-2xl
Right 7/12: bg-white rounded-3xl p-8 border — each service: flex row [icon circle | name+desc | price]
```

**Services B — 3-column card grid** · thin image strip above grid; each of the 6 services as a full card with icon, name, description, price, and CTA button:
```tsx
{/* image strip: w-full h-56 object-cover rounded-2xl mb-16 */}
<div className="grid md:grid-cols-3 gap-6">
  {services.map((s, i) => (
    <div className="bg-white rounded-3xl p-8 border border-neutral-100 hover:border-{color}-200 hover:shadow-lg transition-all flex flex-col">
      <div className="w-12 h-12 rounded-2xl bg-{color}-50 text-{color}-600 flex items-center justify-center mb-5">
        <{LogoIcon} size={20} />
      </div>
      <h3 className="font-bold text-base mb-2" style={font}>{s.name}</h3>
      <p className="text-neutral-500 text-sm mb-5 flex-1">{s.desc}</p>
      <p className="text-{color}-600 font-extrabold text-2xl mb-5">{s.price}</p>
      <Link to="/{slug}/contact">
        <button className="w-full bg-{color}-600 hover:bg-{color}-700 text-white py-3 rounded-xl text-sm font-semibold transition-all">
          {ctaLabel}
        </button>
      </Link>
    </div>
  ))}
</div>
```

**Services C — Full-width numbered rows** · thin image strip above; services listed as numbered rows inside a centered white card, accent left-border on hover:
```tsx
{/* image strip: w-full h-56 object-cover rounded-2xl mb-16 */}
<div className="max-w-3xl mx-auto bg-white rounded-3xl border border-neutral-100 p-6 divide-y divide-neutral-100">
  {services.map((s, i) => (
    <div className="group flex items-center gap-6 py-6 hover:bg-neutral-50 border-l-4 border-transparent hover:border-l-{color}-600 transition-all -mx-2 px-2 rounded-r-xl">
      <span className="text-4xl font-black text-neutral-100 group-hover:text-{color}-200 w-12 shrink-0 transition-colors select-none">
        {String(i + 1).padStart(2, '0')}
      </span>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-sm text-black group-hover:text-{color}-700 transition-colors">{s.name}</p>
        <p className="text-xs text-neutral-400 mt-0.5">{s.desc}</p>
      </div>
      <span className="font-extrabold text-lg text-black whitespace-nowrap">{s.price}</span>
    </div>
  ))}
</div>
```

---

## Step 3 — Industry content reference

**CTA label:**
- salon → `Book Appointment` | clinic → `Book Consultation` | restaurant → `Reserve a Table`
- boutique → `Shop Now` | gym → `Start Free Trial` | cafe → `Order Now`

**Hero badge:**
- salon → `✂️ Est. 2016 · Bangsar, KL` | clinic → `🏥 Est. 2014 · Petaling Jaya`
- restaurant → `🍽️ Est. 2012 · KLCC, KL` | boutique → `👗 Est. 2018 · Bukit Bintang, KL`
- gym → `💪 Est. 2019 · Mont Kiara, KL` | cafe → `☕ Est. 2020 · Damansara, KL`

**Hero headline (line 1 / accent line 2):**
- salon → `Beauty & Care,` / `Redefined.` | clinic → `Your Health,` / `Our Priority.`
- restaurant → `Great Food,` / `Every Time.` | boutique → `Style That` / `Speaks for You.`
- gym → `Train Hard,` / `Live Strong.` | cafe → `Great Coffee,` / `Every Morning.`

**Hero subtext:**
- salon → `Experience premium hair and beauty treatments in a relaxing environment. From haircuts to facials, we take care of everything for you.`
- clinic → `Comprehensive healthcare services delivered by experienced professionals. Your wellness journey starts with a single consultation.`
- restaurant → `Fresh ingredients, bold flavours, and a dining experience you'll want to relive. Book your table and let us take care of the rest.`
- boutique → `Curated fashion for every occasion, from ready-to-wear to custom pieces. Visit us and discover your next favourite outfit.`
- gym → `State-of-the-art equipment, expert trainers, and a community that keeps you motivated. Your transformation starts today.`
- cafe → `Specialty coffee sourced from the finest farms, paired with freshly baked pastries. Come in and stay awhile.`

**Social proof pill text:**
- salon → `500+ Happy Clients` | clinic → `1,200+ Patients` | restaurant → `300+ Daily Covers`
- boutique → `2,000+ Items` | gym → `800+ Members` | cafe → `500+ Cups Daily`

**Stats (4 items):**
- salon → `500+ / Clients/Month`, `8 / Years Open`, `4.9★ / Rating`, `12 / Stylists`
- clinic → `1,200+ / Patients/Month`, `15 / Doctors`, `98% / Satisfaction`, `10 / Years Open`
- restaurant → `300+ / Covers/Day`, `80 / Menu Items`, `3 / Locations`, `12 / Years Open`
- boutique → `2,000+ / Items`, `40+ / Designers`, `5 / Cities`, `8 / Years Open`
- gym → `800+ / Members`, `20 / Trainers`, `5,000 sqft / Space`, `6 / Years Open`
- cafe → `500+ / Cups/Day`, `12 / Blends`, `60 / Seats`, `5 / Years Open`

**Services (6 items with RM prices and descriptions):**
- salon → `Hair Cut / RM 60 / Wash, cut & blow dry`, `Hair Colour / RM 150 / Full colour + treatment`, `Facial Treatment / RM 120 / 60-min deep cleanse`, `Manicure / RM 50 / Classic manicure + polish`, `Pedicure / RM 60 / Relaxing foot treatment`, `Bridal Makeup / RM 350 / Full glam + trial session`
- clinic → `General Checkup / RM 80 / Full physical exam`, `Specialist Referral / RM 150 / Specialist appointment`, `Vaccination / RM 60 / All major vaccines`, `Dental Cleaning / RM 100 / Scale & polish`, `Eye Screening / RM 90 / Vision + pressure check`, `Health Screening / RM 200 / Comprehensive panel`
- restaurant → `Set Lunch (2 courses) / RM 35 / Soup, main & dessert`, `Set Dinner (3 courses) / RM 75 / 3-course fine dining`, `Weekend Brunch / RM 45 / Weekend special menu`, `Private Dining (min 8 pax) / RM 120pp / Exclusive private room`, `Catering Package / RM 80pp / Customised event menus`, `Chef's Tasting Menu / RM 180 / 8-course chef selection`
- boutique → `Ready-to-Wear / from RM 150 / In-stock curated pieces`, `Custom Order / from RM 400 / Made-to-measure design`, `Alteration / from RM 30 / Tailoring & hemming`, `Accessories / from RM 50 / Bags, jewellery & more`, `Seasonal Collection / from RM 200 / New season arrivals`, `Gift Wrapping / RM 15 / Luxury gift packaging`
- gym → `Monthly Membership / RM 99 / Full facility access`, `Personal Training (1hr) / RM 120 / One-on-one coaching`, `Group Class / RM 25 / HIIT, yoga & more`, `Day Pass / RM 30 / Single day access`, `Nutrition Plan / RM 200 / Personalised meal plan`, `Corporate Package / RM 79/pax / Bulk team pricing`
- cafe → `Filter Coffee / RM 8 / Single origin drip`, `Espresso / RM 10 / Pulled shots + milk`, `All-Day Breakfast / RM 22 / Eggs, toast & sides`, `Lunch Set / RM 18 / Rice or sandwich set`, `House Pastry / RM 9 / Daily baked selection`, `Bottled Cold Brew / RM 14 / 500ml chilled brew`

**FAQ (3 Q&A pairs):**
- salon → `Do I need to book in advance? / Yes, we recommend booking at least 2 days ahead. Walk-ins welcome subject to availability.` | `What payment methods do you accept? / Cash, credit/debit card, and e-wallet (Touch 'n Go, GrabPay).` | `Do you offer student discounts? / Yes — 10% off selected services with a valid student ID.`
- clinic → `Do I need a referral to see a specialist? / No referral needed. Book directly with any specialist online or by phone.` | `Is my insurance accepted? / We accept most major insurance panels. Call ahead to confirm your plan.` | `How early should I arrive? / We recommend arriving 10 minutes early to complete registration.`
- restaurant → `Do you accept walk-ins? / Yes, though reservations are recommended for weekends and public holidays.` | `Is there a minimum spend? / No minimum for standard bookings. Private dining requires a deposit.` | `Do you cater for dietary needs? / Yes — vegetarian, vegan, gluten-free, and halal options available.`
- boutique → `What is your return policy? / Items in original condition with tags can be returned within 14 days for exchange or store credit.` | `Do you offer custom sizing? / Yes, all custom orders include 2 complimentary fitting sessions.` | `How long does a custom order take? / Typically 3–4 weeks from design confirmation and deposit.`
- gym → `Is there a joining fee? / No joining fee for the first month — just your monthly membership.` | `Can I freeze my membership? / Members can freeze up to 2 months per year with 7 days notice.` | `Do you offer a free trial? / Yes — first 3 days free for new members. No credit card required.`
- cafe → `What are your opening hours? / Mon–Fri: 8am–6pm, Sat–Sun: 9am–5pm. Closed on public holidays.` | `Do you have WiFi? / Yes, complimentary high-speed WiFi for all customers.` | `Do you offer delivery? / Yes, via GrabFood and Foodpanda within a 5km radius.`

**Mission/Vision/Values:**
- salon → Mission: Empower every client to feel their most confident self. | Vision: The most trusted beauty destination in the city. | Values: Creativity · Care · Consistency
- clinic → Mission: Deliver compassionate, evidence-based healthcare to every patient. | Vision: A healthier community, one consultation at a time. | Values: Integrity · Expertise · Compassion
- restaurant → Mission: Create memorable dining experiences with honest, seasonal food. | Vision: A table for everyone — no pretension, just great cooking. | Values: Quality · Hospitality · Sustainability
- boutique → Mission: Help every customer discover their signature style. | Vision: Fashion that is personal, sustainable, and joyful. | Values: Craftsmanship · Inclusivity · Originality
- gym → Mission: Help members build strength, confidence, and lasting habits. | Vision: The most results-driven fitness community in the region. | Values: Discipline · Community · Progress
- cafe → Mission: Serve exceptional coffee that brightens your day. | Vision: A neighbourhood cafe where everyone feels at home. | Values: Craft · Warmth · Consistency

**Team (4 members):**
- salon → `Aisyah Rahman / Lead Stylist & Founder`, `Priya Nair / Colour Specialist`, `Siti Hajar / Beauty Therapist`, `Lena Tan / Nail Technician`
- clinic → `Dr. Sarah Wong / General Practitioner`, `Dr. Amir Hassan / Specialist`, `Nurse Farah / Head Nurse`, `Dr. Tan Mei Lin / Dental Surgeon`
- restaurant → `Chef Marco / Executive Chef`, `Aisha Karim / Sous Chef`, `James Loh / Floor Manager`, `Nina Patel / Pastry Chef`
- boutique → `Sofia Yusof / Creative Director`, `Rachel Teh / Stylist`, `Mei Ling / Seamstress`, `Zara Hanif / Sales Lead`
- gym → `Coach Rizal / Head Trainer`, `Aiyana Park / Yoga Instructor`, `Marcus Lee / Strength Coach`, `Tina Chong / Nutrition Lead`
- cafe → `Ben Ooi / Head Barista`, `Clara Ng / Kitchen Lead`, `Hafiz Yusuf / Roaster`, `Mei Shan / Front of House`

**About eyebrow / heading:**
- salon → `Our Story` / `Where Beauty Meets Craft` | clinic → `About Us` / `Healthcare Built on Trust`
- restaurant → `Our Story` / `Cooking With Intention` | boutique → `Our Story` / `Fashion With Purpose`
- gym → `About Us` / `Built for Results` | cafe → `Our Story` / `Crafted With Care`

**About paragraphs (founding / growth / mission — substitute {name} literally):**
- salon → P1: `{name} was founded in 2016 by Aisyah Rahman, a classically trained stylist who believed every client deserves a truly transformative experience — not just a haircut. Starting from a single chair in Bangsar, she built a space where artistry and genuine care go hand in hand.` P2: `By 2020, {name} had grown into a full-service beauty studio with 12 specialists, earning recognition as one of KL's top-rated salons. Our reputation is built on consistency, creativity, and an unwavering commitment to every guest.` P3: `Today, our mission is simple: empower every client to feel their most confident self. Whether you're here for a quick trim or a full bridal transformation, every visit is an opportunity to make you shine.`
- clinic → P1: `{name} was established in 2014 by Dr. Sarah Wong, driven by a belief that quality healthcare should be accessible, compassionate, and personal. What began as a small GP clinic in Petaling Jaya has grown into a full-service medical centre.` P2: `Over the years, we expanded our team to include specialists across dental, vision, and preventive care — earning the trust of over 1,200 patients monthly. Every doctor on our team shares the same commitment to evidence-based, patient-first care.` P3: `Our mission today is to be the healthcare partner you turn to at every stage of life. From routine checkups to specialist consultations, we're here for the long term.`
- restaurant → P1: `{name} opened in 2012 with a simple belief: great food should be honest, seasonal, and shared. Our founding chef Marco spent years training in France and Italy before returning to KL with a vision for modern Malaysian-inspired cuisine.` P2: `Over a decade later, we've grown to three locations across the Klang Valley, each maintaining the same commitment to fresh ingredients and warm hospitality that defined our first dining room.` P3: `We believe a meal is more than what's on the plate — it's the conversation, the atmosphere, and the memory you take home. Every service, we cook with that in mind.`
- boutique → P1: `{name} opened in 2018 as a curated concept store in Bukit Bintang, founded by Sofia Yusof with a mission to make well-crafted fashion accessible to every woman.` P2: `Today, we carry over 2,000 pieces from 40+ independent designers across Asia, alongside our own custom-order label. We've expanded to five cities, always keeping craftsmanship and personal style at the centre.` P3: `We believe getting dressed should feel joyful — not overwhelming. Our stylists are here to help you find pieces that truly feel like you.`
- gym → P1: `{name} was founded in 2019 by Coach Rizal, a competitive athlete who believed the best gyms weren't about equipment — they were about community. He opened our Mont Kiara facility with 20 members and a clear mission: results that last.` P2: `Since then, we've grown to over 800 active members, 20 certified trainers, and a 5,000 sqft facility equipped for every training style.` P3: `Everything we do is built around one idea: helping you build habits that stick. Whether you're starting out or chasing a new personal best, we're here to coach you every step of the way.`
- cafe → P1: `{name} opened in 2020 in the heart of Damansara, founded by head barista Ben Ooi after a decade spent at specialty cafes across Melbourne and Tokyo.` P2: `We source beans from single-origin farms in Ethiopia, Colombia, and Indonesia — roasted in-house every week. Since opening, we've become a daily ritual for hundreds of regulars.` P3: `We believe a great cup of coffee can change how your day begins. Every drink we serve is made with intention, from the grind to the final pour.`

**Testimonials (3):**
- salon → `"I've been coming to {name} for three years and wouldn't trust anyone else with my hair." — Sarah Lim, Regular Client` | `"The atmosphere is so calming and the team incredibly skilled. My bridal makeup was absolutely flawless." — Nurul Ain, Bridal Client` | `"Best hair colour I've ever had. I get compliments everywhere I go." — Michelle Tan, Colour Client`
- clinic → `"The doctors here genuinely listen. None of the other clinics I've tried came close to the care at {name}." — Ahmad Rizal, Regular Patient` | `"My health screening results came back within 24 hours with a full explanation from my doctor." — Cindy Loh, Health Screening` | `"My entire family comes here now. The team makes every visit comfortable, even for my kids." — Priya Menon, Family Patient`
- restaurant → `"We celebrated our anniversary here and it was perfect. The tasting menu is exceptional." — James Ooi, Anniversary Dinner` | `"The best set lunch in the city, hands down. Fresh, beautifully plated, always warm service." — Fatimah Zahra, Regular Guest` | `"We booked the private dining room for a corporate dinner and it exceeded all expectations." — David Tan, Corporate Event`
- boutique → `"I came in for one outfit and left with a whole new wardrobe. The stylists have incredible taste." — Liyana Ismail, Regular Shopper` | `"My custom order was delivered exactly as I imagined it. The fit was perfect." — Rachel Yap, Custom Order` | `"Finally a boutique that carries pieces you won't see everywhere else." — Amirah Hassan, Regular Client`
- gym → `"Nothing comes close to the coaching quality here. I've hit goals I never thought possible." — Kevin Ng, Member since 2021` | `"I've lost 12kg in 4 months and feel stronger than ever. The trainers genuinely care." — Rina Aziz, Personal Training` | `"The community here is unlike anything I've experienced. The classes are genuinely fun." — Daniel Chua, Group Class`
- cafe → `"This place has become part of my morning routine. The filter coffee is exceptional." — Sofia Lee, Daily Regular` | `"Best flat white I've had outside of Melbourne, full stop." — Marcus Yong, Coffee Enthusiast` | `"A beautifully designed space with coffee that actually lives up to how it looks." — Nadia Razak, Weekend Visitor`

**CTA Banner (headline / subtext):**
- salon → `Book Your Appointment Today` / `Don't wait to feel your best. Slots fill up fast.`
- clinic → `Your Health Starts Here` / `Take the first step. Book a consultation with one of our specialists today.`
- restaurant → `Reserve Your Table Tonight` / `Secure your spot and let us take care of the rest.`
- boutique → `Find Your Signature Style` / `Our stylists are ready to help you build a wardrobe you'll love.`
- gym → `Start Your Transformation Today` / `The hardest part is walking through the door. Let us take care of everything after that.`
- cafe → `Come In, Stay Awhile` / `Great coffee, good company, and a seat with your name on it.`

**Features / "Why Choose Us" (3 items per industry — LucideIcon / heading / description):**
- salon → `Scissors / Certified Stylists / All specialists are industry-certified with 5+ years of hands-on experience.` | `ShoppingBag / Premium Products / We use only top-tier, cruelty-free products on every client.` | `Clock / Flexible Booking / Book online, call us, or walk in — we work around your schedule.`
- clinic → `HeartPulse / Experienced Doctors / All doctors hold specialist qualifications and 10+ years of clinical practice.` | `Zap / Fast Results / Lab results and health reports delivered within 24 hours of your visit.` | `MessageCircle / Patient-First Care / We listen first, treat second — no rushed consultations, ever.`
- restaurant → `Leaf / Farm to Table / Ingredients sourced fresh daily from local farms and trusted suppliers.` | `UtensilsCrossed / Award-Winning Chefs / Our kitchen is led by chefs trained across France, Italy, and Japan.` | `Wine / Curated Drinks / Hand-selected wines and craft cocktails to complement every dish.`
- boutique → `ShoppingBag / Curated Selection / Every piece is hand-picked by our in-house stylists from 40+ designers.` | `Scissors / Tailoring Included / Complimentary alterations on all custom orders for the perfect fit.` | `Sparkles / Personal Styling / One-on-one sessions to build a wardrobe you'll love wearing every day.`
- gym → `Dumbbell / Certified Coaches / All trainers are certified and specialise in results-focused programming.` | `BarChart2 / Progress Tracking / Weekly check-ins and body composition analysis included with membership.` | `Users / Strong Community / Group classes, member events, and a culture that keeps you accountable.`
- cafe → `Coffee / Specialty Sourcing / Single-origin beans roasted weekly — never mass-produced or stale.` | `Cookie / Baked Daily / All pastries and bread made fresh in-house every single morning.` | `Wifi / Great WiFi / High-speed connection and power outlets for remote workers and students.`

**Milestones (3 items per industry — year / description):**
- salon → `2016 / Opened our first styling chair in Bangsar.` | `2019 / Expanded to a full beauty studio with 8 certified specialists.` | `2022 / Named KL's top-rated salon for two consecutive years.`
- clinic → `2014 / Founded in Petaling Jaya as a single GP practice.` | `2018 / Added dental, specialist, and preventive care services.` | `2022 / Reached 1,200+ patients per month across all specialities.`
- restaurant → `2012 / Opened our first dining room at KLCC.` | `2016 / Expanded to three locations across the Klang Valley.` | `2021 / Launched private dining, catering, and a chef's tasting menu.`
- boutique → `2018 / Opened as a pop-up concept store in Bukit Bintang.` | `2020 / Became a permanent boutique, outgrowing the space within six months.` | `2023 / Expanded to five cities with over 2,000 curated pieces.`
- gym → `2019 / Opened our first facility in Mont Kiara with 20 founding members.` | `2021 / Expanded to a 5,000 sqft floor with full equipment and group studios.` | `2023 / Reached 800+ active members and 20 certified trainers on staff.`
- cafe → `2020 / Opened in Damansara with 60 seats and a focused single-origin menu.` | `2022 / Started roasting in-house, sourcing from farms across three continents.` | `2024 / Became a daily ritual for over 500 regulars in the neighbourhood.`

**Process Steps / "How It Works" (3 steps per industry — title / description):**
- salon → `Book Your Slot / Choose your service and preferred stylist online or by phone.` | `Come In & Consult / Your stylist walks through your desired look and recommends the best treatment.` | `Leave Looking Great / Sit back, relax, and walk out feeling like a new version of yourself.`
- clinic → `Book an Appointment / Schedule online or by phone — same-day slots often available.` | `Meet Your Doctor / Arrive 10 minutes early. Your consultation starts on time with no rushing.` | `Receive Your Results / Lab results and prescriptions delivered within 24 hours, with full explanations.`
- restaurant → `Make a Reservation / Book online or call us — walk-ins welcome based on availability.` | `Arrive and Be Seated / Our team greets you and walks you through the menu and today's specials.` | `Enjoy Your Meal / Sit back and let us take care of everything from starter to dessert.`
- boutique → `Walk In or Book a Session / Browse the floor or schedule a personal styling appointment.` | `Discover Your Style / Our stylists curate a selection based on your taste and the occasion.` | `Leave Dressed Perfectly / Alterations, gift-wrapping, and same-day delivery all available.`
- gym → `Start Your Free Trial / 3 days free — no credit card, no commitment, no pressure.` | `Meet Your Coach / We assess your goals and design a personalised training programme together.` | `Train and Track Progress / Weekly check-ins and body composition milestones keep you on target.`
- cafe → `Walk In Anytime / We're open daily — no reservation needed, just follow the aroma.` | `Order at the Counter / Our baristas guide you through today's beans, blends, and brew methods.` | `Find Your Spot / Take a seat, connect to WiFi, and stay as long as you like.`

**Extra FAQ items 4–6 per industry (appended after the base 3 from above):**
- salon → `Can I request a specific stylist? / Yes — all bookings can specify a preferred stylist. We'll do our best to accommodate.` | `Do you cater for bridal parties? / Yes — group bridal packages for up to 10 guests. Contact us for a quote.` | `What products do you use? / We use Kerastase, Olaplex, and a range of cruelty-free professional products.`
- clinic → `Do you offer home visits? / For mobility-limited patients we can arrange home consultations — call us to enquire.` | `Are paediatric services available? / Yes — our doctors are experienced with patients of all ages, including children.` | `What should I bring to my first visit? / A valid ID, your current medication list, and your insurance card if applicable.`
- restaurant → `Is the menu halal? / Yes — our kitchen follows halal preparation and all meat suppliers are halal-certified.` | `Can we bring our own cake? / Yes — cakes and decorations are welcome. We can also arrange florals and setup.` | `Do you cater large events? / Yes, from 20 to 300 guests. Contact us for a custom catering quote.`
- boutique → `Do you offer gift cards? / Yes — gift cards in any denomination are available in-store and online.` | `Is there a loyalty programme? / Yes — members earn points on every purchase, redeemable on future visits.` | `Do you ship internationally? / Yes — we ship to Singapore, Indonesia, and Thailand. Duties may apply.`
- gym → `Are there lockers and showers? / Yes — full locker rooms with showers, towels, and secure storage are provided.` | `Can I bring a guest? / Members get 1 free guest pass per month. Additional day passes are RM 30.` | `Do you offer online classes? / Yes — members access a library of 100+ recorded workout sessions.`
- cafe → `Do you have a loyalty programme? / Every 10 drinks earns you one free. No app needed — just a stamp card.` | `Do you accept reservations? / We operate on a walk-in basis. Groups of 8+ can call ahead to reserve.` | `Do you have vegan options? / Yes — oat milk, almond milk, and vegan pastry options are available daily.`

---

## Step 3.5 — Generate images with Gemini

Before writing any TSX code, generate 4 images using the `mcp__gemini-mcp__generate_image` tool. Save each image to `public/images/{slug}/` and reference them in TSX as local paths (e.g. `/images/{slug}/hero.jpg`).

**Call the tool 4 times — one per section:**

| Section | File | aspectRatio | imageSize |
|---|---|---|---|
| hero | `public/images/{slug}/hero.jpg` | `16:9` | `4K` |
| about | `public/images/{slug}/about.jpg` | `4:3` | `4K` |
| services | `public/images/{slug}/services.jpg` | `4:3` | `4K` |
| cta | `public/images/{slug}/cta.jpg` | `16:9` | `4K` |

**Industry prompts:**

| Industry | hero | about | services | cta |
|---|---|---|---|---|
| salon | `Elegant hair salon interior, modern styling chairs, warm lighting, professional beauty setting, photo-realistic` | `Close-up of a hairstylist working on a client, warm salon atmosphere, natural light, editorial style` | `Luxury salon products and tools laid out on a white marble surface, top-down view, clean aesthetic` | `Beautiful woman with flawless hair leaving a salon, smiling, natural light, lifestyle photography` |
| clinic | `Modern private medical clinic reception, clean white interior, professional healthcare environment, photo-realistic` | `Friendly doctor consulting with a patient in a bright clinic room, trust and warmth, editorial style` | `Medical equipment and health screening tools neatly arranged, clinical white background, professional` | `Happy patient shaking hands with doctor, bright clinic corridor, positive healthcare outcome` |
| restaurant | `Upscale restaurant dining room at night, warm amber lighting, elegant table settings, fine dining atmosphere` | `Executive chef plating an artistic dish in a professional kitchen, motion and focus, editorial style` | `Beautifully plated gourmet meal on dark slate, garnished with microgreens, top-down food photography` | `Full restaurant with happy diners, warm candlelight ambiance, sophisticated interior, lifestyle photography` |
| boutique | `Luxury fashion boutique interior, curated clothing racks, soft natural light, minimalist elegant design` | `Fashion stylist helping a client try on an outfit in a bright fitting room, joyful moment, editorial` | `Flatlay of curated clothing and accessories on white background, styled with minimal props, editorial` | `Confident woman in a stylish outfit walking out of a boutique, sunny street, lifestyle photography` |
| gym | `Modern gym interior, rows of equipment, bright industrial lighting, motivational atmosphere, photo-realistic` | `Personal trainer coaching a client with weights, gym floor, focus and energy, editorial photography` | `Fitness equipment close-up — dumbbells, kettlebells, resistance bands — clean gym background` | `Athlete completing a workout, triumphant expression, gym environment, high contrast lighting` |
| cafe | `Cosy specialty coffee shop interior, exposed brick walls, warm lighting, latte art being made at the bar` | `Barista carefully pouring latte art into a cup, close-up, steam rising, warm cafe tones` | `Flat lay of specialty coffee drinks and pastries on a wooden cafe table, morning light, editorial` | `Coffee shop window seat with a cup of coffee and a book, golden hour light, lifestyle photography` |

**After generating all 4 images:**
- Save each file to the correct path under `public/images/{slug}/`
- In all TSX files, reference images as `/images/{slug}/hero.jpg`, `/images/{slug}/about.jpg`, etc.
- Do NOT use Unsplash CDN URLs for hero/about/services/cta sections

**Team portraits and testimonial avatars** still use Unsplash CDN:

Team portraits (w=500, h=700):
Member 1: photo-1531746020798-e6953c6e8e04 | Member 2: photo-1494790108377-be9c29b29330
Member 3: photo-1438761681033-6461ffad8d80 | Member 4: photo-1534528741775-53994a69daeb

Testimonial avatars (w=80, h=80):
Review 1: photo-1580489944761-15a19d654956 | Review 2: photo-1438761681033-6461ffad8d80 | Review 3: photo-1534528741775-53994a69daeb

Social proof pill avatars (w=40, h=40): Review 2, Review 3, Member 2 photo IDs.

---

## Step 4 — Shared local helpers

Every generated TSX file begins with these helpers (copy verbatim into each file — do NOT import from a shared module):

```tsx
import { motion, AnimatePresence } from 'motion/react';

function Reveal({ children, className = '', delay = 0, direction = 'up' }: {
  children: React.ReactNode; className?: string; delay?: number; direction?: 'up' | 'down' | 'left' | 'right';
}) {
  const dirs: Record<string, { x?: number; y?: number }> = {
    up: { y: 40 }, down: { y: -40 }, left: { x: 40 }, right: { x: -40 },
  };
  return (
    <motion.div
      initial={{ opacity: 0, ...dirs[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
```

The font constant (per file): `const font = { fontFamily: '"{font}", serif' };`

---

## Step 5 — Generate Layout

**Path:** `resources/js/components/{slug}/{pascal}Layout.tsx`

```tsx
import { useState, useEffect } from 'react';
import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MapPin, Phone, Mail, {LogoIcon} } from 'lucide-react';

function InstagramIcon({ size = 16 }: { size?: number }) { /* inline SVG from Step 4 */ }
function FacebookIcon({ size = 16 }: { size?: number }) { /* inline SVG from Step 4 */ }

const font = { fontFamily: '"{font}", serif' };

export default function {pascal}Layout({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/{slug}' },
    { label: 'About', path: '/{slug}/about' },
    { label: 'Services', path: '/{slug}/services' },
    { label: 'FAQ', path: '/{slug}/faq' },
    { label: 'Contact', path: '/{slug}/contact' },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans">

      {/* ── Navbar ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-neutral-100 ${scrolled ? 'shadow-sm' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link to="/{slug}" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-{color}-600 flex items-center justify-center">
              <{LogoIcon} size={15} className="text-white" />
            </div>
            <span className="font-bold text-base tracking-tight">
              {/* First word(s) black, last word in text-{color}-600 span */}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link key={link.path} to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-{color}-600 bg-{color}-50'
                    : 'text-neutral-500 hover:text-{color}-600 hover:bg-neutral-50'
                }`}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link to="/{slug}/contact" className="hidden md:block">
              <button className="bg-{color}-600 hover:bg-{color}-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all">
                {/* CTA label from Step 3 */}
              </button>
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors">
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-neutral-100 bg-white"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {navLinks.map(link => (
                  <Link key={link.path} to={link.path} onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-{color}-600 bg-{color}-50'
                        : 'text-neutral-600 hover:text-{color}-600 hover:bg-neutral-50'
                    }`}>
                    {link.label}
                  </Link>
                ))}
                <Link to="/{slug}/contact" onClick={() => setMobileOpen(false)}>
                  <button className="w-full mt-2 bg-{color}-600 hover:bg-{color}-700 text-white py-3 rounded-xl text-sm font-semibold transition-all">
                    {/* CTA label */}
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page content — padded for fixed navbar */}
      <main className="pt-18">{children}</main>

      {/* ── Footer ── */}
      <footer className="bg-black text-neutral-400 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-neutral-800">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-{color}-600 flex items-center justify-center">
                  <{LogoIcon} size={14} className="text-white" />
                </div>
                <span className="text-white font-bold">{name}</span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs mb-6">{/* 1-sentence brand blurb */}</p>
              <div className="flex gap-3">
                <button className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-all text-neutral-400 hover:text-white">
                  <InstagramIcon size={15} />
                </button>
                <button className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-all text-neutral-400 hover:text-white">
                  <FacebookIcon size={15} />
                </button>
              </div>
            </div>
            <div>
              <p className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Hours</p>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span>Mon – Fri</span><span className="text-neutral-300">9am – 7pm</span></li>
                <li className="flex justify-between"><span>Saturday</span><span className="text-neutral-300">9am – 6pm</span></li>
                <li className="flex justify-between"><span>Sunday</span><span className="text-neutral-300">10am – 4pm</span></li>
              </ul>
            </div>
            <div>
              <p className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Contact</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><MapPin size={13} className="text-{color}-500 mt-0.5 shrink-0" /><span>{/* short address */}</span></li>
                <li className="flex items-center gap-2"><Phone size={13} className="text-{color}-500 shrink-0" /><span>{/* phone */}</span></li>
                <li className="flex items-center gap-2"><Mail size={13} className="text-{color}-500 shrink-0" /><span>hello@{slug}.com.my</span></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
            <p>© {new Date().getFullYear()} {name}. All Rights Reserved.</p>
            <div className="flex gap-5">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
```

---

## Step 6 — Generate Home page

**Path:** `resources/js/pages/{slug}/Home.tsx`

Imports: `useState` from `react`; `Link` from `react-router-dom`; `motion, AnimatePresence` from `motion/react`; `ArrowRight, Star` from `lucide-react`. Plus local Reveal helper (copy from Step 4).

```tsx
export default function {pascal}Home() {
  return (
    <>
      {/* ── Hero ── */}
      {/* Full-screen with real bg photo (industry hero from Step 3.5), gradient overlay, bottom-anchored text */}
      {/* Same pattern as new-business-site hero but WITHOUT the floating header (navbar is in Layout) */}
      {/* Remove pt-[72px] from section — main already handles it */}
      <section className="relative min-h-[calc(100vh-72px)] flex items-end pb-20 overflow-hidden">
        <img src="https://images.unsplash.com/{hero-photo}?auto=format&fit=crop&w=1800&q=80" ... />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <Reveal>
            {/* Badge, h1 (font-black tracking-tighter), subtext, 2 buttons */}
            {/* h1: text-6xl md:text-8xl font-black text-white leading-none tracking-tighter mb-6 */}
            {/* Line 1 white, line 2 text-{color}-400 italic <em> */}
            {/* Primary button: Link to "/{slug}/contact" */}
            {/* Secondary button: Link to "/{slug}/services" label "View Services" */}
          </Reveal>
        </div>
        {/* Social proof pill — hidden md:block, absolute bottom-8 right-8 */}
      </section>

      {/* ── Stats ── */}
      {/* bg-black, grid cols-2 md:cols-4 divide-x divide-neutral-800 */}
      {/* Values: font-black text-4xl md:text-5xl */}

      {/* ── Why Choose Us ── */}
      {/* py-24 bg-white */}
      {/* Eyebrow (text-{color}-600) + h2 "Why Choose {name}" (font-extrabold tracking-tight) + short lead paragraph, centered */}
      {/* 3 feature cards in grid md:grid-cols-3 gap-6 */}
      {/* Each card: rounded-3xl border border-neutral-100 hover:border-{color}-200 hover:shadow-md p-8, icon in w-12 h-12 rounded-2xl bg-{color}-50 text-{color}-600, bold heading mb-2, neutral-500 description */}
      {/* Use Features data from Step 3 for this industry — import the correct Lucide icons listed there */}

      {/* ── Services preview (3 cards) ── */}
      {/* bg-neutral-50, show first 3 services as cards, "View All Services" Link to /{slug}/services */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-{color}-600 text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4" style={font}>Our Services</h2>
            <p className="text-neutral-500 max-w-xl mx-auto text-sm">Transparent pricing, no hidden fees.</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* First 3 services from Step 3, each as a white rounded-3xl card p-8 border border-neutral-100 hover:border-{color}-200 hover:shadow-md transition-all */}
            {/* Card: icon circle (bg-{color}-50 text-{color}-600) + service name (font-bold) + description + price (text-{color}-600 font-extrabold text-xl mt-4) */}
          </div>
          <div className="text-center">
            <Link to="/{slug}/services">
              <button className="bg-{color}-600 hover:bg-{color}-700 text-white px-8 py-4 rounded-full font-semibold text-sm transition-all inline-flex items-center gap-2">
                View All Services <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials (3 cards) ── */}
      {/* bg-white, same 3-card grid as new-business-site */}

      {/* ── CTA Banner ── */}
      {/* Real bg image with overlay, centered text, Link to /{slug}/contact */}
    </>
  );
}
```

Fill in all sections completely with real content. No placeholder comments in the final output.

---

## Step 7 — Generate About page

**Path:** `resources/js/pages/{slug}/About.tsx`

Imports: `motion` from `motion/react`; Reveal helper (copy from Step 4); `Star` from `lucide-react`.

```tsx
export default function {pascal}About() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-{color}-600 text-sm font-semibold uppercase tracking-widest mb-3">{/* eyebrow from Step 3 */}</p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight" style={font}>
              {/* 2-line heading from Step 3 about heading */}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── About Story ── */}
      {/* py-24, 2-col: real about image left (h-140 rounded-3xl) + floating accent badge, text right */}
      {/* 3 paragraphs from Step 3 about paragraphs */}

      {/* ── Milestones ── */}
      {/* py-20 bg-neutral-50 */}
      {/* Eyebrow + h2 "Our Journey" (font-extrabold tracking-tight), centered header */}
      {/* 3 milestone cards in grid md:grid-cols-3 gap-6 */}
      {/* Each card: rounded-3xl border border-neutral-100 p-8. Year as text-5xl font-black text-{color}-600 mb-2. Description as text-neutral-500 text-sm leading-relaxed. */}
      {/* Use Milestones data from Step 3 for this industry */}

      {/* ── Mission / Vision / Values ── */}
      {/* Use mvvVariant from Step 2.8 — see MVV variant reference below */}

      {/* ── Team ── */}
      {/* py-24 bg-neutral-50, 4 portrait cards with real photos, aspect-3/4, gradient overlay */}
    </>
  );
}
```

Fill in all sections completely with real content. No placeholder comments in the final output.

---

## Step 8 — Generate Services page

**Path:** `resources/js/pages/{slug}/Services.tsx`

Imports: Reveal helper; `{LogoIcon}` from `lucide-react`.

```tsx
export default function {pascal}Services() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-{color}-600 text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight" style={font}>Services &amp; Pricing</h1>
            <p className="text-neutral-500 mt-4 max-w-lg text-sm leading-relaxed">
              Transparent pricing, no hidden fees. Every service is delivered by a certified specialist.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── How It Works ── */}
      {/* py-20 bg-neutral-50 */}
      {/* Eyebrow + h2 "How It Works" (font-extrabold tracking-tight) + short lead text, centered */}
      {/* 3 step cards in grid md:grid-cols-3 gap-6 */}
      {/* Each card: rounded-3xl border border-neutral-100 bg-white p-8. Step number as text-5xl font-black text-{color}-600 opacity-20 mb-4 (decorative). Bold step title mb-2. neutral-500 description. */}
      {/* Actually render step numbers as "01" "02" "03" in a span */}
      {/* Use Process Steps data from Step 3 for this industry */}

      {/* ── Full Price List ── */}
      {/* bg-white py-24 */}
      {/* Same sticky-left + price-card-right layout as new-business-site Services section */}
      {/* Left: eyebrow, h2 (font-extrabold tracking-tight), description, real services photo */}
      {/* Right: white card with all 6 services (icon + name + desc + price) */}

      {/* ── CTA Banner ── */}
      {/* Real bg image, dark overlay, centered CTA */}
    </>
  );
}
```

Fill in all sections completely with real content. No placeholder comments in the final output.

---

## Step 9 — Generate FAQ page

**Path:** `resources/js/pages/{slug}/Faq.tsx`

Use `faqVariant` from Step 2.8. Imports: `useState`; `motion, AnimatePresence`; `ChevronDown, ChevronRight, MessageCircle, ArrowRight`; `Link` from `react-router-dom`; Reveal helper.

The page always has a **Page Header** section (py-20 bg-neutral-50 border-b, eyebrow + h1) and a **Still Have Questions?** section (py-16 bg-neutral-50, centered CTA linking to `/{slug}/contact`). The variant only applies to the main accordion body between them.

---

**FAQ A — Centered accordion** · neutral-50 bg, all 6 items in a white rounded card with animated rows:
```tsx
<section className="py-24">
  <div className="max-w-3xl mx-auto px-6 lg:px-8">
    <div className="bg-white rounded-3xl border border-neutral-100 shadow-sm overflow-hidden">
      {faqItems.map((item, i) => (
        <div key={i} className="border-b border-neutral-100 last:border-b-0">
          <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="w-full text-left px-8 py-6 flex justify-between items-center group">
            <span className="font-medium text-sm group-hover:text-{color}-600 transition-colors pr-4">{item.q}</span>
            <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.25 }}
              className="shrink-0 text-neutral-300 group-hover:text-{color}-400 transition-colors">
              <ChevronDown size={18} />
            </motion.div>
          </button>
          <AnimatePresence>
            {openFaq === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                <p className="px-8 pb-6 text-sm text-neutral-500 leading-relaxed">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

**FAQ B — Two-column split** · questions list left, selected answer revealed in right panel:
```tsx
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-start">
    <div className="space-y-2">
      {faqItems.map((item, i) => (
        <button key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)}
          className={`w-full text-left px-6 py-4 rounded-2xl border transition-all flex justify-between items-center gap-4 ${
            openFaq === i ? 'border-{color}-200 bg-{color}-50 text-{color}-700' : 'border-neutral-100 bg-neutral-50 hover:border-neutral-200 text-neutral-700'
          }`}>
          <span className="font-medium text-sm">{item.q}</span>
          <ChevronRight size={16} className={`shrink-0 transition-transform ${openFaq === i ? 'rotate-90' : ''}`} />
        </button>
      ))}
    </div>
    <div className="lg:sticky lg:top-28">
      <AnimatePresence mode="wait">
        {openFaq !== null ? (
          <motion.div key={openFaq} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
            className="bg-neutral-50 rounded-3xl border border-neutral-100 p-8">
            <div className="w-10 h-10 rounded-xl bg-{color}-50 text-{color}-600 flex items-center justify-center mb-5">
              <MessageCircle size={18} />
            </div>
            <h3 className="font-bold text-base mb-3" style={font}>{faqItems[openFaq].q}</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">{faqItems[openFaq].a}</p>
          </motion.div>
        ) : (
          <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="bg-neutral-50 rounded-3xl border border-dashed border-neutral-200 p-8 flex flex-col items-center justify-center text-center min-h-[200px]">
            <p className="text-neutral-400 text-sm">Select a question to see the answer.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
</section>
```

---

**FAQ C — Dark accordion** · dark bg, white text, accent border on open rows:
```tsx
<section className="py-24 bg-neutral-900">
  <div className="max-w-3xl mx-auto px-6 lg:px-8">
    <div className="space-y-3">
      {faqItems.map((item, i) => (
        <div key={i} className={`rounded-2xl border overflow-hidden transition-all ${
          openFaq === i ? 'border-{color}-500/40 bg-white/5' : 'border-white/10 bg-white/[0.03]'
        }`}>
          <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="w-full text-left px-7 py-5 flex justify-between items-center gap-4">
            <span className={`font-medium text-sm transition-colors ${openFaq === i ? 'text-{color}-400' : 'text-white/80'}`}>{item.q}</span>
            <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.25 }}
              className={`shrink-0 transition-colors ${openFaq === i ? 'text-{color}-400' : 'text-white/30'}`}>
              <ChevronDown size={18} />
            </motion.div>
          </button>
          <AnimatePresence>
            {openFaq === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                <p className="px-7 pb-5 text-sm text-white/50 leading-relaxed">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  </div>
</section>
```

Fill in all sections completely. No placeholder comments in the final output.

---

## Step 10 — Generate Contact page

**Path:** `resources/js/pages/{slug}/Contact.tsx`

Use `contactVariant` from Step 2.8. Imports: Reveal helper; `MapPin, Phone, Mail, Clock, ArrowRight` from `lucide-react`; `InstagramIcon, FacebookIcon` inline SVGs from Step 4.

The page always has a **Page Header** (py-20 bg-neutral-50 border-b, eyebrow + h1 "Get in Touch") and an **At a Glance** strip (py-16 bg-neutral-50, 3 feature mini-cards using the features data from Step 3). The variant only applies to the main contact body section below those.

---

**Contact A — Two-column: details left, form right** · white bg, icon-list on left, booking form card on right:
```tsx
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
    <Reveal direction="right">
      <p className="text-{color}-600 text-sm font-semibold uppercase tracking-widest mb-3">Find Us</p>
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-10" style={font}>Contact &amp; Location</h2>
      <div className="space-y-7">
        {/* Address, Phone, Email, Hours rows — icon in w-11 h-11 bg-{color}-50 rounded-2xl */}
      </div>
      <div className="mt-10 pt-10 border-t border-neutral-100">
        <p className="text-xs text-neutral-400 uppercase tracking-widest font-semibold mb-4">Follow Us</p>
        <div className="flex gap-3">
          <button className="w-10 h-10 rounded-full bg-{color}-50 hover:bg-{color}-100 flex items-center justify-center text-{color}-600 transition-colors"><InstagramIcon size={16} /></button>
          <button className="w-10 h-10 rounded-full bg-{color}-50 hover:bg-{color}-100 flex items-center justify-center text-{color}-600 transition-colors"><FacebookIcon size={16} /></button>
        </div>
      </div>
    </Reveal>
    <Reveal direction="left" delay={0.15}>
      <div className="bg-neutral-50 rounded-3xl p-8 md:p-10 border border-neutral-100">
        <h3 className="text-2xl font-bold mb-6" style={font}>{/* "Book an Appointment" or equivalent CTA label for this industry */}</h3>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          {/* Full Name, Phone + Service grid, Message, Submit button */}
          {/* Service dropdown: 6 options from Step 3 */}
        </form>
      </div>
    </Reveal>
  </div>
</section>
```

---

**Contact B — Centered form + 4 info cards below** · neutral-50 bg, centered heading, full-width form card on top, 4 info cards in a row below:
```tsx
<section className="py-24 bg-neutral-50">
  <div className="max-w-4xl mx-auto px-6 lg:px-8">
    <Reveal className="text-center mb-10">
      <p className="text-{color}-600 text-sm font-semibold uppercase tracking-widest mb-3">Find Us</p>
      <h2 className="text-4xl font-extrabold tracking-tight" style={font}>Contact &amp; Location</h2>
      <p className="text-neutral-500 text-sm mt-3 max-w-md mx-auto">Fill in the form and we'll get back to you within one business day.</p>
    </Reveal>
    <Reveal>
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-neutral-100 shadow-sm mb-8">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Full Name + Phone */}
          </div>
          {/* Service select */}
          {/* Message textarea */}
          {/* Submit button */}
        </form>
      </div>
    </Reveal>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* Address, Phone, Email, Hours — each as a white rounded-2xl card with centered icon + label + value */}
    </div>
  </div>
</section>
```

---

**Contact C — Dark full-width** · dark bg, white text, 2×2 info cards left, compact form right:
```tsx
<section className="py-24 bg-neutral-900">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
    <Reveal direction="right">
      <p className="text-{color}-400 text-sm font-semibold uppercase tracking-widest mb-3">Find Us</p>
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-10" style={font}>Contact &amp; Location</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Address, Phone, Email, Hours — each as bg-white/5 border-white/10 rounded-2xl p-5 card with icon in bg-{color}-500/20 text-{color}-400 */}
      </div>
      <div className="mt-8 flex gap-3">
        {/* Instagram + Facebook icon buttons — bg-white/5 border-white/10 hover:bg-{color}-500/20 */}
      </div>
    </Reveal>
    <Reveal direction="left" delay={0.15}>
      <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 md:p-10">
        <h3 className="text-2xl font-bold text-white mb-6" style={font}>{/* CTA label */}</h3>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          {/* All inputs: border-white/10 bg-white/5 text-white placeholder-white/20 focus:border-{color}-500 */}
          {/* Submit: bg-{color}-600 hover:bg-{color}-700 text-white */}
        </form>
      </div>
    </Reveal>
  </div>
</section>
```

Fill in all sections completely with real invented contact details (Malaysian address, phone, email). No placeholder comments in the final output.

---

## Step 11 — Patch `resources/js/App.tsx`

**11a — Add imports** after the last existing import block:
```tsx
// {name} standard site
import {pascal}Layout from './components/{slug}/{pascal}Layout';
import {pascal}Home from './pages/{slug}/Home';
import {pascal}About from './pages/{slug}/About';
import {pascal}Services from './pages/{slug}/Services';
import {pascal}Faq from './pages/{slug}/Faq';
import {pascal}Contact from './pages/{slug}/Contact';
```

**11b — Add routes** inside `<Routes>`:
```tsx
        {/* {name} standard site */}
        <Route path="/{slug}" element={<{pascal}Layout><{pascal}Home /></{pascal}Layout>} />
        <Route path="/{slug}/about" element={<{pascal}Layout><{pascal}About /></{pascal}Layout>} />
        <Route path="/{slug}/services" element={<{pascal}Layout><{pascal}Services /></{pascal}Layout>} />
        <Route path="/{slug}/faq" element={<{pascal}Layout><{pascal}Faq /></{pascal}Layout>} />
        <Route path="/{slug}/contact" element={<{pascal}Layout><{pascal}Contact /></{pascal}Layout>} />
```

Do not touch any existing routes or imports.

---

## Step 12 — Patch `resources/js/index.css`

Insert at line 1 (before all existing content):
```css
@import url('https://fonts.googleapis.com/css2?family={fontUrl}:wght@300;400;600;700;900&display=swap');
```

Do not remove existing `@import` lines or `@tailwind` directives.

---

## Step 13 — Print confirmation

```
✓ {name} standard site created

  Layout:   resources/js/components/{slug}/{pascal}Layout.tsx
  Pages:    resources/js/pages/{slug}/Home.tsx
            resources/js/pages/{slug}/About.tsx
            resources/js/pages/{slug}/Services.tsx
            resources/js/pages/{slug}/Faq.tsx
            resources/js/pages/{slug}/Contact.tsx

  Routes:   /{slug}            → Home
            /{slug}/about      → About
            /{slug}/services   → Services
            /{slug}/faq        → FAQ
            /{slug}/contact    → Contact

Visit http://localhost:8000/{slug}
```
