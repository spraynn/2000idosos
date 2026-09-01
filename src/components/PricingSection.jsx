import React from 'react';
import { Check, ShoppingCart, MessageCircle, Gift, CheckCircle2 } from 'lucide-react';

export default function PricingSection({ onBasicClick }) {
  const essentialItems = [
    { txt: 'Acesso à biblioteca de exercícios', included: true },
    { txt: '+2.000 exercícios e atividades', included: true },
    { txt: 'Organização por nível e objetivo', included: true },
    { txt: 'Acesso digital', included: true },
    { txt: 'Garantia de 7 dias', included: true },
  ];

  const completeItems = [
    { txt: '+2.000 exercícios e atividades para idosos', bonus: false },
    { txt: 'Plataforma Central Sênior', bonus: false },
    { txt: 'Cadastro de alunos', bonus: false },
    { txt: 'Fichas e ferramentas de acompanhamento', bonus: false },
    { txt: 'Biblioteca organizada por objetivo e nível', bonus: false },
    { txt: '+40 atividades para mobilidade reduzida', bonus: true },
    { txt: '+35 atividades para recuperação física', bonus: true },
    { txt: 'Guia de Avaliação Física para Idosos', bonus: true },
    { txt: 'Atualizações da plataforma', bonus: false },
    { txt: 'Suporte prioritário', bonus: false },
    { txt: 'Garantia de 7 dias', bonus: false },
  ];

  return (
    <section id="pricing" className="px-4 py-16 bg-slate-50 scroll-mt-12 border-t border-slate-200">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Section Title */}
        <div className="text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Escolha <span className="gradient-heading italic">seu acesso</span>
          </h2>
          <div className="w-20 h-1.5 gradient-bar mx-auto rounded-full mt-4"></div>
        </div>

        {/* Pricing Cards Grid */}
        <div id="pricing-cards" className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto scroll-mt-20">
          
          {/* ESSENTIAL PLAN CARD */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg flex flex-col justify-between relative hover:border-slate-300 transition-all">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-center mb-1 text-slate-900 uppercase">
                ACESSO ESSENCIAL
              </h3>
              <p className="text-center text-sm font-semibold text-slate-500 mb-6">
                Para começar
              </p>

              <div className="text-center mb-4">
                <div className="text-slate-400 line-through text-sm font-semibold">R$97</div>
                <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 my-1">
                  R$9,90
                </div>
                <div className="text-xs text-slate-500 font-medium">pagamento único</div>
              </div>

              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-200">
                  <MessageCircle className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-[10px] font-bold uppercase tracking-wide text-green-700">
                    Entrega via WhatsApp
                  </span>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-slate-700 mb-8 border-t border-slate-100 pt-6">
                {essentialItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-slate-800 font-semibold">{item.txt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onBasicClick}
              className="w-full text-center px-6 py-4 rounded-full bg-slate-800 hover:bg-slate-900 text-white font-extrabold uppercase text-sm shadow-md transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              QUERO ACESSAR A CENTRAL
            </button>
          </div>

          {/* COMPLETE PLAN CARD (HIGHLIGHTED) */}
          <div className="premium-card rounded-3xl p-6 sm:p-8 shadow-2xl shadow-green-500/20 relative flex flex-col justify-between border-2 border-green-600">
            
            {/* Highlight Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-premium-badge text-white text-xs font-extrabold px-6 py-2 rounded-full uppercase tracking-wider shadow-lg shadow-green-600/30 flex items-center gap-1">
              ⭐ MAIS ESCOLHIDO
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-center mb-1 mt-2 text-slate-900 uppercase">
                ACESSO COMPLETO
              </h3>
              <p className="text-center text-xs font-extrabold text-green-700 uppercase tracking-widest mb-2">
                Acesso completo à Central Sênior
              </p>

              {/* Hero Mockup Image Above Price */}
              <div className="relative my-3 max-w-xs mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-emerald-500/20 rounded-full blur-2xl -z-10"></div>
                <img
                  src="/assets/hero-mockup-new.png"
                  alt="Mockup Central Sênior Completa"
                  className="w-full h-auto max-h-44 object-contain drop-shadow-xl mx-auto"
                />
              </div>

              <div className="text-center mb-2">
                <div className="text-slate-400 line-through text-sm font-semibold">R$156</div>
                <div className="text-5xl sm:text-6xl font-extrabold text-green-600 my-1">
                  R$27,90
                </div>
                <div className="text-xs text-slate-500 font-medium">pagamento único</div>
                <div className="text-xs sm:text-sm text-green-700 font-bold mt-2 bg-green-50 py-1.5 px-3 rounded-full inline-block border border-green-200">
                  Você recebe tudo em um único acesso.
                </div>
              </div>

              <div className="flex justify-center my-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 border border-green-300">
                  <MessageCircle className="w-3.5 h-3.5 text-green-700" />
                  <span className="text-[10px] font-bold uppercase tracking-wide text-green-800">
                    Entrega via WhatsApp
                  </span>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-slate-800 mb-8 border-t border-green-100 pt-5">
                {completeItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    {item.bonus ? (
                      <Gift className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    )}
                    <span className={item.bonus ? 'text-green-800 font-bold' : 'font-semibold text-slate-800'}>
                      {item.txt}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://pay.wiapy.com/hyGiO016LAxy"
              className="gradient-cta flex items-center justify-center w-full px-8 py-5 rounded-full text-white font-extrabold text-base sm:text-lg uppercase tracking-wider shadow-xl transition-all cursor-pointer transform active:scale-95"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              QUERO ACESSAR A CENTRAL SÊNIOR
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
