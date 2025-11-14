// app/(aluno)/aluno/quizzes/types.ts
export interface Opcao {
  texto: string;
  correta: boolean;
}

export interface Pergunta {
  texto: string;
  opcoes: Opcao[];
}

export interface Quiz {
  id: number;
  titulo: string;
  disciplina: "Português" | "Matemática";
  duracao: number;
  icon: string; // ← agora é string
  perguntas: Pergunta[];
}

export interface Desempenho {
  concluidos: number;
  mediaAcertos: number;
  ultimoQuiz: string;
  ultimoResultado: number;
}