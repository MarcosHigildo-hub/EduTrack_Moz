import * as React from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronDown } from "lucide-react"

export function AddTaskPopover({ selectedDate }: { selectedDate: Date }) {
  const [task, setTask] = React.useState("")

  const handleSave = () => {
    console.log("Tarefa:", task, "Dia:", selectedDate)
    setTask("")
    // Aqui podes chamar uma função para salvar a tarefa no estado/global
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
            Adicionar Tarefa
            <ChevronDown />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-64 p-4">
        <div className="flex flex-col gap-3">
          <Label>Tarefa</Label>
          <Input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Descrição da tarefa"
          />
          <Button onClick={handleSave}>Salvar</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
