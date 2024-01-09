import styled from "styled-components";
import { flex, font, theme } from "../../styles";
import { useModal } from "../hooks";

const RemoveConfirmModal = ({
  trigger,
  type,
}: {
  trigger: any;
  type: string;
}) => {
  const { closeModal } = useModal();

  return (
    <Container>
      <Title>{type} 삭제</Title>
      <Description>
        {type}을 삭제하시겠습니까?
        <br />
        삭제된 {type}은 복구가 불가능해요.
      </Description>
      <ButtonBox>
        <Button onClick={closeModal}>취소</Button>
        <Button onClick={trigger}>삭제</Button>
      </ButtonBox>
    </Container>
  );
};

const Container = styled.div`
  width: 30vw;
  height: 22vw;
  border-radius: 20px;
  padding: 4vw 5vw;
  background-color: ${theme.white};
  ${flex.COLUMN_FLEX};
  gap: 20px;
`;

const Title = styled.h1`
  ${font.H2};
`;

const Description = styled.span`
  ${font.p1};
`;

const ButtonBox = styled.div`
  ${flex.FLEX};
  gap: 14px;
  margin-top: auto;
  margin-left: auto;
`;

const Button = styled.button`
  border: none;
  width: fit-content;
  padding: 16px 24px;
  background-color: ${theme.gray[100]};
  ${font.btn1};
  border-radius: 20px;
  cursor: pointer;
`;

export default RemoveConfirmModal;
