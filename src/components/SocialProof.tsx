import React, { useState } from 'react';
import {
  Star,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ChevronsLeftRight,
  Quote,
  Sparkles
} from 'lucide-react';

export const SocialProof: React.FC = () => {
  // Slider position from 0 to 100 (percentage showing Before)
  const [sliderPos, setSliderPos] = useState<number>(50);

  const testimonials = [
    {
      author: 'Dr. Markus B.',
      role: 'Privatkunde (Endreinigung)',
      location: 'Frankfurt Westend',
      initials: 'MB',
      rating: 5,
      text: 'Sehr pünktliches und diskretes Team. Unsere Wohnung wurde nach der Renovierung komplett staubfrei übergeben. Besonders die Fenster und Sanitäranlagen waren makellos.',
      tag: 'End- & Grundreinigung',
    },
    {
      author: 'Kanzlei S. & Partner',
      role: 'Büro- & Kanzleireinigung',
      location: 'Frankfurt Innenstadt',
      initials: 'KS',
      rating: 5,
      text: 'Seit über 6 Monaten übernimmt Obazee Clement die wöchentliche Büroreinigung unserer Kanzlei. Zuverlässig, gründlich und absolut transparenter Festpreis.',
      tag: 'Dauerhafter Unterhalt',
    },
    {
      author: 'Elena M.',
      role: 'Praxismanagement',
      location: 'Rhein-Main-Gebiet',
      initials: 'EM',
      rating: 5,
      text: 'In unserer Praxis gelten strenge Hygieneanforderungen. Das Team arbeitet absolut gewissenhaft nach Desinfektionsplan. Eine klare Empfehlung!',
      tag: 'Medizinische Hygiene',
    },
  ];

  const securityFeatures = [
    {
      title: 'Betriebshaftpflicht',
      description: 'Voll versichert bis 3.000.000 € Deckungssumme für Sach- und Vermögensschäden.',
      icon: ShieldCheck,
    },
    {
      title: 'Qualitätsgarantie',
      description: 'Kostenlose Nachbesserung innerhalb von 24h bei berechtigten Beanstandungen.',
      icon: CheckCircle2,
    },
    {
      title: 'Festpreisgarantie',
      description: 'Verbindliches Angebot ohne nachträgliche Aufschläge oder versteckte Nebenkosten.',
      icon: Lock,
    },
  ];

  return (
    <section id="bewertungen" className="bg-slate-50/70 py-14 lg:py-18 border-y border-slate-100 relative overflow-hidden">
      {/* Anchor for alternate German identifier */}
      <span id="erfahrungen" className="absolute -top-24 pointer-events-none opacity-0" aria-hidden="true" />

      {/* Ambient background glow accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER & GOOGLE RATING BADGE                                   */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Trust Metric Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200/90 shadow-subtle mb-4">
            <div className="flex items-center gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-heading font-extrabold text-xs sm:text-sm text-slate-900">
              4.9 / 5.0 Kundenzufriedenheit
            </span>
            <span className="hidden sm:inline text-xs text-slate-500 font-sans">
              (Google Bewertungen &amp; Kundenstimmen)
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-[1.15]">
            Ergebnisse, die überzeugen.{' '}
            <span className="text-primary block sm:inline mt-1 sm:mt-0">Kunden, die uns vertrauen.</span>
          </h2>

          {/* Subline */}
          <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed mt-4">
            Ob regelmäßige Unterhaltsreinigung für Praxen und Kanzleien oder gründliche Einzugsreinigung für Privathaushalte – lesen Sie, was unsere Kunden im Raum Frankfurt und bundesweit berichten.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. INTERACTIVE BEFORE & AFTER COMPARISON SLIDER                            */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-card mb-12 sm:mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary font-heading mb-1">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Echtes Qualitätsversprechen</span>
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 tracking-tight">
                Sichtbarer Vorher-Nachher-Unterschied
              </h3>
            </div>

            {/* Quick Switcher Preset Buttons */}
            <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl self-start md:self-auto">
              <button
                type="button"
                onClick={() => setSliderPos(100)}
                className={`px-3 py-1.5 rounded-lg text-xs font-heading font-bold transition-all cursor-pointer ${
                  sliderPos === 100
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Vorher (100%)
              </button>
              <button
                type="button"
                onClick={() => setSliderPos(50)}
                className={`px-3 py-1.5 rounded-lg text-xs font-heading font-bold transition-all cursor-pointer ${
                  sliderPos > 0 && sliderPos < 100
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Vergleich (50%)
              </button>
              <button
                type="button"
                onClick={() => setSliderPos(0)}
                className={`px-3 py-1.5 rounded-lg text-xs font-heading font-bold transition-all cursor-pointer ${
                  sliderPos === 0
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Nachher (100%)
              </button>
            </div>
          </div>

          {/* Interactive Split-Image Frame */}
          <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[440px] rounded-2xl overflow-hidden select-none shadow-md border border-slate-200">
            {/* 1. AFTER Image (Background Layer) */}
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="Nachher: Hygienisch rein, glänzend versiegelt und bezugsfertig"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Nachher Badge */}
            <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-emerald-600/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm shadow-sm font-heading flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              <span>Nachher (Hygienisch rein &amp; glänzend)</span>
            </div>

            {/* 2. BEFORE Image (Clipped with clipPath) */}
            <div
              className="absolute inset-0 transition-[clip-path] duration-75 ease-out"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
                alt="Vorher: Baustaub, matte Fliesen und Schmutzrückstände"
                className="w-full h-full object-cover"
              />
              {/* Vorher Badge */}
              <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-slate-900/85 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm shadow-sm font-heading">
                Vorher (Baustaub &amp; Rückstände)
              </div>
            </div>

            {/* 3. Divider Line & Interactive Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.45)] z-20 pointer-events-none transition-all duration-75 ease-out"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center shadow-xl border-2 border-primary/40 pointer-events-none">
                <ChevronsLeftRight className="w-5 h-5 text-primary" />
              </div>
            </div>

            {/* 4. Invisible Range Input for Drag Interaction */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0 p-0"
              aria-label="Vorher-Nachher Bilderschieberegler"
            />
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-slate-500 font-sans">
            <span className="hidden sm:inline">Tipp: Ziehen Sie den Schieberegler oder nutzen Sie die Schnellwahl-Buttons.</span>
            <span className="sm:ml-auto">Objektbeispiel: Grund- und Feinreinigung nach Innenausbau</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. VERIFIED CLIENT TESTIMONIALS (3-CARD GRID)                              */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-subtle hover:shadow-card hover:border-primary/20 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Header: Stars & Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-sans border border-slate-200/60">
                    {item.tag}
                  </span>
                </div>

                {/* Quote Text */}
                <div className="relative mb-6">
                  <Quote className="w-6 h-6 text-primary/10 absolute -top-1.5 -left-1 pointer-events-none" />
                  <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed relative z-10 pl-3 italic">
                    &quot;{item.text}&quot;
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary font-heading font-extrabold text-sm flex items-center justify-center shrink-0">
                  {item.initials}
                </div>
                <div className="overflow-hidden">
                  <div className="font-heading font-bold text-slate-900 text-sm truncate flex items-center gap-1.5">
                    <span>{item.author}</span>
                    <span title="Verifizierter Kunde" className="inline-flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    </span>
                  </div>
                  <div className="font-sans text-xs text-slate-500 truncate">
                    {item.role} • <span className="text-slate-600 font-medium">{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* 4. BUSINESS SECURITY & INSURANCE BANNER                                    */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-subtle mt-10 lg:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {securityFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-start gap-4 ${idx > 0 ? 'pt-6 md:pt-0 md:pl-6' : ''}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-base">
                      {feat.title}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {feat.description}
                    </p>
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

export default SocialProof;
