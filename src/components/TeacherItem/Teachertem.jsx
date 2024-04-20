import {
  Card,
  GreenDot,
  ImageWrapper,
  PhotoFrame,
  TeacherPhoto,
} from './TeacherItem.styled';

export const TeacherItem = ({ card }) => {
  const { avatar_url, name, surname } = card;

  return (
    <Card>
      <ImageWrapper>
        <PhotoFrame>
          <TeacherPhoto src={avatar_url} alt={`${name} ${surname}`} />
          <GreenDot size="20" />
        </PhotoFrame>
      </ImageWrapper>
    </Card>
  );
};
