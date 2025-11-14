// app/(aluno)/aluno/quizzes/layout.tsx
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <section className=" w-full flex justify-center items-center ">
      <div className="w-full max-w-4xl">{children}</div>
    </section>
  );
}
