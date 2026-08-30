import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Mail,
  ChevronDown,
  Loader2,
  AlertCircle,
  Phone,
  RefreshCw
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
  const [location, setLocation] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

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
          setErrors((prev) => ({ ...prev, service: '' }));
        }
      }
    };

    window.addEventListener('selectCleaningService', handleServiceSelect);
    return () => window.removeEventListener('selectCleaningService', handleServiceSelect);
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Strictly allow only digits, spaces, hyphens, and leading +
    const sanitized = e.target.value.replace(/[^\d\s\-+]/g, '');
    setPhone(sanitized);
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
  };

  const handleAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Strictly allow only numeric digits
    const sanitized = e.target.value.replace(/[^\d]/g, '');
    setArea(sanitized);
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!name.trim() || name.trim().length < 2) {
      newErrors.name = 'Bitte geben Sie Ihren vollständigen Namen ein';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
    }

    const digitsOnly = phone.replace(/\D/g, '');
    if (!phone.trim() || digitsOnly.length < 6) {
      newErrors.phone = 'Bitte geben Sie eine gültige Telefonnummer ein';
    }

    if (!service) {
      newErrors.service = 'Bitte wählen Sie eine Leistung aus';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/uzamablessed@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `Neue Reinigungsanfrage von ${name}`,
          _template: 'table',
          _captcha: 'false',
          Leistung: service,
          Haeufigkeit: frequency,
          Flaeche_m2: area ? `${area} m²` : 'Nicht angegeben',
          Wunschtermin: startDate || 'Ab sofort / Flexibel',
          Name: name,
          Email: email,
          Telefonnummer: phone,
          PLZ_Ort: location || 'Nicht angegeben',
          Notizen: notes || 'Keine zusätzlichen Notizen',
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setStatus('success');
      } else {
        throw new Error(data.message || 'Die Anfrage konnte nicht übermittelt werden. Bitte versuchen Sie es erneut.');
      }
    } catch (err: unknown) {
      console.error('Form submission error:', err);
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Es gab ein Problem beim Absenden. Bitte überprüfen Sie Ihre Internetverbindung oder rufen Sie uns direkt an.'
      );
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setName('');
    setEmail('');
    setPhone('');
    setLocation('');
    setArea('');
    setStartDate('');
    setNotes('');
    setErrors({});
    setErrorMessage('');
  };

  return (
    <section id="angebot" className="bg-slate-50/60 py-12 sm:py-16 lg:py-20 relative overflow-hidden border-t border-slate-200/80">
      {/* Decorative subtle ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/5 border border-primary/15 text-primary text-xs font-bold uppercase tracking-wider mb-3 font-heading">
            <Sparkles className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <span>Unverbindlich & Kostenlos</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight leading-snug">
            Kostenloses Festpreisangebot anfordern
          </h2>

          <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed mt-2 max-w-2xl mx-auto">
            Wählen Sie Ihre gewünschten Reinigungsleistungen aus – Zentrale in Frankfurt am Main, flexibler Service in ganz Deutschland. Wir erstellen Ihr maßgeschneidertes Angebot innerhalb von 24 Stunden.
          </p>
        </div>

        {/* Widened Form Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-xl relative transition-all duration-300">
          
          {/* SUCCESS STATE */}
          {status === 'success' ? (
            <div className="py-8 sm:py-12 flex flex-col items-center text-center max-w-xl mx-auto">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 shadow-sm ring-8 ring-emerald-50">
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>

              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 font-heading uppercase tracking-wider mb-3">
                Erfolgreich übermittelt
              </span>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Vielen Dank für Ihre Anfrage{name ? `, ${name}` : ''}!
              </h3>

              <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed mt-3">
                Ihre Angaben wurden direkt an uns übermittelt. Wir prüfen Ihre Wünsche sorgfältig und melden uns innerhalb von <strong className="text-slate-900 font-semibold">24 Stunden</strong> mit Ihrem maßgeschneiderten Festpreisangebot.
              </p>

              {/* Summary Pill Box */}
              <div className="w-full mt-6 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-left font-sans text-xs sm:text-sm text-slate-700 space-y-2">
                <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                  <span className="text-slate-500 font-medium">Leistung:</span>
                  <span className="font-bold text-slate-900">{service}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                  <span className="text-slate-500 font-medium">Rhythmus:</span>
                  <span className="font-semibold text-slate-900">{frequency}</span>
                </div>
                {area && (
                  <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                    <span className="text-slate-500 font-medium">Fläche:</span>
                    <span className="font-semibold text-slate-900">{area} m²</span>
                  </div>
                )}
                {location && (
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Ort:</span>
                    <span className="font-semibold text-slate-900">{location}</span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
                <a
                  href="tel:+4915210236967"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white font-heading font-bold text-xs sm:text-sm shadow-sm hover:bg-primary-dark transition-all duration-200 active:scale-95 whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" />
                  <span>Dringende Frage? +49 1521 0236967</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-heading font-semibold text-xs sm:text-sm transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Neue Anfrage stellen</span>
                </button>
              </div>
            </div>
          ) : (
            /* FORM STATE */
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              
              {/* ERROR ALERT */}
              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3 animate-in fade-in">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <p className="font-bold">Übertragungsfehler</p>
                    <p className="mt-0.5 text-red-700">{errorMessage}</p>
                    <p className="mt-1 text-xs text-red-600 font-medium">
                      Alternativ erreichen Sie uns direkt telefonisch unter{' '}
                      <a href="tel:+4915210236967" className="underline font-bold text-red-800">
                        +49 1521 0236967
                      </a>.
                    </p>
                  </div>
                </div>
              )}

              {/* Row 1: 3 Columns on Desktop (Leistung, Häufigkeit, Fläche) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                <div>
                  <label className="block font-heading font-bold text-xs sm:text-sm text-slate-800 mb-1.5">
                    Gewünschte Leistung *
                  </label>
                  <div className="relative">
                    <select
                      value={service}
                      disabled={status === 'loading'}
                      onChange={(e) => {
                        setService(e.target.value);
                        if (errors.service) setErrors((prev) => ({ ...prev, service: '' }));
                      }}
                      className={`w-full px-3.5 py-3 rounded-xl border text-xs sm:text-sm outline-none transition-all appearance-none cursor-pointer pr-10 disabled:opacity-60 ${
                        errors.service
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 bg-rose-50/20 text-slate-900'
                          : 'border-slate-200 bg-slate-50/50 text-slate-900 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20'
                      }`}
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
                  </div>
                  {errors.service && (
                    <p className="mt-1.5 text-xs text-rose-500 font-medium flex items-center gap-1">
                      {errors.service}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-heading font-bold text-xs sm:text-sm text-slate-800 mb-1.5">
                    Häufigkeit *
                  </label>
                  <div className="relative">
                    <select
                      value={frequency}
                      disabled={status === 'loading'}
                      onChange={(e) => setFrequency(e.target.value)}
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs sm:text-sm focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer pr-10 disabled:opacity-60"
                    >
                      {frequencyOptions.map((freq) => (
                        <option key={freq} value={freq}>
                          {freq}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block font-heading font-bold text-xs sm:text-sm text-slate-800 mb-1.5">
                    Fläche ca. (m²)
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder="z.B. 120"
                      value={area}
                      disabled={status === 'loading'}
                      onChange={handleAreaChange}
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all disabled:opacity-60"
                    />
                    <span className="absolute right-3.5 top-3 text-xs text-slate-400 font-medium">m²</span>
                  </div>
                </div>
              </div>

              {/* Row 2: 3 Columns on Desktop (Wunschtermin, PLZ/Ort, Telefon) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                <div>
                  <label className="block font-heading font-bold text-xs sm:text-sm text-slate-800 mb-1.5">
                    Wunschtermin / Start
                  </label>
                  <input
                    type="text"
                    placeholder="z.B. Ab sofort oder Wunschdatum"
                    value={startDate}
                    disabled={status === 'loading'}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block font-heading font-bold text-xs sm:text-sm text-slate-800 mb-1.5">
                    PLZ / Ort
                  </label>
                  <input
                    type="text"
                    placeholder="z.B. 60311 Frankfurt oder bundesweit"
                    value={location}
                    disabled={status === 'loading'}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block font-heading font-bold text-xs sm:text-sm text-slate-800 mb-1.5">
                    Telefonnummer *
                  </label>
                  <input
                    type="tel"
                    placeholder="+49 152 12345678"
                    value={phone}
                    disabled={status === 'loading'}
                    onChange={handlePhoneChange}
                    className={`w-full px-3.5 py-3 rounded-xl border text-xs sm:text-sm outline-none transition-all disabled:opacity-60 ${
                      errors.phone
                        ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 bg-rose-50/20 text-slate-900 placeholder:text-rose-300'
                        : 'border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-rose-500 font-medium flex items-center gap-1">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: 2 Columns on Desktop (Vollständiger Name, E-Mail) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block font-heading font-bold text-xs sm:text-sm text-slate-800 mb-1.5">
                    Vollständiger Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Vor- und Nachname"
                    value={name}
                    disabled={status === 'loading'}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                    }}
                    className={`w-full px-3.5 py-3 rounded-xl border text-xs sm:text-sm outline-none transition-all disabled:opacity-60 ${
                      errors.name
                        ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 bg-rose-50/20 text-slate-900 placeholder:text-rose-300'
                        : 'border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-rose-500 font-medium flex items-center gap-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-heading font-bold text-xs sm:text-sm text-slate-800 mb-1.5">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    placeholder="ihre-email@beispiel.de"
                    value={email}
                    disabled={status === 'loading'}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                    }}
                    className={`w-full px-3.5 py-3 rounded-xl border text-xs sm:text-sm outline-none transition-all disabled:opacity-60 ${
                      errors.email
                        ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 bg-rose-50/20 text-slate-900 placeholder:text-rose-300'
                        : 'border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-500 font-medium flex items-center gap-1">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 4: Full-Width Notes */}
              <div>
                <label className="block font-heading font-bold text-xs sm:text-sm text-slate-800 mb-1.5">
                  Besondere Wünsche / Notizen (optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="z.B. Schlüsselübergabe, Treppenhausreinigung, besondere Fensterflächen..."
                  value={notes}
                  disabled={status === 'loading'}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none disabled:opacity-60"
                />
              </div>

              {/* Centered Bottom Action & Trust Indicators */}
              <div className="pt-6 border-t border-slate-100 flex flex-col items-center justify-center text-center space-y-4">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto min-w-[280px] sm:min-w-[340px] px-8 py-3.5 sm:py-4 rounded-xl font-heading font-extrabold text-sm sm:text-base text-slate-950 bg-accent hover:bg-[#35c9be] shadow-cta hover:shadow-cta-hover transition-all duration-200 transform active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 text-slate-950 animate-spin flex-shrink-0" />
                      <span>Anfrage wird gesendet...</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4 text-slate-950 flex-shrink-0" />
                      <span>Kostenloses Angebot anfordern</span>
                    </>
                  )}
                </button>

                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    <span>100% kostenlos & unverbindlich</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>Antwort innerhalb 24h</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>Deutschlandweit im Einsatz</span>
                  </div>
                </div>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};

export default QuoteSection;
