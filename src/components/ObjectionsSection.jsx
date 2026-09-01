import React from 'react';

export default function ObjectionsSection() {
  const objections = [
    {
      obj: 'Vou ter que ser especialista pra aplicar',
      ans: 'As atividades são organizadas por nível e objetivo, com instruções simples. Se sabe ler, sabe aplicar.',
    },
    {
      obj: 'Meus idosos têm mobilidade reduzida',
      ans: 'Tem um bônus exclusivo com +40 atividades adaptadas pra quem tem mobilidade reduzida ou está em recuperação.',
    },
    {
      obj: 'Já tenho material parecido',
      ans: 'Aqui são +1000 atividades organizadas por categoria, prontas pra usar. Você nunca mais vai improvisar uma sessão.',
    },
    {
      obj: 'É muito caro pelo conteúdo',
      ans: 'Por menos de R$30 você leva o kit completo + 3 bônus. É menos que uma sessão avulsa.',
    },
  ];

  const galleryImages = [
    { src: '/assets/kit-page-flexao-anterior-Cd0g2cjK.webp', alt: 'Página do kit: Flexão anterior sentada' },
    { src: '/assets/kit-page-alongamento-coxa-DwvZNNsp.webp', alt: 'Página do kit: Alongamento posterior da coxa' },
    { src: '/assets/kit-page-halteres-QFa8fB-P.webp', alt: 'Página do kit: Exercícios com halteres' },
    { src: '/assets/kit-page-rotina-final-L7RZZR-h.webp', alt: 'Página do kit: Exercícios extras e rotina final' },
  ];

  return (
    <section className="px-4 py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Objection cards list */}
        <div className="space-y-4">
          {objections.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white p-5 sm:p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-2 flex items-start gap-2">
                <span className="text-orange-600 font-extrabold">"</span>
                {item.obj}
                <span className="text-orange-600 font-extrabold">"</span>
              </h3>
              <p className="text-green-700 font-medium text-sm sm:text-base leading-relaxed flex items-start gap-2">
                <span className="shrink-0">👉</span>
                <span>{item.ans}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto pt-6">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto block object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
