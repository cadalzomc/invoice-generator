import { ChakraProvider } from "@chakra-ui/react";

export const ChakraUIProviders = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
