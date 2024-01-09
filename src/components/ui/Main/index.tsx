import React from "react";
import * as S from "./style";
import { theme } from "../../../styles";
import { useModal } from "../../../@modal/hooks";
import NoticeModal from "../../../@modal/layouts/NoticeModal";
import { Row } from "../../common/Flex";

const MainLayout = () => {
  const { openModal } = useModal();

  const handleNoticeModalOpenClick = () => {
    openModal({
      component: <NoticeModal />,
    });
  };

  return (
    <S.Container>
      <S.Title>BSSM 작은 비둘기 🕊️</S.Title>
      <S.Description>
        부산소프트웨어마이스터고의 소통의 창구! <br />
        비둘기를 통해 원하는 글을 전달해 봐요.
      </S.Description>
      <S.WriteButtonBox>
        <S.WriteBox color={theme.blue.light}>
          <S.WriteTextBox>
            <S.WriteTitle>건의사항 작성</S.WriteTitle>
            <S.WritePostType color={theme.blue.basic}>
              학교 · 학생회
            </S.WritePostType>
          </S.WriteTextBox>
          <S.WriteMainLogo src="/suggestion.png" />
        </S.WriteBox>
        <S.WriteBox color={theme.green.light}>
          <S.WriteTextBox>
            <S.WriteTitle>
              교내 프로젝트 <br />
              수요 글 작성
            </S.WriteTitle>
            <S.WritePostType color={theme.green.basic}>선생님</S.WritePostType>
          </S.WriteTextBox>
          <S.WriteMainLogo src="/project.png" />
        </S.WriteBox>
        <S.WriteBox color={theme.yellow.light}>
          <S.WriteTextBox>
            <S.WriteTitle>
              코드리뷰/멘토링
              <br />
              요청 글 작성
            </S.WriteTitle>
            <S.WritePostType color={theme.yellow.basic}>선배님</S.WritePostType>
          </S.WriteTextBox>
          <S.WriteMainLogo src="/mentoring.png" />
        </S.WriteBox>
      </S.WriteButtonBox>
      <S.WarningButton onClick={handleNoticeModalOpenClick}>
        <S.WarningLogo src="/warning.png" />
        건의사항 작성 시 주의 사항 읽기
      </S.WarningButton>
      <S.Separator />
      {/*  */}
      <S.PostListBox>
        <S.PostListHeader>
          <S.PostListTitle>💁‍ 우리 학교에 건의해요!</S.PostListTitle>
          <S.PostListMoreViewButton to="/post/suggestion">
            더 보기
            <img src="/arrow.svg" alt="더보기" />
          </S.PostListMoreViewButton>
        </S.PostListHeader>
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
                우리 반에도 거울이 있으면 좋겠습니다. 거울이 있으면 훨씬 편리할
                것 같아요. 간편하게 확인할 때는...
              </S.PostListItemContent>
            </S.PostListItem>
          ))}
        </S.PostListItemBox>
      </S.PostListBox>
      {/*  */}
      <S.PostListBox>
        <S.PostListHeader>
          <S.PostListTitle>🧑‍🏫‍ 이런 교내 프로젝트 원해요!</S.PostListTitle>
          <S.PostListMoreViewButton to="/post/suggestion">
            더 보기
            <img src="/arrow.svg" alt="더보기" />
          </S.PostListMoreViewButton>
        </S.PostListHeader>
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
                우리 반에도 거울이 있으면 좋겠습니다. 거울이 있으면 훨씬 편리할
                것 같아요. 간편하게 확인할 때는...
              </S.PostListItemContent>
            </S.PostListItem>
          ))}
        </S.PostListItemBox>
      </S.PostListBox>
      {/*  */}
      <S.PostListBox>
        <S.PostListHeader>
          <S.PostListTitle>⚡‍ 코드리뷰/멘토링 부탁드려요!</S.PostListTitle>
          <S.PostListMoreViewButton to="/post/suggestion">
            더 보기
            <img src="/arrow.svg" alt="더보기" />
          </S.PostListMoreViewButton>
        </S.PostListHeader>
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
                우리 반에도 거울이 있으면 좋겠습니다. 거울이 있으면 훨씬 편리할
                것 같아요. 간편하게 확인할 때는...
              </S.PostListItemContent>
            </S.PostListItem>
          ))}
        </S.PostListItemBox>
      </S.PostListBox>
    </S.Container>
  );
};

export default MainLayout;
