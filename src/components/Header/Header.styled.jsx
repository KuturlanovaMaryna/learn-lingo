import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FiLogIn } from 'react-icons/fi';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  margin: 0 auto;
  max-width: 1184px;
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

export const StyledLink = styled(NavLink)`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #121417;
  &.active {
    color: #9fbaae;
    text-decoration: underline;
  }
`;
export const AuthButtons = styled.div`
  display: flex;
  padding: 20px;
`;
export const LogInStyledButton = styled.button`
  display: flex;
  gap: 4px;
  width: 73px;
  height: 20px;
  padding: 16px 0;
  margin-right: 14px;
  border: none;
  background-color: transparent;

  &:hover {
    color:;
  }
`;
export const LogInText = styled.p`
  font-weight: 700;
  line-height: 1.25;
  color: #121417;
  margin: 0;
`;
export const RegistrationStyledButton = styled.button`
  width: 166px;
  height: 48px;
  padding: 14px 39px;
  font-weight: 700;
  line-height: 1.25;
  font-size: 16px;
  color: #fff;
  border: none;
  background-color: #121417;
  transition: all 250ms ease;
  border-radius: 12px;
`;
export const Icon = styled(FiLogIn)`
  stroke: #9fbaae;
`;
