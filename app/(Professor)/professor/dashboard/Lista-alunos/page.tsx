"use client";

import { useState } from "react";
import PresencaHeader from "./components/PresencaHeader";
import PresencaTable from "./components/PresencaTable";
import PresencaFooter from "./components/PresencaFooter";

type Aluno = {
  id: number;
  nome: string;
  presente: boolean;
  observacao: string;
};

const formatarData = (date: Date): string => {
  return `${String(date.getDate()).padStart(2, '0')} / ${String(date.getMonth() + 1).padStart(2, '0')} / ${date.getFullYear()}`;
};

export default function ListaPresenca() {
  const [dataSelecionada, setDataSelecionada] = useState<Date>(new Date());
  const [alunos, setAlunos] = useState<Aluno[]>([
    { id: 1, nome: "Ana João", presente: true, observacao: "" },
    { id: 2, nome: "Carlos Mário", presente: true, observacao: "" },
    { id: 3, nome: "Inês Alberto", presente: false, observacao: "" },
    { id: 4, nome: "Luís Domingos", presente: true, observacao: "" },
    { id: 5, nome: "Maria Fernandes", presente: false, observacao: "" },
    { id: 6, nome: "Maria Fernandes", presente: false, observacao: "" },
    { id: 7, nome: "Ana João", presente: true, observacao: "" },
    { id: 8, nome: "Carlos Mário", presente: true, observacao: "" },
    { id: 9, nome: "Inês Alberto", presente: false, observacao: "" },
    { id: 10, nome: "Luís Domingos", presente: true, observacao: "" },
    { id: 11, nome: "Inês Alberto", presente: false, observacao: "" },
    { id: 12, nome: "Luís Domingos", presente: true, observacao: "" },
    { id: 13, nome: "Maria Fernandes", presente: false, observacao: "" },
    { id: 14, nome: "Maria Fernandes", presente: false, observacao: "" },
    { id: 15, nome: "Ana João", presente: true, observacao: "" },
    { id: 16, nome: "Carlos Mário", presente: true, observacao: "" },
  ]);

  const presentes = alunos.filter((a) => a.presente).length;
  const dataAtual = formatarData(dataSelecionada);

  const handlePrev = () => {
    setDataSelecionada(prev => {
      const nova = new Date(prev);
      nova.setDate(nova.getDate() - 1);
      return nova;
    });
  };

  const handleNext = () => {
    setDataSelecionada(prev => {
      const nova = new Date(prev);
      nova.setDate(nova.getDate() + 1);
      return nova;
    });
  };

  const handleHoje = () => {
    setDataSelecionada(new Date());
  };

  const handleToggle = (id: number) => {
    setAlunos((prev) =>
      prev.map((a) => (a.id === id ? { ...a, presente: !a.presente } : a))
    );
  };

  const handleObservacao = (id: number, obs: string) => {
    setAlunos((prev) =>
      prev.map((a) => (a.id === id ? { ...a, observacao: obs } : a))
    );
  };

  return (
    <div className="">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <PresencaHeader
          currentDate={dataAtual}
          onPrev={handlePrev}
          onNext={handleNext}
        />
        <div className='max-h-96 overflow-y-auto border-b"'>
          <div className="p-6">
            <PresencaTable
              alunos={alunos}
              onToggle={handleToggle}
              onObservacao={handleObservacao}
            />
          </div>
        </div>
        <PresencaFooter total={alunos.length} presentes={presentes} />
      </div>
    </div>
  );
}
