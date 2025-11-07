import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import SidebarProfessor from "./components/SidebarProfessor";

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
      <body className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
        <SidebarProfessor />

        <div className="flex-1 flex flex-col min-h-screen justify-center">
          <div className="flex-1 max-w-7xl flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 mt-4 mb-4 mx-4  max-h-screen">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
