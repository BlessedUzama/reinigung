import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, ShieldCheck, ChevronRight } from 'lucide-react';
import brandLogo from '../assets/new.svg';

interface NavbarProps {
  onCtaClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
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

  // Lock body scroll when mobile menu overlay is active
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
    { label: 'Leistungen', href: '#services' },
    { label: 'Preise', href: '#preise' },
    { label: 'Über uns', href: '#about' },
  ];

  const handleCta = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      const target = document.getElementById('booking') || document.getElementById('contact');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_24px_-4px_rgba(7,75,144,0.08)] py-2 border-b border-slate-100'
            : 'bg-white py-2.5 sm:py-3 border-b border-slate-100/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left Side: Brand Logo (new.svg) */}
            <a href="/" className="flex-shrink-0 flex items-center h-full py-1.5 group select-none focus:outline-none">
              <div
                className={`transition-all duration-300 ease-in-out transform origin-left ${
                  isScrolled ? 'scale-95' : 'scale-100'
                }`}
              >
                <img 
                  src={brandLogo} 
                  alt="Obazee Clement Reinigung" 
                  className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto max-w-[220px] md:max-w-[300px] object-contain transition-all duration-300 ease-in-out" 
                />
              </div>
            </a>

            {/* Center: Navigation Links (Desktop) */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10 font-sans">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-sm font-semibold text-slate-700 hover:text-primary transition-colors duration-200 py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Side: Primary CTA & Phone (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+4915210236967"
                className="flex flex-row items-center justify-center gap-2 whitespace-nowrap text-xs font-semibold text-primary/90 hover:text-primary bg-highlight/20 hover:bg-highlight/40 px-3.5 py-2.5 rounded-xl border border-highlight/40 transition-all duration-200"
              >
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span>+49 1521 0236967</span>
              </a>

              <button
                type="button"
                onClick={handleCta}
                className="flex flex-row items-center justify-center gap-2 whitespace-nowrap font-heading font-bold text-slate-900 bg-accent hover:bg-[#35c9be] px-5 py-2.5 rounded-xl shadow-[0_4px_14px_0_rgba(63,210,199,0.38)] hover:shadow-[0_6px_20px_rgba(63,210,199,0.48)] transition-all duration-200 transform active:scale-95 text-sm cursor-pointer"
              >
                <span>Angebot anfordern</span>
                <ArrowRight className="w-4 h-4 text-slate-900" />
              </button>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={handleCta}
                className="flex flex-row items-center justify-center gap-1.5 whitespace-nowrap font-heading font-bold text-xs text-slate-900 bg-accent px-3 py-2 rounded-lg shadow-sm"
              >
                <span>Angebot</span>
                <ArrowRight className="w-3 h-3 text-slate-900" />
              </button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
                className="p-2 rounded-xl text-slate-700 hover:text-primary hover:bg-slate-100 focus:outline-none transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer (Strict Absolute Overlay) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 h-[100dvh] z-[100] bg-white flex flex-col justify-between p-6 overflow-y-auto">
          <div>
            {/* Header row in mobile overlay */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <a
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex-shrink-0 flex items-center"
              >
                <img
                  src={brandLogo}
                  alt="Obazee Clement Reinigung"
                  className="h-12 sm:h-14 w-auto max-w-[200px] object-contain"
                />
              </a>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Menü schließen"
                className="p-2.5 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="mt-8 flex flex-col gap-3 font-sans">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-highlight/15 text-slate-800 font-semibold text-base transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-5 h-5 text-accent" />
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom Actions in mobile overlay */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-3.5">
            <a
              href="tel:+4915210236967"
              className="flex flex-row items-center justify-center gap-2 whitespace-nowrap w-full py-3.5 text-sm font-semibold text-primary bg-highlight/20 rounded-xl border border-highlight/40 transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>Direkt anrufen: +49 1521 0236967</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleCta();
              }}
              className="flex flex-row items-center justify-center gap-2 whitespace-nowrap w-full py-4 text-base font-heading font-extrabold text-slate-900 bg-accent hover:bg-[#35c9be] rounded-xl shadow-[0_4px_14px_0_rgba(63,210,199,0.38)] cursor-pointer"
            >
              <span>Jetzt Angebot anfordern</span>
              <ArrowRight className="w-5 h-5 text-slate-900" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 mt-2">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>100% Zuverlässig • Geprüfte Qualität</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
