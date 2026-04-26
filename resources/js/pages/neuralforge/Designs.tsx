import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Scissors, Clock, ShoppingBag, Zap, MessageCircle, ChevronRight, ChevronDown, Star, CheckCircle, MapPin, Phone, Mail, Target, Eye, Heart } from 'lucide-react';

/* ─── Demo data ─────────────────────────────────────────── */
const img = {
  hero:     'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=80',
  about:    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
  services: 'https://images.unsplash.com/photo-1595163516014-3a9a4abb0b25?auto=format&fit=crop&w=1200&q=80',
  cta:      'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1800&q=80',
  team1:    'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=500&h=700&q=80',
  team2:    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&h=700&q=80',
};
const font = { fontFamily: '"Playfair Display", serif' };
const BRAND = 'Bloom Salon';
const COLOR = 'rose'; // for inline tailwind classes
const BADGE = '✂️ Est. 2016 · Bangsar, KL';

const demoServices = [
  { name: 'Hair Cut', desc: 'Wash, cut & blow dry', price: 'RM 60', icon: <Scissors size={20} /> },
  { name: 'Hair Colour', desc: 'Full colour + treatment', price: 'RM 150', icon: <ShoppingBag size={20} /> },
  { name: 'Facial Treatment', desc: '60-min deep cleanse', price: 'RM 120', icon: <Zap size={20} /> },
  { name: 'Manicure', desc: 'Classic manicure + polish', price: 'RM 50', icon: <Clock size={20} /> },
  { name: 'Pedicure', desc: 'Relaxing foot treatment', price: 'RM 60', icon: <MessageCircle size={20} /> },
  { name: 'Bridal Makeup', desc: 'Full glam + trial session', price: 'RM 350', icon: <Star size={20} /> },
];

const demoStats = [
  { val: '500+', label: 'Clients/Month' },
  { val: '8', label: 'Years Open' },
  { val: '4.9★', label: 'Rating' },
  { val: '12', label: 'Stylists' },
];

