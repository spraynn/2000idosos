import React from 'react';
import { Check, X, ShoppingCart, MessageCircle, Gift } from 'lucide-react';

export default function PricingSection({ onBasicClick }) {
  const basicItems = [
    { txt: 'Acesso ao material principal', bonus: false, included: true },
    { txt: 'Atividades organizadas por nível', bonus: false, included: true },
    { txt: 'Acesso digital', bonus: false, included: true },
    { txt: 'Garantia de 7 dias', bonus: false, included: true },
    { txt: 'Bônus exclusivos', bonus: false, included: false },
    { txt: 'Atualizações mensais', bonus: false, included: false },
  ];

  const completeItems = [
    { txt: '+1000 Atividades e Exercícios para Idosos', bonus: false },
    { txt: 'Organizadas por nível e objetivo', bonus: false },
    { txt: 'Acesso digital', bonus: false },
    { txt: 'BÔNUS: +40 Atividades para Idosos com Mobilidade Reduzida', bonus: true },
    { txt: 'BÔNUS: +35 Atividades para Idosos em Recuperação Física', bonus: true },
    { txt: 'BÔNUS: Guia de Avaliação Física para Idosos', bonus: true },
    { txt: 'Atualizações mensais', bonus: false },
    { txt: 'Suporte prioritário', bonus: false },
    { txt: 'Garantia de 7 dias', bonus: false },
  ];

  return (
    <section id="pricing" className="px-4 py-16 bg-slate-50 scroll-mt-12 border-t border-slate-200">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Social Proof Counter Badge */}
        <div className="border border-slate-200 bg-white rounded-2xl py-3 px-6 text-center text-sm sm:text-base font-bold text-slate-700 max-w-md mx-auto shadow-sm flex items-center justify-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500 animate-ping"></span>
          <span>+1736 pessoas escolheram essa oferta</span>
        </div>

        {/* Section Title */}
        <div className="text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Escolha <span className="gradient-heading italic">Seu Plano</span>
          </h2>
          <div className="w-20 h-1.5 gradient-bar mx-auto rounded-full mt-4"></div>
        </div>

        {/* Pricing Cards Grid */}
        <div id="pricing-cards" className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto scroll-mt-20">
          
          {/* Basic Plan Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg flex flex-col justify-between relative hover:border-slate-300 transition-all">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-1 text-slate-900">
                Kit Básico
              </h3>
              <p className="text-center text-sm text-slate-500 mb-6 font-medium">
                Pro essencial
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
                {basicItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    {item.included ? (
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                    )}
                    <span className={item.included ? 'text-slate-800' : 'text-slate-400 line-through'}>
                      {item.txt}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onBasicClick}
              className="w-full text-center px-6 py-4 rounded-full bg-slate-800 hover:bg-slate-900 text-white font-extrabold uppercase text-sm shadow-md transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              Quero comprar!
            </button>
          </div>

          {/* Complete Plan Card (Highlighted) */}
          <div className="premium-card rounded-3xl p-6 sm:p-8 shadow-2xl shadow-orange-500/20 relative flex flex-col justify-between border-2 border-orange-500">
            
            {/* Highlight Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-premium-badge text-white text-xs font-extrabold px-6 py-2 rounded-full uppercase tracking-wider shadow-lg shadow-orange-500/40">
              Mais Escolhido
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-center mb-1 mt-2 text-slate-900">
                Kit Completo
              </h3>
              <p className="text-center text-xs font-bold text-orange-700 uppercase tracking-widest mb-2">
                Acesso total + 3 Bônus
              </p>

              {/* Hero Mockup Image Above Price */}
              <div className="relative my-3 max-w-xs mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-amber-500/20 rounded-full blur-2xl -z-10"></div>
                <img
                  src="/assets/hero-mockup-new.png"
                  alt="Mockup Kit Completo"
                  className="w-full h-auto max-h-44 object-contain drop-shadow-xl mx-auto"
                />
              </div>

              <div className="text-center mb-2">
                <div className="text-slate-400 line-through text-sm font-semibold">R$156</div>
                <div className="text-5xl sm:text-6xl font-extrabold text-green-600 my-1">
                  R$27,90
                </div>
                <div className="text-xs text-slate-500 font-medium">pagamento único</div>
                <div className="text-xs sm:text-sm text-green-600 font-bold mt-2 bg-green-50 py-1 px-3 rounded-full inline-block border border-green-200">
                  Você economiza R$128,10 + R$147 em bônus
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

              <ul className="space-y-3 text-sm text-slate-800 mb-8 border-t border-orange-100 pt-5">
                {completeItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    {item.bonus ? (
                      <Gift className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    ) : (
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    )}
                    <span className={item.bonus ? 'text-orange-700 font-bold' : 'font-semibold text-slate-800'}>
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
              Quero comprar!
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
