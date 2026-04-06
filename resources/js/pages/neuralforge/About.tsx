import { motion } from 'motion/react';
import { Users, Globe, Award, Rocket, Heart, ShieldCheck, Lightbulb } from 'lucide-react';
import { Reveal, GlowBadge, SectionLabel, GlassCard, PageHeader, Placeholder } from '../../components/neuralforge/NeuralHelpers';

function GridBg() {
  return (
    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
  );
}

export default function NeuralAbout() {
  return (
    <div className="overflow-hidden">
      <PageHeader
        badge="Our Story"
        title="Built by engineers, for engineers"
        subtitle="NeuralForge was born out of frustration with how hard it is to build reliable AI agents. We fixed that."
      />

      {/* ══════════════════════════════════
          SECTION 1: ORIGIN STORY
      ══════════════════════════════════ */}
      <section className="py-24 bg-[#05050F] relative">
        <GridBg />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionLabel number={1} title="Origin Story" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="right">
              <div className="relative">
                <motion.div
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-xl pointer-events-none"
                />
                <GlassCard className="relative p-2">
                  <Placeholder label="Founder / Team Origin Photo" className="h-[480px] !rounded-xl" />
                </GlassCard>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <GlowBadge className="mb-6">Founded 2023, San Francisco</GlowBadge>
              <h2 className="text-3xl md:text-4xl font-black mb-6 bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent mt-2">
                We built the tool we wished existed
              </h2>
              <div className="space-y-5 text-gray-400 leading-relaxed">
                <p>
                  <strong className="text-white">In 2022</strong>, our founding team spent 18 months trying to build production-reliable AI agents at a previous company. We hit every wall imaginable — hallucinations, broken memory, duct-tape orchestration, and zero observability.
                </p>
                <p>
                  We knew the underlying models were capable. The missing piece was the <strong className="text-white">infrastructure, tooling, and developer experience</strong> to make AI agents actually work in production.
                </p>
                <p>
                  NeuralForge is that layer. We raised a seed round, hired the team, and launched in early 2023. <strong className="text-white">Today, over 50,000 developers</strong> use NeuralForge to build AI agents that run critical business workflows every single day.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { icon: <Rocket size={18} />, label: 'Founded', value: '2023' },
                  { icon: <Users size={18} />, label: 'Team Size', value: '48' },
                  { icon: <Globe size={18} />, label: 'Countries', value: '30+' },
                ].map((item, i) => (
                  <GlassCard key={i} className="p-4 text-center">
                    <div className="text-blue-400 flex justify-center mb-2">{item.icon}</div>
                    <p className="text-xl font-black text-white">{item.value}</p>
                    <p className="text-xs text-gray-500">{item.label}</p>
                  </GlassCard>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 2: MISSION / VISION / VALUES
      ══════════════════════════════════ */}
      <section className="py-24 bg-[#07070F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number={2} title="Mission / Vision / Values" />
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                What drives us
              </h2>
              <p className="text-gray-400">The principles behind every feature, decision, and hire we make.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Rocket size={28} />, color: 'blue',
                title: 'Mission',
                content: 'Make AI agent development 10x faster and 10x more reliable than anything else on the market — for every developer, not just ML researchers.',
              },
              {
                icon: <Lightbulb size={28} />, color: 'violet',
                title: 'Vision',
                content: 'A world where AI agents handle all the repetitive, error-prone work — so humans can focus on what actually requires creativity, empathy, and judgment.',
              },
              {
                icon: <Heart size={28} />, color: 'cyan',
                title: 'Values',
                content: 'Developer obsession · Radical transparency · Ship fast, fix fast · No bloat · Assume good intent · Build for reliability first.',
              },
            ].map((item, i) => {
              const colors: Record<string, string> = {
                blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
                violet: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
                cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
              };
              return (
                <Reveal key={i} delay={i * 0.12} direction="up">
                  <GlassCard className="p-10 text-center h-full hover:border-blue-500/20 transition-all">
                    <div className={`w-16 h-16 rounded-2xl border ${colors[item.color] ?? colors['blue']} flex items-center justify-center mx-auto mb-6`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-black mb-4 text-white">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{item.content}</p>
                  </GlassCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 3: TEAM
      ══════════════════════════════════ */}
      <section className="py-24 bg-[#05050F] relative">
        <GridBg />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionLabel number={3} title="Leadership Team" />
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                Meet the team
              </h2>
              <p className="text-gray-400">Ex-Google, OpenAI, Stripe, and Anthropic engineers who've shipped AI at scale.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Alex Chen', role: 'CEO & Co-founder', prev: 'ex-Google DeepMind', grad: 'from-blue-500 to-cyan-500' },
              { name: 'Priya Nair', role: 'CTO & Co-founder', prev: 'ex-Anthropic', grad: 'from-violet-500 to-blue-500' },
              { name: 'Jordan Smith', role: 'Head of Product', prev: 'ex-OpenAI', grad: 'from-cyan-500 to-blue-500' },
              { name: 'Maya Okafor', role: 'Head of Engineering', prev: 'ex-Stripe', grad: 'from-blue-600 to-violet-600' },
            ].map((member, i) => (
              <Reveal key={i} delay={0.1 * i} direction="up">
                <div className="group relative overflow-hidden rounded-3xl cursor-pointer">
                  <div className={`h-56 bg-gradient-to-br ${member.grad} opacity-20 group-hover:opacity-30 transition-opacity rounded-3xl`} />
                  <Placeholder label={`${member.name} Photo`} className="absolute inset-0 !rounded-3xl !border-0 !bg-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05050F] via-[#05050F]/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-5">
                    <h3 className="text-lg font-black text-white">{member.name}</h3>
                    <p className="text-blue-400 text-sm">{member.role}</p>
                    <p className="text-gray-600 text-xs mt-1">{member.prev}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 4: INVESTORS / PRESS
      ══════════════════════════════════ */}
      <section className="py-20 bg-[#07070F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number={4} title="Investors & Press" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal direction="right">
              <h2 className="text-2xl md:text-3xl font-black mb-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                Backed by the best
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                We raised $12M in seed funding from investors who have backed companies like OpenAI, Figma, and Notion. They believe, like us, that the AI agent layer is the most important infrastructure being built right now.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                {[<Award size={16} />, <ShieldCheck size={16} />].map((icon, i) => (
                  <div key={i} className="flex items-center gap-2 border border-white/10 rounded-full px-4 py-2">
                    <span className="text-blue-400">{icon}</span>
                    <span className="text-xs text-gray-400">{i === 0 ? '$12M Seed Round · 2023' : 'SOC2 Type II Certified'}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.15}>
              <div className="grid grid-cols-3 gap-4 opacity-50">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Placeholder key={i} label={`Investor ${i}`} className="h-14" />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
