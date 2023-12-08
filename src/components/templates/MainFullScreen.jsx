import React from "react";
import styled from "styled-components";
import BackGroundImgEarth from "../assets/png/backImgEarth.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Header from "../organisms/Header";


const MainWrap = styled.div`
  margin: 0;
  padding: 0;
  background-image: url(${BackGroundImgEarth});
  background-size: cover;
  height: 100vh;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-top: 10%;
  line-height: 1;
`;

const FirstLineOfTitle = styled.h1`
  margin: 0;
  margin-right: 16px;
  color: white;
  font-family: "Syne";
  font-size: 48px;
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
`;

const SecondLineOfTitle = styled.h1`
  margin: 0;
  padding: 0;
  color: white;
  font-family: "Syne";
  font-size: 310px;
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
`;

const ExploreTourWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 1%;
  line-height: 1;
  cursor: pointer;
`;

const ExploreTourText = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 32px;
  font-weight: 300;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  color: white;
`;

const MainFullScreen = () => {
  return (
    <MainWrap>
      <Header />
      <TitleWrap>
        <FirstLineOfTitle>The space is waiting for</FirstLineOfTitle>
        <SecondLineOfTitle>You</SecondLineOfTitle>
      </TitleWrap>
      <ExploreTourWrap>
        <ExploreTourText>Explore tours</ExploreTourText>
        <FontAwesomeIcon
          icon={faArrowDown}
          size="2x"
          style={{ color: "white" }}
        />
      </ExploreTourWrap>
    </MainWrap>
  );
};

export default MainFullScreen;
