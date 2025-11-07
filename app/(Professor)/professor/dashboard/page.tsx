"use client";

import StatCard from "../dashboard/components/StatCard";
import { stats } from "../dashboard/data/statsData";
import { Calendar18 } from "./components/CalendarPainel";
import Progresse from "./components/Progresse";
import TodayTask from "./components/TodayTask";



export default function ProfessorDashboard() {
  return (
    <div className="grid grid-cols-2 gap-2 ">

      <div className="grid grid-rows-2">
        <div className="grid grid-cols-2 gap-2">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="">
          < Progresse />
          
        </div>
      </div>

      <div className="grid grid-rows-2">
        <div>
          < Calendar18 />
        </div>

        <div>
           < TodayTask />
        </div>
      </div>
    </div>
  );
}
