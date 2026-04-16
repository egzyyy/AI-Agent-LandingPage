import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

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

const services = [
  { name: 'Ready-to-Wear', desc: 'In-stock curated pieces', price: 'from RM 150' },
  { name: 'Custom Order', desc: 'Made-to-measure design', price: 'from RM 400' },
  { name: 'Alteration', desc: 'Tailoring & hemming', price: 'from RM 30' },
  { name: 'Accessories', desc: 'Bags, jewellery & more', price: 'from RM 50' },
  { name: 'Seasonal Collection', desc: 'New season arrivals', price: 'from RM 200' },
  { name: 'Gift Wrapping', desc: 'Luxury gift packaging', price: 'RM 15' },
];

export default function VelvetCoServices() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-violet-600 text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight" style={font}>Services &amp; Pricing</h1>
            <p className="text-neutral-500 mt-4 max-w-lg text-sm leading-relaxed">
              Transparent pricing, no hidden fees. Every piece is hand-selected or crafted by a specialist.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Full Price List ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal direction="right">
              <p className="text-violet-600 text-sm font-semibold uppercase tracking-widest mb-3">Complete Collection</p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6" style={font}>
                Everything We Offer
              </h2>
              <p className="text-neutral-500 mb-8 leading-relaxed text-sm">
                From everyday essentials to special occasion wear — our curated selection has something for every wardrobe and every woman.
              </p>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
                alt="Velvet & Co services"
                className="w-full h-72 object-cover rounded-3xl"
              />
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-100 divide-y divide-neutral-100">
                {services.map((service, i) => (
                  <div key={i} className="flex items-center justify-between py-5 first:pt-0 last:pb-0">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center shrink-0">
                        <ShoppingBag size={16} className="text-violet-600" />
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
          src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1800&q=80"
          alt="Velvet & Co"
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
