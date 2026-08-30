import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, ShieldCheck, ChevronRight } from 'lucide-react';
import brandLogo from '../assets/FINAL.png';

interface NavbarProps {
  onCtaClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
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
    { label: 'Über uns', href: '#about' },
    { label: 'Kontakt & Angebot', href: '#angebot' },
  ];

  const handleCta = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      const target = document.getElementById('angebot') || document.getElementById('contact');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-subtle border-b border-slate-200/80 py-2'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-2.5 sm:py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">
          {/* Left Side: Brand Logo with origin-left optical scale */}
          <a
            href="/"
            className="flex-shrink-0 flex items-center select-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-lg h-11 sm:h-13 w-[150px] sm:w-[185px] md:w-[215px] ml-0 pl-0"
            aria-label="Obazee Clement Reinigung Startseite"
          >
            <div className={`transition-transform duration-300 flex items-center w-full h-full ${isScrolled ? 'scale-95' : 'scale-100'}`}>
              <img
                src={brandLogo}
                alt="Obazee Clement Reinigung Logo"
                className="w-full h-auto object-contain transform scale-[1.35] sm:scale-[1.5] md:scale-[1.65] origin-left pointer-events-none"
              />
            </div>
          </a>

          {/* Center: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 font-sans" aria-label="Hauptnavigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-semibold text-slate-700 hover:text-primary transition-colors duration-200 py-1.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 rounded-md"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Side: Primary CTA & Phone (Desktop) */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <a
              href="tel:+4915210236967"
              className="flex flex-row items-center justify-center gap-2 whitespace-nowrap text-xs font-bold text-primary bg-primary/5 hover:bg-primary/10 px-3.5 py-2 rounded-xl border border-primary/15 transition-all duration-200 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary/30"
              aria-label="Telefonnummer anrufen: +49 1521 0236967"
            >
              <Phone className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span>+49 1521 0236967</span>
            </a>

            <button
              type="button"
              onClick={handleCta}
              className="flex flex-row items-center justify-center gap-2 whitespace-nowrap font-heading font-bold text-slate-950 bg-accent hover:bg-[#35c9be] px-4 sm:px-5 py-2 rounded-xl shadow-cta hover:shadow-cta-hover transition-all duration-200 transform active:scale-[0.98] text-sm cursor-pointer focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span>Angebot anfordern</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={handleCta}
              className="flex flex-row items-center justify-center gap-1.5 whitespace-nowrap font-heading font-bold text-xs text-slate-950 bg-accent px-3 py-1.5 rounded-lg shadow-sm active:scale-95"
            >
              <span>Angebot</span>
              <ArrowRight className="w-3 h-3 text-slate-950" />
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
              className="p-2 rounded-xl text-slate-700 hover:text-primary hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
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
                className="flex-shrink-0 flex items-center select-none h-12 w-[160px] overflow-hidden"
                aria-label="Obazee Clement Reinigung Startseite"
              >
                <img
                  src={brandLogo}
                  alt="Obazee Clement Reinigung Logo"
                  className="w-full h-auto object-contain transform scale-[1.35] origin-left pointer-events-none"
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
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-highlight/15 text-slate-800 font-semibold text-base transition-colors active:scale-[0.99]"
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
              className="flex flex-row items-center justify-center gap-2 whitespace-nowrap w-full py-3.5 text-sm font-bold text-primary bg-primary/5 hover:bg-primary/10 rounded-xl border border-primary/15 transition-colors"
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
              className="flex flex-row items-center justify-center gap-2 whitespace-nowrap w-full py-4 text-base font-heading font-extrabold text-slate-950 bg-accent hover:bg-[#35c9be] rounded-xl shadow-cta active:scale-[0.98] cursor-pointer transition-all"
            >
              <span>Jetzt Angebot anfordern</span>
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 mt-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>100% Zuverlässig • Geprüfte Qualität</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
