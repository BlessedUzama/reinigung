import React, { useState } from 'react';
import { 
  Building2, 
  Home, 
  Sparkles, 
  Layers, 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Info, 
  Send 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface PremiumBookingFormProps {
  onClose?: () => void;
  isModal?: boolean;
}

export const PremiumBookingForm: React.FC<PremiumBookingFormProps> = ({ onClose, isModal = false }) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  
  // Form State
  const [serviceType, setServiceType] = useState<'bueroreinigung' | 'unterhaltsreinigung' | 'grundreinigung' | 'fensterreinigung'>('bueroreinigung');
  const [squareMeters, setSquareMeters] = useState<number>(80);
  const [roomsCount, setRoomsCount] = useState<number>(3);
  const [frequency, setFrequency] = useState<'einmalig' | 'woechentlich' | 'zweiwoechentlich' | 'monatlich'>('woechentlich');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('09:00');
  
  // Contact Details
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Price Calculation Logic
  const calculatePrice = () => {
    let basePricePerSqM = 1.6;
    if (serviceType === 'unterhaltsreinigung') basePricePerSqM = 1.4;
    if (serviceType === 'grundreinigung') basePricePerSqM = 2.5;
    if (serviceType === 'fensterreinigung') basePricePerSqM = 1.8;

    let subtotal = Math.max(60, squareMeters * basePricePerSqM);
    
    if (frequency === 'woechentlich') subtotal *= 0.85; // 15% discount for weekly
    if (frequency === 'zweiwoechentlich') subtotal *= 0.90; // 10% discount

    return Math.round(subtotal);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setStep(5); // Success step
      
      // Trigger celebrate confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log('Confetti error:', err);
      }
    }, 1200);
  };

  const estimatedPrice = calculatePrice();

  return (
    <div className={`w-full bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden ${isModal ? 'max-w-3xl mx-auto' : ''}`}>
      
      {/* Header Bar */}
      <div className="bg-corporate-blue text-white px-6 py-6 sm:px-8 sm:py-8 relative">
        <div className="flex items-center justify-between relative z-10">
          <div>
            <div className="flex items-center gap-2 text-aqua-vibrant text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Interaktiver Preiskalkulator & Buchung</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
              Reinigungsservice Buchen
            </h2>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              type="button"
              className="text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors"
            >
              Schließen
            </button>
          )}
        </div>

        {/* Step Progress Bar */}
        {step <= 4 && (
          <div className="mt-6 pt-4 border-t border-white/10">
            <div className="flex items-center justify-between text-xs text-slate-300 mb-2 font-medium">
              <span>Schritt {step} von 4</span>
              <span>
                {step === 1 && '1. Service währen'}
                {step === 2 && '2. Objektgröße ($m^2$)'}
                {step === 3 && '3. Wunschtermin'}
                {step === 4 && '4. Kontaktdaten'}
              </span>
            </div>
            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-aqua-vibrant transition-all duration-500 ease-out"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Form Content Area */}
      <div className="p-6 sm:p-8">
        {/* STEP 1: SERVICE TYPE */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-heading font-bold text-corporate-blue mb-1">
                Wählen Sie die gewünschte Reinigungsart
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Wählen Sie die Art des Objekts oder der Dienstleistung für ein maßgeschneidertes Angebot.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                onClick={() => setServiceType('bueroreinigung')}
                className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                  serviceType === 'bueroreinigung'
                    ? 'border-aqua-vibrant bg-aqua-vibrant/10 shadow-sm'
                    : 'border-slate-200 hover:border-ice-blue bg-slate-50/50'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-corporate-blue text-white">
                    <Building2 className="w-6 h-6" />
                  </div>
                  {serviceType === 'bueroreinigung' && (
                    <CheckCircle2 className="w-6 h-6 text-aqua-vibrant fill-corporate-blue" />
                  )}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-800 text-base mb-1">Büro- & Gewerbereinigung</h4>
                  <p className="text-xs text-slate-500">Für Büros, Kanzleien, Praxisräume und Verkaufsflächen.</p>
                </div>
              </div>

              <div
                onClick={() => setServiceType('unterhaltsreinigung')}
                className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                  serviceType === 'unterhaltsreinigung'
                    ? 'border-aqua-vibrant bg-aqua-vibrant/10 shadow-sm'
                    : 'border-slate-200 hover:border-ice-blue bg-slate-50/50'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-corporate-blue text-white">
                    <Home className="w-6 h-6" />
                  </div>
                  {serviceType === 'unterhaltsreinigung' && (
                    <CheckCircle2 className="w-6 h-6 text-aqua-vibrant fill-corporate-blue" />
                  )}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-800 text-base mb-1">Unterhaltsreinigung</h4>
                  <p className="text-xs text-slate-500">Regelmäßige Pflege für Ihr Zuhause oder Arbeitsplatz.</p>
                </div>
              </div>

              <div
                onClick={() => setServiceType('grundreinigung')}
                className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                  serviceType === 'grundreinigung'
                    ? 'border-aqua-vibrant bg-aqua-vibrant/10 shadow-sm'
                    : 'border-slate-200 hover:border-ice-blue bg-slate-50/50'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-corporate-blue text-white">
                    <Layers className="w-6 h-6" />
                  </div>
                  {serviceType === 'grundreinigung' && (
                    <CheckCircle2 className="w-6 h-6 text-aqua-vibrant fill-corporate-blue" />
                  )}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-800 text-base mb-1">Intensiv- & Grundreinigung</h4>
                  <p className="text-xs text-slate-500">Tiefenreinigung nach Renovierungen oder Umzügen.</p>
                </div>
              </div>

              <div
                onClick={() => setServiceType('fensterreinigung')}
                className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                  serviceType === 'fensterreinigung'
                    ? 'border-aqua-vibrant bg-aqua-vibrant/10 shadow-sm'
                    : 'border-slate-200 hover:border-ice-blue bg-slate-50/50'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-corporate-blue text-white">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  {serviceType === 'fensterreinigung' && (
                    <CheckCircle2 className="w-6 h-6 text-aqua-vibrant fill-corporate-blue" />
                  )}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-800 text-base mb-1">Fenster & Glasflächen</h4>
                  <p className="text-xs text-slate-500">Streifenfreie Reinigung inkl. Rahmensäuberung.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end pt-4">
              <button
                onClick={() => setStep(2)}
                type="button"
                className="flex flex-row items-center justify-center gap-2 whitespace-nowrap px-6 py-3 text-sm font-heading font-bold text-slate-900 bg-aqua-vibrant hover:bg-aqua-hover rounded-xl shadow-md transition-all transform active:scale-95"
              >
                <span>Weiter zu Schritt 2</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: SPACE DETAILS (m² & ROOMS) */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-heading font-bold text-corporate-blue mb-1">
                Objektgröße & Räumlichkeiten
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Geben Sie die geschätzte Fläche in Quadratmetern ($m^2$) und die Anzahl der Räume an.
              </p>
            </div>

            {/* Square Meters Slider */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <label className="font-semibold text-slate-700 text-sm">Fläche in Quadratmetern</label>
                <span className="font-heading font-extrabold text-2xl text-corporate-blue bg-white px-4 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                  {squareMeters} m²
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="500"
                step="5"
                value={squareMeters}
                onChange={(e) => setSquareMeters(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-aqua-vibrant"
              />
              <div className="flex justify-between text-xs text-slate-400 font-medium">
                <span>20 m²</span>
                <span>150 m²</span>
                <span>300 m²</span>
                <span>500+ m²</span>
              </div>
            </div>

            {/* Rooms Selector */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <label className="font-semibold text-slate-700 text-sm block">Anzahl der Räume / Büros</label>
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {[1, 2, 3, 4, 5, 6, 7, '8+'].map((num, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setRoomsCount(typeof num === 'number' ? num : 8)}
                    className={`min-w-[48px] h-12 rounded-xl font-heading font-bold text-sm transition-all ${
                      roomsCount === (typeof num === 'number' ? num : 8)
                        ? 'bg-corporate-blue text-white shadow-md'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Turnus / Frequency */}
            <div className="space-y-3">
              <label className="font-semibold text-slate-700 text-sm block">Gewünschter Turnus</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'woechentlich', label: 'Wöchentlich', badge: '15% Rabatt' },
                  { id: 'zweiwoechentlich', label: ' Alle 2 Wochen', badge: '10% Rabatt' },
                  { id: 'monatlich', label: 'Monatlich', badge: 'Standard' },
                  { id: 'einmalig', label: 'Einmalig', badge: 'Flexibel' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFrequency(item.id as any)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      frequency === item.id
                        ? 'border-aqua-vibrant bg-aqua-vibrant/10 font-bold text-corporate-blue'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-xs text-slate-400 font-semibold">{item.badge}</div>
                    <div className="text-sm font-semibold">{item.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Estimated Dynamic Price Banner */}
            <div className="p-4 rounded-2xl bg-ice-light border border-ice-blue/60 flex items-center justify-between">
              <div className="flex items-center gap-2 text-corporate-blue">
                <Info className="w-5 h-5" />
                <div>
                  <div className="text-xs font-semibold">Geschätzter Richtpreis</div>
                  <div className="text-xs text-slate-500">Unverbindlich inkl. MwSt.</div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-heading font-extrabold text-corporate-blue">ca. {estimatedPrice} €</span>
                <span className="text-xs text-slate-500 block">/ Reinigung</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4">
              <button
                onClick={() => setStep(1)}
                type="button"
                className="flex flex-row items-center justify-center gap-2 whitespace-nowrap px-5 py-3 text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Zurück</span>
              </button>

              <button
                onClick={() => setStep(3)}
                type="button"
                className="flex flex-row items-center justify-center gap-2 whitespace-nowrap px-6 py-3 text-sm font-heading font-bold text-slate-900 bg-aqua-vibrant hover:bg-aqua-hover rounded-xl shadow-md transition-all transform active:scale-95"
              >
                <span>Weiter zu Schritt 3</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: DATE & TIME */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-heading font-bold text-corporate-blue mb-1">
                Wunschtermin & Uhrzeit
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Wann sollen unsere Reinigungskräfte bei Ihnen vor Ort sein?
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-semibold text-slate-700 text-sm flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-corporate-blue" />
                  Wunschdatum
                </label>
                <input
                  type="date"
                  required
                  value={preferredDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-aqua-vibrant focus:border-transparent outline-none font-sans text-slate-800"
                />
              </div>

              <div className="space-y-2">
                <label className="font-semibold text-slate-700 text-sm flex items-center gap-2">
                  <Clock className="w-4 h-4 text-corporate-blue" />
                  Bevorzugte Uhrzeit
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-aqua-vibrant focus:border-transparent outline-none font-sans text-slate-800 bg-white"
                >
                  <option value="07:00">07:00 Uhr (Frühschicht)</option>
                  <option value="09:00">09:00 Uhr (Vormittag)</option>
                  <option value="12:00">12:00 Uhr (Mittag)</option>
                  <option value="15:00">15:00 Uhr (Nachmittag)</option>
                  <option value="18:00">18:00 Uhr (Nach Bürozeitschluss)</option>
                </select>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="font-semibold text-slate-700 text-xs uppercase tracking-wider mb-2">
                Zusammenfassung Ihrer Auswahl:
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div><span className="text-slate-400">Leistung:</span> <strong className="text-slate-700 capitalize">{serviceType}</strong></div>
                <div><span className="text-slate-400">Größe:</span> <strong className="text-slate-700">{squareMeters} m² ({roomsCount} Räume)</strong></div>
                <div><span className="text-slate-400">Turnus:</span> <strong className="text-slate-700 capitalize">{frequency}</strong></div>
                <div><span className="text-slate-400">Richtpreis:</span> <strong className="text-corporate-blue font-bold">ca. {estimatedPrice} €</strong></div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4">
              <button
                onClick={() => setStep(2)}
                type="button"
                className="flex flex-row items-center justify-center gap-2 whitespace-nowrap px-5 py-3 text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Zurück</span>
              </button>

              <button
                onClick={() => setStep(4)}
                type="button"
                className="flex flex-row items-center justify-center gap-2 whitespace-nowrap px-6 py-3 text-sm font-heading font-bold text-slate-900 bg-aqua-vibrant hover:bg-aqua-hover rounded-xl shadow-md transition-all transform active:scale-95"
              >
                <span>Weiter zu Schritt 4</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: CONTACT DETAILS */}
        {step === 4 && (
          <form onSubmit={handleFormSubmit} className="space-y-5">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-heading font-bold text-corporate-blue mb-1">
                Kontaktdaten für das Angebot
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Wir senden Ihnen die Bestätigung und das genaue Festpreisangebot umgehend zu.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-semibold text-slate-700 text-xs flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-corporate-blue" />
                  Vollständiger Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="z.B. Max Mustermann"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-aqua-vibrant focus:border-transparent outline-none text-sm text-slate-800"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-slate-700 text-xs flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-corporate-blue" />
                  E-Mail-Adresse *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@beispiel.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-aqua-vibrant focus:border-transparent outline-none text-sm text-slate-800"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-slate-700 text-xs flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-corporate-blue" />
                  Telefonnummer *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+49 170 1234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-aqua-vibrant focus:border-transparent outline-none text-sm text-slate-800"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-slate-700 text-xs flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-corporate-blue" />
                  Adresse / Ort *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Musterstraße 12, 10115 Berlin"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-aqua-vibrant focus:border-transparent outline-none text-sm text-slate-800"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-slate-700 text-xs block">
                Besondere Wünsche oder Hinweise (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Haben Sie Haustiere? Besondere Reinigungsmittel gewünscht?"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-aqua-vibrant focus:border-transparent outline-none text-sm text-slate-800"
              />
            </div>

            <div className="flex items-center justify-between pt-4">
              <button
                onClick={() => setStep(3)}
                type="button"
                className="flex flex-row items-center justify-center gap-2 whitespace-nowrap px-5 py-3 text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Zurück</span>
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex flex-row items-center justify-center gap-2 whitespace-nowrap px-8 py-3.5 text-sm font-heading font-extrabold text-slate-900 bg-aqua-vibrant hover:bg-aqua-hover rounded-xl shadow-lg hover:shadow-glow transition-all transform active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Wird gesendet...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-slate-900" />
                    <span>Jetzt Verbindlich Anfragen</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* STEP 5: SUCCESS & CONFIRMATION */}
        {step === 5 && (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-aqua-vibrant/20 text-aqua-vibrant rounded-full flex items-center justify-center mx-auto mb-4 border border-aqua-vibrant">
              <CheckCircle2 className="w-10 h-10 text-corporate-blue" />
            </div>

            <h3 className="text-2xl font-heading font-extrabold text-corporate-blue">
              Vielen Dank für Ihre Buchungsanfrage!
            </h3>

            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Wir haben Ihre Anfrage für <strong>{name}</strong> erfolgreich erhalten. Unser Kundenservice meldet sich innerhalb von 30 Minuten bei Ihnen.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left text-xs space-y-1 text-slate-600">
              <div><strong>Service:</strong> <span className="capitalize">{serviceType}</span> ({squareMeters} m²)</div>
              <div><strong>Geschätzter Preis:</strong> <span className="text-corporate-blue font-bold">{estimatedPrice} €</span></div>
              <div><strong>Bestätigung an:</strong> {email}</div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => {
                  setStep(1);
                  if (onClose) onClose();
                }}
                type="button"
                className="flex flex-row items-center justify-center gap-2 whitespace-nowrap px-6 py-3 text-sm font-heading font-bold text-white bg-corporate-blue hover:bg-corporate-dark rounded-xl shadow-md mx-auto"
              >
                <span>Fertig & Zurück zur Startseite</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
