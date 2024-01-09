import type { CSSProperties, InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { font, theme } from "../../../styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    width?: string;
    fontSize?: string;
}
  
const Input = ({ width = "100%", id, ...props }: InputProps) => {
    return (
        <StyledInput id={id} width={width} {...props} />
    );
  };

export default Input;

const StyledInput = styled.input<{ width: string }>`
    width: ${({ width }) => width};
    ${font.p2};
    width: 100%;
    padding: 1rem 1.5rem;

    background-color: white;
    border: 1px solid ${theme.gray200};
    border-radius: 0.625rem;
    outline: none;

    &:focus {
        border-color: ${theme.gray600};  
        transition: 0.3s ease;
    }
`;