import { BookOpen, FileCheck, Home, LogOut, NotebookPen, Settings, Users } from "lucide-react";

export type MenuItem = {
  label: string;
  icon: React.ComponentType<{ size?: number }>;
  href: string;
  active?: boolean;
};

export type ActionItem = {
    label: string;
    icon: React.ComponentType<{ size?: number }>;
    href: string;
    active?: boolean;
}

export type Turmas = {
  id: string;
  nome: string;
}

export const menuItems: MenuItem[] = [
  { label: "Dashboard", icon: Home, href: "/professor/dashboard",  },
  { label: "Alunos", icon: Users, href: "/professor/dashboard/Lista-alunos" },
  { label: "Plano Analítico", icon: BookOpen, href: "/professor/dashboard/Plano-analitico" },
  { label: "TPCs", icon: NotebookPen, href: "/TPCs" },
  { label: "Avaliações", icon: FileCheck, href: "/professor/dashboard/Avaliacoes" },
];

export const actionItem: ActionItem[] = [
    {label: "Definições", icon: Settings, href: "/Definicoes"},
    {label: "Logout", icon: LogOut, href: "/Logout"},
];

export const turmas: Turmas[] = [
  { id: "t1", nome: "Turma A" },
  { id: "t2", nome: "Turma B" },
  { id: "t3", nome: "Turma C" },
];

