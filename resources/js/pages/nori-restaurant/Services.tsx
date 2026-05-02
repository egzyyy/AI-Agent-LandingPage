import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Utensils, ArrowRight } from 'lucide-react';

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

const steps = [
  {
    num: '01',
    title: 'Make a Reservation',
    desc: 'Book online or call us — walk-ins welcome based on availability.',
  },
  {
    num: '02',
    title: 'Arrive and Be Seated',
    desc: 'Our team greets you and walks you through the menu and today\'s specials.',
  },
  {
    num: '03',
    title: 'Enjoy Your Meal',
    desc: 'Sit back and let us take care of everything from starter to dessert.',
  },
];

const services = [
  { name: 'Set Lunch (2 courses)', desc: 'Soup, main & dessert', price: 'RM 35' },
  { name: 'Set Dinner (3 courses)', desc: '3-course fine dining', price: 'RM 75' },
  { name: 'Weekend Brunch', desc: 'Weekend special menu', price: 'RM 45' },
  { name: 'Private Dining (min 8 pax)', desc: 'Exclusive private room', price: 'RM 120pp' },
  { name: 'Catering Package', desc: 'Customised event menus', price: 'RM 80pp' },
  { name: "Chef's Tasting Menu", desc: '8-course chef selection', price: 'RM 180' },
];

export default function NoriRestaurantServices() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight" style={font}>Menu &amp; Pricing</h1>
            <p className="text-neutral-500 mt-4 max-w-lg text-sm leading-relaxed">
              Transparent pricing, no hidden fees. Every experience is crafted by our award-winning kitchen team.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">Simple Process</p>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4" style={font}>How It Works</h2>
            <p className="text-neutral-500 max-w-xl mx-auto text-sm leading-relaxed">
              From reservation to dessert — a seamless, guest-first experience at every step.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="rounded-3xl border border-neutral-100 bg-white p-8">
                  <span className="text-5xl font-black text-amber-600 opacity-20 block mb-4">{step.num}</span>
                  <h3 className="font-bold text-base mb-2" style={font}>{step.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services B — 3-column card grid ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">Full Menu</p>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4" style={font}>All Experiences</h2>
            <p className="text-neutral-500 max-w-xl mx-auto text-sm leading-relaxed">
              All consultations are conducted by our kitchen team. No hidden charges — what you see is what you pay.
            </p>
          </Reveal>
          <Reveal>
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80"
              alt="Nori Restaurant food"
              className="w-full h-56 object-cover rounded-2xl mb-16"
            />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-white rounded-3xl p-8 border border-neutral-100 hover:border-amber-200 hover:shadow-lg transition-all flex flex-col">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
                    <Utensils size={20} />
                  </div>
                  <h3 className="font-bold text-base mb-2" style={font}>{s.name}</h3>
                  <p className="text-neutral-500 text-sm mb-5 flex-1">{s.desc}</p>
                  <p className="text-amber-600 font-extrabold text-2xl mb-5">{s.price}</p>
                  <Link to="/nori-restaurant/contact">
                    <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl text-sm font-semibold transition-all">
                      Reserve a Table
                    </button>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative py-28 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828a9b6?auto=format&fit=crop&w=1800&q=80"
          alt="Nori Restaurant"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative max-w-3xl mx-auto px-6 text-center text-white">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5" style={font}>
              Reserve Your Table Tonight
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Secure your spot and let us take care of the rest.
            </p>
            <Link to="/nori-restaurant/contact">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-5 rounded-full text-base font-semibold transition-all inline-flex items-center gap-2">
                Reserve a Table <ArrowRight size={18} />
              </button>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
