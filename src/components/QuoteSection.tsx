import React, { useState, useEffect } from 'react';
import {
  Clock,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Building2,
  Sparkles,
  Maximize,
  Zap,
  Hammer,
  MapPin,
  Mail
} from 'lucide-react';

interface ServiceOption {
  id: string;
  label: string;
  icon: React.ElementType;
}

const serviceOptions: ServiceOption[] = [
  { id: 'Unterhalts- & Privatreinigung', label: 'Unterhaltsreinigung (Privat)', icon: Sparkles },
  { id: 'Büro- & Gewerbereinigung', label: 'Büro- & Praxisreinigung', icon: Building2 },
  { id: 'Glas- & Spezialreinigung', label: 'Fenster- & Glasreinigung', icon: Maximize },
  { id: 'Grund- & Intensivreinigung', label: 'Grund- & Intensivreinigung', icon: Zap },
  { id: 'Bau- & Renovierungsreinigung', label: 'Bau- & Renovierungsreinigung', icon: Hammer },
];

const frequencyOptions = [
  'Einmalig',
  'Wöchentlich',
  '14-tägig',
  'Monatlich',
  'Nach Bedarf'
];

const areaQuickOptions = [
  'bis 60 m²',
  '60 – 120 m²',
  '120 – 250 m²',
  '> 250 m²'
];

