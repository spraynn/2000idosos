import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const faqs = [
    {
      q: 'Como recebo o acesso?',
      a: 'Após a confirmação do pagamento, você recebe as instruções para acessar a Central Sênior.',
    },
    {
      q: 'Funciona pelo celular?',
      a: 'Sim. A Central Sênior foi pensada para ser acessada pelo celular, tablet ou computador.',
    },
    {
      q: 'Posso cadastrar meus alunos?',
      a: 'Sim. A plataforma possui recursos para organizar seus alunos e facilitar o acompanhamento.',
    },
    {
      q: 'Os exercícios ficam dentro da plataforma?',
      a: 'Sim. A biblioteca de exercícios e atividades fica disponível dentro da Central Sênior.',
    },
    {
      q: 'Preciso instalar algum aplicativo?',
      a: 'A Central pode ser acessada pelo navegador, sem depender de instalação de um aplicativo tradicional.',
    },
    {
      q: 'Os exercícios são organizados?',
      a: 'Sim. A biblioteca possui organização por categorias, objetivos e níveis para facilitar a busca.',
    },
    {
      q: 'Posso usar os materiais profissionalmente?',
      a: 'O acesso permite utilização no contexto profissional conforme os termos de licença apresentados no momento da compra.',
    },
    {
      q: 'Receberei atualizações?',
      a: 'Sim. A Central Sênior poderá receber novos conteúdos, melhorias e atualizações.',
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 rounded-full bg-green-50 border border-green-200">
            <HelpCircle className="w-4 h-4 text-green-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-green-700">
              Perguntas frequentes
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Perguntas <span className="gradient-heading italic">frequentes</span>
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
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:border-green-300 transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left font-bold text-slate-900 text-base sm:text-lg flex items-center justify-between gap-4 hover:text-green-700 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-green-600 shrink-0 transition-transform duration-300 ${
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
