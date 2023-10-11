"use client";
import React, { ReactNode } from "react";
import s from "./menu-item.module.css";
import { Typography } from "antd";

type TProps = {
  icon?: ReactNode;
  text?: ReactNode;
  onClick?: () => void;
};

export default function MenuItem({ icon, text, onClick }: TProps) {
  return (
    <div onClick={onClick} className={s.body}>
      <div className={s.icon}>{icon}</div>
      <div className={s.text}>
        <Typography.Text style={{ wordBreak: "unset" }}>{text}</Typography.Text>
      </div>
    </div>
  );
}
