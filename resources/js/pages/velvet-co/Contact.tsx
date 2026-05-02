import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const font = { fontFamily: '"Playfair Display", serif' };

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

const contactDetails = [
  { icon: <MapPin size={18} />, label: 'Address',  value: 'G-12, Lot 10, Jalan Bukit Bintang, 55100 KL' },
  { icon: <Phone size={18} />,  label: 'Phone',    value: '+60 3-2145 6677' },
  { icon: <Mail size={18} />,   label: 'Email',    value: 'hello@velvetco.my' },
  { icon: <Clock size={18} />,  label: 'Hours',    value: 'Mon–Fri 10am–9pm · Sat 10am–10pm · Sun 11am–8pm' },
];

const services = ['Ready-to-Wear', 'Custom Order', 'Alteration', 'Accessories', 'Seasonal Collection', 'Personal Styling', 'Gift Wrapping'];

export default function VelvetCoContact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Page header */}
      <section className="bg-neutral-50 border-b border-neutral-100 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-2">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">Visit Us</h1>
          </Reveal>
        </div>
      </section>

      {/* Contact B — Centered form + 4 info cards below */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6">

          {/* Centered heading */}
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-violet-600 text-sm font-semibold uppercase tracking-widest mb-3">Find Us</p>
              <h2 className="text-4xl font-extrabold tracking-tight text-black">Contact &amp; Location</h2>
              <p className="text-neutral-500 text-sm mt-3 max-w-md mx-auto">Fill in the form and we'll get back to you within one business day.</p>
            </div>
          </Reveal>

          {/* Form card */}
          <Reveal delay={100}>
            <div className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-sm mb-8">
              {submitted ? (
                <div className="text-center py-10">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Message Sent!</h3>
                  <p className="text-neutral-500 text-sm">We'll get back to you within one business day.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Full Name</label>
                      <input type="text" placeholder="Your full name" className="w-full border-2 border-neutral-200 bg-neutral-50 focus:border-violet-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Phone</label>
                      <input type="tel" placeholder="+60 1X-XXX XXXX" className="w-full border-2 border-neutral-200 bg-neutral-50 focus:border-violet-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">I'm interested in</label>
                    <select defaultValue="" className="w-full border-2 border-neutral-200 bg-neutral-50 focus:border-violet-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all appearance-none">
                      <option value="" disabled>Select a service</option>
                      {services.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Message</label>
                    <textarea rows={3} placeholder="Tell us how we can help…" className="w-full border-2 border-neutral-200 bg-neutral-50 focus:border-violet-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-violet-600 hover:bg-violet-700 text-white py-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2">
                    Send Message <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* 4 info cards row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {contactDetails.map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="bg-white rounded-2xl border border-neutral-100 p-5 text-center">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mx-auto mb-3">{item.icon}</div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-1">{item.label}</p>
                  <p className="text-xs font-medium text-black leading-relaxed">{item.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
