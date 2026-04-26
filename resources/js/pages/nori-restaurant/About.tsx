import { motion } from 'motion/react';
import { Star } from 'lucide-react';

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

const font = { fontFamily: '"Playfair Display", serif' };

const milestones = [
  { year: '2012', desc: 'Opened our first dining room at KLCC.' },
  { year: '2016', desc: 'Expanded to three locations across the Klang Valley.' },
  { year: '2021', desc: 'Launched private dining, catering, and a chef\'s tasting menu.' },
];

const mvv = [
  {
    label: 'Mission',
    heading: 'Honest, Seasonal Food',
    text: 'Create memorable dining experiences with honest, seasonal food.',
  },
  {
    label: 'Vision',
    heading: 'A Table for Everyone',
    text: 'A table for everyone — no pretension, just great cooking.',
  },
  {
    label: 'Values',
    heading: 'Quality · Hospitality · Sustainability',
    text: 'Three pillars that guide every menu, every service, every decision.',
  },
];

const team = [
  { name: 'Chef Marco', role: 'Executive Chef', photo: 'photo-1531746020798-e6953c6e8e04' },
  { name: 'Aisha Karim', role: 'Sous Chef', photo: 'photo-1494790108377-be9c29b29330' },
  { name: 'James Loh', role: 'Floor Manager', photo: 'photo-1438761681033-6461ffad8d80' },
  { name: 'Nina Patel', role: 'Pastry Chef', photo: 'photo-1534528741775-53994a69daeb' },
];

export default function NoriRestaurantAbout() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight" style={font}>
              Cooking<br />With Intention
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── About B — Full-width banner image + 3-column text ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80"
              alt="Nori Restaurant dining room"
              className="w-full h-80 md:h-[480px] object-cover rounded-3xl mb-16"
            />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-12">
            <Reveal>
              <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="text-4xl font-extrabold tracking-tight" style={font}>Cooking With Intention</h2>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-2 space-y-5">
              <p className="text-neutral-600 leading-relaxed">
                Nori Restaurant opened in 2012 with a simple belief: great food should be honest, seasonal, and shared. Our founding chef Marco spent years training in France and Italy before returning to KL with a vision for modern Malaysian-inspired cuisine.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Over a decade later, we've grown to three locations across the Klang Valley, each maintaining the same commitment to fresh ingredients and warm hospitality that defined our first dining room.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                We believe a meal is more than what's on the plate — it's the conversation, the atmosphere, and the memory you take home. Every service, we cook with that in mind.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Milestones ── */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">Our Journey</p>
            <h2 className="text-4xl font-extrabold tracking-tight" style={font}>How We Got Here</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {milestones.map((m, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="rounded-3xl border border-neutral-100 bg-white p-8">
                  <p className="text-5xl font-black text-amber-600 mb-2">{m.year}</p>
                  <p className="text-neutral-500 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission / Vision / Values — Variant C: Numbered Rows ── */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="mb-12">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">What Drives Us</p>
            <h2 className="text-4xl font-extrabold tracking-tight" style={font}>Our Core Beliefs</h2>
          </Reveal>
          <div className="space-y-5">
            {mvv.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl border border-neutral-100 hover:border-amber-200 hover:shadow-md transition-all p-8 flex items-start gap-8">
                  <span className="text-6xl font-black text-amber-100 group-hover:text-amber-200 transition-colors leading-none shrink-0 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 pt-1">
                    <span className="inline-block text-xs font-bold text-amber-600 uppercase tracking-widest mb-3 bg-amber-50 px-3 py-1 rounded-full">
                      {item.label}
                    </span>
                    <h3 className="text-xl font-bold mb-2" style={font}>{item.heading}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed max-w-2xl">{item.text}</p>
                  </div>
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
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">The People Behind the Food</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={font}>Meet Our Team</h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer">
                  <img
                    src={`https://images.unsplash.com/${member.photo}?auto=format&fit=crop&w=500&h=700&q=80`}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
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