export const QuoteSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('Unterhalts- & Privatreinigung');
  const [selectedFrequency, setSelectedFrequency] = useState<string>('Wöchentlich');
  const [selectedArea, setSelectedArea] = useState<string>('60 – 120 m²');
  const [customArea, setCustomArea] = useState<string>('');
  
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
          (opt) => opt.id === customEvent.detail.service || opt.label === customEvent.detail.service
        );
        if (found) {
          setSelectedService(found.id);
        }
      }
    };

    window.addEventListener('selectCleaningService', handleServiceSelect);
    return () => window.removeEventListener('selectCleaningService', handleServiceSelect);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const finalArea = customArea.trim() ? `${customArea.trim()} m²` : selectedArea;
    const subject = encodeURIComponent(`Angebotsanfrage: ${selectedService} (${name || 'Kunde'})`);
    
    const bodyLines = [
      `Guten Tag Herr Obazee,`,
      ``,
      `ich interessiere mich für ein unverbindliches Festpreisangebot mit folgenden Parametern:`,
      ``,
      `• Gewünschte Leistung: ${selectedService}`,
      `• Reinigungsrhythmus: ${selectedFrequency}`,
      `• Ungefähre Fläche: ${finalArea}`,
      ``,
      `--- KONTAKTDATEN ---`,
      `• Name: ${name || 'Nicht angegeben'}`,
      `• Telefon: ${phone || 'Nicht angegeben'}`,
      `• E-Mail: ${email || 'Nicht angegeben'}`,
      `• Einsatzort / PLZ: ${location || 'Nicht angegeben'}`,
      ``,
      notes ? `• Zusätzliche Wünsche / Bemerkungen:\n${notes}\n` : '',
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
    <section id="angebot" className="bg-slate-50/60 py-20 sm:py-28 relative overflow-hidden border-t border-slate-200/80">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/5 border border-primary/15 text-primary text-xs font-bold uppercase tracking-wider mb-4 font-heading">
            <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
            <span>Unverbindlich & Kostenlos</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-[1.15]">
            Kostenloses Festpreisangebot <span className="text-primary block sm:inline">anfordern</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed mt-4 max-w-2xl mx-auto">
            Wählen Sie Ihre gewünschten Reinigungsleistungen aus – wir erstellen Ihr maßgeschneidertes Angebot innerhalb von 24 Stunden.
          </p>
        </div>

        {/* Unified Elevated Form Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-card-hover relative">
          
          {isSubmitted && (
            <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-bold">E-Mail Entwurf wurde erstellt!</p>
                <p className="text-xs mt-0.5 text-emerald-700">
                  Ihr E-Mail-Programm hat sich mit allen vorausgefüllten Angaben geöffnet. Falls Sie kein Standard-Mailprogramm nutzen, schreiben Sie uns gerne direkt an{' '}
                  <a href="mailto:info@obazee-clement-reinigung.de" className="underline font-semibold">
                    info@obazee-clement-reinigung.de
                  </a>.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-7">
            
            {/* Schritt 1: Reinigungsart wählen */}
            <div>
              <label className="block font-heading font-bold text-sm text-slate-900 mb-3">
                Schritt 1: Reinigungsart wählen
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {serviceOptions.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = selectedService === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedService(opt.id)}
                      className={`flex items-center gap-3 p-3.5 rounded-xl border text-left font-sans text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-primary text-white border-primary shadow-sm ring-2 ring-primary/20'
                          : 'bg-slate-50/70 text-slate-700 border-slate-200 hover:border-primary/40 hover:bg-slate-100/70'
                      }`}
                    >
                      <Icon className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-accent' : 'text-primary'}`} />
                      <span className="truncate">{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Schritt 2: Häufigkeit */}
            <div>
              <label className="block font-heading font-bold text-sm text-slate-900 mb-3">
                Schritt 2: Häufigkeit
              </label>
              <div className="flex flex-wrap gap-2">
                {frequencyOptions.map((freq) => {
                  const isSelected = selectedFrequency === freq;
                  return (
                    <button
                      key={freq}
                      type="button"
                      onClick={() => setSelectedFrequency(freq)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border ${
                        isSelected
                          ? 'bg-accent text-slate-950 border-accent font-bold shadow-sm'
                          : 'bg-slate-50/70 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/70'
                      }`}
                    >
                      {freq}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Schritt 3: Ungefähre Fläche in m² */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="font-heading font-bold text-sm text-slate-900">
                  Schritt 3: Ungefähre Fläche in m²
                </label>
                <span className="text-xs text-slate-500 font-medium">Schätzwert genügt</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {areaQuickOptions.map((area) => {
                  const isSelected = selectedArea === area && !customArea;
                  return (
                    <button
                      key={area}
                      type="button"
                      onClick={() => {
                        setSelectedArea(area);
                        setCustomArea('');
                      }}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer border ${
                        isSelected
                          ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                          : 'bg-slate-50/70 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/70'
                      }`}
                    >
                      {area}
                    </button>
                  );
                })}
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Oder genaue Quadratmeterzahl eingeben (z.B. 145)"
                  value={customArea}
                  onChange={(e) => setCustomArea(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
                <span className="absolute right-4 top-3 text-xs text-slate-400 font-medium">m²</span>
              </div>
            </div>

            {/* Schritt 4: Kontaktdaten */}
            <div className="pt-3 border-t border-slate-100">
              <label className="block font-heading font-bold text-sm text-slate-900 mb-3">
                Schritt 4: Kontaktdaten
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <input
                  type="text"
                  required
                  placeholder="Vor- und Nachname *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
                <input
                  type="tel"
                  required
                  placeholder="Telefonnummer *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <input
                  type="email"
                  required
                  placeholder="E-Mail-Adresse *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="PLZ / Ort (z.B. 60311 Frankfurt)"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div>
                <textarea
                  rows={2}
                  placeholder="Zusätzliche Notizen oder Wunschtermin (optional)"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                />
              </div>
            </div>

            {/* Submit Action Button */}
            <div>
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl font-heading font-extrabold text-sm sm:text-base text-slate-950 bg-accent hover:bg-[#35c9be] shadow-cta hover:shadow-cta-hover transition-all duration-200 transform active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-950" />
                <span>Angebot per E-Mail anfragen</span>
              </button>

              <div className="flex items-center justify-center gap-2 mt-3 text-[11px] sm:text-xs text-slate-500 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span>100% kostenlos & unverbindlich • Kein Spam • Schnelle Antwort</span>
              </div>
            </div>

          </form>

        </div>

        {/* Horizontal Trust Bar (Below Form) */}
        <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-slate-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            
            <div className="flex flex-col items-center p-3 rounded-2xl bg-white/70 border border-slate-200/60 shadow-subtle">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-2">
                <Clock className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-xs sm:text-sm text-slate-900">24h Express-Antwort</span>
              <span className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Schnell & verbindlich</span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-2xl bg-white/70 border border-slate-200/60 shadow-subtle">
              <div className="w-10 h-10 rounded-xl bg-accent-cyan/15 text-[#00a3e0] flex items-center justify-center mb-2">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-xs sm:text-sm text-slate-900">Kostenlose Besichtigung</span>
              <span className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Vor Ort in Frankfurt</span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-2xl bg-white/70 border border-slate-200/60 shadow-subtle">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-2">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-xs sm:text-sm text-slate-900">100% Versichert</span>
              <span className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Geprüfte Qualität</span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-2xl bg-white/70 border border-slate-200/60 shadow-subtle">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-2">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-xs sm:text-sm text-slate-900">Feste Endpreise</span>
              <span className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Ohne versteckte Kosten</span>
            </div>

          </div>

          {/* Direct telephone touchpoint */}
          <div className="mt-6 text-center">
            <p className="text-xs text-slate-500 font-sans">
              Sie möchten lieber direkt sprechen?{' '}
              <a
                href="tel:+4915210236967"
                className="font-semibold text-primary hover:text-primary-dark underline inline-flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                <span>+49 1521 0236967</span>
              </a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default QuoteSection;
