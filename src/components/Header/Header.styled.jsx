import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  height: 48px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  margin: 4px 0;
`;

export const LogoStyled = styled(Link)`
  display:flex;
  gap: 8px;
  align-items: center;
  }
`;
export const LogoName = styled.p`
  color: #121417;
  padding-top: 12px;
  padding-bottom: 12px;
  margin: 0;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
`;

export const LogoImg = styled.img``;

export const StyledLink = styled(Link)`
font-weight: 400;
font-size: 16px;
line-height: 1.25;
 color: #121417;
  }
`;
export const AuthButtons = styled.div`
  padding: 20px;
`;
export const LogInStyledButton = styled.button``;
export const RegistrationStyledButton = styled.button``;
