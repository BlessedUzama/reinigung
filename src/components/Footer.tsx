import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, Globe } from 'lucide-react';
import brandLogo from '../assets/FINAL.png';
import LegalModal, { type LegalTab } from './LegalModal';

export const Footer: React.FC = () => {
  const [legalModalTab, setLegalModalTab] = useState<LegalTab | null>(null);

  const openLegalModal = (tab: LegalTab, e: React.MouseEvent) => {
    e.preventDefault();
    setLegalModalTab(tab);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-slate-900 text-slate-300 pt-16 sm:pt-20 pb-12 border-t border-slate-800 relative overflow-hidden">
        {/* Subtle ambient lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 sm:pb-16 border-b border-slate-800/80">
            
            {/* Column 1: Brand & Narrative (5 cols) */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <div className="flex items-center gap-3">
                <img
                  src={brandLogo}
                  alt="Obazee Clement Reinigung"
                  className="h-10 sm:h-12 w-auto object-contain brightness-0 invert"
                />
              </div>

              <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed max-w-md">
                Ihr verlässlicher Partner für Sauberkeit, Hygiene und Werterhalt. Mit Hauptsitz in Frankfurt am Main betreuen wir Privathaushalte, Praxen und Gewerbekunden flexibel im gesamten Bundesgebiet.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-medium text-slate-300 font-sans">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>Frankfurt am Main</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-medium text-slate-300 font-sans">
                  <Globe className="w-3.5 h-3.5 text-primary-light" />
                  <span>Bundesweit im Einsatz</span>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links (2 cols) */}
            <div className="lg:col-span-2 space-y-4 text-left">
              <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
                Leistungen
              </h4>
              <ul className="space-y-2.5 font-sans text-sm text-slate-400">
                <li>
                  <a href="#services" className="hover:text-accent transition-colors">
                    Unterhaltsreinigung
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-accent transition-colors">
                    Büro- &amp; Praxisreinigung
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-accent transition-colors">
                    Glas- &amp; Fensterreinigung
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-accent transition-colors">
                    Grundreinigung
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-accent transition-colors">
                    Über unser Team
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact & Hours (3 cols) */}
            <div className="lg:col-span-3 space-y-4 text-left">
              <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
                Kontakt &amp; Service
              </h4>
              <ul className="space-y-3 font-sans text-sm text-slate-400">
                <li className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <a href="tel:+4915210236967" className="hover:text-white transition-colors">
                    +49 1521 0236967
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <a href="mailto:info@obazee-clement-reinigung.de" className="hover:text-white transition-colors break-all">
                    info@obazee-clement-reinigung.de
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>
                    60311 Frankfurt am Main<br />
                    Deutschland
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 4: Quick Action (2 cols) */}
            <div className="lg:col-span-2 space-y-4 text-left">
              <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
                Schnellanfrage
              </h4>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Fordern Sie jetzt Ihr unverbindliches Festpreisangebot binnen 24h an.
              </p>
              <a
                href="#angebot"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-accent hover:bg-[#35c9be] text-slate-950 font-heading font-bold text-xs shadow-cta hover:shadow-cta-hover transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <span>Angebot einholen</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Sub-Footer: Legal & Copyright Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-500">
            <div className="text-center sm:text-left">
              © {new Date().getFullYear()} Obazee Clement Reinigung. Alle Rechte vorbehalten.
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <button
                type="button"
                onClick={(e) => openLegalModal('impressum', e)}
                className="hover:text-slate-300 transition-colors cursor-pointer underline-offset-4 hover:underline"
              >
                Impressum
              </button>

              <button
                type="button"
                onClick={(e) => openLegalModal('datenschutz', e)}
                className="hover:text-slate-300 transition-colors cursor-pointer underline-offset-4 hover:underline"
              >
                Datenschutzerklärung
              </button>

              <button
                type="button"
                onClick={scrollToTop}
                className="hover:text-slate-300 transition-colors cursor-pointer"
                title="Nach oben scrollen"
              >
                Nach oben ↑
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Accessible Legal Modal Component */}
      <LegalModal
        isOpen={legalModalTab !== null}
        initialTab={legalModalTab || 'impressum'}
        onClose={() => setLegalModalTab(null)}
      />
    </>
  );
};

export default Footer;
