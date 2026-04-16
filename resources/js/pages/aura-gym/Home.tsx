import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Star, Dumbbell } from 'lucide-react';

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

const font = { fontFamily: '"Outfit", sans-serif' };

const stats = [
  { value: '800+', label: 'Members' },
  { value: '20', label: 'Trainers' },
  { value: '5,000 sqft', label: 'Space' },
  { value: '6', label: 'Years Open' },
];

const servicesPreview = [
  { name: 'Monthly Membership', desc: 'Full facility access', price: 'RM 99' },
  { name: 'Personal Training', desc: 'One-on-one coaching', price: 'RM 120/hr' },
  { name: 'Group Class', desc: 'HIIT, yoga & more', price: 'RM 25' },
];

const testimonials = [
  {
    quote: "Nothing comes close to the coaching quality here. I've hit goals I never thought possible.",
    name: 'Kevin Ng',
    role: 'Member since 2021',
    avatar: 'photo-1580489944761-15a19d654956',
  },
  {
    quote: "I've lost 12kg in 4 months and feel stronger than ever. The trainers genuinely care.",
    name: 'Rina Aziz',
    role: 'Personal Training',
    avatar: 'photo-1438761681033-6461ffad8d80',
  },
  {
    quote: "The community here is unlike anything I've experienced. The classes are genuinely fun.",
    name: 'Daniel Chua',
    role: 'Group Class Member',
    avatar: 'photo-1534528741775-53994a69daeb',
  },
];

export default function AuraGymHome() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[calc(100vh-72px)] flex items-end pb-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1534438327431-f9acd87e5e11?auto=format&fit=crop&w=1800&q=80"
          alt="Aura Gym training floor"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <Reveal>
            <span className="inline-block bg-amber-600 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              💪 Est. 2019 · Mont Kiara, KL
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none mb-6" style={font}>
              Train Hard,<br />
              <em className="text-amber-400 not-italic">Live Strong.</em>
            </h1>
            <p className="text-white/70 text-lg max-w-xl mb-10 leading-relaxed">
              State-of-the-art equipment, expert trainers, and a community that keeps you motivated. Your transformation starts today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/aura-gym/contact">
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold text-sm transition-all inline-flex items-center gap-2">
                  Start Free Trial <ArrowRight size={16} />
                </button>
              </Link>
              <Link to="/aura-gym/services">
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-sm transition-all">
                  View Services
                </button>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Social proof pill */}
        <div className="hidden md:block absolute bottom-8 right-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 flex items-center gap-3">
            <div className="flex -space-x-2">
              {['photo-1494790108377-be9c29b29330', 'photo-1438761681033-6461ffad8d80', 'photo-1531746020798-e6953c6e8e04'].map((id, i) => (
                <img
                  key={i}
                  src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=40&h=40&q=80`}
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  alt=""
                />
              ))}
            </div>
            <div>
              <p className="text-white text-xs font-semibold">800+ Members</p>
              <div className="flex gap-0.5 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={9} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-800">
            {stats.map((stat, i) => (
              <Reveal key={i} delay={i * 0.08} className="text-center px-8 py-10">
                <p className="text-4xl md:text-5xl font-black mb-2 text-white">{stat.value}</p>
                <p className="text-neutral-500 text-xs uppercase tracking-widest">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4" style={font}>Our Services</h2>
            <p className="text-neutral-500 max-w-xl mx-auto text-sm">Transparent pricing, no hidden fees.</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {servicesPreview.map((service, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-8 border border-neutral-100 hover:border-amber-200 hover:shadow-md transition-all h-full flex flex-col">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center mb-5">
                    <Dumbbell size={20} className="text-amber-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={font}>{service.name}</h3>
                  <p className="text-neutral-500 text-sm flex-1">{service.desc}</p>
                  <p className="text-amber-600 font-extrabold text-xl mt-4">{service.price}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center">
            <Link to="/aura-gym/services">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold text-sm transition-all inline-flex items-center gap-2">
                View All Services <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">Member Stories</p>
            <h2 className="text-4xl font-extrabold tracking-tight" style={font}>What Our Members Say</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-100 h-full flex flex-col">
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={13} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-neutral-700 text-sm leading-relaxed flex-1 mb-6">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://images.unsplash.com/${t.avatar}?auto=format&fit=crop&w=80&h=80&q=80`}
                      className="w-10 h-10 rounded-full object-cover"
                      alt={t.name}
                    />
                    <div>
                      <p className="font-bold text-sm text-black">{t.name}</p>
                      <p className="text-xs text-neutral-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative py-32 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1800&q=80"
          alt="Start your transformation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative max-w-3xl mx-auto px-6 text-center text-white">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5" style={font}>
              Start Your Transformation Today
            </h2>
            <p className="text-white/70 mb-8 text-lg leading-relaxed">
              The hardest part is walking through the door. Let us take care of everything after that.
            </p>
            <Link to="/aura-gym/contact">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full font-semibold text-sm transition-all inline-flex items-center gap-2">
                Start Free Trial <ArrowRight size={16} />
              </button>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
