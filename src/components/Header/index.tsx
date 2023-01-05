import React from 'react';
import logoImg from "../../assets/logo.svg";
import { HeaderContainer } from './styles';
interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="Todo" />
    </HeaderContainer>
  );
};