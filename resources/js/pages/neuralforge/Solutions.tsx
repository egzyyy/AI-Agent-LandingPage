import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Headphones, BarChart3, Mail, ShoppingCart, Code2, CheckCircle, Zap } from 'lucide-react';
import { Reveal, GlowBadge, SectionLabel, GlassCard, PageHeader, Placeholder } from '../../components/neuralforge/NeuralHelpers';

const solutions = [
  {
    id: 'customer-support',
    icon: <Headphones size={28} />,
    color: 'blue',
    title: 'Customer Support Agent',
    tag: 'Most Popular',
    tagline: 'Resolve 80% of tickets without human intervention',
    desc: 'Deploy an AI agent that handles Tier-1 support tickets, escalates complex issues to humans, and learns from every interaction. Integrates with Zendesk, Intercom, and Freshdesk.',
    features: ['Auto-triage & priority routing', 'Multilingual support (90+ languages)', 'Sentiment detection & escalation', 'Knowledge base integration', 'CSAT measurement built-in'],
    metric: { label: '80%', sub: 'ticket deflection rate' },
  },
  {
    id: 'sales-automation',
    icon: <BarChart3 size={28} />,
    color: 'violet',
    title: 'Sales Automation Agent',
    tag: null,
    tagline: 'Qualify leads and book demos while you sleep',
    desc: 'An AI sales agent that engages inbound leads, qualifies prospects using your ICP criteria, answers product questions, and schedules demos directly to your reps\' calendars.',
    features: ['Lead scoring & ICP matching', 'Personalized outbound cadences', 'CRM sync (Salesforce, HubSpot)', 'Meeting scheduling via Cal.com', 'Deal stage progression tracking'],
    metric: { label: '3x', sub: 'pipeline conversion lift' },
  },
  {
    id: 'data-analysis',
    icon: <Code2 size={28} />,
    color: 'cyan',
    title: 'Data Analysis Agent',
    tag: null,
    tagline: 'Ask questions. Get answers. No SQL required.',
    desc: 'Connect your databases and data warehouses. Ask business questions in plain English and get accurate, cited answers with charts, anomaly detection, and scheduled reports.',
    features: ['Natural language to SQL', 'Auto-generated charts & dashboards', 'Anomaly detection & alerts', 'Scheduled insights reports', 'Connects to Postgres, BigQuery, Snowflake'],
    metric: { label: '6hrs', sub: 'saved per analyst per week' },
  },
  {
    id: 'content-pipeline',
    icon: <Mail size={28} />,
    color: 'green',
    title: 'Content & Marketing Agent',
    tag: null,
    tagline: 'Full-funnel content engine on autopilot',
    desc: 'Generate SEO content, social posts, email campaigns, and ad copy — with brand voice consistency enforced. Human review workflow built in.',
    features: ['Brand voice training', 'SEO optimization built-in', 'Multi-channel publishing', 'A/B test copy variants', 'Performance analytics loop'],
    metric: { label: '5x', sub: 'content output velocity' },
  },
  {
    id: 'ecommerce',
    icon: <ShoppingCart size={28} />,
    color: 'blue',
    title: 'E-commerce Operations Agent',
    tag: null,
    tagline: 'Automate inventory, orders, and customer journeys',
    desc: 'Handles order management, inventory reordering, abandoned cart recovery, and personalized product recommendations. Integrates with Shopify, WooCommerce, and custom stacks.',
    features: ['Abandoned cart recovery flows', 'Dynamic pricing recommendations', 'Inventory reorder automation', 'Return & refund handling', 'Personalized upsell sequences'],
    metric: { label: '+22%', sub: 'average order value' },
  },
  {
    id: 'developer-tools',
    icon: <Bot size={28} />,
    color: 'violet',
    title: 'Custom Agent Builder',
    tag: 'For Developers',
    tagline: 'Build anything with our SDK and visual tools',
    desc: 'Full-stack agent development framework. TypeScript/Python SDKs, REST APIs, webhooks, and a visual builder for non-technical teammates. Deploy custom agents in hours, not weeks.',
    features: ['TypeScript & Python SDKs', 'Visual no-code builder', 'Webhook & event triggers', 'Custom tool integrations', 'Self-hosted deployment option'],
    metric: { label: '10x', sub: 'faster agent development' },
  },
];

const colorMap: Record<string, { icon: string; badge: string; metric: string; glow: string }> = {
  blue: {
    icon: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    badge: 'bg-blue-500/20 text-blue-400 border-blue-500/40',
    metric: 'text-blue-400',
    glow: 'hover:border-blue-500/30 hover:bg-blue-500/[0.03]',
  },
  violet: {
    icon: 'bg-violet-500/15 text-violet-400 border-violet-500/30',
    badge: 'bg-violet-500/20 text-violet-400 border-violet-500/40',
    metric: 'text-violet-400',
    glow: 'hover:border-violet-500/30 hover:bg-violet-500/[0.03]',
  },
  cyan: {
    icon: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
    badge: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40',
    metric: 'text-cyan-400',
    glow: 'hover:border-cyan-500/30 hover:bg-cyan-500/[0.03]',
  },
  green: {
    icon: 'bg-green-500/15 text-green-400 border-green-500/30',
    badge: 'bg-green-500/20 text-green-400 border-green-500/40',
    metric: 'text-green-400',
    glow: 'hover:border-green-500/30 hover:bg-green-500/[0.03]',
  },
};

