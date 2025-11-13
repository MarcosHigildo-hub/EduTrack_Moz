// app/(aluno)/aluno/dashboard/QuizRelampago.tsx
'use client';

import { useState } from 'react';
import { Zap, CheckCircle, XCircle } from 'lucide-react';

interface Pergunta {
  pergunta: string;
  opcoes: { texto: string; correta: boolean }[];
}

const perguntas: Pergunta[] = [
  {
    pergunta: "Quanto é 7 × 8?",
    opcoes: [
      { texto: "54", correta: false },
      { texto: "56", correta: true },
      { texto: "64", correta: false },
    ],
  },
  {
    pergunta: "Qual é a capital de Moçambique?",
    opcoes: [
      { texto: "Maputo", correta: true },
      { texto: "Beira", correta: false },
      { texto: "Nampula", correta: false },
    ],
  },
];

export default function QuizRelampago() {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [selecionada, setSelecionada] = useState<number | null>(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [acertou, setAcertou] = useState(false);

  const p = perguntas[perguntaAtual];

  const handleOpcao = (index: number) => {
    if (mostrarResultado) return;
    setSelecionada(index);
    const correta = p.opcoes[index].correta;
    setAcertou(correta);
    setMostrarResultado(true);

    if (correta && perguntaAtual < perguntas.length - 1) {
      setTimeout(() => {
        setPerguntaAtual(perguntaAtual + 1);
        setSelecionada(null);
        setMostrarResultado(false);
      }, 1500);
    }
  };

  const resetar = () => {
    setPerguntaAtual(0);
    setSelecionada(null);
    setMostrarResultado(false);
  };

  return (
    <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl mt-2  shadow-lg border-2 border-blue-200">
      <div className="flex items-center gap-3 mb-4">
        <Zap className="w-5 h-5 text-blue-600 animate-pulse" />
        <h2 className="text-xl font-bold text-black">Quiz Relâmpago</h2>
        <span className="ml-auto bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
          {perguntaAtual + 1}/{perguntas.length}
        </span>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4  mb-2 border border-purple-100">
        <p className="text-lg font-medium text-gray-800 text-center mb-6">
          {p.pergunta}
        </p>

        <div className="grid grid-cols-2 gap-3">
          {p.opcoes.map((op, i) => (
            <button
              key={i}
              onClick={() => handleOpcao(i)}
              disabled={mostrarResultado}
              className={`p-2 rounded-xl border-2 font-medium transition-all flex items-center justify-center gap-2 ${
                selecionada === i
                  ? op.correta
                    ? 'bg-green-100 border-green-500 text-green-700'
                    : 'bg-red-100 border-red-500 text-red-700'
                  : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
              } ${mostrarResultado && op.correta ? 'animate-bounce' : ''}`}
            >
              {selecionada === i && (
                op.correta ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />
              )}
              {op.texto}
            </button>
          ))}
        </div>
      </div>

      {mostrarResultado && (
        <div className="text-center">
          <p className={`text-sm font-bold mb-2 ${acertou ? 'text-green-600' : 'text-red-600'}`}>
            {acertou ? 'Correto! Próxima pergunta...' : 'Errado! Tenta de novo amanhã!'}
          </p>
          {perguntaAtual === perguntas.length - 1 && acertou && (
            <button
              onClick={resetar}
              className="bg-gradient-to-r from-green-400 to-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-xl transition-all"
            >
              Jogar Novamente
            </button>
          )}
        </div>
      )}
    </div>
  );
}