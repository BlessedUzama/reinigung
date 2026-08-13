import React from 'react';
import { Logo } from './Logo';

export function App() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#074b90] text-white p-6 gap-8 text-center">
      <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#3fd2c7] tracking-tight">
        Obazee Clement Reinigung - Development Sandbox
      </h1>
      
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-2xl flex items-center justify-center">
        <Logo className="h-40 sm:h-56 w-auto" fill="#3fd2c7" />
      </div>

      <p className="text-slate-300 text-sm max-w-md font-sans">
        Sandbox environment active. Ready for step-by-step component construction.
      </p>
    </div>
  );
}

export default App;
