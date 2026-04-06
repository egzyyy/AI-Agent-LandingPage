import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal, SectionLabel, GlassCard, PageHeader, GlowBadge } from '../../components/neuralforge/NeuralHelpers';

function FaqItem({ question, answer, isOpen, onClick }: {
  question: string; answer: string; isOpen: boolean; onClick: () => void;
}) {
  return (
    <div className="border-b border-white/[0.06] last:border-b-0">
      <button
        className="w-full text-left py-5 flex justify-between items-center focus:outline-none group"
        onClick={onClick}
      >
        <span className="text-base font-semibold text-gray-200 group-hover:text-white transition-colors pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`shrink-0 transition-colors ${isOpen ? 'text-blue-400' : 'text-gray-600 group-hover:text-gray-400'}`}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-400 leading-relaxed text-sm">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function NeuralFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    {
      title: 'Getting Started',
      color: 'text-blue-400',
      items: [
        {
          q: 'Do I need a machine learning background to use NeuralForge?',
          a: 'Not at all. NeuralForge is designed for software engineers and technical teams. If you can write a REST API call, you can build your first agent. Our visual builder also lets non-engineers configure agents without writing code.',
        },
        {
          q: 'How long does it take to build and deploy my first agent?',
          a: 'Most users have a working agent deployed in under 30 minutes. Simple agents (e.g., a support FAQ bot) take under 10 minutes. Complex multi-agent systems with custom integrations typically take a day or two.',
        },
        {
          q: 'Which LLM models does NeuralForge support?',
          a: 'We support all major providers: OpenAI (GPT-4o, GPT-4-turbo), Anthropic (Claude 3.5 Sonnet, Opus), Google (Gemini 1.5 Pro), Meta (Llama 3), Mistral, and more. You can switch models per-agent or even mid-conversation.',
        },
      ],
    },
    {
      title: 'Pricing & Plans',
      color: 'text-violet-400',
      items: [
        {
          q: 'What counts as a "task" for billing purposes?',
          a: 'A task is one discrete unit of agent work — e.g., responding to a support ticket, sending an email, querying a database, or completing a tool call. Multi-step reasoning within a single agent invocation counts as one task.',
        },
        {
          q: 'Is the free tier actually free? What are the limits?',
          a: 'Yes, forever free. The Developer tier gives you 3 agents, 10,000 tasks per month, and 7-day memory retention. No credit card required. It\'s genuinely free — not a trial.',
        },
        {
          q: 'Can I upgrade or downgrade mid-month?',
          a: 'Yes. Upgrades take effect immediately and are prorated. Downgrades take effect at the next billing cycle. There are no long-term contracts on Pro — cancel anytime.',
        },
        {
          q: 'Do you offer discounts for startups or non-profits?',
          a: 'Yes — we offer a 50% discount for early-stage startups (under $1M ARR) and qualifying non-profits. Reach out to our team with details about your organization.',
        },
      ],
    },
    {
      title: 'Technical & Security',
      color: 'text-cyan-400',
      items: [
        {
          q: 'Is my data used to train your models?',
          a: 'Never. Your agent conversations, tool outputs, and data are completely private. We do not use customer data for model training. All data is encrypted at rest (AES-256) and in transit (TLS 1.3).',
        },
        {
          q: 'Can I self-host NeuralForge?',
          a: 'Yes — self-hosted deployment is available on Enterprise plans. You can run the full platform on your own cloud (AWS, GCP, Azure) or on-prem. We provide Helm charts and Terraform modules.',
        },
        {
          q: 'What compliance certifications do you have?',
          a: 'We are SOC2 Type II certified. HIPAA Business Associate Agreements (BAA) are available on Enterprise plans. GDPR data processing agreements are available for EU customers on all paid plans.',
        },
        {
          q: 'What happens if an agent fails or produces incorrect output?',
          a: 'Every agent execution is fully traced and logged. You can set up fallback handlers, human-in-the-loop escalation, and confidence thresholds. Our observability suite shows exactly where and why a failure occurred so you can fix it fast.',
        },
      ],
    },
    {
      title: 'Platform & Integrations',
      color: 'text-green-400',
      items: [
        {
          q: 'Can I connect NeuralForge to my own database or internal APIs?',
          a: 'Yes. You can define custom tools that call any REST API, GraphQL endpoint, or database. Our SDK lets you wrap any function as a tool your agent can use. We also support MCP (Model Context Protocol) for advanced tool integrations.',
        },
        {
          q: 'How does multi-agent orchestration work?',
          a: 'You can define supervisor agents that delegate tasks to specialist sub-agents. Agents can pass context, share memory, and spawn new agents dynamically. The visual builder shows the agent graph in real time, and our tracing tool shows every inter-agent call.',
        },
      ],
    },
  ];

  let absIdx = -1;

  return (
    <div className="overflow-hidden bg-[#05050F]">
      <PageHeader
        badge="FAQ"
        title="Frequently asked questions"
        subtitle="Everything engineers and founders ask before committing to NeuralForge."
      />

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number={1} title="Grouped Accordion" />

          <Reveal delay={0.1}>
            <GlassCard className="p-8 md:p-12">
              {categories.map((cat, catIdx) => (
                <Reveal key={catIdx} delay={0.1 * catIdx} direction="up" className="mb-10 last:mb-0">
                  <h2 className={`text-xs font-mono uppercase tracking-[0.18em] mb-6 flex items-center font-bold ${cat.color}`}>
                    <span className="w-6 h-px bg-current mr-3 opacity-60" />
                    {cat.title}
                  </h2>
                  <div>
                    {cat.items.map((item) => {
                      absIdx++;
                      const curr = absIdx;
                      return (
                        <FaqItem
                          key={curr}
                          question={item.q}
                          answer={item.a}
                          isOpen={openIndex === curr}
                          onClick={() => setOpenIndex(openIndex === curr ? null : curr)}
                        />
                      );
                    })}
                  </div>
                </Reveal>
              ))}
            </GlassCard>
          </Reveal>

          {/* Bottom CTA */}
          <Reveal delay={0.3} direction="up" className="mt-16">
            <GlassCard className="p-10 text-center border-blue-500/20 bg-blue-500/[0.04]">
              <MessageCircle size={36} className="mx-auto mb-4 text-blue-400" />
              <GlowBadge className="mb-4">Still have questions?</GlowBadge>
              <h3 className="text-2xl font-black text-white mb-2 mt-4">Talk to a real engineer</h3>
              <p className="text-gray-400 mb-6 text-sm max-w-sm mx-auto">
                We don't outsource support. Every support ticket is answered by an engineer who has built agents themselves.
              </p>
              <Link
                to="/neuralforge/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-0.5"
              >
                Contact Support <ArrowRight size={16} />
              </Link>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
