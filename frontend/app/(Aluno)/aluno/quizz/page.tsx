"use client";

import { Rocket, Star, Clock, CheckCircle, XCircle, Trophy, Play } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Target,
  Trophy as TrophyIcon,
  Lightbulb,
  Brain,
  Languages,
  Calculator,
  BookOpen,
} from "lucide-react";

import { quizzes, desempenho, dicaDoDia } from "./data";
import { Quiz } from "./types";


const iconMap: Record<string, React.ReactNode> = {
  languages: <Languages className="w-6 h-6" />,
  calculator: <Calculator className="w-6 h-6" />,
  book: <BookOpen className="w-6 h-6" />,
};

export default function QuizzesPage() {
  const router = useRouter();

  
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState<"Português" | "Matemática" | null>(null);
  const [quizAtivo, setQuizAtivo] = useState<number | null>(null);
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [selecionada, setSelecionada] = useState<number | null>(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [acertos, setAcertos] = useState(0);
  const [tempoRestante, setTempoRestante] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  const quizzesFiltrados = disciplinaSelecionada
    ? quizzes.filter((q) => q.disciplina === disciplinaSelecionada)
    : quizzes;

  
  const iniciarQuiz = (id: number) => {
    const quiz = quizzes.find((q) => q.id === id)!;
    setQuizAtivo(id);
    setPerguntaAtual(0);
    setSelecionada(null);
    setMostrarResultado(false);
    setAcertos(0);
    setTempoRestante(quiz.duracao * 60);
    setFinalizado(false);
  };

  const handleResposta = (index: number) => {
    if (mostrarResultado || finalizado || !quizAtivo) return;
    const quiz = quizzes.find((q) => q.id === quizAtivo)!;
    const p = quiz.perguntas[perguntaAtual];
    setSelecionada(index);
    const correta = p.opcoes[index].correta;
    if (correta) setAcertos(acertos + 1);
    setMostrarResultado(true);

    setTimeout(() => {
      if (perguntaAtual < quiz.perguntas.length - 1) {
        setPerguntaAtual(perguntaAtual + 1);
        setSelecionada(null);
        setMostrarResultado(false);
      } else {
        finalizarQuiz();
      }
    }, 1500);
  };

  const finalizarQuiz = () => {
    setFinalizado(true);
  };

  const voltar = () => {
    setQuizAtivo(null);
    setFinalizado(false);
  };

  
  useEffect(() => {
    if (tempoRestante > 0 && quizAtivo && !finalizado) {
      const timer = setTimeout(() => setTempoRestante(tempoRestante - 1), 1000);
      return () => clearTimeout(timer);
    } else if (tempoRestante === 0 && quizAtivo) {
      finalizarQuiz(); 
    }
  }, [tempoRestante, quizAtivo, finalizado]);

  
  if (quizAtivo) {
    const quiz = quizzes.find((q) => q.id === quizAtivo)!;
    const p = quiz.perguntas[perguntaAtual];
    const minutos = Math.floor(tempoRestante / 60);
    const segundos = tempoRestante % 60;
    const porcentagem = quiz.perguntas.length > 0 ? (acertos / quiz.perguntas.length) * 100 : 0;
    const estrelas = acertos >= quiz.perguntas.length ? 3 : acertos >= quiz.perguntas.length * 0.7 ? 2 : 1;

    if (finalizado) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 p-4">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 text-center">
            <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4 animate-bounce" />
            <h2 className="text-3xl font-bold text-orange-700 mb-6">Quiz Concluído!</h2>
            <div className="space-y-4 mb-8">
              <p className="text-xl">
                Acertos: <span className="font-bold text-green-600">{acertos}/{quiz.perguntas.length}</span>
              </p>
              <p className="text-xl">
                Pontuação: <span className="font-bold text-blue-600">{Math.round(porcentagem)}%</span>
              </p>
              <div className="flex justify-center gap-2">
                {[...Array(3)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-10 h-10 transition-all ${i < estrelas ? "text-yellow-500 fill-yellow-500 animate-pulse" : "text-gray-300"}`}
                  />
                ))}
              </div>
            </div>
            <button
              onClick={voltar}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Voltar aos Quizzes
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-indigo-700">{quiz.titulo}</h2>
            <div className="flex items-center gap-2 text-red-600 font-bold animate-pulse">
              <Clock className="w-6 h-6" />
              {minutos}:{segundos.toString().padStart(2, "0")}
            </div>
          </div>

          <div className="bg-gray-200 rounded-full h-3 mb-6 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500"
              style={{ width: `${((perguntaAtual + 1) / quiz.perguntas.length) * 100}%` }}
            />
          </div>

          <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
            <p className="text-xl font-medium text-gray-800 text-center mb-6">{p.texto}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {p.opcoes.map((op, i) => (
                <button
                  key={i}
                  onClick={() => handleResposta(i)}
                  disabled={mostrarResultado}
                  className={`p-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 ${
                    selecionada === i
                      ? op.correta
                        ? "bg-green-100 border-2 border-green-500 text-green-700 shadow-lg"
                        : "bg-red-100 border-2 border-red-500 text-red-700 shadow-lg"
                      : "bg-gray-50 border-2 border-gray-300 hover:bg-gray-100"
                  } ${mostrarResultado && op.correta ? "animate-pulse" : ""}`}
                >
                  {selecionada === i && (op.correta ? <CheckCircle className="w-6 h-6" /> : <XCircle className="w-6 h-6" />)}
                  {op.texto}
                </button>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg font-semibold text-gray-700">
              Acertos: <span className="text-green-600">{acertos}</span> / {quiz.perguntas.length}
            </p>
          </div>
        </div>
      </div>
    );
  }

  
  return (
    <div>
    
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => router.push("/aluno/dashboard")}
          className="group relative bg-gradient-to-r from-purple-500 via-blue-500 to-blue-500 text-white font-bold text-sm px-4 py-2 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-3xl flex items-center gap-3 overflow-hidden"
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

    
      <div className="pt-4 space-y-4 p-2 max-w-4xl mx-auto">
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
                onClick={() => setDisciplinaSelecionada(disc as "Português" | "Matemática")}
                className={`px-6 py-3 rounded-xl font-bold text-lg shadow-md transition-all transform hover:scale-105 flex items-center gap-2 ${
                  disciplinaSelecionada === disc
                    ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                    : "bg-white text-gray-700 border-2 border-gray-300"
                }`}
              >
                {disc === "Português" ? <Languages className="w-5 h-5" /> : <Calculator className="w-5 h-5" />}
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
            <TrophyIcon className="w-7 h-7" /> Quizzes disponíveis
          </h2>
          <div className="space-y-4">
            {quizzesFiltrados.map((quiz) => (
              <div
                key={quiz.id}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-5 border border-green-100 shadow-md flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl text-blue-500">
                    {quiz.id === 1 ? "1" : quiz.id === 2 ? "2" : "3"}
­                </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      {iconMap[quiz.icon]} {quiz.titulo}
                    </h3>
                    <p className="text-sm text-gray-600">Duração: {quiz.duracao} min</p>
                  </div>
                </div>
                <button
                  onClick={() => iniciarQuiz(quiz.id)}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full font-bold shadow-md hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-2"
                >
                  <Play className="w-5 h-5" /> Iniciar Quiz
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl shadow-lg border-2 border-amber-200">
          <h2 className="text-2xl font-bold text-amber-700 mb-4 flex items-center gap-2">
            <TrophyIcon className="w-7 h-7" /> Teu Desempenho Geral
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-amber-100">
              <p className="text-3xl font-bold text-amber-600">{desempenho.concluidos}</p>
              <p className="text-sm text-gray-600">Quizzes concluídos</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-amber-100">
              <p className="text-3xl font-bold text-amber-600">{desempenho.mediaAcertos}%</p>
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
            <p className="text-lg italic text-gray-800 text-center">“{dicaDoDia}”</p>
          </div>
        </div>
      </div>
    </div>
  );
}