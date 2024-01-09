import styled from "styled-components";
import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { font, theme } from "../../../styles";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
  style?: React.CSSProperties;
}

function Button({ children, style, ...props }: ButtonProps): JSX.Element {
  return (
    <StyledButton {...props} style={style}>
      {children}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button<ButtonProps>`
  color: black;
  ${font.btn1};
  background-color: ${theme.gray[100]};
  border-radius: 1.25rem;
  padding: 1.125rem 1.688rem;
`;
