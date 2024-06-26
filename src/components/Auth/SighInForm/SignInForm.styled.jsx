import { Field } from 'formik';
import styled from 'styled-components';
import { GoEye } from 'react-icons/go';
import { GoEyeClosed } from 'react-icons/go';

export const Title = styled.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #121417;
  margin-bottom: 20px;
`;
export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.37;
  color: rgba(18, 20, 23, 0.8);
  margin-bottom: 40px;
`;
export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  margin: 64px;
`;

export const FormField = styled(Field)`
  width: 100%;
  height: 50px;
  border: 1px solid
    ${(props) => (props.error === 'true' ? 'red' : 'rgba(18, 20, 23, 0.1)')};
  border-radius: 12px;
  margin-bottom: 18px;
  font-size: 16px;
  padding: 16px 18px;
  outline: none;
`;

export const FormFieldPassvordConteiner = styled.div`
  position: relative;
`;

export const FormFieldPassvord = styled(Field)`
  width: 100%;
  height: 50px;
  border: 1px solid
    ${(props) => (props.error === 'true' ? 'red' : 'rgba(18, 20, 23, 0.1)')};
  border-radius: 12px;
  margin-bottom: 40px;
  font-size: 16px;
  padding: 16px 18px;
  outline: none;
`;

export const EyeSvgOpen = styled(GoEye)`
  position: absolute;
  top: 17px;
  right: 17px;
  cursor: pointer;
`;
export const EyeSvgClose = styled(GoEyeClosed)`
  position: absolute;
  top: 17px;
  right: 17px;
  cursor: pointer;
`;

export const FormBtn = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 12px;
  border: none;
  background-color: #9fbaae;
  font-size: 18px;
  font-weight: 700;

  transition: background 0.25s linear;
  &:hover,
  &:focus {
  }
`;
