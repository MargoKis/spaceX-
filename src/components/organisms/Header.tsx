import React from "react";
import Heart from "../assets/svg/heart.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/svg/logo.svg";
import ButtonStyled from "../atoms/Button";

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #1e1e1e7a;
  background-size: cover;
  position: relative;
`;

const LogoX = styled.img`
  mix-blend-mode: difference;
  margin-left: 40%;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 32px;
  }
`;

const NavLinkStyled = styled(Link)`
  position: relative;
  text-decoration: none;
  color: white;

  &::before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0%;
    height: 1px;
    background-color: white;
    transition: width 0.3s;
  }

  &:hover::before {
    width: 100%;
  }
`;

const ButtonsWrap = styled.div`
  display: flex;
  gap: 8%;
  margin-right: 7%;
`;

type HeaderProps = {
  variant: string;
};

const Header: React.FC<HeaderProps> = ({ variant }) => {
  return (
    <HeaderWrap>
      <Link to="/">
        <LogoX src={Logo} alt="logo spaceX" />
      </Link>
      <Nav>
        <ul>
          <li>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="#">Tours</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="#">About</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="#">Help</NavLinkStyled>
          </li>
        </ul>
      </Nav>
      <ButtonsWrap>
        <Link to="/favourites">
          <ButtonStyled variant={variant}>
            <img src={Heart} alt="heart icon" />
          </ButtonStyled>
        </Link>
        <ButtonStyled variant="Sign">Sign In</ButtonStyled>
      </ButtonsWrap>
    </HeaderWrap>
  );
};

export default Header;