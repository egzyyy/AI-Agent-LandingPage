import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

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

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const font = { fontFamily: '"Lora", serif' };

const services = ['Ready-to-Wear', 'Custom Order', 'Alteration', 'Accessories', 'Seasonal Collection', 'Gift Wrapping'];

export default function VelvetCoContact() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-violet-600 text-sm font-semibold uppercase tracking-widest mb-3">Visit Us</p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight" style={font}>Get in Touch</h1>
          </Reveal>
        </div>
      </section>

      {/* ── Contact Info + Form ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <Reveal direction="right">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-10" style={font}>We'd Love to Meet You</h2>
              <div className="space-y-7">
                {[
                  { icon: <MapPin size={18} />, label: 'Address', value: 'G-12, Lot 10, Jalan Bukit Bintang, 55100 Kuala Lumpur' },
                  { icon: <Phone size={18} />, label: 'Phone', value: '+60 3-2145 6677' },
                  { icon: <Mail size={18} />, label: 'Email', value: 'hello@velvet-co.com.my' },
                  { icon: <Clock size={18} />, label: 'Hours', value: 'Mon–Fri 10am–9pm · Sat 10am–10pm · Sun 11am–8pm' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-violet-50 flex items-center justify-center shrink-0 text-violet-600">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 uppercase tracking-widest font-semibold mb-1">{item.label}</p>
                      <p className="text-sm font-medium text-black leading-relaxed">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-10 border-t border-neutral-100">
                <p className="text-xs text-neutral-400 uppercase tracking-widest font-semibold mb-4">Follow Us</p>
                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-full border border-neutral-200 hover:border-violet-400 flex items-center justify-center transition-all text-neutral-400 hover:text-violet-600">
                    <InstagramIcon size={16} />
                  </button>
                  <button className="w-10 h-10 rounded-full border border-neutral-200 hover:border-violet-400 flex items-center justify-center transition-all text-neutral-400 hover:text-violet-600">
                    <FacebookIcon size={16} />
                  </button>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <div className="bg-neutral-50 rounded-3xl p-8 md:p-10 border border-neutral-100">
                <h3 className="text-2xl font-bold mb-6" style={font}>Book a Styling Session</h3>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-widest mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-violet-400 focus:outline-none text-sm bg-white transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-widest mb-2">Phone</label>
                      <input
                        type="tel"
                        placeholder="+60 1X-XXX XXXX"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-violet-400 focus:outline-none text-sm bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-widest mb-2">Service</label>
                      <select
                        defaultValue=""
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-violet-400 focus:outline-none text-sm bg-white transition-colors text-neutral-600"
                      >
                        <option value="" disabled>Select service</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-widest mb-2">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us your style preferences or any special requests..."
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-violet-400 focus:outline-none text-sm bg-white transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-violet-600 hover:bg-violet-700 text-white py-4 rounded-xl font-semibold text-sm transition-all inline-flex items-center justify-center gap-2"
                  >
                    Send Message <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
