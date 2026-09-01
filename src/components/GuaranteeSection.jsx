import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function GuaranteeSection() {
  const scrollToPricing = (e) => {
    e.preventDefault();
    const element = document.getElementById('pricing-cards') || document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="px-4 py-16 bg-white border-t border-slate-100 space-y-16">
      
      {/* Imagine chegar no atendimento já sabendo o que aplicar Box */}
      <div className="max-w-4xl mx-auto text-center rounded-3xl p-8 sm:p-12 bg-slate-900 text-white shadow-2xl space-y-6">
        <h2 className="font-heading font-black text-2xl sm:text-4xl leading-tight">
          Imagine chegar no atendimento já sabendo o que você pode aplicar
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Você não precisa depender dos mesmos exercícios. Não precisa perder tempo procurando atividades. Não precisa manter dezenas de arquivos espalhados.
        </p>

        <div className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/15 max-w-xl mx-auto">
          <p className="text-amber-300 font-extrabold text-lg sm:text-xl">
            Você tem uma Central inteira à sua disposição.
          </p>
          <p className="text-white font-bold text-sm sm:text-base mt-1">
            Pesquise. Escolha. Adapte. Aplique.
          </p>
        </div>

        <p className="text-green-400 font-bold text-base sm:text-lg">
          É muito mais praticidade para quem trabalha diariamente com idosos.
        </p>

        <div>
          <a
            href="#pricing"
            onClick={scrollToPricing}
            className="gradient-cta inline-flex items-center justify-center px-8 py-5 rounded-full text-white font-extrabold text-base sm:text-lg uppercase tracking-wider shadow-2xl transition-all cursor-pointer transform active:scale-95"
          >
            QUERO CONHECER A CENTRAL SÊNIOR
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>

      {/* 7-Day Guarantee Box */}
      <div className="max-w-3xl mx-auto text-center rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 border border-green-200 shadow-2xl shadow-green-600/15">
        
        {/* Shield Icon Badge */}
        <div className="gradient-icon w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-600/25 transform hover:scale-105 transition-transform">
          <ShieldCheck className="w-10 h-10 text-white" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-2">
          Garantia de <span className="gradient-heading italic">7 dias</span>
        </h2>

        <p className="text-green-800 font-bold text-sm sm:text-base uppercase tracking-wider mb-4">
          Experimente sem risco
        </p>
        
        <div className="w-20 h-1.5 gradient-bar mx-auto rounded-full mb-6"></div>

        <p className="text-slate-700 text-base sm:text-lg mb-4 max-w-lg mx-auto font-medium leading-relaxed">
          Você tem <strong>7 dias para conhecer a Central Sênior</strong>. Se entender que a plataforma e os materiais não são para você, basta solicitar o reembolso dentro do prazo da garantia.
        </p>

        <p className="text-slate-900 font-bold text-sm sm:text-base mb-8 max-w-md mx-auto">
          Você testa. Se gostar, continua. Se não gostar, pede seu dinheiro de volta.
        </p>

        <a
          href="https://pay.wiapy.com/hyGiO016LAxy"
          className="gradient-cta inline-flex items-center justify-center px-8 py-5 rounded-full text-white font-extrabold text-base sm:text-lg uppercase tracking-wider shadow-2xl transition-all cursor-pointer transform active:scale-95"
        >
          <ShieldCheck className="w-5 h-5 mr-2" />
          QUERO ACESSAR AGORA
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>

      </div>
    </section>
  );
}
