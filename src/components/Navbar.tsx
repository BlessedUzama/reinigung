import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Phone, Calendar, ShieldCheck, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Leistungen', href: '#services' },
    { name: 'Über Uns', href: '#about' },
    { name: 'Vorteile', href: '#features' },
    { name: 'Bewertungen', href: '#reviews' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100'
            : 'bg-white py-5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <Logo className="h-10 sm:h-12 w-auto" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-slate-700 hover:text-corporate-blue transition-colors duration-200 text-sm tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Actions CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+4915210236967"
                className="flex flex-row items-center justify-center gap-2 whitespace-nowrap px-4 py-2 text-sm font-semibold text-corporate-blue bg-ice-light hover:bg-ice-blue/30 rounded-xl transition-all duration-200 border border-ice-blue/50"
              >
                <Phone className="w-4 h-4 text-corporate-blue" />
                <span>+49 1521 0236967</span>
              </a>

              <button
                onClick={onOpenBooking}
                type="button"
                className="flex flex-row items-center justify-center gap-2 whitespace-nowrap px-5 py-2.5 text-sm font-heading font-bold text-slate-900 bg-aqua-vibrant hover:bg-aqua-hover rounded-xl shadow-sm hover:shadow-glow transition-all duration-300 transform active:scale-95"
              >
                <Calendar className="w-4 h-4 text-slate-900" />
                <span>Jetzt Buchen</span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenBooking}
                type="button"
                className="flex flex-row items-center justify-center gap-1 text-xs font-bold px-3 py-2 bg-aqua-vibrant text-slate-900 rounded-lg"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Buchen</span>
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                aria-label="Toggle Navigation Menu"
                className="p-2 rounded-xl text-slate-700 hover:text-corporate-blue hover:bg-slate-100 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu (Absolute Overlay) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 h-[100dvh] z-[100] bg-corporate-blue text-white flex flex-col justify-between p-6 overflow-y-auto animate-fadeIn">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <Logo className="h-10 w-auto" variant="light" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                type="button"
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 px-4 rounded-xl text-lg font-semibold hover:bg-white/10 text-slate-100 transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-5 h-5 text-aqua-vibrant" />
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4">
            <a
              href="tel:+4915210236967"
              className="flex flex-row items-center justify-center gap-2 whitespace-nowrap w-full py-3.5 text-base font-semibold bg-white/10 rounded-xl text-white border border-white/20"
            >
              <Phone className="w-5 h-5 text-aqua-vibrant" />
              <span>Anrufen: +49 1521 0236967</span>
            </a>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              type="button"
              className="flex flex-row items-center justify-center gap-2 whitespace-nowrap w-full py-4 text-base font-heading font-extrabold text-slate-900 bg-aqua-vibrant rounded-xl shadow-glow"
            >
              <Calendar className="w-5 h-5 text-slate-900" />
              <span>Termin Online Buchen</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-300 mt-2">
              <ShieldCheck className="w-4 h-4 text-aqua-vibrant" />
              <span>Qualitätsgarantie • 100% Zuverlässig</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
