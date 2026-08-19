import React from 'react';
import { ArrowRight, ChevronRight, ShieldCheck, CheckCircle2, Star, Sparkles, Clock } from 'lucide-react';

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
      const target = document.getElementById('booking') || document.getElementById('contact');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 py-12 sm:py-16 lg:py-20">
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-highlight/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Conversion */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Trust Pill Badge (Broad & Premium) */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-highlight/25 border border-highlight/50 text-[#074b90] text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#3fd2c7]" />
              <span>Ihr Meisterbetrieb für erstklassige Sauberkeit & Werterhalt</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#074b90] leading-[1.12] tracking-tight">
              Professionalität, die man sieht.{' '}
              <span className="text-slate-900 block mt-2 sm:mt-3">
                Sauberkeit, der man vertraut.
              </span>
            </h1>

            {/* Supportive Paragraph */}
            <p className="font-sans text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mt-6">
              Obazee Clement Reinigung bietet erstklassigen Reinigungsservice für Privat- und Geschäftskunden. Wir stehen für Gründlichkeit, Zuverlässigkeit und transparente Preise.
            </p>

            {/* CTA Buttons (Strict DOM Flattening Applied) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-8 w-full sm:w-auto">
              <button
                type="button"
                onClick={handlePrimaryCta}
                className="flex flex-row items-center justify-center gap-2 whitespace-nowrap font-heading font-bold text-sm sm:text-base text-slate-950 bg-accent hover:bg-[#35c9be] px-7 py-4 rounded-xl shadow-[0_4px_18px_0_rgba(63,210,199,0.42)] hover:shadow-[0_6px_24px_rgba(63,210,199,0.52)] transition-all duration-200 transform active:scale-95 cursor-pointer"
              >
                <span>Kostenloses Angebot anfordern</span>
                <ArrowRight className="w-5 h-5 text-slate-950" />
              </button>

              <a
                href="#services"
                className="flex flex-row items-center justify-center gap-2 whitespace-nowrap font-heading font-semibold text-sm sm:text-base text-slate-800 hover:text-[#074b90] bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 px-6 py-4 rounded-xl shadow-sm transition-all duration-200 cursor-pointer"
              >
                <span>Unsere Leistungen entdecken</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            </div>

            {/* Trust Micro-Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10 pt-6 border-t border-slate-200/80 w-full">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                <span>100% Zufriedenheitsgarantie</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                <ShieldCheck className="w-4 h-4 text-[#074b90] flex-shrink-0" />
                <span>Voll versichert & geprüft</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Flexible Einsatzzeiten</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Trust Hero Media */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Frame Container */}
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Decorative Accent Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#3fd2c7] to-[#074b90] rounded-3xl opacity-20 blur-xl -z-10" />

              {/* Main Real-World Image */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1598124146163-36819847286d?q=80&w=2070&auto=format&fit=crop"
                  alt="Professionelle und streifenfreie Gebäudereinigung - Obazee Clement Reinigung"
                  className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />

                {/* Subtle Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Trust Card 1: Ratings */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-heading font-extrabold text-slate-900 text-sm sm:text-base">5.0</span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-500 text-xs font-sans">Höchste Kundenzufriedenheit</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