/* ─── Variant label bar ─────────────────────────────────── */
function VariantLabel({ id, label, desc, usedBy }: { id: string; label: string; desc: string; usedBy: string }) {
  return (
    <div className="sticky top-[72px] z-30 bg-[#0A0A1A]/95 backdrop-blur border-b border-white/[0.08] px-6 py-3 flex flex-wrap items-center gap-3">
      <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30">
        {id}
      </span>
      <span className="text-white font-bold text-sm">{label}</span>
      <span className="text-gray-500 text-xs hidden md:inline">— {desc}</span>
      <span className="ml-auto text-gray-600 text-xs">Used by: <span className="text-gray-400">{usedBy}</span></span>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   HERO VARIANTS
══════════════════════════════════════════════════════════ */

function HeroA() {
  return (
    <section className="relative min-h-[70vh] flex items-end pb-16 overflow-hidden">
      <img src={img.hero} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <span className="inline-block bg-rose-600 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">{BADGE}</span>
        <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-white leading-none mb-5" style={font}>
          Beauty &amp; Care,<br /><em className="text-rose-400 not-italic">Redefined.</em>
        </h1>
        <p className="text-white/70 text-lg max-w-xl mb-8 leading-relaxed">Experience premium hair and beauty treatments in a relaxing environment.</p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-rose-600 hover:bg-rose-700 text-white px-7 py-3.5 rounded-full font-semibold text-sm flex items-center gap-2">Book Appointment <ArrowRight size={16} /></button>
          <button className="border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10">View Services</button>
        </div>
        <div className="flex items-center gap-3 mt-8">
          <div className="flex -space-x-2">
            {[img.team1, img.team2, img.about].map((s, i) => (
              <img key={i} src={s} className="w-8 h-8 rounded-full border-2 border-black object-cover" />
            ))}
          </div>
          <span className="text-white/60 text-sm"><strong className="text-white">500+</strong> Happy Clients</span>
        </div>
      </div>
    </section>
  );
}

function HeroB() {
  return (
    <section className="relative min-h-[70vh] flex overflow-hidden">
      {/* Left white panel */}
      <div className="relative z-10 w-full md:w-1/2 bg-white flex flex-col justify-center px-10 py-16">
        <span className="inline-block bg-rose-600 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 self-start">{BADGE}</span>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-black leading-tight mb-5" style={font}>
          Beauty &amp; Care,<br /><em className="text-rose-500 not-italic">Redefined.</em>
        </h1>
        <p className="text-neutral-500 text-base max-w-sm mb-8 leading-relaxed">Experience premium hair and beauty treatments in a relaxing environment.</p>
        <div className="flex flex-wrap gap-3">
          <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-full font-semibold text-sm flex items-center gap-2">Book Appointment <ArrowRight size={15} /></button>
          <button className="border border-neutral-200 text-neutral-700 px-6 py-3 rounded-full font-semibold text-sm hover:bg-neutral-50">View Services</button>
        </div>
        <div className="flex items-center gap-3 mt-8">
          <div className="flex -space-x-2">
            {[img.team1, img.team2].map((s, i) => (
              <img key={i} src={s} className="w-8 h-8 rounded-full border-2 border-white object-cover" />
            ))}
          </div>
          <span className="text-neutral-500 text-sm"><strong className="text-black">500+</strong> Happy Clients</span>
        </div>
      </div>
      {/* Right image panel */}
      <div className="hidden md:block md:w-1/2">
        <img src={img.hero} alt="" className="w-full h-full object-cover" />
      </div>
    </section>
  );
}

function HeroC() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <img src={img.hero} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
      <div className="relative text-center px-6 max-w-3xl mx-auto">
        <span className="inline-block bg-rose-600 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">{BADGE}</span>
        <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-black leading-none mb-5" style={font}>
          Beauty &amp; Care,<br /><em className="text-rose-500 not-italic">Redefined.</em>
        </h1>
        <p className="text-neutral-600 text-lg max-w-xl mx-auto mb-8 leading-relaxed">Experience premium hair and beauty treatments in a relaxing environment.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full font-semibold text-sm flex items-center gap-2">Book Appointment <ArrowRight size={16} /></button>
          <button className="border border-neutral-300 text-neutral-700 px-8 py-4 rounded-full font-semibold text-sm hover:bg-neutral-50">View Services</button>
        </div>
        <div className="flex items-center justify-center gap-3 mt-8">
          <div className="flex -space-x-2">
            {[img.team1, img.team2, img.about].map((s, i) => (
              <img key={i} src={s} className="w-8 h-8 rounded-full border-2 border-white object-cover" />
            ))}
          </div>
          <span className="text-neutral-500 text-sm"><strong className="text-black">500+</strong> Happy Clients</span>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   ABOUT VARIANTS
══════════════════════════════════════════════════════════ */

function AboutA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img src={img.about} alt="" className="w-full rounded-3xl object-cover h-96 md:h-[500px]" />
            <div className="absolute -bottom-5 -right-5 bg-rose-600 text-white rounded-2xl px-5 py-4 shadow-xl">
              <p className="text-2xl font-black">8+</p>
              <p className="text-xs font-semibold opacity-80">Years of Excellence</p>
            </div>
          </div>
          <div>
            <p className="text-rose-600 text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-6" style={font}>Where Beauty Meets Craft</h2>
            <p className="text-neutral-600 text-sm leading-relaxed mb-4">{BRAND} was founded in 2016 by Aisyah Rahman, a classically trained stylist who believed every client deserves a truly transformative experience.</p>
            <p className="text-neutral-600 text-sm leading-relaxed mb-4">By 2020, {BRAND} had grown into a full-service beauty studio with 12 specialists, earning recognition as one of KL's top-rated salons.</p>
            <p className="text-neutral-600 text-sm leading-relaxed mb-8">Today, our mission is simple: empower every client to feel their most confident self.</p>
            <div className="grid grid-cols-3 gap-4">
              {demoStats.slice(0,3).map(s => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-black text-rose-600">{s.val}</p>
                  <p className="text-xs text-neutral-500 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutB() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <img src={img.about} alt="" className="w-full h-56 md:h-[420px] object-cover rounded-3xl mb-14" />
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <p className="text-rose-600 text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-black" style={font}>Where Beauty Meets Craft</h2>
          </div>
          <div className="space-y-4 text-neutral-600 text-sm leading-relaxed">
            <p>{BRAND} was founded in 2016 by Aisyah Rahman, a classically trained stylist who believed every client deserves a truly transformative experience.</p>
            <p>By 2020, {BRAND} had grown into a full-service beauty studio with 12 specialists.</p>
          </div>
          <div className="space-y-4 text-neutral-600 text-sm leading-relaxed">
            <p>Today, our mission is simple: empower every client to feel their most confident self. Whether you're here for a quick trim or a full bridal transformation, every visit is an opportunity to make you shine.</p>
          </div>
        </div>
        <div className="mt-12 pt-12 border-t border-neutral-200 grid grid-cols-4 gap-6">
          {demoStats.map(s => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-black text-rose-600">{s.val}</p>
              <p className="text-xs text-neutral-500 uppercase tracking-wider font-medium mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutC() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-14 items-start mb-12">
          <div>
            <p className="text-rose-600 text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-6" style={font}>Where Beauty Meets Craft</h2>
            <p className="text-neutral-600 text-sm leading-relaxed mb-4">{BRAND} was founded in 2016 by Aisyah Rahman, a classically trained stylist who believed every client deserves a truly transformative experience.</p>
            <p className="text-neutral-600 text-sm leading-relaxed">Today, our mission is simple: empower every client to feel their most confident self.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {demoStats.map((s, i) => (
              <div key={s.label} className={`rounded-2xl p-6 ${i === 0 ? 'bg-rose-600 text-white' : 'bg-neutral-50 border border-neutral-100'}`}>
                <p className={`text-3xl font-black mb-1 ${i === 0 ? 'text-white' : 'text-rose-600'}`}>{s.val}</p>
                <p className={`text-xs font-semibold uppercase tracking-wider ${i === 0 ? 'text-rose-100' : 'text-neutral-500'}`}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <img src={img.about} alt="" className="w-full h-48 object-cover rounded-2xl" />
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   SERVICES VARIANTS
══════════════════════════════════════════════════════════ */

function ServicesA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-rose-600 text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-black" style={font}>Services &amp; Pricing</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Sticky sidebar */}
          <div className="lg:sticky lg:top-24">
            <img src={img.services} alt="" className="w-full h-72 object-cover rounded-2xl mb-8" />
            <p className="text-neutral-600 text-sm leading-relaxed mb-6">Transparent pricing, no hidden fees. All services performed by certified specialists with 5+ years of experience.</p>
            <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3.5 rounded-full font-semibold text-sm flex items-center gap-2">Book Appointment <ArrowRight size={15} /></button>
          </div>
          {/* Price list */}
          <div className="bg-neutral-50 rounded-3xl border border-neutral-100 overflow-hidden">
            {demoServices.map((s, i) => (
              <div key={i} className="flex items-center gap-5 px-7 py-5 border-b border-neutral-100 last:border-b-0 hover:bg-white transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">{s.icon}</div>
                <div className="flex-1">
                  <p className="font-semibold text-sm text-black group-hover:text-rose-600 transition-colors">{s.name}</p>
                  <p className="text-neutral-400 text-xs mt-0.5">{s.desc}</p>
                </div>
                <p className="text-rose-600 font-extrabold text-sm shrink-0">{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesB() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-rose-600 text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-black mb-4" style={font}>Services &amp; Pricing</h2>
          <p className="text-neutral-500 text-sm max-w-xl mx-auto">Transparent pricing, no hidden fees.</p>
        </div>
        <img src={img.services} alt="" className="w-full h-48 object-cover rounded-2xl mb-10" />
        <div className="grid md:grid-cols-3 gap-5">
          {demoServices.map((s, i) => (
            <div key={i} className="bg-white rounded-3xl p-7 border border-neutral-100 hover:border-rose-200 hover:shadow-lg transition-all flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-5">{s.icon}</div>
              <h3 className="font-bold text-sm mb-1.5 text-black" style={font}>{s.name}</h3>
              <p className="text-neutral-500 text-xs mb-4 flex-1">{s.desc}</p>
              <p className="text-rose-600 font-extrabold text-2xl mb-4">{s.price}</p>
              <button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-xl text-sm font-semibold transition-all">Book Appointment</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesC() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-rose-600 text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-black mb-4" style={font}>Services &amp; Pricing</h2>
          <p className="text-neutral-500 text-sm max-w-xl">Transparent pricing, no hidden fees. All services performed by certified specialists.</p>
        </div>
        <img src={img.services} alt="" className="w-full h-44 object-cover rounded-2xl mb-10" />
        <div className="bg-neutral-50 rounded-3xl border border-neutral-100 overflow-hidden max-w-4xl mx-auto">
          {demoServices.map((s, i) => (
            <div key={i} className="flex items-center gap-5 px-8 py-5 border-b border-neutral-100 last:border-b-0 hover:border-l-4 hover:border-l-rose-500 hover:bg-white transition-all group pl-8">
              <span className="text-3xl font-black text-rose-200 group-hover:text-rose-400 transition-colors w-10 shrink-0 text-right">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex-1">
                <p className="font-bold text-sm text-black group-hover:text-rose-600 transition-colors">{s.name}</p>
                <p className="text-neutral-400 text-xs mt-0.5">{s.desc}</p>
              </div>
              <p className="text-rose-600 font-extrabold text-sm shrink-0">{s.price}</p>
              <ChevronRight size={16} className="text-neutral-300 group-hover:text-rose-400 transition-colors shrink-0" />
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full font-semibold text-sm inline-flex items-center gap-2">Book Appointment <ArrowRight size={16} /></button>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   FAQ VARIANTS
══════════════════════════════════════════════════════════ */

const demoFaq = [
  { q: 'Do I need to book in advance?', a: 'Yes, we recommend booking at least 2 days ahead. Walk-ins are welcome subject to availability.' },
  { q: 'What payment methods do you accept?', a: 'Cash, credit/debit card, and e-wallet (Touch \'n Go, GrabPay).' },
  { q: 'Do you offer student discounts?', a: 'Yes — 10% off selected services with a valid student ID.' },
  { q: 'Can I request a specific stylist?', a: 'Yes — all bookings can specify a preferred stylist. We\'ll do our best to accommodate.' },
  { q: 'Do you cater for bridal parties?', a: 'Yes — group bridal packages for up to 10 guests. Contact us for a quote.' },
  { q: 'What products do you use?', a: 'We use Kerastase, Olaplex, and a range of cruelty-free professional products.' },
];

function FaqA() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-neutral-100 shadow-sm overflow-hidden">
          {demoFaq.map((item, i) => (
            <div key={i} className="border-b border-neutral-100 last:border-b-0">
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-8 py-6 flex justify-between items-center group">
                <span className="font-medium text-sm group-hover:text-rose-600 transition-colors pr-4">{item.q}</span>
                <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.25 }}
                  className="shrink-0 text-neutral-300 group-hover:text-rose-400 transition-colors">
                  <ChevronDown size={18} />
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
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
  );
}

function FaqB() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-2">
          {demoFaq.map((item, i) => (
            <button key={i} onClick={() => setOpen(open === i ? null : i)}
              className={`w-full text-left px-6 py-4 rounded-2xl border transition-all flex justify-between items-center gap-4 ${
                open === i ? 'border-rose-200 bg-rose-50 text-rose-700' : 'border-neutral-100 bg-neutral-50 hover:border-neutral-200 text-neutral-700'
              }`}>
              <span className="font-medium text-sm">{item.q}</span>
              <ChevronRight size={16} className={`shrink-0 transition-transform ${open === i ? 'rotate-90' : ''}`} />
            </button>
          ))}
        </div>
        <div className="lg:sticky lg:top-28">
          <AnimatePresence mode="wait">
            {open !== null ? (
              <motion.div key={open} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
                className="bg-neutral-50 rounded-3xl border border-neutral-100 p-8">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-5">
                  <MessageCircle size={18} />
                </div>
                <h3 className="font-bold text-base mb-3" style={font}>{demoFaq[open]?.q}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{demoFaq[open]?.a}</p>
              </motion.div>
            ) : (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="bg-neutral-50 rounded-3xl border border-dashed border-neutral-200 p-8 flex items-center justify-center min-h-[200px]">
                <p className="text-neutral-400 text-sm">Select a question to see the answer.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function FaqC() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-16 bg-neutral-900">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="space-y-3">
          {demoFaq.map((item, i) => (
            <div key={i} className={`rounded-2xl border overflow-hidden transition-all ${
              open === i ? 'border-rose-500/40 bg-white/5' : 'border-white/10 bg-white/[0.03]'
            }`}>
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-7 py-5 flex justify-between items-center gap-4">
                <span className={`font-medium text-sm transition-colors ${open === i ? 'text-rose-400' : 'text-white/80'}`}>{item.q}</span>
                <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.25 }}
                  className={`shrink-0 transition-colors ${open === i ? 'text-rose-400' : 'text-white/30'}`}>
                  <ChevronDown size={18} />
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
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
  );
}

/* ══════════════════════════════════════════════════════════
   CONTACT VARIANTS
══════════════════════════════════════════════════════════ */

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
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

const contactDetails = [
  { icon: <MapPin size={18} />, label: 'Address', value: 'No. 12, Jalan Telawi 3, Bangsar, 59100 KL' },
  { icon: <Phone size={18} />, label: 'Phone', value: '+60 3-2282 8810' },
  { icon: <Mail size={18} />, label: 'Email', value: 'hello@bloom-salon.com.my' },
  { icon: <Clock size={18} />, label: 'Hours', value: 'Mon–Fri 10am–8pm · Sat 9am–7pm · Sun 10am–5pm' },
];

function ContactA() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-rose-600 text-sm font-semibold uppercase tracking-widest mb-3">Find Us</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-black mb-10" style={font}>Contact &amp; Location</h2>
          <div className="space-y-7">
            {contactDetails.map((item, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="w-11 h-11 rounded-2xl bg-rose-50 flex items-center justify-center shrink-0 text-rose-600">{item.icon}</div>
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
              <button className="w-10 h-10 rounded-full bg-rose-50 hover:bg-rose-100 flex items-center justify-center text-rose-600 transition-colors"><InstagramIcon size={16} /></button>
              <button className="w-10 h-10 rounded-full bg-rose-50 hover:bg-rose-100 flex items-center justify-center text-rose-600 transition-colors"><FacebookIcon size={16} /></button>
            </div>
          </div>
        </div>
        <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-100">
          <h3 className="text-2xl font-bold mb-6 text-black" style={font}>Book an Appointment</h3>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Full Name</label>
              <input type="text" placeholder="Your full name" className="w-full border-2 border-neutral-200 bg-white focus:border-rose-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Phone</label>
                <input type="tel" placeholder="+60 12-XXX XXXX" className="w-full border-2 border-neutral-200 bg-white focus:border-rose-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Service</label>
                <select defaultValue="" className="w-full border-2 border-neutral-200 bg-white focus:border-rose-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all appearance-none">
                  <option value="" disabled>Select service</option>
                  {demoServices.map(s => <option key={s.name}>{s.name}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Message</label>
              <textarea rows={3} placeholder="Preferred date or special requests..." className="w-full border-2 border-neutral-200 bg-white focus:border-rose-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all resize-none" />
            </div>
            <button type="button" className="w-full bg-rose-600 hover:bg-rose-700 text-white py-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2">
              Send Message <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactB() {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-rose-600 text-sm font-semibold uppercase tracking-widest mb-3">Find Us</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-black" style={font}>Contact &amp; Location</h2>
          <p className="text-neutral-500 text-sm mt-3 max-w-md mx-auto">Fill in the form and we'll get back to you within one business day.</p>
        </div>
        <div className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-sm mb-8">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Full Name</label>
                <input type="text" placeholder="Your full name" className="w-full border-2 border-neutral-200 bg-neutral-50 focus:border-rose-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Phone</label>
                <input type="tel" placeholder="+60 12-XXX XXXX" className="w-full border-2 border-neutral-200 bg-neutral-50 focus:border-rose-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Service</label>
              <select defaultValue="" className="w-full border-2 border-neutral-200 bg-neutral-50 focus:border-rose-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all appearance-none">
                <option value="" disabled>Select a service</option>
                {demoServices.map(s => <option key={s.name}>{s.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Message</label>
              <textarea rows={3} placeholder="Preferred date or special requests..." className="w-full border-2 border-neutral-200 bg-neutral-50 focus:border-rose-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all resize-none" />
            </div>
            <button type="button" className="w-full bg-rose-600 hover:bg-rose-700 text-white py-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2">
              Send Message <ArrowRight size={16} />
            </button>
          </form>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {contactDetails.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-neutral-100 p-5 text-center">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-3">{item.icon}</div>
              <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-1">{item.label}</p>
              <p className="text-xs font-medium text-black leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactC() {
  return (
    <section className="py-16 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-rose-400 text-sm font-semibold uppercase tracking-widest mb-3">Find Us</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-white mb-10" style={font}>Contact &amp; Location</h2>
          <div className="grid grid-cols-2 gap-4">
            {contactDetails.map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="w-9 h-9 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center mb-3">{item.icon}</div>
                <p className="text-xs text-white/40 uppercase tracking-wider font-semibold mb-1">{item.label}</p>
                <p className="text-xs font-medium text-white/80 leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex gap-3">
            <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-rose-500/20 hover:border-rose-500/30 flex items-center justify-center text-white/50 hover:text-rose-400 transition-all"><InstagramIcon size={16} /></button>
            <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-rose-500/20 hover:border-rose-500/30 flex items-center justify-center text-white/50 hover:text-rose-400 transition-all"><FacebookIcon size={16} /></button>
          </div>
        </div>
        <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6" style={font}>Book an Appointment</h3>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Full Name</label>
              <input type="text" placeholder="Your full name" className="w-full border-2 border-white/10 bg-white/5 text-white placeholder-white/20 focus:border-rose-500 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Phone</label>
                <input type="tel" placeholder="+60 12-XXX XXXX" className="w-full border-2 border-white/10 bg-white/5 text-white placeholder-white/20 focus:border-rose-500 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Service</label>
                <select defaultValue="" className="w-full border-2 border-white/10 bg-neutral-800 text-white focus:border-rose-500 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all appearance-none">
                  <option value="" disabled>Select service</option>
                  {demoServices.map(s => <option key={s.name}>{s.name}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Message</label>
              <textarea rows={3} placeholder="Preferred date or special requests..." className="w-full border-2 border-white/10 bg-white/5 text-white placeholder-white/20 focus:border-rose-500 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all resize-none" />
            </div>
            <button type="button" className="w-full bg-rose-600 hover:bg-rose-700 text-white py-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2">
              Send Message <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════ */

/* ══════════════════════════════════════════════════════════
   MVV VARIANTS
══════════════════════════════════════════════════════════ */

const demoMvv = [
  { label: 'Mission', icon: <Target size={22} />, heading: 'Empower Confidence', text: 'Empower every client to feel their most confident self through exceptional beauty services delivered with genuine care.' },
  { label: 'Vision', icon: <Eye size={22} />, heading: 'Most Trusted Studio', text: 'To become the most trusted beauty destination in KL — a place where every visit leaves you feeling completely renewed.' },
  { label: 'Values', icon: <Heart size={22} />, heading: 'Creativity · Care · Consistency', text: 'Three words guide every appointment, every treatment, and every interaction we have with our clients.' },
];

/** MVV A — White cards with pill badge (current default) */
function MvvA() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-rose-600 text-sm font-semibold uppercase tracking-widest mb-3">What Drives Us</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-black" style={font}>Our Core Beliefs</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {demoMvv.map((item, i) => (
            <div key={i} className="bg-white rounded-3xl p-10 border border-neutral-100 hover:border-rose-200 transition-all hover:shadow-lg">
              <span className="inline-block text-xs font-bold text-rose-600 uppercase tracking-widest mb-4 bg-rose-50 px-3 py-1 rounded-full">{item.label}</span>
              <h3 className="text-xl font-bold mb-4 mt-2 text-black" style={font}>{item.heading}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** MVV B — Dark strip with accent top border */
function MvvB() {
  return (
    <section className="py-16 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-rose-400 text-sm font-semibold uppercase tracking-widest mb-3">What Drives Us</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-white" style={font}>Our Core Beliefs</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {demoMvv.map((item, i) => (
            <div key={i} className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:bg-white/[0.07] transition-all">
              <div className="absolute top-0 left-0 right-0 h-1 bg-rose-500 rounded-t-3xl" />
              <span className="inline-block text-xs font-bold text-rose-400 uppercase tracking-widest mb-5 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">{item.label}</span>
              <h3 className="text-xl font-bold mb-3 text-white" style={font}>{item.heading}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** MVV C — Large numbered rows, horizontal */
function MvvC() {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-rose-600 text-sm font-semibold uppercase tracking-widest mb-3">What Drives Us</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-black" style={font}>Our Core Beliefs</h2>
        </div>
        <div className="space-y-5">
          {demoMvv.map((item, i) => (
            <div key={i} className="group bg-white rounded-2xl border border-neutral-100 hover:border-rose-200 hover:shadow-md transition-all p-8 flex items-start gap-8">
              <span className="text-6xl font-black text-rose-100 group-hover:text-rose-200 transition-colors leading-none shrink-0 select-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex-1 pt-1">
                <span className="inline-block text-xs font-bold text-rose-600 uppercase tracking-widest mb-3 bg-rose-50 px-3 py-1 rounded-full">{item.label}</span>
                <h3 className="text-xl font-bold mb-2 text-black" style={font}>{item.heading}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed max-w-2xl">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** MVV D — Icon cards, center-aligned with accent bg on hover */
function MvvD() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-rose-600 text-sm font-semibold uppercase tracking-widest mb-3">What Drives Us</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-black" style={font}>Our Core Beliefs</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {demoMvv.map((item, i) => (
            <div key={i} className="group text-center rounded-3xl p-10 border border-neutral-100 hover:bg-rose-600 hover:border-rose-600 transition-all duration-300 cursor-default">
              <div className="w-14 h-14 rounded-2xl bg-rose-50 group-hover:bg-white/20 text-rose-600 group-hover:text-white flex items-center justify-center mx-auto mb-6 transition-all">
                {item.icon}
              </div>
              <span className="inline-block text-xs font-bold text-rose-600 group-hover:text-rose-200 uppercase tracking-widest mb-3 transition-colors">{item.label}</span>
              <h3 className="text-xl font-bold mb-3 text-black group-hover:text-white transition-colors" style={font}>{item.heading}</h3>
              <p className="text-neutral-500 group-hover:text-white/70 text-sm leading-relaxed transition-colors">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** MVV E — Featured mission left + vision/values stacked right */
function MvvE() {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-rose-600 text-sm font-semibold uppercase tracking-widest mb-3">What Drives Us</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-black" style={font}>Our Core Beliefs</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left — featured mission */}
          <div className="bg-rose-600 rounded-3xl p-10 flex flex-col justify-between text-white min-h-[320px]">
            <span className="inline-block text-xs font-bold text-rose-200 uppercase tracking-widest mb-6 bg-white/10 px-3 py-1 rounded-full self-start">{demoMvv[0]?.label}</span>
            <div>
              <h3 className="text-3xl font-black mb-4 leading-tight" style={font}>{demoMvv[0]?.heading}</h3>
              <p className="text-rose-100 text-sm leading-relaxed">{demoMvv[0]?.text}</p>
            </div>
          </div>
          {/* Right — vision + values stacked */}
          <div className="flex flex-col gap-6">
            {demoMvv.slice(1).map((item, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-neutral-100 hover:border-rose-200 hover:shadow-md transition-all flex items-start gap-5 flex-1">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">{item.icon}</div>
                <div>
                  <span className="inline-block text-xs font-bold text-rose-600 uppercase tracking-widest mb-2 bg-rose-50 px-2 py-0.5 rounded-full">{item.label}</span>
                  <h3 className="text-lg font-bold mb-2 text-black" style={font}>{item.heading}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type Tab = 'hero' | 'about' | 'services' | 'faq' | 'contact' | 'mvv';

const tabs: { id: Tab; label: string; count: number }[] = [
  { id: 'hero', label: 'Hero', count: 3 },
  { id: 'about', label: 'About', count: 3 },
  { id: 'services', label: 'Services', count: 3 },
  { id: 'faq', label: 'FAQ', count: 3 },
  { id: 'contact', label: 'Contact', count: 3 },
  { id: 'mvv', label: 'Mission / Vision / Values', count: 5 },
];

const mvvMeta = [
  { id: 'MVV A', label: 'White Pill Cards', desc: 'Neutral-100 bordered cards, accent pill badge top-left, heading, description. Hover lifts shadow.', usedBy: 'Serene Clinic, Mira Clinic' },
  { id: 'MVV B', label: 'Dark Strip + Accent Top Border', desc: 'Dark bg (neutral-900), each card has an accent line on top, white text, subtle glass bg.', usedBy: 'Aura Gym' },
  { id: 'MVV C', label: 'Large Numbered Rows', desc: 'Stacked horizontal rows — giant faded number left, pill + heading + text right. Hover lifts border.', usedBy: 'Nori Restaurant, Ember Table' },
  { id: 'MVV D', label: 'Icon Cards — Hover Filled', desc: '3-column centered cards with icon. On hover the entire card fills with accent color and text turns white.', usedBy: 'Bloom Salon, Lumino Coffee Co.' },
  { id: 'MVV E', label: 'Featured Mission + Stacked Vision/Values', desc: 'Mission fills a large accent card on left. Vision and Values stack as smaller white cards on right.', usedBy: 'Velvet & Co' },
];

const heroMeta = [
  { id: 'Hero A', label: 'Cinematic Full-Screen', desc: 'Full-viewport image, dark gradient overlay, text anchored bottom-left with social proof pill', usedBy: 'Mira Clinic, Ember Table, Lumino Coffee Co., Aura Gym, Nori Restaurant' },
  { id: 'Hero B', label: 'Split Panel', desc: 'White left panel with text content and CTAs, full-height image fills right half of viewport', usedBy: 'Bloom Salon, Serene Clinic' },
  { id: 'Hero C', label: 'Centered Frost', desc: 'Full-viewport image behind white/80 frosted overlay, all content centered horizontally', usedBy: 'Velvet & Co' },
];
const aboutMeta = [
  { id: 'About A', label: 'Image Left + Text Right', desc: '2-column grid — image with floating accent stat badge, story paragraphs and stats on the right', usedBy: 'Bloom Salon, Mira Clinic, Aura Gym, Serene Clinic' },
  { id: 'About B', label: 'Full-Width Banner + 3-Col Text', desc: 'Wide cinematic image spanning full width, eyebrow + heading in col 1, copy split across cols 2–3', usedBy: 'Ember Table, Lumino Coffee Co., Nori Restaurant' },
  { id: 'About C', label: 'Text Left + 2×2 Stat Cards', desc: 'Copy and CTA on left, 4 stat cards in 2×2 grid on right (first card accent bg), image strip below', usedBy: 'Velvet & Co' },
];
const servicesMeta = [
  { id: 'Services A', label: 'Sticky Sidebar + Price List', desc: 'Left column sticky with image + CTA; right side neutral-50 card lists each service as icon + name + desc + price row', usedBy: 'Mira Clinic, Serene Clinic' },
  { id: 'Services B', label: '3-Column Card Grid', desc: 'Image banner above, each service as a full card with icon, description, price, and book button', usedBy: 'Bloom Salon, Ember Table, Lumino Coffee Co., Aura Gym, Nori Restaurant' },
  { id: 'Services C', label: 'Full-Width Numbered Rows', desc: 'Image banner above, services listed as numbered rows in a neutral-50 card with accent left-border on hover', usedBy: 'Velvet & Co' },
];
const faqMeta = [
  { id: 'FAQ A', label: 'Centered Accordion', desc: 'Neutral-50 bg, all items in a single white rounded card, chevron toggles with animated height expand/collapse', usedBy: 'Bloom Salon, Mira Clinic, Ember Table, Lumino Coffee Co., Serene Clinic, Nori Restaurant' },
  { id: 'FAQ B', label: 'Two-Column Split', desc: 'Questions listed as clickable pills on the left; selected answer revealed in a sticky card on the right', usedBy: 'Velvet & Co' },
  { id: 'FAQ C', label: 'Dark Accordion', desc: 'Dark neutral-900 bg, each item a dark card with accent-coloured border and text when open', usedBy: 'Aura Gym' },
];
const contactMeta = [
  { id: 'Contact A', label: 'Two-Column: Details + Form', desc: 'White bg — icon contact rows on left, booking form card on right; social icon row at bottom-left', usedBy: 'Bloom Salon, Mira Clinic, Ember Table, Serene Clinic, Nori Restaurant' },
  { id: 'Contact B', label: 'Centered Form + Info Cards', desc: 'Neutral-50 bg — full-width centered form card on top, 4 compact info icon cards in a row below', usedBy: 'Lumino Coffee Co., Velvet & Co' },
  { id: 'Contact C', label: 'Dark Full-Width', desc: 'Dark neutral-900 bg — 2×2 info cards on left, dark glass form card on right; accent social icons', usedBy: 'Aura Gym' },
];

export default function NeuralDesigns() {
  const [tab, setTab] = useState<Tab>('hero');

  return (
    <>
      {/* ── Page Header ── */}
      <section className="pt-16 pb-10 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-5">
              <CheckCircle size={12} /> Section Variant Gallery
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-3">
              All <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">Section Designs</span>
            </h1>
            <p className="text-gray-400 text-base max-w-xl">
              Every layout variant available in both the Basic and Standard templates — rendered live with demo data. 20 designs across 6 sections.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Tabs ── */}
      <div className="sticky top-[72px] z-40 bg-[#05050F]/95 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-1 py-3">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                  tab === t.id ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                }`}
              >
                {t.label}
                <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${tab === t.id ? 'bg-blue-500/30 text-blue-300' : 'bg-white/5 text-gray-600'}`}>
                  {t.count}
                </span>
              </button>
            ))}
            <span className="ml-auto self-center text-gray-600 text-xs">Demo brand: {BRAND} · Color: {COLOR}</span>
          </div>
        </div>
      </div>

      {/* ── Hero Variants ── */}
      {tab === 'hero' && (
        <div>
          {[HeroA, HeroB, HeroC].map((Component, i) => (
            <div key={i} className="border-b border-white/[0.06]">
              <VariantLabel id={heroMeta[i]!.id} label={heroMeta[i]!.label} desc={heroMeta[i]!.desc} usedBy={heroMeta[i]!.usedBy} />
              <Component />
            </div>
          ))}
        </div>
      )}

      {/* ── About Variants ── */}
      {tab === 'about' && (
        <div>
          {[AboutA, AboutB, AboutC].map((Component, i) => (
            <div key={i} className="border-b border-white/[0.06]">
              <VariantLabel id={aboutMeta[i]!.id} label={aboutMeta[i]!.label} desc={aboutMeta[i]!.desc} usedBy={aboutMeta[i]!.usedBy} />
              <Component />
            </div>
          ))}
        </div>
      )}

      {/* ── Services Variants ── */}
      {tab === 'services' && (
        <div>
          {[ServicesA, ServicesB, ServicesC].map((Component, i) => (
            <div key={i} className="border-b border-white/[0.06]">
              <VariantLabel id={servicesMeta[i]!.id} label={servicesMeta[i]!.label} desc={servicesMeta[i]!.desc} usedBy={servicesMeta[i]!.usedBy} />
              <Component />
            </div>
          ))}
        </div>
      )}

      {/* ── FAQ Variants ── */}
      {tab === 'faq' && (
        <div>
          {[FaqA, FaqB, FaqC].map((Component, i) => (
            <div key={i} className="border-b border-white/[0.06]">
              <VariantLabel id={faqMeta[i]!.id} label={faqMeta[i]!.label} desc={faqMeta[i]!.desc} usedBy={faqMeta[i]!.usedBy} />
              <Component />
            </div>
          ))}
        </div>
      )}

      {/* ── Contact Variants ── */}
      {tab === 'contact' && (
        <div>
          {[ContactA, ContactB, ContactC].map((Component, i) => (
            <div key={i} className="border-b border-white/[0.06]">
              <VariantLabel id={contactMeta[i]!.id} label={contactMeta[i]!.label} desc={contactMeta[i]!.desc} usedBy={contactMeta[i]!.usedBy} />
              <Component />
            </div>
          ))}
        </div>
      )}

      {/* ── MVV Variants ── */}
      {tab === 'mvv' && (
        <div>
          {[MvvA, MvvB, MvvC, MvvD, MvvE].map((Component, i) => (
            <div key={i} className="border-b border-white/[0.06]">
              <VariantLabel id={mvvMeta[i]!.id} label={mvvMeta[i]!.label} desc={mvvMeta[i]!.desc} usedBy={mvvMeta[i]!.usedBy} />
              <Component />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
