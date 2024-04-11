import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
} from './Header.styled';
import sprite from 'assets/sprite.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/first">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          First
        </StyledLink>
        <StyledLink to="/second">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Second
        </StyledLink>
        <StyledLink to="/signup">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          SignUp
        </StyledLink>
        <StyledLink to="/signin">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          SignIn
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
