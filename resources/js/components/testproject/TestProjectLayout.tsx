import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cpu } from 'lucide-react';

export default function TestProjectLayout({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/testproject' },
    { name: 'About', path: '/testproject/about' },
    { name: 'Contact', path: '/testproject/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/testproject' && location.pathname !== '/testproject') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-[#05050F] text-white font-sans"
      style={{ fontFamily: '"Outfit", sans-serif' }}
    >
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
            <Link to="/testproject" className="flex items-center gap-2.5 z-50">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-violet-700 flex items-center justify-center">
                <Cpu size={18} className="text-white" />
              </div>
              <span className="text-lg font-black tracking-tight">
                Test<span className="text-violet-400">Project</span>
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
              <Link
                to="/testproject/contact"
                className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-violet-900/30 hover:-translate-y-0.5"
              >
                Get Started
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
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#05050F]/98 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col h-screen"
          >
            <nav className="flex flex-col space-y-2 mt-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-black py-3 border-b border-white/5 ${
                    isActive(link.path) ? 'text-violet-400' : 'text-gray-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pb-12">
              <Link
                to="/testproject/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center bg-gradient-to-r from-violet-600 to-violet-700 text-white px-6 py-4 rounded-xl text-lg font-bold"
              >
                Get Started
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
              <Link to="/testproject" className="inline-flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-violet-700 flex items-center justify-center">
                  <Cpu size={18} className="text-white" />
                </div>
                <span className="text-lg font-black">Test<span className="text-violet-400">Project</span></span>
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
                TestProject — built for teams that move fast and build things that matter.
              </p>
              <div className="flex gap-3">
                {['T', 'G', 'L'].map((s) => (
                  <span
                    key={s}
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-violet-500/20 hover:border-violet-500/40 transition-all cursor-pointer text-xs font-bold"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {[
              { title: 'Product', links: ['Features', 'Solutions', 'Pricing', 'Changelog', 'Roadmap'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers', 'Press', 'Contact'] },
              { title: 'Resources', links: ['Documentation', 'API Reference', 'Community', 'Support', 'Status'] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <span className="text-gray-500 text-sm hover:text-violet-400 transition-colors cursor-pointer">
                        {link}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} TestProject. All Rights Reserved.</p>
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
