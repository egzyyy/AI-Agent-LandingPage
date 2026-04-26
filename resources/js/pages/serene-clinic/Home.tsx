import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, HeartPulse, Zap, MessageCircle } from 'lucide-react';

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

const font = { fontFamily: '"DM Sans", sans-serif' };

const features = [
  {
    icon: <HeartPulse size={20} />,
    heading: 'Experienced Doctors',
    desc: 'All doctors hold specialist qualifications and 10+ years of clinical practice.',
  },
  {
    icon: <Zap size={20} />,
    heading: 'Fast Results',
    desc: 'Lab results and health reports delivered within 24 hours of your visit.',
  },
  {
    icon: <MessageCircle size={20} />,
    heading: 'Patient-First Care',
    desc: 'We listen first, treat second — no rushed consultations, ever.',
  },
];

const services = [
  { name: 'General Checkup', desc: 'Full physical exam', price: 'RM 80' },
  { name: 'Specialist Referral', desc: 'Specialist appointment', price: 'RM 150' },
  { name: 'Vaccination', desc: 'All major vaccines', price: 'RM 60' },
];

const testimonials = [
  {
    quote: "The doctors here genuinely listen. None of the other clinics I've tried came close to the care at Serene Clinic.",
    name: 'Ahmad Rizal',
    role: 'Regular Patient',
    photo: 'photo-1580489944761-15a19d654956',
  },
  {
    quote: 'My health screening results came back within 24 hours with a full explanation from my doctor. Truly impressive.',
    name: 'Cindy Loh',
    role: 'Health Screening',
    photo: 'photo-1438761681033-6461ffad8d80',
  },
  {
    quote: 'My entire family comes here now. The team makes every visit comfortable, even for my kids.',
    name: 'Priya Menon',
    role: 'Family Patient',
    photo: 'photo-1534528741775-53994a69daeb',
  },
];

