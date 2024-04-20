import styled from 'styled-components';
import { GoDotFill } from 'react-icons/go';

export const Card = styled.div`
  width: 1148px;
  background-color: #fff;
  border-radius: 24px;
  min-height: 328px;
  padding: 24px;
`;
export const ImageWrapper = styled.div`
  padding: 24px;
`;
export const PhotoFrame = styled.div`
  width: 120px;
  height: 120px;
  border: 3px solid #cbded3;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const TeacherPhoto = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 100px;
`;
export const GreenDot = styled(GoDotFill)`
  fill: #38cd3e;
  position: absolute;
  top: 12px;
  right: 16px;
  stroke: #fff;
  stroke-width: 2px;

  border-radius: 100px;
`;
