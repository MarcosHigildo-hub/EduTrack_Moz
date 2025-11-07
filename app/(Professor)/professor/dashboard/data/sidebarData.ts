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

export const menuItems: MenuItem[] = [
  { label: "Dashboard", icon: Home, href: "/dashboard", active: true },
  { label: "Alunos", icon: Users, href: "/Lista_Alunos" },
  { label: "Plano Académico", icon: BookOpen, href: "/Plano_Academico" },
  { label: "TPCs", icon: NotebookPen, href: "/TPCs" },
  { label: "Avaliações", icon: FileCheck, href: "/Avaliacoes" },
];

export const actionItem: ActionItem[] = [
    {label: "Definições", icon: Settings, href: "/Definicoes"},
    {label: "Logout", icon: LogOut, href: "/Logout"},
];


