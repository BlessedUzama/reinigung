import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      <main className="pt-20 sm:pt-24">
        <Hero />
      </main>
    </div>
  );
}
