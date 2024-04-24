import { useSelector } from 'react-redux';
import {
  AditionalText,
  Container,
  FavoritesPageStyles,
} from './FavoritePage.styled';
import { selectIsFavorites } from '../../redux/favorites/favorite.selectors';

import TeacherItem from '../../components/TeacherItem/TeacherItem';

import { nanoid } from 'nanoid';

const FavoritesPage = () => {
  const favoriteCard = useSelector(selectIsFavorites);

  return (
    <FavoritesPageStyles>
      <Container>
        {favoriteCard.length === 0 ? (
          <AditionalText>
            Sorry, but you do not have any favorite teachers.{'😎'}
          </AditionalText>
        ) : (
          <ul>
            {favoriteCard.map((card) => (
              <TeacherItem key={nanoid()} card={card} />
            ))}
          </ul>
        )}
      </Container>
    </FavoritesPageStyles>
  );
};

export default FavoritesPage;
