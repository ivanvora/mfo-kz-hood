import { Header } from "@/components/header";
import { Footer } from "../../footer";
import s from "./main-layout.module.css";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={s.body}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
