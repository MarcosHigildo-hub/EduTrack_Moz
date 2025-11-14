"use client"
import React from "react"
import { Calendar24 } from "./Date"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Trash2 } from "lucide-react"
import { tasksToday, TaskToday } from "../data/todaytaskData"

const TodayTask = () => {
  const [tasks, setTasks] = React.useState<TaskToday[]>(tasksToday)

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, done: !t.done } : t)))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  return (
    <div className="bg-white mt-4 ml-4 rounded-2xl text-center h-57 hover:shadow-lg transition-shadow shadow-sm">
      <div className="p-2 flex justify-between items-center">
        <h1 className="font-semibold text-xl text-[#2F59E0]">Agenda</h1>
        <Calendar24 />
      </div>

      <Card className="w-full max-w-md mx-auto">
        <CardContent className="p-1 flex flex-col gap-1">
          {tasks.length === 0 ? (
            <p className="text-center text-sm text-muted-foreground">
              Nenhuma tarefa marcada.
            </p>
          ) : (
            tasks.map(task => {
              const Icone = task.icone
              const Icone2 = task.icone2
              return (
                <div
                  key={task.id}
                  className="flex items-center justify-between border rounded-lg p-1 hover:bg-accent transition"
                >
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={task.done}
                      onCheckedChange={() => toggleTask(task.id)}
                    />
                    <Icone className="w-4 h-4 text-blue-500" />
                    <span
                      className={`text-sm ${
                        task.done ? "line-through text-muted-foreground" : ""
                      }`}
                    >
                      {task.label}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteTask(task.id)}
                  >
                    <Icone2 className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              )
            })
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default TodayTask
