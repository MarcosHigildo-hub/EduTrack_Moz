import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { AddTaskPopover } from "./Task";

export function Calendar18() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  return (
    <div className="bg-white ml-3 rounded-2xl text-center h-80 hover:shadow-lg transition-shadow shadow-sm">
      <div className="py-2 px-4 flex justify-between items-center">
        <div>
          <h1 className="font-semibold text-xl text-[#2F59E0]">Calendario</h1>
        </div>
        <div>
          <AddTaskPopover selectedDate={selectedDate} />
        </div>
      </div>
      <div className="flex flex-col items-center p-2 pt-0 gap-2">
        <div className="">
          <div className="w-100 h-62 px-4 py-0">
            <div className="flex justify-center ">
              <Calendar
                className="[ [&_.rdp-day]:mx-4
                  [&_.rdp-day]:w-5 [&_.rdp-day]:h-5
                  [&_.rdp-day]:flex [&_.rdp-day]:items-center [&_.rdp-day]:justify-center
                  [&_.rdp-day_selected]:bg-blue-800 [&_.rdp-day_selected]:text-white 
                  [&_.rdp-day_today]:bg-green-800 [&_.rdp-day_today]:text-white
                  [&_.rdp-day]:hover:bg-blue-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
