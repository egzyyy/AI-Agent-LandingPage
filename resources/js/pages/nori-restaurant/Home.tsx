import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Star, Leaf, UtensilsCrossed, Wine, Utensils } from 'lucide-react';

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

const stats = [
  { value: '300+', label: 'Covers / Day' },
  { value: '80', label: 'Menu Items' },
  { value: '3', label: 'Locations' },
  { value: '12', label: 'Years Open' },
];

const features = [
  {
    icon: <Leaf size={20} />,
    heading: 'Farm to Table',
    desc: 'Ingredients sourced fresh daily from local farms and trusted suppliers.',
  },
  {
    icon: <UtensilsCrossed size={20} />,
    heading: 'Award-Winning Chefs',
    desc: 'Our kitchen is led by chefs trained across France, Italy, and Japan.',
  },
  {
    icon: <Wine size={20} />,
    heading: 'Curated Drinks',
    desc: 'Hand-selected wines and craft cocktails to complement every dish.',
  },
];

const previewServices = [
  { name: 'Set Lunch (2 courses)', desc: 'Soup, main & dessert', price: 'RM 35' },
  { name: 'Set Dinner (3 courses)', desc: '3-course fine dining', price: 'RM 75' },
  { name: 'Weekend Brunch', desc: 'Weekend special menu', price: 'RM 45' },
];

const testimonials = [
  {
    quote: 'We celebrated our anniversary here and it was perfect. The tasting menu is exceptional.',
    name: 'James Ooi',
    role: 'Anniversary Dinner',
    photo: 'photo-1580489944761-15a19d654956',
  },
  {
    quote: 'The best set lunch in the city, hands down. Fresh, beautifully plated, always warm service.',
    name: 'Fatimah Zahra',
    role: 'Regular Guest',
    photo: 'photo-1438761681033-6461ffad8d80',
  },
  {
    quote: 'We booked the private dining room for a corporate dinner and it exceeded all expectations.',
    name: 'David Tan',
    role: 'Corporate Event',
    photo: 'photo-1534528741775-53994a69daeb',
  },
];

export default function NoriRestaurantHome() {
  return (
    <>
      {/* ── Hero A — Cinematic ── */}
      <section className="relative min-h-[calc(100vh-72px)] flex items-end pb-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=80"
          alt="Nori Restaurant dining room"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <Reveal>
            <span className="inline-block bg-amber-600 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              🍽️ Est. 2012 · KLCC, KL
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none mb-6" style={font}>
              Great Food,<br />
              <em className="text-amber-400 not-italic">Every Time.</em>
            </h1>
            <p className="text-white/70 text-lg max-w-xl mb-10 leading-relaxed">
              Fresh ingredients, bold flavours, and a dining experience you'll want to relive. Book your table and let us take care of the rest.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/nori-restaurant/contact">
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2 text-sm">
                  Reserve a Table <ArrowRight size={16} />
                </button>
              </Link>
              <Link to="/nori-restaurant/services">
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-medium transition-all text-sm">
                  View Menu
                </button>
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 right-8 hidden md:block">
          <div className="bg-white rounded-2xl shadow-lg px-5 py-4 flex items-center gap-3">
            <div className="flex -space-x-2">
              {['photo-1438761681033-6461ffad8d80', 'photo-1534528741775-53994a69daeb', 'photo-1494790108377-be9c29b29330'].map((id, i) => (
                <img key={i} src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=40&h=40&q=80`}
                  className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="guest" />
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={11} className="fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-xs font-semibold text-black">300+ Daily Covers</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-800">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.08} className="text-center px-8 py-4">
              <p className="text-4xl md:text-5xl font-black mb-2">{stat.value}</p>
              <p className="text-neutral-500 text-xs uppercase tracking-widest">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">Why Nori</p>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4" style={font}>Why Choose Nori Restaurant</h2>
            <p className="text-neutral-500 max-w-xl mx-auto text-sm leading-relaxed">
              Every detail — from the sourcing to the plating — is crafted to give you a meal you'll remember.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="rounded-3xl border border-neutral-100 hover:border-amber-200 hover:shadow-md transition-all p-8">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
                    {f.icon}
                  </div>
                  <h3 className="font-bold text-base mb-2" style={font}>{f.heading}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4" style={font}>Our Menu</h2>
            <p className="text-neutral-500 max-w-xl mx-auto text-sm">Transparent pricing, no hidden fees.</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {previewServices.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-8 border border-neutral-100 hover:border-amber-200 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
                    <Utensils size={20} />
                  </div>
                  <h3 className="font-bold text-base mb-1" style={font}>{s.name}</h3>
                  <p className="text-neutral-500 text-sm mb-4">{s.desc}</p>
                  <p className="text-amber-600 font-extrabold text-xl">{s.price}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center">
            <Link to="/nori-restaurant/services">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold text-sm transition-all inline-flex items-center gap-2">
                View Full Menu <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">Guest Stories</p>
            <h2 className="text-4xl font-extrabold tracking-tight" style={font}>What Our Guests Say</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
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
