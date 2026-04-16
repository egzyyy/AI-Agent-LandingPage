import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const font = { fontFamily: '"Playfair Display", serif' };

const navLinks = [
  { label: 'Home',     to: '/velvet-co' },
  { label: 'About',    to: '/velvet-co/about' },
  { label: 'Services', to: '/velvet-co/services' },
  { label: 'FAQ',      to: '/velvet-co/faq' },
  { label: 'Contact',  to: '/velvet-co/contact' },
];

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

export default function VelvetCoLayout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-neutral-800" style={font}>
      {/* Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm border-b border-neutral-100' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/velvet-co" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-violet-600 rounded-md flex items-center justify-center">
              <ShoppingBag size={16} className="text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight" style={font}>
              Velvet &amp; <span className="text-violet-600">Co</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    active
                      ? 'text-violet-600 bg-violet-50'
                      : 'text-neutral-600 hover:text-violet-600 hover:bg-neutral-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/velvet-co/contact"
              className="hidden md:inline-flex items-center px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-md transition-colors"
            >
              Shop Now
            </Link>
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="md:hidden p-2 rounded-md text-neutral-600 hover:text-violet-600 hover:bg-neutral-50 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-neutral-100 bg-white">
            <nav className="max-w-6xl mx-auto px-6 py-3 flex flex-col gap-1">
              {navLinks.map(link => {
                const active = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                      active
                        ? 'text-violet-600 bg-violet-50'
                        : 'text-neutral-600 hover:text-violet-600 hover:bg-neutral-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                to="/velvet-co/contact"
                className="mt-2 px-4 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-md text-center transition-colors"
              >
                Shop Now
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="pt-16">{children}</main>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-violet-600 rounded-md flex items-center justify-center">
                <ShoppingBag size={16} className="text-white" />
              </div>
              <span className="text-lg font-semibold" style={font}>Velvet &amp; Co</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-5">
              Curated fashion for every occasion. Ready-to-wear and custom pieces from independent designers across Asia.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-violet-400 hover:border-violet-600 transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-violet-400 hover:border-violet-600 transition-colors">
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-4">Quick Links</p>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-neutral-400 hover:text-violet-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-4">Contact</p>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-violet-500 mt-0.5 shrink-0" />
                G-12, Lot 10, Jalan Bukit Bintang,<br />55100 Kuala Lumpur
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-violet-500 shrink-0" />
                +60 3-2145 6677
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-violet-500 shrink-0" />
                hello@velvetco.my
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800">
          <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-neutral-500">
            <span>© 2026 Velvet &amp; Co. All rights reserved.</span>
            <span>G-12, Lot 10, Jalan Bukit Bintang, 55100 KL</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
