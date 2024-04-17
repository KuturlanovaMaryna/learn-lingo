import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';

export const StyledModal = styled.div`
  z-index: 1600;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 20, 23, 0.5);
  &:hover {
    cursor: pointer;
  }
`;
export const ModalBlok = styled.div`
  width: 90%;
  max-width: 565px;
  max-height: 599px;
  background-color: #fff;
  border-radius: 30px;
  position: absolute;
  overflow: hidden;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    cursor: auto;
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  transition: stroke 300ms linear;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;
export const CloseIcon = styled(GrClose)`
  width: 32px;
  height: 32px;
  stroke: black;
`;
