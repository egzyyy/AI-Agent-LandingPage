import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const font = { fontFamily: '"Lora", serif' };

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

const team = [
  { name: 'Sofia Yusof',  role: 'Creative Director' },
  { name: 'Rachel Teh',   role: 'Stylist' },
  { name: 'Mei Ling',     role: 'Seamstress' },
  { name: 'Zara Hanif',   role: 'Sales Lead' },
];

const milestones = [
  { year: '2018', desc: 'Velvet & Co opens as a pop-up concept store in Bukit Bintang, quickly selling out its first curation within two weeks.' },
  { year: '2020', desc: 'Demand exceeds expectations. We open a permanent boutique and launch our custom-order label, growing to 10 in-house designers.' },
  { year: '2023', desc: 'Expansion to five cities across Malaysia and Singapore, carrying 2,000+ pieces from over 40 independent Asian designers.' },
];

export default function VelvetCoAbout() {
  return (
    <div style={font}>
      {/* Page header */}
      <section className="bg-neutral-50 border-b border-neutral-100 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-2">Our Story</p>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">Fashion With Purpose</h1>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80"
              alt="Velvet & Co store"
              className="rounded-2xl w-full aspect-3/4 object-cover shadow-md"
            />
          </Reveal>
          <div className="space-y-6">
            <Reveal delay={100}>
              <p className="text-neutral-600 leading-relaxed">
                Velvet &amp; Co opened in 2018 as a curated concept store in Bukit Bintang, founded by Sofia Yusof with a mission to make well-crafted fashion accessible to every woman. What started as a pop-up grew into a permanent boutique within six months.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-neutral-600 leading-relaxed">
                Today, we carry over 2,000 pieces from 40+ independent designers across Asia, alongside our own custom-order label. We've expanded to five cities, always keeping craftsmanship and personal style at the centre.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="text-neutral-600 leading-relaxed">
                We believe getting dressed should feel joyful — not overwhelming. Our stylists are here to help you find pieces that truly feel like you.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <Link to="/velvet-co/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-md transition-colors mt-2">
                Book a Styling Session <ChevronRight size={15} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-2">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12">How We Got Here</h2>
          </Reveal>
          <div className="relative border-l-2 border-violet-200 pl-8 space-y-10">
            {milestones.map((m, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="relative">
                  <div className="absolute -left-[2.85rem] top-1 w-5 h-5 rounded-full bg-violet-600 border-4 border-white shadow" />
                  <p className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-1">{m.year}</p>
                  <p className="text-neutral-600 leading-relaxed max-w-xl">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl font-bold text-neutral-900 mb-10">What We Stand For</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Mission', text: 'Help every customer discover their signature style.' },
              { label: 'Vision',  text: 'Fashion that is personal, sustainable, and joyful.' },
              { label: 'Values',  text: 'Craftsmanship · Inclusivity · Originality' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="p-6 bg-neutral-50 rounded-xl border border-neutral-100 hover:border-violet-200 transition-colors">
                  <p className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-3">{item.label}</p>
                  <p className="text-neutral-700 leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-2">Our People</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-10">Meet the Team</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-white rounded-xl overflow-hidden border border-neutral-100 hover:border-violet-200 transition-colors text-center">
                  <div className="h-48 bg-violet-50 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-violet-100 flex items-center justify-center text-2xl font-bold text-violet-600">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-neutral-800">{member.name}</p>
                    <p className="text-sm text-neutral-500 mt-0.5">{member.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-violet-600">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <Reveal>
            <h2 className="text-3xl font-bold mb-4">Find Your Signature Style</h2>
            <p className="text-violet-100 mb-8">Our stylists are ready to help you build a wardrobe you'll love wearing every day.</p>
            <Link to="/velvet-co/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-white text-violet-600 font-semibold rounded-md hover:bg-violet-50 transition-colors">
              Shop Now <ChevronRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
