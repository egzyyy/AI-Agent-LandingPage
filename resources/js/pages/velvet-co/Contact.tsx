import { useRef, useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, ShoppingBag, Scissors, Sparkles } from 'lucide-react';

const font = { fontFamily: '"Playfair Display", serif' };

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

const glance = [
  { Icon: ShoppingBag, heading: 'Curated Selection',  desc: '2,000+ pieces from 40+ independent Asian designers.' },
  { Icon: Scissors,    heading: 'In-House Tailoring', desc: 'Alterations and custom orders handled on-site.' },
  { Icon: Sparkles,    heading: 'Personal Styling',   desc: 'Book a one-on-one session with our style team.' },
];

export default function VelvetCoContact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={font}>
      {/* Page header */}
      <section className="bg-neutral-50 border-b border-neutral-100 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-2">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">Visit Us</h1>
          </Reveal>
        </div>
      </section>

      {/* At a Glance */}
      <section className="py-14 bg-white border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-6">At a Glance</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {glance.map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="flex items-start gap-4 p-5 bg-neutral-50 rounded-xl border border-neutral-100 hover:border-violet-200 transition-colors">
                  <div className="w-10 h-10 bg-violet-50 text-violet-600 rounded-lg flex items-center justify-center shrink-0">
                    <item.Icon size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-800 text-sm mb-1">{item.heading}</p>
                    <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Info */}
          <div>
            <Reveal>
              <h2 className="text-2xl font-bold text-neutral-900 mb-8">Find Us</h2>
            </Reveal>
            <div className="space-y-6">
              <Reveal delay={60}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-violet-50 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-violet-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-800 text-sm mb-1">Our Address</p>
                    <p className="text-neutral-500 text-sm">G-12, Lot 10, Jalan Bukit Bintang,<br />55100 Kuala Lumpur</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-violet-50 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-violet-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-800 text-sm mb-1">Phone</p>
                    <p className="text-neutral-500 text-sm">+60 3-2145 6677</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={180}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-violet-50 rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-violet-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-800 text-sm mb-1">Email</p>
                    <p className="text-neutral-500 text-sm">hello@velvetco.my</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-violet-50 rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-violet-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-800 text-sm mb-1">Opening Hours</p>
                    <div className="text-neutral-500 text-sm space-y-0.5">
                      <p>Mon – Fri: 10am – 9pm</p>
                      <p>Saturday: 10am – 10pm</p>
                      <p>Sunday: 11am – 8pm</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Form */}
          <Reveal delay={100}>
            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingBag size={24} className="text-violet-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-2">Message Sent!</h3>
                  <p className="text-neutral-500 text-sm">We'll get back to you within one business day.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-neutral-900 mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-neutral-600 mb-1.5">Full Name</label>
                        <input
                          type="text" name="name" required value={form.name} onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:border-violet-400 bg-white transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-neutral-600 mb-1.5">Email</label>
                        <input
                          type="email" name="email" required value={form.email} onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:border-violet-400 bg-white transition-colors"
                          placeholder="you@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-600 mb-1.5">Phone (optional)</label>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:border-violet-400 bg-white transition-colors"
                        placeholder="+60 1X-XXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-600 mb-1.5">I'm interested in</label>
                      <select
                        name="service" value={form.service} onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:border-violet-400 bg-white transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option>Ready-to-Wear</option>
                        <option>Custom Order</option>
                        <option>Alteration</option>
                        <option>Accessories</option>
                        <option>Seasonal Collection</option>
                        <option>Personal Styling</option>
                        <option>Gift Wrapping</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-600 mb-1.5">Message</label>
                      <textarea
                        name="message" rows={4} value={form.message} onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:border-violet-400 bg-white transition-colors resize-none"
                        placeholder="Tell us how we can help…"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg text-sm transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
