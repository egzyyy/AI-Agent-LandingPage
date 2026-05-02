# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**NeuralForge** — an AI agent platform landing site built with Laravel 12 (API backend) + React 19 + TypeScript + Tailwind CSS v4 (Vite). The main feature is an AI-powered website generator that calls the Anthropic Claude API to produce standalone HTML pages.

## Commands

### Development
```bash
composer run dev
# Starts concurrently: php artisan serve, queue:listen, pail (log viewer), npm run dev (Vite HMR)
```

### Build
```bash
npm run build        # Vite production build
composer run setup   # Full first-time setup: composer install, .env copy, key:generate, migrate, npm install + build
```

### Testing
```bash
composer run test                        # Clears config cache, then runs PHPUnit
php artisan test --filter=TestClassName  # Run a single test class
```

### Code style
```bash
./vendor/bin/pint   # Laravel Pint (PHP code style fixer)
```

## Architecture

### Request flow
```
Browser (React SPA) → Laravel (serves the SPA at /) → React Router handles all /neuralforge/* routes
                                                     ↓
                                           POST /api/generate-website
                                                     ↓
                                     WebsiteGeneratorController → Anthropic API
                                                     ↓
                                           returns { html: "<!DOCTYPE html>..." }
```

### Frontend (`resources/js/`)
- **`main.tsx`** — React entry point, mounts `<App />`
- **`App.tsx`** — React Router config. Root `/` redirects to `/neuralforge`. All routes are wrapped in `<NeuralLayout>`.
- **`components/neuralforge/NeuralLayout.tsx`** — Shared shell: fixed navbar, animated mobile menu, footer. Every page renders inside `<main>`.
- **`components/neuralforge/NeuralHelpers.tsx`** — Reusable UI primitives (`Reveal`, `GlowBadge`, `SectionLabel`, `GlassCard`, `PageHeader`, `Placeholder`). Import from here, don't duplicate.
- **`pages/neuralforge/`** — One file per route: `Home`, `Solutions`, `About`, `Faq`, `Contact`, `Generate`.

### Backend (`app/Http/Controllers/`)
- **`WebsiteGeneratorController`** — Single `generate()` action. Validates form input, calls `https://api.anthropic.com/v1/messages` with `claude-opus-4-6`, extracts the raw HTML from the response with a regex, returns `{ html }`.

### API routes (`routes/api.php`)
- `POST /api/generate-website` → `WebsiteGeneratorController@generate`
- Several stub status routes for other sub-systems (`IhadirController`, `AssessHubController`, `NutritionController`) — these controllers may not exist yet.

### Environment
- `ANTHROPIC_API_KEY` must be set in `.env` for the generator to work (`config/services.php` reads it as `services.anthropic.key`).
- Default DB is SQLite (`database/database.sqlite`).

## Design system

All pages use a dark palette (`bg-[#05050F]`). Key conventions:
- Motion/animation: `motion/react` (`motion.div`, `AnimatePresence`)
- Icons: `lucide-react`
- Utility helpers: `clsx` + `tailwind-merge`
- Color scheme: deep navy base, blue-500/violet-600 gradients for CTAs, `text-gray-400` for body copy
- New pages should use `PageHeader`, `Reveal`, `GlowBadge`, and `GlassCard` from `NeuralHelpers.tsx` for visual consistency
