import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const WraperBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const HomePageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px 20px 60px 20px;
  max-width: 1440px;
`;

export const ContainerGreeting = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 24px;
`;

////////////  ContainerMainInf  //////////////////////////////////
export const ContainerMainInf = styled.div`
  box-sizing: border-box;
  max-width: 720px;
  padding: 98px 108px 98px 68px;
  border-radius: 30px;
  background: #f8f8f8;

  @media (max-width: 500px) {
    padding: 60px 5px 10px 5px;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 48px;
  line-height: 1.17;
  letter-spacing: -2px;
  margin-bottom: 32px;
`;

export const TitleLenguage = styled.span`
  font-weight: 400;
  font-style: italic;
  display: inline-block;
  border-radius: 8px;
  padding: 0 4px;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 14px;
    left: 0px;
    right: 0;
    bottom: 2px;
    z-index: -1;
    background-color: #cbded3;
    border-radius: 8px;
  }
`;

export const MotivationalText = styled.p`
  max-width: 471px;
  font-size: 16px;
  line-height: 1.38;
  margin-bottom: 64px;
`;
export const BtnGetStarted = styled(NavLink)`
  display: inline-block;
  padding: 16px 88px;
  font-weight: 700;
  font-size: 18px;
  background: #9fbaae;
  border-radius: 12px;
  color: #121417;
  transition: background 0.25s linear;
  &:hover,
  &:focus {
    background: #cbded3;
  }
`;

export const ChildImg = styled.img`
  border-radius: 30px;
`;

export const ContainerBenefits = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 92px;
  padding: 40px 122px;

  border-radius: 30px;
  border: 1.5px dashed #9fbaae;
  width: 1312px;

  @media (max-width: 1354px) {
    width: auto;
  }
  @media (max-width: 500px) {
    padding: 10px 5px;
  }
`;

export const IndividualContainerBenefits = styled.div`
  display: flex;
`;

export const DataFigures = styled.p`
  font-size: 28px;
  font-weight: 500;
  line-height: 1.14;
  margin-right: 16px;
  color: #121417;
  margin-right: 16px;
  margin-bottom: 0;
`;

export const SmallTitleFirstTwo = styled.p`
  width: 96px;
  line-height: 1.29;
  color: rgba(18, 20, 23, 0.7);
  margin: 0;
`;

export const SmallTitleSecondTwo = styled.p`
  width: 74px;
  line-height: 1.29;
  color: rgba(18, 20, 23, 0.7);
  margin: 0;
`;
