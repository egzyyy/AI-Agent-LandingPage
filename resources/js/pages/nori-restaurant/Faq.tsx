import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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

export default function NoriRestaurantFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      q: 'Do you accept walk-ins?',
      a: 'Yes, though reservations are recommended for weekends and public holidays.',
    },
    {
      q: 'Is there a minimum spend?',
      a: 'No minimum for standard bookings. Private dining requires a deposit.',
    },
    {
      q: 'Do you cater for dietary needs?',
      a: 'Yes — vegetarian, vegan, gluten-free, and halal options available.',
    },
    {
      q: 'Is the menu halal?',
      a: 'Yes — our kitchen follows halal preparation and all meat suppliers are halal-certified.',
    },
    {
      q: 'Can we bring our own cake?',
      a: 'Yes — cakes and decorations are welcome. We can also arrange florals and setup.',
    },
    {
      q: 'Do you cater large events?',
      a: 'Yes, from 20 to 300 guests. Contact us for a custom catering quote.',
    },
  ];

  return (
    <>
      {/* ── Page Header ── */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">Got Questions?</p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight" style={font}>Frequently Asked</h1>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ Accordion ── */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-neutral-100 shadow-sm overflow-hidden">
            {faqItems.map((item, i) => (
              <div key={i} className="border-b border-neutral-100 last:border-b-0">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-8 py-6 flex justify-between items-center group"
                >
                  <span className="font-medium text-sm group-hover:text-amber-600 transition-colors pr-4">{item.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-neutral-300 group-hover:text-amber-400 transition-colors"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-8 pb-6 text-sm text-neutral-500 leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Still Have Questions? ── */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">Need More Help?</p>
            <h2 className="text-3xl font-extrabold tracking-tight mb-4" style={font}>Still Have Questions?</h2>
            <p className="text-neutral-500 text-sm mb-8">Our team is happy to help with reservations, dietary enquiries, or event planning.</p>
            <Link to="/nori-restaurant/contact">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold text-sm transition-all inline-flex items-center gap-2">
                Get in Touch <ArrowRight size={16} />
              </button>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
