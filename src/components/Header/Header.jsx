import {
  HeaderContainer,
  Navigation,
  StyledLink,
  LogoStyled,
  LogoName,
  LogoImg,
  AuthButtons,
  LogInStyledButton,
  RegistrationStyledButton,
  Icon,
  LogInText,
} from './Header.styled';
// import sprite from 'assets/sprite.svg';
import Logo from '../../assets/ukraine-logo.png';

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoStyled to="/home">
        <LogoImg src={Logo} alt="LogoUkraine" />
        <LogoName>LearnLingo</LogoName>
      </LogoStyled>
      <Navigation>
        <StyledLink to="/home">Home</StyledLink>
        <StyledLink to="/teachers">Teachers</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </Navigation>
      <AuthButtons>
        <LogInStyledButton type="button">
          <Icon size="20" />
          <LogInText>Log In</LogInText>
        </LogInStyledButton>
        <RegistrationStyledButton type="button">
          Registration
        </RegistrationStyledButton>
      </AuthButtons>
    </HeaderContainer>
  );
};
