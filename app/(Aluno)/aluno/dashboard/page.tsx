"use client";

import StatCard from "./components/StatCards";
import { stats } from "../dashboard/data/statsData";
import Progresse from "./components/Progresse";
import { ChartLine } from "lucide-react";
import DesafioDoDiaCard from "./components/DesafioDoDia";
import QuizRelampago from "./components/PerguntaRelapago";
import FraseDoDia from "./components/FraseDoDia";

export default function ProfessorDashboard() {
  return (
    <div className="grid grid-cols-2 gap-4 P-4">
      <div className="grid grid-rows-2 gap-4">
        <div className="grid grid-cols-2 gap-2 mr-2">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="">
          <QuizRelampago />
        </div>
      </div>

      <div className="grid grid-rows-2 gap-4">
        <div>
          <DesafioDoDiaCard />
        </div>

        <div className="">
            <FraseDoDia />
        </div>
      </div>
    </div>
  );
}
