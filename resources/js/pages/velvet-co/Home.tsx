import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Scissors, Sparkles, ChevronRight, Star } from 'lucide-react';

const font = { fontFamily: '"Playfair Display", serif' };

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      {children}
    </div>
  );
}

const stats = [
  { value: '2,000+', label: 'Items' },
  { value: '40+',    label: 'Designers' },
  { value: '5',      label: 'Cities' },
  { value: '8',      label: 'Years Open' },
];

const services = [
  { name: 'Ready-to-Wear',      price: 'from RM 150', desc: 'In-stock curated pieces' },
  { name: 'Custom Order',       price: 'from RM 400', desc: 'Made-to-measure design' },
  { name: 'Alteration',         price: 'from RM 30',  desc: 'Tailoring & hemming' },
  { name: 'Accessories',        price: 'from RM 50',  desc: 'Bags, jewellery & more' },
  { name: 'Seasonal Collection',price: 'from RM 200', desc: 'New season arrivals' },
  { name: 'Gift Wrapping',      price: 'RM 15',       desc: 'Luxury gift packaging' },
];

const features = [
  { Icon: ShoppingBag, heading: 'Curated Selection',  desc: 'Every piece is hand-picked by our in-house stylists from 40+ independent designers.' },
  { Icon: Scissors,    heading: 'Tailoring Included', desc: 'Complimentary alterations on all custom orders for the perfect fit.' },
  { Icon: Sparkles,    heading: 'Personal Styling',   desc: 'One-on-one sessions to build a wardrobe you\'ll love wearing every day.' },
];

const testimonials = [
  { quote: 'I came in for one outfit and left with a whole new wardrobe. The stylists have incredible taste and really understand what works for you.', author: 'Liyana Ismail', role: 'Regular Shopper' },
  { quote: 'My custom order was delivered exactly as I imagined it. The fit was perfect and the fabric quality is outstanding.', author: 'Rachel Yap', role: 'Custom Order' },
  { quote: "Finally a boutique that carries pieces you won't see everywhere else. I always find something unique and beautifully made.", author: 'Amirah Hassan', role: 'Regular Client' },
];

export default function VelvetCoHome() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-neutral-50">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1600&q=80"
            alt="Velvet & Co boutique"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600 text-white text-xs font-medium rounded-full mb-6">
              👗 Est. 2018 · Bukit Bintang, KL
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-neutral-900 mb-4">
              Style That<br />
              <span className="text-violet-600">Speaks for You.</span>
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8 max-w-md">
              Curated fashion for every occasion, from ready-to-wear to custom pieces. Visit us and discover your next favourite outfit.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                to="/velvet-co/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-md transition-colors"
              >
                Shop Now <ChevronRight size={16} />
              </Link>
              <Link
                to="/velvet-co/services"
                className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 hover:border-violet-400 text-neutral-700 font-medium rounded-md transition-colors"
              >
                View Collections
              </Link>
            </div>
            <div className="mt-8 inline-flex items-center gap-2 bg-white border border-neutral-200 rounded-full px-4 py-2 text-sm text-neutral-600 shadow-sm">
              <Star size={14} className="text-violet-500 fill-violet-500" />
              <span className="font-medium text-neutral-800">2,000+ Items</span>
              <span className="text-neutral-400">from 40+ designers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <p className="text-3xl font-bold">{s.value}</p>
              <p className="text-sm text-neutral-400 mt-1">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-2">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 max-w-xl">Fashion That's Personal, Every Time</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="p-6 rounded-xl border border-neutral-100 hover:border-violet-200 transition-colors group">
                  <div className="w-12 h-12 bg-violet-50 text-violet-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-violet-100 transition-colors">
                    <f.Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{f.heading}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-2">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">Our Services</h2>
            <p className="text-neutral-500 mb-10 max-w-lg">From everyday essentials to custom made-to-measure pieces, we have something for every style and every occasion.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-white rounded-xl p-6 border border-neutral-100 hover:border-violet-200 hover:shadow-sm transition-all">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-neutral-900">{s.name}</h3>
                    <span className="text-sm font-medium text-violet-600 ml-2 shrink-0">{s.price}</span>
                  </div>
                  <p className="text-sm text-neutral-500">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-10 text-center">
              <Link to="/velvet-co/services" className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-md transition-colors">
                View Full Price List <ChevronRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-2">Client Love</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-10">What Our Clients Say</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-100">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-violet-500 fill-violet-500" />)}
                  </div>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-4">"{t.quote}"</p>
                  <div>
                    <p className="font-semibold text-neutral-800 text-sm">{t.author}</p>
                    <p className="text-xs text-neutral-400">{t.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-violet-600">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Signature Style</h2>
            <p className="text-violet-100 mb-8">Our stylists are ready to help you build a wardrobe you'll love wearing every day.</p>
            <Link
              to="/velvet-co/contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white text-violet-600 font-semibold rounded-md hover:bg-violet-50 transition-colors"
            >
              Shop Now <ChevronRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
