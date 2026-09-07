import React from 'react';
import {
  ShieldCheck,
  Clock,
  Users,
  Sparkles,
  ArrowRight,
  MapPin,
  Globe,
  FileText,
  Calculator,
  CheckCircle2
} from 'lucide-react';

export const About: React.FC = () => {
  const handleScrollToQuote = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('angebot') || document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const values = [
    {
      title: 'Zertifizierte Standards',
      desc: 'Geprüfte Hygiene- & Sicherheitsrichtlinien',
      icon: ShieldCheck,
    },
    {
      title: 'Pünktlich & Diskret',
      desc: 'Zuverlässige Termintreue & Diskretion',
      icon: Clock,
    },
    {
      title: 'Feste Ansprechpartner',
      desc: 'Persönliche Betreuung & kurze Wege',
      icon: Users,
    },
    {
      title: 'Modernes Equipment',
      desc: 'Ergonomische Profi-Technik & Eco-Mittel',
      icon: Sparkles,
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Anfrage & Beratung',
      description: 'Kurze Eckdaten per Formular oder Telefon übermitteln.',
      details: 'Unverbindlich, unkompliziert und flexibel auf Ihre individuellen Reinigungsanforderungen abgestimmt.',
      icon: FileText,
    },
    {
      step: '02',
      title: 'Transparenter Festpreis',
      description: 'Maßgeschneidertes Angebot innerhalb von 24 Stunden erhalten.',
      details: 'Klare Leistungsaufstellung ohne versteckte Nebenkosten für maximale Planungssicherheit.',
      icon: Calculator,
    },
    {
      step: '03',
      title: 'Gründliche Ausführung',
      description: 'Zuverlässige, termintreue Reinigung durch unser Fachteam.',
      details: 'Präzise Durchführung mit geschultem Personal, umweltschonenden Mitteln und strenger Qualitätskontrolle.',
      icon: CheckCircle2,
    },
  ];

  const trustStats = [
    {
      label: 'Frankfurt am Main',
      sublabel: 'Zentraler Unternehmenssitz',
      icon: MapPin,
    },
    {
      label: 'Bundesweit',
      sublabel: 'Flexible Einsatzbereitschaft',
      icon: Globe,
    },
    {
      label: '24h',
      sublabel: 'Garantierte Rückmeldung',
      icon: Clock,
    },
    {
      label: '100%',
      sublabel: 'Zufriedenheitsversprechen',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="bg-white py-20 sm:py-28 relative overflow-hidden border-t border-slate-200/80">
      {/* Target anchor for alternate German link identifier */}
      <span id="ueber-uns" className="absolute -top-24 pointer-events-none opacity-0" aria-hidden="true" />

      {/* Decorative ambient background accents */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/5 border border-primary/15 text-primary text-xs font-bold uppercase tracking-wider mb-4 font-heading">
            <Sparkles className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <span>Über Obazee Clement Reinigung</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-[1.15]">
            Ihr verlässlicher Partner für{' '}
            <span className="text-primary block sm:inline mt-1 sm:mt-0">Sauberkeit &amp; Werterhalt</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed mt-5">
            Mit Hauptsitz in Frankfurt am Main betreuen wir private Haushalte, Praxen und Gewerbekunden im gesamten Bundesgebiet – mit geschultem Personal, modernster Technik und kompromissloser Gründlichkeit.
          </p>
        </div>

        {/* 2-Column Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Company Profile & Values */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-3 font-heading">
                <span className="w-6 h-0.5 bg-accent inline-block rounded-full" />
                <span>Philosophie &amp; Qualitätsanspruch</span>
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight mb-4">
                Präzision, Sorgfalt und nachhaltige Sauberkeit
              </h3>

              <div className="space-y-4 text-slate-600 font-sans text-base leading-relaxed">
                <p>
                  Als dynamisches Reinigungsunternehmen steht Obazee Clement Reinigung für Verbindlichkeit, absolute Diskretion und erstklassige Ergebnisse. Von unserem zentralen Standort in Frankfurt am Main aus koordinieren wir maßgeschneiderte Reinigungskonzepte für anspruchsvolle Privathaushalte, Kanzleien, Praxen und Industrieobjekte im gesamten Bundesgebiet.
                </p>
                <p>
                  Wir setzen konsequent auf gründlich geschultes Fachpersonal und schonende Reinigungsmethoden. Durch den gezielten Einsatz von zertifizierten, umweltschonenden Reinigungsmitteln schützen wir Oberflächen, die Gesundheit aller Raumnutzer und leisten einen aktiven Beitrag zum langfristigen Werterhalt Ihrer Immobilie.
                </p>
              </div>
            </div>

            {/* 2x2 Quick Value Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {values.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group bg-slate-50 hover:bg-white p-4 sm:p-4.5 rounded-xl border border-slate-200/80 hover:border-primary/20 shadow-subtle hover:shadow-card transition-all duration-300 flex items-start gap-3.5"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-slate-900 text-sm group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="font-sans text-xs text-slate-500 mt-0.5 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: How We Work / 3-Step Process */}
          <div className="lg:col-span-6 bg-slate-50/80 border border-slate-200/90 rounded-2xl p-6 sm:p-8 lg:p-9 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary font-heading mb-1.5">
                    <span className="w-6 h-0.5 bg-accent inline-block rounded-full" />
                    <span>Unser Workflow</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 tracking-tight">
                    In 3 Schritten zum sauberen Objekt
                  </h3>
                </div>
                <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-bold bg-accent/15 text-slate-900 border border-accent/30 font-heading">
                  Einfach &amp; Transparent
                </span>
              </div>

              {/* 3 Steps List */}
              <div className="space-y-6 relative before:absolute before:left-5 sm:before:left-6 before:top-4 before:bottom-6 before:w-0.5 before:bg-slate-200/90">
                {steps.map((step, idx) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={idx} className="relative flex items-start gap-4 sm:gap-5 group">
                      {/* Step Circle with Number Badge */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border-2 border-primary/20 text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 z-10">
                        <span className="font-heading font-extrabold text-sm sm:text-base">
                          {step.step}
                        </span>
                      </div>

                      {/* Step Content */}
                      <div className="flex-1 bg-white p-4 sm:p-5 rounded-xl border border-slate-200/70 shadow-sm group-hover:border-primary/25 transition-all duration-200">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <h4 className="font-heading font-bold text-slate-900 text-base sm:text-lg">
                            {step.title}
                          </h4>
                          <StepIcon className="w-4 h-4 text-primary/70 shrink-0" />
                        </div>
                        <p className="font-sans font-medium text-slate-700 text-sm leading-relaxed mb-1">
                          {step.description}
                        </p>
                        <p className="font-sans text-xs text-slate-500 leading-relaxed">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Step Action */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left w-full sm:w-auto">
                <span className="block text-xs font-medium text-slate-500 font-sans">
                  Keine langen Wartezeiten
                </span>
                <span className="block text-sm font-bold text-slate-900 font-heading">
                  Angebot garantiert binnen 24 Stunden
                </span>
              </div>

              <a
                href="#angebot"
                onClick={handleScrollToQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-heading font-bold text-sm shadow-subtle hover:shadow-card transition-all duration-200 active:scale-[0.98] whitespace-nowrap cursor-pointer"
              >
                <span>Jetzt anfragen</span>
                <ArrowRight className="w-4 h-4 text-accent" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Stat / Trust Ribbon */}
        <div className="mt-16 sm:mt-20 pt-10 sm:pt-12 border-t border-slate-200/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {trustStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="bg-slate-50/70 hover:bg-slate-50 rounded-xl p-5 border border-slate-200/70 transition-colors duration-200 flex items-center gap-3.5"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 leading-tight">
                      {stat.label}
                    </div>
                    <div className="font-sans text-xs text-slate-500 font-medium mt-0.5">
                      {stat.sublabel}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
