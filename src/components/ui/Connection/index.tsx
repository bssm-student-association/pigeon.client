import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Row } from "../../common/Flex";
import { useNavigate } from "react-router-dom";
import { useDetailPostByPostTypeQuery } from "../../../services/query.service";
import dayjs from "dayjs";

const ConnectionLayout = () => {
  const navigate = useNavigate();
  const [project, setProject] = useState<any>([]);
  const [mentoring, setMentoring] = useState<any>([]);

  const [projectPage, setProjectPage] = useState(1);
  const [viewProjectPage, setViewProjectPage] = useState(1);

  const [mentoringPage, setMentoringPage] = useState(1);
  const [viewMentoringPage, setViewMentoringPage] = useState(1);

  const { data: projectData, isSuccess: isProjectSuccess } =
    useDetailPostByPostTypeQuery("project");
  const { data: mentoringData, isSuccess: isMentoringSuccess } =
    useDetailPostByPostTypeQuery("mentoring");

  useEffect(() => {
    if (isProjectSuccess) setProject(projectData);
    // eslint-disable-next-line
  }, [isProjectSuccess, window]);

  useEffect(() => {
    if (isMentoringSuccess) setMentoring(mentoringData);
    // eslint-disable-next-line
  }, [isMentoringSuccess, window]);

  return (
    <S.Container>
      <S.Title>🧑‍🏫‍ 이런 교내 프로젝트 원해요!</S.Title>
      <S.Description>
        필요한 교내 프로젝트가 있으신가요?
        <br />
        프로젝트를 개발해 줄 학생을 찾아 보세요!
      </S.Description>
      <S.PostListItemBox>
        {project
          .slice(projectPage * 4 - 4, projectPage * 4)
          .map((item: any) => (
            <S.PostListItem
              onClick={() => navigate(`/post/${item.id}`)}
              key={item.id}
            >
              <S.PostListItemTitle>{item.title}</S.PostListItemTitle>
              <Row alignItems="center" gap="8px">
                <S.PostListItemAuthor>
                  {" "}
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
      <S.PagenationBox>
        <S.PagenationArrow
          onClick={() =>
            setViewProjectPage(viewProjectPage <= 5 ? 1 : viewProjectPage - 5)
          }
          src="/arrowLeft.svg"
        />
        {Array.from({ length: 5 }).map((_, i) => (
          <S.PagenationNumber
            isSelected={projectPage === viewProjectPage + i}
            onClick={() => setProjectPage(viewProjectPage + i)}
            key={i}
          >
            {viewProjectPage + i}
          </S.PagenationNumber>
        ))}
        <S.PagenationArrow
          onClick={() => setViewProjectPage(viewProjectPage + 5)}
          src="/arrow.svg"
        />
      </S.PagenationBox>
      <S.Separator />
      <S.Title>⚡‍ 코드리뷰/멘토링 부탁드려요!</S.Title>
      <S.Description>
        자신의 코드에서 피드백 받고 싶은 부분이 있나요?
        <br />
        혹은 경험자에게 멘토링을 받고 싶나요? 요청 글을 작성해 보세요!
      </S.Description>
      <S.PostListItemBox>
        {mentoring
          .slice(mentoringPage * 4 - 4, mentoringPage * 4)
          .map((item: any) => (
            <S.PostListItem
              onClick={() => navigate(`/post/${item.id}`)}
              key={item.id}
            >
              <S.PostListItemTitle>{item.title}</S.PostListItemTitle>
              <Row alignItems="center" gap="8px">
                <S.PostListItemAuthor>
                  {" "}
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
      <S.PagenationBox>
        <S.PagenationArrow
          onClick={() =>
            setViewMentoringPage(
              viewMentoringPage <= 5 ? 1 : viewMentoringPage - 5
            )
          }
          src="/arrowLeft.svg"
        />
        {Array.from({ length: 5 }).map((_, i) => (
          <S.PagenationNumber
            isSelected={mentoringPage === viewMentoringPage + i}
            onClick={() => setMentoringPage(viewMentoringPage + i)}
            key={i}
          >
            {viewMentoringPage + i}
          </S.PagenationNumber>
        ))}
        <S.PagenationArrow
          onClick={() => setViewMentoringPage(viewMentoringPage + 5)}
          src="/arrow.svg"
        />
      </S.PagenationBox>
    </S.Container>
  );
};

export default ConnectionLayout;
