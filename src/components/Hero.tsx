import React from 'react';
import { ArrowRight, ChevronRight, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';

// [STATE MANAGEMENT RULE]:
// All future state (such as the multi-step dynamic booking wizard triggered by Button 1)
// must strictly be implemented using the React Context API. External state management
// libraries (Redux, Zustand, etc.) are strictly prohibited.

interface HeroProps {
  onOpenBookingModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  const handlePrimaryCta = () => {
    if (onOpenBookingModal) {
      onOpenBookingModal();
    } else {
      const target = document.getElementById('angebot') || document.getElementById('contact');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/60 py-4 sm:py-6 lg:py-6 lg:min-h-[calc(100vh-4.5rem)] flex flex-col justify-center">
      {/* Ambient background soft glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-highlight/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Conversion */}
          <div className="flex flex-col items-start text-left justify-center">

            {/* Main Headline (Top Element in Left Column) */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-primary leading-[1.14] tracking-tight text-balance">
              Professionalität, die man sieht.{' '}
              <span className="text-slate-900 block mt-1 sm:mt-1.5">
                Sauberkeit, der man vertraut.
              </span>
            </h1>

            {/* Supportive Paragraph */}
            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mt-3.5 sm:mt-4">
              Obazee Clement Reinigung bietet erstklassigen Reinigungsservice für Privat- und Geschäftskunden – mit Hauptsitz in Frankfurt am Main und flexiblen Einsätzen in ganz Deutschland. Wir stehen für Gründlichkeit, Zuverlässigkeit und transparente Festpreise.
            </p>

            {/* CTA Button Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 mt-5 sm:mt-6 w-full sm:w-auto">
              <button
                type="button"
                onClick={handlePrimaryCta}
                className="flex flex-row items-center justify-center gap-2 whitespace-nowrap font-heading font-bold text-xs sm:text-sm text-slate-950 bg-accent hover:bg-[#35c9be] px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-cta hover:shadow-cta-hover transition-all duration-200 transform active:scale-[0.98] cursor-pointer"
              >
                <span>Kostenloses Angebot anfordern</span>
                <ArrowRight className="w-4 h-4 text-slate-950 flex-shrink-0" />
              </button>

              <a
                href="#services"
                className="flex flex-row items-center justify-center gap-2 whitespace-nowrap font-heading font-semibold text-xs sm:text-sm text-slate-800 hover:text-primary bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-primary/30 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl shadow-subtle hover:shadow-card transition-all duration-200 transform active:scale-[0.98] cursor-pointer"
              >
                <span>Unsere Leistungen entdecken</span>
                <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
              </a>
            </div>

            {/* Trust Micro-Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-200/80 w-full">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>100% Zufriedenheitsgarantie</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Voll versichert & geprüft</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Flexible Einsatzzeiten</span>
              </div>
            </div>

          </div>

          {/* Right Column: Expanded Visual Trust Hero Media */}
          <div className="relative flex items-center justify-center w-full h-full">
            
            {/* Visual Frame Container */}
            <div className="relative w-full h-full">
              
              {/* Decorative Accent Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#3fd2c7] to-[#074b90] rounded-3xl opacity-20 blur-xl -z-10" />

              {/* Main Real-World Image (Professional Cleaning Context) */}
              <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] xl:h-[520px] max-h-[540px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
                  alt="Professioneller Reinigungsservice Obazee Clement"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  loading="eager"
                />

                {/* Subtle bottom gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
