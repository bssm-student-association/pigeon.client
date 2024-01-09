import type { CSSProperties, TextareaHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { theme, font } from "../../../styles";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name?: string;
  value?: string;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
}

const TextArea = ({
  name,
  value,
  width,
  height,
  onChange,
}: TextAreaProps): JSX.Element => {
  return (
    <StyledTextArea
      name={name}
      style={{ width, height }}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextArea;

const StyledTextArea = styled.textarea`
  ${font.p1};
  padding: 1rem 1.5rem;
  width: 100%;
  min-height: 30vh;
  border: 1px solid ${theme.gray[200]};
  border-radius: 1.25rem;
  outline: none;

  &:focus {
    border-color: ${theme.gray[600]};
    transition: 0.3s ease;
  }
`;
