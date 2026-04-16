import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, MessageCircle } from 'lucide-react';

const font = { fontFamily: '"Lora", serif' };

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
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

const faqs = [
  { q: 'What is your return policy?',       a: 'Items in original condition with tags attached can be returned within 14 days of purchase for exchange or store credit. Sale items are final sale.' },
  { q: 'Do you offer custom sizing?',        a: 'Yes — all custom orders include 2 complimentary fitting sessions to ensure a perfect result. We accommodate all sizes and body types.' },
  { q: 'How long does a custom order take?', a: 'Typically 3–4 weeks from design confirmation and deposit payment. Rush orders (1–2 weeks) are available for an additional fee, subject to slot availability.' },
  { q: 'Do you sell gift cards?',            a: 'Yes — Velvet & Co gift cards are available in-store and online in denominations of RM 50, RM 100, RM 200, and RM 500. They never expire.' },
  { q: 'Is there a loyalty programme?',      a: 'Yes — our Velvet Circle programme rewards every purchase. Earn points, unlock early access to new arrivals, and receive exclusive member events. Ask in-store to enrol.' },
  { q: 'Do you ship internationally?',       a: 'We ship to Singapore, Indonesia, and Thailand currently. International orders are shipped via DHL Express, typically 3–5 business days. Duties are the buyer\'s responsibility.' },
];

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-neutral-100 rounded-xl overflow-hidden hover:border-violet-200 transition-colors">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between px-6 py-4 text-left text-neutral-800 font-medium hover:bg-neutral-50 transition-colors"
      >
        <span>{q}</span>
        <ChevronDown size={18} className={`text-violet-600 shrink-0 ml-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-6 pb-5 text-neutral-500 text-sm leading-relaxed border-t border-neutral-100 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function VelvetCoFaq() {
  return (
    <div style={font}>
      {/* Page header */}
      <section className="bg-neutral-50 border-b border-neutral-100 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-2">FAQ</p>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">Frequently Asked Questions</h1>
          </Reveal>
        </div>
      </section>

      {/* FAQ list */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <p className="text-neutral-500 mb-10">Everything you need to know before your visit. Can't find your answer? <Link to="/velvet-co/contact" className="text-violet-600 hover:underline">Get in touch.</Link></p>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <FaqItem q={item.q} a={item.a} defaultOpen={i === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <div className="w-14 h-14 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <MessageCircle size={26} />
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">Still Have Questions?</h2>
            <p className="text-neutral-500 mb-8">Our team is happy to help. Reach out and we'll get back to you within one business day.</p>
            <Link to="/velvet-co/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-md transition-colors">
              Contact Us <ChevronRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
