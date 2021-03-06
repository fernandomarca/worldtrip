import { chakra } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export function Button({ children }: ButtonProps) {
  return <chakra.button bg="gray.50">{children}</chakra.button>;
}
