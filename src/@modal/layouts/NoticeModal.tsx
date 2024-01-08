import React from "react";
import styled from "styled-components";
import { flex, font, theme } from "../../styles";
import { useModal } from "../hooks";

const NoticeModal = () => {
  const { closeModal } = useModal();
  return (
    <Container>
      <TitleBox>
        <Logo src="/suggestion.png" />
        <TitleText>
          꼭 확인해 주세요!
          <br />
          건의사항 작성 시 주의 사항
        </TitleText>
      </TitleBox>
      <Description>
        다음과 같은 주의 사항을 확인하고 이용해 주세요.
        <br />
        <br />
        1. 건의사항들은 한 달에 한 번, 학생회장단과 교사 회의를 거쳐 검토 결과를
        전달합니다.
        <br />
        <br />
        2. 건의사항은 교칙을 고려해 작성해 주세요.
        <br />
        <br />
        3. 욕설 및 비방, 유머 목적의 글은 자제해 주세요.
        <br />
        경과에 따라 작성자에게 벌점 및 징계가 부과될
        <br />수 있습니다.
      </Description>
      <CheckButton onClick={closeModal}>확인</CheckButton>
    </Container>
  );
};

const Container = styled.div`
  width: 32vw;
  height: 76vh;
  border-radius: 20px;
  background-color: ${theme.white};
  padding: 3vw;
  ${flex.COLUMN_BETWEEN};
  gap: 2vw;
`;

const TitleBox = styled.div`
  ${flex.CENTER};
  gap: 12px;
  width: 100%;
`;

const Logo = styled.img`
  width: fit-content;
  height: 82px;
`;

const TitleText = styled.h1`
  ${font.H3};
`;

const Description = styled.p`
  ${font.p1};
  text-align: center;
`;

const CheckButton = styled.button`
  border: none;
  padding: 16px 24px;
  background-color: ${theme.gray[100]};
  ${font.btn1};
  border-radius: 20px;
  cursor: pointer;
`;

export default NoticeModal;
