import { Logo } from "@/components/logo";
import { Typography } from "antd";
import React from "react";

import s from "./main.module.css";
import { MegaButton } from "@/components/mega-button";
import AccountsIcon from "@/components/icons/accounts";
import AttentionDialogIcon from "@/components/icons/attention-dialog";
import DocumentIcon from "@/components/icons/document";
import CreditCardIcon from "@/components/icons/credit-card";
import GearIcon from "@/components/icons/gear";
import { useRouter } from "next/navigation";

export function MainPage() {
  const router = useRouter();

  return (
    <div className={s.body}>
      <div style={{ height: "5.3rem" }}>
        <Logo />
      </div>
      <Typography.Title>Добро пожаловать, приятной работы!</Typography.Title>
      <Typography.Text style={{ color: "#899098", fontSize: "1.875rem" }}>
        Выберите категорию
      </Typography.Text>
      <div className={s["buttons-container"]}>
        <MegaButton
          icon={AttentionDialogIcon}
          text="Заявки"
          onClick={() => router.push("/applications")}
        />
        <MegaButton
          icon={DocumentIcon}
          text="Договора"
          onClick={() => alert("Договора")}
        />
        <MegaButton
          icon={CreditCardIcon}
          text="Платежи"
          onClick={() => alert("Платежи")}
        />
        <MegaButton
          icon={GearIcon}
          text="Настройки"
          onClick={() => alert("Настройки")}
        />
        <MegaButton
          icon={AccountsIcon}
          text="Администрирование"
          onClick={() => alert("Администрирование")}
        />
      </div>
    </div>
  );
}
