import React from "react";
import styled from "styled-components";
import { useReactiveVar } from "@apollo/client";
import { favouritesVar } from "../apollo/Cache";
import Card from "../organisms/Card";

const ClearAllWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 5%;
  margin-right: 8%;
`;

const ClearAll = styled.div`
  font-family: Lato;
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  cursor: pointer;
`;

const LikedCardsWrap = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
  margin: 4% 7%;
`

const FavouritesCards = () => {
  const favouriteCards = useReactiveVar(favouritesVar);

  const handleClearAll = () => {
    favouritesVar([]);
  };

  return (
    <>
      <ClearAllWrap>
        <ClearAll onClick={handleClearAll}>Clear All</ClearAll>
      </ClearAllWrap>
      <LikedCardsWrap>
        {favouriteCards.map((card, index) => (
          <Card
            key={index}
            rocket={card.rocket}
            image={card.image}
            isDelete={true}
          />
        ))}
      </LikedCardsWrap>
    </>
  );
};

export default FavouritesCards;
