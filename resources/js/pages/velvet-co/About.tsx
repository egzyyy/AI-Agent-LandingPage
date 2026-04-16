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

const font = { fontFamily: '"Lora", serif' };

const mvv = [
  { label: 'Mission', heading: 'Why We Exist', text: 'Help every customer discover their signature style.' },
  { label: 'Vision', heading: 'Where We Are Going', text: 'Fashion that is personal, sustainable, and joyful.' },
  { label: 'Values', heading: 'How We Work', text: 'Craftsmanship · Inclusivity · Originality' },
];

const team = [
  { name: 'Sofia Yusof', role: 'Creative Director', photo: 'photo-1531746020798-e6953c6e8e04' },
  { name: 'Rachel Teh', role: 'Stylist', photo: 'photo-1494790108377-be9c29b29330' },
  { name: 'Mei Ling', role: 'Seamstress', photo: 'photo-1438761681033-6461ffad8d80' },
  { name: 'Zara Hanif', role: 'Sales Lead', photo: 'photo-1534528741775-53994a69daeb' },
];

export default function VelvetCoAbout() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-violet-600 text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight" style={font}>
              Fashion With Purpose
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
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80"
                  alt="Velvet & Co store"
                  className="w-full h-140 object-cover rounded-3xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-violet-600 text-white p-6 rounded-2xl shadow-xl">
                  <p className="text-3xl font-black mb-0.5">8+</p>
                  <p className="text-xs text-violet-200 uppercase tracking-wider">Years of Excellence</p>
                </div>
              </div>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <p className="text-violet-600 text-sm font-semibold uppercase tracking-widest mb-4">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight" style={font}>
                Fashion With<br />Purpose
              </h2>
              <div className="space-y-5 text-neutral-600 leading-relaxed">
                <p>
                  Velvet &amp; Co opened in 2018 as a curated concept store in Bukit Bintang, founded by Sofia Yusof with a mission to make well-crafted fashion accessible to every woman. What started as a pop-up grew into a permanent boutique within six months.
                </p>
                <p>
                  Today, we carry over 2,000 pieces from 40+ independent designers across Asia, alongside our own custom-order label. We've expanded to five cities, always keeping craftsmanship and personal style at the centre.
                </p>
                <p>
                  We believe getting dressed should feel joyful — not overwhelming. Our stylists are here to help you find pieces that truly feel like you.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Mission / Vision / Values ── */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="mb-12">
            <p className="text-violet-600 text-sm font-semibold uppercase tracking-widest mb-3">What Drives Us</p>
            <h2 className="text-4xl font-extrabold tracking-tight" style={font}>Our Core Beliefs</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {mvv.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-10 border border-neutral-100 hover:border-violet-200 transition-all hover:shadow-lg">
                  <span className="inline-block text-xs font-bold text-violet-600 uppercase tracking-widest mb-4 bg-violet-50 px-3 py-1 rounded-full">
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="mb-12">
            <p className="text-violet-600 text-sm font-semibold uppercase tracking-widest mb-3">The People Behind the Magic</p>
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
