import React, { ReactNode } from "react";

import s from "./plate.module.css";

export type TProps = {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export default function Plate({ children, className, style }: TProps) {
  return (
    <div style={style} className={`${s.plate} ${className}`}>
      {children}
    </div>
  );
}
