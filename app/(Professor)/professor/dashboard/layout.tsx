import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import SidebarProfessor from "./components/SidebarProfessor";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Painel do Professor",
  description: "Gestão do dashboard do professor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="min-h-screen  bg-gradient-to-br from-green-50 to-yellow-50">
        <SidebarProfessor />
        <div className="lg:ml-72">
          <Header />
        </div>
        <main className="min-h-screen my-4 mx-4 lg:ml-72">{children}</main>
      </body>
    </html>
  );
}
