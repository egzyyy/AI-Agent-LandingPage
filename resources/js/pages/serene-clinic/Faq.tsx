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

const font = { fontFamily: '"DM Sans", sans-serif' };

const faqItems = [
  { q: 'Do I need a referral to see a specialist?', a: 'No referral needed. Book directly with any specialist online or by phone — we make access as easy as possible.' },
  { q: 'Is my insurance accepted?', a: 'We accept most major insurance panels. Call ahead to confirm your plan before your visit.' },
  { q: 'How early should I arrive?', a: 'We recommend arriving 10 minutes early to complete registration and ensure your consultation starts on time.' },
  { q: 'Do you offer home visits?', a: 'For mobility-limited patients we can arrange home consultations — call us to enquire about availability and fees.' },
  { q: 'Are paediatric services available?', a: 'Yes — our doctors are experienced with patients of all ages, including infants, children, and teenagers.' },
  { q: 'What should I bring to my first visit?', a: 'A valid ID, your current medication list, and your insurance card if applicable. Arriving with any previous medical records is also helpful.' },
];

export default function SereneClinicFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── Page Header ── */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">Got Questions?</p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight" style={font}>Frequently Asked</h1>
          </Reveal>
        </div>
      </section>

      {/* ── Accordion ── */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-neutral-100 shadow-sm overflow-hidden">
            {faqItems.map((item, i) => (
              <div key={i} className="border-b border-neutral-100 last:border-b-0">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-8 py-6 flex justify-between items-center group"
                >
                  <span className="font-medium text-sm group-hover:text-sky-600 transition-colors pr-4">{item.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-neutral-300 group-hover:text-sky-400 transition-colors"
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">We're Here to Help</p>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4" style={font}>Still Have Questions?</h2>
            <p className="text-neutral-500 text-sm mb-8">Our team is happy to help — reach out and we'll respond within the hour.</p>
            <Link to="/serene-clinic/contact">
              <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-full font-semibold text-sm transition-all inline-flex items-center gap-2">
                Get in Touch <ArrowRight size={16} />
              </button>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
