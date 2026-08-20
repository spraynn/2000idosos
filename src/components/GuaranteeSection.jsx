import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function GuaranteeSection() {
  return (
    <section className="px-4 py-16 bg-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto text-center rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 border border-purple-100 shadow-2xl shadow-purple-500/20">
        
        {/* Shield Icon Badge */}
        <div className="gradient-icon w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-purple-500/30 transform hover:scale-105 transition-transform">
          <ShieldCheck className="w-10 h-10 text-white" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3">
          Garantia de <span className="gradient-heading italic">7 Dias</span>
        </h2>
        
        <div className="w-20 h-1.5 gradient-bar mx-auto rounded-full mb-6"></div>

        <p className="text-slate-700 text-base sm:text-lg mb-8 max-w-lg mx-auto font-medium">
          Teste sem risco. Se não gostar, devolvemos seu dinheiro, sem perguntas.
        </p>

        <a
          href="https://pay.wiapy.com/hyGiO016LAxy"
          className="gradient-cta inline-flex items-center justify-center px-8 py-5 rounded-full text-white font-extrabold text-base sm:text-lg uppercase tracking-wider shadow-2xl transition-all cursor-pointer transform active:scale-95"
        >
          <ShieldCheck className="w-5 h-5 mr-2" />
          Comprar com segurança
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>

      </div>
    </section>
  );
}
