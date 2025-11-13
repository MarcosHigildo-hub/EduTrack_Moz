import { BookOpen, FileCheck, Gamepad2, HelpCircle, Home, LogOut, NotebookPen, Settings } from "lucide-react";

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

export const menuItems: MenuItem[] = [
  { label: "Dashboard", icon: Home, href: "/aluno/dashboard",  },
  { label: "Quizz", icon: Gamepad2, href: "/aluno/dashboard/Lista-alunos" },
  { label: "TPCs", icon: NotebookPen, href: "/aluno/dashboard/TPCs" },
  { label: "Avaliações", icon: FileCheck, href: "/aluno/dashboard/Avaliacoes" },
];

export const actionItem: ActionItem[] = [
    {label: "Definições", icon: Settings, href: "/Definicoes"},
    {label: "Logout", icon: LogOut, href: "/Logout"},
];


