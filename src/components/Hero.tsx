import React from 'react';
import { ShieldCheck, Star, Sparkles, CheckCircle2, ArrowRight, Clock, Award, Building2, Home } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-ice-light/30 to-white pt-8 pb-16 lg:pt-16 lg:pb-28">
      {/* Background Decorative Blur Elements */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-ice-blue/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 bg-aqua-vibrant/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-corporate-blue/5 border border-corporate-blue/15 text-corporate-blue mb-6">
              <Sparkles className="w-4 h-4 text-aqua-vibrant" />
              <span className="text-xs font-semibold tracking-wide uppercase">
                #1 Premium Reinigungsservice in Deutschland
              </span>
            </div>

            {/* Main Headline strictly matching requested spec */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-corporate-blue leading-[1.15] tracking-tight mb-6">
              Erstklassiger Reinigungsservice.{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue via-corporate-dark to-slate-900">
                Gründlich. Verlässlich. Transparent.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-8 max-w-2xl">
              Ob Büroräume, Gewerbeobjekte oder Ihr privates Zuhause – <strong>Obazee Clement Reinigung</strong> steht für höchste deutsche Sauberkeitsstandards, geschultes Fachpersonal und faire Festpreise.
            </p>

            {/* Key Service Highlights Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-8">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-aqua-vibrant flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Fairer m² Festpreis</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-aqua-vibrant flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Versichert & Geprüft</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-aqua-vibrant flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-700">100% Zufriedenheit</span>
              </div>
            </div>

            {/* CTA Buttons - sibling rule applied strictly */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                type="button"
                className="flex flex-row items-center justify-center gap-2 whitespace-nowrap px-8 py-4 text-base font-heading font-extrabold text-slate-900 bg-aqua-vibrant hover:bg-aqua-hover rounded-2xl shadow-lg hover:shadow-glow transition-all duration-300 transform active:scale-95 group"
              >
                <span>Reinigungsangebot kalkulieren</span>
                <ArrowRight className="w-5 h-5 text-slate-900 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="#services"
                className="flex flex-row items-center justify-center gap-2 whitespace-nowrap px-6 py-4 text-base font-semibold text-corporate-blue bg-white hover:bg-ice-light rounded-2xl border border-slate-200 shadow-sm transition-all duration-200"
              >
                <span>Unsere Leistungen</span>
              </a>
            </div>

            {/* Social Proof Bar */}
            <div className="mt-10 pt-8 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-slate-500 text-xs sm:text-sm">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="ml-1.5 font-bold text-slate-800 text-sm">4.9/5.0</span>
              </div>
              <div className="h-4 w-px bg-slate-300 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-corporate-blue" />
                <span>Über 500+ zufriedene Objekte</span>
              </div>
              <div className="h-4 w-px bg-slate-300 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-corporate-blue" />
                <span>Flexible Termine 24/7</span>
              </div>
            </div>

          </div>

          {/* Right Column Visual / Card Grid */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card Graphic */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-100 relative z-10">
                <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-corporate-blue">
                      Schnelle Online-Buchung
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">In unter 2 Minuten Preis berechnen</p>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-ice-light flex items-center justify-center text-corporate-blue font-bold">
                    100%
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-aqua-vibrant/50 transition-all cursor-pointer" onClick={onOpenBooking}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-slate-800 text-sm flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-corporate-blue" />
                        Büro- & Gewerbereinigung
                      </span>
                      <span className="text-xs font-bold text-corporate-blue bg-ice-light px-2 py-0.5 rounded-full">ab 1.50 € / m²</span>
                    </div>
                    <p className="text-xs text-slate-500">Tägliche, wöchentliche oder flexible Intervalle</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-aqua-vibrant/50 transition-all cursor-pointer" onClick={onOpenBooking}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-slate-800 text-sm flex items-center gap-2">
                        <Home className="w-4 h-4 text-corporate-blue" />
                        Unterhaltsreinigung
                      </span>
                      <span className="text-xs font-bold text-corporate-blue bg-ice-light px-2 py-0.5 rounded-full">ab 28 € / Std</span>
                    </div>
                    <p className="text-xs text-slate-500">Für Wohnungen, Häuser & Gewerbe</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-aqua-vibrant/50 transition-all cursor-pointer" onClick={onOpenBooking}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-slate-800 text-sm flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-corporate-blue" />
                        Fenster- & Grundreinigung
                      </span>
                      <span className="text-xs font-bold text-corporate-blue bg-ice-light px-2 py-0.5 rounded-full">Kostenloses Angebot</span>
                    </div>
                    <p className="text-xs text-slate-500">Streifenfreie Glas- und Intensivreinigung</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={onOpenBooking}
                    type="button"
                    className="flex flex-row items-center justify-center gap-2 whitespace-nowrap w-full py-3.5 text-sm font-heading font-extrabold text-white bg-corporate-blue hover:bg-corporate-dark rounded-xl transition-colors shadow-md"
                  >
                    <span>Jetzt unverbindlich anfragen</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Floating Trust Badge */}
              <div className="absolute -bottom-6 -left-6 bg-corporate-blue text-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white/20 z-20 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-aqua-vibrant/20 flex items-center justify-center text-aqua-vibrant">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-wide uppercase text-aqua-vibrant">Garantierte Qualität</div>
                  <div className="text-xs text-slate-200">Geprüftes & geschultes Personal</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
