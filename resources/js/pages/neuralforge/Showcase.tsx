import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Monitor, Layers, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const basicSites = [
  {
    name: 'Bloom Salon',
    slug: 'bloom-salon',
    industry: 'Salon',
    color: 'rose',
    template: 'Basic',
    description: 'Split-hero beauty salon with services grid and testimonials.',
    sections: ['Hero B — Split Panel', 'Stats Bar', 'About A — Image + Text', 'MVV D — Icon Hover Cards', 'Team Grid', 'Services B — Card Grid', 'Testimonials', 'FAQ A — Centered Accordion', 'Contact A — Two-Col Form', 'CTA Banner'],
    accent: '#f43f5e',
    path: '/bloom-salon',
  },
  {
    name: 'Mira Clinic',
    slug: 'mira-clinic',
    industry: 'Clinic',
    color: 'emerald',
    template: 'Basic',
    description: 'Full-screen cinematic hero clinic site with health services.',
    sections: ['Hero A — Cinematic', 'Stats Bar', 'About A — Image + Text', 'MVV A — White Pill Cards', 'Team Grid', 'Services A — Sticky Sidebar', 'Testimonials', 'FAQ A — Centered Accordion', 'Contact A — Two-Col Form', 'CTA Banner'],
    accent: '#10b981',
    path: '/mira-clinic',
  },
  {
    name: 'Ember Table',
    slug: 'ember-table',
    industry: 'Restaurant',
    color: 'amber',
    template: 'Basic',
    description: 'Warm amber-toned restaurant site with menu and reservation form.',
    sections: ['Hero A — Cinematic', 'Stats Bar', 'About B — Full-Width Banner', 'MVV C — Numbered Rows', 'Team Grid', 'Services B — Card Grid', 'Testimonials', 'FAQ A — Centered Accordion', 'Contact A — Two-Col Form', 'CTA Banner'],
    accent: '#d97706',
    path: '/ember-table',
  },
  {
    name: 'Lumino Coffee Co.',
    slug: 'lumino-coffee-co',
    industry: 'Cafe',
    color: 'amber',
    template: 'Basic',
    description: 'Specialty cafe site with sticky menu layout and warm lifestyle imagery.',
    sections: ['Hero A — Cinematic', 'Stats Bar', 'About B — Full-Width Banner', 'MVV D — Icon Hover Cards', 'Team Grid', 'Services B — Card Grid', 'Testimonials', 'FAQ A — Centered Accordion', 'Contact B — Centered Form + Cards', 'CTA Banner'],
    accent: '#d97706',
    path: '/lumino-coffee-co',
  },
];

const standardSites = [
  {
    name: 'Serene Clinic',
    slug: 'serene-clinic',
    industry: 'Clinic',
    color: 'sky',
    template: 'Standard',
    description: '5-page medical clinic site with specialist team and FAQ.',
    sections: ['Home — Hero + Stats + Features + CTA', 'About — Banner + MVV + Team', 'Services — How It Works + Pricing Grid', 'FAQ — Accordion', 'Contact — Form + Info'],
    accent: '#0ea5e9',
    path: '/serene-clinic',
  },
  {
    name: 'Aura Gym',
    slug: 'aura-gym',
    industry: 'Gym',
    color: 'orange',
    template: 'Standard',
    description: '5-page fitness studio site with membership plans and trainers.',
    sections: ['Home — Hero + Stats + Features + CTA', 'About — Banner + MVV + Team', 'Services — How It Works + Pricing Grid', 'FAQ — Accordion', 'Contact — Form + Info'],
    accent: '#f97316',
    path: '/aura-gym',
  },
  {
    name: 'Nori Restaurant',
    slug: 'nori-restaurant',
    industry: 'Restaurant',
    color: 'amber',
    template: 'Standard',
    description: '5-page fine dining restaurant site with curated menu and reservation.',
    sections: ['Home — Hero + Stats + Features + CTA', 'About — Banner + MVV + Team', 'Menu & Pricing — How It Works + Grid', 'FAQ — Accordion', 'Contact — Reservation Form'],
    accent: '#d97706',
    path: '/nori-restaurant',
  },
  {
    name: 'Velvet & Co',
    slug: 'velvet-co',
    industry: 'Boutique',
    color: 'violet',
    template: 'Standard',
    description: '5-page luxury fashion boutique with custom orders and styling.',
    sections: ['Home — Hero + Stats + Features + CTA', 'About — Banner + MVV + Team', 'Services — How It Works + Pricing Grid', 'FAQ — Accordion', 'Contact — Form + Info'],
    accent: '#7c3aed',
    path: '/velvet-co',
  },
];

