import { useEffect, useState } from 'react';
import { StyledModal, CloseIcon, ModalBlok, CloseButton } from './Modal.styled';
import { SignIn } from '../Auth/SighInForm/SignInForm';
import { SignUp } from '../Auth/SignUpForm/SignUpForm';

const Modal = ({ closeModal, onLoginClick, onRegisterClick }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [closeModal]);

  const handleOverayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };
  useEffect(() => {
    if (onLoginClick) {
      setShowLogin(true);
      setShowRegistration(false);
    } else if (onRegisterClick) {
      setShowLogin(false);
      setShowRegistration(true);
    }
  }, [onLoginClick, onRegisterClick]);

  return (
    <StyledModal onClick={handleOverayClick}>
      <ModalBlok>
        <CloseButton onClick={() => closeModal(false)} className="closeBtn">
          <CloseIcon />
        </CloseButton>
        {showLogin && <SignIn closeModal={closeModal} />}
        {showRegistration && <SignUp />}
      </ModalBlok>
    </StyledModal>
  );
};

export default Modal;
