import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const font = { fontFamily: '"Playfair Display", serif' };

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
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
    <>
      {/* Page header */}
      <section className="bg-neutral-50 border-b border-neutral-100 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-2">Our Story</p>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">Fashion With Purpose</h1>
          </Reveal>
        </div>
      </section>

      {/* Story — About C: Text left + 2×2 stat cards right, image strip below */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-start mb-12">
            <div>
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-3">Our Story</p>
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6" style={font}>Fashion With Purpose</h2>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Velvet &amp; Co opened in 2018 as a curated concept store in Bukit Bintang, founded by Sofia Yusof with a mission to make well-crafted fashion accessible to every woman.
                </p>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  We believe getting dressed should feel joyful — not overwhelming. Our stylists are here to help you find pieces that truly feel like you.
                </p>
                <Link to="/velvet-co/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-full transition-colors">
                  Book a Styling Session <ChevronRight size={15} />
                </Link>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '2,000+', label: 'Pieces' },
                { val: '40+',    label: 'Designers' },
                { val: '5',      label: 'Cities' },
                { val: '8',      label: 'Years Open' },
              ].map((s, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className={`rounded-2xl p-6 ${i === 0 ? 'bg-violet-600 text-white' : 'bg-neutral-50 border border-neutral-100'}`}>
                    <p className={`text-3xl font-black mb-1 ${i === 0 ? 'text-white' : 'text-violet-600'}`}>{s.val}</p>
                    <p className={`text-xs font-semibold uppercase tracking-wider ${i === 0 ? 'text-violet-100' : 'text-neutral-500'}`}>{s.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal>
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80"
              alt="Velvet & Co store"
              className="w-full h-48 object-cover rounded-2xl"
            />
          </Reveal>
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

      {/* Mission / Vision / Values — Variant E: Featured Mission + Stacked V+V */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-3">What Drives Us</p>
              <h2 className="text-3xl font-bold text-neutral-900" style={font}>Our Core Beliefs</h2>
            </div>
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left — featured mission card */}
            <Reveal>
              <div className="bg-violet-600 rounded-3xl p-10 flex flex-col justify-between text-white min-h-80">
                <span className="inline-block text-xs font-bold text-violet-200 uppercase tracking-widest mb-6 bg-white/10 px-3 py-1 rounded-full self-start">Mission</span>
                <div>
                  <h3 className="text-3xl font-bold mb-4 leading-tight" style={font}>Discover Your Signature Style</h3>
                  <p className="text-violet-100 text-sm leading-relaxed">Help every customer discover their signature style — through curated fashion that is personal, sustainable, and joyful.</p>
                </div>
              </div>
            </Reveal>
            {/* Right — Vision + Values stacked */}
            <div className="flex flex-col gap-6">
              {[
                { label: 'Vision',  heading: 'Fashion for Everyone', text: 'Fashion that is personal, sustainable, and joyful — for women at every stage of life.' },
                { label: 'Values',  heading: 'Craftsmanship · Inclusivity · Originality', text: 'Three words that guide every piece we carry, every fitting session, and every interaction with our clients.' },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="bg-white rounded-3xl p-8 border border-neutral-100 hover:border-violet-200 hover:shadow-md transition-all flex items-start gap-5 flex-1">
                    <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center shrink-0 text-lg font-black">
                      {i === 0 ? '👁' : '✦'}
                    </div>
                    <div>
                      <span className="inline-block text-xs font-bold text-violet-600 uppercase tracking-widest mb-2 bg-violet-50 px-2 py-0.5 rounded-full">{item.label}</span>
                      <h3 className="text-lg font-bold mb-2 text-black" style={font}>{item.heading}</h3>
                      <p className="text-neutral-500 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
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
    </>
  );
}
