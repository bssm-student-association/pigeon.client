import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../../@modal/hooks";
import LoginModal from "../../../@modal/layouts/LoginModal";
import { useUser } from "../../../@user/hooks";

const Header = () => {
  const navigate = useNavigate();
  const { openModal } = useModal();
  const { user, isLoggedIn } = useUser();

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
      {!isLoggedIn ? (
        <S.Login onClick={handleOpenLoginModal}>로그인</S.Login>
      ) : (
        <S.Login>
          {user.grade}
          {user.class_number}
          {`${user.student_number}`.padStart(2, "0")} {user.name}
        </S.Login>
      )}
    </S.Container>
  );
};

export default Header;
