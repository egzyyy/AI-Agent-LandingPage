import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight, Star, MapPin, Phone, Mail, Clock, Menu, X, Scissors } from 'lucide-react';

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
        <span className="w-8 h-8 rounded-full bg-rose-500 text-white text-sm font-bold flex items-center justify-center shrink-0">{number}</span>
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

const navLinks = ['Home', 'About', 'Services', 'FAQ', 'Contact'];

export default function BloomSalonBusinessSite() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqItems = [
    {
      q: 'Do I need to book in advance?',
      a: 'Yes, we recommend booking at least 2 days in advance. Walk-ins are welcome based on availability.',
    },
    {
      q: 'What payment methods do you accept?',
      a: "We accept cash, credit/debit card, and e-wallet (Touch 'n Go, GrabPay).",
    },
    {
      q: 'Do you offer student discounts?',
      a: 'Yes, 10% discount with valid student ID on selected services.',
    },
  ];

  const services = [
    { name: 'Hair Cut', price: 'RM 60' },
    { name: 'Hair Colour', price: 'RM 150' },
    { name: 'Facial Treatment', price: 'RM 120' },
    { name: 'Manicure', price: 'RM 50' },
    { name: 'Pedicure', price: 'RM 60' },
    { name: 'Bridal Makeup', price: 'RM 350' },
  ];

  const stats = [
    { value: '500+', label: 'Clients/Month' },
    { value: '8', label: 'Years Open' },
    { value: '4.9★', label: 'Rating' },
    { value: '12', label: 'Stylists' },
  ];

  const team = [
    { name: 'Aisha Razak', role: 'Lead Stylist' },
    { name: 'Priya Nair', role: 'Colour Specialist' },
    { name: 'Mei Ling Tan', role: 'Beauty Therapist' },
    { name: 'Siti Hajar', role: 'Nail Technician' },
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans selection:bg-black selection:text-white">

      {/* Section 0: Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-neutral-100 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Logo + Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-rose-600 flex items-center justify-center text-white">
              <Scissors size={18} />
            </div>
            <span className="font-bold text-lg text-black">
              Bloom <span className="text-rose-600">Salon</span>
            </span>
          </div>

          {/* Center: Nav links (desktop) */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, i) => (
              <button
                key={link}
                className={`text-sm font-medium transition-colors ${
                  i === 0 ? 'text-rose-600' : 'text-neutral-400 hover:text-rose-500'
                }`}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Right: CTA (desktop) */}
          <div className="hidden md:block">
            <button className="bg-rose-600 hover:bg-rose-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all">
              Book Appointment
            </button>
          </div>

          {/* Mobile: Hamburger */}
          <button
            className="md:hidden p-2 text-black"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-white border-t border-neutral-100 px-6 py-8 flex flex-col gap-6 shadow-lg"
            >
              {navLinks.map((link) => (
                <button
                  key={link}
                  className="text-left text-lg font-medium text-neutral-700 hover:text-rose-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </button>
              ))}
              <button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-full font-medium transition-all">
                Book Appointment
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Section 1: Hero */}
      <section className="min-h-[90vh] py-24 bg-white border-b border-neutral-100 flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Left column */}
          <Reveal direction="right">
            <span className="inline-block py-1 px-3 rounded-full bg-rose-50 text-rose-700 text-sm font-medium mb-6">
              ✂️ Premium Beauty Experience
            </span>
            <h1
              className="text-5xl md:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Beauty &amp; Care,{' '}
              <br />
              <em className="text-rose-500 not-italic">Redefined.</em>
            </h1>
            <p className="text-neutral-500 text-lg leading-relaxed mb-8">
              Experience premium hair and beauty treatments in a relaxing environment. From haircuts to facials, we take care of everything for you.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2">
                Book Appointment <ArrowRight size={18} />
              </button>
              <button className="bg-white border-2 border-neutral-200 hover:border-rose-400 text-black px-8 py-4 rounded-full font-medium transition-all">
                View Services
              </button>
            </div>
          </Reveal>

          {/* Right column */}
          <Reveal direction="left" delay={0.15}>
            <div className="relative h-[500px]">
              <Placeholder label="Hero Image" className="h-full !rounded-3xl" />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white border-2 border-neutral-200 p-4 rounded-2xl shadow-lg flex items-center gap-3">
                <div className="bg-rose-100 text-rose-600 w-10 h-10 rounded-full flex items-center justify-center">
                  <Star size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-black">500+ Happy Clients</p>
                  <p className="text-xs text-neutral-400">Every month</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 2: Stats */}
      <section className="py-20 bg-black text-white border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center py-8 md:py-0 border-l border-neutral-800 first:border-l-0">
                <Reveal>
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-neutral-500 text-xs uppercase tracking-[0.15em]">{stat.label}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: About / Story */}
      <section className="py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number={3} title="About / Story" />
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="right">
              <Placeholder label="About Image" className="h-[450px] !rounded-3xl" />
            </Reveal>
            <Reveal direction="left" delay={0.15}>
              <h2
                className="text-4xl font-bold mb-6"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Our Story, Built on Beauty &amp; Passion
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4 text-base">
                Bloom Salon was founded in 2016 by Syarifah Aisyah, a passionate stylist who dreamt of creating a sanctuary where every client would feel truly cared for. Starting with just two styling chairs in a cosy Bangsar shopfront, she built the salon around one guiding principle: beauty is for everyone.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4 text-base">
                Over the years, we grew from a neighbourhood gem to one of Kuala Lumpur's most talked-about salons, expanding our team to 12 talented stylists and beauty therapists. We've been recognised for our expertise in hair colour, bridal services, and holistic beauty treatments, earning a loyal community of clients who return month after month.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4 text-base">
                Today, Bloom Salon remains committed to delivering a premium, personalised experience in a warm and welcoming environment. We stay ahead of trends while honouring the classic techniques that keep our clients looking and feeling their best — every single visit.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 4: Mission / Vision / Values */}
      <section className="py-24 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number={4} title="Mission / Vision / Values" />
          <div className="text-center mb-4">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              What We Stand For
            </h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              At the heart of Bloom Salon is a deep commitment to our clients, our craft, and our community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Mission',
                description: 'Empower every client to feel their most confident self.',
              },
              {
                title: 'Vision',
                description: 'Become the most trusted beauty destination in the city.',
              },
              {
                title: 'Values',
                description: 'Creativity · Care · Consistency',
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white p-10 rounded-3xl border-2 border-neutral-100 text-center hover:border-rose-400 transition-all">
                  <Placeholder label="Icon" className="w-16 h-16 !rounded-full mx-auto mb-6" />
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-neutral-500 leading-relaxed text-sm">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Team */}
      <section className="py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number={5} title="Our Team" />
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Meet Our Talented Team
            </h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              Our stylists and therapists bring years of experience, creativity, and genuine care to every appointment.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-3xl bg-neutral-100 aspect-[3/4] cursor-pointer border-2 border-transparent hover:border-rose-400 transition-all">
                  <Placeholder label={`Photo ${i + 1}`} className="absolute inset-0 !h-full !w-full !rounded-3xl !border-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-5 text-white">
                    <p className="font-bold text-sm">{member.name}</p>
                    <p className="text-xs text-neutral-300">{member.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Services / Price List */}
      <section className="py-24 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number={6} title="Services / Price List" />
          <div className="text-center mb-4">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Our Services &amp; Pricing
            </h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              Transparent pricing. No hidden fees. Just great beauty services tailored to you.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-12 mt-12">
            {/* Left */}
            <div className="w-full lg:w-5/12">
              <Placeholder label="Service Category Image" className="h-[400px] !rounded-3xl" />
              <div className="flex items-center mt-6">
                <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-600">
                  <Scissors size={18} />
                </div>
                <span className="font-bold text-lg ml-3">Our Services</span>
              </div>
            </div>
            {/* Right */}
            <div className="w-full lg:w-7/12 flex flex-col justify-center">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b border-neutral-200 py-6 group hover:border-rose-400 transition-all"
                >
                  <span className="text-sm font-medium text-neutral-800 group-hover:text-rose-600 transition-colors">
                    {service.name}
                  </span>
                  <div className="flex-1 border-b border-dashed border-neutral-200 mx-4" />
                  <span className="text-sm font-bold text-black whitespace-nowrap">{service.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Testimonials */}
      <section className="py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number={7} title="Testimonials" />
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <Reveal direction="right">
              <h2
                className="text-4xl font-bold mb-4"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                What Our Clients Say
              </h2>
              <p className="text-neutral-500 mb-8">
                Don't just take our word for it. Here's what our loyal clients have to say about their experience at Bloom Salon.
              </p>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-black" />
                <div className="w-3 h-3 rounded-full bg-neutral-200" />
                <div className="w-3 h-3 rounded-full bg-neutral-200" />
              </div>
            </Reveal>

            {/* Right */}
            <Reveal direction="left" delay={0.15}>
              <div className="bg-white p-10 rounded-3xl border-2 border-neutral-100 shadow-lg">
                <div className="text-8xl text-neutral-100 font-serif leading-none select-none">&ldquo;</div>
                <p className="text-lg italic text-neutral-600 leading-relaxed mb-8 -mt-4">
                  I've been coming to Bloom Salon for over three years and I still look forward to every visit. The team is incredibly skilled and always makes me feel at ease. My hair has never looked better — I wouldn't trust anyone else!
                </p>
                <div className="flex items-center gap-4">
                  <Placeholder label="Avatar" className="w-12 h-12 !rounded-full shrink-0" />
                  <div>
                    <p className="font-bold text-sm text-black">Sarah Lim</p>
                    <p className="text-xs text-neutral-400">Regular Client</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="py-24 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number={8} title="FAQ" />
          <div className="text-center">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto">
              Everything you need to know before your visit to Bloom Salon.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl border-2 border-neutral-100 shadow-sm mt-12">
            {faqItems.map((item, i) => (
              <div key={i} className="border-b border-neutral-100 last:border-b-0">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left py-5 flex justify-between items-center group"
                >
                  <span className="text-base font-medium group-hover:text-rose-600 transition-colors">{item.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-neutral-300 group-hover:text-rose-500 shrink-0 ml-4"
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
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-neutral-500 leading-relaxed text-sm">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <Reveal delay={0.2} className="text-center mt-12">
            <p className="text-neutral-400 text-sm mb-4">Still have questions?</p>
            <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full text-sm font-medium transition-all">
              Contact Us
            </button>
          </Reveal>
        </div>
      </section>

      {/* Section 9: Contact */}
      <section className="py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number={9} title="Contact" />
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left */}
            <Reveal direction="right">
              <h2
                className="text-4xl font-bold mb-8"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Get in Touch
              </h2>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-50 rounded-full text-rose-500 flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-neutral-400 mb-0.5">Address</p>
                    <p className="text-sm font-medium text-black">No. 18, Jalan Telawi 3, Bangsar, 59100 Kuala Lumpur</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-50 rounded-full text-rose-500 flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-neutral-400 mb-0.5">Phone</p>
                    <p className="text-sm font-medium text-black">+60 12-384 7291</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-50 rounded-full text-rose-500 flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-neutral-400 mb-0.5">Email</p>
                    <p className="text-sm font-medium text-black">hello@bloom-salon.com.my</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-50 rounded-full text-rose-500 flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-neutral-400 mb-0.5">Hours</p>
                    <p className="text-sm font-medium text-black">Mon–Fri 9am–7pm, Sat 9am–6pm, Sun 10am–4pm</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right: Contact Form */}
            <Reveal direction="left" delay={0.15}>
              <div className="bg-neutral-50 p-10 rounded-3xl border-2 border-neutral-100">
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  Send a Message
                </h2>
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full border-2 border-neutral-200 bg-white focus:border-rose-400 focus:ring-0 outline-none rounded-xl px-5 py-4 text-sm transition-all"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder="+60 12-XXX XXXX"
                      className="w-full border-2 border-neutral-200 bg-white focus:border-rose-400 focus:ring-0 outline-none rounded-xl px-5 py-4 text-sm transition-all"
                    />
                    <select defaultValue="" className="w-full border-2 border-neutral-200 bg-white focus:border-rose-400 focus:ring-0 outline-none rounded-xl px-5 py-4 text-sm transition-all appearance-none">
                      <option value="" disabled>Select a service</option>
                      <option>Hair Cut</option>
                      <option>Hair Colour</option>
                      <option>Facial Treatment</option>
                      <option>Manicure</option>
                      <option>Pedicure</option>
                      <option>Bridal Makeup</option>
                    </select>
                  </div>
                  <textarea
                    rows={3}
                    placeholder="How can we help you?"
                    className="w-full border-2 border-neutral-200 bg-white focus:border-rose-400 focus:ring-0 outline-none rounded-xl px-5 py-4 text-sm transition-all resize-none"
                  />
                  <button
                    type="button"
                    className="w-full bg-rose-600 hover:bg-rose-700 text-white py-4 rounded-xl font-medium transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 10: CTA Banner */}
      <section className="py-24 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number={10} title="Call-to-Action" />
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Book Your Appointment Today
            </h2>
            <p className="text-neutral-500 text-lg mb-10">
              Treat yourself to a premium beauty experience. Our team is ready to make you look and feel your best.
            </p>
            <button className="bg-rose-600 hover:bg-rose-700 text-white px-10 py-5 rounded-full text-lg font-medium transition-all inline-flex items-center gap-2">
              Book Appointment <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Section 11: Footer */}
      <footer className="bg-black text-neutral-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand col */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-lg bg-rose-600 flex items-center justify-center text-white mr-3">
                  <Scissors size={16} />
                </div>
                <span className="text-white font-bold text-lg">Bloom Salon</span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Your neighbourhood premium beauty salon, dedicated to making every client feel confident and cared for.
              </p>
              <div className="flex gap-3">
                <button className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-all">
                  <span className="text-xs text-neutral-400">f</span>
                </button>
                <button className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-all">
                  <span className="text-xs text-neutral-400">ig</span>
                </button>
              </div>
            </div>

            {/* Hours col */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Opening Hours</h4>
              <div className="flex flex-col gap-2 text-sm">
                <p>Mon–Fri: 9am–7pm</p>
                <p>Sat: 9am–6pm</p>
                <p>Sun: 10am–4pm</p>
              </div>
            </div>

            {/* Contact col */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Contact</h4>
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="shrink-0 mt-0.5" />
                  <span>No. 18, Jalan Telawi 3, Bangsar, 59100 KL</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="shrink-0" />
                  <span>+60 12-384 7291</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© {new Date().getFullYear()} Bloom Salon. All Rights Reserved.</p>
            <div className="flex gap-6">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms</button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
