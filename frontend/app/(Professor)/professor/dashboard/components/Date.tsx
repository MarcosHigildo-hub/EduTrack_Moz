"use client"

import * as React from "react"
import { pt } from "date-fns/locale"
import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function Calendar24() {
  const [date, setDate] = React.useState(new Date())
  const [open, setOpen] = React.useState(false)

  
  const getWeekDays = () => {
    const today = new Date()
    const dayOfWeek = today.getDay() 
    const monday = new Date(today)
    monday.setDate(today.getDate() - ((dayOfWeek + 6) % 7)) 

    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(monday)
      d.setDate(monday.getDate() + i)
      return d
    })
  }

  const weekDays = getWeekDays()

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date-picker" className="px-1">
        
      </Label>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date-picker"
            className="w-32 justify-between font-normal"
          >
            Hoje
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-2" align="start">
        
          <div className="flex flex-col gap-2">
            {weekDays.map((day) => (
              <Button
                key={day.toDateString()}
                variant={
                  day.toDateString() === date.toDateString() ? "default" : "outline"
                }
                onClick={() => {
                  setDate(day)
                  setOpen(false)
                }}
              >
                {day.toLocaleDateString("pt-PT", { weekday: "short", day: "2-digit" })}
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
