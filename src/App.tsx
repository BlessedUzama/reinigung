import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { PremiumBookingForm } from './components/PremiumBookingForm';
import { Footer } from './components/Footer';
import { MessageCircle, Phone } from 'lucide-react';

export function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const scrollToBooking = () => {
    const bookingElement = document.getElementById('booking-section');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsBookingModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-aqua-vibrant selection:text-slate-900">
      {/* Top Banner Notice */}
      <div className="bg-corporate-dark text-white text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-aqua-vibrant animate-ping" />
        <span>Jetzt Herbst-Rabatt sichern: <strong>15% Rabatt</strong> auf alle regelmäßigen Büro- & Gewerbereinigungen!</span>
      </div>

      {/* Main Navbar */}
      <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* Services Grid */}
      <Services onSelectService={() => setIsBookingModalOpen(true)} />

      {/* Trust & Features */}
      <Features />

      {/* Embedded Booking Wizard Section */}
      <section id="booking-section" className="py-20 bg-slate-100 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-extrabold text-corporate-blue mb-3">
              Unverbindliches Festpreisangebot Berechnen
            </h2>
            <p className="text-slate-600 text-sm">
              Tragen Sie Ihre Rahmendaten ein und erhalten Sie umgehend Ihr maßgeschneidertes Angebot.
            </p>
          </div>
          <PremiumBookingForm />
        </div>
      </section>

      {/* Reviews & Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* Modal Popup for Quick Booking */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-3xl my-8">
            <PremiumBookingForm isModal={true} onClose={() => setIsBookingModalOpen(false)} />
          </div>
        </div>
      )}

      {/* Sticky Floating WhatsApp & Phone Bar */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3">
        <a
          href="https://api.whatsapp.com/send/?phone=4915210236967&text=Hallo+Obazee+Clement%2C+ich+interessiere+mich+f%C3%BCr+einen+Reinigungsservice."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact on WhatsApp"
          className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
        >
          <MessageCircle className="w-7 h-7" />
        </a>

        <a
          href="tel:+4915210236967"
          aria-label="Call Obazee Clement Reinigung"
          className="w-14 h-14 bg-corporate-blue hover:bg-corporate-dark text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-white"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}

export default App;
