import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({ config, 
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#f3f3f3",
      200: "#e9e9e9",
      300: "#d9d9d9",
      400: "#bfbfbf",
      500: "#a6a6a6",
      900: "#171923",
    },
    }
  }
 );

export default theme;
