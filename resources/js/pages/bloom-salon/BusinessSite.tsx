import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight, Star, MapPin, Phone, Mail, Clock, Scissors } from 'lucide-react';

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

function Reveal({ children, className = '', delay = 0, direction = 'up' }: {
  children: React.ReactNode; className?: string; delay?: number; direction?: 'up' | 'down' | 'left' | 'right';
}) {
  const dirs: Record<string, { x?: number; y?: number }> = { up: { y: 40 }, down: { y: -40 }, left: { x: 40 }, right: { x: -40 } };
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

const font = { fontFamily: '"Playfair Display", serif' };

export default function BloomSalonBusinessSite() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const faqItems = [
    { q: 'Do I need to book in advance?', a: 'Yes, we recommend booking at least 2 days in advance. Walk-ins are welcome subject to availability.' },
    { q: 'What payment methods do you accept?', a: "We accept cash, credit/debit card, and e-wallet (Touch 'n Go, GrabPay)." },
    { q: 'Do you offer student discounts?', a: 'Yes — 10% off selected services with a valid student ID.' },
  ];

  return (
    <div className="bg-white text-black font-sans">

      {/* ── Floating Header ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-rose-600 flex items-center justify-center">
              <Scissors size={15} className="text-white" />
            </div>
            <span className={`font-bold text-base tracking-tight transition-colors ${scrolled ? 'text-black' : 'text-white'}`}>
              Bloom <span className="text-rose-400">Salon</span>
            </span>
          </div>
          <a href="#contact">
            <button className="bg-rose-600 hover:bg-rose-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all">
              Book Appointment
            </button>
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=80"
          alt="Bloom Salon interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <Reveal>
            <span className="inline-block bg-rose-600 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Est. 2016 · Bangsar, KL
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none mb-6" style={font}>
              Beauty &amp; Care,<br />
              <em className="text-rose-400 not-italic">Redefined.</em>
            </h1>
            <p className="text-white/70 text-lg max-w-xl mb-10 leading-relaxed">
              Experience premium hair and beauty treatments in a relaxing environment. From haircuts to facials, we take care of everything for you.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2 text-sm">
                  Book Appointment <ArrowRight size={16} />
                </button>
              </a>
              <a href="#services">
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-medium transition-all text-sm">
                  View Services
                </button>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Social proof pill */}
        <div className="absolute bottom-8 right-8 hidden md:block">
        <div className="bg-white rounded-2xl shadow-lg px-5 py-4 flex items-center gap-3">
          <div className="flex -space-x-2">
            {['photo-1494790108377-be9c29b29330', 'photo-1438761681033-6461ffad8d80', 'photo-1534528741775-53994a69daeb'].map((id, i) => (
              <img key={i} src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=40&h=40&q=80`}
                className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="client" />
            ))}
          </div>
          <div>
            <div className="flex gap-0.5 mb-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={11} className="fill-amber-400 text-amber-400" />)}
            </div>
            <p className="text-xs font-semibold text-black">500+ happy clients</p>
          </div>
        </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-800">
          {[
            { value: '500+', label: 'Clients / Month' },
            { value: '8', label: 'Years Open' },
            { value: '4.9★', label: 'Google Rating' },
            { value: '12', label: 'Expert Stylists' },
          ].map((stat, i) => (
            <Reveal key={i} delay={i * 0.08} className="text-center px-8 py-4">
              <p className="text-4xl md:text-5xl font-black mb-2">{stat.value}</p>
              <p className="text-neutral-500 text-xs uppercase tracking-widest">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="right">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80"
                alt="Salon experience"
                className="w-full h-140 object-cover rounded-3xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-rose-600 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-black mb-0.5">8+</p>
                <p className="text-xs text-rose-200 uppercase tracking-wider">Years of Excellence</p>
              </div>
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.15}>
            <p className="text-rose-600 text-sm font-semibold uppercase tracking-widest mb-4">Our Story</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight" style={font}>
              Where Beauty<br />Meets Craft
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-5 text-base">
              Bloom Salon was founded in 2016 by Aisyah Rahman, a classically trained stylist who believed that every client deserves a truly transformative experience — not just a haircut. Starting from a single chair in Bangsar, she built a space where artistry and genuine care go hand in hand.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-5 text-base">
              By 2020, Bloom had grown into a full-service beauty studio with 12 specialists, earning recognition as one of Kuala Lumpur's top-rated salons. Our reputation is built on consistency, creativity, and an unwavering commitment to every guest.
            </p>
            <p className="text-neutral-600 leading-relaxed text-base">
              Today, our mission is simple: empower every client to feel their most confident self. Whether you're here for a quick trim or a full bridal transformation, every visit is an opportunity to make you shine.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Mission / Vision / Values ── */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-rose-600 text-sm font-semibold uppercase tracking-widest mb-3">What Drives Us</p>
            <h2 className="text-4xl font-extrabold tracking-tight" style={font}>Our Core Beliefs</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                label: 'Mission',
                heading: 'Empower Confidence',
                text: 'We empower every client to feel their most confident self through exceptional beauty services delivered with genuine care.',
              },
              {
                label: 'Vision',
                heading: 'Most Trusted Studio',
                text: 'To become the most trusted beauty destination in KL — a place where every visit leaves you feeling completely renewed.',
              },
              {
                label: 'Values',
                heading: 'Creativity · Care · Consistency',
                text: 'Three words guide every appointment, every treatment, and every interaction we have with our clients.',
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-10 border border-neutral-100 hover:border-rose-200 transition-all hover:shadow-lg group">
                  <span className="inline-block text-xs font-bold text-rose-600 uppercase tracking-widest mb-4 bg-rose-50 px-3 py-1 rounded-full">
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

      {/* ── Team ── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="mb-16">
            <p className="text-rose-600 text-sm font-semibold uppercase tracking-widest mb-3">The People Behind the Magic</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={font}>Meet Our Stylists</h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: 'Aisyah Rahman', role: 'Lead Stylist & Founder', photo: 'photo-1531746020798-e6953c6e8e04' },
              { name: 'Priya Nair', role: 'Colour Specialist', photo: 'photo-1494790108377-be9c29b29330' },
              { name: 'Siti Hajar', role: 'Beauty Therapist', photo: 'photo-1438761681033-6461ffad8d80' },
              { name: 'Lena Tan', role: 'Nail Technician', photo: 'photo-1534528741775-53994a69daeb' },
            ].map((member, i) => (
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

      {/* ── Services ── */}
      <section id="services" className="py-24 lg:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-5/12 lg:sticky lg:top-24">
              <Reveal direction="right">
                <p className="text-rose-600 text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6" style={font}>Services &amp; Pricing</h2>
                <p className="text-neutral-500 mb-8 leading-relaxed text-sm">
                  Transparent pricing, no hidden fees. Every treatment is performed by a certified specialist using premium products.
                </p>
                <img
                  src="https://images.unsplash.com/photo-1595163516014-3a9a4abb0b25?auto=format&fit=crop&w=800&q=80"
                  alt="Hair styling services"
                  className="w-full h-72 object-cover rounded-2xl"
                />
              </Reveal>
            </div>
            <div className="w-full lg:w-7/12">
              <Reveal direction="left" delay={0.1}>
                <div className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-sm">
                  {[
                    { name: 'Hair Cut', desc: 'Wash, cut & blow dry', price: 'RM 60' },
                    { name: 'Hair Colour', desc: 'Full colour + treatment', price: 'RM 150' },
                    { name: 'Facial Treatment', desc: '60-minute deep cleanse', price: 'RM 120' },
                    { name: 'Manicure', desc: 'Classic manicure + polish', price: 'RM 50' },
                    { name: 'Pedicure', desc: 'Relaxing foot treatment', price: 'RM 60' },
                    { name: 'Bridal Makeup', desc: 'Full glam + trial session', price: 'RM 350' },
                  ].map((service, i) => (
                    <div key={i} className="flex items-center gap-4 py-5 border-b border-neutral-100 last:border-b-0 group cursor-pointer hover:bg-rose-50/40 -mx-4 px-4 rounded-xl transition-colors">
                      <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center shrink-0 group-hover:bg-rose-100 transition-colors">
                        <Scissors size={14} className="text-rose-600" />
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

      {/* ── Testimonials ── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-rose-600 text-sm font-semibold uppercase tracking-widest mb-3">Client Stories</p>
            <h2 className="text-4xl font-extrabold tracking-tight" style={font}>What Our Clients Say</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "I've been coming to Bloom for three years and wouldn't trust anyone else with my hair. The results are always beyond what I imagined.",
                name: 'Sarah Lim',
                role: 'Regular Client',
                photo: 'photo-1580489944761-15a19d654956',
              },
              {
                quote: "The atmosphere is so calming and the team is incredibly skilled. My bridal makeup was absolutely flawless on my wedding day.",
                name: 'Nurul Ain',
                role: 'Bridal Client',
                photo: 'photo-1438761681033-6461ffad8d80',
              },
              {
                quote: "Best hair colour I've ever had. Priya knew exactly what shade would work for my skin tone. I get compliments everywhere I go.",
                name: 'Michelle Tan',
                role: 'Colour Client',
                photo: 'photo-1534528741775-53994a69daeb',
              },
            ].map((t, i) => (
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

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <p className="text-rose-600 text-sm font-semibold uppercase tracking-widest mb-3">Got Questions?</p>
            <h2 className="text-4xl font-extrabold tracking-tight" style={font}>Frequently Asked</h2>
          </Reveal>
          <div className="bg-white rounded-3xl border border-neutral-100 shadow-sm overflow-hidden">
            {faqItems.map((item, i) => (
              <div key={i} className="border-b border-neutral-100 last:border-b-0">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-8 py-6 flex justify-between items-center group"
                >
                  <span className="font-medium text-sm group-hover:text-rose-600 transition-colors pr-4">{item.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-neutral-300 group-hover:text-rose-400 transition-colors"
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

      {/* ── Contact ── */}
      <section id="contact" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <Reveal direction="right">
            <p className="text-rose-600 text-sm font-semibold uppercase tracking-widest mb-3">Visit Us</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-10" style={font}>Get in Touch</h2>
            <div className="space-y-7">
              {[
                { icon: <MapPin size={18} />, label: 'Address', value: '28, Jalan Telawi 3, Bangsar, 59100 Kuala Lumpur' },
                { icon: <Phone size={18} />, label: 'Phone', value: '+60 12-384 9201' },
                { icon: <Mail size={18} />, label: 'Email', value: 'hello@bloom-salon.com.my' },
                { icon: <Clock size={18} />, label: 'Hours', value: 'Mon–Fri 9am–7pm · Sat 9am–6pm · Sun 10am–4pm' },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="w-11 h-11 rounded-2xl bg-rose-50 flex items-center justify-center shrink-0 text-rose-600">
                    {item.icon}
                  </div>
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
                <button className="w-10 h-10 rounded-full bg-rose-50 hover:bg-rose-100 flex items-center justify-center text-rose-600 transition-colors">
                  <InstagramIcon size={16} />
                </button>
                <button className="w-10 h-10 rounded-full bg-rose-50 hover:bg-rose-100 flex items-center justify-center text-rose-600 transition-colors">
                  <FacebookIcon size={16} />
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.15}>
            <div className="bg-neutral-50 rounded-3xl p-8 md:p-10 border border-neutral-100">
              <h3 className="text-2xl font-bold mb-6" style={font}>Book an Appointment</h3>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full border-2 border-neutral-200 bg-white focus:border-rose-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Phone</label>
                    <input
                      type="tel"
                      placeholder="+60 12-XXX XXXX"
                      className="w-full border-2 border-neutral-200 bg-white focus:border-rose-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Service</label>
                    <select
                      defaultValue=""
                      className="w-full border-2 border-neutral-200 bg-white focus:border-rose-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all appearance-none"
                    >
                      <option value="" disabled>Select service</option>
                      <option>Hair Cut</option>
                      <option>Hair Colour</option>
                      <option>Facial Treatment</option>
                      <option>Manicure</option>
                      <option>Pedicure</option>
                      <option>Bridal Makeup</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us your preferred date or any special requests..."
                    className="w-full border-2 border-neutral-200 bg-white focus:border-rose-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all resize-none"
                  />
                </div>
                <button
                  type="button"
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white py-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2"
                >
                  Send Message <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative py-28 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1800&q=80"
          alt="Salon"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative max-w-3xl mx-auto px-6 text-center text-white">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5" style={font}>
              Book Your Appointment Today
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Don't wait to feel your best. Our team is ready to welcome you — slots fill up fast.
            </p>
            <a href="#contact">
              <button className="bg-rose-600 hover:bg-rose-700 text-white px-10 py-5 rounded-full text-base font-semibold transition-all inline-flex items-center gap-2">
                Book Appointment <ArrowRight size={18} />
              </button>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-black text-neutral-400 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-neutral-800">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-rose-600 flex items-center justify-center">
                  <Scissors size={14} className="text-white" />
                </div>
                <span className="text-white font-bold">Bloom Salon</span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs">
                Kuala Lumpur's premier beauty studio — where artistry, care, and confidence come together.
              </p>
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
                <li className="flex items-start gap-2">
                  <MapPin size={13} className="text-rose-500 mt-0.5 shrink-0" />
                  <span>28, Jalan Telawi 3, Bangsar, 59100 KL</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={13} className="text-rose-500 shrink-0" />
                  <span>+60 12-384 9201</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={13} className="text-rose-500 shrink-0" />
                  <span>hello@bloom-salon.com.my</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
            <p>© {new Date().getFullYear()} Bloom Salon. All Rights Reserved.</p>
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
