import { Users, BookOpen, Calendar, FileCheck, ArrowUpRight} from "lucide-react";

export const stats = [
  {
    title: 'Alunos',
    value: 32,
    subtitle: '',
    buttonIcone: ArrowUpRight,
    icon: Users,
    color: 'text-green-600',
    buttonColor: 'bg-green-600 hover:bg-green-700 text-white',
  },
  {
    title: 'Plano Académico',
    value: 20,
    subtitle: '',
    buttonIcone: ArrowUpRight,
    icon: BookOpen,
    color: 'text-blue-600',
    buttonColor: 'bg-blue-600 hover:bg-blue-700 text-white',
  },
  {
    title: 'TPCs',
    value: 2,
    subtitle: '',
    buttonIcone: ArrowUpRight,
    icon: Calendar,
    color: 'text-orange-600',
    buttonColor: 'bg-orange-600 hover:bg-orange-700 text-white',
  },
  {
    title: 'Avaliações',
    value: 4,
    subtitle: '',
    buttonIcone: ArrowUpRight,
    icon: FileCheck,
    color: 'text-purple-600',
    buttonColor: 'bg-purple-600 hover:bg-purple-700 text-white',
  },
];