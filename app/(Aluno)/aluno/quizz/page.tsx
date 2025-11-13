"use client";
import { Rocket, Star } from "lucide-react";
import { useRouter } from "next/navigation";

import { useState } from "react";
import {
  Target,
  BookOpen,
  Play,
  Trophy,
  Lightbulb,
  Brain,
  Languages,
  Calculator,
} from "lucide-react";

interface Quiz {
  id: number;
  titulo: string;
  disciplina: "Português" | "Matemática";
  duracao: number;
  icon: React.ReactNode;
}

interface Desempenho {
  concluidos: number;
  mediaAcertos: number;
  ultimoQuiz: string;
  ultimoResultado: number;
}

const quizzes: Quiz[] = [
  {
    id: 1,
    titulo: "Substantivos e Artigos",
    disciplina: "Português",
    duracao: 5,
    icon: <Languages className="w-6 h-6" />,
  },
  {
    id: 2,
    titulo: "Operações Matemáticas Básicas",
    disciplina: "Matemática",
    duracao: 4,
    icon: <Calculator className="w-6 h-6" />,
  },
  {
    id: 3,
    titulo: "Sílabas e Palavras",
    disciplina: "Português",
    duracao: 6,
    icon: <BookOpen className="w-6 h-6" />,
  },
];

const desempenho: Desempenho = {
  concluidos: 8,
  mediaAcertos: 82,
  ultimoQuiz: "Substantivos e Artigos",
  ultimoResultado: 90,
};

const dicaDoDia = "Não tenhas medo de errar. É assim que se aprende!";

export default function QuizzesPage() {
  const router = useRouter(); // ← Hook do Next.js

  // === BOTÃO VOLTAR AO DASHBOARD (100% FUNCIONAL) ===
  const handleVoltar = () => {
    router.push("/aluno/dashboard");
    setTimeout(() => {}, 1500);
  };
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState<
    "Português" | "Matemática" | null
  >(null);

  const quizzesFiltrados = disciplinaSelecionada
    ? quizzes.filter((q) => q.disciplina === disciplinaSelecionada)
    : quizzes;

  return (
    <div>
      <div className="flex justify-start left-1 mx-2 fixed transform  z-50">
        <button
          onClick={handleVoltar}
          className="bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500  text-white font-bold text-sm px-4 py-2 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-3xl flex items-center gap-3 overflow-hidden"
        >
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></span>

          <span className="relative z-10 animate-bounce">
            <Rocket className="w-6 h-6" />
          </span>
          <span className="relative z-10">Voltar</span>

          <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="absolute text-yellow-300 text-xl animate-ping"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  transform: `rotate(${i * 60}deg) translateX(20px)`,
                }}
              >
                <Star className="w-4 h-4" />
              </span>
            ))}
          </span>
        </button>
      </div>
      <div className="space-y-4 p-2 max-w-4xl  mx-auto">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-3xl shadow-xl border-2 border-indigo-200 text-center">
          <span className="text-lg font-bold">Olá [nome do usario]</span>
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 flex items-center justify-center gap-3">
            <Target className="w-10 h-10" /> BEM-VINDO AOS QUIZZES EDUCATIVOS
          </h1>
          <p className="text-lg md:text-xl text-indigo-600 mt-3 italic">
            “Aprender brincando é o melhor caminho para o sucesso!”
          </p>
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-2xl shadow-lg border-2 border-teal-200">
          <h2 className="text-2xl font-bold text-teal-700 mb-4 flex items-center gap-2">
            <Brain className="w-7 h-7" /> Seleciona a disciplina:
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {["Português", "Matemática"].map((disc) => (
              <button
                key={disc}
                onClick={() =>
                  setDisciplinaSelecionada(disc as "Português" | "Matemática")
                }
                className={`px-6 py-3 rounded-xl font-bold text-lg shadow-md transition-all transform hover:scale-105 flex items-center gap-2 ${
                  disciplinaSelecionada === disc
                    ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                    : "bg-white text-gray-700 border-2 border-gray-300"
                }`}
              >
                {disc === "Português" ? (
                  <Languages className="w-5 h-5" />
                ) : (
                  <Calculator className="w-5 h-5" />
                )}
                {disc}
              </button>
            ))}
            {disciplinaSelecionada && (
              <button
                onClick={() => setDisciplinaSelecionada(null)}
                className="px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              >
                Limpar filtro
              </button>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg border-2 border-green-200">
          <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2">
            <Trophy className="w-7 h-7" /> Quizzes disponíveis
          </h2>
          <div className="space-y-4">
            {quizzesFiltrados.map((quiz) => (
              <div
                key={quiz.id}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-5 border border-green-100 shadow-md flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl">
                    {quiz.id === 1 ? "1️" : quiz.id === 2 ? "2️⃣" : "3️⃣"}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      {quiz.icon} {quiz.titulo}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Duração: {quiz.duracao} min
                    </p>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full font-bold shadow-md hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-2">
                  <Play className="w-5 h-5" /> Iniciar Quiz
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl shadow-lg border-2 border-amber-200">
          <h2 className="text-2xl font-bold text-amber-700 mb-4 flex items-center gap-2">
            <Trophy className="w-7 h-7" /> Teu Desempenho Geral
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-amber-100">
              <p className="text-3xl font-bold text-amber-600">
                {desempenho.concluidos}
              </p>
              <p className="text-sm text-gray-600">Quizzes concluídos</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-amber-100">
              <p className="text-3xl font-bold text-amber-600">
                {desempenho.mediaAcertos}%
              </p>
              <p className="text-sm text-gray-600">Média de acertos</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-amber-100 col-span-1 md:col-span-3">
              <p className="text-sm text-gray-600">Último quiz:</p>
              <p className="text-lg font-semibold text-amber-700">
                “{desempenho.ultimoQuiz}” — {desempenho.ultimoResultado}%
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-2xl shadow-lg border-2 border-pink-200">
          <h2 className="text-2xl font-bold text-pink-700 mb-4 flex items-center gap-2">
            <Lightbulb className="w-7 h-7" /> Dica do Dia
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-pink-100">
            <p className="text-lg italic text-gray-800 text-center">
              “{dicaDoDia}”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
