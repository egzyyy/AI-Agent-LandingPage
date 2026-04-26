import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MessageCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const font = { fontFamily: '"Playfair Display", serif' };

const faqs = [
  { q: 'What is your return policy?',       a: 'Items in original condition with tags attached can be returned within 14 days of purchase for exchange or store credit. Sale items are final sale.' },
  { q: 'Do you offer custom sizing?',        a: 'Yes — all custom orders include 2 complimentary fitting sessions to ensure a perfect result. We accommodate all sizes and body types.' },
  { q: 'How long does a custom order take?', a: 'Typically 3–4 weeks from design confirmation and deposit payment. Rush orders (1–2 weeks) are available for an additional fee, subject to slot availability.' },
  { q: 'Do you sell gift cards?',            a: 'Yes — Velvet & Co gift cards are available in-store and online in denominations of RM 50, RM 100, RM 200, and RM 500. They never expire.' },
  { q: 'Is there a loyalty programme?',      a: 'Yes — our Velvet Circle programme rewards every purchase. Earn points, unlock early access to new arrivals, and receive exclusive member events. Ask in-store to enrol.' },
  { q: 'Do you ship internationally?',       a: 'We ship to Singapore, Indonesia, and Thailand currently. International orders are shipped via DHL Express, typically 3–5 business days. Duties are the buyer\'s responsibility.' },
];

export default function VelvetCoFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      {/* Page header */}
      <section className="bg-neutral-50 border-b border-neutral-100 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-2">FAQ</p>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">Frequently Asked Questions</h1>
        </div>
      </section>

      {/* FAQ B — Two-column split */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-start">

          {/* Left: question list */}
          <div className="space-y-2">
            {faqs.map((item, i) => (
              <button
                key={i}
                onClick={() => setOpen(open === i ? null : i)}
                className={`w-full text-left px-6 py-4 rounded-2xl border transition-all flex justify-between items-center gap-4 ${
                  open === i
                    ? 'border-violet-200 bg-violet-50 text-violet-700'
                    : 'border-neutral-100 bg-neutral-50 hover:border-neutral-200 text-neutral-700'
                }`}
              >
                <span className="font-medium text-sm">{item.q}</span>
                <ChevronRight size={16} className={`shrink-0 transition-transform ${open === i ? 'rotate-90' : ''}`} />
              </button>
            ))}
          </div>

          {/* Right: sticky answer panel */}
          <div className="lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              {open !== null ? (
                <motion.div
                  key={open}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="bg-neutral-50 rounded-3xl border border-neutral-100 p-8"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-5">
                    <MessageCircle size={18} />
                  </div>
                  <h3 className="font-bold text-base mb-3">{faqs[open]?.q}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{faqs[open]?.a}</p>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-neutral-50 rounded-3xl border border-dashed border-neutral-200 p-8 flex items-center justify-center min-h-50"
                >
                  <p className="text-neutral-400 text-sm">Select a question to see the answer.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-3">Still Have Questions?</h2>
          <p className="text-neutral-500 mb-8 text-sm">Our team is happy to help. Reach out and we'll get back to you within one business day.</p>
          <Link to="/velvet-co/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-full transition-colors text-sm">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
