import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles, Download, RotateCcw, Loader2, AlertCircle,
  Building2, FileText, Palette, MapPin, Phone, Mail, Layers
} from 'lucide-react';
import axios from 'axios';

/* ── Types ── */
interface FormData {
  businessName: string;
  businessType: string;
  tagline: string;
  description: string;
  services: string;
  location: string;
  phone: string;
  email: string;
  primaryColor: string;
  secondaryColor: string;
}

type Stage = 'form' | 'loading' | 'preview' | 'error';

/* ── Small UI primitives ── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
      {children}
    </label>
  );
}

function Input({
  value, onChange, placeholder, type = 'text', required,
}: {
  value: string; onChange: (v: string) => void;
  placeholder?: string; type?: string; required?: boolean;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/60 focus:bg-blue-500/[0.04] transition-all"
    />
  );
}

function Textarea({
  value, onChange, placeholder, rows = 3, required,
}: {
  value: string; onChange: (v: string) => void;
  placeholder?: string; rows?: number; required?: boolean;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      required={required}
      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/60 focus:bg-blue-500/[0.04] transition-all resize-none"
    />
  );
}

function ColorField({
  label, value, onChange, icon,
}: {
  label: string; value: string; onChange: (v: string) => void; icon: React.ReactNode;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="flex items-center gap-3">
        <div className="relative">
          <input
            type="color"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-10 h-10 rounded-lg cursor-pointer border border-white/10 bg-transparent p-0.5"
          />
        </div>
        <div className="flex-1 flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3">
          <span className="text-gray-500">{icon}</span>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="flex-1 bg-transparent text-sm text-white focus:outline-none font-mono"
          />
        </div>
      </div>
    </div>
  );
}

function SectionHeader({
  icon, title,
}: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/[0.06]">
      <span className="text-blue-400">{icon}</span>
      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{title}</span>
    </div>
  );
}

/* ── Main page ── */
export default function NeuralGenerate() {
  const [form, setForm] = useState<FormData>({
    businessName: '',
    businessType: '',
    tagline: '',
    description: '',
    services: '',
    location: '',
    phone: '',
    email: '',
    primaryColor: '#000000',
    secondaryColor: '#404040',
  });
  const [stage, setStage] = useState<Stage>('form');
  const [generatedHtml, setGeneratedHtml] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const set = (key: keyof FormData) => (val: string) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setStage('loading');
    setErrorMessage('');

    try {
      const { data } = await axios.post('/api/generate-website', form);
      setGeneratedHtml(data.html);
      setStage('preview');
    } catch (err: unknown) {
      const message =
        axios.isAxiosError(err)
          ? err.response?.data?.error ?? err.message
          : 'An unexpected error occurred.';
      setErrorMessage(message);
      setStage('error');
    }
  };

  const handleDownload = () => {
    const blob = new Blob([generatedHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${form.businessName.replace(/\s+/g, '-').toLowerCase() || 'website'}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    setStage('form');
    setGeneratedHtml('');
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen bg-[#05050F]">
      {/* ── Page Header ── */}
      <div className="relative overflow-hidden border-b border-white/[0.06] bg-[#07070F]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <Sparkles size={13} />
              Powered by Claude AI
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              Generate Your Website
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Fill in your business details — Claude will craft a complete,
              professional landing page tailored to your brand in seconds.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">

          {/* ══ FORM ══ */}
          {stage === 'form' && (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              onSubmit={handleGenerate}
              className="space-y-6"
            >
              {/* Business Identity */}
              <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-6">
                <SectionHeader icon={<Building2 size={15} />} title="Business Identity" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Business Name *</Label>
                    <Input value={form.businessName} onChange={set('businessName')} placeholder="e.g. Apex Legal Group" required />
                  </div>
                  <div>
                    <Label>Industry / Type *</Label>
                    <Input value={form.businessType} onChange={set('businessType')} placeholder="e.g. Law Firm, Restaurant, Gym…" required />
                  </div>
                  <div className="md:col-span-2">
                    <Label>Tagline *</Label>
                    <Input value={form.tagline} onChange={set('tagline')} placeholder="e.g. Justice You Can Count On" required />
                  </div>
                </div>
              </div>

              {/* About & Services */}
              <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-6">
                <SectionHeader icon={<FileText size={15} />} title="About & Services" />
                <div className="space-y-4">
                  <div>
                    <Label>Business Description *</Label>
                    <Textarea
                      value={form.description}
                      onChange={set('description')}
                      placeholder="Describe your business, what makes you unique, and who you serve…"
                      rows={3}
                      required
                    />
                  </div>
                  <div>
                    <Label>Services / Features *</Label>
                    <Textarea
                      value={form.services}
                      onChange={set('services')}
                      placeholder="List your main services, one per line or comma-separated&#10;e.g. Criminal Defense, Family Law, Corporate Law, Estate Planning"
                      rows={4}
                      required
                    />
                    <p className="text-xs text-gray-600 mt-1.5">Separate multiple services with commas or new lines.</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-6">
                <SectionHeader icon={<MapPin size={15} />} title="Contact Information" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label>Location</Label>
                    <div className="flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3">
                      <MapPin size={14} className="text-gray-600 shrink-0" />
                      <input
                        type="text"
                        value={form.location}
                        onChange={(e) => set('location')(e.target.value)}
                        placeholder="City, State"
                        className="flex-1 bg-transparent text-sm text-white placeholder-gray-600 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <div className="flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3">
                      <Phone size={14} className="text-gray-600 shrink-0" />
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => set('phone')(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="flex-1 bg-transparent text-sm text-white placeholder-gray-600 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Email</Label>
                    <div className="flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3">
                      <Mail size={14} className="text-gray-600 shrink-0" />
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => set('email')(e.target.value)}
                        placeholder="hello@yourbusiness.com"
                        className="flex-1 bg-transparent text-sm text-white placeholder-gray-600 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Brand Colors */}
              <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-6">
                <SectionHeader icon={<Palette size={15} />} title="Brand Colors" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ColorField
                    label="Accent Color (buttons, highlights)"
                    value={form.primaryColor}
                    onChange={set('primaryColor')}
                    icon={<Layers size={14} />}
                  />
                  <ColorField
                    label="Secondary Accent"
                    value={form.secondaryColor}
                    onChange={set('secondaryColor')}
                    icon={<Layers size={14} />}
                  />
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div
                    className="h-8 flex-1 rounded-lg"
                    style={{ background: `linear-gradient(to right, ${form.primaryColor}, ${form.secondaryColor})` }}
                  />
                  <span className="text-xs text-gray-600">Preview gradient</span>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl text-white font-bold text-lg transition-all hover:-translate-y-0.5 shadow-2xl"
                style={{
                  background: `linear-gradient(to right, ${form.primaryColor}, ${form.secondaryColor})`,
                  boxShadow: `0 20px 60px -10px ${form.primaryColor}40`,
                }}
              >
                <Sparkles size={20} />
                Generate My Website with Claude
              </button>

              <p className="text-center text-xs text-gray-600">
                Generation takes 15–30 seconds · Powered by Claude Opus 4.6
              </p>
            </motion.form>
          )}

          {/* ══ LOADING ══ */}
          {stage === 'loading' && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-32 text-center"
            >
              <div className="relative mb-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="w-16 h-16 rounded-full border-2 border-transparent border-t-blue-500 border-r-violet-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles size={20} className="text-blue-400" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Claude is building your website…</h2>
              <p className="text-gray-400 text-sm max-w-sm">
                Generating all sections — Hero, Services, How It Works, Testimonials, and more.
                This usually takes 15–30 seconds.
              </p>
              <div className="mt-8 flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                    className="w-2 h-2 rounded-full bg-blue-500"
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* ══ PREVIEW ══ */}
          {stage === 'preview' && (
            <motion.div
              key="preview"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-4 bg-white/[0.03] border border-white/[0.07] rounded-2xl px-5 py-3">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm text-gray-300 font-medium">
                    {form.businessName} — Website Ready
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white border border-white/10 hover:border-white/20 px-4 py-2 rounded-full transition-all"
                  >
                    <RotateCcw size={13} />
                    Start Over
                  </button>
                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 text-xs font-bold text-white px-4 py-2 rounded-full transition-all hover:-translate-y-0.5"
                    style={{ background: `linear-gradient(to right, ${form.primaryColor}, ${form.secondaryColor})` }}
                  >
                    <Download size={13} />
                    Download HTML
                  </button>
                </div>
              </div>

              {/* iframe Preview */}
              <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl">
                {/* Browser chrome mockup */}
                <div className="bg-[#0f0f1a] px-4 py-3 flex items-center gap-3 border-b border-white/[0.06]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 bg-white/[0.05] border border-white/[0.06] rounded-md px-3 py-1 text-xs text-gray-600 text-center font-mono">
                    {form.businessName.toLowerCase().replace(/\s+/g, '-')}.html
                  </div>
                </div>
                <iframe
                  ref={iframeRef}
                  srcDoc={generatedHtml}
                  className="w-full bg-white"
                  style={{ height: '75vh' }}
                  sandbox="allow-same-origin allow-scripts"
                  title="Generated Website Preview"
                />
              </div>

              <p className="text-center text-xs text-gray-600 mt-4">
                The preview is fully interactive · Download the HTML file to host it anywhere
              </p>
            </motion.div>
          )}

          {/* ══ ERROR ══ */}
          {stage === 'error' && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
                <AlertCircle size={28} className="text-red-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Generation Failed</h2>
              <p className="text-gray-400 text-sm max-w-md mb-2">{errorMessage}</p>
              <p className="text-xs text-gray-600 mb-8">
                Check that <code className="text-gray-500">ANTHROPIC_API_KEY</code> is set in your <code className="text-gray-500">.env</code> file.
              </p>
              <button
                onClick={handleReset}
                className="flex items-center gap-2 bg-white/[0.06] hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all"
              >
                <RotateCcw size={15} />
                Try Again
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
