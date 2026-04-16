import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

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

const faqItems = [
  {
    q: 'What is your return policy?',
    a: 'Items in original condition with tags can be returned within 14 days for exchange or store credit.',
  },
  {
    q: 'Do you offer custom sizing?',
    a: 'Yes, all custom orders include 2 complimentary fitting sessions.',
  },
  {
    q: 'How long does a custom order take?',
    a: 'Typically 3–4 weeks from design confirmation and deposit.',
  },
];

export default function VelvetCoFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── Page Header ── */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-violet-600 text-sm font-semibold uppercase tracking-widest mb-3">Got Questions?</p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight" style={font}>Frequently Asked</h1>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ Accordion ── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <div className="bg-white rounded-3xl border border-neutral-100 overflow-hidden divide-y divide-neutral-100">
              {faqItems.map((item, i) => (
                <div key={i}>
                  <button
                    className="w-full flex items-center justify-between px-8 py-6 text-left hover:bg-neutral-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-semibold text-sm text-black pr-8">{item.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-neutral-400 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-8 pb-6 text-neutral-500 text-sm leading-relaxed">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
