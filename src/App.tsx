import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { PremiumBookingForm } from './components/PremiumBookingForm';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <PremiumBookingForm />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
