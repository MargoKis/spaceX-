import React from "react";
import styled from "styled-components";
import Header from "../organisms/Header";
import BackGroundImgSpaceMan from "../assets/png/backImgSpaceMan.png";

const MainWrap = styled.div`
  margin: 0;
  padding: 0;
  background-image: url(${BackGroundImgSpaceMan});
  background-size: cover;
  height: 60vh;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-top: 8%;
  line-height: 1;
`;

const Title = styled.div`
  color: white;
  font-family: "Syne";
  font-size: 48px;
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
`;

const FavouritesHalfScreen: React.FC = () => {
  return (
    <>
      <MainWrap>
        <Header variant="PinkLike" />
        <TitleWrap>
          <Title>Favourites</Title>
        </TitleWrap>
      </MainWrap>
    </>
  );
};

export default FavouritesHalfScreen;
