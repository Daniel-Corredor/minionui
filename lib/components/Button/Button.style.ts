import styled, { DefaultTheme, css } from "styled-components";
import { gap } from "../../tokens/gap";
import { ButtonVariant, getButtonStyles } from "./getButtonVariant";
import { Theme } from "../../themes/theme.interface";
import { radius } from "../../tokens/radius";
import { body } from "../../fontStyle/body";

export interface CustomTheme extends DefaultTheme {
  theme: Theme;
}

export interface ButtonProps {
  $variant?: ButtonVariant;
  $fullWidth?: boolean;
  theme: Theme;

  // Otras propiedades...
}

const buttonStyles = css<ButtonProps>`
  font-family: ${body.fontFamily};
  padding: ${gap.md} ${gap.lg};
  border-radius: ${radius["4xl"]};
  font-weight: ${body.fontStyle4.bold.fontWeight};
  font-size: ${body.fontStyle4.bold.fontSize};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${gap.sm};
  transition: background-color 0.3s ease-in;
  ${({ $variant, theme }) => getButtonStyles($variant || "primary", theme)};
  ${({ $fullWidth }) => $fullWidth && `flex-grow: 1;`};
`;

export const ButtonStyled = styled.button.attrs<ButtonProps>((props) => ({
  $variant: props.$variant,
}))<ButtonProps>`
  ${buttonStyles}
`;
