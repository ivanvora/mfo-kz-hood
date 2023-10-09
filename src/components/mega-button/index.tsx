import React from "react";
import s from "./mega-button.module.css";

import type { TProps as TIconsProps } from "@/components/icons";
import LogoIcon from "../icons/logo";

export type TProps = {
  onClick: () => void;
  text: string;
  icon: React.FC<TIconsProps>;
};

export function MegaButton({ onClick, icon: Icon, text }: TProps) {
  return (
    <div className={s.body} onClick={() => onClick()}>
      <div className={s["body-bg"]}></div>
      <div className={s["icon-container"]}>
        <Icon />
      </div>
      <div className={s["label-container"]}>{text}</div>
    </div>
  );
}
