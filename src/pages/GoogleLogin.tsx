import React from "react";
import styled from "styled-components";
import { flex, font } from "../styles";
import { TOKEN } from "../constants/token.constant";
import { useOAuth } from "../hooks/useOAuth";
import { useNavigate } from "react-router-dom";
import { instance } from "../apis/instance";

const GoogleLogin = () => {
  const { code } = useOAuth();
  const navigate = useNavigate();

  if (code) {
    (async () => {
      const { data } = await instance.post("/auth/login/google", null, {
        params: { code },
      });

      localStorage.setItem(TOKEN.ACCESS, data.accessToken);
      localStorage.setItem(TOKEN.REFRESH, data.refreshToken);
      navigate("/");
    })();
  }
  return (
    <Container>
      <Logo src="/logo.png" />
      <Title>잠시만 기다려주세요...</Title>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 80vh;
  ${flex.COLUMN_CENTER};
  padding-bottom: 20vh;
`;

const Logo = styled.img`
  height: 20vh;
`;

const Title = styled.span`
  ${font.H3};
`;

export default GoogleLogin;
