import styled, { css } from "styled-components";
import { theme, font } from "../../../styles";

interface CategoryProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id?: string;
    label: string;
    selected: string;
}

const Category = ({ id, label, selected, ...props }: CategoryProps) => {
  return (
      <>
        <StyledCategory id={id} type="radio" {...props} />
        <StyledLabel htmlFor={id} selected={selected}>
            {label}
        </StyledLabel>
      </>
  );
};

const StyledCategory = styled.input`
  display: none;
`;

const StyledLabel = styled.label<{ selected: string }>`
  border: none;
  padding: 6px 16px;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px 0 rgba(144, 144, 144, 0.1);
  ${font.btn3};

  background-color: ${({ selected }) => {
    if (selected === "SUGGESTION") {
      return theme.light_blue;
    }
    if (selected === "PROJECT") {
      return theme.light_green;
    }
    if (selected === "MENTORING") {
      return theme.yellow;
    }
    return theme.gray50;
  }};

    border-color: ${({ selected }) => {
        if (selected === "SUGGESTION") {
            return `2px solid ${theme.blue}`;
        }
        if (selected === "PROJECT") {
            return `2px solid ${theme.green}`;
        }
        if (selected === "MENTORING") {
            return `2px solid ${theme.yellow}`;
        }
        return `2px solid ${theme.gray200}`;
    }};
`;

export default Category;