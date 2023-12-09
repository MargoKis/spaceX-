import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import Logo from "../assets/svg/logo.svg";

const Header = () => {
  // const CommonContainer = styled.div`
  //   display: flex;
  //   align-items: center;
  //   gap: 40%;
  //   margin: 0 10% 0 5%;
  // `;

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
    margin-left: 7%;
  `;

  const Nav = styled.nav`
ul {
  list-style: none;
  display: flex;
  gap: 32px;
a {
  text-decoration: none; 
  color: white; 
  text-transform: uppercase;
}
`;

  const NavLink = styled.a`
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

  const ButtonSignIn = styled.button`
    background-color: #d3eaff;
    width: 163px;
    border: none;
    color: #000000;
    font-family: "Syne";
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
  `;

  const ButtonFav = styled.button`
    padding: 17px;
    border: none;
    color: black;
    background-color: #ececec;
    cursor: pointer;
  `;

  return (
    <HeaderWrap>
      {/* <CommonContainer> */}
        <LogoX src={Logo} alt="logo spaceX" />
        <Nav>
          <ul>
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/">Tours</NavLink>
            </li>
            <li>
              <NavLink href="/">About</NavLink>
            </li>
            <li>
              <NavLink href="/">Help</NavLink>
            </li>
          </ul>
        </Nav>
        <ButtonsWrap>
          <ButtonFav>
            <FontAwesomeIcon icon={faHeart} size="lg" />
          </ButtonFav>
          <ButtonSignIn>Sign In</ButtonSignIn>
        </ButtonsWrap>
      {/* </CommonContainer> */}
    </HeaderWrap>
  );
};

export default Header;
