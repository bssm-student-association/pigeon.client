import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Row } from "../../common/Flex";
import { useDetailPostByPostTypeQuery } from "../../../services/query.service";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const SuggestionLayout = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [viewPage, setViewPage] = useState(1);
  const { data, isSuccess } = useDetailPostByPostTypeQuery("suggestion");

  useEffect(() => {
    if (isSuccess) setPost(data);
    // eslint-disable-next-line
  }, [isSuccess, window]);

  return (
    <S.Container>
      <S.Title>💁‍ 우리 학교에 건의해요!</S.Title>
      <S.Description>
        여러분의 더 나은 학교 생활을 위한 건의함이랍니다!
        <br />
        여러분의 의견을 들려주세요.
      </S.Description>
      <S.PostListItemBox>
        {post.slice(page * 4 - 4, page * 4).map((item: any) => (
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
      <S.PagenationBox>
        <S.PagenationArrow
          onClick={() => setViewPage(viewPage <= 5 ? 1 : viewPage - 5)}
          src="/arrowLeft.svg"
        />
        {Array.from({ length: 5 }).map((_, i) => (
          <S.PagenationNumber
            isSelected={page === viewPage + i}
            onClick={() => setPage(viewPage + i)}
            key={i}
          >
            {viewPage + i}
          </S.PagenationNumber>
        ))}
        <S.PagenationArrow
          onClick={() => setViewPage(viewPage + 5)}
          src="/arrow.svg"
        />
      </S.PagenationBox>
    </S.Container>
  );
};

export default SuggestionLayout;
