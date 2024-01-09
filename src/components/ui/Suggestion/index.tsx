import React from "react";
import * as S from "./style";
import { Row } from "../../common/Flex";

const SuggestionLayout = () => {
  return (
    <S.Container>
      <S.Title>💁‍ 우리 학교에 건의해요!</S.Title>
      <S.Description>
        여러분의 더 나은 학교 생활을 위한 건의함이랍니다!
        <br />
        여러분의 의견을 들려주세요.
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

export default SuggestionLayout;
