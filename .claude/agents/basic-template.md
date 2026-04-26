You are a business site scaffolder for a Laravel + React + Tailwind project. The user has invoked `/project:new-business-site` with these arguments:

$ARGUMENTS

Follow every step below in order. Do not skip steps. Do not ask for confirmation. Generate all files completely.

---

## Step 1 — Parse arguments

Extract these named arguments from `$ARGUMENTS`:
- `name` — brand name (e.g. `Mira Clinic`, `Sofea Beauty`) — **required**
- `industry` — one of: `salon` | `clinic` | `restaurant` | `boutique` | `gym` | `cafe` — **required**
- `color` — Tailwind accent color (e.g. `emerald`, `rose`, `amber`, `sky`, `violet`) — **optional, auto-derived from industry in Step 2.5**
- `font` — Google Font for headings (e.g. `Playfair Display`, `Lora`, `Outfit`, `DM Sans`) — **optional, auto-derived from industry in Step 2.5**
- `logo` — Lucide React icon name in lowercase (e.g. `heart-pulse`, `scissors`, `utensils`) — **optional, auto-derived from industry in Step 2.5**
- `variant` — layout style for Hero / About / Services sections: `A` | `B` | `C` — **optional, auto-derived from industry in Step 2.8**

Then derive:
- **slug**: kebab-case of `name`, all lowercase, spaces → hyphens, no special chars (e.g. `Mira Clinic` → `mira-clinic`, `SofeaBeauty` → `sofeabeauty`)
- **pascal**: PascalCase of `name`, no spaces (e.g. `Mira Clinic` → `MiraClinic`)
- **LogoIcon**: PascalCase of the `logo` value (e.g. `heart-pulse` → `HeartPulse`, `scissors` → `Scissors`)
- **fontUrl**: `font` value with spaces replaced by `+` (e.g. `Playfair Display` → `Playfair+Display`)

> If `name` or `industry` is missing, stop and ask. For `color`, `font`, and `logo` proceed to Step 2.5 to derive them from industry.

---

## Step 2 — Color token reference

`{color}` is the accent replacing black on interactive/decorative elements. White and neutral backgrounds stay unchanged.

> Resolve `{color}`, `{font}`, and `{logo}` using Step 2.5 before writing any code.

| Purpose | Token |
|---|---|
| Primary CTA button | `bg-{color}-600 hover:bg-{color}-700 text-white` |
| Icon containers | `bg-{color}-50 text-{color}-600` |
| Hover borders | `hover:border-{color}-400` |
| Contact icons | `text-{color}-500` |
| Accent heading spans / eyebrow labels | `text-{color}-600` |
| Input focus border | `focus:border-{color}-400` |
| Floating header scrolled logo bg | `bg-{color}-600` |
| Accent badge on hero | `bg-{color}-600 text-white` |
| Card hover border | `hover:border-{color}-200` |

The dark footer (`bg-black`) and stats bar (`bg-black`) stay black regardless of `{color}`.

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

> `fontStack` is the CSS generic family appended in the heading font constant. The `font` constant in every file must be: `const font = { fontFamily: '"{font}", {fontStack}' };`
> For `fontUrl` replace spaces with `+` (e.g. `DM Sans` → `DM+Sans`).

---

## Step 2.8 — Section Variants

If `variant` was **not** supplied, auto-derive all five section variants from `industry`:

| Industry | heroVariant | aboutVariant | servicesVariant | faqVariant | contactVariant |
|---|---|---|---|---|---|
| salon | B | A | B | A | A |
| clinic | B | A | A | A | A |
| restaurant | A | B | B | A | A |
| boutique | C | C | C | B | B |
| gym | A | A | B | C | C |
| cafe | A | B | B | A | B |

If `variant` **is** supplied (A, B, or C), use it for **all five sections**.

---

### Hero Variants

**Hero A — Cinematic** · full-screen image, dark gradient overlay, text anchored bottom-left:
```tsx
<section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
  <img src="..." className="absolute inset-0 w-full h-full object-cover" />
  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/10" />
  <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
    <Reveal>
      <span className="inline-block bg-{color}-600 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">{badge}</span>
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none mb-6" style={font}>
        {line1}<br /><em className="text-{color}-400 not-italic">{line2}</em>
      </h1>
      <p className="text-white/70 text-lg max-w-xl mb-10 leading-relaxed">{subtext}</p>
      <div className="flex flex-wrap gap-4">
        {/* Primary: bg-{color}-600 hover:bg-{color}-700 text-white rounded-full px-8 py-4 */}
        {/* Secondary: bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full px-8 py-4 */}
      </div>
    </Reveal>
  </div>
  {/* Social proof pill: absolute bottom-8 right-8 hidden md:block — bg-white rounded-2xl shadow-lg px-5 py-4 flex items-center gap-3 */}
</section>
```

**Hero B — Split** · white left panel with all text, full-height image fills right half:
```tsx
<section className="min-h-screen grid lg:grid-cols-2">
  <div className="bg-white flex items-center px-10 lg:px-16 py-24 lg:py-0 order-2 lg:order-1">
    <div className="max-w-lg w-full">
      <span className="inline-block bg-{color}-600 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">{badge}</span>
      <h1 className="text-5xl md:text-6xl font-black tracking-tight text-black leading-tight mb-6" style={font}>
        {line1}<br /><span className="text-{color}-600">{line2}</span>
      </h1>
      <p className="text-neutral-500 text-lg mb-10 leading-relaxed">{subtext}</p>
      <div className="flex flex-wrap gap-4 mb-10">
        {/* Primary: bg-{color}-600 hover:bg-{color}-700 text-white rounded-full px-8 py-4 */}
        {/* Secondary: bg-white border-2 border-neutral-200 hover:border-{color}-300 text-black rounded-full px-8 py-4 */}
      </div>
      {/* Social proof pill: inline, bg-neutral-50 border border-neutral-100 rounded-2xl px-5 py-3 flex items-center gap-3 */}
    </div>
  </div>
  <div className="relative min-h-[50vh] lg:min-h-screen order-1 lg:order-2">
    <img src="..." className="absolute inset-0 w-full h-full object-cover" />
  </div>
</section>
```

**Hero C — Centered Frost** · blurred image background, white/80 frost overlay, all content centered:
```tsx
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  <img src="..." className="absolute inset-0 w-full h-full object-cover scale-110 blur-sm" />
  <div className="absolute inset-0 bg-white/80 backdrop-blur-md" />
  <div className="relative text-center max-w-4xl mx-auto px-6">
    <Reveal>
      <span className="inline-block border-2 border-{color}-200 text-{color}-600 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">{badge}</span>
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black leading-none mb-6" style={font}>
        {line1}<br /><span className="text-{color}-600">{line2}</span>
      </h1>
      <p className="text-neutral-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">{subtext}</p>
      <div className="flex flex-wrap justify-center gap-4">
        {/* Primary: bg-{color}-600 hover:bg-{color}-700 text-white rounded-full px-8 py-4 */}
        {/* Secondary: bg-white border-2 border-neutral-200 hover:border-{color}-300 text-black rounded-full px-8 py-4 */}
      </div>
    </Reveal>
  </div>
</section>
```

