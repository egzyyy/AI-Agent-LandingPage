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

const font = { fontFamily: '"Outfit", sans-serif' };

const mvv = [
  {
    label: 'Mission',
    heading: 'Why We Exist',
    text: 'Help members build strength, confidence, and lasting habits.',
  },
  {
    label: 'Vision',
    heading: 'Where We Are Going',
    text: 'The most results-driven fitness community in the region.',
  },
  {
    label: 'Values',
    heading: 'How We Work',
    text: 'Discipline · Community · Progress',
  },
];

const team = [
  { name: 'Coach Rizal', role: 'Head Trainer', photo: 'photo-1531746020798-e6953c6e8e04' },
  { name: 'Aiyana Park', role: 'Yoga Instructor', photo: 'photo-1494790108377-be9c29b29330' },
  { name: 'Marcus Lee', role: 'Strength Coach', photo: 'photo-1438761681033-6461ffad8d80' },
  { name: 'Tina Chong', role: 'Nutrition Lead', photo: 'photo-1534528741775-53994a69daeb' },
];

export default function AuraGymAbout() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight" style={font}>
              Built for Results
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── About Story ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80"
                  alt="Aura Gym facility"
                  className="w-full h-140 object-cover rounded-3xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-2xl shadow-xl">
                  <p className="text-3xl font-black mb-0.5">6+</p>
                  <p className="text-xs text-amber-200 uppercase tracking-wider">Years of Excellence</p>
                </div>
              </div>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-4">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight" style={font}>
                A Community<br />Built on Results
              </h2>
              <div className="space-y-5 text-neutral-600 leading-relaxed">
                <p>
                  Aura Gym was founded in 2019 by Coach Rizal, a competitive athlete who believed the best gyms weren't about equipment — they were about community. He opened our Mont Kiara facility with 20 members and a clear mission: results that last.
                </p>
                <p>
                  Since then, we've grown to over 800 active members, 20 certified trainers, and a 5,000 sqft facility equipped for every training style. We've been recognised as one of KL's best independent fitness studios two years running.
                </p>
                <p>
                  Everything we do is built around one idea: helping you build habits that stick. Whether you're starting out or chasing a new personal best, we're here to coach you every step of the way.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Mission / Vision / Values — Variant B: Dark Strip ── */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">What Drives Us</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-white" style={font}>Our Core Beliefs</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {mvv.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white/4 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:bg-white/7 transition-all">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500 rounded-t-3xl" />
                  <span className="inline-block text-xs font-bold text-amber-400 uppercase tracking-widest mb-5 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                    {item.label}
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-white" style={font}>{item.heading}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="mb-12">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">The People Behind the Magic</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={font}>Meet Our Team</h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative rounded-3xl overflow-hidden aspect-3/4 group">
                  <img
                    src={`https://images.unsplash.com/${member.photo}?auto=format&fit=crop&w=500&h=700&q=80`}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
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
