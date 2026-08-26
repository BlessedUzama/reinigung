import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Mail,
  ChevronDown
} from 'lucide-react';

const serviceOptions = [
  'Unterhalts- & Privatreinigung',
  'Büro- & Gewerbereinigung',
  'Glas- & Spezialreinigung',
  'Grund- & Intensivreinigung',
  'Bau- & Renovierungsreinigung',
];

const frequencyOptions = [
  'Einmalig',
  'Wöchentlich',
  '14-tägig',
  'Monatlich',
  'Nach Bedarf',
];

export const QuoteSection: React.FC = () => {
  const [service, setService] = useState<string>('Unterhalts- & Privatreinigung');
  const [frequency, setFrequency] = useState<string>('Wöchentlich');
  const [area, setArea] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Listen to external service selection events (e.g. from Services section buttons)
  useEffect(() => {
    const handleServiceSelect = (e: Event) => {
      const customEvent = e as CustomEvent<{ service?: string }>;
      if (customEvent.detail?.service) {
        const found = serviceOptions.find(
          (opt) => opt === customEvent.detail.service || customEvent.detail?.service?.includes(opt)
        );
        if (found) {
          setService(found);
        }
      }
    };

    window.addEventListener('selectCleaningService', handleServiceSelect);
    return () => window.removeEventListener('selectCleaningService', handleServiceSelect);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Angebotsanfrage: ${service} (${name || 'Kunde'})`);
    
    const bodyLines = [
      `Guten Tag Herr Obazee,`,
      ``,
      `ich interessiere mich für ein unverbindliches Festpreisangebot mit folgenden Parametern:`,
      ``,
      `• Gewünschte Leistung: ${service}`,
      `• Reinigungsrhythmus: ${frequency}`,
      `• Ungefähre Fläche: ${area ? `${area} m²` : 'Nicht angegeben'}`,
      `• Wunschtermin / Start: ${startDate || 'Ab sofort / Flexibel'}`,
      ``,
      `--- KONTAKTDATEN ---`,
      `• Name: ${name || 'Nicht angegeben'}`,
      `• Telefon: ${phone || 'Nicht angegeben'}`,
      `• E-Mail: ${email || 'Nicht angegeben'}`,
      `• Einsatzort / PLZ: ${location || 'Nicht angegeben'}`,
      ``,
      notes ? `• Zusätzliche Wünsche / Notizen:\n${notes}\n` : '',
      `Ich freue mich über Ihre zeitnahe Rückmeldung.`,
      ``,
      `Freundliche Grüße,`,
      name || 'Interessent'
    ];

    const mailtoUrl = `mailto:info@obazee-clement-reinigung.de?subject=${subject}&body=${encodeURIComponent(
      bodyLines.filter(Boolean).join('\n')
    )}`;

    window.location.href = mailtoUrl;
    setIsSubmitted(true);
  };

  return (
    <section id="angebot" className="bg-slate-50/60 py-12 sm:py-16 relative overflow-hidden border-t border-slate-200/80">
      {/* Decorative subtle ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/15 text-primary text-xs font-bold uppercase tracking-wider mb-3 font-heading">
            <Sparkles className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <span>Unverbindlich & Kostenlos</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-snug">
            Kostenloses Festpreisangebot anfordern
          </h2>

          <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed mt-2 max-w-xl mx-auto">
            Wählen Sie Ihre gewünschten Reinigungsleistungen aus – wir erstellen Ihr maßgeschneidertes Angebot innerhalb von 24 Stunden.
          </p>
        </div>

        {/* Compact 2-Column Form Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl relative">
          
          {isSubmitted && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <p className="font-bold">E-Mail Entwurf wurde erfolgreich erstellt!</p>
                <p className="mt-0.5 text-emerald-700">
                  Ihr Standard-Mailprogramm hat sich geöffnet. Sie können uns auch direkt schreiben an:{' '}
                  <a href="mailto:info@obazee-clement-reinigung.de" className="underline font-semibold">
                    info@obazee-clement-reinigung.de
                  </a>.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Row 1: Service & Frequency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-heading font-bold text-xs text-slate-800 mb-1.5">
                  Gewünschte Leistung *
                </label>
                <div className="relative">
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs sm:text-sm focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer pr-10"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block font-heading font-bold text-xs text-slate-800 mb-1.5">
                  Häufigkeit *
                </label>
                <div className="relative">
                  <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs sm:text-sm focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer pr-10"
                  >
                    {frequencyOptions.map((freq) => (
                      <option key={freq} value={freq}>
                        {freq}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Row 2: Area & Start Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-heading font-bold text-xs text-slate-800 mb-1.5">
                  Fläche ca. (m²)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="z.B. 120"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                  <span className="absolute right-3.5 top-2.5 text-xs text-slate-400 font-medium">m²</span>
                </div>
              </div>

              <div>
                <label className="block font-heading font-bold text-xs text-slate-800 mb-1.5">
                  Wunschtermin / Start
                </label>
                <input
                  type="text"
                  placeholder="z.B. Ab sofort oder Wunschdatum"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
            </div>

            {/* Row 3: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-heading font-bold text-xs text-slate-800 mb-1.5">
                  Vollständiger Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Vor- und Nachname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block font-heading font-bold text-xs text-slate-800 mb-1.5">
                  E-Mail-Adresse *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@beispiel.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
            </div>

            {/* Row 4: Phone & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-heading font-bold text-xs text-slate-800 mb-1.5">
                  Telefonnummer *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+49 152 12345678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block font-heading font-bold text-xs text-slate-800 mb-1.5">
                  PLZ / Ort
                </label>
                <input
                  type="text"
                  placeholder="z.B. 60311 Frankfurt"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
            </div>

            {/* Row 5: Notes */}
            <div>
              <label className="block font-heading font-bold text-xs text-slate-800 mb-1.5">
                Besondere Wünsche / Notizen (optional)
              </label>
              <textarea
                rows={2}
                placeholder="z.B. Schlüsselübergabe, Treppenhausreinigung, Fensterflächen..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
              />
            </div>

            {/* Submit Action Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-heading font-extrabold text-sm sm:text-base text-slate-950 bg-accent hover:bg-[#35c9be] shadow-cta hover:shadow-cta-hover transition-all duration-200 transform active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-950" />
                <span>Kostenloses Angebot anfordern</span>
              </button>

              {/* Compact Inline Trust Row */}
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-3.5 pt-3 border-t border-slate-100 text-[11px] sm:text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span>Kostenlos & unverbindlich</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span>Antwort in 24h</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span>Feste Endpreise</span>
                </div>
              </div>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};

export default QuoteSection;
