import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const faqs = [
    {
      q: 'Como vou receber o material?',
      a: 'O acesso é imediato após a confirmação do pagamento. Você receberá o link de download direto no seu WhatsApp e no seu e-mail cadastrado.',
    },
    {
      q: 'Preciso de equipamentos pra aplicar as atividades?',
      a: 'Não! O kit conta com exercícios com e sem equipamentos (como bastões, bolas e elásticos), adaptáveis para qualquer estrutura ou atendimento em domicílio.',
    },
    {
      q: 'Serve para idosos com limitações físicas ou de mobilidade?',
      a: 'Sim! As atividades são divididas por níveis e incluem bônus focados em idosos cadeirantes, com mobilidade reduzida ou em processo de recuperação física.',
    },
    {
      q: 'O pagamento é único ou mensalidade?',
      a: 'Pagamento único! Você paga apenas uma vez e tem acesso vitalício a todo o conteúdo e atualizações.',
    },
    {
      q: 'Tenho garantia se não me adaptar ao material?',
      a: 'Sim, você tem 7 dias de garantia incondicional. Se por qualquer motivo achar que o material não é pra você, devolvemos 100% do seu dinheiro.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="px-4 py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Title Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 rounded-full bg-orange-50 border border-orange-200">
            <HelpCircle className="w-4 h-4 text-orange-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-orange-700">
              Dúvidas Frequentes
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Perguntas <span className="gradient-heading italic">Frequentes</span>
          </h2>
          <div className="w-20 h-1.5 gradient-bar mx-auto rounded-full mt-4"></div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:border-orange-300 transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left font-bold text-slate-900 text-base sm:text-lg flex items-center justify-between gap-4 hover:text-orange-700 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-3">
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
