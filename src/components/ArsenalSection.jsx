import React from 'react';
import {
  Dumbbell,
  Scale,
  Activity,
  Heart,
  Brain,
  Users,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export default function ArsenalSection() {
  const scrollToPricing = (e) => {
    e.preventDefault();
    const element = document.getElementById('pricing-cards') || document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const categories = [
    { icon: Dumbbell, title: 'Exercícios de força', desc: 'Fortalecimento muscular, membros inferiores e superiores.' },
    { icon: Scale, title: 'Equilíbrio e coordenação', desc: 'Prevenção de quedas, postura e estabilidade postural.' },
    { icon: Activity, title: 'Mobilidade', desc: 'Amplitude de movimento, flexibilidade e saúde articular.' },
    { icon: Heart, title: 'Alongamentos', desc: 'Alívio de dores, rigidez corporal e relaxamento pós-treino.' },
    { icon: Brain, title: 'Exercícios cognitivos', desc: 'Estímulo de memória, atenção dividida, foco e agilidade.' },
    { icon: Users, title: 'Dinâmicas e atividades', desc: 'Integração social, atividades em grupo e aulas interativas.' },
    { icon: Layers, title: 'Exercícios com equipamentos', desc: 'Práticas utilizando bastões, elásticos, bolas e halteres.' },
    { icon: Sparkles, title: 'Exercícios sem equipamentos', desc: 'Atividades práticas para atendimento individual ou em domicílio.' },
  ];

  return (
    <section className="px-4 py-16 lg:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 border border-green-200 shadow-xs">
            <Sparkles className="w-4 h-4 text-green-700" />
            <span className="text-xs font-bold uppercase tracking-widest text-green-700">
              Repertório Sem Limites
            </span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight">
            +2.000 EXERCÍCIOS <br className="hidden sm:block" />
            <span className="gradient-heading italic font-serif">PARA IDOSOS</span>
          </h2>

          <p className="text-lg sm:text-xl font-bold text-green-700">
            Um verdadeiro arsenal para você nunca ficar limitado às mesmas opções.
          </p>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
            A <strong className="text-slate-900">Central Sênior</strong> reúne <strong>mais de 2.000 exercícios e atividades</strong>, organizados para facilitar sua busca por objetivo, nível e tipo de atividade.
          </p>
        </div>

        {/* 8 Categories Enhanced Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-2">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:shadow-xl hover:border-green-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base mb-1 group-hover:text-green-700 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed font-medium">
                    {cat.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-green-700 text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Organizado por nível</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Summary Banner & CTA */}
        <div className="bg-gradient-to-r from-green-800 via-green-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 text-center shadow-xl space-y-4 max-w-4xl mx-auto border border-green-700/30">
          <p className="text-base sm:text-lg font-bold text-green-200">
            Tudo organizado para você encontrar alternativas para diferentes objetivos e níveis.
          </p>
          <div>
            <a
              href="#pricing"
              onClick={scrollToPricing}
              className="gradient-cta inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-extrabold text-base sm:text-lg uppercase tracking-wider shadow-2xl transition-all cursor-pointer transform active:scale-95"
            >
              QUERO ACESSAR A CENTRAL SÊNIOR
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
