"use client";

import { Quote, User } from "lucide-react";

interface Frase {
  texto: string;
  autor: string;
}

const frases: Frase[] = [
  {
    texto: "O sucesso nasce do querer, da determinação e da persistência.",
    autor: "Fernando Pessoa",
  },
  //   {
  //     texto: "Estudar é semear o futuro.",
  //     autor: "Prof. Maria Silva",
  //   },
  //   {
  //     texto: "Cada dia é uma nova chance de aprender.",
  //     autor: "EduTrack",
  //   },
];

export default function FraseDoDia() {
  // Muda a frase por dia (baseado na data)
  const hoje = new Date().toLocaleDateString("pt-MZ");
  const indice =
    Math.abs([...hoje].reduce((a, c) => a + c.charCodeAt(0), 0)) %
    frases.length;
  const frase = frases[indice];

  return (
    <div className="bg-gradient-to-br from-teal-50 mt-2 to-cyan-50 p-6 rounded-2xl h-73 shadow-lg border-2 border-blue-200">
      <div className="flex items-center gap-3 mb-4">
        <Quote className="w-8 h-8 text-blue-600 rotate-180" />
        <h2 className="text-2xl font-bold text-black">Frase do Dia</h2>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-100">
        <blockquote className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed italic text-center">
            “{frase.texto}”
        </blockquote>
        <footer className="mt-4 text-blue-600 font-semibold flex items-center justify-end">
          <User /> {frase.autor}
        </footer>
      </div>
    </div>
  );
}
