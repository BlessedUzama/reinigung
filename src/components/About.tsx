import React from 'react';
import {
  ShieldCheck,
  Clock,
  Users,
  Leaf,
  FileText,
  Calculator,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const About: React.FC = () => {
  const handleScrollToQuote = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('angebot') || document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const coreValues = [
    {
      title: 'Zertifizierte Standards',
      desc: 'Geprüfte Hygiene- & Qualitätsrichtlinien für maximale Sicherheit.',
      icon: ShieldCheck,
    },
    {
      title: 'Pünktlich & Diskret',
      desc: 'Verlässliche Termintreue und diskrete Ausführung bei jedem Einsatz.',
      icon: Clock,
    },
    {
      title: 'Feste Ansprechpartner',
      desc: 'Persönliche Betreuung, kurze Reaktionszeiten und transparente Absprachen.',
      icon: Users,
    },
    {
      title: 'Umweltschonend',
      desc: 'Zertifizierte Eco-Reinigungsmittel und materialschonende Verfahren.',
      icon: Leaf,
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Anfrage & Beratung',
      highlight: 'Kurze Eckdaten per Formular oder Telefon übermitteln.',
      details: 'Unverbindlich und unkompliziert: Nennen Sie uns Ihre Wunschleistungen, Flächen und Zeitpläne.',
      icon: FileText,
    },
    {
      step: '02',
      title: 'Transparenter Festpreis',
      highlight: 'Verbindliches Angebot innerhalb von 24h ohne versteckte Zusatzkosten.',
      details: 'Sie erhalten eine maßgeschneiderte, transparente Kalkulation mit 100% Planungssicherheit.',
      icon: Calculator,
    },
    {
      step: '03',
      title: 'Gründliche Ausführung',
      highlight: 'Pünktliche, zuverlässige Reinigung durch unser geschultes Fachteam.',
      details: 'Sorgfältige Objektreinigung mit modernem Profi-Equipment und anschließender Qualitätskontrolle.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="about" className="bg-white py-20 sm:py-28 relative overflow-hidden border-t border-slate-200/80">
      {/* Target anchor for alternate German link identifier */}
      <span id="ueber-uns" className="absolute -top-24 pointer-events-none opacity-0" aria-hidden="true" />

      {/* Decorative ambient background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* 1. TOP BLOCK: Company Profile & Core Values                               */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Headline */}
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-[1.15]">
            Präzision, Sorgfalt und{' '}
            <span className="text-primary block sm:inline mt-1 sm:mt-0">nachhaltige Sauberkeit</span>
          </h2>

          {/* Intro Copy */}
          <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed mt-5">
            Obazee Clement Reinigung ist Ihr verlässlicher Fachbetrieb für anspruchsvolle Privathaushalte, Kanzleien, Praxen und Gewerbekunden. Mit zentralem Hauptsitz in Frankfurt am Main koordinieren wir professionelle Reinigungskonzepte sowohl in der gesamten Mainmetropole als auch flexibel im gesamten Bundesgebiet – mit geschultem Personal, modernster Technik und kompromissloser Gründlichkeit.
          </p>
        </div>

        {/* 4 Value Badges: Full-width 4-column horizontal grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-12">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="group bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-primary/20 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-lg group-hover:text-primary transition-colors">
                    {val.title}
                  </h3>
                  <p className="font-sans text-sm text-slate-600 mt-2 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* 2. BOTTOM BLOCK: 3-Step Workflow ("Unser Ablauf")                          */}
        {/* ========================================================================= */}
        <div className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-slate-100">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight leading-snug">
              In 3 Schritten zum sauberen Objekt
            </h3>

            <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed mt-4">
              Von der ersten Anfrage bis zur perfekten Sauberkeit – unkompliziert und termintreu.
            </p>
          </div>

          {/* 3 Process Steps: 3-column horizontal card grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10 sm:mt-12">
            {processSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-slate-50/70 hover:bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 hover:border-primary/20 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    {/* Top Row: Step Number & Icon */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <span className="font-heading font-extrabold text-sm px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        Schritt {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 text-primary flex items-center justify-center shadow-sm group-hover:border-primary/30 transition-colors">
                        <StepIcon className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    {/* Step Title & Highlights */}
                    <h4 className="font-heading font-bold text-xl text-slate-900 group-hover:text-primary transition-colors mb-2.5">
                      {step.title}
                    </h4>

                    <p className="font-sans font-semibold text-slate-800 text-sm sm:text-base leading-relaxed mb-2">
                      {step.highlight}
                    </p>

                    <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {step.details}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Callout & Action */}
          <div className="mt-10 sm:mt-12 text-center">
            <a
              href="#angebot"
              onClick={handleScrollToQuote}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent hover:bg-[#35c9be] text-slate-950 font-heading font-extrabold text-sm sm:text-base shadow-cta hover:shadow-cta-hover transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              <span>Jetzt unverbindliches Angebot anfordern</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
