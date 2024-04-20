import {
  Card,
  FullName,
  GreenDot,
  ImageWrapper,
  InfoWrapper,
  MainBlockInfo,
  MainInfo,
  NameBlock,
  PhotoFrame,
  TeacherPhoto,
  Title,
} from './TeacherItem.styled';
import { IoBookOutline } from 'react-icons/io5';
import { RxDividerVertical } from 'react-icons/rx';
import { IoMdStar } from 'react-icons/io';

export const TeacherItem = ({ card }) => {
  const { avatar_url, name, surname, lessons_done, rating, price_per_hour } =
    card;

  return (
    <Card>
      <ImageWrapper>
        <PhotoFrame>
          <TeacherPhoto src={avatar_url} alt={`${name} ${surname}`} />
          <GreenDot size="20" />
        </PhotoFrame>
      </ImageWrapper>
      <InfoWrapper>
        <NameBlock>
          <Title>Languages</Title>
          <FullName>
            {name} {surname}
          </FullName>
        </NameBlock>
        <MainInfo>
          <MainBlockInfo>
            <IoBookOutline size={16} />
            <span style={{ paddingLeft: 8 }}>Lenguages</span>
          </MainBlockInfo>
          <RxDividerVertical color="#121417" opacity={0.2} />
          <MainBlockInfo>Lessons done:{lessons_done}</MainBlockInfo>{' '}
          <RxDividerVertical color="#121417" opacity={0.2} />
          <MainBlockInfo>
            <IoMdStar color="#FFC531" size={16} />
            <span style={{ paddingLeft: 8 }}>Rating:{rating}</span>
          </MainBlockInfo>
          <RxDividerVertical color="#121417" opacity={0.2} />
          <MainBlockInfo>Price / 1 hour: {price_per_hour}$</MainBlockInfo>
        </MainInfo>
      </InfoWrapper>
    </Card>
  );
};
