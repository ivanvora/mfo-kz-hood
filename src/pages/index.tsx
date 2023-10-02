import { MainPage } from "@/components/pages/main";
import { theme } from "@/modules/config/ant";
import { Button, ConfigProvider } from "antd";
import React from "react";

function Main() {
  return (
    <ConfigProvider theme={theme}>
      <MainPage />
    </ConfigProvider>
  );
}

export default Main;
