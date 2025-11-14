// app/plano-analitico/page.tsx
'use client';

import { useState } from 'react';
import Filtros from './components/Filtros';
import ProgressoCirculo from './components/ProgressoCirculo';
import TopicosLista from './components/TopicosLista';
import PlanoActions from './components/PlanoActions';

export default function PlanoAnalitico() {
  const [semestre, setSemestre] = useState('1');
  const [disciplina, setDisciplina] = useState('portugues');

  const topicos = [
    { id: 1, nome: 'A Família e a Escola', concluido: true },
    { id: 2, nome: 'Rotinas Diárias', concluido: true },
    { id: 3, nome: 'Profissões', concluido: false },
    { id: 4, nome: 'Verbos de Ação', concluido: false },
    { id: 5, nome: 'Substantivos', concluido: false },
    { id: 6, nome: 'Adjetivos', concluido: false },
  ];

  const concluidos = topicos.filter(t => t.concluido).length;
  const total = topicos.length;

  const handleToggle = (id: number) => {
    // Futuro: salvar no estado
    console.log('Toggle tópico', id);
  };

  return (
    <div className=" ">
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        {/* Título */}
        <div className="p-5 border-b bg-gradient-to-r from-blue-50 to-purple-50 text-center">
          <h1 className="text-2xl font-bold text-[#2F59E0]">PLANO ANALÍTICO – 3ª CLASSE</h1>
        </div>

        {/* Filtros */}
        <Filtros
          semestre={semestre}
          disciplina={disciplina}
          onSemestreChange={setSemestre}
          onDisciplinaChange={setDisciplina}
        />

        {/* Progresso */}
        <ProgressoCirculo concluidos={concluidos} total={total} />

        {/* Lista */}
        <TopicosLista topicos={topicos} onToggle={handleToggle} />

        {/* Ações */}
        <PlanoActions />
      </div>
    </div>
  );
}