---

### About Variants

**About A — Image left, text right** · classic 2-column grid, floating accent badge on image:
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

**About B — Full-width banner image, then 3-column text below** · image spans full width at top, heading left column, paragraphs right 2 columns:
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

**About C — Text left + 2×2 stat cards right, then full-width image strip** · good for data-heavy brands:
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
        {/* 2×2 grid using the 4 Stats items from Step 3 */}
        <div className="grid grid-cols-2 gap-4">
          {/* First card: bg-{color}-600 text-white rounded-2xl p-6 */}
          {/* Other 3: bg-neutral-50 border border-neutral-100 rounded-2xl p-6 */}
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

**Services A — Sticky sidebar + scrollable price list** · left column sticky with image, right column card with all 6 services as icon rows:
```
lg:flex gap-16 | Left 5/12: sticky top-24, eyebrow + h2 + desc + /images/{slug}/services.jpg rounded-2xl
Right 7/12: bg-white rounded-3xl p-8 border — each service: flex row [icon circle | name+desc | price]
```

**Services B — 3-column card grid** · each of the 6 services as its own card with CTA button; image strip above grid:
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
      <button className="w-full bg-{color}-600 hover:bg-{color}-700 text-white py-3 rounded-xl text-sm font-semibold transition-all">
        {ctaLabel}
      </button>
    </div>
  ))}
