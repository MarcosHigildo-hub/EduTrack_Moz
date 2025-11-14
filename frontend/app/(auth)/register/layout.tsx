import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XEIME",
  description: "Gestão escolar simples",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="min-h-screen bg-gradient-to-br from-[#9BBCF0] to-[#2FE0BE] flex justify-center">
        <div className="flex max-w-7xl w-full shadow-lg px-10 mx-auto rounded-xl overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
