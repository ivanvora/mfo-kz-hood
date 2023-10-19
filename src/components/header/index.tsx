"use client";
import React from "react";
import styles from "./header.module.css";
import { Avatar, Button, Typography } from "antd";
import LogoIcon from "../icons/logo";
import { Logo } from "../logo";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.content}>
        <Avatar src="https://gsflash.ru/images/character/13687.jpg" />
        <Typography.Text style={{ fontSize: "1.25rem" }}>
          Фамилия И.
        </Typography.Text>
        <Typography.Link style={{ fontSize: "1.25rem" }}>Выход</Typography.Link>
        <Button>RU</Button>
      </div>
    </div>
  );
}
