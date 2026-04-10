import { Rocket, Lightbulb, Heart } from 'lucide-react';
import { Reveal, GlowBadge, SectionLabel, GlassCard, PageHeader, Placeholder } from '../../components/neuralforge/NeuralHelpers';

export default function TestProjectAbout() {
  return (
    <div className="overflow-hidden">
      <PageHeader
        badge="Our Story"
        title="Built for you, by people like you"
        subtitle="TestProject was born from the frustration of shipping slowly. We built the platform we always wished existed — and opened it to everyone."
      />

      {/* ══════════════════════════════════
          SECTION 1: ORIGIN STORY
      ══════════════════════════════════ */}
      <section className="py-24 bg-[#05050F] relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionLabel number={1} title="Origin Story" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left visual */}
            <Reveal direction="right">
              <GlassCard className="p-2">
                <Placeholder label="Team Photo" className="h-[400px] !rounded-xl" />
              </GlassCard>
            </Reveal>

            {/* Right text */}
            <Reveal direction="up" delay={0.2}>
              <GlowBadge className="mb-6">Founded 2024</GlowBadge>
              <h2 className="text-3xl md:text-4xl font-black mb-6 bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent mt-2">
                We built the tool we wished existed
              </h2>
              <div className="space-y-5 text-gray-400 leading-relaxed">
                <p>
                  <strong className="text-white">In 2023</strong>, our founding team spent months wrestling with fragile CI pipelines, slow deploys, and zero visibility into what was actually happening in production. Every tool we tried solved one problem and created three more.
                </p>
                <p>
                  We knew the underlying technology was capable. The missing piece was a platform that <strong className="text-white">unified build, deploy, and observe</strong> in a single coherent experience — without making you a DevOps expert first.
                </p>
                <p>
                  TestProject launched in early 2024. <strong className="text-white">Today, over 10,000 engineers</strong> use it to ship faster, debug smarter, and sleep better at night.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { label: 'Founded', value: '2024' },
                  { label: 'Team Size', value: '32' },
                  { label: 'Countries', value: '24+' },
                ].map((stat, i) => (
                  <GlassCard key={i} className="p-4 text-center">
                    <p className="text-xl font-black text-white">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </GlassCard>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 2: VALUES
      ══════════════════════════════════ */}
      <section className="py-24 bg-[#07070F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number={2} title="Our Values" />
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                What drives us
              </h2>
              <p className="text-gray-400">The principles behind every decision, feature, and hire we make.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Rocket size={28} />,
                title: 'Ship First',
                desc: 'Speed is a feature. We optimize relentlessly for fast iteration — in our product and in how we build it. Done beats perfect, and feedback beats assumptions.',
              },
              {
                icon: <Lightbulb size={28} />,
                title: 'Radical Clarity',
                desc: 'No hidden complexity. No black boxes. Every dashboard, error message, and pricing page should be immediately understandable. Clarity is respect.',
              },
              {
                icon: <Heart size={28} />,
                title: 'Developer First',
                desc: 'We build for the people in the trenches. Not the manager who buys the tool — the engineer who uses it at 2am. Their experience is our north star.',
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.12} direction="up">
                <GlassCard className="p-10 text-center h-full hover:border-violet-500/20 transition-all">
                  <div className="w-16 h-16 rounded-2xl border bg-violet-500/10 border-violet-500/20 text-violet-400 flex items-center justify-center mx-auto mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-black mb-4 text-white">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
