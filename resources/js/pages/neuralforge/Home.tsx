import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight, Bot, Brain, Zap, Shield, Globe, BarChart3,
  CheckCircle, Star, TrendingUp, Code2, Network, Cpu,
  Play, ChevronRight
} from 'lucide-react';
import { Reveal, GlowBadge, SectionLabel, GlassCard, Placeholder } from '../../components/neuralforge/NeuralHelpers';

/* ── Animated grid background ── */
function GridBackground() {
  return (
    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
  );
}

export default function NeuralHome() {
  return (
    <div className="overflow-hidden">

      {/* ══════════════════════════════════
          SECTION 1: HERO
      ══════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center bg-[#05050F] overflow-hidden">
        <GridBackground />

        {/* Radial glows */}
        <motion.div
          animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.05, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/15 blur-[130px] rounded-full pointer-events-none"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/2 right-[-10%] w-[400px] h-[400px] bg-violet-600/15 blur-[100px] rounded-full pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
          <SectionLabel number={1} title="Hero" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* ── Copy ── */}
            <div>
              <Reveal delay={0.05}>
                <GlowBadge className="mb-8">
                  Introducing NeuralForge 2.0 — Now in Beta
                </GlowBadge>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-black tracking-tight leading-[1.0] mb-6">
                  <span className="text-white">Build AI Agents</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                    That Actually Work
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl">
                  NeuralForge lets you design, deploy, and orchestrate intelligent AI agents at scale — without writing a single line of backend infrastructure. Go from prompt to production in minutes.
                </p>
              </Reveal>

              <Reveal delay={0.2} className="flex flex-wrap gap-4 mb-10">
                <Link
                  to="/neuralforge/contact"
                  className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-xl shadow-blue-900/40 hover:shadow-blue-900/60 hover:-translate-y-0.5"
                >
                  Start Building Free
                  <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <button className="flex items-center gap-2 border border-white/15 hover:border-blue-500/50 text-gray-300 hover:text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:bg-blue-500/10">
                  <Play size={16} className="text-blue-400" />
                  Watch Demo
                </button>
              </Reveal>

              {/* Social proof micro-bar */}
              <Reveal delay={0.25}>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 border-2 border-[#05050F] flex items-center justify-center text-xs font-bold">
                        {['A', 'B', 'C', 'D'][i]}
                      </div>
                    ))}
                  </div>
                  <span>Join <strong className="text-white">12,000+</strong> engineers already building</span>
                </div>
              </Reveal>
            </div>

            {/* ── Visual: Agent Dashboard Card ── */}
            <div className="relative hidden lg:flex flex-col gap-4">
              <Reveal direction="left" delay={0.2}>
                <GlassCard className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Bot size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Sales Automation Agent</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-xs text-green-400">Running · 3 tasks active</span>
                      </div>
                    </div>
                    <span className="ml-auto text-xs border border-blue-500/30 text-blue-400 px-2 py-1 rounded-full">v2.1</span>
                  </div>
                  <Placeholder label="Agent Activity Feed / Chart" className="h-32" />
                </GlassCard>
              </Reveal>

              <div className="grid grid-cols-2 gap-4">
                <Reveal direction="left" delay={0.3}>
                  <GlassCard className="p-5">
                    <p className="text-xs text-gray-500 mb-1">Tasks Completed</p>
                    <p className="text-3xl font-black text-white">48,293</p>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp size={12} className="text-green-400" />
                      <span className="text-xs text-green-400">+23% this week</span>
                    </div>
                  </GlassCard>
                </Reveal>
                <Reveal direction="left" delay={0.35}>
                  <GlassCard className="p-5">
                    <p className="text-xs text-gray-500 mb-1">Avg Response</p>
                    <p className="text-3xl font-black text-white">142<span className="text-base font-normal text-gray-400">ms</span></p>
                    <div className="flex items-center gap-1 mt-1">
                      <Zap size={12} className="text-blue-400" />
                      <span className="text-xs text-blue-400">Sub-200ms SLA</span>
                    </div>
                  </GlassCard>
                </Reveal>
              </div>

              <Reveal direction="left" delay={0.4}>
                <GlassCard className="p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center shrink-0">
                    <Brain size={18} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Memory & Context Active</p>
                    <p className="text-xs text-gray-500">Long-term agent memory enabled across 6 active sessions</p>
                  </div>
                  <ChevronRight size={16} className="text-gray-600 ml-auto shrink-0" />
                </GlassCard>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 2: TRUSTED BY LOGOS
      ══════════════════════════════════ */}
      <section className="py-14 border-y border-white/[0.05] bg-[#07070F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-center text-xs font-mono uppercase tracking-[0.25em] text-gray-600 mb-10">
              Trusted by engineering teams at
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-40">
            {[1, 2, 3, 4, 5].map((i) => (
              <Reveal key={i} delay={0.07 * i}>
                <Placeholder label={`Company ${i}`} className="h-10" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 3: CORE FEATURES
      ══════════════════════════════════ */}
      <section className="py-24 bg-[#05050F] relative">
        <GridBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionLabel number={3} title="Core Features" />
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <GlowBadge className="mb-4">Platform Capabilities</GlowBadge>
              <h2 className="text-3xl md:text-5xl font-black mt-4 mb-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                Everything you need to build<br />production-grade AI agents
              </h2>
              <p className="text-gray-400 leading-relaxed">
                From no-code visual builders to enterprise-grade APIs — NeuralForge covers the entire AI agent lifecycle.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Bot size={24} />, color: 'blue',
                title: 'Visual Agent Builder',
                desc: 'Drag-and-drop agent workflow designer. Connect LLMs, tools, memory, and APIs without code.',
              },
              {
                icon: <Brain size={24} />, color: 'violet',
                title: 'Long-Term Memory',
                desc: 'Persistent vector memory across sessions. Your agents remember context, preferences, and history.',
              },
              {
                icon: <Network size={24} />, color: 'cyan',
                title: 'Multi-Agent Orchestration',
                desc: 'Coordinate fleets of specialized agents. Supervisor-worker patterns built-in.',
              },
              {
                icon: <Code2 size={24} />, color: 'blue',
                title: 'SDK & REST API',
                desc: 'TypeScript/Python SDKs with full REST API. Integrate agents into any existing system.',
              },
              {
                icon: <Shield size={24} />, color: 'green',
                title: 'Enterprise Security',
                desc: 'SOC2 Type II, GDPR, HIPAA-ready. Role-based access, audit logs, and data isolation.',
              },
              {
                icon: <BarChart3 size={24} />, color: 'violet',
                title: 'Observability Suite',
                desc: 'Real-time tracing, cost analytics, latency monitoring, and agent performance dashboards.',
              },
            ].map((feature, i) => {
              const colorMap: Record<string, string> = {
                blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20 group-hover:border-blue-500/60',
                violet: 'bg-violet-500/10 text-violet-400 border-violet-500/20 group-hover:border-violet-500/60',
                cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20 group-hover:border-cyan-500/60',
                green: 'bg-green-500/10 text-green-400 border-green-500/20 group-hover:border-green-500/60',
              };
              return (
                <Reveal key={i} delay={0.08 * i} direction="up">
                  <div className={`group p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-blue-500/30 hover:bg-blue-500/[0.04] transition-all h-full cursor-pointer`}>
                    <div className={`w-12 h-12 rounded-xl border ${colorMap[feature.color] ?? colorMap['blue']} flex items-center justify-center mb-5 transition-all`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 4: HOW IT WORKS
      ══════════════════════════════════ */}
      <section className="py-24 bg-[#07070F] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionLabel number={4} title="How It Works" />
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                From idea to live agent in 3 steps
              </h2>
              <p className="text-gray-400">No infrastructure headaches. No PhD required.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-[52px] left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-gradient-to-r from-blue-500/40 via-violet-500/40 to-blue-500/40" />

            {[
              {
                step: '01',
                icon: <Brain size={24} />,
                title: 'Define Your Agent',
                desc: 'Set the goal, pick a model (GPT-4, Claude, Gemini), attach tools, and configure memory. Use our visual builder or YAML config.',
                color: 'blue',
              },
              {
                step: '02',
                icon: <Cpu size={24} />,
                title: 'Train & Test',
                desc: 'Run your agent in a sandboxed environment. Use our simulation suite to test edge cases, failures, and multi-turn conversations.',
                color: 'violet',
              },
              {
                step: '03',
                icon: <Globe size={24} />,
                title: 'Deploy & Scale',
                desc: 'One-click deploy to our global edge network. Auto-scales from 1 to 1 million agent calls per day with zero config.',
                color: 'cyan',
              },
            ].map((step, i) => {
              const colors: Record<string, { icon: string; num: string; border: string }> = {
                blue: { icon: 'bg-blue-500/15 text-blue-400', num: 'text-blue-500/30', border: 'border-blue-500/20' },
                violet: { icon: 'bg-violet-500/15 text-violet-400', num: 'text-violet-500/30', border: 'border-violet-500/20' },
                cyan: { icon: 'bg-cyan-500/15 text-cyan-400', num: 'text-cyan-500/30', border: 'border-cyan-500/20' },
              };
              const c = colors[step.color] ?? colors['blue'];
              return (
                <Reveal key={i} delay={0.15 * i} direction="up">
                  <GlassCard className={`p-8 h-full border ${c.border} relative`}>
                    <div className={`absolute top-6 right-6 text-6xl font-black ${c.num} select-none`}>{step.step}</div>
                    <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center mb-6`}>
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </GlassCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 5: STATS
      ══════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden bg-[#05050F]">
        <GridBackground />
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute -right-[10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-blue-500/10 pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionLabel number={5} title="Platform Stats" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: '1B+', label: 'Agent Tasks Executed', color: 'text-blue-400' },
              { num: '99.99%', label: 'Uptime SLA', color: 'text-green-400' },
              { num: '120ms', label: 'Avg Latency', color: 'text-cyan-400' },
              { num: '50k+', label: 'Active Developers', color: 'text-violet-400' },
            ].map((stat, i) => (
              <Reveal key={i} delay={0.1 * i} direction="up">
                <GlassCard className="p-8 text-center hover:border-blue-500/20 transition-all">
                  <div className={`text-4xl md:text-5xl font-black mb-3 ${stat.color}`}>{stat.num}</div>
                  <div className="text-gray-500 text-xs uppercase tracking-[0.15em]">{stat.label}</div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 6: TESTIMONIALS
      ══════════════════════════════════ */}
      <section className="py-24 bg-[#07070F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number={6} title="Testimonials" />
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                Loved by builders worldwide
              </h2>
              <p className="text-gray-400">From solo hackers to Fortune 500 engineering teams.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { role: 'CTO @ FinTech Startup', company: 'Company A', stars: 5, quote: '"We replaced 3 full-time data ops roles with a single NeuralForge agent. It handles 40,000 transactions per day with zero downtime."' },
              { role: 'AI Lead @ SaaS Co.', company: 'Company B', stars: 5, quote: '"The multi-agent orchestration is genuinely magical. We built a customer support system in a weekend that outperforms what our team spent 6 months building in-house."' },
              { role: 'Senior Engineer', company: 'Company C', stars: 5, quote: '"The observability tools alone are worth it. I can trace exactly why an agent made a decision, cost it down to the token, and ship improvements same-day."' },
            ].map((t, i) => (
              <Reveal key={i} delay={0.12 * i} direction="up">
                <GlassCard className="p-8 h-full flex flex-col hover:border-blue-500/20 transition-all">
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(t.stars)].map((_, j) => (
                      <Star key={j} size={14} className="text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed italic flex-1 mb-6">{t.quote}</p>
                  <div className="flex items-center gap-3 border-t border-white/[0.06] pt-5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-sm font-bold shrink-0">
                      {t.company[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{t.role}</p>
                      <p className="text-xs text-gray-500">{t.company}</p>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 7: PRICING
      ══════════════════════════════════ */}
      <section className="py-24 bg-[#05050F] relative">
        <GridBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionLabel number={7} title="Pricing" />
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <GlowBadge className="mb-4">Simple Pricing</GlowBadge>
              <h2 className="text-3xl md:text-4xl font-black mt-4 mb-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                Start free. Scale when ready.
              </h2>
              <p className="text-gray-400">No surprise bills. Usage-based pricing with generous free tier.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Developer', price: '$0', sub: '/month', highlight: false,
                badge: null, cta: 'Start Free',
                features: ['3 agents', '10,000 tasks/mo', '7-day memory retention', 'Community support', 'REST API access'],
              },
              {
                name: 'Pro', price: '$49', sub: '/month', highlight: true,
                badge: 'Most Popular', cta: 'Start Pro Trial',
                features: ['Unlimited agents', '500,000 tasks/mo', 'Unlimited memory', 'Priority support', 'SDK access', 'Custom integrations'],
              },
              {
                name: 'Enterprise', price: 'Custom', sub: '', highlight: false,
                badge: null, cta: 'Contact Sales',
                features: ['Everything in Pro', 'Dedicated infrastructure', 'SLA guarantee', 'HIPAA/SOC2', 'Onboarding & training', 'SLAs & contracts'],
              },
            ].map((plan, i) => (
              <Reveal key={i} delay={0.12 * i} direction="up">
                <div className={`relative p-8 rounded-3xl h-full flex flex-col transition-all ${
                  plan.highlight
                    ? 'bg-gradient-to-b from-blue-600/20 to-violet-600/20 border-2 border-blue-500/50 shadow-2xl shadow-blue-900/30 scale-105'
                    : 'bg-white/[0.02] border border-white/[0.08] hover:border-blue-500/20'
                }`}>
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                      {plan.badge}
                    </div>
                  )}
                  <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className={`text-4xl font-black ${plan.highlight ? 'text-white' : 'text-white'}`}>{plan.price}</span>
                    {plan.sub && <span className="text-gray-500 ml-1 text-sm">{plan.sub}</span>}
                  </div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-sm text-gray-400">
                        <CheckCircle size={15} className={plan.highlight ? 'text-blue-400' : 'text-gray-600'} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/neuralforge/contact"
                    className={`block text-center py-3.5 rounded-xl font-bold text-sm transition-all ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white shadow-lg shadow-blue-900/40'
                        : 'border border-white/15 text-gray-300 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 8: FINAL CTA
      ══════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden bg-[#07070F]">
        {/* Glow pulse */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/20 blur-[130px] rounded-full pointer-events-none"
        />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <SectionLabel number={8} title="Call to Action" />
          <Reveal>
            <GlowBadge className="mb-6">Ready to build?</GlowBadge>
            <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent leading-tight">
              Your first AI agent<br />is 10 minutes away
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              No credit card required. No infrastructure to manage. Just sign up and start building agents that automate the work your team hates doing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/neuralforge/contact"
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-2xl shadow-blue-900/50 hover:-translate-y-0.5"
              >
                Start Building Free
                <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/neuralforge/solutions"
                className="flex items-center justify-center gap-2 border border-white/15 hover:border-blue-500/40 text-gray-300 hover:text-white px-10 py-5 rounded-full text-lg font-semibold transition-all hover:bg-blue-500/10"
              >
                Explore Solutions
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-600">Free forever tier · No credit card · Deploy in minutes</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