const sectionVariants = [
  {
    category: 'Hero Variants',
    items: [
      { label: 'Hero A — Cinematic Full-Screen', desc: 'Full-viewport image with dark gradient overlay, badge pill, headline, subtext, and CTA at bottom-left. Used by: Mira Clinic, Ember Table, Lumino Coffee Co., Aura Gym, Nori Restaurant.' },
      { label: 'Hero B — Split Panel', desc: 'White left panel with all text content + image filling the right half. Floating header adapts to white background. Used by: Bloom Salon, Serene Clinic.' },
      { label: 'Hero C — Centered Frost', desc: 'Full-bleed background image with a centred frosted-glass card housing the badge, headline, subtext, and dual CTAs. Used by: Velvet & Co.' },
    ],
  },
  {
    category: 'About Variants',
    items: [
      { label: 'About A — Image + Text', desc: 'Full-width image above, followed by 3-column descriptive paragraphs and a founding story. Used by: Bloom Salon, Mira Clinic.' },
      { label: 'About B — Full-Width Banner', desc: 'Wide cinematic banner image (480px tall) followed by 3-column text layout with milestone timeline and team portrait grid. Used by: Ember Table, Lumino Coffee Co., Aura Gym, Nori Restaurant.' },
      { label: 'About C — Text Left + 2×2 Stat Cards', desc: 'Founding paragraph and CTA on the left; four stat tiles in a 2×2 grid on the right, first tile accent-coloured. Full-width image strip below. Used by: Velvet & Co, Serene Clinic.' },
    ],
  },
  {
    category: 'Services Variants',
    items: [
      { label: 'Services A — Sticky Sidebar + List', desc: 'Left sticky sidebar with intro text, brand icon, and CTA. Right side scrollable price-row list with hover accent borders. Used by: Mira Clinic.' },
      { label: 'Services B — 3-Column Card Grid', desc: 'Each service as a card with icon, name, one-line description, price, and CTA. "How It Works" steps above the grid. Used by: Bloom Salon, Ember Table, Lumino Coffee Co.' },
      { label: 'Services C — Full-Width Numbered Rows', desc: 'Services listed as large numbered horizontal rows across the full container width, with price and description on opposite ends. Used by: Aura Gym, Nori Restaurant, Serene Clinic, Velvet & Co.' },
    ],
  },
  {
    category: 'FAQ Variants',
    items: [
      { label: 'FAQ A — Centered Accordion', desc: 'Single-column accordion on a white background. Questions expand in-place with AnimatePresence height animation. Used by: Bloom Salon, Mira Clinic, Ember Table, Lumino Coffee Co., Serene Clinic, Nori Restaurant.' },
      { label: 'FAQ B — Two-Column Split', desc: 'Question list as clickable pills on the left; sticky animated answer panel on the right that fades between selections. Used by: Velvet & Co.' },
      { label: 'FAQ C — Dark Accordion', desc: 'Full-bleed dark (neutral-900) background. Accordion items with subtle white/8 borders that highlight amber on open. Used by: Aura Gym.' },
    ],
  },
  {
    category: 'Contact Variants',
    items: [
      { label: 'Contact A — Two-Col: Details + Form', desc: 'Left column has address, phone, email, hours info cards. Right column has the enquiry form. Used by: Bloom Salon, Mira Clinic, Ember Table, Nori Restaurant, Serene Clinic.' },
      { label: 'Contact B — Centered Form + Info Cards', desc: 'Centred full-width form card at top; four info icon-cards in a horizontal row below. Used by: Lumino Coffee Co., Velvet & Co.' },
      { label: 'Contact C — Dark Full-Width', desc: 'Full-bleed dark (neutral-900) layout. 2×2 info cards on the left, frosted glass form card on the right with accent-coloured focus states. Used by: Aura Gym.' },
    ],
  },
  {
    category: 'MVV Variants',
    items: [
      { label: 'MVV A — White Pill Cards', desc: 'Three white rounded cards side-by-side, each with a small accent icon, label badge, heading, and description. Used by: Mira Clinic.' },
      { label: 'MVV B — Dark Strip + Accent Top Border', desc: 'Dark neutral-900 background. Cards with a 4px accent-coloured top border, subtle glass fill, and badge labels. Used by: Aura Gym.' },
      { label: 'MVV C — Large Numbered Rows', desc: 'Full-width rows with a giant faint accent number on the left and heading + text on the right. Hover lifts the card border. Used by: Ember Table, Nori Restaurant.' },
      { label: 'MVV D — Icon Cards — Hover Filled', desc: 'Three equal cards with a top icon container. On hover, the card fills with the brand accent colour and text inverts to white. Used by: Bloom Salon, Lumino Coffee Co.' },
      { label: 'MVV E — Featured Mission + Stacked V+V', desc: 'Large accent-filled Mission card on the left; Vision and Values stacked as two smaller white cards on the right. Used by: Velvet & Co.' },
    ],
  },
];