export default function NeuralSolutions() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="overflow-hidden bg-[#05050F]">
      <PageHeader
        badge="Solutions"
        title="AI agents for every workflow"
        subtitle="Pre-built, production-ready agent templates for the most common business use cases. Customize and deploy in hours."
      />

      {/* ══════════════════════════════════
          SECTION 1: SOLUTIONS GRID
      ══════════════════════════════════ */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number={1} title="Agent Solutions Catalogue" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((sol, i) => {
              const c = (colorMap[sol.color] ?? colorMap['blue'])!;
              const isOpen = active === sol.id;
              return (
                <Reveal key={sol.id} delay={0.07 * i} direction="up">
                  <GlassCard
                    className={`p-8 h-full cursor-pointer transition-all ${c.glow} ${isOpen ? 'border-blue-500/30' : ''}`}
                    onClick={() => setActive(isOpen ? null : sol.id)}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl border ${c.icon} flex items-center justify-center shrink-0`}>
                        {sol.icon}
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        {sol.tag && (
                          <span className={`text-xs font-bold border px-3 py-1 rounded-full ${c.badge}`}>{sol.tag}</span>
                        )}
                        <div className="text-right">
                          <p className={`text-2xl font-black ${c.metric}`}>{sol.metric.label}</p>
                          <p className="text-xs text-gray-600">{sol.metric.sub}</p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-black text-white mb-2">{sol.title}</h3>
                    <p className={`text-sm font-semibold mb-3 ${c.metric}`}>{sol.tagline}</p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">{sol.desc}</p>

                    {isOpen && (
                      <div className="border-t border-white/[0.06] pt-6 mb-6">
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-4">Key capabilities</p>
                        <ul className="space-y-2.5">
                          {sol.features.map((f, j) => (
                            <li key={j} className="flex items-center gap-2.5 text-sm text-gray-400">
                              <CheckCircle size={14} className="text-blue-400 shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <button
                        onClick={(e) => { e.stopPropagation(); setActive(isOpen ? null : sol.id); }}
                        className="text-xs text-gray-500 hover:text-white transition-colors flex items-center gap-1"
                      >
                        {isOpen ? 'Show less' : 'Show capabilities'}
                        <ArrowRight size={12} className={`transition-transform ${isOpen ? '-rotate-90' : 'rotate-90'}`} />
                      </button>
                      <Link
                        to="/neuralforge/contact"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        Deploy this agent <ArrowRight size={14} />
                      </Link>
                    </div>
                  </GlassCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 2: INTEGRATION SHOWCASE
      ══════════════════════════════════ */}
      <section className="py-24 bg-[#07070F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number={2} title="Integrations" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="right">
              <GlowBadge className="mb-6">200+ Native Integrations</GlowBadge>
              <h2 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mt-2">
                Plug into your existing stack
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                NeuralForge agents connect to your databases, SaaS tools, and internal APIs out of the box. No custom middleware. No ETL pipelines. Just connect and deploy.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Slack', 'Notion', 'Salesforce', 'HubSpot', 'Stripe', 'PostgreSQL', 'Snowflake', 'Shopify', 'Zendesk', 'Jira', '+190 more'].map((tool) => (
                  <span key={tool} className="text-xs text-gray-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                    {tool}
                  </span>
                ))}
              </div>
              <Link
                to="/neuralforge/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-3 rounded-full font-bold text-sm hover:from-blue-500 hover:to-violet-500 transition-all"
              >
                Browse All Integrations <ArrowRight size={16} />
              </Link>
            </Reveal>

            <Reveal direction="left" delay={0.2}>
              <GlassCard className="p-2">
                <Placeholder label="Integration Hub / Visual Diagram" className="h-[400px] !rounded-xl" />
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 3: COMPARISON TABLE
      ══════════════════════════════════ */}
      <section className="py-24 bg-[#05050F]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number={3} title="NeuralForge vs. Building In-House" />
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-black mb-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                Why not just build it yourself?
              </h2>
              <p className="text-gray-400">We asked the same question. Here's what we found.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <GlassCard className="overflow-hidden">
              <div className="grid grid-cols-3 bg-white/[0.04] border-b border-white/[0.08] px-6 py-4">
                <div className="text-sm font-semibold text-gray-400">Capability</div>
                <div className="text-center">
                  <span className="text-sm font-bold text-blue-400 flex items-center justify-center gap-1.5">
                    <Zap size={14} /> NeuralForge
                  </span>
                </div>
                <div className="text-center text-sm font-semibold text-gray-600">In-House Build</div>
              </div>
              {[
                ['Time to first agent', '< 10 minutes', '2-4 weeks'],
                ['Production-ready observability', '✓ Built-in', '❌ Build it yourself'],
                ['Long-term memory', '✓ Managed', '❌ Custom vector DB setup'],
                ['Multi-agent orchestration', '✓ Visual builder', '❌ Complex infra'],
                ['Uptime SLA', '99.99% guaranteed', 'You own this'],
                ['Model-agnostic (GPT, Claude, etc.)', '✓ 12+ models', '❌ One at a time'],
                ['Ongoing maintenance', '✓ We handle it', '❌ Engineering cost'],
              ].map(([cap, nf, diy], i) => (
                <div key={i} className="grid grid-cols-3 px-6 py-4 border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors">
                  <div className="text-sm text-gray-400">{cap}</div>
                  <div className="text-center text-sm text-green-400 font-medium">{nf}</div>
                  <div className="text-center text-sm text-gray-600">{diy}</div>
                </div>
              ))}
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
