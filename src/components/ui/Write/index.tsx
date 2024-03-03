import { useState } from "react";
import { theme } from "../../../styles";
import { Row } from "../../common/Flex";
import * as S from "./style";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import Button from "../../common/Button";
import { useWritePostMutation } from "../../../services/mutation.service";
import { useLocation, useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

const WriteLayout = () => {
  const { search } = useLocation();
  const queryClient = useQueryClient();
  const [postType, setPostType] = useState(
    search.replace("?category=", "").toUpperCase()
  );
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { mutate } = useWritePostMutation();

  const handleWriteButtonClick = () => {
    mutate(
      { postType, title, content },
      {
        onSuccess: () => {
          navigate(`/`);
          window.location.reload();
          queryClient.invalidateQueries(["usePostSummary"]);
          queryClient.invalidateQueries(["usePostDetail", "suggestion"]);
          queryClient.invalidateQueries(["usePostSummary", "project"]);
          queryClient.invalidateQueries(["usePostSummary", "mentoring"]);
        },
      }
    );
  };

  return (
    <S.Container>
      <S.Title>✍️ 글 작성하기</S.Title>
      <S.Description>원하는 글을 작성해 주세요!</S.Description>
      <Row alignItems="center" gap="12px">
        <S.PostAttributeText>카테고리</S.PostAttributeText>
        <S.Category
          isClicked={postType === "SUGGESTION"}
          onClick={() => setPostType("SUGGESTION")}
          color={theme.blue.light}
          border={theme.blue.basic}
        >
          건의사항
        </S.Category>
        <S.Category
          isClicked={postType === "PROJECT"}
          onClick={() => setPostType("PROJECT")}
          color={theme.green.light}
          border={theme.green.basic}
        >
          교내 프로젝트 수요
        </S.Category>
        <S.Category
          isClicked={postType === "MENTORING"}
          onClick={() => setPostType("MENTORING")}
          color={theme.yellow.light}
          border={theme.yellow.basic}
        >
          코드리뷰/멘토링
        </S.Category>
      </Row>
      <Row alignItems="center" gap="12px">
        <S.PostAttributeText>제목</S.PostAttributeText>
        <Input
          onChange={({ target: { value } }) => setTitle(value as string)}
          value={title}
        />
      </Row>
      <Row alignItems="center" gap="12px">
        <S.PostTextAreaText>내용</S.PostTextAreaText>
        <TextArea
          onChange={({ target: { value } }) => setContent(value as string)}
          value={content}
        />
      </Row>
      <Row justifyContent="flex-end" gap="12px">
        <Button onClick={() => navigate("/")}>취소</Button>
        <Button onClick={handleWriteButtonClick}>작성</Button>
      </Row>
    </S.Container>
  );
};

export default WriteLayout;
