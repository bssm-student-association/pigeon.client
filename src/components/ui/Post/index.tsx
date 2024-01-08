import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useParams } from "react-router-dom";
import { Row } from "../../common/Flex";
import { useDetailPostInfoQuery } from "../../../services/query.service";
import dayjs from "dayjs";
import { getColor } from "../../../helpers/getColor";
import { getPostType } from "../../../helpers/getPostType";

const PostLayout = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>({});
  const { data, isSuccess } = useDetailPostInfoQuery(+(id || 1));

  useEffect(() => {
    if (isSuccess) setPost(data);
    // eslint-disable-next-line
  }, [isSuccess, window]);

  return (
    <S.Container>
      <S.PostHeader>
        <S.PostTitle>{post.title}</S.PostTitle>
        <Row alignItems="center" gap="6px">
          <S.PostAuthor>
            {post.author?.grade}
            {post.author?.class_number}
            {`${post.author?.student_number}`.padStart(2, "0")}{" "}
            {post.author?.name}
          </S.PostAuthor>
          <S.PostCreatedAt>
            {dayjs(post.createdAt).format("YYYY.MM.DD.")}
          </S.PostCreatedAt>
        </Row>
        <S.SeparatorLine />
      </S.PostHeader>
      <S.PostType color={getColor(post.postType)}>
        {getPostType(post.postType)}
      </S.PostType>
      <S.PostContent>{post.content}</S.PostContent>
      <S.AnswerBox>
        <S.AnswerTitle>답변</S.AnswerTitle>
        <S.AnswerContent>
          {!post.answers.length
            ? "답변이 없어요. 건의사항을 검토하고 있나 봐요!"
            : post.answers[0].content}
        </S.AnswerContent>
      </S.AnswerBox>
      <S.CommentBox>
        <S.CommentTitle>댓글</S.CommentTitle>
        <S.CommentTextArea />
        <S.CommentWriteButton>작성</S.CommentWriteButton>
      </S.CommentBox>
      <S.CommentListBox>
        {post.comments.map((item: any) => (
          <S.CommentListItem key={item.id}>
            <Row alignItems="center" gap="6px">
              <S.CommentAuthor>
                {" "}
                {item.author.grade}
                {item.author.class_number}
                {`${item.author.student_number}`.padStart(2, "0")}{" "}
                {item.author.name}
              </S.CommentAuthor>
              <S.CommentCreatedAt>
                {dayjs(item.createdAt).format("YYYY.MM.DD.")}
              </S.CommentCreatedAt>
            </Row>
            <S.CommentContent>{item.content}</S.CommentContent>
          </S.CommentListItem>
        ))}
      </S.CommentListBox>
    </S.Container>
  );
};

export default PostLayout;
