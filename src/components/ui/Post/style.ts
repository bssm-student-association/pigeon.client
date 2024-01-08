import styled from "styled-components";
import { flex, font, theme } from "../../../styles";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  ${flex.COLUMN_FLEX};
  gap: 30px;
  padding: 0 8vw;
`;

export const PostHeader = styled.div`
  ${flex.COLUMN_FLEX};
  gap: 12px;
`;

export const PostTitle = styled.h1`
  ${font.H2};
`;

export const PostAuthor = styled.span`
  ${font.p1};
`;

export const PostCreatedAt = styled.span`
  ${font.p1};
  color: ${theme.gray[600]};
`;

export const SeparatorLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme.gray[200]};
`;

export const PostType = styled.div<{ color: string }>`
  ${font.p1};
  font-weight: 500;
  color: ${({ color }) => color};
`;

export const PostContent = styled.p`
  ${font.p1};
`;

export const AnswerBox = styled.div`
  width: 100%;
  padding: 6vh 0;
  ${flex.COLUMN_FLEX};
  gap: 12px;
  border-top: 1px solid ${theme.gray[200]};
  border-bottom: 1px solid ${theme.gray[200]};
`;

export const AnswerTitle = styled.h2`
  ${font.H3};
`;

export const AnswerContent = styled.p`
  ${font.p1};
`;

export const CommentBox = styled.div`
  width: 100%;
  padding: 6vh 0;
  ${flex.COLUMN_FLEX};
  gap: 12px;
`;

export const CommentTitle = styled.h2`
  ${font.H3};
`;

export const CommentTextArea = styled.textarea`
  ${font.p1};
  width: 100%;
  height: 82px;
  resize: none;
  border-radius: 10px;
  border: 1px solid ${theme.gray[200]};
`;

export const CommentWriteButton = styled.button`
  border: none;
  width: fit-content;
  padding: 16px 24px;
  background-color: ${theme.gray[100]};
  ${font.btn1};
  border-radius: 20px;
  cursor: pointer;
  margin-left: auto;
`;

export const CommentListBox = styled.div`
  width: 100%;
  ${flex.COLUMN_FLEX};
  gap: 12px;
`;

export const CommentListItem = styled.div`
  width: 100%;
  padding: 2.5vh;
  border-bottom: 1px solid ${theme.gray[200]};
  ${flex.COLUMN_FLEX};
  gap: 8px;
`;

export const CommentAuthor = styled.span`
  ${font.p1};
`;

export const CommentCreatedAt = styled.span`
  ${font.p1};
  color: ${theme.gray[600]};
`;

export const CommentContent = styled.p`
  ${font.p1};
`;
