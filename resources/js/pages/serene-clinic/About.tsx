import { motion } from 'motion/react';

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

const milestones = [
  { year: '2014', desc: 'Founded in Petaling Jaya as a single GP practice by Dr. Sarah Wong.' },
  { year: '2018', desc: 'Added dental, specialist, and preventive care services to our growing team.' },
  { year: '2022', desc: 'Reached 1,200+ patients per month across all specialities and departments.' },
];

const mvv = [
  {
    label: 'Mission',
    heading: 'Compassionate Care',
    text: 'Deliver compassionate, evidence-based healthcare to every patient — regardless of their age, background, or health history.',
  },
  {
    label: 'Vision',
    heading: 'A Healthier Community',
    text: 'A healthier community, one consultation at a time — built through trust, expertise, and genuine care for every individual.',
  },
  {
    label: 'Values',
    heading: 'Integrity · Expertise · Compassion',
    text: 'Three words that guide every consultation, every prescription, and every interaction we have with our patients.',
  },
];

const team = [
  { name: 'Dr. Sarah Wong', role: 'General Practitioner & Founder', photo: 'photo-1531746020798-e6953c6e8e04' },
  { name: 'Dr. Amir Hassan', role: 'Specialist', photo: 'photo-1494790108377-be9c29b29330' },
  { name: 'Nurse Farah', role: 'Head Nurse', photo: 'photo-1438761681033-6461ffad8d80' },
  { name: 'Dr. Tan Mei Lin', role: 'Dental Surgeon', photo: 'photo-1534528741775-53994a69daeb' },
];

export default function SereneClinicAbout() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight" style={font}>
              Healthcare<br />Built on Trust
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="right">
            <div className="relative">
              <img
                src="/images/serene-clinic/about.jpg"
                alt="Serene Clinic team"
                className="w-full h-140 object-cover rounded-3xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-sky-600 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-black mb-0.5">10+</p>
                <p className="text-xs text-sky-200 uppercase tracking-wider">Years of Care</p>
              </div>
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.15}>
            <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-4">Our Story</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight" style={font}>
              Where Expertise<br />Meets Compassion
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-5 text-base">
              Serene Clinic was established in 2014 by Dr. Sarah Wong, driven by a belief that quality healthcare should be accessible, compassionate, and personal. What began as a small GP clinic in Petaling Jaya has grown into a full-service medical centre.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-5 text-base">
              Over the years, we expanded our team to include specialists across dental, vision, and preventive care — earning the trust of over 1,200 patients monthly. Every doctor on our team shares the same commitment to evidence-based, patient-first care.
            </p>
            <p className="text-neutral-600 leading-relaxed text-base">
              Our mission today is to be the healthcare partner you turn to at every stage of life. From routine checkups to specialist consultations, we're here for the long term.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Milestones ── */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">How We Got Here</p>
            <h2 className="text-4xl font-extrabold tracking-tight" style={font}>Our Journey</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {milestones.map((m, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="rounded-3xl border border-neutral-100 bg-white p-8">
                  <p className="text-5xl font-black text-sky-600 mb-4">{m.year}</p>
                  <p className="text-neutral-500 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission / Vision / Values ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">What Drives Us</p>
            <h2 className="text-4xl font-extrabold tracking-tight" style={font}>Our Core Beliefs</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {mvv.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-10 border border-neutral-100 hover:border-sky-200 transition-all hover:shadow-lg">
                  <span className="inline-block text-xs font-bold text-sky-600 uppercase tracking-widest mb-4 bg-sky-50 px-3 py-1 rounded-full">
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
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="mb-16">
            <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">The People Behind Your Care</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={font}>Meet Our Doctors</h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
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
    </>
  );
}
