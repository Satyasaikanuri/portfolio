import React from 'react';
import { ArrowLeft, Home, Terminal } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6 text-center font-sans">
      <div className="max-w-md space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400 mx-auto shadow-glow">
          <Terminal className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h1 className="text-6xl font-black text-brand-500 tracking-tight font-mono">404</h1>
          <h2 className="text-2xl font-bold">Page Not Found</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The page or route you are searching for does not exist or has been moved.
          </p>
        </div>

        <a
          href="#home"
          onClick={() => window.location.reload()}
          className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold shadow-glow transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return to Portfolio</span>
        </a>
      </div>
    </div>
  );
}
