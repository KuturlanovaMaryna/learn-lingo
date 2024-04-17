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

import Logo from '../../assets/ukraine-logo.png';
import { useState } from 'react';
import Modal from '../Modal/Modal';

export const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const openLoginForm = () => {
    setOpenModal(true);
    setShowLoginForm(true);
    setShowRegistrationForm(false);
  };

  const openRegistrationForm = () => {
    setOpenModal(true);
    setShowLoginForm(false);
    setShowRegistrationForm(true);
  };
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
        <LogInStyledButton type="button" onClick={openLoginForm}>
          <Icon size="20" />
          <LogInText>Log In</LogInText>
        </LogInStyledButton>
        <RegistrationStyledButton type="button" onClick={openRegistrationForm}>
          Registration
        </RegistrationStyledButton>
        {openModal && (
          <Modal
            closeModal={setOpenModal}
            onLoginClick={showLoginForm}
            onRegisterClick={showRegistrationForm}
          />
        )}
      </AuthButtons>
    </HeaderContainer>
  );
};
