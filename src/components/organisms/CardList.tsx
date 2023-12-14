import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";
import Card from "../molecules/Card";

type Rocket = {
  id: string;
  name: string;
  description: string;
};

type CardListProps = {
  currentPage: number;
};

const GET_ROCKETS = gql`
  query GetRockets {
    rockets {
      id
      name
      description
    }
  }
`;

const CardsWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 7%;
`;

const CardList: React.FC<CardListProps> = ({ currentPage }) => {
  const { loading, error, data } = useQuery<{ rockets: Rocket[] }>(GET_ROCKETS);
  const [limitedRockets, setLimitedRockets] = useState<Rocket[]>([]);

  useEffect(() => {
    if (!loading && !error && data) {
      const allRockets = data.rockets;
      const startIndex = currentPage * 3;
      const endIndex = (currentPage + 1) * 3;
      const slicedRockets = allRockets.slice(startIndex, endIndex);
      setLimitedRockets(slicedRockets);
    }
  }, [currentPage, data, error, loading]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const images: string[] = [
    require("../assets/png/cardImgEarth.png"),
    require("../assets/png/cardImgSpaceMan.png"),
    require("../assets/png/cardImgWoman.png"),
  ];

  return (
    <>
      <CardsWrap>
        {limitedRockets.map((rocket: Rocket, index: number) => (
          <Card
            key={rocket.id}
            rocket={rocket}
            image={images[index]}
            isDelete={undefined}
          />
        ))}
      </CardsWrap>
    </>
  );
};

export default CardList;