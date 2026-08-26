import React, { useState, useEffect } from 'react';
import {
  FileText,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  Send,
  Building2,
  Sparkles,
  Maximize,
  Zap,
  Hammer,
  MapPin,
  HelpCircle
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
  '60 - 120 m²',
  '120 - 250 m²',
  '250 - 500 m²',
  'über 500 m²'
];

export const QuoteSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('Unterhalts- & Privatreinigung');
  const [selectedFrequency, setSelectedFrequency] = useState<string>('Wöchentlich');
  const [selectedArea, setSelectedArea] = useState<string>('60 - 120 m²');
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
    <section id="angebot" className="bg-white py-20 sm:py-28 relative overflow-hidden border-t border-slate-100">
      {/* Decorative ambient gradients */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* Left Column: Context, Value Proposition & Trust Signals */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/5 border border-primary/15 text-primary text-xs font-bold uppercase tracking-wider mb-4 font-heading">
              <FileText className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Transparenz & Festpreisgarantie</span>
            </div>

            {/* Headline */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 tracking-tight leading-[1.15]">
              Kostenloses & unverbindliches{' '}
              <span className="text-primary block mt-1">Festpreisangebot erhalten</span>
            </h2>

            {/* Explanatory paragraph */}
            <p className="font-sans text-base text-slate-600 leading-relaxed mt-5">
              Jede Immobilie ist einzigartig. Bei uns erhalten Sie keine Pauschalen von der Stange, sondern ein präzise kalkuliertes Angebot, das exakt auf Ihre Quadratmeter, Ihre gewünschten Intervalle und Ihren Hygieneanspruch abgestimmt ist – ohne versteckte Zusatzkosten.
            </p>

            {/* 4 Trust Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full">
              
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-900">24h Express-Antwort</h4>
                  <p className="font-sans text-xs text-slate-600 mt-1 leading-snug">
                    Detailliertes Angebot garantiert innerhalb eines Werktags.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-accent-cyan/15 text-[#00a3e0] flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-900">Kostenlose Besichtigung</h4>
                  <p className="font-sans text-xs text-slate-600 mt-1 leading-snug">
                    Auf Wunsch unverbindliche Vor-Ort-Begehung in Frankfurt.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-900">100% Versichert</h4>
                  <p className="font-sans text-xs text-slate-600 mt-1 leading-snug">
                    Betriebshaftpflicht für maximale Sicherheit Ihres Objekts.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-900">Keine versteckten Kosten</h4>
                  <p className="font-sans text-xs text-slate-600 mt-1 leading-snug">
                    Verbindlicher Endpreis inklusive Reinigungsmittel & Anfahrt.
                  </p>
                </div>
              </div>

            </div>

            {/* Direct Contact Pill */}
            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-primary/5 via-highlight/10 to-transparent border border-primary/15 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider font-heading">
                  Direkter Draht zu Herrn Obazee
                </p>
                <p className="text-base font-bold text-slate-900 mt-0.5">
                  Lieber telefonisch abstimmen?
                </p>
              </div>
              <a
                href="tel:+4915210236967"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white hover:bg-primary-dark font-heading font-bold text-xs shadow-sm transition-all duration-200 active:scale-95 whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+49 1521 0236967</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Quote Request Form */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-slate-50/90 rounded-3xl p-6 sm:p-8 lg:p-9 border border-slate-200/90 shadow-card relative">
              
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

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Step 1: Select Service */}
                <div>
                  <label className="block font-heading font-bold text-sm text-slate-900 mb-2.5">
                    1. Gewünschte Reinigungsart auswählen:
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
                          className={`flex items-center gap-3 p-3 rounded-xl border text-left font-sans text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? 'bg-primary text-white border-primary shadow-sm ring-2 ring-primary/20'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-primary/40 hover:bg-slate-50'
                          }`}
                        >
                          <Icon className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-accent' : 'text-primary'}`} />
                          <span className="truncate">{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Cleaning Frequency */}
                <div>
                  <label className="block font-heading font-bold text-sm text-slate-900 mb-2.5">
                    2. Wie oft soll gereinigt werden?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {frequencyOptions.map((freq) => {
                      const isSelected = selectedFrequency === freq;
                      return (
                        <button
                          key={freq}
                          type="button"
                          onClick={() => setSelectedFrequency(freq)}
                          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border ${
                            isSelected
                              ? 'bg-accent text-slate-950 border-accent font-bold shadow-sm'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          {freq}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3: Area Size Selection */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <label className="font-heading font-bold text-sm text-slate-900">
                      3. Ungefähre Raum- / Gebäudefläche:
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
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer border ${
                            isSelected
                              ? 'bg-slate-900 text-white border-slate-900'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
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
                      placeholder="Oder genaue Quadratmeterzahl (z.B. 145)"
                      value={customArea}
                      onChange={(e) => setCustomArea(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                    <span className="absolute right-3.5 top-2.5 text-xs text-slate-400 font-medium">m²</span>
                  </div>
                </div>

                {/* Step 4: Contact Information */}
                <div className="pt-2 border-t border-slate-200/70">
                  <label className="block font-heading font-bold text-sm text-slate-900 mb-3">
                    4. Ihre Kontaktdaten für das Angebot:
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Vor- und Nachname *"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Telefonnummer (für Rückfragen) *"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="E-Mail-Adresse *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="PLZ / Ort (z.B. 60311 Frankfurt)"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <textarea
                      rows={2}
                      placeholder="Besondere Wünsche oder Anmerkungen (optional)"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit Action Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl font-heading font-extrabold text-sm sm:text-base text-slate-950 bg-accent hover:bg-[#35c9be] shadow-cta hover:shadow-cta-hover transition-all duration-200 transform active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>Unverbindliches Festpreisangebot anfordern</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 mt-3 text-[11px] sm:text-xs text-slate-500 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                    <span>100% kostenlos & unverbindlich • Kein Werbespam • Sichere Daten</span>
                  </div>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
