import { Mail, MessageCircle, Globe, Clock, Send, ArrowRight, Zap, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal, GlowBadge, SectionLabel, GlassCard, PageHeader } from '../../components/neuralforge/NeuralHelpers';

export default function NeuralContact() {
  return (
    <div className="overflow-hidden bg-[#05050F]">
      <PageHeader
        badge="Contact"
        title="Let's build something together"
        subtitle="Sales questions, technical support, enterprise inquiries — we're engineers who actually reply."
      />

      {/* ══════════════════════════════════
          SECTION 1: CONTACT CHANNELS
      ══════════════════════════════════ */}
      <section className="py-16 border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number={1} title="Contact Channels" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { icon: <MessageCircle size={22} />, label: 'Live Chat', value: 'In-app chat', sub: 'Avg. reply: < 5 min', color: 'blue', available: true },
              { icon: <Mail size={22} />, label: 'Email Support', value: 'support@neuralforge.ai', sub: 'Reply within 24h', color: 'violet', available: true },
              { icon: <Github size={22} />, label: 'GitHub Issues', value: 'github.com/neuralforge', sub: 'Open source SDK issues', color: 'cyan', available: true },
              { icon: <Globe size={22} />, label: 'Community Discord', value: '12,000+ members', sub: 'Community & peer support', color: 'green', available: true },
            ].map((ch, i) => {
              const colors: Record<string, string> = {
                blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
                violet: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
                cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
                green: 'bg-green-500/10 text-green-400 border-green-500/30',
              };
              return (
                <Reveal key={i} delay={0.08 * i} direction="up">
                  <GlassCard className="p-6 text-center hover:border-blue-500/20 transition-all cursor-pointer group">
                    <div className={`w-12 h-12 rounded-full border ${colors[ch.color] ?? colors['blue']} flex items-center justify-center mx-auto mb-4`}>
                      {ch.icon}
                    </div>
                    <p className="font-bold text-white text-sm mb-1">{ch.label}</p>
                    <p className="text-gray-400 text-xs mb-1 font-mono">{ch.value}</p>
                    <p className="text-gray-600 text-xs">{ch.sub}</p>
                  </GlassCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 2: FORM + INFO
      ══════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number={2} title="Get in Touch" />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* ── Info Column ── */}
            <div className="lg:col-span-2">
              <Reveal direction="right">
                <GlowBadge className="mb-6">We're a real team</GlowBadge>
                <h2 className="text-3xl font-black mt-4 mb-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                  Not a support bot. Real engineers.
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  We don't outsource support. Every ticket is seen by someone who has built agents themselves. If something is broken or unclear, we want to know.
                </p>

                <div className="space-y-5">
                  {[
                    { icon: <Mail size={18} />, label: 'General', value: 'hello@neuralforge.ai' },
                    { icon: <Zap size={18} />, label: 'Sales / Enterprise', value: 'sales@neuralforge.ai' },
                    { icon: <MessageCircle size={18} />, label: 'Support', value: 'support@neuralforge.ai' },
                    { icon: <Clock size={18} />, label: 'Response Time', value: 'Business hours: < 4h · Weekends: < 24h' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-0.5 font-semibold uppercase tracking-wider">{item.label}</p>
                        <p className="text-sm text-gray-300">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/[0.06]">
                  <p className="text-xs text-gray-600 uppercase tracking-wider font-semibold mb-4">Office</p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    NeuralForge Inc.<br />
                    340 Pine Street, Suite 800<br />
                    San Francisco, CA 94104<br />
                    United States
                  </p>
                  <p className="text-sm text-gray-500 mt-3">Remote-first · Team in 12 countries</p>
                </div>
              </Reveal>
            </div>

            {/* ── Contact Form ── */}
            <div className="lg:col-span-3">
              <Reveal direction="up" delay={0.15}>
                <GlassCard className="p-10">
                  <h2 className="text-2xl font-black text-white mb-2">Send us a message</h2>
                  <p className="text-gray-500 text-sm mb-8">We'll get back to you within 1 business day. For urgent issues, use live chat.</p>

                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="group">
                        <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider group-focus-within:text-blue-400 transition-colors">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-5 py-4 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-blue-500/60 focus:bg-blue-500/[0.04] focus:ring-0 outline-none transition-all text-sm text-gray-200 placeholder-gray-600"
                          placeholder="Alex Chen"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider group-focus-within:text-blue-400 transition-colors">
                          Work Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-5 py-4 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-blue-500/60 focus:bg-blue-500/[0.04] focus:ring-0 outline-none transition-all text-sm text-gray-200 placeholder-gray-600"
                          placeholder="alex@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="group">
                        <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider group-focus-within:text-blue-400 transition-colors">
                          Company
                        </label>
                        <input
                          type="text"
                          className="w-full px-5 py-4 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-blue-500/60 focus:bg-blue-500/[0.04] focus:ring-0 outline-none transition-all text-sm text-gray-200 placeholder-gray-600"
                          placeholder="Acme Corp"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider group-focus-within:text-blue-400 transition-colors">
                          Inquiry Type
                        </label>
                        <select className="w-full px-5 py-4 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-blue-500/60 focus:bg-blue-500/[0.04] focus:ring-0 outline-none transition-all text-sm text-gray-400 appearance-none">
                          <option>General Inquiry</option>
                          <option>Sales / Enterprise Demo</option>
                          <option>Technical Support</option>
                          <option>Partnership</option>
                          <option>Press / Media</option>
                          <option>Careers</option>
                        </select>
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider group-focus-within:text-blue-400 transition-colors">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        className="w-full px-5 py-4 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-blue-500/60 focus:bg-blue-500/[0.04] focus:ring-0 outline-none transition-all resize-none text-sm text-gray-200 placeholder-gray-600"
                        placeholder="Describe your use case, ask a technical question, or tell us what you're building..."
                      />
                    </div>

                    <button
                      type="button"
                      className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-8 py-4 rounded-xl text-base font-bold transition-all hover:shadow-xl hover:shadow-blue-900/40 hover:-translate-y-0.5 active:scale-[0.99] flex items-center justify-center gap-2"
                    >
                      Send Message <Send size={18} />
                    </button>
                    <p className="text-center text-xs text-gray-600">
                      By submitting you agree to our Privacy Policy. We don't spam — ever.
                    </p>
                  </form>
                </GlassCard>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 3: ENTERPRISE CTA
      ══════════════════════════════════ */}
      <section className="py-20 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number={3} title="Enterprise" />
          <Reveal>
            <GlassCard className="p-10 md:p-16 text-center border-blue-500/20 bg-gradient-to-b from-blue-500/[0.06] to-transparent">
              <GlowBadge className="mb-6">Enterprise Plans</GlowBadge>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-4">
                Need a custom plan for your team?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                We work closely with engineering and operations teams at mid-market and enterprise companies. Dedicated infrastructure, SLAs, custom integrations, and onboarding support — all included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/neuralforge/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-0.5"
                >
                  Schedule Enterprise Demo <ArrowRight size={16} />
                </Link>
                <button className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-blue-500/40 text-gray-300 hover:text-white px-8 py-4 rounded-full font-semibold transition-all hover:bg-blue-500/10">
                  Download Security Brief
                </button>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
