import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Award, 
  Sparkles, 
  Leaf, 
  Smile, 
  BadgeCheck, 
  Users 
} from 'lucide-react';

export const Features: React.FC = () => {
  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Haftpflichtversichert & Sicher',
      description: 'Ihr Eigentum ist bei uns zu 100% abgesichert. Alle Mitarbeiter sind haftpflichtversichert und polizeilich geprüft.',
    },
    {
      icon: Clock,
      title: '100% Termintreue & Pünktlichkeit',
      description: 'Wir halten uns strikt an vereinbarte Einsatzzeiten. Auf unseren Reinigungsservice können Sie sich fest verlassen.',
    },
    {
      icon: Award,
      title: 'Zertifiziertes Fachpersonal',
      description: 'Unsere Mitarbeiter sind geschult, freundlich und arbeiten nach modernsten Hygiene- & Reinigungsstandards.',
    },
    {
      icon: Leaf,
      title: 'Ökologische Reinigungsmittel',
      description: 'Wir schonen die Umwelt und Ihre Gesundheit durch biologisch abbaubare, allergenfreie Reinigungsprodukte.',
    },
    {
      icon: BadgeCheck,
      title: 'Faire & Transparente Festpreise',
      description: 'Keine versteckten Gebühren oder Anfahrtskosten. Sie erhalten vorab ein klares und verbindliches Angebot.',
    },
    {
      icon: Smile,
      title: 'Zufriedenheitsgarantie',
      description: 'Sollte ein Detail nicht Ihren Erwartungen entsprechen, bessern wir innerhalb von 24 Stunden kostenfrei nach.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Feature Pitch */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-aqua-vibrant/10 text-corporate-blue text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-aqua-vibrant" />
              Warum Obazee Clement Reinigung?
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-corporate-blue mb-6 leading-tight">
              Qualität, der deutsche Unternehmen & Haushalte vertrauen
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Ein sauberes Umfeld steigert das Wohlbefinden und die Produktivität. Wir bieten Ihnen maßgeschneiderte Reinigungskonzepte mit höchsten Qualitätsstandards.
            </p>

            <div className="p-6 rounded-2xl bg-corporate-blue text-white space-y-4 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-aqua-vibrant/20 flex items-center justify-center text-aqua-vibrant font-bold text-xl">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-heading font-bold text-lg">Direkter Ansprechpartner</div>
                  <div className="text-xs text-slate-300">Herr Obazee Clement kümmert sich persönlich um Ihre Wünsche</div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span>Telefonische Erreichbarkeit:</span>
                <span className="font-semibold text-aqua-vibrant">Mo - Sa: 07:00 - 20:00 Uhr</span>
              </div>
            </div>
          </div>

          {/* Right 6 Grid Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-ice-blue/60 transition-all hover:bg-white hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-ice-light text-corporate-blue flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-800 text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
