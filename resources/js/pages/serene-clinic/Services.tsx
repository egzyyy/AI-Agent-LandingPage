import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { HeartPulse, ArrowRight } from 'lucide-react';

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

const steps = [
  {
    num: '01',
    title: 'Book an Appointment',
    desc: 'Schedule online or by phone — same-day slots often available for GP consultations.',
  },
  {
    num: '02',
    title: 'Meet Your Doctor',
    desc: 'Arrive 10 minutes early. Your consultation starts on time with no rushing, ever.',
  },
  {
    num: '03',
    title: 'Receive Your Results',
    desc: 'Lab results and prescriptions delivered within 24 hours, with full explanations from your doctor.',
  },
];

const services = [
  { name: 'General Checkup', desc: 'Full physical exam', price: 'RM 80' },
  { name: 'Specialist Referral', desc: 'Specialist appointment', price: 'RM 150' },
  { name: 'Vaccination', desc: 'All major vaccines', price: 'RM 60' },
  { name: 'Dental Cleaning', desc: 'Scale & polish', price: 'RM 100' },
  { name: 'Eye Screening', desc: 'Vision + pressure check', price: 'RM 90' },
  { name: 'Health Screening', desc: 'Comprehensive panel', price: 'RM 200' },
];

export default function SereneClinicServices() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight" style={font}>Services &amp; Pricing</h1>
            <p className="text-neutral-500 mt-4 max-w-lg text-sm leading-relaxed">
              Transparent pricing, no hidden fees. Every service is delivered by a certified specialist with your wellbeing at the centre.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">Simple Process</p>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4" style={font}>How It Works</h2>
            <p className="text-neutral-500 max-w-xl mx-auto text-sm leading-relaxed">
              From booking to results — a smooth, patient-first experience at every step.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="rounded-3xl border border-neutral-100 bg-white p-8">
                  <span className="text-5xl font-black text-sky-600 opacity-20 block mb-4">{step.num}</span>
                  <h3 className="font-bold text-base mb-2" style={font}>{step.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full Price List ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-5/12 lg:sticky lg:top-24">
              <Reveal direction="right">
                <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">Full Price List</p>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6" style={font}>All Services</h2>
                <p className="text-neutral-500 mb-8 leading-relaxed text-sm">
                  All consultations are conducted by registered medical professionals. No hidden fees — what you see is what you pay.
                </p>
                <img
                  src="/images/serene-clinic/services.jpg"
                  alt="Serene Clinic services"
                  className="w-full h-72 object-cover rounded-2xl"
                />
              </Reveal>
            </div>
            <div className="w-full lg:w-7/12">
              <Reveal direction="left" delay={0.1}>
                <div className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-sm">
                  {services.map((s, i) => (
                    <div key={i} className="flex items-center gap-4 py-5 border-b border-neutral-100 last:border-b-0 group cursor-pointer hover:bg-sky-50/40 -mx-4 px-4 rounded-xl transition-colors">
                      <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center shrink-0 group-hover:bg-sky-100 transition-colors">
                        <HeartPulse size={14} className="text-sky-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm text-black">{s.name}</p>
                        <p className="text-xs text-neutral-400 mt-0.5">{s.desc}</p>
                      </div>
                      <span className="font-bold text-black text-sm whitespace-nowrap">{s.price}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
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