</div>
```

**Services C — Full-width numbered rows** · numbered list inside a white card, accent left-border on hover; image strip above:
```tsx
{/* image strip: w-full h-56 object-cover rounded-2xl mb-16 */}
<div className="max-w-3xl mx-auto bg-white rounded-3xl border border-neutral-100 p-6 divide-y divide-neutral-100">
  {services.map((s, i) => (
    <div className="group flex items-center gap-6 py-6 hover:bg-neutral-50 hover:pl-4 border-l-4 border-transparent hover:border-l-{color}-600 transition-all rounded-r-xl -mx-2 px-2">
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

Use this table to populate section content. Substitute literally for the `{industry}` arg.

**CTA button label:**
- salon → `Book Appointment`
- clinic → `Book Consultation`
- restaurant → `Reserve a Table`
- boutique → `Shop Now`
- gym → `Start Free Trial`
- cafe → `Order Now`

**Hero badge text (emoji + tagline):**
- salon → `✂️ Est. 2016 · Bangsar, KL`
- clinic → `🏥 Est. 2014 · Petaling Jaya`
- restaurant → `🍽️ Est. 2012 · KLCC, KL`
- boutique → `👗 Est. 2018 · Bukit Bintang, KL`
- gym → `💪 Est. 2019 · Mont Kiara, KL`
- cafe → `☕ Est. 2020 · Damansara, KL`

**Hero headline (line 1 / accent line 2):**
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

**Social proof pill text:**
- salon → `500+ Happy Clients`
- clinic → `1,200+ Patients`
- restaurant → `300+ Daily Covers`
- boutique → `2,000+ Items`
- gym → `800+ Members`
- cafe → `500+ Cups Daily`

**Stats (4 items):**
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

**Service descriptions (1 short line each, matching order above):**
- salon → `Wash, cut & blow dry` / `Full colour + treatment` / `60-min deep cleanse` / `Classic manicure + polish` / `Relaxing foot treatment` / `Full glam + trial session`
- clinic → `Full physical exam` / `Specialist appointment` / `All major vaccines` / `Scale & polish` / `Vision + pressure check` / `Comprehensive panel`
- restaurant → `Soup, main & dessert` / `3-course fine dining` / `Weekend special menu` / `Exclusive private room` / `Customised event menus` / `8-course chef selection`
- boutique → `In-stock curated pieces` / `Made-to-measure design` / `Tailoring & hemming` / `Bags, jewellery & more` / `New season arrivals` / `Luxury gift packaging`
- gym → `Full facility access` / `One-on-one coaching` / `HIIT, yoga & more` / `Single day access` / `Personalised meal plan` / `Bulk team pricing`
- cafe → `Single origin drip` / `Pulled shots + milk` / `Eggs, toast & sides` / `Rice or sandwich set` / `Daily baked selection` / `500ml chilled brew`

**FAQ (3 Q&A pairs):**
- salon → `Do I need to book in advance? / Yes, we recommend booking at least 2 days ahead. Walk-ins welcome subject to availability.` | `What payment methods do you accept? / Cash, credit/debit card, and e-wallet (Touch 'n Go, GrabPay).` | `Do you offer student discounts? / Yes — 10% off selected services with a valid student ID.`
- clinic → `Do I need a referral to see a specialist? / No referral needed. Book directly with any specialist online or by phone.` | `Is my insurance accepted? / We accept most major insurance panels. Call ahead to confirm your plan.` | `How early should I arrive? / We recommend arriving 10 minutes early to complete registration.`
- restaurant → `Do you accept walk-ins? / Yes, though reservations are recommended for weekends and public holidays.` | `Is there a minimum spend? / No minimum for standard bookings. Private dining requires a deposit.` | `Do you cater for dietary needs? / Yes — vegetarian, vegan, gluten-free, and halal options available.`
- boutique → `What is your return policy? / Items in original condition with tags can be returned within 14 days for exchange or store credit.` | `Do you offer custom sizing? / Yes, all custom orders include 2 complimentary fitting sessions.` | `How long does a custom order take? / Typically 3–4 weeks from design confirmation and deposit.`
- gym → `Is there a joining fee? / No joining fee for the first month — just your monthly membership.` | `Can I freeze my membership? / Members can freeze up to 2 months per year with 7 days notice.` | `Do you offer a free trial? / Yes — first 3 days free for new members. No credit card required.`
- cafe → `What are your opening hours? / Mon–Fri: 8am–6pm, Sat–Sun: 9am–5pm. Closed on public holidays.` | `Do you have WiFi? / Yes, complimentary high-speed WiFi for all customers.` | `Do you offer delivery? / Yes, via GrabFood and Foodpanda within a 5km radius.`

**Mission/Vision/Values:**
- salon → `Mission: Empower every client to feel their most confident self.` | `Vision: Become the most trusted beauty destination in the city.` | `Values: Creativity · Care · Consistency`
- clinic → `Mission: Deliver compassionate, evidence-based healthcare to every patient.` | `Vision: A healthier community, one consultation at a time.` | `Values: Integrity · Expertise · Compassion`
- restaurant → `Mission: Create memorable dining experiences with honest, seasonal food.` | `Vision: A table for everyone — no pretension, just great cooking.` | `Values: Quality · Hospitality · Sustainability`
- boutique → `Mission: Help every customer discover their signature style.` | `Vision: Fashion that is personal, sustainable, and joyful.` | `Values: Craftsmanship · Inclusivity · Originality`
- gym → `Mission: Help members build strength, confidence, and lasting habits.` | `Vision: The most results-driven fitness community in the region.` | `Values: Discipline · Community · Progress`
- cafe → `Mission: Serve exceptional coffee that brightens your day.` | `Vision: A neighbourhood cafe where everyone feels at home.` | `Values: Craft · Warmth · Consistency`

**Team (4 members, name + role):**
- salon → `Aisyah Rahman / Lead Stylist & Founder`, `Priya Nair / Colour Specialist`, `Siti Hajar / Beauty Therapist`, `Lena Tan / Nail Technician`
- clinic → `Dr. Sarah Wong / General Practitioner`, `Dr. Amir Hassan / Specialist`, `Nurse Farah / Head Nurse`, `Dr. Tan Mei Lin / Dental Surgeon`
- restaurant → `Chef Marco / Executive Chef`, `Aisha Karim / Sous Chef`, `James Loh / Floor Manager`, `Nina Patel / Pastry Chef`
- boutique → `Sofia Yusof / Creative Director`, `Rachel Teh / Stylist`, `Mei Ling / Seamstress`, `Zara Hanif / Sales Lead`
- gym → `Coach Rizal / Head Trainer`, `Aiyana Park / Yoga Instructor`, `Marcus Lee / Strength Coach`, `Tina Chong / Nutrition Lead`
- cafe → `Ben Ooi / Head Barista`, `Clara Ng / Kitchen Lead`, `Hafiz Yusuf / Roaster`, `Mei Shan / Front of House`

**About section eyebrow + heading:**
- salon → `Our Story` / `Where Beauty Meets Craft`
- clinic → `About Us` / `Healthcare Built on Trust`
- restaurant → `Our Story` / `Cooking With Intention`
- boutique → `Our Story` / `Fashion With Purpose`
- gym → `About Us` / `Built for Results`
- cafe → `Our Story` / `Crafted With Care`

**About section paragraphs (founding, growth, mission):**
- salon → `{name} was founded in 2016 by Aisyah Rahman, a classically trained stylist who believed every client deserves a truly transformative experience — not just a haircut. Starting from a single chair in Bangsar, she built a space where artistry and genuine care go hand in hand.` | `By 2020, {name} had grown into a full-service beauty studio with 12 specialists, earning recognition as one of KL's top-rated salons. Our reputation is built on consistency, creativity, and an unwavering commitment to every guest.` | `Today, our mission is simple: empower every client to feel their most confident self. Whether you're here for a quick trim or a full bridal transformation, every visit is an opportunity to make you shine.`
- clinic → `{name} was established in 2014 by Dr. Sarah Wong, driven by a belief that quality healthcare should be accessible, compassionate, and personal. What began as a small GP clinic in Petaling Jaya has grown into a full-service medical centre.` | `Over the years, we expanded our team to include specialists across dental, vision, and preventive care — earning the trust of over 1,200 patients monthly. Every doctor on our team shares the same commitment to evidence-based, patient-first care.` | `Our mission today is to be the healthcare partner you turn to at every stage of life. From routine checkups to specialist consultations, we're here for the long term.`
- restaurant → `{name} opened in 2012 with a simple belief: great food should be honest, seasonal, and shared. Our founding chef Marco spent years training in France and Italy before returning to KL with a vision for modern Malaysian-inspired cuisine.` | `Over a decade later, we've grown to three locations across the Klang Valley, each maintaining the same commitment to fresh ingredients and warm hospitality that defined our first dining room.` | `We believe a meal is more than what's on the plate — it's the conversation, the atmosphere, and the memory you take home. Every service, we cook with that in mind.`
- boutique → `{name} opened in 2018 as a curated concept store in Bukit Bintang, founded by Sofia Yusof with a mission to make well-crafted fashion accessible to every woman. What started as a pop-up grew into a permanent boutique within six months.` | `Today, we carry over 2,000 pieces from 40+ independent designers across Asia, alongside our own custom-order label. We've expanded to five cities, always keeping craftsmanship and personal style at the centre.` | `We believe getting dressed should feel joyful — not overwhelming. Our stylists are here to help you find pieces that truly feel like you.`
- gym → `{name} was founded in 2019 by Coach Rizal, a competitive athlete who believed that the best gyms weren't about equipment — they were about community. He opened our Mont Kiara facility with 20 members and a clear mission: results that last.` | `Since then, we've grown to over 800 active members, 20 certified trainers, and a 5,000 sqft facility equipped for every training style. We've been recognised as one of KL's best independent fitness studios two years running.` | `Everything we do is built around one idea: helping you build habits that stick. Whether you're starting out or chasing a new personal best, we're here to coach you every step of the way.`
- cafe → `{name} opened in 2020 in the heart of Damansara, founded by head barista Ben Ooi after a decade spent at specialty cafes across Melbourne and Tokyo. He came home with one goal: to bring world-class coffee to the neighbourhood.` | `We source beans from single-origin farms in Ethiopia, Colombia, and Indonesia — roasted in-house every week. Since opening, we've become a daily ritual for hundreds of regulars who come not just for the coffee, but for the calm.` | `We believe a great cup of coffee can change how your day begins. Every drink we serve is made with intention, from the grind to the final pour.`

**Testimonials (3 reviews):**
- salon → `"I've been coming to {name} for three years and wouldn't trust anyone else with my hair. The results are always beyond what I imagined." — Sarah Lim, Regular Client` | `"The atmosphere is so calming and the team is incredibly skilled. My bridal makeup was absolutely flawless on my wedding day." — Nurul Ain, Bridal Client` | `"Best hair colour I've ever had. My stylist knew exactly what shade would work for my skin tone. I get compliments everywhere I go." — Michelle Tan, Colour Client`
- clinic → `"The doctors here genuinely listen. I've tried three other clinics and none of them came close to the care I receive at {name}." — Ahmad Rizal, Regular Patient` | `"Quick, professional, and thorough. My health screening results came back within 24 hours with a full explanation from my doctor." — Cindy Loh, Health Screening` | `"My entire family comes here now. The team makes every visit comfortable, even for my kids." — Priya Menon, Family Patient`
- restaurant → `"We celebrated our anniversary here and it was perfect. The tasting menu is exceptional — every course was a highlight." — James Ooi, Anniversary Dinner` | `"The best set lunch in the city, hands down. Fresh, beautifully plated, and the service is always warm." — Fatimah Zahra, Regular Guest` | `"We booked the private dining room for a corporate dinner and it exceeded all expectations. Our clients were genuinely impressed." — David Tan, Corporate Event`
- boutique → `"I came in for one outfit and left with a whole new wardrobe. The stylists have incredible taste and really understand what works for you." — Liyana Ismail, Regular Shopper` | `"My custom order was delivered exactly as I imagined it. The fit was perfect and the fabric quality is outstanding." — Rachel Yap, Custom Order` | `"Finally a boutique that carries pieces you won't see everywhere else. I always find something unique and beautifully made." — Amirah Hassan, Regular Client`
- gym → `"I've tried five different gyms in KL and nothing comes close to the coaching quality here. I've hit goals I never thought possible." — Kevin Ng, Member since 2021` | `"The trainers actually care about your progress, not just your membership fee. I've lost 12kg in 4 months and feel stronger than ever." — Rina Aziz, Personal Training Client` | `"The community here is unlike anything I've experienced. Everyone is supportive and the classes are genuinely fun." — Daniel Chua, Group Class Member`
- cafe → `"This place has become part of my morning routine. The filter coffee is exceptional and the vibe makes you want to stay all day." — Sofia Lee, Daily Regular` | `"Best flat white I've had outside of Melbourne, full stop. The beans are always fresh and you can taste the difference." — Marcus Yong, Coffee Enthusiast` | `"A beautifully designed space with coffee that actually lives up to how it looks. The pastries are incredible too." — Nadia Razak, Weekend Visitor`

**CTA Banner headline + subtext:**
- salon → `Book Your Appointment Today` / `Don't wait to feel your best. Our team is ready to welcome you — slots fill up fast.`
- clinic → `Your Health Starts Here` / `Take the first step. Book a consultation with one of our specialists today.`
- restaurant → `Reserve Your Table Tonight` / `Don't leave your evening to chance. Secure your spot and let us take care of the rest.`
- boutique → `Find Your Signature Style` / `Our stylists are ready to help you build a wardrobe you'll love wearing every day.`
- gym → `Start Your Transformation Today` / `The hardest part is walking through the door. Let us take care of everything after that.`
- cafe → `Come In, Stay Awhile` / `Great coffee, good company, and a seat with your name on it. We'll see you soon.`

---

## Step 3.5 — Generate section images with Gemini

Use the `mcp__gemini-mcp__generate_image` tool to generate 4 images for this site. Save each to `public/images/{slug}/{section}.jpg`. All TSX image references must use the local path `/images/{slug}/{section}.jpg` — never Unsplash URLs for these 4 images.

Call the tool 4 times with these settings:
- **hero**: `aspectRatio: "16:9"`, `imageSize: "4K"`
- **about**: `aspectRatio: "4:3"`, `imageSize: "4K"`
- **services**: `aspectRatio: "4:3"`, `imageSize: "4K"`
- **cta**: `aspectRatio: "16:9"`, `imageSize: "4K"`

**Image prompts per industry:**

| Industry | hero | about | services | cta |
|---|---|---|---|---|
| salon | Elegant premium hair salon interior, beautiful woman in salon chair getting hair styled by professional stylist, rose gold accents, warm soft bokeh lighting, clean modern white aesthetic, editorial DSLR photography, 4K sharp | Professional female hair stylist applying colour treatment to client in bright modern beauty salon, natural window light, warm inviting atmosphere, editorial portrait photography, 4K sharp | Luxury hair salon styling station with professional scissors combs and hair colour products on white marble countertop, rose gold tools, clean minimal aesthetic, soft studio lighting, 4K sharp | Beautiful confident woman with perfect glossy hair smiling warmly, elegant hair salon background, rose gold bokeh lighting, editorial fashion photography, 4K sharp |
| clinic | Modern bright medical clinic interior, friendly smiling doctor consulting with patient across clean white desk, natural light, professional healthcare atmosphere, editorial photography, 4K sharp | Experienced doctor reviewing patient records with warm reassuring smile, bright clinic room, medical certificates on wall, professional healthcare photography, 4K sharp | Clean modern medical examination room with stethoscope and medical equipment on white surface, bright clinical lighting, healthcare product photography, 4K sharp | Happy patient shaking hands with smiling doctor after successful consultation, bright clinic background, warm trustworthy atmosphere, editorial photography, 4K sharp |
| restaurant | Upscale fine dining restaurant interior, elegant table settings with white linen candles and wine glasses, warm amber lighting, dark wood and gold accents, sophisticated ambience, editorial interior photography, 4K sharp | Modern restaurant dining room with guests enjoying a meal, warm ambient lighting, contemporary Asian fusion interior with wooden accents, editorial photography, 4K sharp | Beautifully plated gourmet fine dining dish on white ceramic plate, elegant food styling with microgreens and sauce drizzle, shallow depth of field, professional food photography, 4K sharp | Romantic fine dining table for two at night, flickering candlelight, crystal wine glasses with red wine, beautifully plated dishes, warm amber restaurant ambience, editorial DSLR photography, 4K sharp |
| boutique | Elegant fashion boutique interior, curated clothing racks with stylish garments, soft violet accent lighting, minimalist luxury retail aesthetic, editorial interior photography, 4K sharp | Fashion stylist helping customer select an outfit in a bright modern boutique, natural light, curated clothing displays, warm styling session atmosphere, editorial photography, 4K sharp | Luxury clothing boutique display, beautifully folded designer garments and accessories on white shelves, soft lighting, clean minimal retail aesthetic, product photography, 4K sharp | Stylish confident woman holding shopping bags outside a luxury boutique, fashionable outfit, elegant retail background, editorial fashion photography, 4K sharp |
| gym | Modern state-of-the-art gym interior, rows of premium equipment under bright lighting, open spacious floor, motivated members working out, editorial interior photography, 4K sharp | Certified personal trainer coaching a client with weights in a professional gym, encouraging atmosphere, modern fitness equipment background, editorial sports photography, 4K sharp | Premium gym equipment closeup, dumbbells and barbells neatly arranged on rack, dark athletic aesthetic, clean modern fitness centre, product photography, 4K sharp | Fit athlete completing a workout with intense focus, modern gym background, dramatic lighting, motivated determined expression, editorial sports photography, 4K sharp |
| cafe | Cozy specialty coffee cafe interior, skilled barista crafting latte art at espresso machine, warm amber lighting, wooden accents and plants, inviting neighbourhood cafe atmosphere, editorial photography, 4K sharp | Skilled barista carefully pouring steamed milk to create latte art in white cup, wooden cafe counter, warm natural light, editorial coffee photography, 4K sharp | Beautiful flat lay of specialty coffee drinks and fresh pastries on wooden cafe table, warm styling, editorial food and drink photography, 4K sharp | Cozy cafe corner with comfortable seating, steaming coffee cup on wooden table, warm golden hour light through window, inviting relaxed atmosphere, editorial photography, 4K sharp |

**Team portrait photos — use Unsplash CDN (w=500, h=700):**

| Slot | Photo ID |
|---|---|
| Member 1 | photo-1531746020798-e6953c6e8e04 |
| Member 2 | photo-1494790108377-be9c29b29330 |
| Member 3 | photo-1438761681033-6461ffad8d80 |
| Member 4 | photo-1534528741775-53994a69daeb |

**Testimonial avatar photos — use Unsplash CDN (w=80, h=80):**

| Slot | Photo ID |
|---|---|
| Review 1 | photo-1580489944761-15a19d654956 |
| Review 2 | photo-1438761681033-6461ffad8d80 |
| Review 3 | photo-1534528741775-53994a69daeb |

**Social proof pill avatars (w=40, h=40):** use Review 2, Review 3, and Member 2 photo IDs via Unsplash CDN.

---

## Step 4 — Generate the single-file business site

**Path:** `resources/js/pages/{slug}/BusinessSite.tsx`

One self-contained TSX file. Define local helpers at the top (do NOT import from NeuralHelpers or any project-level utility). Generate all sections completely — no placeholder comments.

### Local helpers (define before the export)

```tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight, Star, MapPin, Phone, Mail, Clock, {LogoIcon} } from 'lucide-react';

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

### Component structure

```tsx
export default function {pascal}BusinessSite() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const faqItems: { q: string; a: string }[] = [/* 3 items from Step 3 */];

  return (
    <div className="bg-white text-black font-sans">
      {/* ── Floating Header ── */}
      {/* ── Hero ── */}
      {/* ── Stats ── */}
      {/* ── About ── */}
      {/* ── Mission / Vision / Values ── */}
      {/* ── Team ── */}
      {/* ── Services ── */}
      {/* ── Testimonials ── */}
      {/* ── FAQ ── */}
      {/* ── Contact ── */}
      {/* ── CTA Banner ── */}
      {/* ── Footer ── */}
    </div>
  );
}
```

Apply `style={{ fontFamily: '"{font}", serif' }}` on all heading elements (`h1`, `h2`, `h3`).

---

### Floating Header

No traditional navbar. A minimal floating header only — logo + single CTA button.

```tsx
<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
  scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
}`}>
  <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
    {/* Logo */}
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 rounded-lg bg-{color}-600 flex items-center justify-center">
        <{LogoIcon} size={15} className="text-white" />
      </div>
      <span className={`font-bold text-base tracking-tight transition-colors ${
        scrolled ? 'text-black' : 'text-white'
      }`}>
        {/* Split last word of {name} into accent span */}
        First Word(s) <span className="text-{color}-400">Last Word</span>
      </span>
    </div>
    {/* Single CTA */}
    <button className="bg-{color}-600 hover:bg-{color}-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all">
      {/* CTA label from Step 3 */}
    </button>
  </div>
</header>
```

**Brand name split rule:** wrap the last word of `{name}` in `<span className="text-{color}-400">`. For a single-word name, wrap the whole name.

---

### Hero

Full-screen section with a real background photo from the Step 3.5 table. Content anchored to the bottom-left.

```tsx
<section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
  <img
    src="https://images.unsplash.com/{hero-photo-id}?auto=format&fit=crop&w=1800&q=80"
    alt="{name} interior"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/10" />

  {/* Hero text */}
  <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
    <Reveal>
      <span className="inline-block bg-{color}-600 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
        {/* badge text from Step 3 */}
      </span>
      <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter mb-6" style={font}>
        {/* Line 1 black, line 2 in text-{color}-400 italic <em> */}
      </h1>
      <p className="text-white/70 text-lg max-w-xl mb-10 leading-relaxed">
        {/* hero subtext from Step 3 */}
      </p>
      <div className="flex flex-wrap gap-4">
        <button className="bg-{color}-600 hover:bg-{color}-700 text-white px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2 text-sm">
          {/* CTA label */} <ArrowRight size={16} />
        </button>
        <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-medium transition-all text-sm">
          View Services
        </button>
      </div>
    </Reveal>
  </div>

  {/* Social proof pill — desktop only */}
  <div className="absolute bottom-8 right-8 hidden md:block">
    <div className="bg-white rounded-2xl shadow-lg px-5 py-4 flex items-center gap-3">
      <div className="flex -space-x-2">
        {/* 3 avatar <img> from Step 3.5 social proof pill IDs, w-8 h-8 rounded-full border-2 border-white object-cover */}
      </div>
      <div>
        <div className="flex gap-0.5 mb-0.5">
          {[...Array(5)].map((_, i) => <Star key={i} size={11} className="fill-amber-400 text-amber-400" />)}
        </div>
        <p className="text-xs font-semibold text-black">{/* social proof text from Step 3 */}</p>
      </div>
    </div>
  </div>
</section>
```

---

### Stats

Black bar, 4 stats, divided columns.

```tsx
<section className="bg-black text-white py-16">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-800">
    {[/* 4 stats from Step 3: { value, label } */].map((stat, i) => (
      <Reveal key={i} delay={i * 0.08} className="text-center px-8 py-4">
        <p className="text-4xl md:text-5xl font-black mb-2">{stat.value}</p>
        <p className="text-neutral-500 text-xs uppercase tracking-widest">{stat.label}</p>
      </Reveal>
    ))}
  </div>
</section>
```

---

### About / Story

No section label. Two-column layout: real photo left with floating accent badge, text right.

```tsx
<section id="about" className="py-24 lg:py-32">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

    {/* Left — photo + badge */}
    <Reveal direction="right">
      <div className="relative">
        <img
          src="https://images.unsplash.com/{about-photo-id}?auto=format&fit=crop&w=900&q=80"
          alt="{name}"
          className="w-full h-140 object-cover rounded-3xl"
        />
        {/* Floating accent badge bottom-right */}
        <div className="absolute -bottom-6 -right-6 bg-{color}-600 text-white p-6 rounded-2xl shadow-xl">
          <p className="text-3xl font-bold mb-0.5">{/* years open, e.g. "8+" */}</p>
          <p className="text-xs text-{color}-200 uppercase tracking-wider">Years of Excellence</p>
        </div>
      </div>
    </Reveal>

    {/* Right — text */}
    <Reveal direction="left" delay={0.15}>
      <p className="text-{color}-600 text-sm font-semibold uppercase tracking-widest mb-4">
        {/* eyebrow from Step 3 */}
      </p>
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight" style={font}>
        {/* heading from Step 3, can span 2 lines with <br /> */}
      </h2>
      {/* 3 paragraphs from Step 3 about section, each: */}
      <p className="text-neutral-600 leading-relaxed mb-5 text-base">{/* para 1 */}</p>
      <p className="text-neutral-600 leading-relaxed mb-5 text-base">{/* para 2 */}</p>
      <p className="text-neutral-600 leading-relaxed text-base">{/* para 3 */}</p>
    </Reveal>

  </div>
</section>
```

---

### Mission / Vision / Values

Light grey bg, centered heading, 3 cards — no section label.

```tsx
<section className="py-20 bg-neutral-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <Reveal className="text-center mb-16">
      <p className="text-{color}-600 text-sm font-semibold uppercase tracking-widest mb-3">What Drives Us</p>
      <h2 className="text-4xl font-extrabold tracking-tight" style={font}>Our Core Beliefs</h2>
    </Reveal>
    <div className="grid md:grid-cols-3 gap-8">
      {[/* 3 items: { label, heading, text } from Step 3 Mission/Vision/Values */].map((item, i) => (
        <Reveal key={i} delay={i * 0.1}>
          <div className="bg-white rounded-3xl p-10 border border-neutral-100 hover:border-{color}-200 transition-all hover:shadow-lg">
            <span className="inline-block text-xs font-bold text-{color}-600 uppercase tracking-widest mb-4 bg-{color}-50 px-3 py-1 rounded-full">
              {item.label}
            </span>
            <h3 className="text-xl font-bold mb-4 mt-2" style={font}>{item.heading}</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">{item.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>
```

---

### Team

White bg, eyebrow + heading, 4 photo cards with gradient overlay — no section label.

```tsx
<section className="py-24 lg:py-32">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <Reveal className="mb-16">
      <p className="text-{color}-600 text-sm font-semibold uppercase tracking-widest mb-3">
        The People Behind the Magic
      </p>
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={font}>Meet Our Team</h2>
    </Reveal>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
      {[/* 4 members from Step 3: { name, role, photo } — use Step 3.5 team photo IDs */].map((member, i) => (
        <Reveal key={i} delay={i * 0.08}>
          <div className="group relative overflow-hidden rounded-3xl aspect-3/4 cursor-pointer">
            <img
              src={`https://images.unsplash.com/${member.photo}?auto=format&fit=crop&w=500&h=700&q=80`}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-6 text-white">
              <p className="font-bold text-sm">{member.name}</p>
              <p className="text-xs text-white/60 mt-0.5">{member.role}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>
```

---

### Services / Price List

Light grey bg, sticky left column with photo, right column with price list — no section label.

```tsx
<section id="services" className="py-24 lg:py-32 bg-neutral-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row gap-16 items-start">

      {/* Left — sticky info + photo */}
      <div className="w-full lg:w-5/12 lg:sticky lg:top-24">
        <Reveal direction="right">
          <p className="text-{color}-600 text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6" style={font}>Services &amp; Pricing</h2>
          <p className="text-neutral-500 mb-8 leading-relaxed text-sm">
            Transparent pricing, no hidden fees. Every treatment is performed by a certified specialist using premium products.
          </p>
          <img
            src="https://images.unsplash.com/{services-photo-id}?auto=format&fit=crop&w=800&q=80"
            alt="{name} services"
            className="w-full h-72 object-cover rounded-2xl"
          />
        </Reveal>
      </div>

      {/* Right — price list card */}
      <div className="w-full lg:w-7/12">
        <Reveal direction="left" delay={0.1}>
          <div className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-sm">
            {[/* 6 services from Step 3: { name, desc, price } */].map((service, i) => (
              <div key={i} className="flex items-center gap-4 py-5 border-b border-neutral-100 last:border-b-0 group cursor-pointer hover:bg-{color}-50/40 -mx-4 px-4 rounded-xl transition-colors">
                <div className="w-10 h-10 rounded-full bg-{color}-50 flex items-center justify-center shrink-0 group-hover:bg-{color}-100 transition-colors">
                  <{LogoIcon} size={14} className="text-{color}-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-black">{service.name}</p>
                  <p className="text-xs text-neutral-400 mt-0.5">{service.desc}</p>
                </div>
                <span className="font-bold text-black text-sm whitespace-nowrap">{service.price}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

    </div>
  </div>
</section>
```

---

### Testimonials

White bg, centered heading, 3-card grid with star ratings and real avatar photos — no section label.

```tsx
<section className="py-24 lg:py-32">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <Reveal className="text-center mb-16">
      <p className="text-{color}-600 text-sm font-semibold uppercase tracking-widest mb-3">Client Stories</p>
      <h2 className="text-4xl font-extrabold tracking-tight" style={font}>What Our Clients Say</h2>
    </Reveal>
    <div className="grid md:grid-cols-3 gap-6">
      {[/* 3 testimonials from Step 3: { quote, name, role, photo } — use Step 3.5 testimonial photo IDs */].map((t, i) => (
        <Reveal key={i} delay={i * 0.1}>
          <div className="bg-white border border-neutral-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex gap-0.5 mb-5">
              {[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-amber-400 text-amber-400" />)}
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <img
                src={`https://images.unsplash.com/${t.photo}?auto=format&fit=crop&w=80&h=80&q=80`}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-sm text-black">{t.name}</p>
                <p className="text-xs text-neutral-400">{t.role}</p>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>
```

---

### FAQ

Use `faqVariant` (A, B, or C) from Step 2.8.

---

**FAQ A — Centered accordion** · neutral-50 bg, white card, animated accordion rows:
```tsx
<section id="faq" className="py-24 bg-neutral-50">
  <div className="max-w-3xl mx-auto px-6 lg:px-8">
    <Reveal className="text-center mb-12">
      <p className="text-{color}-600 text-sm font-semibold uppercase tracking-widest mb-3">Got Questions?</p>
      <h2 className="text-4xl font-extrabold tracking-tight" style={font}>Frequently Asked</h2>
    </Reveal>
    <div className="bg-white rounded-3xl border border-neutral-100 shadow-sm overflow-hidden">
      {faqItems.map((item, i) => (
        <div key={i} className="border-b border-neutral-100 last:border-b-0">
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="w-full text-left px-8 py-6 flex justify-between items-center group"
          >
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

**FAQ B — Two-column split** · questions list left, selected answer panel right; clicking a row reveals its answer in the right panel:
```tsx
<section id="faq" className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <Reveal className="mb-12">
      <p className="text-{color}-600 text-sm font-semibold uppercase tracking-widest mb-3">Got Questions?</p>
      <h2 className="text-4xl font-extrabold tracking-tight" style={font}>Frequently Asked</h2>
    </Reveal>
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Left — question list */}
      <div className="space-y-2">
        {faqItems.map((item, i) => (
          <button key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className={`w-full text-left px-6 py-4 rounded-2xl border transition-all flex justify-between items-center gap-4 ${
              openFaq === i
                ? 'border-{color}-200 bg-{color}-50 text-{color}-700'
                : 'border-neutral-100 bg-neutral-50 hover:border-neutral-200 text-neutral-700'
            }`}>
            <span className="font-medium text-sm">{item.q}</span>
            <ChevronRight size={16} className={`shrink-0 transition-transform ${openFaq === i ? 'rotate-90' : ''}`} />
          </button>
        ))}
      </div>
      {/* Right — answer panel */}
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
  </div>
</section>
```

---

**FAQ C — Dark accordion** · dark bg, white text, accent border on open rows — good for gym/dark-themed brands:
```tsx
<section id="faq" className="py-24 bg-neutral-900">
  <div className="max-w-3xl mx-auto px-6 lg:px-8">
    <Reveal className="text-center mb-12">
      <p className="text-{color}-400 text-sm font-semibold uppercase tracking-widest mb-3">Got Questions?</p>
      <h2 className="text-4xl font-extrabold tracking-tight text-white" style={font}>Frequently Asked</h2>
    </Reveal>
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

---

### Contact

Use `contactVariant` (A, B, or C) from Step 2.8.

---

**Contact A — Two-column: details left, form right** · white bg, info column with icons on left, booking form card on right:
```tsx
<section id="contact" className="py-24 lg:py-32 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
    <Reveal direction="right">
      <p className="text-{color}-600 text-sm font-semibold uppercase tracking-widest mb-3">Visit Us</p>
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-10" style={font}>Get in Touch</h2>
      <div className="space-y-7">
        {[
          { icon: <MapPin size={18} />, label: 'Address', value: '/* invent KL/PJ address */' },
          { icon: <Phone size={18} />, label: 'Phone', value: '+60 12-XXX XXXX' },
          { icon: <Mail size={18} />, label: 'Email', value: 'hello@{slug}.com.my' },
          { icon: <Clock size={18} />, label: 'Hours', value: 'Mon–Fri 9am–7pm · Sat 9am–6pm · Sun 10am–4pm' },
        ].map((item, i) => (
          <div key={i} className="flex gap-5 items-start">
            <div className="w-11 h-11 rounded-2xl bg-{color}-50 flex items-center justify-center shrink-0 text-{color}-600">{item.icon}</div>
            <div>
              <p className="text-xs text-neutral-400 uppercase tracking-widest font-semibold mb-1">{item.label}</p>
              <p className="text-sm font-medium text-black leading-relaxed">{item.value}</p>
            </div>
          </div>
        ))}
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
        <h3 className="text-2xl font-bold mb-6" style={font}>Book an Appointment</h3>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Full Name</label>
            <input type="text" placeholder="Your full name" className="w-full border-2 border-neutral-200 bg-white focus:border-{color}-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Phone</label>
              <input type="tel" placeholder="+60 12-XXX XXXX" className="w-full border-2 border-neutral-200 bg-white focus:border-{color}-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Service</label>
              <select defaultValue="" className="w-full border-2 border-neutral-200 bg-white focus:border-{color}-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all appearance-none">
                <option value="" disabled>Select service</option>
                {/* 6 service names from Step 3 */}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Message</label>
            <textarea rows={3} placeholder="Tell us your preferred date or any special requests..." className="w-full border-2 border-neutral-200 bg-white focus:border-{color}-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all resize-none" />
          </div>
          <button type="button" className="w-full bg-{color}-600 hover:bg-{color}-700 text-white py-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2">
            Send Message <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </Reveal>
  </div>
</section>
```

---

**Contact B — Centered form + contact cards below** · neutral-50 bg, centered heading, full-width form card on top, 4 info cards in a row below:
```tsx
<section id="contact" className="py-24 bg-neutral-50">
  <div className="max-w-4xl mx-auto px-6 lg:px-8">
    <Reveal className="text-center mb-10">
      <p className="text-{color}-600 text-sm font-semibold uppercase tracking-widest mb-3">Visit Us</p>
      <h2 className="text-4xl font-extrabold tracking-tight" style={font}>Get in Touch</h2>
      <p className="text-neutral-500 text-sm mt-3 max-w-md mx-auto">We'd love to hear from you. Fill in the form and we'll get back to you within one business day.</p>
    </Reveal>
    <Reveal>
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-neutral-100 shadow-sm mb-8">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Full Name</label>
              <input type="text" placeholder="Your full name" className="w-full border-2 border-neutral-200 bg-neutral-50 focus:border-{color}-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Phone</label>
              <input type="tel" placeholder="+60 12-XXX XXXX" className="w-full border-2 border-neutral-200 bg-neutral-50 focus:border-{color}-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Service</label>
            <select defaultValue="" className="w-full border-2 border-neutral-200 bg-neutral-50 focus:border-{color}-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all appearance-none">
              <option value="" disabled>Select a service</option>
              {/* 6 service names from Step 3 */}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Message</label>
            <textarea rows={3} placeholder="Tell us your preferred date or any special requests..." className="w-full border-2 border-neutral-200 bg-neutral-50 focus:border-{color}-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all resize-none" />
          </div>
          <button type="button" className="w-full bg-{color}-600 hover:bg-{color}-700 text-white py-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2">
            Send Message <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </Reveal>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { icon: <MapPin size={18} />, label: 'Address', value: '/* invent KL/PJ address */' },
        { icon: <Phone size={18} />, label: 'Phone', value: '+60 12-XXX XXXX' },
        { icon: <Mail size={18} />, label: 'Email', value: 'hello@{slug}.com.my' },
        { icon: <Clock size={18} />, label: 'Hours', value: 'Mon–Fri 9am–7pm' },
      ].map((item, i) => (
        <Reveal key={i} delay={i * 0.08}>
          <div className="bg-white rounded-2xl border border-neutral-100 p-5 text-center">
            <div className="w-10 h-10 rounded-xl bg-{color}-50 text-{color}-600 flex items-center justify-center mx-auto mb-3">{item.icon}</div>
            <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-1">{item.label}</p>
            <p className="text-xs font-medium text-black leading-relaxed">{item.value}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>
```

---

**Contact C — Dark full-width** · dark bg, white text, info cards on left column, compact form on right — good for gym/dark brands:
```tsx
<section id="contact" className="py-24 bg-neutral-900">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
    <Reveal direction="right">
      <p className="text-{color}-400 text-sm font-semibold uppercase tracking-widest mb-3">Visit Us</p>
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-10" style={font}>Get in Touch</h2>
      <div className="grid grid-cols-2 gap-4">
        {[
          { icon: <MapPin size={18} />, label: 'Address', value: '/* invent KL/PJ address */' },
          { icon: <Phone size={18} />, label: 'Phone', value: '+60 12-XXX XXXX' },
          { icon: <Mail size={18} />, label: 'Email', value: 'hello@{slug}.com.my' },
          { icon: <Clock size={18} />, label: 'Hours', value: 'Mon–Fri 9am–7pm · Sat 9am–6pm' },
        ].map((item, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="w-9 h-9 rounded-xl bg-{color}-500/20 text-{color}-400 flex items-center justify-center mb-3">{item.icon}</div>
            <p className="text-xs text-white/40 uppercase tracking-wider font-semibold mb-1">{item.label}</p>
            <p className="text-xs font-medium text-white/80 leading-relaxed">{item.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex gap-3">
        <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-{color}-500/20 hover:border-{color}-500/30 flex items-center justify-center text-white/50 hover:text-{color}-400 transition-all"><InstagramIcon size={16} /></button>
        <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-{color}-500/20 hover:border-{color}-500/30 flex items-center justify-center text-white/50 hover:text-{color}-400 transition-all"><FacebookIcon size={16} /></button>
      </div>
    </Reveal>
    <Reveal direction="left" delay={0.15}>
      <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 md:p-10">
        <h3 className="text-2xl font-bold text-white mb-6" style={font}>Book an Appointment</h3>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Full Name</label>
            <input type="text" placeholder="Your full name" className="w-full border-2 border-white/10 bg-white/5 text-white placeholder-white/20 focus:border-{color}-500 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Phone</label>
              <input type="tel" placeholder="+60 12-XXX XXXX" className="w-full border-2 border-white/10 bg-white/5 text-white placeholder-white/20 focus:border-{color}-500 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Service</label>
              <select defaultValue="" className="w-full border-2 border-white/10 bg-white/5 text-white focus:border-{color}-500 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all appearance-none">
                <option value="" disabled className="bg-neutral-900">Select service</option>
                {/* 6 service names from Step 3 */}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Message</label>
            <textarea rows={3} placeholder="Tell us your preferred date or any special requests..." className="w-full border-2 border-white/10 bg-white/5 text-white placeholder-white/20 focus:border-{color}-500 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all resize-none" />
          </div>
          <button type="button" className="w-full bg-{color}-600 hover:bg-{color}-700 text-white py-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2">
            Send Message <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </Reveal>
  </div>
</section>
```

---

### CTA Banner

Real full-width background image with dark overlay, centered text — no section label.

```tsx
<section className="relative py-28 overflow-hidden">
  <img
    src="https://images.unsplash.com/{cta-photo-id}?auto=format&fit=crop&w=1800&q=80"
    alt="{name}"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/65" />
  <div className="relative max-w-3xl mx-auto px-6 text-center text-white">
    <Reveal>
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5" style={font}>
        {/* CTA headline from Step 3 */}
      </h2>
      <p className="text-white/70 text-lg mb-10">
        {/* CTA subtext from Step 3 */}
      </p>
      <button className="bg-{color}-600 hover:bg-{color}-700 text-white px-10 py-5 rounded-full text-base font-semibold transition-all inline-flex items-center gap-2">
        {/* CTA label from Step 3 */} <ArrowRight size={18} />
      </button>
    </Reveal>
  </div>
</section>
```

---

### Footer

Black footer, 4-column grid, hours + contact columns, copyright bar.

```tsx
<footer className="bg-black text-neutral-400 pt-16 pb-8">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-neutral-800">

      {/* Brand — md:col-span-2 */}
      <div className="md:col-span-2">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-8 h-8 rounded-lg bg-{color}-600 flex items-center justify-center">
            <{LogoIcon} size={14} className="text-white" />
          </div>
          <span className="text-white font-bold">{name}</span>
        </div>
        <p className="text-sm leading-relaxed max-w-xs mb-6">
          {/* 1 short brand sentence */}
        </p>
        <div className="flex gap-3">
          <button className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-all text-neutral-400 hover:text-white">
            <InstagramIcon size={15} />
          </button>
          <button className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-all text-neutral-400 hover:text-white">
            <FacebookIcon size={15} />
          </button>
        </div>
      </div>

      {/* Hours */}
      <div>
        <p className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Hours</p>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between"><span>Mon – Fri</span><span className="text-neutral-300">9am – 7pm</span></li>
          <li className="flex justify-between"><span>Saturday</span><span className="text-neutral-300">9am – 6pm</span></li>
          <li className="flex justify-between"><span>Sunday</span><span className="text-neutral-300">10am – 4pm</span></li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <p className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Contact</p>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-2">
            <MapPin size={13} className="text-{color}-500 mt-0.5 shrink-0" />
            <span>{/* address short form */}</span>
          </li>
          <li className="flex items-center gap-2">
            <Phone size={13} className="text-{color}-500 shrink-0" />
            <span>{/* phone */}</span>
          </li>
          <li className="flex items-center gap-2">
            <Mail size={13} className="text-{color}-500 shrink-0" />
            <span>hello@{slug}.com.my</span>
          </li>
        </ul>
      </div>

    </div>

    {/* Bottom bar */}
    <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
      <p>© {new Date().getFullYear()} {name}. All Rights Reserved.</p>
      <div className="flex gap-5">
        <button className="hover:text-white transition-colors">Privacy Policy</button>
        <button className="hover:text-white transition-colors">Terms of Service</button>
      </div>
    </div>
  </div>
</footer>
```

---

## Step 5 — Patch `resources/js/App.tsx`

**5a — Add import** after the last existing import block, before `function App()`:
```tsx
// {name} business site
import {pascal}BusinessSite from './pages/{slug}/BusinessSite';
```

**5b — Add route** inside `<Routes>`, after the last existing `<Route />` element:
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

Where `{fontUrl}` = `font` arg with spaces replaced by `+`. Do not remove existing `@tailwind` directives or existing `@import` lines.

---

## Step 7 — Print confirmation

```
✓ {name} business site created

  Page:    resources/js/pages/{slug}/BusinessSite.tsx
  Route:   /{slug}

  Sections: Floating Header · Hero · Stats · About · Mission/Values ·
            Team · Services · Testimonials · FAQ · Contact ·
            CTA Banner · Footer

Visit http://localhost:8000/{slug}
```
