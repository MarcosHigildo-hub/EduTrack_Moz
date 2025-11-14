// app/page.tsx
"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/public/logo.png";
import { BookOpen, Users, ArrowRight } from "lucide-react";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex justify-center mx-auto">
      <div className="w-full max-w-md flex flex-col items-center text-center space-y-8">

        {/* === LOGO + TEXTO === */}
        <div className="flex flex-col items-center">
          <Image
            src={logo}
            alt="logo da XEIME"
            width={200}
            height={200}
            className="drop-shadow-lg"
            priority
          />
          <p className="mt-4 text-xl text-black leading-relaxed">
            Sistema de Gestão de Desempenho Escolar
          </p>

          <p className="mt-10 text-lg text-gray-600">
            Uma solução digital que visa apoiar a melhoria da qualidade do ensino no nível primário.
          </p>
        </div>

        {/* === BOTÕES === */}
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
          <button
            onClick={() => router.push("/login")}
            className="group flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            <BookOpen className="w-6 h-6 group-hover:animate-bounce" />
            Entrar
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => router.push("/register")}
            className="group flex items-center justify-center gap-3 bg-white text-blue-700 font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-purple-200 w-full sm:w-auto"
          >
            <Users className="w-6 h-6 group-hover:animate-pulse" />
            Registar-me
          </button>
        </div>

        {/* === RODAPÉ === */}
        <footer className="text-xs text-black">
          © 2025 XEIME .
        </footer>
      </div>
    </div>
  );
}