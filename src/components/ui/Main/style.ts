import styled from "styled-components";
import { flex, font, theme } from "../../../styles";
import { Link } from "react-router-dom";

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

export const WriteButtonBox = styled.div`
  ${flex.BETWEEN};
  width: 100%;
  gap: 40px;
`;

export const WriteBox = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  ${flex.BETWEEN};
  padding: 3vw;
  width: 100%;
  height: 32vh;
  border-radius: 20px;
  cursor: pointer;
`;

export const WriteTextBox = styled.div`
  ${flex.COLUMN_FLEX};
  margin-bottom: auto;
  gap: 8px;
`;

export const WriteTitle = styled.span`
  ${font.H3};
`;

export const WritePostType = styled.span<{ color: string }>`
  ${font.p1};
  color: ${({ color }) => color};
`;

export const WriteMainLogo = styled.img`
  width: fit-content;
  height: 6vw;
  margin-top: auto;
`;

export const WarningButton = styled.button`
  border: none;
  width: 100%;
  height: 76px;
  background-color: ${theme.gray[50]};
  ${flex.VERTICAL};
  padding: 0 3vw;
  ${font.H3};
  gap: 1.5vw;
`;

export const WarningLogo = styled.img`
  width: fit-content;
  height: 28px;
`;

export const Separator = styled.div`
  margin: 8vh 0;
`;

export const PostListBox = styled.main`
  width: 100%;
  ${flex.COLUMN_CENTER};
  gap: 32px;
  margin-bottom: 26vh;
`;

export const PostListHeader = styled.hgroup`
  width: 100%;
  ${flex.BETWEEN};
`;

export const PostListTitle = styled.h2`
  ${font.H2};
`;

export const PostListMoreViewButton = styled(Link)`
  ${font.btn1};
  ${flex.VERTICAL};
  gap: 4px;
`;

export const PostListItemBox = styled.div`
  width: 100%;
  ${flex.BETWEEN};
  flex-wrap: wrap;
  gap: 20px;
`;

export const PostListItem = styled.div`
  width: 49.2%;
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
