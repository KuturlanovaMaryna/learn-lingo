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
  BlockSkills,
  BlockShortInformationsTeacher,
  LanguagesUnderlined,
  Subtitle,
  InfoBottomWrapper,
  AditionalInfo,
  LevelsList,
  LevelLanguage,
} from './TeacherItem.styled';
import { IoBookOutline } from 'react-icons/io5';
import { RxDividerVertical } from 'react-icons/rx';
import { IoMdStar } from 'react-icons/io';

export const TeacherItem = ({ card }) => {
  const {
    avatar_url,
    name,
    surname,
    lessons_done,
    rating,
    price_per_hour,
    languages,
    lesson_info,
    conditions,
    levels,
  } = card;

  return (
    <Card>
      <ImageWrapper>
        <PhotoFrame>
          <TeacherPhoto src={avatar_url} alt={`${name} ${surname}`} />
          <GreenDot size="20" />
        </PhotoFrame>
      </ImageWrapper>
      <InfoWrapper>
        <InfoBottomWrapper>
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
            <MainBlockInfo>
              Price / 1 hour: <span color="#38cd3e">{price_per_hour}$</span>
            </MainBlockInfo>
          </MainInfo>
        </InfoBottomWrapper>
        <BlockSkills>
          <BlockShortInformationsTeacher>
            <Subtitle>Speaks:</Subtitle>
            <LanguagesUnderlined>{languages.join(', ')}</LanguagesUnderlined>
          </BlockShortInformationsTeacher>

          <BlockShortInformationsTeacher>
            <Subtitle>Lesson Info:</Subtitle>
            <AditionalInfo>{lesson_info}</AditionalInfo>
          </BlockShortInformationsTeacher>

          <BlockShortInformationsTeacher>
            <Subtitle>Conditions:</Subtitle>
            <AditionalInfo>{conditions}</AditionalInfo>
          </BlockShortInformationsTeacher>
        </BlockSkills>
        <LevelsList>
          {levels.map((language) => (
            <LevelLanguage key={language}>#{language}</LevelLanguage>
          ))}
        </LevelsList>
      </InfoWrapper>
    </Card>
  );
};