export default function SereneClinicHome() {
  return (
    <>
      {/* ── Hero B — Split Panel ── */}
      <section className="relative min-h-[calc(100vh-72px)] flex overflow-hidden">
        {/* Left white panel */}
        <div className="relative z-10 w-full md:w-1/2 bg-white flex flex-col justify-center px-10 lg:px-16 py-16">
          <Reveal>
            <span className="inline-block bg-sky-600 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 self-start">
              🏥 Est. 2014 · Petaling Jaya
            </span>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-black leading-tight mb-5" style={font}>
              Your Health,<br />
              <em className="text-sky-600 not-italic">Our Priority.</em>
            </h1>
            <p className="text-neutral-500 text-base max-w-sm mb-8 leading-relaxed">
              Comprehensive healthcare services delivered by experienced professionals. Your wellness journey starts with a single consultation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/serene-clinic/contact">
                <button className="bg-sky-600 hover:bg-sky-700 text-white px-7 py-3.5 rounded-full font-semibold text-sm flex items-center gap-2 transition-all">
                  Book Consultation <ArrowRight size={15} />
                </button>
              </Link>
              <Link to="/serene-clinic/services">
                <button className="border border-neutral-200 text-neutral-700 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-neutral-50 transition-all">
                  View Services
                </button>
              </Link>
            </div>
            <div className="flex items-center gap-3 mt-8">
              <div className="flex -space-x-2">
                {['photo-1438761681033-6461ffad8d80', 'photo-1534528741775-53994a69daeb'].map((id, i) => (
                  <img key={i} src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=40&h=40&q=80`}
                    className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="patient" />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={11} className="fill-sky-400 text-sky-400" />)}
                </div>
                <span className="text-neutral-500 text-sm"><strong className="text-black">1,200+</strong> Patients</span>
              </div>
            </div>
          </Reveal>
        </div>
        {/* Right image panel */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="/images/serene-clinic/hero.jpg"
            alt="Serene Clinic"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-800">
          {[
            { value: '1,200+', label: 'Patients / Month' },
            { value: '15', label: 'Doctors' },
            { value: '98%', label: 'Satisfaction' },
            { value: '10', label: 'Years Open' },
          ].map((stat, i) => (
            <Reveal key={i} delay={i * 0.08} className="text-center px-8 py-4">
              <p className="text-4xl md:text-5xl font-black mb-2">{stat.value}</p>
              <p className="text-neutral-500 text-xs uppercase tracking-widest">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Why Choose Us — 2-col split: text left, numbered feature rows right ── */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="right">
            <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-4">Why Patients Trust Us</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6" style={font}>
              Why Choose<br />Serene Clinic
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-10">
              We combine clinical expertise with genuine care — because good medicine is about the whole person, not just the diagnosis.
            </p>
            <div className="grid grid-cols-2 gap-5">
              {[
                { val: '98%', label: 'Satisfaction rate' },
                { val: '24h', label: 'Results turnaround' },
                { val: '15', label: 'Specialist doctors' },
                { val: '10+', label: 'Years of care' },
              ].map((s, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <p className="text-2xl font-black text-sky-400 mb-1">{s.val}</p>
                  <p className="text-xs text-white/40 uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <div className="space-y-4">
            {features.map((f, i) => (
              <Reveal key={i} delay={i * 0.12} direction="left">
                <div className="group bg-white/[0.04] border border-white/10 rounded-2xl p-7 flex items-start gap-6 hover:bg-white/[0.08] hover:border-sky-500/30 transition-all">
                  <span className="text-4xl font-black text-sky-500/20 group-hover:text-sky-500/40 transition-colors leading-none shrink-0 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-3">
                      {f.icon}
                    </div>
                    <h3 className="font-bold text-white text-sm mb-1.5">{f.heading}</h3>
                    <p className="text-white/45 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Preview — horizontal price list ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <Reveal direction="right" className="lg:sticky lg:top-28">
            <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-4">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5" style={font}>Our Services</h2>
            <p className="text-neutral-500 text-sm leading-relaxed mb-8">
              Transparent pricing, no hidden fees. Every service is performed by doctors with specialist qualifications.
            </p>
            <Link to="/serene-clinic/services">
              <button className="bg-sky-600 hover:bg-sky-700 text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all inline-flex items-center gap-2">
                View All Services <ArrowRight size={16} />
              </button>
            </Link>
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <div className="bg-neutral-50 rounded-3xl border border-neutral-100 overflow-hidden">
              {services.map((s, i) => (
                <div key={i} className="group flex items-center gap-5 px-7 py-5 border-b border-neutral-100 last:border-b-0 hover:bg-white transition-colors cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 group-hover:bg-sky-100 transition-colors">
                    <HeartPulse size={18} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-black group-hover:text-sky-600 transition-colors">{s.name}</p>
                    <p className="text-neutral-400 text-xs mt-0.5">{s.desc}</p>
                  </div>
                  <p className="text-sky-600 font-extrabold text-sm shrink-0">{s.price}</p>
                </div>
              ))}
              <div className="px-7 py-5 bg-sky-50 flex items-center justify-between">
                <p className="text-xs text-sky-700 font-semibold">+ 3 more services available</p>
                <Link to="/serene-clinic/services">
                  <button className="text-xs text-sky-600 font-bold hover:underline flex items-center gap-1">
                    See all <ArrowRight size={12} />
                  </button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Testimonials — featured large + 2 stacked ── */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="mb-14">
            <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">Patient Stories</p>
            <h2 className="text-4xl font-black tracking-tight" style={font}>What Our Patients Say</h2>
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Featured large testimonial */}
            <Reveal direction="right">
              <div className="bg-sky-600 rounded-3xl p-10 text-white h-full flex flex-col justify-between min-h-[320px]">
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} className="fill-white text-white" />)}
                </div>
                <p className="text-white/90 text-lg leading-relaxed italic flex-1 mb-8">
                  "{testimonials[0]?.quote}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                  <img
                    src={`https://images.unsplash.com/${testimonials[0]?.photo}?auto=format&fit=crop&w=80&h=80&q=80`}
                    alt={testimonials[0]?.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                  />
                  <div>
                    <p className="font-bold text-sm">{testimonials[0]?.name}</p>
                    <p className="text-xs text-sky-200">{testimonials[0]?.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
            {/* Stacked 2 smaller testimonials */}
            <div className="flex flex-col gap-6">
              {testimonials.slice(1).map((t, i) => (
                <Reveal key={i} direction="left" delay={i * 0.12}>
                  <div className="bg-white border border-neutral-100 rounded-3xl p-8 hover:border-sky-200 hover:shadow-md transition-all flex-1">
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(5)].map((_, j) => <Star key={j} size={13} className="fill-sky-400 text-sky-400" />)}
                    </div>
                    <p className="text-neutral-600 text-sm leading-relaxed italic mb-6">"{t.quote}"</p>
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
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative py-28 overflow-hidden">
        <img
          src="/images/serene-clinic/cta.jpg"
          alt="Serene Clinic"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative max-w-3xl mx-auto px-6 text-center text-white">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5" style={font}>
              Your Health Starts Here
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Take the first step. Book a consultation with one of our specialists today.
            </p>
            <Link to="/serene-clinic/contact">
              <button className="bg-sky-600 hover:bg-sky-700 text-white px-10 py-5 rounded-full text-base font-semibold transition-all inline-flex items-center gap-2">
                Book Consultation <ArrowRight size={18} />
              </button>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
