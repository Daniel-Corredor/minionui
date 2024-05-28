import styled from "styled-components";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
const StyledBtn = styled.button`
  ${(props) => props.theme.colors.primary}
`;
export const CustomButton = ({
  primary = false,
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  return (
    <StyledBtn type="button" {...props}>
      {label}
    </StyledBtn>
  );
};
