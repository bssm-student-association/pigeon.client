import styled from "styled-components";
import { flex, font, theme } from "../../../styles";

export const Container = styled.header`
  width: 100%;
  padding: 16px 5vw;
  ${flex.VERTICAL};
  gap: 4vw;
  border: 1px solid ${theme.gray[200]};
`;

export const Logo = styled.img`
  width: 34px;
  height: 34px;
  cursor: pointer;
`;

export const Navigation = styled.span`
  color: ${theme.gray[900]};
  ${font.H6};
  cursor: pointer;
`;

export const Login = styled.a`
  color: ${theme.gray[900]};
  ${font.H6};
  cursor: pointer;
  margin-left: auto;
`;
