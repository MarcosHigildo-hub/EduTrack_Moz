"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Menu, User, Home, Settings, Clock } from "lucide-react";
import StatCard from "../dashboard/components/StatCard";
import ActivityItem from "../dashboard/components/ActivityItem";
import { stats } from "../dashboard/data/statsData";
import { activities } from "../dashboard/data/activitiesData";
import SidebarProfessor from "./components/SidebarProfessor";
import NavbarProfessor from "./components/Header";
import CalendarPainel from "./components/CalendarPainel";
import TodayTask from "./components/TodayTask";
import RecenteActivites from "./components/RecenteActivites";

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
          < RecenteActivites />
          
        </div>
      </div>

      <div className="grid grid-rows-2">
        <div>
          < CalendarPainel />
        </div>

        <div>
           < TodayTask />
        </div>
      </div>
    </div>
  );
}
