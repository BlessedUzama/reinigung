import React from 'react';
import {
  Sparkles,
  Building2,
  Maximize,
  Zap,
  Hammer,
  Layers,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
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
    id: 'unterhalt',
    title: 'Unterhaltsreinigung',
    badge: 'Privat & Gewerbe',
    icon: Sparkles,
    description: 'Regelmäßige Pflege für makellose Sauberkeit in Wohnungen, Häusern und Geschäftsräumen nach Ihrem individuellen Wunschrhythmus.',
    features: [
      'Böden fachgerecht saugen & feucht wischen',
      'Staubwischen & Desinfektion aller Oberflächen',
      'Komplette Sanitär- & Küchenhygiene',
      'Müllentsorgung & Bereitstellung von Verbrauchsmaterial'
    ]
  },
  {
    id: 'buero-praxis',
    title: 'Büro- & Praxisreinigung',
    badge: 'Gewerbe & Hygiene',
    icon: Building2,
    description: 'Hygienisch reine Arbeitswelten für maximale Produktivität und einen erstklassigen Eindruck bei Kunden, Patienten und Mitarbeitern.',
    features: [
      'Strenge Hygiene- & Desinfektionsstandards',
      'Schreibtisch-, Empfangs- & IT-Reinigung',
      'Sanitäranlagen, Pausenräume & Teeküchen',
      'Flexible Einsatzzeiten außerhalb der Geschäftszeiten'
    ]
  },
  {
    id: 'glas-fenster',
    title: 'Fenster- & Glasreinigung',
    badge: 'Streifenfrei',
    icon: Maximize,
    description: 'Kristallklare Durchsicht für Fenster, Schaufenster, Glasfassaden und Wintergärten – zuverlässig und garantiert streifenfrei.',
    features: [
      'Inklusive Fensterrahmen, Falzen & Fensterbänken',
      'Schaufenster, Glastrennwände & Glasfassaden',
      'Wintergärten & anspruchsvolle Glasüberdachungen',
      'Schonende, umweltfreundliche Reinigungstechnik'
    ]
  },
  {
    id: 'grundreinigung',
    title: 'Grund- & Intensivreinigung',
    badge: 'Tiefenreinigung',
    icon: Zap,
    description: 'Umfassende Tiefenreinigung für hartnäckige Verschmutzungen, nach Mieterwechseln oder als saisonaler Großputz.',
    features: [
      'Intensive Boden-, Fugen- & Fliesenbehandlung',
      'Kalk-, Fett- & Problemzonen-Beseitigung',
      'Türen, Zargen, Fußleisten & Heizkörper',
      'Geruchsneutralisation & Frischeversiegelung'
    ]
  },
  {
    id: 'baureinigung',
    title: 'Bau- & Renovierungsreinigung',
    badge: 'Bauabnahme',
    icon: Hammer,
    description: 'Gründliche Grob- und Feinreinigung nach Neubau, Umbau oder Renovierung für eine reibungslose, schlüsselfertige Übergabe.',
    features: [
      'Baugrobreinigung & Bauschutt-Beseitigung',
      'Bauschlussreinigung für bezugsfertige Übergabe',
      'Entfernung von Farb-, Mörtel-, Kleber- & Silikonresten',
      'Feinstaubabsaugung aller Flächen und Nischen'
    ]
  },
  {
    id: 'treppenhaus',
    title: 'Treppenhaus- & Objektbetreuung',
    badge: 'Hausverwaltung',
    icon: Layers,
    description: 'Zuverlässige Pflege von Treppenhäusern und Gemeinschaftsflächen für Mehrfamilienhäuser, Wohnanlagen und Gewerbeobjekte.',
    features: [
      'Kehren & Feuchtwischen sämtlicher Etagen',
      'Handläufe, Geländer, Leuchten & Schalter',
      'Eingangsbereiche, Briefkasten- & Klingelanlagen',
      'Regelmäßige Qualitäts- & Sichtkontrollen'
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
      const target = document.getElementById('booking') || document.getElementById('contact');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/5 border border-primary/15 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />
            <span>Erstklassige Reinigungsdienste</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-[1.15]">
            Professionelle Sauberkeit{' '}
            <span className="text-primary block mt-1.5 sm:mt-2">für jeden Anspruch</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed mt-5">
            Entdecken Sie unser breites Spektrum an maßgeschneiderten Reinigungslösungen. Ob privater Haushalt oder Gewerbeobjekt – wir garantieren höchste Gründlichkeit und Zuverlässigkeit.
          </p>
        </div>

        {/* 6-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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

        {/* Bottom Callout Banner: Tailored Concept & WhatsApp */}
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
                Benötigen Sie ein spezielles Leistungspaket, feste Turnusse oder einen Wochenend-Service? Schreiben Sie uns direkt auf WhatsApp oder fordern Sie Ihr persönliches Festpreisangebot an.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full lg:w-auto flex-shrink-0">
              <a
                href="https://wa.me/4915210236967"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-heading font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 text-slate-950 flex-shrink-0" />
                <span>WhatsApp Direktkontakt</span>
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
