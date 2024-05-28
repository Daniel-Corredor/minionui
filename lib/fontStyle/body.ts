import { typography } from "../tokens/typography";

const { fontFamily, weight, fontSize, lineHeight } = typography;
export const body = {
  fontFamily: fontFamily.body,
  fontStyle1: {
    regular: {
      fontWeight: weight.regular,
      fontSize: fontSize.xs,
      lineHeight: lineHeight.xs,
    },
    semiBold: {
      fontWeight: weight.semiBold,
      fontSize: fontSize.xs,
      lineHeight: lineHeight.xs,
    },
    bold: {
      fontWeight: weight.bold,
      fontSize: fontSize.xs,
      lineHeight: lineHeight.xs,
    },
  },
  fontStyle2: {
    regular: {
      fontWeight: weight.regular,
      fontSize: fontSize.sm,
      lineHeight: lineHeight.sm,
    },
    semiBold: {
      fontWeight: weight.semiBold,
      fontSize: fontSize.sm,
      lineHeight: lineHeight.sm,
    },
    bold: {
      fontWeight: weight.bold,
      fontSize: fontSize.sm,
      lineHeight: lineHeight.sm,
    },
  },
  fontStyle3: {
    regular: {
      fontWeight: weight.regular,
      fontSize: fontSize.md,
      lineHeight: lineHeight.md,
    },
    semiBold: {
      fontWeight: weight.semiBold,
      fontSize: fontSize.md,
      lineHeight: lineHeight.md,
    },
    bold: {
      fontWeight: weight.bold,
      fontSize: fontSize.md,
      lineHeight: lineHeight.md,
    },
  },
  fontStyle4: {
    regular: {
      fontWeight: weight.regular,
      fontSize: fontSize.lg,
      lineHeight: lineHeight.lg,
    },
    semiBold: {
      fontWeight: weight.semiBold,
      fontSize: fontSize.lg,
      lineHeight: lineHeight.lg,
    },
    bold: {
      fontWeight: weight.bold,
      fontSize: fontSize.lg,
      lineHeight: lineHeight.lg,
    },
  },
};
