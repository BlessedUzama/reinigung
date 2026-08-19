import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, ShieldCheck, ChevronRight } from 'lucide-react';
import brandLogo from '../assets/omo.svg';

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
            {/* Left Side: Pixel-Perfect Brand Lockup */}
            <a href="/" className="flex flex-row items-center gap-3 sm:gap-4 select-none group focus:outline-none">
              {/* 1. The SVG Icon */}
              <img
                src={brandLogo}
                alt="Obazee Clement Reinigung"
                className="h-12 sm:h-14 md:h-[68px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />

              {/* 2. The Text Block (Tightly bound and perfectly proportioned) */}
              <div className="flex flex-col justify-center w-[170px] sm:w-[210px] md:w-[260px] pt-0.5">
                {/* Line 1: OBAZEE CLEMENT (Heavy, tight tracking, exactly matched to container width) */}
                <span className="font-heading font-black text-[#074b90] text-[17px] sm:text-[21px] md:text-[26px] leading-[1] uppercase tracking-[-0.01em]">
                  Obazee Clement
                </span>

                {/* Line 2: - REINIGUNG - (Bright blue, flanked by precise 2px lines) */}
                <div className="flex items-center justify-between gap-1.5 sm:gap-2 mt-[3px] md:mt-1">
                  <div className="h-[2px] flex-grow bg-[#0ea5e9]"></div>
                  <span className="font-heading font-extrabold text-[#0ea5e9] text-[9px] sm:text-[11px] md:text-[13px] tracking-[0.25em] leading-none uppercase">
                    Reinigung
                  </span>
                  <div className="h-[2px] flex-grow bg-[#0ea5e9]"></div>
                </div>

                {/* Line 3: SAUBER • ZUVERLÄSSIG • PROFESSIONELL (Perfectly justified micro-text) */}
                <div className="flex items-center justify-between w-full mt-[3px] md:mt-1">
                  <span className="font-sans font-bold text-[#074b90] text-[6px] sm:text-[7.5px] md:text-[9px] tracking-[0.1em] uppercase whitespace-nowrap">
                    Sauber
                  </span>
                  <span className="text-[#0ea5e9] text-[6px] sm:text-[7.5px] md:text-[9px]">•</span>
                  <span className="font-sans font-bold text-[#074b90] text-[6px] sm:text-[7.5px] md:text-[9px] tracking-[0.1em] uppercase whitespace-nowrap">
                    Zuverlässig
                  </span>
                  <span className="text-[#0ea5e9] text-[6px] sm:text-[7.5px] md:text-[9px]">•</span>
                  <span className="font-sans font-bold text-[#074b90] text-[6px] sm:text-[7.5px] md:text-[9px] tracking-[0.1em] uppercase whitespace-nowrap">
                    Professionell
                  </span>
                </div>
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
                className="flex flex-row items-center gap-2.5 select-none"
              >
                <img
                  src={brandLogo}
                  alt="Obazee Clement Reinigung"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
                <div className="flex flex-col justify-center w-[150px] sm:w-[180px] pt-0.5">
                  <span className="font-heading font-black text-[#074b90] text-[15px] sm:text-[18px] leading-[1] uppercase tracking-[-0.01em]">
                    Obazee Clement
                  </span>
                  <div className="flex items-center justify-between gap-1 mt-[2px]">
                    <div className="h-[1.5px] flex-grow bg-[#0ea5e9]"></div>
                    <span className="font-heading font-extrabold text-[#0ea5e9] text-[8px] sm:text-[10px] tracking-[0.25em] leading-none uppercase">
                      Reinigung
                    </span>
                    <div className="h-[1.5px] flex-grow bg-[#0ea5e9]"></div>
                  </div>
                  <div className="flex items-center justify-between w-full mt-[2px]">
                    <span className="font-sans font-bold text-[#074b90] text-[5px] sm:text-[6.5px] tracking-[0.1em] uppercase whitespace-nowrap">
                      Sauber
                    </span>
                    <span className="text-[#0ea5e9] text-[5px] sm:text-[6.5px]">•</span>
                    <span className="font-sans font-bold text-[#074b90] text-[5px] sm:text-[6.5px] tracking-[0.1em] uppercase whitespace-nowrap">
                      Zuverlässig
                    </span>
                    <span className="text-[#0ea5e9] text-[5px] sm:text-[6.5px]">•</span>
                    <span className="font-sans font-bold text-[#074b90] text-[5px] sm:text-[6.5px] tracking-[0.1em] uppercase whitespace-nowrap">
                      Professionell
                    </span>
                  </div>
                </div>
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
