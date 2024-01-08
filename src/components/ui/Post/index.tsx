import React from "react";
import * as S from "./style";
import { useParams } from "react-router-dom";
import { Row } from "../../common/Flex";
import { theme } from "../../../styles";

const PostLayout = () => {
  const { id } = useParams();

  return (
    <S.Container>
      <S.PostHeader>
        <S.PostTitle>반에 거울이 있으면 좋겠어요!</S.PostTitle>
        <Row alignItems="center" gap="6px">
          <S.PostAuthor>2111 원설아</S.PostAuthor>
          <S.PostCreatedAt>2024. 01. 08.</S.PostCreatedAt>
        </Row>
        <S.SeparatorLine />
      </S.PostHeader>
      <S.PostType color={theme.blue.basic}>건의사항</S.PostType>
      <S.PostContent>
        반에 거울이 없어서 화장실까지 이동해야 하는 게 불편한 것 같아요. 우리
        반에도 거울이 있으면 좋겠습니다. 거울이 있으면 훨씬 편리할 것 같아요.
        간편하게 확인할 때는 머리 상태나 그런 간단한 것들을 확인하는데,
        화장실까지 가는 건 조금 먼 것 같아요.
      </S.PostContent>
      <S.AnswerBox>
        <S.AnswerTitle>답변</S.AnswerTitle>
        <S.AnswerContent>
          답변이 없어요. 건의사항을 검토하고 있나 봐요!
        </S.AnswerContent>
      </S.AnswerBox>
      <S.CommentBox>
        <S.CommentTitle>댓글</S.CommentTitle>
        <S.CommentTextArea />
        <S.CommentWriteButton>작성</S.CommentWriteButton>
      </S.CommentBox>
      <S.CommentListBox>
        {Array.from({ length: 6 }).map((_, i) => (
          <S.CommentListItem key={i}>
            <Row alignItems="center" gap="6px">
              <S.CommentAuthor>2111 원설아</S.CommentAuthor>
              <S.CommentCreatedAt>2024. 01. 08.</S.CommentCreatedAt>
            </Row>
            <S.CommentContent>
              저 개발 하고 싶습니다! 오늘 6교시 쉬는 시간에 뵈러 가도 될까요?
            </S.CommentContent>
          </S.CommentListItem>
        ))}
      </S.CommentListBox>
    </S.Container>
  );
};

export default PostLayout;
