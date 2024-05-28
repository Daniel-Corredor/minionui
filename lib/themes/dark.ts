import { colors } from "../tokens/colors";
import { padding } from "../tokens/padding";
import { Theme } from "./theme.interface";

export const darkTheme: Theme = {
  color: {
    background: {
      button: {
        primary: {
          default: colors.yellow[400],
          hover: colors.yellow[300],
          active: colors.yellow[500],
          disabled: colors.gray[50],
        },
        secondary: {
          default: "transparent",
          hover: colors.gray[300],
          active: colors.gray[200],
          disabled: "transparent",
        },
      },
    },
    text: {
      button: {
        primary: {
          default: colors.gray[800],
          hover: colors.gray[800],
          active: colors.gray[800],
          disabled: colors.gray[100],
        },
        secondary: {
          default: "#FFF",
          hover: "#FFF",
          active: "#FFF",
          disabled: colors.gray[300],
        },
      },
    },
    border: {
      button: {
        primary: {
          default: "",
          hover: "",
          active: "",
          disabled: "",
        },
        secondary: {
          default: "white",
          hover: "white",
          active: "white",
          disabled: colors.gray[300],
        },
      },
    },
  },
  padding: {
    button: {
      primary: {
        top: padding.md,
        right: padding.lg,
        bottom: padding.md,
        left: padding.lg,
      },
      secondary: {
        top: padding.md,
        right: padding.lg,
        bottom: padding.md,
        left: padding.lg,
      },
    },
  },
};
