import React from "react";
import styled from "styled-components";
import { flex, font, theme } from "../../styles";

const LoginModal = () => {
  return (
    <Container>
      <Logo src="/logo.png" />
      <Title>로그인</Title>
      <Description>
        원활한 이용을 위해서는
        <br />
        로그인이 필요해요.
      </Description>
      <LoginBox>
        <LoginButton href={process.env.REACT_APP_BSM_REDIRECT_URL}>
          BSM으로 로그인
        </LoginButton>
        {/* <TeacherLoginText> */}
        {/* 선생님이신가요?{" "} */}
        {/* <a href={pro/>cess.env.REACT_APP_GOOGLE_REDIRECT_URL}> */}
        {/* Google로 로그인하기 */}
        {/* </a> */}
        {/* </TeacherLoginText> */}
      </LoginBox>
    </Container>
  );
};

const Container = styled.div`
  width: 26vw;
  height: 60vh;
  border-radius: 20px;
  background-color: ${theme.white};
  padding: 3vw 4vw;
  ${flex.COLUMN_FLEX}
  gap: 10px;
`;

const Logo = styled.img`
  width: 86px;
  height: 86px;
`;

const Title = styled.span`
  ${font.H3};
`;

const Description = styled.p`
  ${font.p1};
`;

const LoginBox = styled.div`
  width: 100%;
  height: 100%;
  ${flex.COLUMN_CENTER};
  gap: 16px;
`;

const LoginButton = styled.a`
  border: none;
  padding: 16px 24px;
  background-color: ${theme.gray[100]};
  ${font.btn1};
  border-radius: 20px;
  cursor: pointer;
`;

const TeacherLoginText = styled.span`
  ${font.p3};
  a {
    ${font.p3};
    color: ${theme.blue.basic};
    cursor: pointer;
  }
`;

export default LoginModal;
