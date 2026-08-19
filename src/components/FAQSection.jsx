import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const faqs = [
    {
      q: 'Como recebo o material?',
      a: 'A entrega é feita via WhatsApp! Logo após a confirmação do pagamento, você recebe no seu WhatsApp o link de acesso ao material completo, com download imediato.',
    },
    {
      q: 'Funciona no celular?',
      a: 'Sim! Acessa pelo celular, tablet ou computador, a qualquer hora e em qualquer lugar.',
    },
    {
      q: 'Preciso de experiência?',
      a: 'Não! O material foi feito pra ser applied por qualquer profissional ou cuidador, independente do nível de experiência.',
    },
    {
      q: 'As atividades são fáceis de aplicar?',
      a: 'Sim! Todas foram criadas pra ser simples, claras e prontas pra usar. Não precisa criar nada do zero.',
    },
    {
      q: 'O acesso é imediato?',
      a: 'Sim! Logo após a confirmação do pagamento, você recebe o acesso direto no seu WhatsApp, na hora, sem espera.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="px-4 py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto space-y-10">
        
        {/* Title */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 rounded-full bg-purple-50 border border-purple-200">
            <HelpCircle className="w-4 h-4 text-purple-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
              Tire Suas Dúvidas
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Perguntas <span className="gradient-heading italic">Frequentes</span>
          </h2>
          <div className="w-20 h-1.5 gradient-bar mx-auto rounded-full mt-4"></div>
          <p className="text-slate-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Tirando aquelas dúvidas que aparecem antes da compra.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:border-purple-300 transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left font-bold text-slate-900 text-base sm:text-lg flex items-center justify-between gap-4 hover:text-purple-700 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-purple-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
