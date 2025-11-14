"use client";
import { BookOpenText, Brain, GraduationCap } from "lucide-react";
import { actionItem, menuItems } from "../data/sidebarData";
import Link from "next/link";
import logo from "@/public/logo.png";
import Image from "next/image";
import React, { useState } from "react";
import { Turmas, turmas } from "../data/sidebarData";
import * as Select from "@radix-ui/react-select";
import { ChevronDown, Check } from "lucide-react";
import { useTurma } from "./context/TurmaContext";

export default function SidebarProfessor() {
  const [activeHref, setActiveHref] = useState("/professor/dashboard");
  // const [turmaSelecionada, setTurmaSelecionada] = useState<string | null>(); ID da turma
   const { turmaSelecionada, setTurmaSelecionada } = useTurma();
  

  return (
    <>
      <aside className="  max-h-[650px] w-64 bg-white border-r border-gray-200 z-50 mt-4 ml-4 rounded-2xl text-center">
        <div className="p-1 border-b border-gray-300 flex justify-center items-center">
          {/* <div className="flex items-center justify-center gap-2 mb-0 ">
            <Brain className="w-5 h-5" />
            <h1 className="font-bold text-2xl">XEIME</h1>
            <BookOpenText className="h-5 w-5" />
          </div>
          <p className="text-gray-400">Education</p> */}
          <Image src={logo} alt="logo da XEIME" width={90} height={90} />
        </div>

        <nav className="p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeHref === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActiveHref(item.href)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors 
        ${
          isActive
            ? "bg-[#2F59E0] text-white"
            : "text-gray-700 hover:bg-[#E8F3FE]"
        }`}
              >
                <Icon size={20} />
                <span className="font-medium text-sm">{item.label}</span>
              </Link>
            );
          })}

          <div className=" px-4 ">
            <label
              htmlFor="turma-select"
              className="font-medium text-sm  text-gray-700 flex  items-center gap-3  py-3 "
            >
              <GraduationCap size={20} /> Selecionar Educando
            </label>
          </div>

          <Select.Root
            value={turmaSelecionada ?? ""}
            onValueChange={(value) => setTurmaSelecionada(value)}
          >
            <Select.Trigger className="flex justify-between items-center w-full px-4 py-2 bg-white border border-gray-300 rounded-xl text-gray-700 font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#2F59E0]">
              <Select.Value placeholder="Selecionar Turma" />
              <Select.Icon>
                <ChevronDown size={18} className="text-gray-500" />
              </Select.Icon>
            </Select.Trigger>

            <Select.Content
              position="popper"
              sideOffset={5}
              className="w-[var(--radix-select-trigger-width)] bg-white border border-gray-200 rounded-xl shadow-lg mt-1 overflow-hidden"
            >
              <Select.Viewport className="p-1">
                {turmas.map((turma) => (
                  <Select.Item
                    key={turma.id}
                    value={turma.id}
                    className={`px-4 py-2 rounded-lg text-sm cursor-pointer flex items-center justify-between transition-colors duration-150 hover:bg-[#2F59E0] hover:text-white radix-state-checked:bg-[#2F59E0] radix-state-checked:text-white`}
                  >
                    <Select.ItemText>{turma.nome}</Select.ItemText>
                    <Select.ItemIndicator>
                      <Check size={16} className="text-white" />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Root>

          {/* <select
              id="turma-select"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F59E0] mb-3"
              value={turmaSelecionada.id}
              onChange={(e) => {
                const turmaEscolhida = turmas.find(
                  (t) => t.id === e.target.value
                );
                if (turmaEscolhida) setTurmaSelecionada(turmaEscolhida);
              }}
            >
              {turmas.map((turma) => (
                <option key={turma.id} value={turma.id} className="text-sm text-gray-700">
                  {turma.nome}
                </option>
              ))}
            </select>
          </div> */}

          <div className="py-10"></div>

          {actionItem.map((text) => {
            const Icon = text.icon;
            const isActive = activeHref === text.href;
            return (
              <Link
                key={text.href}
                href={text.href}
                onClick={() => setActiveHref(text.href)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors
        ${
          isActive
            ? "bg-[#2F59E0] text-white"
            : "text-gray-700 hover:bg-[#E8F3FE]"
        }`}
              >
                <Icon size={20} />
                <span className="font-medium text-sm">{text.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
