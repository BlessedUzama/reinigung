import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import SocialProof from './components/SocialProof';
import QuoteSection from './components/QuoteSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-accent/30 selection:text-slate-900 flex flex-col justify-between">
      <Navbar />
      <main className="pt-16 sm:pt-20 flex-grow">
        <Hero />
        <Services />
        <About />
        <SocialProof />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
}
