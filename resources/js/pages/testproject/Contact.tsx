import { Mail, MessageCircle, Globe, Clock, Send } from 'lucide-react';
import { Reveal, GlowBadge, SectionLabel, GlassCard, PageHeader } from '../../components/neuralforge/NeuralHelpers';

export default function TestProjectContact() {
  return (
    <div className="overflow-hidden bg-[#05050F]">
      <PageHeader
        badge="Contact"
        title="Let's talk"
        subtitle="Have a question, a feature idea, or just want to say hello? We'd love to hear from you."
      />

      {/* ══════════════════════════════════
          SECTION 1: CHANNELS
      ══════════════════════════════════ */}
      <section className="py-16 border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number={1} title="Contact Channels" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { icon: <MessageCircle size={22} />, label: 'Live Chat', value: 'In-app chat', sub: 'Avg. reply: < 5 min' },
              { icon: <Mail size={22} />, label: 'Email Support', value: 'support@testproject.io', sub: 'Reply within 24h' },
              { icon: <Globe size={22} />, label: 'GitHub Issues', value: 'github.com/testproject', sub: 'Open source issues' },
              { icon: <MessageCircle size={22} />, label: 'Community', value: '10,000+ members', sub: 'Discord community' },
            ].map((ch, i) => (
              <Reveal key={i} delay={0.08 * i} direction="up">
                <GlassCard className="p-6 text-center hover:border-violet-500/20 transition-all cursor-pointer group">
                  <div className="w-12 h-12 rounded-full border bg-violet-500/10 border-violet-500/20 text-violet-400 flex items-center justify-center mx-auto mb-4">
                    {ch.icon}
                  </div>
                  <p className="font-bold text-white text-sm mb-1">{ch.label}</p>
                  <p className="text-gray-400 text-xs mb-1 font-mono">{ch.value}</p>
                  <p className="text-gray-600 text-xs">{ch.sub}</p>
                </GlassCard>
              </Reveal>
            ))}
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

            {/* Info col */}
            <div className="lg:col-span-2">
              <Reveal direction="right">
                <GlowBadge className="mb-6">We're a real team</GlowBadge>
                <h2 className="text-3xl font-black mt-4 mb-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                  Not a bot. Real engineers.
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Every message is read by someone who has shipped software themselves. If something is broken or confusing, we genuinely want to know.
                </p>

                <div className="space-y-5">
                  {[
                    { icon: <Mail size={18} />, label: 'General', value: 'hello@testproject.io' },
                    { icon: <Mail size={18} />, label: 'Sales', value: 'sales@testproject.io' },
                    { icon: <Mail size={18} />, label: 'Support', value: 'support@testproject.io' },
                    { icon: <Clock size={18} />, label: 'Response Time', value: 'Business hours: < 4h · Weekends: < 24h' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center shrink-0">
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
                    TestProject Inc.<br />
                    123 Builder Street, Suite 400<br />
                    San Francisco, CA 94107<br />
                    United States
                  </p>
                  <p className="text-sm text-gray-500 mt-3">Remote-first · Team in 8 countries</p>
                </div>
              </Reveal>
            </div>

            {/* Form col */}
            <div className="lg:col-span-3">
              <Reveal direction="up" delay={0.15}>
                <GlassCard className="p-10">
                  <h2 className="text-2xl font-black text-white mb-2">Send us a message</h2>
                  <p className="text-gray-500 text-sm mb-8">We'll get back to you within 1 business day.</p>

                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="group">
                        <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider group-focus-within:text-violet-400 transition-colors">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-5 py-4 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-violet-500/60 focus:bg-violet-500/[0.04] focus:ring-0 outline-none transition-all text-sm text-gray-200 placeholder-gray-600"
                          placeholder="Jane Smith"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider group-focus-within:text-violet-400 transition-colors">
                          Work Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-5 py-4 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-violet-500/60 focus:bg-violet-500/[0.04] focus:ring-0 outline-none transition-all text-sm text-gray-200 placeholder-gray-600"
                          placeholder="jane@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="group">
                        <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider group-focus-within:text-violet-400 transition-colors">
                          Company
                        </label>
                        <input
                          type="text"
                          className="w-full px-5 py-4 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-violet-500/60 focus:bg-violet-500/[0.04] focus:ring-0 outline-none transition-all text-sm text-gray-200 placeholder-gray-600"
                          placeholder="Acme Corp"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider group-focus-within:text-violet-400 transition-colors">
                          Inquiry Type
                        </label>
                        <select className="w-full px-5 py-4 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-violet-500/60 focus:bg-violet-500/[0.04] focus:ring-0 outline-none transition-all text-sm text-gray-400 appearance-none">
                          <option>General Inquiry</option>
                          <option>Sales / Enterprise Demo</option>
                          <option>Technical Support</option>
                          <option>Partnership</option>
                          <option>Press / Media</option>
                        </select>
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider group-focus-within:text-violet-400 transition-colors">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        className="w-full px-5 py-4 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-violet-500/60 focus:bg-violet-500/[0.04] focus:ring-0 outline-none transition-all resize-none text-sm text-gray-200 placeholder-gray-600"
                        placeholder="Tell us what you're building or what you need help with..."
                      />
                    </div>

                    <button
                      type="button"
                      className="w-full bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white px-8 py-4 rounded-xl text-base font-bold transition-all hover:shadow-xl hover:shadow-violet-900/30 hover:-translate-y-0.5 active:scale-[0.99] flex items-center justify-center gap-2"
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
    </div>
  );
}
