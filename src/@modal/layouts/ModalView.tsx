import styled, { css } from "styled-components";
import { ModalState } from "../types";
import { flex } from "../../styles";

interface ModalViewProps extends ModalState {
  onClose?: () => void;
}

const ModalView = ({ component, visible, onClose }: ModalViewProps) => {
  return (
    <Container>
      <Background hidden={!visible} onClick={onClose} />
      <ModalContainer>{component}</ModalContainer>
    </Container>
  );
};

const Container = styled.div``;

const Background = styled.div<{ hidden: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(1.5px);
  background-color: rgba(0, 0, 0, 0.05);
  z-index: 10;
  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

const ModalContainer = styled.div`
  ${flex.COLUMN_CENTER};
  position: fixed;
  top: 50%;
  left: 50%;
  width: fit-content;
  height: fit-content;
  z-index: 20;
  transform: translate(-50%, -50%);

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export default ModalView;
