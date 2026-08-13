import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer id="contact" className="bg-corporate-blue text-white pt-16 pb-12 border-t border-corporate-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Logo className="h-12 w-auto" variant="light" />
            
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              <strong>Obazee Clement Reinigung</strong> – Ihr verlässlicher Partner für erstklassige Büro-, Gewerbe- und Unterhaltsreinigung in Deutschland. Sauberkeit ohne Kompromisse.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-aqua-vibrant">
              <ShieldCheck className="w-4 h-4" />
              <span>Geprüfter Meisterbetrieb • Zertifizierte Hygiene</span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h3 className="font-heading font-bold text-white text-base mb-4 tracking-wide uppercase text-xs text-aqua-vibrant">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><a href="#services" className="hover:text-aqua-vibrant transition-colors">Unsere Leistungen</a></li>
              <li><a href="#features" className="hover:text-aqua-vibrant transition-colors">Vorteile & Garantie</a></li>
              <li><a href="#reviews" className="hover:text-aqua-vibrant transition-colors">Kundenbewertungen</a></li>
              <li><button onClick={onOpenBooking} className="hover:text-aqua-vibrant transition-colors text-left">Preiskalkulator</button></li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h3 className="font-heading font-bold text-white text-base mb-4 tracking-wide uppercase text-xs text-aqua-vibrant">
              Leistungen
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><a href="#services" className="hover:text-aqua-vibrant transition-colors">Büroreinigung</a></li>
              <li><a href="#services" className="hover:text-aqua-vibrant transition-colors">Unterhaltsreinigung</a></li>
              <li><a href="#services" className="hover:text-aqua-vibrant transition-colors">Grundreinigung</a></li>
              <li><a href="#services" className="hover:text-aqua-vibrant transition-colors">Fensterreinigung</a></li>
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-white text-base mb-4 tracking-wide uppercase text-xs text-aqua-vibrant">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-aqua-vibrant flex-shrink-0 mt-1" />
                <a href="tel:+4915210236967" className="hover:text-white transition-colors">+49 1521 0236967</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-aqua-vibrant flex-shrink-0 mt-1" />
                <span>info@obazeereinigung.de</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-aqua-vibrant flex-shrink-0 mt-1" />
                <span>Deutschlandweit im Einsatz</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-aqua-vibrant flex-shrink-0 mt-1" />
                <span>Mo - Sa: 07:00 - 20:00 Uhr</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} Obazee Clement Reinigung. Alle Rechte vorbehalten.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-white transition-colors">AGB</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
