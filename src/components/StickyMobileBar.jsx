import React from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';

export default function StickyMobileBar() {
  const scrollToPricing = (e) => {
    e.preventDefault();
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 shadow-2xl">
      <a
        href="#pricing"
        onClick={scrollToPricing}
        className="gradient-cta flex items-center justify-between w-full px-5 py-3.5 rounded-full text-white font-extrabold text-sm uppercase tracking-wide shadow-lg"
      >
        <div className="flex items-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          <span>Garantir Kit Completo</span>
        </div>
        <div className="flex items-center gap-1.5 bg-black/20 px-3 py-1 rounded-full text-yellow-300 font-mono font-bold">
          <span>R$20</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </a>
    </div>
  );
}
