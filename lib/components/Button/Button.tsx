import { ButtonHTMLAttributes, ReactElement } from "react";
import { ButtonStyled } from "./Button.style";
import { ButtonVariant } from "./getButtonVariant";
import "../global/fonts.css";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  label: string;
}

const Button = ({
  label,
  startIcon,
  endIcon,
  variant,
  disabled,
  fullWidth,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyled
      $variant={variant}
      $fullWidth={fullWidth}
      disabled={disabled}
      {...props}
    >
      {startIcon} {label} {endIcon}
    </ButtonStyled>
  );
};

export default Button;
