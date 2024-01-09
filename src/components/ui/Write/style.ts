import styled from "styled-components";
import { flex, font, theme } from "../../../styles";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  ${flex.COLUMN_FLEX};
  gap: 30px;
  padding: 0 8vw;
`;

export const Title = styled.h1`
  ${font.H2};
`;

export const Description = styled.p`
  ${font.p1};
`;

export const PostAttributeText = styled.span`
  ${font.p1};
  width: 7vw;
`;

export const PostTextAreaText = styled(PostAttributeText)`
  margin-bottom: auto;
`;

export const Category = styled.button<{
  isClicked?: boolean;
  color?: string;
  border?: string;
}>`
  padding: 14px 18px;
  border-radius: 20px;
  background-color: ${({ color, isClicked }) =>
    isClicked ? color : theme.gray[50]};
  border: 1px solid
    ${({ border, isClicked }) => (isClicked ? border : theme.gray[200])};
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
`;
