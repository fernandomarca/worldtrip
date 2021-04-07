import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#181b23",
      "800": "#1f2829",
      "700": "#353646",
      "600": "#4b4d63",
      "500": "#616480",
      "400": "#797d9a",
      "300": "#9699bD",
      "200": "#b3b5c6",
      "100": "#d1d2dc",
      "50": "#eeeef2",
    },
  },
  fonts: {
    body: "Roboto",
    heading: "Roboto",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "light" ? "gray.50" : "gray.900",
        color: props.colorMode === "light" ? "gray.900" : "gray.50",
      },
      input: {
        color: props.colorMode === "light" ? "gray.900" : "gray.50",
      },
    }),
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
    cssVarPrefix: "ck",
  },
});
