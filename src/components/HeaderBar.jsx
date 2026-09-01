import React from 'react';
import { ShoppingCart } from 'lucide-react';

export default function HeaderBar() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  const scrollToPricing = (e) => {
    e.preventDefault();
    const element = document.getElementById('pricing-cards') || document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Red Urgency Notification */}
      <div className="bg-red-600 text-white py-1.5 px-4 text-center font-extrabold text-xs sm:text-sm tracking-wide uppercase shadow-xs">
        <span>Oferta Válida Somente Hoje {formattedDate}</span>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Left Side: Desktop Menu Esquerdo (Logo + Status Badge) */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2 group">
            <img
              src="/assets/hero-logo-new.png"
              alt="Central Sênior Logo"
              className="h-10 sm:h-12 w-auto object-contain drop-shadow-xs group-hover:scale-105 transition-transform duration-300"
            />
          </a>
          <span className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-800 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
            Acesso Online Liberado
          </span>
        </div>

        {/* Right Side: Navigation Links & CTA Button */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-bold text-slate-700">
            <a href="#pricing" onClick={scrollToPricing} className="hover:text-green-600 transition-colors">
              Exercícios
            </a>
            <a href="#pricing" onClick={scrollToPricing} className="hover:text-green-600 transition-colors">
              Bônus
            </a>
            <a href="#pricing" onClick={scrollToPricing} className="hover:text-green-600 transition-colors">
              Garantia
            </a>
          </div>

          <a
            href="#pricing"
            onClick={scrollToPricing}
            className="gradient-cta inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 rounded-full text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <ShoppingCart className="w-4 h-4 mr-1.5" />
            <span>Garantir Acesso</span>
          </a>
        </div>

      </div>
    </header>
  );
}
