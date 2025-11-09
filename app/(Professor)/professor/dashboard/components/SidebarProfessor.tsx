"use client";
import { BookOpenText, Brain } from "lucide-react";
import { actionItem, menuItems } from "../data/sidebarData";
import Link from "next/link";
import logo from "@/public/logo.png";
import Image from "next/image";
import React, { useState } from "react";

export default function SidebarProfessor() {
  const [activeHref, setActiveHref] = useState("/professor/dashboard");
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
            const isActive = activeHref === item.href; // true se este item estiver ativo
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActiveHref(item.href)} // atualiza estado quando clicado
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

          <div className="py-22"></div>

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
