// app/(aluno)/aluno/quizzes/data.ts
import { Quiz, Desempenho } from "./types";

export const quizzes: Quiz[] = [
  {
    id: 1,
    titulo: "Substantivos e Artigos",
    disciplina: "Português",
    duracao: 2,
    icon: "languages", // ← só string
    perguntas: [
      {
        texto: "Qual é o artigo correto para 'casa'?",
        opcoes: [
          { texto: "o", correta: false },
          { texto: "a", correta: true },
          { texto: "os", correta: false },
          { texto: "as", correta: false },
        ],
      },
      {
        texto: "Qual é um substantivo?",
        opcoes: [
          { texto: "correr", correta: false },
          { texto: "gato", correta: true },
          { texto: "rápido", correta: false },
          { texto: "bonito", correta: false },
        ],
      },
    ],
  },
  {
    id: 2,
    titulo: "Operações Matemáticas Básicas",
    disciplina: "Matemática",
    duracao: 2,
    icon: "calculator", // ← string
    perguntas: [
      {
        texto: "Quanto é 7 × 8?",
        opcoes: [
          { texto: "54", correta: false },
          { texto: "56", correta: true },
          { texto: "64", correta: false },
          { texto: "48", correta: false },
        ],
      },
      {
        texto: "Quanto é 15 + 27?",
        opcoes: [
          { texto: "32", correta: false },
          { texto: "42", correta: true },
          { texto: "52", correta: false },
          { texto: "40", correta: false },
        ],
      },
    ],
  },
  {
    id: 3,
    titulo: "Sílabas e Palavras",
    disciplina: "Português",
    duracao: 2,
    icon: "book", // ← string
    perguntas: [
      {
        texto: "Quantas sílabas tem 'sol'?",
        opcoes: [
          { texto: "1", correta: true },
          { texto: "2", correta: false },
          { texto: "3", correta: false },
        ],
      },
    ],
  },
];

export const desempenho: Desempenho = {
  concluidos: 8,
  mediaAcertos: 82,
  ultimoQuiz: "Substantivos e Artigos",
  ultimoResultado: 90,
};

export const dicaDoDia = "Não tenhas medo de errar. É assim que se aprende!";