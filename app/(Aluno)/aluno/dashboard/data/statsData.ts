import { Users, CheckSquare, BookOpen, FileCheck, ArrowUpRight, NotebookPen, Gamepad2, ClockAlert} from "lucide-react";

export const stats = [
  {
    title: 'Quizzes Feitos',
    value: 8,
    subtitle: 'concluídos',
    buttonIcone: CheckSquare,
    icon: Gamepad2,
    color: 'text-[#2FE0BE]',
    buttonColor: 'bg-green-600 hover:bg-green-700 text-white',
  },
  {
    title: 'Plano de estudos',
    value: "3",
    subtitle: 'tópicos concluídos',
    buttonIcone: ArrowUpRight,
    icon: BookOpen,
    color: 'text-[#2F91E0]',
    buttonColor: 'bg-blue-600 hover:bg-blue-700 text-white',
  },
  {
    title: 'TPCs',
    value: 2,
    subtitle: 'Pendentes',
    buttonIcone: ClockAlert,
    icon: NotebookPen,
    color: 'text-[#2FC9E0]',
    buttonColor: 'bg-orange-600 hover:bg-orange-700 text-white',
  },
  {
    title: 'Avaliações',
    value: 1,
    subtitle: 'Pendentes',
    buttonIcone: ClockAlert,
    icon: FileCheck,
    color: 'text-[#3E2FE0]',
    buttonColor: 'bg-purple-600 hover:bg-purple-700 text-white',
  },
];