function SiteCard({ site, onClick }: { site: typeof basicSites[0]; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group bg-white/3 border border-white/8 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      {/* Preview iframe */}
      <div className="relative h-52 bg-neutral-900 overflow-hidden">
        <iframe
          src={site.path}
          title={site.name}
          className="absolute inset-0 w-full h-full border-0 pointer-events-none"
          style={{ transform: 'scale(0.5)', transformOrigin: 'top left', width: '200%', height: '200%' }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white backdrop-blur-sm border border-white/10">
            {site.template}
          </span>
          <span className="px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm border text-white"
            style={{ backgroundColor: site.accent + '33', borderColor: site.accent + '66' }}>
            {site.industry}
          </span>
        </div>
        <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20">
          <ExternalLink size={13} />
        </button>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="text-white font-bold text-base mb-1">{site.name}</h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-4">{site.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {site.sections.slice(0, 3).map((s) => (
            <span key={s} className="px-2 py-0.5 rounded-md bg-white/5 text-gray-400 text-[10px] font-medium border border-white/6">
              {s.split(' — ')[0]}
            </span>
          ))}
          {site.sections.length > 3 && (
            <span className="px-2 py-0.5 rounded-md bg-white/5 text-gray-400 text-[10px] font-medium border border-white/6">
              +{site.sections.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function PreviewModal({ site, onClose }: { site: typeof basicSites[0]; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-200 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="w-full max-w-6xl bg-[#0A0A1A] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="text-gray-400 text-sm font-mono">localhost/{site.slug}</span>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to={site.path}
                target="_blank"
                className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink size={12} /> Open full page
              </Link>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
              >
                <X size={15} />
              </button>
            </div>
          </div>

          {/* Iframe */}
          <div className="flex">
            <div className="flex-1 h-[70vh] overflow-hidden bg-white">
              <iframe
                src={site.path}
                title={site.name}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            {/* Sidebar — sections */}
            <div className="w-56 border-l border-white/[0.06] p-4 overflow-y-auto">
              <p className="text-[10px] uppercase tracking-widest font-bold text-gray-600 mb-3">Sections</p>
              <div className="space-y-1.5">
                {site.sections.map((s, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <ChevronRight size={12} className="text-gray-600 shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-xs leading-relaxed">{s}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <p className="text-[10px] uppercase tracking-widest font-bold text-gray-600 mb-2">Template</p>
                <span className="px-2 py-1 rounded-md text-xs font-semibold bg-white/5 text-white border border-white/10">
                  {site.template}
                </span>
              </div>
              <div className="mt-3">
                <p className="text-[10px] uppercase tracking-widest font-bold text-gray-600 mb-2">Industry</p>
                <span className="px-2 py-1 rounded-md text-xs font-semibold border"
                  style={{ backgroundColor: site.accent + '22', borderColor: site.accent + '55', color: site.accent }}>
                  {site.industry}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function NeuralShowcase() {
  const [selected, setSelected] = useState<typeof basicSites[0] | null>(null);
  const allSites = [...basicSites, ...standardSites];

  return (
    <>
      {selected && <PreviewModal site={selected} onClose={() => setSelected(null)} />}

      {/* ── Header ── */}
      <section className="pt-20 pb-16 border-b border-white/[0.06] relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-blue-900/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-5">
              <Layers size={12} /> AI-Generated Sites
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-4">
              Design <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-violet-400">Showcase</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              Every site below was scaffolded by an AI agent using the basic or standard template. Click any card to preview it live.
            </p>
          </motion.div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 mt-10">
            {[
              { val: '8', label: 'Sites Built' },
              { val: '2', label: 'Templates' },
              { val: '6', label: 'Industries' },
              { val: '6', label: 'Section Categories' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-black text-white">{s.val}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Basic Template Sites ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div>
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">Single-Page</p>
              <h2 className="text-3xl font-black text-white">Basic Template Sites</h2>
            </div>
            <span className="ml-auto text-xs text-gray-600 border border-white/6 px-3 py-1.5 rounded-full">4 sites</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {basicSites.map((site) => (
              <SiteCard key={site.slug} site={site} onClick={() => setSelected(site)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Standard Template Sites ── */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div>
              <p className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-1">Multi-Page</p>
              <h2 className="text-3xl font-black text-white">Standard Template Sites</h2>
            </div>
            <span className="ml-auto text-xs text-gray-600 border border-white/6 px-3 py-1.5 rounded-full">4 sites</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {standardSites.map((site) => (
              <SiteCard key={site.slug} site={site} onClick={() => setSelected(site)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Section Variants ── */}
      <section className="py-20 border-t border-white/6 bg-white/1">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2">Section System</p>
            <h2 className="text-3xl font-black text-white mb-3">Design Variants</h2>
            <p className="text-gray-500 text-sm max-w-lg">Each industry auto-selects from these section variants based on its template type.</p>
          </motion.div>

          <div className="space-y-10">
            {sectionVariants.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.1 }}
              >
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">{group.category}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {group.items.map((item) => (
                    <div key={item.label} className="bg-white/3 border border-white/7 rounded-2xl p-6 hover:border-white/15 transition-all">
                      <div className="flex items-start gap-3">
                        <Monitor size={16} className="text-blue-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white font-semibold text-sm mb-2">{item.label}</p>
                          <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-black text-white mb-4">Generate Your Own Site</h2>
            <p className="text-gray-400 mb-8">Use the AI generator to create a new business site from scratch in seconds.</p>
            <Link to="/neuralforge/generate">
              <button className="bg-linear-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-10 py-4 rounded-full font-bold text-sm transition-all shadow-lg shadow-blue-900/30 inline-flex items-center gap-2">
                Try the Generator <ExternalLink size={15} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
