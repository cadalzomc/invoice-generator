import React from "react";
import { Header } from "@/app/_components/ui";
import { ChakraUIProviders } from "@/app/_lib/utils";

export const LayoutMain = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraUIProviders>
      <Header />
      {children}
    </ChakraUIProviders>
  );
};
