'use client';

import { useState, useRef, useEffect } from 'react';
import FiltrosAvaliacao from './components/FiltrosAvaliacao';
import AvaliacoesTable from './components/AvaliacoesTable';
import AvaliacoesActions from './components/AvaliacoesActions';

type Avaliacao = {
  id: number;
  nome: string;
  acs1: number | null;
  acs2: number | null;
  acs3: number | null;
  ap: number | null;
  media: number | null;
  estado: 'feito' | 'pendente';
};

const STORAGE_KEY = 'avaliacoes_3C_matematica_1';

const calcularMedia = (acs1: number | null, acs2: number | null, acs3: number | null, ap: number | null): number | null => {
  const notas = [acs1, acs2, acs3, ap].filter(n => n !== null) as number[];
  return notas.length > 0 ? notas.reduce((a, b) => a + b, 0) / notas.length : null;
};

// Lazy initializer: só executa uma vez
const carregarDadosIniciais = (): Avaliacao[] => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    return JSON.parse(saved);
  }
  return [
    { id: 1, nome: 'João André', acs1: 15, acs2: 14, acs3: 16, ap: 18, media: 15.75, estado: 'feito' },
    { id: 2, nome: 'Maria Silva', acs1: 13, acs2: 12, acs3: 14, ap: 16, media: 13.75, estado: 'feito' },
    { id: 3, nome: 'Carlos Mário', acs1: 10, acs2: 9, acs3: null, ap: null, media: null, estado: 'pendente' },
    { id: 4, nome: 'Inês Langa', acs1: null, acs2: null, acs3: null, ap: null, media: null, estado: 'pendente' },
    { id: 5, nome: 'Tomás Jone', acs1: 17, acs2: 18, acs3: 18, ap: 19, media: 18.00, estado: 'feito' },
  ];
};

export default function Avaliacoes() {
  const [disciplina, setDisciplina] = useState('matematica');
  const [semestre, setSemestre] = useState('1');
  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>(carregarDadosIniciais);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Salvar com debounce
  const salvarNoLocalStorage = (dados: Avaliacao[]) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
    }, 500);
  };

  const handleUpdate = (id: number, campo: 'acs1' | 'acs2' | 'acs3' | 'ap', valor: number | null) => {
    setAvaliacoes(prev => {
      const novas = prev.map(a => {
        if (a.id !== id) return a;
        const novo = { ...a, [campo]: valor };
        novo.media = calcularMedia(novo.acs1, novo.acs2, novo.acs3, novo.ap);
        novo.estado = novo.media !== null ? 'feito' : 'pendente';
        return novo;
      });
      
      salvarNoLocalStorage(novas);
      return novas;
    });
  };

  // Limpar timeout ao desmontar
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="">
      <div className="mb-4 p-3 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl text-center">
        <h1 className="text-2xl font-bold text-[#2F59E0] ">AVALIAÇÕES – 3ª CLASSE “C”</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <FiltrosAvaliacao
          disciplina={disciplina}
          semestre={semestre}
          onDisciplinaChange={setDisciplina}
          onSemestreChange={setSemestre}
        />

        <div className="p-6">
          <AvaliacoesTable avaliacoes={avaliacoes} onUpdate={handleUpdate} />
        </div>

        <AvaliacoesActions />
      </div>
    </div>
  );
}