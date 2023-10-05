"use client";
import { Logo } from "@/components/logo";
import Plate from "@/components/plate";
import { Button, Input, Typography } from "antd";
import React, { useState } from "react";
import s from "./auth.module.css";
import LogoIcon from "@/components/icons/logo";
import { SatbayevLogoIcon } from "@/components/icons/satbayev-logo";

import { client } from "@/modules/api";
import { TLoginRequest } from "@/modules/models/api/auth";
import { useRouter } from "next/navigation";

export function AuthPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onAuthClick = () => {
    client.auth
      .login({ username, password })
      .then((r) => {
        router.push("/main");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className={s.body}>
      <LogoIcon className={s["logo-icon"]} />
      <div className={s.panel}>
        <div className={s.logo}>
          <Logo />
        </div>
        <Typography.Text style={{ color: "#899098", fontSize: "1.25rem" }}>
          Добро пожаловать, авторизуйтесь в системе
        </Typography.Text>
        <Plate className={s.plate}>
          <Typography.Title style={{ margin: "0" }}>
            Авторизация
          </Typography.Title>
          <Input
            placeholder="Логин"
            onChange={(e) => setUsername(e.currentTarget.value)}
            className={s.input}
          />
          <Input
            placeholder="Пароль"
            onChange={(e) => setPassword(e.currentTarget.value)}
            type="password"
            className={s.input}
          />
          <Button onClick={onAuthClick} type="primary" className={s.button}>
            Войти
          </Button>
          <Typography.Link style={{ fontSize: "1.25rem" }}>
            Регистрация
          </Typography.Link>
        </Plate>
      </div>
      <SatbayevLogoIcon className={s["satbayev-logo"]} />
    </div>
  );
}
