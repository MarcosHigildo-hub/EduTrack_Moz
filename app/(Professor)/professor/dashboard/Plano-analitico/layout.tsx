
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <section className="">
      <div className="">
        {children}
      </div>
    </section>
  );
}

