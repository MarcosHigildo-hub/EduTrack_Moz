import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import SidebarAluno from "./components/SidebarAlunos";
import './AlunoDshboard.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Painel do Aluno",
  description: "Gestão do dashboard do Aluno",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="min-h-screen ">
          <SidebarAluno />
          <div className="flex-1 flex flex-col min-h-screen justify-center">
            <div className="flex-1 max-w-7xl flex flex-col min-h-screen">
              <Header />
              <main className="flex-1 mt-4 mb-4 mx-4">
                {children}
              </main>
            </div>
          </div>
        
      </body>
    </html>
  );
}
