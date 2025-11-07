import { Users, BookOpen, FileCheck, ArrowUpRight, NotebookPen} from "lucide-react";

export const stats = [
  {
    title: 'Alunos',
    value: 32,
    subtitle: '',
    buttonIcone: ArrowUpRight,
    icon: Users,
    color: 'text-[#2FE0BE]',
    buttonColor: 'bg-green-600 hover:bg-green-700 text-white',
  },
  {
    title: 'Plano Académico',
    value: 20,
    subtitle: '',
    buttonIcone: ArrowUpRight,
    icon: BookOpen,
    color: 'text-[#2F91E0]',
    buttonColor: 'bg-blue-600 hover:bg-blue-700 text-white',
  },
  {
    title: 'TPCs',
    value: 2,
    subtitle: '',
    buttonIcone: ArrowUpRight,
    icon: NotebookPen,
    color: 'text-[#2FC9E0]',
    buttonColor: 'bg-orange-600 hover:bg-orange-700 text-white',
  },
  {
    title: 'Avaliações',
    value: 4,
    subtitle: '',
    buttonIcone: ArrowUpRight,
    icon: FileCheck,
    color: 'text-[#3E2FE0]',
    buttonColor: 'bg-purple-600 hover:bg-purple-700 text-white',
  },
];