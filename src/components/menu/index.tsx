"use client";
import React from "react";
import s from "./menu.module.css";
import MenuItem from "./menu-item";
import AccountsIcon from "../icons/accounts";
import CreditCardIcon from "../icons/credit-card";
import AttentionDialogIcon from "../icons/attention-dialog";
import DocumentIcon from "../icons/document";
import GearIcon from "../icons/gear";
import HomeIcon from "../icons/home";
import { useRouter } from "next/navigation";

export function Menu() {
  const router = useRouter();
  return (
    <nav className={s.menu}>
      <MenuItem
        onClick={() => router.push("/main")}
        icon={<HomeIcon />}
        text={"Главная"}
      />
      <MenuItem
        onClick={() => router.push("/statements")}
        icon={<AttentionDialogIcon />}
        text={"Заявки"}
      />
      <MenuItem icon={<DocumentIcon />} text={"Договора"} />
      <MenuItem icon={<CreditCardIcon />} text={"Платежи"} />
      <MenuItem icon={<GearIcon />} text={"Настройки"} />
      <MenuItem icon={<AccountsIcon />} text={"Администрирование"} />
    </nav>
  );
}
