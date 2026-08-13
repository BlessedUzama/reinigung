import React from 'react';
import { Star, Quote, Building, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Dr. Michael S.',
      role: 'Praxisinhaber',
      location: 'Frankfurt am Main',
      content: 'Herr Clement und sein Team reinigen unsere Praxisräume seit über 2 Jahren. Absolute Sterilität, Pünktlichkeit und Zuverlässigkeit. Sehr zu empfehlen!',
      rating: 5,
    },
    {
      name: 'Sabine Weber',
      role: 'Office Managerin',
      location: 'München',
      content: 'Unsere Büros glänzen jeden Montagfrüh. Die Kommunikation klappt reibungslos und Sonderwünsche werden sofort umgesetzt.',
      rating: 5,
    },
    {
      name: 'Thomas Hoffmann',
      role: 'Privatvermieter',
      location: 'Stuttgart',
      content: 'Die Grundreinigung nach dem Auszug unserer Mieter war erstklassig. Alles wie neu. Vielen Dank für den schnellen Einsatz!',
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-corporate-blue/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-aqua-vibrant/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-aqua-vibrant text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
            <Star className="w-3.5 h-3.5 fill-aqua-vibrant text-aqua-vibrant" />
            Echte Kundenstimmen
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mb-4">
            Was unsere Auftraggeber über uns sagen
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Verlässlichkeit spricht für sich. Lesen Sie Erfahrungsberichte von Geschäftskunden und Privathaushalten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/80 flex flex-col justify-between hover:border-aqua-vibrant/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-white/10" />
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{rev.content}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-700/80 flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-bold text-white text-base">{rev.name}</h3>
                  <p className="text-xs text-slate-400">{rev.role} • {rev.location}</p>
                </div>
                <CheckCircle2 className="w-5 h-5 text-aqua-vibrant" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 p-8 rounded-3xl bg-white/5 border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-heading font-extrabold text-aqua-vibrant">500+</div>
            <div className="text-xs text-slate-400 mt-1">Gereinigte Objekte</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-heading font-extrabold text-aqua-vibrant">100%</div>
            <div className="text-xs text-slate-400 mt-1">Zuverlässigkeitsquote</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-heading font-extrabold text-aqua-vibrant">24/7</div>
            <div className="text-xs text-slate-400 mt-1">Kundensupport</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-heading font-extrabold text-aqua-vibrant">4.9 / 5</div>
            <div className="text-xs text-slate-400 mt-1">Durchschnittsbewertung</div>
          </div>
        </div>

      </div>
    </section>
  );
};
