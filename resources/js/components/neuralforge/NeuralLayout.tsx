import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Zap, Twitter, Github, Linkedin, ArrowRight } from 'lucide-react';

export default function NeuralLayout({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/neuralforge' },
    { name: 'Solutions', path: '/neuralforge/solutions' },
    { name: 'About', path: '/neuralforge/about' },
    { name: 'FAQ', path: '/neuralforge/faq' },
    { name: 'Contact', path: '/neuralforge/contact' },
    { name: 'Generate', path: '/neuralforge/generate' },
  ];

  const isActive = (path: string) => {
    if (path === '/neuralforge' && location.pathname !== '/neuralforge') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#05050F] text-white selection:bg-blue-500 selection:text-white font-sans">
      {/* ── NAVBAR ── */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#05050F]/90 backdrop-blur-xl border-b border-white/[0.06] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/neuralforge" className="flex items-center gap-2.5 z-50">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                  <Zap size={18} className="text-white" />
                </div>
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-cyan-400 border border-[#05050F]" />
              </div>
              <span className="text-lg font-black tracking-tight">
                Neural<span className="text-blue-400">Forge</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all ${
                    isActive(link.path)
                      ? 'text-white bg-white/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer font-medium">
                Sign In
              </span>
              <Link
                to="/neuralforge/contact"
                className="relative group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 hover:-translate-y-0.5"
              >
                Get Started <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden z-50 p-2 text-gray-400 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#05050F]/98 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col h-screen"
          >
            <nav className="flex flex-col space-y-2 mt-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-black py-3 border-b border-white/5 ${
                    isActive(link.path) ? 'text-blue-400' : 'text-gray-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pb-12">
              <Link
                to="/neuralforge/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-4 rounded-xl text-lg font-bold"
              >
                Get Started Free
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <main className="grow pt-[72px]">{children}</main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#05050F] border-t border-white/[0.06] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
            {/* Brand col */}
            <div className="md:col-span-2">
              <Link to="/neuralforge" className="inline-flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                  <Zap size={18} className="text-white" />
                </div>
                <span className="text-lg font-black">Neural<span className="text-blue-400">Forge</span></span>
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
                The next-generation AI agent platform. Build, deploy, and scale intelligent automation that actually works.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: <Twitter size={16} />, label: 'Twitter' },
                  { icon: <Github size={16} />, label: 'GitHub' },
                  { icon: <Linkedin size={16} />, label: 'LinkedIn' },
                ].map((s) => (
                  <span key={s.label} className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/40 transition-all cursor-pointer">
                    {s.icon}
                  </span>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {[
              {
                title: 'Product',
                links: ['Features', 'Solutions', 'Pricing', 'Changelog', 'Roadmap'],
              },
              {
                title: 'Company',
                links: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
              },
              {
                title: 'Resources',
                links: ['Documentation', 'API Reference', 'Community', 'Support', 'Status'],
              },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <span className="text-gray-500 text-sm hover:text-blue-400 transition-colors cursor-pointer">
                        {link}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} NeuralForge Inc. All Rights Reserved.</p>
            <div className="mt-4 md:mt-0 space-x-5">
              <span className="hover:text-gray-400 transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-gray-400 transition-colors cursor-pointer">Terms of Service</span>
              <span className="hover:text-gray-400 transition-colors cursor-pointer">Cookie Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
