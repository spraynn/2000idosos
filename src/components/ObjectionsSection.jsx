import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function ObjectionsSection() {
  const categories = [
    'Exercícios de força',
    'Equilíbrio e coordenação',
    'Mobilidade',
    'Alongamentos',
    'Exercícios cognitivos',
    'Dinâmicas e atividades',
    'Exercícios com equipamentos',
    'Exercícios sem equipamentos',
  ];

  const scrollToPricing = (e) => {
    e.preventDefault();
    const element = document.getElementById('pricing-cards') || document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="px-4 py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* +2.000 EXERCÍCIOS PARA IDOSOS Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl text-center space-y-6">
          <div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
              +2.000 EXERCÍCIOS PARA IDOSOS
            </h2>
            <p className="text-lg sm:text-xl font-bold text-green-700 mt-2">
              Um verdadeiro arsenal para você nunca ficar limitado às mesmas opções.
            </p>
          </div>

          <p className="text-slate-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A <strong className="text-slate-900">Central Sênior</strong> reúne <strong>mais de 2.000 exercícios e atividades</strong>, organizados para facilitar sua busca por objetivo, nível e tipo de atividade.
          </p>

          {/* 8 Categories Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left pt-2">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-green-50/80 border border-green-200 rounded-xl p-3 flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800"
              >
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                <span>{cat}</span>
              </div>
            ))}
          </div>

          <p className="text-sm sm:text-base font-semibold text-slate-600 pt-2">
            Tudo organizado para você encontrar alternativas para diferentes objetivos e níveis.
          </p>

          <div>
            <a
              href="#pricing"
              onClick={scrollToPricing}
              className="gradient-cta inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-extrabold text-base sm:text-lg uppercase tracking-wider shadow-lg transition-all cursor-pointer transform active:scale-95"
            >
              QUERO ACESSAR A CENTRAL SÊNIOR
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>

        {/* Pare de perder tempo procurando o que aplicar Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
          <div className="text-center">
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Pare de perder tempo procurando o que aplicar
            </h2>
            <div className="w-20 h-1.5 gradient-bar mx-auto rounded-full mt-4"></div>
          </div>

          <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p className="font-bold text-slate-900">Você conhece essa situação:</p>
            
            <ul className="space-y-2 pl-4 border-l-4 border-amber-400 font-medium">
              <li>• Tem um paciente diferente.</li>
              <li>• Precisa trabalhar um objetivo específico.</li>
              <li>• A atividade que você costuma usar não se encaixa naquele caso.</li>
            </ul>

            <p className="font-semibold text-slate-800">
              E aí começa a procura... <span className="text-slate-500 italic">Google. YouTube. Arquivos antigos. Pastas. Anotações.</span> Até encontrar alguma coisa que possa funcionar.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-5 space-y-3">
              <p className="font-bold text-slate-900 text-lg">
                A Central Sênior foi criada para facilitar justamente essa parte do seu trabalho.
              </p>
              <p className="text-slate-700">
                Você entra na plataforma, pesquisa o que precisa e encontra diferentes possibilidades para montar seu atendimento.
              </p>
              <p className="text-green-800 font-black text-lg pt-1">
                Mais repertório. Menos improviso. Menos tempo procurando.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
