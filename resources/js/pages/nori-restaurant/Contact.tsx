import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ArrowRight, Leaf, UtensilsCrossed, Wine } from 'lucide-react';

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

const font = { fontFamily: '"Playfair Display", serif' };

const features = [
  {
    icon: <Leaf size={18} />,
    heading: 'Farm to Table',
    desc: 'Ingredients sourced fresh daily from local farms and trusted suppliers.',
  },
  {
    icon: <UtensilsCrossed size={18} />,
    heading: 'Award-Winning Chefs',
    desc: 'Our kitchen is led by chefs trained across France, Italy, and Japan.',
  },
  {
    icon: <Wine size={18} />,
    heading: 'Curated Drinks',
    desc: 'Hand-selected wines and craft cocktails to complement every dish.',
  },
];

export default function NoriRestaurantContact() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">Visit Us</p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight" style={font}>Get in Touch</h1>
          </Reveal>
        </div>
      </section>

      {/* ── At a Glance ── */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-neutral-100 p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-1">{f.heading}</p>
                    <p className="text-neutral-500 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Info + Form ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">

          <Reveal direction="right">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">Find Us</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-10" style={font}>Contact &amp; Location</h2>
            <div className="space-y-7">
              {[
                { icon: <MapPin size={18} />, label: 'Address', value: 'Level 2, Suria KLCC, Jalan Ampang, 50088 Kuala Lumpur' },
                { icon: <Phone size={18} />, label: 'Phone', value: '+60 3-2382 9110' },
                { icon: <Mail size={18} />, label: 'Email', value: 'hello@nori-restaurant.com.my' },
                { icon: <Clock size={18} />, label: 'Hours', value: 'Mon–Fri 11am–10pm · Sat 10am–11pm · Sun 10am–9pm' },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="w-11 h-11 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0 text-amber-600">
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
                <button className="w-10 h-10 rounded-full bg-amber-50 hover:bg-amber-100 flex items-center justify-center text-amber-600 transition-colors">
                  <InstagramIcon size={16} />
                </button>
                <button className="w-10 h-10 rounded-full bg-amber-50 hover:bg-amber-100 flex items-center justify-center text-amber-600 transition-colors">
                  <FacebookIcon size={16} />
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.15}>
            <div className="bg-neutral-50 rounded-3xl p-8 md:p-10 border border-neutral-100">
              <h3 className="text-2xl font-bold mb-6" style={font}>Make a Reservation</h3>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Full Name</label>
                  <input type="text" placeholder="Your full name"
                    className="w-full border-2 border-neutral-200 bg-white focus:border-amber-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Phone</label>
                    <input type="tel" placeholder="+60 12-XXX XXXX"
                      className="w-full border-2 border-neutral-200 bg-white focus:border-amber-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Experience</label>
                    <select defaultValue=""
                      className="w-full border-2 border-neutral-200 bg-white focus:border-amber-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all appearance-none">
                      <option value="" disabled>Select experience</option>
                      <option>Set Lunch (2 courses)</option>
                      <option>Set Dinner (3 courses)</option>
                      <option>Weekend Brunch</option>
                      <option>Private Dining (min 8 pax)</option>
                      <option>Catering Package</option>
                      <option>Chef's Tasting Menu</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Message</label>
                  <textarea rows={3} placeholder="Preferred date, party size, or any special requests..."
                    className="w-full border-2 border-neutral-200 bg-white focus:border-amber-400 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all resize-none" />
                </div>
                <button type="button"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2">
                  Send Enquiry <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </Reveal>

        </div>
      </section>
    </>
  );
}
