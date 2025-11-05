import { BookOpen, FileCheck, Home, NotebookPen, Settings, Users } from "lucide-react";

export const menuItems = [
  {
    Label: "Dashboard",
    icon: Home,
    href: '/dashboard',
    active: true
  },
  {
    Label: "Alunos",
    icon: Users,
    href: "/Lista_Alunos"
  },
  {
    Label: "Plano Académico",
    icon: BookOpen,
    href: '/Plano_Academico'
  },
  {
    Label: "TPCs",
    icon: NotebookPen,
    href: "/TPCs"
  },
    {
    Label: "Avaliações",
    icon: FileCheck,
    href: "/Avliacoes"
  },
//     {
//     Label: "Definições",
//     icon: Settings
//   },
//     {
//     Label: "Logout",
//     icon: Users
//   },
];
