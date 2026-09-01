import React from 'react';
import { Gift, CheckCircle2 } from 'lucide-react';

export default function BonusSection() {
  const whatYouGet = [
    { title: '+2.000 Exercícios e Atividades para Idosos', desc: 'Uma biblioteca completa organizada por nível, objetivo e tipo de atividade.' },
    { title: 'Acesso à Central Sênior', desc: 'Tenha acesso à plataforma pelo celular, tablet ou computador.' },
    { title: 'Cadastro de alunos', desc: 'Organize seus alunos e facilite o acompanhamento dos seus atendimentos.' },
    { title: 'Fichas e ferramentas profissionais', desc: 'Recursos para ajudar na organização das informações e do acompanhamento.' },
    { title: 'Biblioteca organizada', desc: 'Encontre rapidamente diferentes exercícios e atividades para cada objetivo.' },
    { title: 'Atualizações', desc: 'Novos conteúdos e melhorias adicionados à plataforma.' },
  ];

  const bonuses = [
    {
      img: '/assets/bonus-mobilidade-new.png',
      title: '+40 Atividades para Idosos com Mobilidade Reduzida',
      desc: 'Atividades que podem ser adaptadas para idosos com dificuldade de mobilidade, incluindo opções realizadas com apoio ou sentadas.',
      price: 'R$ 47,00',
    },
    {
      img: '/assets/bonus-recuperacao-new.png',
      title: '+35 Atividades para Idosos em Recuperação Física',
      desc: 'Opções de atividades leves para diferentes momentos e necessidades de acompanhamento.',
      price: 'R$ 47,00',
    },
    {
      img: '/assets/bonus-avaliacao-new.png',
      title: 'Guia de Avaliação Física para Idosos',
      desc: 'Um material para auxiliar o profissional na organização da avaliação e identificação de limitações antes da aplicação das atividades.',
      price: 'R$ 53,00',
    },
  ];

  return (
    <section className="px-4 py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-green-50/40 border-t border-slate-200 space-y-16">
      
      {/* O que você recebe Section */}
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            O que você <span className="gradient-heading italic">recebe</span>
          </h2>
          <div className="w-20 h-1.5 gradient-bar mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {whatYouGet.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-slate-900 text-base">{item.title}</h3>
                <p className="text-slate-600 text-sm mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3 Bonus Section */}
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Title Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-green-100 border border-green-200 shadow-sm">
            <Gift className="w-4 h-4 text-green-700" />
            <span className="text-xs font-bold uppercase tracking-widest text-green-700">
              Bônus exclusivos
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3">
            E você ainda recebe <span className="gradient-heading italic">esses bônus</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto">
            3 bônus exclusivos incluídos sem custo adicional no seu acesso.
          </p>
        </div>

        {/* 3 Bonus Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {bonuses.map((b, idx) => (
            <div
              key={idx}
              className="bonus-card rounded-3xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col text-center"
            >
              <div className="bg-gradient-to-b from-green-50/80 to-white rounded-2xl mb-5 p-4 flex items-center justify-center min-h-[220px]">
                <img
                  src={b.img}
                  alt={b.title}
                  className="w-full max-h-[260px] object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2 leading-snug">
                {b.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow mb-4">
                {b.desc}
              </p>
              
              <div className="pt-4 border-t border-green-200/80 flex items-center justify-between">
                <div className="text-left">
                  <span className="text-[11px] text-slate-500 uppercase font-bold block">Valor:</span>
                  <span className="line-through text-slate-400 text-sm font-semibold">{b.price}</span>
                </div>
                <span className="px-3 py-1 bg-green-600 text-white rounded-full text-xs font-extrabold uppercase shadow-sm">
                  Hoje: GRÁTIS
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
