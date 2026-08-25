import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-accent/30 selection:text-slate-900">
      <Navbar />
      <main className="pt-16 sm:pt-20">
        <Hero />
      </main>
    </div>
  );
}
