"use client";
import { Logo } from "@/components/logo";
import Plate from "@/components/plate";
import { Button, Input, Typography } from "antd";
import React, { useState } from "react";
import s from "./auth.module.css";
import LogoIcon from "@/components/icons/logo";
import { SatbayevLogoIcon } from "@/components/icons/satbayev-logo";

import { client } from "@/modules/api";
import { useRouter } from "next/navigation";
import { CreatorsLogo } from "@/components/icons/creators";

export function AuthPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fetching, setFetching] = useState(false);

  const onAuthClick = () => {
    setFetching(true);
    client.auth
      .login({ username, password })
      .then((r) => {
        setFetching(false);
        router.push("/main");
      })
      .catch((e) => {
        setFetching(false);
        console.log(e);
      });
  };

  return (
    <div className={s.body}>
      <div></div>
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
          <Button
            disabled={fetching}
            onClick={onAuthClick}
            type="primary"
            className={s.button}
          >
            Войти
          </Button>
          <Typography.Link style={{ fontSize: "1.25rem" }}>
            Регистрация
          </Typography.Link>
        </Plate>
      </div>

      <div className={s.footer}>
        <SatbayevLogoIcon className={s["satbayev-logo"]} />
        Спроектировано и реализовано
        <CreatorsLogo />
      </div>
    </div>
  );
}
