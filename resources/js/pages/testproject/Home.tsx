import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Zap, Shield, BarChart3, Code2, Globe, Users } from 'lucide-react';
import { Reveal, GlowBadge, SectionLabel, GlassCard, Placeholder } from '../../components/neuralforge/NeuralHelpers';

export default function TestProjectHome() {
  return (
    <div className="overflow-hidden">

      {/* ══════════════════════════════════
          SECTION 1: HERO
      ══════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center bg-[#05050F] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <motion.div
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-violet-600/15 blur-[130px] rounded-full pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
          <SectionLabel number={1} title="Hero" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left copy */}
            <div>
              <Reveal delay={0.05}>
                <GlowBadge className="mb-8">Introducing TestProject — Built for Builders</GlowBadge>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-black tracking-tight leading-[1.0] mb-6">
                  <span className="text-white">Ship Faster.</span>
                  <br />
                  <span className="bg-gradient-to-r from-violet-400 via-violet-300 to-purple-400 bg-clip-text text-transparent">
                    Build Smarter.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl">
                  TestProject gives your team the tools, workflows, and infrastructure to ship production-ready software without the overhead. From first commit to live deployment in minutes.
                </p>
              </Reveal>

              <Reveal delay={0.2} className="flex flex-wrap gap-4 mb-10">
                <Link
                  to="/testproject/contact"
                  className="group flex items-center gap-2 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-xl shadow-violet-900/30 hover:-translate-y-0.5"
                >
                  Start Building Free
                </Link>
                <button className="flex items-center gap-2 border border-white/15 hover:border-violet-500/40 text-gray-300 hover:text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:bg-violet-500/10">
                  Watch Demo
                </button>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 border-2 border-[#05050F] flex items-center justify-center text-xs font-bold"
                      >
                        {['A', 'B', 'C', 'D'][i]}
                      </div>
                    ))}
                  </div>
                  <span>Join <strong className="text-white">10,000+</strong> engineers already building</span>
                </div>
              </Reveal>
            </div>

            {/* Right dashboard */}
            <div className="relative hidden lg:flex flex-col gap-4">
              <Reveal direction="left" delay={0.2}>
                <GlassCard className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center">
                      <Zap size={18} className="text-violet-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Project Status</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-xs text-green-400">All systems operational</span>
                      </div>
                    </div>
                  </div>
                  <Placeholder label="Activity Chart" className="h-32" />
                </GlassCard>
              </Reveal>

              <div className="grid grid-cols-2 gap-4">
                <Reveal direction="left" delay={0.3}>
                  <GlassCard className="p-5">
                    <p className="text-xs text-gray-500 mb-1">Builds Today</p>
                    <p className="text-3xl font-black text-white">1,284</p>
                    <span className="text-xs text-green-400">+18% vs yesterday</span>
                  </GlassCard>
                </Reveal>
                <Reveal direction="left" delay={0.35}>
                  <GlassCard className="p-5">
                    <p className="text-xs text-gray-500 mb-1">Avg Deploy Time</p>
                    <p className="text-3xl font-black text-white">38<span className="text-base font-normal text-gray-400">s</span></p>
                    <span className="text-xs text-violet-400">Sub-60s SLA</span>
                  </GlassCard>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 2: FEATURES
      ══════════════════════════════════ */}
      <section className="py-24 bg-[#07070F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number={2} title="Features" />
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <GlowBadge className="mb-4">Platform Capabilities</GlowBadge>
              <h2 className="text-3xl md:text-5xl font-black mt-4 mb-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                Everything your team needs<br />to ship with confidence
              </h2>
              <p className="text-gray-400 leading-relaxed">
                From solo projects to enterprise deployments — TestProject scales with you.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Zap size={24} />, title: 'Instant CI/CD', desc: 'Zero-config pipelines that detect your stack and build automatically. Push to deploy in seconds.' },
              { icon: <Shield size={24} />, title: 'Security Scanning', desc: 'Automated vulnerability detection across every dependency, container, and configuration file.' },
              { icon: <BarChart3 size={24} />, title: 'Live Observability', desc: 'Real-time metrics, logs, and traces unified in one dashboard. Know what is happening and why.' },
              { icon: <Code2 size={24} />, title: 'Code Review Automation', desc: 'AI-assisted reviews that catch bugs, style issues, and performance regressions before humans do.' },
              { icon: <Globe size={24} />, title: 'Global Edge Network', desc: 'Deploy to 40+ edge locations worldwide. Sub-50ms response times for users everywhere.' },
              { icon: <Users size={24} />, title: 'Team Collaboration', desc: 'Shared environments, role-based access, and audit logs built for engineering teams of any size.' },
            ].map((feature, i) => (
              <Reveal key={i} delay={0.08 * i} direction="up">
                <div className="group p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/30 hover:bg-violet-500/[0.04] transition-all h-full cursor-pointer">
                  <div className="w-12 h-12 rounded-xl border bg-violet-500/10 border-violet-500/20 text-violet-400 flex items-center justify-center mb-5 transition-all">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 3: CTA
      ══════════════════════════════════ */}
      <section className="py-28 bg-[#05050F] relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-600/20 blur-[130px] rounded-full pointer-events-none"
        />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <SectionLabel number={3} title="Get Started" />
          <Reveal>
            <GlowBadge className="mb-6">Ready to build?</GlowBadge>
            <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent leading-tight">
              Your first project<br />is 5 minutes away
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              No credit card required. No infrastructure to set up. Just sign up and start shipping the way your team always wanted to.
            </p>
            <Link
              to="/testproject/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-2xl shadow-violet-900/30 hover:-translate-y-0.5"
            >
              Start Building Free
            </Link>
            <p className="mt-6 text-sm text-gray-600">Free forever tier · No credit card · Deploy in minutes</p>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
