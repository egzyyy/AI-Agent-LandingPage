import { motion } from 'motion/react';

/* ─── Shared helpers for NeuralForge AI Agent pages ─── */

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function Reveal({ children, className = '', delay = 0, direction = 'up' }: RevealProps) {
  const dirs = { up: { y: 30 }, down: { y: -30 }, left: { x: 30 }, right: { x: -30 } };
  return (
    <motion.div
      initial={{ opacity: 0, ...dirs[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Glowing chip/badge label */
export function GlowBadge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 border border-blue-500/40 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-[0.15em] px-4 py-2 rounded-full backdrop-blur-sm ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shrink-0" />
      {children}
    </span>
  );
}

/** Section label with numbered indicator */
export function SectionLabel({ number, title }: { number: number; title: string }) {
  return (
    <Reveal>
      <div className="flex items-center gap-3 mb-8">
        <span className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-sm font-bold flex items-center justify-center shrink-0">
          {number}
        </span>
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500">
          Section {number} — {title}
        </span>
        <div className="grow h-px bg-white/5" />
      </div>
    </Reveal>
  );
}

/** Glassmorphism card container */
export function GlassCard({ children, className = '', onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  return (
    <div className={`bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm rounded-2xl ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}

/** Page hero header (dark variant with gradient text) */
export function PageHeader({ title, subtitle, badge }: { title: string; subtitle: string; badge?: string }) {
  return (
    <section className="relative py-28 overflow-hidden bg-[#05050F]">
      {/* Grid bg */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      {/* Radial glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Reveal>
          {badge && <GlowBadge className="mb-6">{badge}</GlowBadge>}
          <h1 className="text-5xl md:text-6xl font-black mb-6 mt-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent leading-tight">
            {title}
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">{subtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}

/** Placeholder wireframe block */
export function Placeholder({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div className={`border border-dashed border-white/10 bg-white/[0.02] rounded-xl flex items-center justify-center p-4 ${className}`}>
      <span className="text-xs font-mono uppercase tracking-wider text-gray-600">{label}</span>
    </div>
  );
}
