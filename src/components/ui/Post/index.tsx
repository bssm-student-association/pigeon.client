import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useParams } from "react-router-dom";
import { Column, Row } from "../../common/Flex";
import { useDetailPostInfoQuery } from "../../../services/query.service";
import dayjs from "dayjs";
import { getColor } from "../../../helpers/getColor";
import { getPostType } from "../../../helpers/getPostType";
import {
  useRemoveAnswerMutation,
  useRemoveCommentMutation,
  useWriteAnswerMutation,
  useWriteCommentMutation,
} from "../../../services/mutation.service";
import { useUser } from "../../../@user/hooks";

const PostLayout = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>({
    answers: [],
    comments: [],
  });
  const [content, setContent] = useState("");
  const [answer, setAnswer] = useState("");
  const { isSameUser, isAdmin } = useUser();
  const { data, isSuccess, refetch } = useDetailPostInfoQuery(+(id || 1));
  const { mutate: writeComment } = useWriteCommentMutation();
  const { mutate: deleteComment } = useRemoveCommentMutation();
  const { mutate: writeAnswer } = useWriteAnswerMutation();
  const { mutate: deleteAnswer } = useRemoveAnswerMutation();

  const handleWriteAnswerClick = () => {
    writeAnswer(
      { content: answer, postId: +(id || 1) },
      { onSuccess: () => refetch() }
    );
    setAnswer("");
  };

  const handleDeleteAnswerClick = (answerId: number) => {
    deleteAnswer(answerId, { onSuccess: () => refetch() });
  };

  const handleWriteCommentClick = () => {
    writeComment(
      { content, postId: +(id || 1) },
      { onSuccess: () => refetch() }
    );
    setContent("");
  };

  const handleDeleteCommentClick = (commentId: number) => {
    deleteComment(commentId, { onSuccess: () => refetch() });
  };

  useEffect(() => {
    if (isSuccess) setPost(data);
    // eslint-disable-next-line
  }, [isSuccess, window, data]);

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
        <Row>
          <S.AnswerContent>
            {!post.answers.length ? (
              isAdmin ? (
                <Column width="100%" gap="12px">
                  <S.CommentTextArea
                    value={answer}
                    onChange={({ target: { value } }) => setAnswer(value)}
                  />
                  <S.CommentWriteButton onClick={handleWriteAnswerClick}>
                    작성
                  </S.CommentWriteButton>
                </Column>
              ) : (
                "답변이 없어요. 건의사항을 검토하고 있나 봐요!"
              )
            ) : (
              post.answers[0].content
            )}
          </S.AnswerContent>
          {isSameUser(post.answers[0]?.author?.id) && (
            <S.Remove
              onClick={() => handleDeleteAnswerClick(post.answers[0].id)}
              src="/delete.svg"
            />
          )}
        </Row>
      </S.AnswerBox>
      <S.CommentBox>
        <S.CommentTitle>댓글</S.CommentTitle>
        <S.CommentTextArea
          value={content}
          onChange={({ target: { value } }) => setContent(value)}
        />
        <S.CommentWriteButton onClick={handleWriteCommentClick}>
          작성
        </S.CommentWriteButton>
      </S.CommentBox>
      <S.CommentListBox>
        {post.comments.map((item: any) => (
          <S.CommentListItem key={item.id}>
            <Column gap="8px">
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
            </Column>
            {isSameUser(item.author.id) && (
              <S.Remove
                onClick={() => handleDeleteCommentClick(item.id)}
                src="/delete.svg"
              />
            )}
          </S.CommentListItem>
        ))}
      </S.CommentListBox>
    </S.Container>
  );
};

export default PostLayout;
