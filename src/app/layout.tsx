import { ConfigProvider } from "antd";
import "./globals.css";
import type { Metadata } from "next";
import { theme } from "@/modules/config/ant";
import { Footer } from "@/components/footer";

import s from "./root-layout.module.css";

export const metadata: Metadata = {
  title: "MFO",
  description: "Enginering by HOOD",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider theme={theme}>
      <html lang="en">
        <body>
          {children}

          <Footer />
        </body>
      </html>
    </ConfigProvider>
  );
}
