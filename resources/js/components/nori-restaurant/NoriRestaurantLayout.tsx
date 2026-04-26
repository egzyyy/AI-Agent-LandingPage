import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MapPin, Phone, Mail, Utensils } from 'lucide-react';

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const font = { fontFamily: '"Playfair Display", serif' };

export default function NoriRestaurantLayout({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/nori-restaurant' },
    { label: 'About', path: '/nori-restaurant/about' },
    { label: 'Menu', path: '/nori-restaurant/services' },
    { label: 'FAQ', path: '/nori-restaurant/faq' },
    { label: 'Contact', path: '/nori-restaurant/contact' },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans">

      {/* ── Navbar ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-neutral-100 ${scrolled ? 'shadow-sm' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">

          <Link to="/nori-restaurant" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center">
              <Utensils size={15} className="text-white" />
            </div>
            <span className="font-bold text-base tracking-tight">
              Nori <span className="text-amber-600">Restaurant</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link key={link.path} to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-amber-600 bg-amber-50'
                    : 'text-neutral-500 hover:text-amber-600 hover:bg-neutral-50'
                }`}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/nori-restaurant/contact" className="hidden md:block">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all">
                Reserve a Table
              </button>
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors">
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-neutral-100 bg-white"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {navLinks.map(link => (
                  <Link key={link.path} to={link.path} onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-amber-600 bg-amber-50'
                        : 'text-neutral-600 hover:text-amber-600 hover:bg-neutral-50'
                    }`}>
                    {link.label}
                  </Link>
                ))}
                <Link to="/nori-restaurant/contact" onClick={() => setMobileOpen(false)}>
                  <button className="w-full mt-2 bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl text-sm font-semibold transition-all">
                    Reserve a Table
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-[72px]">{children}</main>

      {/* ── Footer ── */}
      <footer className="bg-black text-neutral-400 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-neutral-800">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center">
                  <Utensils size={14} className="text-white" />
                </div>
                <span className="text-white font-bold">Nori Restaurant</span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs mb-6">
                Fresh ingredients, bold flavours, and a dining experience worth returning for — at KLCC and beyond.
              </p>
              <div className="flex gap-3">
                <button className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-all text-neutral-400 hover:text-white">
                  <InstagramIcon size={15} />
                </button>
                <button className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-all text-neutral-400 hover:text-white">
                  <FacebookIcon size={15} />
                </button>
              </div>
            </div>
            <div>
              <p className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Hours</p>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span>Mon – Fri</span><span className="text-neutral-300">11am – 10pm</span></li>
                <li className="flex justify-between"><span>Saturday</span><span className="text-neutral-300">10am – 11pm</span></li>
                <li className="flex justify-between"><span>Sunday</span><span className="text-neutral-300">10am – 9pm</span></li>
              </ul>
            </div>
            <div>
              <p className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Contact</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin size={13} className="text-amber-500 mt-0.5 shrink-0" />
                  <span>Level 2, Suria KLCC, 50088 KL</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={13} className="text-amber-500 shrink-0" />
                  <span>+60 3-2382 9110</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={13} className="text-amber-500 shrink-0" />
                  <span>hello@nori-restaurant.com.my</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
            <p>© {new Date().getFullYear()} Nori Restaurant. All Rights Reserved.</p>
            <div className="flex gap-5">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
