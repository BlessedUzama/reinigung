import React from 'react';
import {
  Sparkles,
  Building2,
  Maximize,
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  ShieldCheck
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  icon: React.ElementType;
  description: string;
  features: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: 'unterhalt-privat',
    title: 'Unterhalts- & Privatreinigung',
    badge: 'Privat & Wohnen',
    icon: Sparkles,
    description: 'Zuverlässige und regelmäßige Pflege für ein makellos sauberes Zuhause. Wir sorgen für Wohlfühlatmosphäre nach Ihrem Wunschzeitplan.',
    features: [
      'Regelmäßige Grund- & Unterhaltspflege',
      'Gründliche Sanitär- & Küchenhygiene',
      'Böden saugen, wischen & Oberflächenpflege',
      'Flexible Reinigungsintervalle nach Absprache'
    ]
  },
  {
    id: 'buero-gewerbe',
    title: 'Büro- & Gewerbereinigung',
    badge: 'Gewerbe & Praxis',
    icon: Building2,
    description: 'Repräsentative Sauberkeit und kompromisslose Hygiene für Büros, Kanzleien, Praxen und gewerbliche Räumlichkeiten in Frankfurt.',
    features: [
      'Tägliche oder wöchentliche Büroreinigung',
      'Hygienische Desinfektion von Arbeitsplätzen & IT',
      'Praxis- & Kanzleipflege nach Hygieneplan',
      'Reinigungszeiten flexibel außerhalb Ihrer Geschäftszeiten'
    ]
  },
  {
    id: 'glas-spezial',
    title: 'Glas- & Spezialreinigung',
    badge: 'Streifenfrei & Spezial',
    icon: Maximize,
    description: 'Professionelle Fenster- und Glasreinigung sowie gründliche Bauabschluss- und Einzugsreinigungen für höchste Ansprüche.',
    features: [
      'Streifenfreie Fenster- & Schaufensterreinigung',
      'Baugrob- & Bauschlussreinigung nach Renovierung',
      'Intensive Grundreinigung bei Ein- & Auszug',
      'Treppenhaus- & Gemeinschaftsflächenbetreuung'
    ]
  }
];

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const handleServiceClick = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    } else {
      const target = document.getElementById('angebot') || document.getElementById('contact');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        window.dispatchEvent(new CustomEvent('selectCleaningService', { detail: { service: serviceTitle } }));
      } else {
        window.location.href = `mailto:info@obazee-clement-reinigung.de?subject=${encodeURIComponent(
          `Reinigungsanfrage - ${serviceTitle}`
        )}`;
      }
    }
  };

  return (
    <section id="services" className="bg-slate-50 py-20 sm:py-28 relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/5 border border-primary/15 text-primary text-xs font-bold uppercase tracking-wider mb-4 font-heading">
            <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />
            <span>Unsere Kernleistungen</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-[1.15]">
            Professionelle Sauberkeit{' '}
            <span className="text-primary block mt-1.5 sm:mt-2">für jeden Anspruch</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed mt-5">
            Entdecken Sie unsere drei maßgeschneiderten Hauptbereiche. Ob privater Haushalt oder Gewerbeobjekt – wir garantieren höchste Gründlichkeit, Pünktlichkeit und faire Festpreise.
          </p>
        </div>

        {/* 3-Card Flagship Grid (Clean Single-Row on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-subtle hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-highlight/25 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm flex-shrink-0">
                      <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200/60 font-sans whitespace-nowrap">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 group-hover:text-primary transition-colors duration-200 mb-3">
                    {service.title}
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 pt-4 border-t border-slate-100 mb-8 font-sans">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer CTA Button */}
                <button
                  type="button"
                  onClick={() => handleServiceClick(service.title)}
                  className="w-full py-3.5 px-4 rounded-xl border border-slate-200/90 bg-slate-50/80 hover:bg-[#00a3e0] hover:text-white hover:border-[#00a3e0] font-heading font-bold text-sm text-slate-800 transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer shadow-sm hover:shadow-md active:scale-[0.98]"
                >
                  <span>Angebot anfragen</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner: Tailored Concept & Email Contact */}
        <div className="mt-16 sm:mt-20 rounded-3xl bg-gradient-to-r from-[#053a6e] via-[#074b90] to-[#0a5ca8] p-8 sm:p-12 lg:p-14 text-white shadow-2xl relative overflow-hidden border border-white/10">
          {/* Subtle background glow circle */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-highlight/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="text-left max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-highlight mb-3 uppercase tracking-wider font-heading">
                Individuelle Anforderungen?
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                Ihr maßgeschneidertes Reinigungskonzept
              </h3>
              <p className="font-sans text-sm sm:text-base text-slate-200 leading-relaxed mt-3">
                Benötigen Sie ein maßgeschneidertes Reinigungskonzept oder feste Turnusse? Senden Sie uns eine E-Mail oder rufen Sie uns direkt an.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full lg:w-auto flex-shrink-0">
              <a
                href="mailto:info@obazee-clement-reinigung.de?subject=Individuelle%20Reinigungsanfrage"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#00a3e0] hover:bg-[#0284c7] text-white font-heading font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <span>E-Mail Anfrage senden</span>
              </a>

              <a
                href="tel:+4915210236967"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-sm sm:text-base border border-white/20 transition-all duration-200 active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                <span>+49 1521 0236967</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
