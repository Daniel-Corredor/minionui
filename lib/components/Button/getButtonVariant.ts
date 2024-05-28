import { css } from "styled-components";
import { border } from "../../tokens/border";
import { CustomTheme } from "./Button.style";
import { Theme } from "../../themes/theme.interface";

export type ButtonVariant = "primary" | "secondary";

const buttonVariantStyles: Record<
  ButtonVariant,
  (props: CustomTheme) => ReturnType<typeof css>
> = {
  primary: ({ theme }: CustomTheme) => {
    return css`
      background-color: ${theme.color.background.button.primary.default};
      color: ${theme.color.text.button.primary.default};
      border: none;
      &:hover {
        background-color: ${theme.color.background.button.primary.hover};
      }
      &:active {
        background-color: ${theme.color.background.button.primary.active};
      }
      &:disabled {
        background-color: ${theme.color.background.button.primary.disabled};
        color: ${theme.color.text.button.primary.disabled};
      }
    `;
  },
  secondary: ({ theme }: CustomTheme) => css`
    background-color: ${theme.color.background.button.secondary.default};
    color: ${theme.color.text.button.secondary.default};
    border: ${border.xs} solid ${theme.color.border.button.primary.default};
    &:hover {
      background-color: ${theme.color.background.button.secondary.hover};
    }
    &:active {
      background-color: ${theme.color.background.button.secondary.active};
    }
    &:disabled {
      background-color: ${theme.color.background.button.secondary.disabled};
      color: ${theme.color.text.button.secondary.disabled};
      border-color: ${theme.color.border.button.secondary.disabled};
    }
  `,
};

export const getButtonStyles = (variant: ButtonVariant, theme: Theme) =>
  buttonVariantStyles[variant]({ theme });
