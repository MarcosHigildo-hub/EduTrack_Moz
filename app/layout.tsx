
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduTrack Moz",
  description: "Gestão escolar simples",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  );
}