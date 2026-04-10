<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Http;

class WebsiteGeneratorController extends Controller
{
    public function generate(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'businessName'   => 'required|string|max:100',
            'businessType'   => 'required|string|max:100',
            'tagline'        => 'required|string|max:200',
            'description'    => 'required|string|max:1000',
            'services'       => 'required|string|max:1000',
            'location'       => 'nullable|string|max:200',
            'phone'          => 'nullable|string|max:50',
            'email'          => 'nullable|string|max:100',
            'primaryColor'   => 'nullable|string|max:20',
            'secondaryColor' => 'nullable|string|max:20',
        ]);

        $apiKey = config('services.anthropic.key');

        if (empty($apiKey)) {
            return response()->json([
                'error' => 'ANTHROPIC_API_KEY is not set in your .env file.',
            ], 500);
        }

        $prompt = $this->buildPrompt($validated);

        $response = Http::withHeaders([
            'x-api-key'         => $apiKey,
            'anthropic-version' => '2023-06-01',
            'Content-Type'      => 'application/json',
        ])->timeout(120)->post('https://api.anthropic.com/v1/messages', [
            'model'      => 'claude-opus-4-6',
            'max_tokens' => 8192,
            'messages'   => [
                ['role' => 'user', 'content' => $prompt],
            ],
        ]);

        if ($response->failed()) {
            $errorMessage = $response->json('error.message', 'Unknown error from Claude API.');
            return response()->json(['error' => $errorMessage], 500);
        }

        $rawText = $response->json('content.0.text', '');

        // Extract only the HTML — strip any surrounding markdown fences or explanations
        if (preg_match('/<!DOCTYPE\s+html>.*<\/html>/is', $rawText, $matches)) {
            $html = $matches[0];
        } else {
            $html = $rawText;
        }

        return response()->json(['html' => $html]);
    }

    private function buildPrompt(array $data): string
    {
        $primaryColor   = $data['primaryColor']   ?? '#000000';
        $secondaryColor = $data['secondaryColor'] ?? '#404040';
        $location       = $data['location']       ?? 'Not specified';
        $phone          = $data['phone']          ?? '';
        $email          = $data['email']          ?? '';

        return <<<PROMPT
You are an expert web developer. Generate a complete, beautiful, single-page business website as a standalone HTML file.
Follow the TEMPLATE STRUCTURE and DESIGN SYSTEM described below exactly.

BUSINESS DETAILS:
- Business Name: {$data['businessName']}
- Industry/Type: {$data['businessType']}
- Tagline: {$data['tagline']}
- Description: {$data['description']}
- Services/Features: {$data['services']}
- Location: {$location}
- Phone: {$phone}
- Email: {$email}
- Primary Accent Color (hex): {$primaryColor}
- Secondary Accent Color (hex): {$secondaryColor}

DESIGN SYSTEM (follow strictly):
- Include: <script src="https://cdn.tailwindcss.com"></script>
- Base palette: bg-neutral-50 and bg-white for light sections, bg-black for the stats section, bg-neutral-100 for CTA
- Body font: system-ui or Inter via Google Fonts
- Primary accent color {$primaryColor} used ONLY for: hover underlines, active nav dots, small accent icons — NOT for large backgrounds
- Buttons: bg-black text-white rounded-full px-8 py-4 font-medium hover:bg-neutral-800 — no gradients
- Cards: bg-white or bg-neutral-50, border-2 border-neutral-100, rounded-2xl or rounded-3xl, hover:border-black hover:shadow-lg hover:-translate-y-1 transition-all
- All text on light sections: text-neutral-800 headings, text-neutral-500 body
- Stats section ONLY is dark: bg-black text-white
- Smooth scroll: html { scroll-behavior: smooth }
- Add CSS keyframe animations: hero text fades in and slides up on load (staggered delays)
- Fully responsive: mobile hamburger menu toggled with vanilla JavaScript, stacked layouts on small screens

REQUIRED SECTIONS (in this exact order):

1. NAVBAR
   - Fixed top, bg-white/90 backdrop-blur border-b border-neutral-100 on scroll (JS class toggle)
   - Logo: business name in font-bold, with a small colored dot using {$primaryColor}
   - Nav links: Home, Services, About, FAQ, Contact (smooth scroll anchors)
   - CTA button: bg-black text-white rounded-full px-5 py-2 text-sm "Get In Touch"
   - Mobile: hamburger icon toggles a full-width dropdown menu

2. HERO (id="home")
   - bg-neutral-50 min-h-screen flex items-center
   - Two animated background blobs: absolute rounded-full bg-neutral-200/60 blur-3xl (top-right and bottom-left)
   - Left column: small badge/tagline chip (border border-neutral-200 rounded-full px-4 py-1 text-sm text-neutral-500), large h1 (text-6xl font-bold), description paragraph, two buttons (primary: bg-black rounded-full, secondary: bg-white border-2 border-neutral-200 rounded-full)
   - Right column (hidden on mobile): tall rounded-3xl placeholder box (bg-neutral-200 h-[500px]), floating card bottom-left (bg-white shadow-xl rounded-2xl p-4 with a star icon and social proof text like "500+ Happy Clients")
   - Animate: hero left column fades in and slides up, right column fades in from right

3. FEATURED SERVICES (id="services") — bg-white py-24
   - Section heading centered: bold h2, neutral subtitle
   - Grid of 3 service cards (use first 3 from services list): each card is a rounded-2xl bg-neutral-50 border-2 border-neutral-100 hover:border-black hover:shadow-lg hover:-translate-y-1 transition-all p-8
   - Each card: placeholder icon area (w-10 h-10 bg-neutral-200 rounded-lg mb-4), service title (font-bold text-xl), short description (text-neutral-500 text-sm), "View Details →" link at bottom

4. STATISTICS — bg-black text-white py-20
   - Four stats in a grid with divide-x divide-neutral-800: each has a large number (text-5xl font-bold) and a label (text-neutral-500 text-xs uppercase tracking-widest)
   - Stats must be realistic for {$data['businessType']}: e.g. clients served, years experience, satisfaction rate, projects completed
   - Add a large decorative rotating circle border (absolute, opacity-20) on the right side

5. ABOUT / TESTIMONIAL (id="about") — bg-neutral-50 py-24
   - Left: h2 "What Our Clients Say", description paragraph about the business, three dot indicators (first dot bg-black, others bg-neutral-200)
   - Right: white card (bg-white p-10 rounded-3xl shadow-lg border border-neutral-100) with: large quote SVG icon (text-neutral-200), italic testimonial quote specific to {$data['businessType']}, customer avatar circle + name + role below a border-t

6. ALL SERVICES (id="about-full") — bg-white py-20
   - Heading: "Our Full Range of Services"
   - List ALL services from the services list, displayed as a clean numbered or icon list, two columns on desktop
   - Each item: service name bold + one-line description

7. FAQ — bg-neutral-50 py-24
   - Heading centered: "Frequently Asked Questions"
   - 5 relevant FAQs for {$data['businessType']} in an accordion (details/summary HTML elements, styled cleanly)
   - Container: bg-white rounded-3xl border-2 border-neutral-100 p-8 md:p-12 max-w-3xl mx-auto

8. CONTACT (id="contact") — bg-white py-20
   - Left: h2 "Get In Touch", contact details list with icons (📍 address, 📞 phone, ✉️ email, 🕐 hours)
   - Right: white card bg-white border-2 border-neutral-100 rounded-3xl p-10 with form: Full Name, Phone, Service (select), Message textarea, Submit button (bg-black text-white w-full rounded-xl py-4)

9. FOOTER — bg-black text-white pt-16 pb-8
   - Logo + short description on the left
   - Quick links column in the middle
   - Contact info column on the right
   - Bottom bar: copyright line + "Privacy Policy" and "Terms" links

CONTENT RULES:
- Every section must have REAL, SPECIFIC content for "{$data['businessName']}" — no placeholder text like "Lorem ipsum" or "[Your text here]"
- FAQs and testimonials must feel authentic and mention specific results relevant to {$data['businessType']}
- Stats must be believable for the industry
- Services descriptions must match {$data['businessType']} accurately

OUTPUT: Return ONLY the raw HTML — starting with <!DOCTYPE html> and ending with </html>. No markdown, no code fences, no explanations before or after.
PROMPT;
    }
}
