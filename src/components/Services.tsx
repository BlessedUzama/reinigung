import React from 'react';
import { 
  Building2, 
  Home, 
  Sparkles, 
  Layers, 
  Check, 
  ArrowRight, 
  Sparkle
} from 'lucide-react';

interface ServicesProps {
  onSelectService: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const servicesList = [
    {
      icon: Building2,
      title: 'Büro- & Gewerbereinigung',
      price: 'ab 1,50 € / m²',
      description: 'Höchste Hygiene für Arbeitsplätze, Kanzleien, Praxen & Geschäftsräume. Für ein professionelles Auftreten.',
      features: [
        'Schreibtische & EDV-Oberflächen',
        'Bodenreinigung & Staubsaugen',
        'Sanitäranlagen-Desinfektion',
        'Müllentsorgung & Küchenbereiche'
      ],
      popular: true,
    },
    {
      icon: Home,
      title: 'Unterhaltsreinigung',
      price: 'ab 28 € / Std',
      description: 'Zuverlässige und wiederkehrende Grundpflege für Privathaushalte und Büros in flexiblen Intervallen.',
      features: [
        'Staubwischen & Flächenpflege',
        'Nasswischen aller Hartböden',
        'Bad- & WC-Gründlichreinigung',
        'Betten machen & Müll entleeren'
      ],
      popular: false,
    },
    {
      icon: Layers,
      title: 'Grund- & Intensivreinigung',
      price: 'Auf Anfrage',
      description: 'Tiefenwirksame Spezialreinigung nach Bauarbeiten, Renovierung oder vor dem Einzug.',
      features: [
        'Entfernung hartnäckiger Flecken',
        'Bauseuch- & Feinstaubentfernung',
        'Fliesen- & Fugenreinigung',
        'Türen, Zargen & Steckdosen'
      ],
      popular: false,
    },
    {
      icon: Sparkles,
      title: 'Fenster- & Glasreinigung',
      price: 'ab 4,50 € / Fenster',
      description: 'Glasklare Aussichten ohne Schlieren. Inklusive Rahmen- und Falzenreinigung.',
      features: [
        'Streifenfreie Glasflächen',
        'Rahmen- & Fensterbrett-Pflege',
        'Schaufenster & Glasfassaden',
        'Wintergärten & Glasdächer'
      ],
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-corporate-blue/10 text-corporate-blue text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkle className="w-3.5 h-3.5 text-aqua-vibrant" />
            Unsere Kernkompetenzen
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-corporate-blue mb-4">
            Maßgeschneiderte Reinigungslösungen für jeden Anspruch
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Wir verbinden deutsche Gründlichkeit mit moderner Ausrüstung und umweltfreundlichen Reinigungsmitteln.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 border ${
                  service.popular
                    ? 'border-aqua-vibrant shadow-xl shadow-aqua-vibrant/10 -translate-y-2'
                    : 'border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1'
                }`}
              >
                {service.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-aqua-vibrant text-slate-900 font-heading font-extrabold text-xs rounded-full uppercase tracking-wider shadow-sm">
                    Beliebteste Wahl
                  </span>
                )}

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-ice-light flex items-center justify-center text-corporate-blue mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-heading font-bold text-slate-800 mb-2">
                    {service.title}
                  </h3>

                  <div className="text-sm font-bold text-corporate-blue mb-4 bg-slate-50 inline-block px-3 py-1 rounded-lg border border-slate-100">
                    {service.price}
                  </div>

                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mb-8 border-t border-slate-100 pt-6">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-4 h-4 text-aqua-vibrant flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onSelectService}
                  type="button"
                  className={`flex flex-row items-center justify-center gap-2 whitespace-nowrap w-full py-3 rounded-xl font-heading font-bold text-xs transition-all ${
                    service.popular
                      ? 'bg-aqua-vibrant text-slate-900 hover:bg-aqua-hover shadow-md'
                      : 'bg-corporate-blue text-white hover:bg-corporate-dark'
                  }`}
                >
                  <span>Jetzt Anfragen</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
