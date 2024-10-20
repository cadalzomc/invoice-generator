import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Header } from "@/app/_components/ui";

export const LayoutMain = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <Header />
      {children}
    </NextUIProvider>
  );
};
