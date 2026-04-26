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

const font = { fontFamily: '"Outfit", sans-serif' };

const contactDetails = [
  { icon: <MapPin size={18} />, label: 'Address', value: '23, Jalan Kiara 5, Mont Kiara, 50480 KL' },
  { icon: <Phone size={18} />, label: 'Phone', value: '+60 3-6211 4488' },
  { icon: <Mail size={18} />, label: 'Email', value: 'hello@aura-gym.com.my' },
  { icon: <Clock size={18} />, label: 'Hours', value: 'Mon–Fri 6am–10pm · Sat 7am–9pm · Sun 8am–6pm' },
];

const services = [
  'Monthly Membership',
  'Personal Training',
  'Group Class',
  'Day Pass',
  'Nutrition Plan',
  'Corporate Package',
];

export default function AuraGymContact() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="py-20 bg-neutral-900 border-b border-white/6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Visit Us</p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white" style={font}>Get in Touch</h1>
          </Reveal>
        </div>
      </section>

      {/* ── Contact C — Dark Full-Width ── */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">

          {/* Left: 2×2 info cards + social */}
          <Reveal direction="right">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Find Us</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-white mb-10" style={font}>Contact &amp; Location</h2>
            <div className="grid grid-cols-2 gap-4">
              {contactDetails.map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                    {item.icon}
                  </div>
                  <p className="text-xs text-white/40 uppercase tracking-wider font-semibold mb-1">{item.label}</p>
                  <p className="text-xs font-medium text-white/80 leading-relaxed">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-amber-500/20 hover:border-amber-500/30 flex items-center justify-center text-white/50 hover:text-amber-400 transition-all">
                <InstagramIcon size={16} />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-amber-500/20 hover:border-amber-500/30 flex items-center justify-center text-white/50 hover:text-amber-400 transition-all">
                <FacebookIcon size={16} />
              </button>
            </div>
          </Reveal>

          {/* Right: dark form */}
          <Reveal direction="left" delay={0.1}>
            <div className="bg-white/4 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6" style={font}>Start Your Free Trial</h3>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border-2 border-white/10 bg-white/5 text-white placeholder-white/20 focus:border-amber-500 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Phone</label>
                    <input
                      type="tel"
                      placeholder="+60 1X-XXX XXXX"
                      className="w-full border-2 border-white/10 bg-white/5 text-white placeholder-white/20 focus:border-amber-500 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Service</label>
                    <select
                      defaultValue=""
                      className="w-full border-2 border-white/10 bg-neutral-800 text-white focus:border-amber-500 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all appearance-none"
                    >
                      <option value="" disabled>Select service</option>
                      {services.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Fitness Goals</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us your fitness goals..."
                    className="w-full border-2 border-white/10 bg-white/5 text-white placeholder-white/20 focus:border-amber-500 focus:ring-0 outline-none rounded-xl px-5 py-3.5 text-sm transition-all resize-none"
                  />
                </div>
                <button
                  type="button"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2"
                >
                  Send Message <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
