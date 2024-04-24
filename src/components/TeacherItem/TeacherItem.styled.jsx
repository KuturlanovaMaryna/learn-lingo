import styled from 'styled-components';
import { GoDotFill } from 'react-icons/go';
import { FaRegHeart } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa6';

export const Card = styled.div`
  width: 1148px;
  background-color: #fff;
  border-radius: 24px;
  min-height: 328px;
  padding: 24px;
  display: flex;
  gap: 48px;
`;
export const ImageWrapper = styled.div``;
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
export const InfoWrapper = styled.div`
  font-weight: 500;
`;
export const InfoBottomWrapper = styled.div`
  display: flex;
  margin-bottom: 32px;
`;
export const NameBlock = styled.div``;
export const Title = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #8a8a89;
`;
export const FullName = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  color: #121417;
  margin: 0;
`;
export const MainInfo = styled.ul`
  display: flex;
  margin-left: 100px;
`;
export const MainBlockInfo = styled.li`
  display: inline-flex;

  padding-left: 16px;
  padding-right: 16px;
`;
export const BlockSkills = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

export const BlockShortInformationsTeacher = styled.li`
  display: flex;
  gap: 2px;
  margin-bottom: 8px;
`;
export const LanguagesUnderlined = styled.p`
  text-decoration: underline;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
`;
export const AditionalInfo = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
`;
export const Subtitle = styled.h3`
  color: #8a8a89;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
`;
export const LevelsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1.14;
`;

export const LevelLanguage = styled.li`
  padding: 8px 12px;
  border-radius: 35px;
  border: 1px solid rgba(18, 20, 23, 0.2);

  &:first-child {
    border-color: transparent;
    background: #9fbaae;
  }
`;
export const Favorite = styled.button`
  display: inline-flex;
  background-color: transparent;
  border: none;
  padding: 0;
`;
export const NotFavoriteIcon = styled(FaRegHeart)`
  fill: #9fbaae;

  stroke: #9fbaae;
  stroke-width: 2px;
  border-radius: 100px;
`;
export const FavoriteIcon = styled(FaHeart)`
  fill: #9fbaae;
  stroke: #9fbaae;
  stroke-width: 2px;
  border-radius: 100px;
`;
