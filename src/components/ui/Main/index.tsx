import React, { useEffect, useState } from "react";
import * as S from "./style";
import { theme } from "../../../styles";
import { useModal } from "../../../@modal/hooks";
import NoticeModal from "../../../@modal/layouts/NoticeModal";
import { Row } from "../../common/Flex";
import { useSummaryPostQuery } from "../../../services/query.service";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const MainLayout = () => {
  const { openModal } = useModal();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>({
    suggestion: [],
    project: [],
    mentoring: [],
  });

  const { data, isSuccess } = useSummaryPostQuery();

  useEffect(() => {
    if (isSuccess) setPost(data);
    // eslint-disable-next-line
  }, [isSuccess, window]);

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
        <S.WriteBox
          onClick={() => navigate("/post/write?category=suggestion")}
          color={theme.blue.light}
        >
          <S.WriteTextBox>
            <S.WriteTitle>건의사항 작성</S.WriteTitle>
            <S.WritePostType color={theme.blue.basic}>
              학교 · 학생회
            </S.WritePostType>
          </S.WriteTextBox>
          <S.WriteMainLogo src="/suggestion.png" />
        </S.WriteBox>
        <S.WriteBox
          onClick={() => navigate("/post/write?category=project")}
          color={theme.green.light}
        >
          <S.WriteTextBox>
            <S.WriteTitle>
              교내 프로젝트 <br />
              수요 글 작성
            </S.WriteTitle>
            <S.WritePostType color={theme.green.basic}>선생님</S.WritePostType>
          </S.WriteTextBox>
          <S.WriteMainLogo src="/project.png" />
        </S.WriteBox>
        <S.WriteBox
          onClick={() => navigate("/post/write?category=mentoring")}
          color={theme.yellow.light}
        >
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
          {post.suggestion.map((item: any) => (
            <S.PostListItem
              onClick={() => navigate(`/post/${item.id}`)}
              key={item.id}
            >
              <S.PostListItemTitle>{item.title}</S.PostListItemTitle>
              <Row alignItems="center" gap="8px">
                <S.PostListItemAuthor>
                  {item.author.grade}
                  {item.author.class_number}
                  {`${item.author.student_number}`.padStart(2, "0")}{" "}
                  {item.author.name}
                </S.PostListItemAuthor>
                <S.PostListItemCreatedAt>
                  {dayjs(item.createdAt).format("YYYY.MM.DD.")}
                </S.PostListItemCreatedAt>
              </Row>
              <S.PostListItemContent>
                {item.content.length > 90
                  ? item.content.slice(0, 90)
                  : item.content}
              </S.PostListItemContent>
            </S.PostListItem>
          ))}
        </S.PostListItemBox>
      </S.PostListBox>
      {/*  */}
      <S.PostListBox>
        <S.PostListHeader>
          <S.PostListTitle>🧑‍🏫‍ 이런 교내 프로젝트 원해요!</S.PostListTitle>
          <S.PostListMoreViewButton to="/post/connection">
            더 보기
            <img src="/arrow.svg" alt="더보기" />
          </S.PostListMoreViewButton>
        </S.PostListHeader>
        <S.PostListItemBox>
          {post.project.map((item: any) => (
            <S.PostListItem
              onClick={() => navigate(`/post/${item.id}`)}
              key={item.id}
            >
              <S.PostListItemTitle>{item.title}</S.PostListItemTitle>
              <Row alignItems="center" gap="8px">
                <S.PostListItemAuthor>
                  {item.author.grade}
                  {item.author.class_number}
                  {`${item.author.student_number}`.padStart(2, "0")}{" "}
                  {item.author.name}
                </S.PostListItemAuthor>
                <S.PostListItemCreatedAt>
                  {dayjs(item.createdAt).format("YYYY.MM.DD.")}
                </S.PostListItemCreatedAt>
              </Row>
              <S.PostListItemContent>
                {item.content.length > 90
                  ? item.content.slice(0, 90)
                  : item.content}
              </S.PostListItemContent>
            </S.PostListItem>
          ))}
        </S.PostListItemBox>
      </S.PostListBox>
      {/*  */}
      <S.PostListBox>
        <S.PostListHeader>
          <S.PostListTitle>⚡‍ 코드리뷰/멘토링 부탁드려요!</S.PostListTitle>
          <S.PostListMoreViewButton to="/post/connection">
            더 보기
            <img src="/arrow.svg" alt="더보기" />
          </S.PostListMoreViewButton>
        </S.PostListHeader>
        <S.PostListItemBox>
          {post.mentoring.map((item: any) => (
            <S.PostListItem
              onClick={() => navigate(`/post/${item.id}`)}
              key={item.id}
            >
              <S.PostListItemTitle>{item.title}</S.PostListItemTitle>
              <Row alignItems="center" gap="8px">
                <S.PostListItemAuthor>
                  {item.author.grade}
                  {item.author.class_number}
                  {`${item.author.student_number}`.padStart(2, "0")}{" "}
                  {item.author.name}
                </S.PostListItemAuthor>
                <S.PostListItemCreatedAt>
                  {dayjs(item.createdAt).format("YYYY.MM.DD.")}
                </S.PostListItemCreatedAt>
              </Row>
              <S.PostListItemContent>
                {item.content.length > 90
                  ? item.content.slice(0, 90)
                  : item.content}
              </S.PostListItemContent>
            </S.PostListItem>
          ))}
        </S.PostListItemBox>
      </S.PostListBox>
    </S.Container>
  );
};

export default MainLayout;
