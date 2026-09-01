import React from 'react';
import { Gift } from 'lucide-react';

export default function BonusSection() {
  const bonuses = [
    {
      img: '/assets/bonus-mobilidade-new.png',
      title: '+40 Atividades para Idosos com Mobilidade Reduzida',
      desc: 'Exercícios adaptados pra idosos cadeirantes ou com dificuldade de ficar em pé. Seguros e prontos pra aplicar.',
      price: 'R$ 47,00',
    },
    {
      img: '/assets/bonus-recuperacao-new.png',
      title: '+35 Atividades para Idosos em Recuperação Física',
      desc: 'Exercícios leves pra quem tá em recuperação ou com limitações físicas. Progressão segura do repouso à atividade.',
      price: 'R$ 47,00',
    },
    {
      img: '/assets/bonus-avaliacao-new.png',
      title: 'Guia de Avaliação Física para Idosos',
      desc: 'Aprenda a avaliar mobilidade e limitações antes de começar. Mais segurança pra você, mais resultado pro paciente.',
      price: 'R$ 53,00',
    },
  ];

  return (
    <section className="px-4 py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-orange-50/40 border-t border-slate-200">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Title Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-orange-100 border border-orange-200 shadow-sm">
            <Gift className="w-4 h-4 text-orange-700" />
            <span className="text-xs font-bold uppercase tracking-widest text-orange-700">
              Bônus exclusivos
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3">
            Você também leva isso <span className="gradient-heading italic">de graça</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto">
            3 bônus exclusivos pra você aplicar com mais segurança em qualquer condição de idoso.
          </p>
        </div>

        {/* 3 Bonus Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {bonuses.map((b, idx) => (
            <div
              key={idx}
              className="bonus-card rounded-3xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col text-center"
            >
              <div className="bg-gradient-to-b from-orange-50/80 to-white rounded-2xl mb-5 p-4 flex items-center justify-center min-h-[220px]">
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
                <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-extrabold uppercase shadow-sm">
                  Hoje: Grátis
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
