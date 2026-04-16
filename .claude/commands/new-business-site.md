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

## Step 3.5 — Photo reference (Unsplash CDN)

All images use this URL pattern: `https://images.unsplash.com/{photo-id}?auto=format&fit=crop&w={W}&h={H}&q=80`

**Section photos per industry:**

| Industry | Hero (w=1800) | About (w=900) | Services (w=800) | CTA Banner (w=1800) |
|---|---|---|---|---|
| salon | photo-1560066984-138dadb4c035 | photo-1522337360788-8b13dee7a37e | photo-1595163516014-3a9a4abb0b25 | photo-1562322140-8baeececf3df |
| clinic | photo-1519494026892-476e4b18e9e8 | photo-1551076805-e1869033e561 | photo-1631217868264-e5b90bb7e133 | photo-1576091160399-112ba8d25d1f |
| restaurant | photo-1414235077428-338989a2e8c0 | photo-1517248135467-4c7edcad34c4 | photo-1504674900247-0877df9cc836 | photo-1552566626-52f8b828a9b6 |
| boutique | photo-1445205170230-053b83016050 | photo-1483985988355-763728e1935b | photo-1558618666-fcd25c85cd64 | photo-1567401893414-76b7b1e5a7a5 |
| gym | photo-1534438327431-f9acd87e5e11 | photo-1571019613454-1cb2f99b2d8b | photo-1581009146145-b5ef050c2e1e | photo-1526506118085-60ce8714f8c5 |
| cafe | photo-1495474472287-4d71bcdd2085 | photo-1559305616-3f99cd43e353 | photo-1509042239860-f550ce710b93 | photo-1554118811-1e0d58224f24 |

**Team portrait photos (w=500, h=700) — same for all industries:**

| Slot | Photo ID |
|---|---|
| Member 1 | photo-1531746020798-e6953c6e8e04 |
| Member 2 | photo-1494790108377-be9c29b29330 |
| Member 3 | photo-1438761681033-6461ffad8d80 |
| Member 4 | photo-1534528741775-53994a69daeb |

**Testimonial avatar photos (w=80, h=80) — same for all industries:**

| Slot | Photo ID |
|---|---|
| Review 1 | photo-1580489944761-15a19d654956 |
| Review 2 | photo-1438761681033-6461ffad8d80 |
| Review 3 | photo-1534528741775-53994a69daeb |

**Social proof pill avatars (w=40, h=40):** use Review 2, Review 3, and Member 2 photo IDs.

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

Light grey bg, centered heading, accordion in white card — no section label.

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
            <motion.div
              animate={{ rotate: openFaq === i ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="shrink-0 text-neutral-300 group-hover:text-{color}-400 transition-colors"
            >
              <ChevronDown size={18} />
            </motion.div>
          </button>
          <AnimatePresence>
            {openFaq === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
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

### Contact

White bg, two-column: contact details left, booking form right — no section label.

```tsx
<section id="contact" className="py-24 lg:py-32">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">

    {/* Left — details */}
    <Reveal direction="right">
      <p className="text-{color}-600 text-sm font-semibold uppercase tracking-widest mb-3">Visit Us</p>
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-10" style={font}>Get in Touch</h2>
      <div className="space-y-7">
        {[
          { icon: <MapPin size={18} />, label: 'Address', value: '/* invent KL/PJ street address */' },
          { icon: <Phone size={18} />, label: 'Phone', value: '+60 12-XXX XXXX' },
          { icon: <Mail size={18} />, label: 'Email', value: 'hello@{slug}.com.my' },
          { icon: <Clock size={18} />, label: 'Hours', value: 'Mon–Fri 9am–7pm · Sat 9am–6pm · Sun 10am–4pm' },
        ].map((item, i) => (
          <div key={i} className="flex gap-5 items-start">
            <div className="w-11 h-11 rounded-2xl bg-{color}-50 flex items-center justify-center shrink-0 text-{color}-600">
              {item.icon}
            </div>
            <div>
              <p className="text-xs text-neutral-400 uppercase tracking-widest font-semibold mb-1">{item.label}</p>
              <p className="text-sm font-medium text-black leading-relaxed">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Social links */}
      <div className="mt-10 pt-10 border-t border-neutral-100">
        <p className="text-xs text-neutral-400 uppercase tracking-widest font-semibold mb-4">Follow Us</p>
        <div className="flex gap-3">
          <button className="w-10 h-10 rounded-full bg-{color}-50 hover:bg-{color}-100 flex items-center justify-center text-{color}-600 transition-colors">
            <InstagramIcon size={16} />
          </button>
          <button className="w-10 h-10 rounded-full bg-{color}-50 hover:bg-{color}-100 flex items-center justify-center text-{color}-600 transition-colors">
            <FacebookIcon size={16} />
          </button>
        </div>
      </div>
    </Reveal>

    {/* Right — booking form */}
    <Reveal direction="left" delay={0.15}>
      <div className="bg-neutral-50 rounded-3xl p-8 md:p-10 border border-neutral-100">
        <h3 className="text-2xl font-bold mb-6" style={font}>Book an Appointment</h3>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Full Name</label>
            <input type="text" placeholder="Your full name"
              className="w-full border-2 border-neutral-200 bg-white focus:border-{color}-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Phone</label>
              <input type="tel" placeholder="+60 12-XXX XXXX"
                className="w-full border-2 border-neutral-200 bg-white focus:border-{color}-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Service</label>
              <select defaultValue=""
                className="w-full border-2 border-neutral-200 bg-white focus:border-{color}-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all appearance-none">
                <option value="" disabled>Select service</option>
                {/* 6 service name options from Step 3 */}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Message</label>
            <textarea rows={3} placeholder="Tell us your preferred date or any special requests..."
              className="w-full border-2 border-neutral-200 bg-white focus:border-{color}-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all resize-none" />
          </div>
          <button type="button"
            className="w-full bg-{color}-600 hover:bg-{color}-700 text-white py-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2">
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
