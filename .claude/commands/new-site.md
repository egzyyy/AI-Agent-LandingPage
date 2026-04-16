You are a business site scaffolder for a Laravel + React + Tailwind project. The user has invoked `/project:new-site` with these arguments:

$ARGUMENTS

This command generates a **standard 5-page business website** with a persistent navbar. For a single-page site, use `/project:new-business-site` instead.

Follow every step below in order. Do not skip steps. Do not ask for confirmation. Generate all files completely.

---

## Step 1 — Parse arguments

Extract these named arguments from `$ARGUMENTS`:
- `name` — brand name (e.g. `Mira Clinic`, `Sofea Beauty`)
- `color` — Tailwind accent color (e.g. `emerald`, `rose`, `amber`, `sky`, `violet`)
- `font` — Google Font for headings (e.g. `Playfair Display`, `Lora`, `Outfit`, `DM Sans`)
- `industry` — one of: `salon` | `clinic` | `restaurant` | `boutique` | `gym` | `cafe`
- `logo` — Lucide React icon name in lowercase (e.g. `heart-pulse`, `scissors`, `utensils`, `dumbbell`, `coffee`)

Derive:
- **slug**: kebab-case of `name` (e.g. `Mira Clinic` → `mira-clinic`)
- **pascal**: PascalCase of `name` (e.g. `Mira Clinic` → `MiraClinic`)
- **LogoIcon**: PascalCase of `logo` (e.g. `heart-pulse` → `HeartPulse`)
- **fontUrl**: `font` with spaces → `+` (e.g. `Playfair Display` → `Playfair+Display`)

> If any required argument is missing, stop and ask before proceeding.

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

---

## Step 3.5 — Photo reference (Unsplash CDN)

URL pattern: `https://images.unsplash.com/{photo-id}?auto=format&fit=crop&w={W}&h={H}&q=80`

**Section photos per industry:**

| Industry | Hero (w=1800) | About (w=900) | Services (w=800) | CTA Banner (w=1800) |
|---|---|---|---|---|
| salon | photo-1560066984-138dadb4c035 | photo-1522337360788-8b13dee7a37e | photo-1595163516014-3a9a4abb0b25 | photo-1562322140-8baeececf3df |
| clinic | photo-1519494026892-476e4b18e9e8 | photo-1551076805-e1869033e561 | photo-1631217868264-e5b90bb7e133 | photo-1576091160399-112ba8d25d1f |
| restaurant | photo-1414235077428-338989a2e8c0 | photo-1517248135467-4c7edcad34c4 | photo-1504674900247-0877df9cc836 | photo-1552566626-52f8b828a9b6 |
| boutique | photo-1445205170230-053b83016050 | photo-1483985988355-763728e1935b | photo-1558618666-fcd25c85cd64 | photo-1567401893414-76b7b1e5a7a5 |
| gym | photo-1534438327431-f9acd87e5e11 | photo-1571019613454-1cb2f99b2d8b | photo-1581009146145-b5ef050c2e1e | photo-1526506118085-60ce8714f8c5 |
| cafe | photo-1495474472287-4d71bcdd2085 | photo-1559305616-3f99cd43e353 | photo-1509042239860-f550ce710b93 | photo-1554118811-1e0d58224f24 |

**Team portraits (w=500, h=700):**
Member 1: photo-1531746020798-e6953c6e8e04 | Member 2: photo-1494790108377-be9c29b29330
Member 3: photo-1438761681033-6461ffad8d80 | Member 4: photo-1534528741775-53994a69daeb

**Testimonial avatars (w=80, h=80):**
Review 1: photo-1580489944761-15a19d654956 | Review 2: photo-1438761681033-6461ffad8d80 | Review 3: photo-1534528741775-53994a69daeb

**Social proof pill avatars (w=40, h=40):** Review 2, Review 3, Member 2 photo IDs.

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

      {/* ── Mission / Vision / Values ── */}
      {/* bg-neutral-50 py-20, 3 white cards, same pattern as new-business-site */}

      {/* ── Team ── */}
      {/* py-24, 4 portrait cards with real photos, aspect-3/4, gradient overlay */}
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

Imports: `useState`; `motion, AnimatePresence`; `ChevronDown`; Reveal helper.

```tsx
export default function {pascal}Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems: { q: string; a: string }[] = [/* 3 items from Step 3 */];

  return (
    <>
      {/* ── Page Header ── */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-{color}-600 text-sm font-semibold uppercase tracking-widest mb-3">Got Questions?</p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight" style={font}>Frequently Asked</h1>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ Accordion ── */}
      {/* py-24, max-w-3xl mx-auto, white card with accordion */}
      {/* Same accordion pattern as new-business-site FAQ section */}
    </>
  );
}
```

Fill in all sections completely. No placeholder comments in the final output.

---

## Step 10 — Generate Contact page

**Path:** `resources/js/pages/{slug}/Contact.tsx`

Imports: Reveal helper; `MapPin, Phone, Mail, Clock, ArrowRight` from `lucide-react`; `InstagramIcon, FacebookIcon` inline SVGs from Step 4.

```tsx
export default function {pascal}Contact() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-{color}-600 text-sm font-semibold uppercase tracking-widest mb-3">Visit Us</p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight" style={font}>Get in Touch</h1>
          </Reveal>
        </div>
      </section>

      {/* ── Contact Info + Form ── */}
      {/* py-24, 2-col grid lg:grid-cols-2 gap-16 */}
      {/* Left: contact details (Address, Phone, Email, Hours) + Follow Us social buttons */}
      {/* Right: bg-neutral-50 rounded-3xl form (Full Name, Phone/Service grid, Message, Submit) */}
      {/* Same pattern as new-business-site Contact section */}
    </>
  );
}
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
