"use client";
import { BookOpenText, Brain } from "lucide-react";
import React from "react";
import { LucideIcon } from "lucide-react";
import { menuItems } from "../data/sidebarData";
import Link from "next/link";

type sidebarprops = {
  label: string;
  icon: LucideIcon;
  href: string
  active: boolean
};

export default function SidebarProfessor ({
  label,
  icon: Icon,
  href,
  active
}: sidebarprops) {

  return (
    <>
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 z-50 m-4 rounded-2xl text-center">
        <div className="p-4 border-b border-gray-200bri">
          <div className="flex items-center justify-center gap-1 mb-0 ">
            <Brain className="w-7 h-7" />
            <h1 className="font-bold text-2xl">XEIME</h1>
            <BookOpenText className="h-7 w-7" />
          </div>
          <p className="text-gray-400">Education</p>
        </div>

        <nav className="p-4 space-y-1">
          { menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link 
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors
                  ${item.active
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <Icon size={20}/>

              </Link>
            )
          })}

        </nav>
      </aside>
    </>
  );
};


