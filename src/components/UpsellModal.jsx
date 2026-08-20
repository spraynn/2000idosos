import React from 'react';
import { X, Gift, Check, ArrowRight, MessageCircle } from 'lucide-react';

export default function UpsellModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-purple-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div className="relative px-6 pt-8 pb-6 text-center bg-gradient-to-br from-purple-600 via-fuchsia-600 to-pink-600 text-white">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center mb-3 shadow-lg">
            <Gift className="w-7 h-7 text-white" />
          </div>
          
          <div className="inline-block bg-white/20 backdrop-blur text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            Oferta exclusiva • só agora
          </div>

          <h3 className="text-2xl sm:text-3xl font-black leading-tight">
            Espera! Leve o <span className="italic underline underline-offset-4 decoration-yellow-300">Completo</span> por R$17
          </h3>

          <p className="text-white/90 pt-2 text-xs sm:text-sm font-medium">
            Troque o Plano Básico pelo <strong className="text-yellow-300">Completo</strong> com desconto especial e leve tudo.
          </p>
        </div>

        {/* Modal Body */}
        <div className="px-6 py-6 bg-white space-y-5">
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-semibold">
            {[
              '+1000 atividades organizadas',
              '3 bônus exclusivos (R$147 grátis)',
              'Atualizações mensais para sempre',
              'Suporte prioritário + garantia 7 dias',
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Price Tag Box */}
          <div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 px-5 py-4 text-center">
            <div className="flex items-center justify-center gap-2 text-slate-400 text-sm font-semibold">
              <span className="line-through">R$47,90</span>
              <span className="text-[10px] font-extrabold uppercase bg-red-500 text-white px-2 py-0.5 rounded-full">
                -50%
              </span>
            </div>
            <div className="text-4xl sm:text-5xl font-black text-green-600 leading-none mt-1">
              R$17
            </div>
            <div className="text-xs text-slate-500 font-medium mt-1">
              pagamento único • acesso vitalício
            </div>

            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 border border-green-300">
              <MessageCircle className="w-3.5 h-3.5 text-green-700" />
              <span className="text-[10px] font-bold uppercase tracking-wide text-green-800">
                Entrega via WhatsApp
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-2.5 pt-1">
            <a
              href="https://pay.wiapy.com/UQoxPfiXi1l2"
              className="gradient-cta flex items-center justify-center w-full px-6 py-4 rounded-full text-white font-extrabold uppercase text-sm shadow-xl transition-all cursor-pointer transform active:scale-95"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              Quero o Completo por R$17
            </a>

            <a
              href="https://pay.wiapy.com/EilLNymRsXCH"
              className="flex items-center justify-center w-full px-6 py-3 rounded-full border border-slate-300 bg-white text-slate-600 font-bold uppercase text-xs hover:bg-slate-50 transition-colors text-center"
            >
              Continuar com o Plano Básico
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
