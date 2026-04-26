import { useState } from 'react';
import { ImageIcon, Loader2, Sparkles } from 'lucide-react';

const industryPrompts: Record<string, string> = {
  boutique:    'Elegant luxury boutique fashion store interior, violet and white color scheme, curated clothing racks, soft natural lighting, modern minimalist design',
  restaurant:  'Upscale restaurant interior, warm amber lighting, elegant table settings, fine dining atmosphere, modern Malaysian restaurant',
  salon:       'Modern luxury hair salon interior, rose gold accents, styling chairs, bright natural lighting, clean minimalist aesthetic',
  clinic:      'Clean modern medical clinic reception, sky blue and white tones, professional healthcare environment, bright welcoming space',
  gym:         'Modern fitness gym interior, orange accent lighting, premium equipment, motivating athletic atmosphere',
  cafe:        'Cozy specialty coffee shop interior, warm amber tones, exposed brick, barista counter, inviting cafe atmosphere',
};

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generate = async (customPrompt?: string) => {
    const finalPrompt = customPrompt || prompt;
    if (!finalPrompt.trim()) return;

    setLoading(true);
    setError(null);
    setImage(null);

    try {
      const res = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: finalPrompt }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setImage(data.image);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#05050F] text-white p-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-2">AI Image Generator</p>
          <h1 className="text-4xl font-bold mb-3">Generate Business Images</h1>
          <p className="text-gray-400">Powered by Google Gemini Imagen 3</p>
        </div>

        {/* Quick industry prompts */}
        <div className="mb-6">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Quick Prompts</p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(industryPrompts).map(([industry, p]) => (
              <button
                key={industry}
                onClick={() => { setPrompt(p); generate(p); }}
                className="px-3 py-1.5 bg-white/5 hover:bg-violet-600/20 border border-white/10 hover:border-violet-500 text-sm rounded-full transition-colors capitalize"
              >
                {industry}
              </button>
            ))}
          </div>
        </div>

        {/* Prompt input */}
        <div className="flex gap-3 mb-8">
          <textarea
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            placeholder="Describe the image you want to generate…"
            rows={3}
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 resize-none"
          />
          <button
            onClick={() => generate()}
            disabled={loading || !prompt.trim()}
            className="px-5 py-3 bg-violet-600 hover:bg-violet-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-colors flex items-center gap-2 self-end"
          >
            {loading ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
            {loading ? 'Generating…' : 'Generate'}
          </button>
        </div>

        {/* Result */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-sm mb-6">
            {error}
          </div>
        )}

        {loading && (
          <div className="aspect-video bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <Loader2 size={32} className="animate-spin text-violet-400 mx-auto mb-3" />
              <p className="text-gray-400 text-sm">Generating with Imagen 3…</p>
            </div>
          </div>
        )}

        {image && !loading && (
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <img src={image} alt="Generated" className="w-full" />
            <div className="p-4 bg-white/5 flex items-center justify-between">
              <p className="text-xs text-gray-400">Generated with Google Imagen 3</p>
              <a
                href={image}
                download="generated-image.jpg"
                className="text-xs text-violet-400 hover:text-violet-300 flex items-center gap-1"
              >
                <ImageIcon size={12} /> Download
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
