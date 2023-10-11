import React from "react";

import s from "./page-layout.module.css";
import Menu from "@/components/menu";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={s.body}>
      <Header />
      <Menu />
      <div className={s.container}>{children}</div>
      <Footer />
    </div>
  );
}
