import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Star, ShoppingBag } from 'lucide-react';

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

const stats = [
  { value: '2,000+', label: 'Items' },
  { value: '40+', label: 'Designers' },
  { value: '5', label: 'Cities' },
  { value: '8', label: 'Years Open' },
];

const servicesPreview = [
  { name: 'Ready-to-Wear', desc: 'In-stock curated pieces', price: 'from RM 150' },
  { name: 'Custom Order', desc: 'Made-to-measure design', price: 'from RM 400' },
  { name: 'Alteration', desc: 'Tailoring & hemming', price: 'from RM 30' },
];

const testimonials = [
  {
    quote: "I came in for one outfit and left with a whole new wardrobe. The stylists have incredible taste.",
    name: 'Liyana Ismail',
    role: 'Regular Shopper',
    avatar: 'photo-1580489944761-15a19d654956',
  },
  {
    quote: "My custom order was delivered exactly as I imagined it. The fit was perfect.",
    name: 'Rachel Yap',
    role: 'Custom Order',
    avatar: 'photo-1438761681033-6461ffad8d80',
  },
  {
    quote: "Finally a boutique that carries pieces you won't see everywhere else.",
    name: 'Amirah Hassan',
    role: 'Regular Client',
    avatar: 'photo-1534528741775-53994a69daeb',
  },
];

export default function VelvetCoHome() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[calc(100vh-72px)] flex items-end pb-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1800&q=80"
          alt="Velvet & Co boutique"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <Reveal>
            <span className="inline-block bg-violet-600 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              👗 Est. 2018 · Bukit Bintang, KL
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none mb-6" style={font}>
              Style That<br />
              <em className="text-violet-400 not-italic">Speaks for You.</em>
            </h1>
            <p className="text-white/70 text-lg max-w-xl mb-10 leading-relaxed">
              Curated fashion for every occasion, from ready-to-wear to custom pieces. Visit us and discover your next favourite outfit.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/velvet-co/contact">
                <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-full font-semibold text-sm transition-all inline-flex items-center gap-2">
                  Shop Now <ArrowRight size={16} />
                </button>
              </Link>
              <Link to="/velvet-co/services">
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-sm transition-all">
                  View Services
                </button>
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="hidden md:block absolute bottom-8 right-8">
          <div className="bg-white rounded-2xl shadow-lg px-5 py-4 flex items-center gap-3">
            <div className="flex -space-x-2">
              {['photo-1438761681033-6461ffad8d80', 'photo-1534528741775-53994a69daeb', 'photo-1494790108377-be9c29b29330'].map((id, i) => (
                <img key={i} src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=40&h=40&q=80`}
                  className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="" />
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={11} className="fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-xs font-semibold text-black">2,000+ Items</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-800">
            {stats.map((stat, i) => (
              <Reveal key={i} delay={i * 0.08} className="text-center px-8 py-10">
                <p className="text-4xl md:text-5xl font-black mb-2 text-white">{stat.value}</p>
                <p className="text-neutral-500 text-xs uppercase tracking-widest">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-violet-600 text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4" style={font}>Our Services</h2>
            <p className="text-neutral-500 max-w-xl mx-auto text-sm">Transparent pricing, no hidden fees.</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {servicesPreview.map((service, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-8 border border-neutral-100 hover:border-violet-200 hover:shadow-md transition-all h-full flex flex-col">
                  <div className="w-12 h-12 rounded-2xl bg-violet-50 flex items-center justify-center mb-5">
                    <ShoppingBag size={20} className="text-violet-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={font}>{service.name}</h3>
                  <p className="text-neutral-500 text-sm flex-1">{service.desc}</p>
                  <p className="text-violet-600 font-extrabold text-xl mt-4">{service.price}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center">
            <Link to="/velvet-co/services">
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-full font-semibold text-sm transition-all inline-flex items-center gap-2">
                View All Services <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-violet-600 text-sm font-semibold uppercase tracking-widest mb-3">Client Stories</p>
            <h2 className="text-4xl font-extrabold tracking-tight" style={font}>What Our Clients Say</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-100 h-full flex flex-col">
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, j) => <Star key={j} size={13} className="text-amber-400 fill-amber-400" />)}
                  </div>
                  <p className="text-neutral-700 text-sm leading-relaxed flex-1 mb-6 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <img src={`https://images.unsplash.com/${t.avatar}?auto=format&fit=crop&w=80&h=80&q=80`}
                      className="w-10 h-10 rounded-full object-cover" alt={t.name} />
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
      <section className="relative py-32 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1800&q=80"
          alt="Velvet & Co collection"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative max-w-3xl mx-auto px-6 text-center text-white">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5" style={font}>
              Find Your Signature Style
            </h2>
            <p className="text-white/70 mb-8 text-lg leading-relaxed">
              Our stylists are ready to help you build a wardrobe you'll love.
            </p>
            <Link to="/velvet-co/contact">
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-10 py-4 rounded-full font-semibold text-sm transition-all inline-flex items-center gap-2">
                Shop Now <ArrowRight size={16} />
              </button>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
