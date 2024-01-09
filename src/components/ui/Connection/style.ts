import styled from "styled-components";
import { flex, font, theme } from "../../../styles";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  ${flex.COLUMN_FLEX};
  gap: 30px;
`;

export const Title = styled.h1`
  ${font.H2};
`;

export const Description = styled.p`
  ${font.p1};
`;

export const PostListItemBox = styled.div`
  width: 100%;
  ${flex.BETWEEN};
  flex-wrap: wrap;
  gap: 20px;
`;

export const PostListItem = styled.div`
  width: 49.2%;
  cursor: pointer;
  ${flex.COLUMN_FLEX};
  padding: 2.5vw;
  gap: 8px;
  background-color: ${theme.gray[50]};
  border-radius: 20px;
`;

export const PostListItemTitle = styled.h3`
  ${font.H3};
`;

export const PostListItemAuthor = styled.span`
  ${font.p1};
`;

export const PostListItemCreatedAt = styled.span`
  ${font.p1};
  color: ${theme.gray[600]};
`;

export const PostListItemContent = styled.p`
  ${font.p1};
  color: ${theme.gray[600]};
`;

export const PagenationBox = styled.div`
  ${flex.CENTER};
  gap: 6px;
  width: 100%;
`;

export const PagenationArrow = styled.img`
  ${flex.VERTICAL};
  margin: 0 14px;
  height: 12px;
  cursor: pointer;
`;

export const PagenationNumber = styled.div<{ isSelected?: boolean }>`
  ${font.p2};
  ${flex.CENTER};
  width: 24px;
  height: 24px;
  border-radius: 999px;
  background-color: ${({ isSelected }) =>
    isSelected ? theme.gray[100] : theme.white};
  cursor: pointer;
`;

export const Separator = styled.div`
  padding: 12vh 0;
`;
