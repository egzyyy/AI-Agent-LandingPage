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
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight, Star, MapPin, Phone, Mail, Clock, Menu, X, {LogoIcon} } from 'lucide-react';

function Reveal({ children, className = '', delay = 0, direction = 'up' }: {
  children: React.ReactNode; className?: string; delay?: number; direction?: 'up' | 'down' | 'left' | 'right';
}) {
  const dirs: Record<string, { x?: number; y?: number }> = { up: { y: 30 }, down: { y: -30 }, left: { x: 30 }, right: { x: -30 } };
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
      <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">{label}</span>
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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white text-black min-h-screen font-sans selection:bg-black selection:text-white">
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

Sticky top, `z-50`. When `isScrolled` is true: `bg-white/90 backdrop-blur-md shadow-sm border-b border-neutral-100 py-3`. When false: `bg-transparent py-5`. Add `transition-all duration-300` to the nav element.

- Left: `{LogoIcon}` icon in a `w-9 h-9 rounded-xl bg-{color}-600 flex items-center justify-center text-white` div, then brand name text `{name}` — last word in `text-{color}-600`. Hardcode the split: wrap the last word of `{name}` in `<span className="text-{color}-600">`. For a single-word name, wrap the whole name.
- Center (desktop): nav links `['Home', 'About', 'Services', 'FAQ', 'Contact']` as `<button>` elements (no routing needed — smooth scroll targets), active link `text-{color}-600`, inactive `text-neutral-400 hover:text-{color}-500`
- Right (desktop): primary CTA `<button>` in `bg-{color}-600 hover:bg-{color}-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all` with industry CTA label
- Mobile: hamburger `<Menu>` / `<X>` toggle, `AnimatePresence` overlay with `initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.25 }}` containing large nav links stacked vertically and a full-width CTA button at bottom

### Section 1 — Hero

`<section className="min-h-[90vh] py-24 bg-white border-b border-neutral-100 flex items-center">` 

Two-column `grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`:

Left column (Reveal direction="right"):
- Badge: `<span className="inline-block py-1 px-3 rounded-full bg-{color}-50 text-{color}-700 text-sm font-medium mb-6">` with a relevant emoji + short tagline for the industry
- `<h1>` with two lines — first line in black, second line in `text-{color}-500` italic (use `<em>`) — use industry hero headline from Step 3. Apply `style={{ fontFamily: '"{font}", serif' }}` to h1.
- Subtext paragraph from Step 3 in `text-neutral-500 text-lg leading-relaxed mb-8`
- Two buttons in a flex row: primary (`bg-{color}-600 hover:bg-{color}-700 text-white px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2`) + secondary (`bg-white border-2 border-neutral-200 hover:border-{color}-400 text-black px-8 py-4 rounded-full font-medium transition-all`)

Right column (Reveal direction="left" delay={0.15}):
- `<div className="relative h-[500px]">`
- `<Placeholder label="Hero Image" className="h-full !rounded-3xl" />`
- Floating badge bottom-left: `absolute -bottom-4 -left-4 bg-white border-2 border-neutral-200 p-4 rounded-2xl shadow-lg flex items-center gap-3` containing a `<Star>` icon wrapped in `bg-{color}-100 text-{color}-600 w-10 h-10 rounded-full flex items-center justify-center` + text `"500+ Happy Clients"` (adjust for industry)

### Section 2 — Stats

`<section className="py-20 bg-black text-white border-b border-neutral-800">`

`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

`grid grid-cols-2 md:grid-cols-4`:
- Each stat cell: `text-center py-8 md:py-0` with `border-l border-neutral-800 first:border-l-0` on every cell
- Large number: `text-4xl md:text-5xl font-bold text-white mb-2` (wrap in Reveal)
- Label: `text-neutral-500 text-xs uppercase tracking-[0.15em]`

Use industry stats from Step 3.

### Section 3 — About / Story

`<section className="py-24 bg-white border-b border-neutral-100">`

`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

`SectionLabel number={3} title="About / Story"`

Two-column `grid lg:grid-cols-2 gap-16 items-center`:
- Left (Reveal direction="right"): `<Placeholder label="About Image" className="h-[450px] !rounded-3xl" />`
- Right (Reveal direction="left" delay={0.15}): `<h2 style={{ fontFamily: '"{font}", serif' }}` heading, 3 paragraphs of brand story tailored to the industry — invent a professional founding story (year, founder's motivation), growth story (expansion, recognition), and current mission. Each paragraph in `text-neutral-600 leading-relaxed mb-4 text-base`.

### Section 4 — Mission / Vision / Values

`<section className="py-24 bg-neutral-50 border-b border-neutral-100">`

`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

`SectionLabel number={4} title="Mission / Vision / Values"`

Centered heading (`<h2 style={{ fontFamily }}`) + subtext paragraph.

`grid grid-cols-1 md:grid-cols-3 gap-8 mt-12`:
- Each card: `bg-white p-10 rounded-3xl border-2 border-neutral-100 text-center hover:border-{color}-400 transition-all`
  - Icon placeholder: `<Placeholder label="Icon" className="w-16 h-16 !rounded-full mx-auto mb-6" />`
  - `<h3 style={{ fontFamily }} className="text-xl font-bold mb-4">` with the item title (Mission / Vision / Values)
  - `<p className="text-neutral-500 leading-relaxed text-sm">` with the item description

Use Mission/Vision/Values content from Step 3 for all 3 cards.

### Section 5 — Team

`<section className="py-24 bg-white border-b border-neutral-100">`

`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

`SectionLabel number={5} title="Our Team"`

Centered `<h2 style={{ fontFamily }}>` heading + subtext paragraph (`text-neutral-500 max-w-2xl mx-auto text-center mb-12`).

`grid grid-cols-2 lg:grid-cols-4 gap-6`:
- Each card (Reveal with staggered delay): `group relative overflow-hidden rounded-3xl bg-neutral-100 aspect-[3/4] cursor-pointer border-2 border-transparent hover:border-{color}-400 transition-all`
- `<Placeholder label="Photo {i + 1}" className="absolute inset-0 !h-full !w-full !rounded-3xl !border-0" />`
- Gradient overlay: `absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent`
- Name + role at bottom: `absolute bottom-0 left-0 w-full p-5 text-white` — `<p className="font-bold text-sm">Name</p>` + `<p className="text-xs text-neutral-300">Role</p>`

Invent 4 realistic team members with names and roles appropriate to the industry (e.g., for salon: Lead Stylist, Colour Specialist, Beauty Therapist, Nail Technician).

### Section 6 — Services / Price List

`<section className="py-24 bg-neutral-50 border-b border-neutral-100">`

`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

`SectionLabel number={6} title="Services / Price List"`

Centered `<h2 style={{ fontFamily }}>` heading + subtext.

`flex flex-col lg:flex-row gap-12 mt-12`:
- Left div (`w-full lg:w-5/12`):
  - `<Placeholder label="Service Category Image" className="h-[400px] !rounded-3xl" />`
  - Below image: flex row with `w-10 h-10 rounded-full bg-{color}-50 flex items-center justify-center text-{color}-600` containing `<{LogoIcon} size={18} />` + `<span className="font-bold text-lg ml-3">Our Services</span>`
- Right div (`w-full lg:w-7/12 flex flex-col justify-center`):
  - 6 service rows, each: `flex items-center justify-between border-b border-neutral-200 py-6 group hover:border-{color}-400 transition-all`
    - Service name: `text-sm font-medium text-neutral-800 group-hover:text-{color}-600 transition-colors`
    - Dashed spacer: `flex-1 border-b border-dashed border-neutral-200 mx-4`
    - Price: `text-sm font-bold text-black whitespace-nowrap`

Use 6 service items from Step 3.

### Section 7 — Testimonials

`<section className="py-24 bg-white border-b border-neutral-100">`

`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

`SectionLabel number={7} title="Testimonials"`

Two-column `grid lg:grid-cols-2 gap-16 items-center`:

Left (Reveal direction="right"):
- `<h2 style={{ fontFamily }} className="text-4xl font-bold mb-4">What Our Clients Say</h2>`
- Short intro paragraph (`text-neutral-500 mb-8`)
- 3 dot indicators: `flex gap-2` — first dot `w-3 h-3 rounded-full bg-black`, rest `w-3 h-3 rounded-full bg-neutral-200`

Right (Reveal direction="left" delay={0.15}):
- Quote card: `bg-white p-10 rounded-3xl border-2 border-neutral-100 shadow-lg`
  - Large opening quote: `<svg>` with `"` character in `text-8xl text-neutral-100 font-serif leading-none`
  - `<p className="text-lg italic text-neutral-600 leading-relaxed mb-8">` — invent a realistic 2-3 sentence review for the industry
  - Avatar row: `flex items-center gap-4`
    - `<Placeholder label="Avatar" className="w-12 h-12 !rounded-full shrink-0" />`
    - Customer name + label (e.g., "Sarah Lim · Regular Client")

### Section 8 — FAQ

`<section className="py-24 bg-neutral-50 border-b border-neutral-100">`

`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

`SectionLabel number={8} title="FAQ"`

Centered `<h2 style={{ fontFamily }}>` + subtext.

Define `faqItems` array (const) with the 3 Q&A pairs from Step 3 for the `{industry}`, each as `{ q: string; a: string }`.

Accordion:
```tsx
<div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl border-2 border-neutral-100 shadow-sm mt-12">
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

Below accordion:
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

`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

`SectionLabel number={9} title="Contact"`

Two-column `grid lg:grid-cols-2 gap-16`:

Left (Reveal direction="right"):
- `<h2 style={{ fontFamily }}>` heading "Get in Touch"
- 4 info rows (each a flex row): icon container (`w-12 h-12 bg-{color}-50 rounded-full text-{color}-500 flex items-center justify-center shrink-0`) + label (`text-xs uppercase tracking-wider text-neutral-400 mb-0.5`) + value (`text-sm font-medium text-black`)
  - `<MapPin size={20} />` → Address: invent a Malaysian street address (Kuala Lumpur or Petaling Jaya)
  - `<Phone size={20} />` → Phone: invent a Malaysian mobile number `+60 12-XXX XXXX`
  - `<Mail size={20} />` → Email: `hello@{slug}.com.my`
  - `<Clock size={20} />` → Hours: Mon–Fri 9am–7pm, Sat 9am–6pm, Sun 10am–4pm

Right (Reveal direction="left" delay={0.15}):
- `bg-neutral-50 p-10 rounded-3xl border-2 border-neutral-100`
- `<h2 style={{ fontFamily }} className="text-2xl font-bold mb-6">Send a Message</h2>`
- Form (`onSubmit={(e) => e.preventDefault()}`):
  - Full Name: `<input type="text" placeholder="Your full name" className="w-full border-2 border-neutral-200 bg-white focus:border-{color}-400 focus:ring-0 outline-none rounded-xl px-5 py-4 text-sm transition-all" />`
  - 2-col grid: Phone (`type="tel"` placeholder "+60 12-XXX XXXX" with same className as Full Name input) + Service (`<select defaultValue="" className="w-full border-2 border-neutral-200 bg-white focus:border-{color}-400 focus:ring-0 outline-none rounded-xl px-5 py-4 text-sm transition-all appearance-none">` with options: the 6 service names from Step 3 for the industry). Start with `<option value="" disabled>Select a service</option>` before the 6 service options.
  - Message: `<textarea rows={3} placeholder="How can we help you?" className="w-full border-2 border-neutral-200 bg-white focus:border-{color}-400 focus:ring-0 outline-none rounded-xl px-5 py-4 text-sm transition-all resize-none" />`
  - Submit: `<button type="button" className="w-full bg-{color}-600 hover:bg-{color}-700 text-white py-4 rounded-xl font-medium transition-all">Send Message</button>`

### Section 10 — CTA Banner

`<section className="py-24 bg-neutral-100">`

`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

`SectionLabel number={10} title="Call-to-Action"`

`max-w-3xl mx-auto text-center`:
- `<h2 style={{ fontFamily }} className="text-4xl md:text-5xl font-bold mb-6">` — a closing headline 4–6 words, urgent, benefit-focused, industry-appropriate (e.g. for salon: "Book Your Appointment Today")
- Subtext `<p className="text-neutral-500 text-lg mb-10">` — 1–2 sentences
- `<button className="bg-{color}-600 hover:bg-{color}-700 text-white px-10 py-5 rounded-full text-lg font-medium transition-all inline-flex items-center gap-2">` with industry CTA label from Step 3 + `<ArrowRight size={20} />`

### Section 11 — Footer

`<footer className="bg-black text-neutral-400 py-16">`

`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

`grid grid-cols-1 md:grid-cols-4 gap-12`:
- Brand col (md:col-span-2): 
  - Logo row: `{LogoIcon}` icon in `w-8 h-8 rounded-lg bg-{color}-600 flex items-center justify-center text-white mr-3` + brand name in `text-white font-bold`
  - Short brand blurb (1 sentence, neutral-400)
  - 2 social icon placeholder buttons (`w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-all`)
- Hours col: 
  - Heading `text-white text-sm font-semibold mb-4`
  - 3 rows: Mon–Fri 9am–7pm / Sat 9am–6pm / Sun 10am–4pm
- Contact col:
  - Heading `text-white text-sm font-semibold mb-4`
  - `<MapPin size={14} />` + address
  - `<Phone size={14} />` + phone

Bottom bar: `border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm`
- Left: `© {new Date().getFullYear()} {name}. All Rights Reserved.`
- Right: Privacy Policy + Terms links in `hover:text-white transition-colors`

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

Where `{fontUrl}` = `font` arg with spaces replaced by `+`. Do not remove existing `@tailwind` directives.

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
