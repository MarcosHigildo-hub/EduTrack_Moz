import * as React from "react"
import { BookCopy, BookOpen, PenBox, Trash2 } from "lucide-react"

export type TaskToday = {
  id: number
  icone: React.ElementType
  label: string
  done: boolean
  icone2: React.ElementType
}

export const tasksToday: TaskToday[] = [
  { id: 1, icone: BookOpen, label: "Reunião com encarregados", done: true, icone2: Trash2 },
  { id: 2, icone: PenBox, label: "Outra tarefa", done: false, icone2: Trash2 },
//   { id: 3, icone: BookCopy, label: "kajlhjd", done: false, icone2: Trash2 }, 
];