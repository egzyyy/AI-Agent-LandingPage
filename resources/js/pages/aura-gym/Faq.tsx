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

const font = { fontFamily: '"Outfit", sans-serif' };

const faqItems = [
  { q: 'Is there a joining fee?',          a: 'No joining fee for the first month — just your monthly membership. Cancel anytime with 30 days notice.' },
  { q: 'Can I freeze my membership?',       a: 'Members can freeze up to 2 months per year with 7 days notice. Freeze periods are unpaid.' },
  { q: 'Do you offer a free trial?',        a: 'Yes — first 3 days free for new members. No credit card required to start.' },
  { q: 'What equipment do you have?',       a: 'We have a full range of cardio, strength, and functional training equipment across 5,000 sqft. New machines added every quarter.' },
  { q: 'Are personal training sessions included?', a: 'Personal training is a separate paid service. Members receive a 10% discount on all PT packages.' },
  { q: 'Can I bring a guest?',              a: 'Members can bring one guest per month at RM 30 per visit (day pass rate). Guests must check in at reception.' },
];

export default function AuraGymFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      {/* ── Page Header ── */}
      <section className="py-20 bg-neutral-900 border-b border-white/6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Got Questions?</p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white" style={font}>Frequently Asked</h1>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ Dark Accordion (Variant C) ── */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className={`rounded-2xl border overflow-hidden transition-all ${
                open === i ? 'border-amber-500/40 bg-white/5' : 'border-white/10 bg-white/3'
              }`}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left px-7 py-5 flex justify-between items-center gap-4"
                >
                  <span className={`font-medium text-sm transition-colors ${open === i ? 'text-amber-400' : 'text-white/80'}`}>
                    {item.q}
                  </span>
                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`shrink-0 transition-colors ${open === i ? 'text-amber-400' : 'text-white/30'}`}
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-7 pb-5 text-sm text-white/50 leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-neutral-800 border-t border-white/6">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-2xl font-black text-white mb-3" style={font}>Still Have Questions?</h2>
            <p className="text-white/50 text-sm mb-8">Our team is happy to help. Reach out and we'll get back to you within one business day.</p>
            <Link to="/aura-gym/contact">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all inline-flex items-center gap-2">
                Contact Us <ArrowRight size={16} />
              </button>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
