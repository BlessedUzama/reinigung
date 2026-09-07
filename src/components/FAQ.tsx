import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Muss ich Reinigungsmittel oder Geräte bereitstellen?',
    answer:
      'Nein, Sie müssen sich um nichts kümmern. Unser Fachteam bringt alle erforderlichen Spezialgeräte und zertifizierten, umweltschonenden Reinigungsmittel vollständig mit.',
  },
  {
    question: 'Wie schnell erhalte ich mein Festpreisangebot?',
    answer:
      'Nach Eingang Ihrer Anfrage über das Formular oder telefonisch erhalten Sie in der Regel innerhalb von 24 Stunden ein detailliertes und verbindliches Festpreisangebot ohne versteckte Kosten.',
  },
  {
    question: 'Sind die Arbeiten und Mitarbeiter versichert?',
    answer:
      'Ja, Obazee Clement Reinigung verfügt über eine umfassende Betriebshaftpflichtversicherung mit hoher Deckungssumme für Personen-, Sach- und Vermögensschäden.',
  },
  {
    question: 'Wie läuft die Schlüsselübergabe bei Gewerbe- oder Abwesenheitsreinigung?',
    answer:
      'Höchste Diskretion und Zuverlässigkeit sind garantiert. Wir bieten dokumentierte Schlüsselübergabeprotokolle oder führen die Reinigung flexibel nach Ihren individuellen Betriebs- und Öffnungszeiten durch.',
  },
  {
    question: 'Entstehen im Raum Frankfurt zusätzliche Anfahrtskosten?',
    answer:
      'Im Großraum Frankfurt am Main fallen für Standardeinsätze keine gesonderten Anfahrtskosten an. Bei bundesweiten Spezialeinsätzen wird die Anfahrt transparent im Festpreis kalkuliert.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-12 lg:py-16 border-t border-slate-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Clean heading without eyebrow badge) */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight text-center mb-3">
            Häufig gestellte Fragen (FAQ)
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600 text-center max-w-xl mx-auto">
            Alles Wissenswerte zu unseren Abläufen, Reinigungsmitteln und Konditionen auf einen Blick.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-200 hover:border-primary/30"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 group"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-slate-900 group-hover:text-primary transition-colors">
                    {item.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors">
                    <ChevronDown
                      className={`w-4 h-4 text-slate-600 group-hover:text-primary transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-primary' : ''
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-200 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 pt-1 text-slate-600 font-sans text-sm sm:text-base leading-relaxed border-t border-slate-100">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
