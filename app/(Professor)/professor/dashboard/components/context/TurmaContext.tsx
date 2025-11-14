"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type TurmaContextType = {
  turmaSelecionada: string | null;
  setTurmaSelecionada: (turma: string) => void;
};

// cria o contexto
const TurmaContext = createContext<TurmaContextType | undefined>(undefined);

// componente provider
export function TurmaProvider({ children }: { children: ReactNode }) {
  const [turmaSelecionada, setTurmaSelecionada] = useState<string | null>("t3"); 
  return (
    <TurmaContext.Provider value={{ turmaSelecionada, setTurmaSelecionada }}>
      {children}
    </TurmaContext.Provider>
  );
}

// hook personalizado
export function useTurma() {
  const context = useContext(TurmaContext);
  if (!context) {
    throw new Error("useTurma deve ser usado dentro de TurmaProvider");
  }
  return context;
}
