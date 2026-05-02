import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

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

const services = [
  { name: 'Ready-to-Wear',       price: 'from RM 150', desc: 'In-stock curated pieces', detail: 'Browse our ever-changing selection of ready-to-wear clothing from 40+ Asian designers. New arrivals weekly.' },
  { name: 'Custom Order',        price: 'from RM 400', desc: 'Made-to-measure design',  detail: 'Work one-on-one with our designers to create a piece made exactly for you, in your fabric and your fit.' },
  { name: 'Alteration',          price: 'from RM 30',  desc: 'Tailoring & hemming',     detail: 'Our in-house seamstress handles everything from simple hems to structural alterations. Turnaround in 5–7 days.' },
  { name: 'Accessories',         price: 'from RM 50',  desc: 'Bags, jewellery & more',  detail: 'Complete any look with our curated selection of handbags, statement jewellery, scarves, and accessories.' },
  { name: 'Seasonal Collection', price: 'from RM 200', desc: 'New season arrivals',     detail: 'Be the first to access our exclusive seasonal drops. Limited quantities per design.' },
  { name: 'Gift Wrapping',       price: 'RM 15',       desc: 'Luxury gift packaging',   detail: 'Beautifully packaged in our signature box with ribbon and a personalised card for any occasion.' },
];

const steps = [
  { num: '01', title: 'Walk In or Book', desc: 'Visit us in-store anytime, or book a private styling session online for a more focused experience.' },
  { num: '02', title: 'Discover Your Style', desc: 'Our stylists guide you through our curation, understanding your taste, lifestyle, and occasion needs.' },
  { num: '03', title: 'Leave Dressed Perfectly', desc: 'Walk away with pieces you love — ready-to-wear or placed on custom order — with alterations arranged.' },
];

export default function VelvetCoServices() {
  return (
    <>
      {/* Page header */}
      <section className="bg-neutral-50 border-b border-neutral-100 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-2">What We Offer</p>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">Services &amp; Pricing</h1>
          </Reveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-2">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12">Your Experience at Velvet &amp; Co</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="p-6 border border-neutral-100 rounded-xl hover:border-violet-200 transition-colors">
                  <p className="text-4xl font-bold text-violet-100 mb-3 leading-none">{step.num}</p>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services image strip */}
      <section className="py-4 bg-neutral-50 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80"
          alt="Velvet & Co collection"
          className="w-full h-56 object-cover"
        />
      </section>

      {/* Full price list */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-2">Full Price List</p>
            <h2 className="text-3xl font-bold text-neutral-900 mb-10">Everything We Offer</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="p-6 bg-neutral-50 rounded-xl border border-neutral-100 hover:border-violet-200 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-neutral-900">{s.name}</h3>
                    <span className="text-sm font-semibold text-violet-600 ml-4 shrink-0">{s.price}</span>
                  </div>
                  <p className="text-xs text-violet-600 uppercase tracking-wide font-medium mb-2">{s.desc}</p>
                  <p className="text-sm text-neutral-500 leading-relaxed">{s.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-violet-600">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <Reveal>
            <h2 className="text-3xl font-bold mb-4">Find Your Signature Style</h2>
            <p className="text-violet-100 mb-8">Our stylists are ready to help you build a wardrobe you'll love wearing every day.</p>
            <Link to="/velvet-co/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-white text-violet-600 font-semibold rounded-md hover:bg-violet-50 transition-colors">
              Shop Now <ChevronRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
