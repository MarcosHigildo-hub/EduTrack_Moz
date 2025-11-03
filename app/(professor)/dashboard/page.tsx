'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, Menu, User, Home, Settings, Clock } from 'lucide-react';
import StatCard from '../dashboard/components/StatCard';
import ActivityItem from '../dashboard/components/ActivityItem';
import { stats } from '../dashboard/data/statsData';
import { activities } from '../dashboard/data/activitiesData';

export default function ProfessorDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 pb-20">
      {/* HEADER */}
      <header className="bg-white shadow-sm border-b border-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
              <h1 className="text-xl font-bold text-green-700">EduTrack Moz</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
              </Button>
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-green-700" />
                <div>
                  <p className="text-sm font-medium">João</p>
                  <p className="text-xs text-gray-500">3ª Classe A</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* SAUDAÇÃO */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Bem-vindo, Professor João!
          </h2>
        </div>

        {/* CARDS*/}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* ATIVIDADES RECENTES */}
        <Card className="mb-24">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Atividades Recentes
            </CardTitle>
            <button className="text-sm text-emerald-600 hover:underline">
              Ver tudo
            </button>
          </CardHeader>
          <CardContent className="space-y-4">
            {activities.map((activity, index) => (
              <ActivityItem key={index} {...activity} />
            ))}
          </CardContent>
        </Card>
      </main>

      {/* MENU INFERIOR */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-green-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-around py-2">
            <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 text-green-700">
              <Home className="h-5 w-5" />
              <span className="text-xs">Dashboard</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
              <Bell className="h-5 w-5" />
              <span className="text-xs">Notificações</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
              <User className="h-5 w-5" />
              <span className="text-xs">Perfil</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
              <Settings className="h-5 w-5" />
              <span className="text-xs">Mais</span>
            </Button>
          </div>
        </div>
      </nav>



    </div>

  );
}