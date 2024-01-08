import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../../@modal/hooks";
import LoginModal from "../../../@modal/layouts/LoginModal";

const Header = () => {
  const navigate = useNavigate();
  const { openModal } = useModal();

  const handleOpenLoginModal = () => {
    openModal({
      component: <LoginModal />,
    });
  };

  return (
    <S.Container>
      <S.Logo onClick={() => navigate("/")} src="/logo.png" alt="로고" />
      <S.Navigation onClick={() => navigate("/post/suggestion")}>
        건의사항
      </S.Navigation>
      <S.Navigation onClick={() => navigate("/post/connection")}>
        수요 · 요청글
      </S.Navigation>
      <S.Login onClick={handleOpenLoginModal}>로그인</S.Login>
    </S.Container>
  );
};

export default Header;
