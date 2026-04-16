import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Dumbbell, ArrowRight } from 'lucide-react';

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

const services = [
  { name: 'Monthly Membership', desc: 'Full facility access', price: 'RM 99' },
  { name: 'Personal Training (1hr)', desc: 'One-on-one coaching', price: 'RM 120' },
  { name: 'Group Class', desc: 'HIIT, yoga & more', price: 'RM 25' },
  { name: 'Day Pass', desc: 'Single day access', price: 'RM 30' },
  { name: 'Nutrition Plan', desc: 'Personalised meal plan', price: 'RM 200' },
  { name: 'Corporate Package', desc: 'Bulk team pricing', price: 'RM 79/pax' },
];

export default function AuraGymServices() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight" style={font}>Services &amp; Pricing</h1>
            <p className="text-neutral-500 mt-4 max-w-lg text-sm leading-relaxed">
              Transparent pricing, no hidden fees. Every service is delivered by a certified specialist.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Full Price List ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: intro + photo */}
            <Reveal direction="right">
              <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">Complete Menu</p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6" style={font}>
                Everything We Offer
              </h2>
              <p className="text-neutral-500 mb-8 leading-relaxed text-sm">
                Whether you're training solo, joining a group, or looking for expert nutrition guidance — we have a package built for your goals.
              </p>
              <img
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80"
                alt="Aura Gym services"
                className="w-full h-72 object-cover rounded-3xl"
              />
            </Reveal>

            {/* Right: service list */}
            <Reveal direction="left" delay={0.1}>
              <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-100 divide-y divide-neutral-100">
                {services.map((service, i) => (
                  <div key={i} className="flex items-center justify-between py-5 first:pt-0 last:pb-0">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                        <Dumbbell size={16} className="text-amber-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-black">{service.name}</p>
                        <p className="text-neutral-400 text-xs mt-0.5">{service.desc}</p>
                      </div>
                    </div>
                    <span className="font-bold text-black text-sm whitespace-nowrap">{service.price}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative py-32 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1800&q=80"
          alt="Start your transformation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative max-w-3xl mx-auto px-6 text-center text-white">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5" style={font}>
              Start Your Transformation Today
            </h2>
            <p className="text-white/70 mb-8 text-lg leading-relaxed">
              The hardest part is walking through the door. Let us take care of everything after that.
            </p>
            <Link to="/aura-gym/contact">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full font-semibold text-sm transition-all inline-flex items-center gap-2">
                Start Free Trial <ArrowRight size={16} />
              </button>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
