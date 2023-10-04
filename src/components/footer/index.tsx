import React from "react";
import { CreatorsLogo } from "../icons/creators";
import s from "./footer.module.css";

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.label}>
        {`Спроектировано и реализовано `}
        <CreatorsLogo />
      </div>
    </footer>
  );
}
