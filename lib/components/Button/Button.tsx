import { ButtonHTMLAttributes, ReactElement } from "react";
import { ButtonStyled } from "./Button.style";
import { ButtonVariant } from "./getButtonVariant";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  variant?: ButtonVariant;
  label: string;
}

const Button = ({
  label,
  startIcon,
  endIcon,
  variant,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyled variant={variant} disabled={disabled} {...props}>
      {startIcon} {label} {endIcon}
    </ButtonStyled>
  );
};

export default Button;
