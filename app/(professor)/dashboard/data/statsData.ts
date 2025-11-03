import { Users, BookOpen, Calendar, FileCheck} from "lucide-react";

export const stats = [
  {
    title: 'Alunos',
    value: 32,
    subtitle: 'Alunos',
    buttonText: 'Ver lista',
    icon: Users,
    color: 'text-green-600',
    buttonColor: 'bg-green-600 hover:bg-green-700 text-white',
  },
  {
    title: 'Plano Académico',
    value: 3,
    subtitle: 'Disciplinas',
    buttonText: 'Ver plano',
    icon: BookOpen,
    color: 'text-blue-600',
    buttonColor: 'bg-blue-600 hover:bg-blue-700 text-white',
  },
  {
    title: 'Agenda',
    value: 3,
    subtitle: 'Tarefas',
    buttonText: 'Ver Agenda',
    icon: Calendar,
    color: 'text-orange-600',
    buttonColor: 'bg-orange-600 hover:bg-orange-700 text-white',
  },
  {
    title: 'Avaliações',
    value: 2,
    subtitle: 'Esta semana',
    buttonText: 'Lançar notas',
    icon: FileCheck,
    color: 'text-purple-600',
    buttonColor: 'bg-purple-600 hover:bg-purple-700 text-white',
  },
];