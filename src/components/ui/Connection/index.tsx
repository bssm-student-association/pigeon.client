import React from "react";
import * as S from "./style";
import { Row } from "../../common/Flex";

const ConnectionLayout = () => {
  return (
    <S.Container>
      <S.Title>🧑‍🏫‍ 이런 교내 프로젝트 원해요!</S.Title>
      <S.Description>
        필요한 교내 프로젝트가 있으신가요?
        <br />
        프로젝트를 개발해 줄 학생을 찾아 보세요!
      </S.Description>
      <S.PostListItemBox>
        {Array.from({ length: 4 }).map((_, i) => (
          <S.PostListItem key={i}>
            <S.PostListItemTitle>
              반에 거울이 있으면 좋겠어요!
            </S.PostListItemTitle>
            <Row alignItems="center" gap="8px">
              <S.PostListItemAuthor>원설아님</S.PostListItemAuthor>
              <S.PostListItemCreatedAt>2024. 01. 07.</S.PostListItemCreatedAt>
            </Row>
            <S.PostListItemContent>
              반에 거울이 없어서 화장실까지 이동해야 하는 게 불편한 것 같아요.
              우리 반에도 거울이 있으면 좋겠습니다. 거울이 있으면 훨씬 편리할 것
              같아요. 간편하게 확인할 때는...
            </S.PostListItemContent>
          </S.PostListItem>
        ))}
      </S.PostListItemBox>
      <S.PagenationBox>
        <S.PagenationArrow src="/arrowLeft.svg" />
        {Array.from({ length: 4 }).map((_, i) => (
          <S.PagenationNumber key={i}>{i + 1}</S.PagenationNumber>
        ))}
        <S.PagenationArrow src="/arrow.svg" />
      </S.PagenationBox>
      <S.Separator />
      <S.Title>⚡‍ 코드리뷰/멘토링 부탁드려요!</S.Title>
      <S.Description>
        자신의 코드에서 피드백 받고 싶은 부분이 있나요?
        <br />
        혹은 경험자에게 멘토링을 받고 싶나요? 요청 글을 작성해 보세요!
      </S.Description>
      <S.PostListItemBox>
        {Array.from({ length: 4 }).map((_, i) => (
          <S.PostListItem key={i}>
            <S.PostListItemTitle>
              반에 거울이 있으면 좋겠어요!
            </S.PostListItemTitle>
            <Row alignItems="center" gap="8px">
              <S.PostListItemAuthor>원설아님</S.PostListItemAuthor>
              <S.PostListItemCreatedAt>2024. 01. 07.</S.PostListItemCreatedAt>
            </Row>
            <S.PostListItemContent>
              반에 거울이 없어서 화장실까지 이동해야 하는 게 불편한 것 같아요.
              우리 반에도 거울이 있으면 좋겠습니다. 거울이 있으면 훨씬 편리할 것
              같아요. 간편하게 확인할 때는...
            </S.PostListItemContent>
          </S.PostListItem>
        ))}
      </S.PostListItemBox>
      <S.PagenationBox>
        <S.PagenationArrow src="/arrowLeft.svg" />
        {Array.from({ length: 4 }).map((_, i) => (
          <S.PagenationNumber key={i}>{i + 1}</S.PagenationNumber>
        ))}
        <S.PagenationArrow src="/arrow.svg" />
      </S.PagenationBox>
    </S.Container>
  );
};

export default ConnectionLayout;
