import { createGlobalStyle, ThemeProvider } from "styled-components";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { darkTheme } from "../lib/themes/dark";
import { lightTheme } from "../lib/themes/light";
/* snipped for brevity */

const GlobalStyles = createGlobalStyle`


`;

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles,
  }),
];
