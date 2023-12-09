import React from "react";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";
import Card from "../molecules/Card";

const GET_ROCKETS = gql`
  query GetRockets {
    rockets {
      id
      name
      description
    }
  }
`;

const CardWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 5%;
`;

const CardList = () => {
  const { loading, error, data } = useQuery(GET_ROCKETS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const limitedRockets = data.rockets.slice(0, 3);

  return (
    <>
      <CardWrap>
        {limitedRockets.map((rocket) => (
          <Card key={rocket.id} rocket={rocket} />
        ))}
      </CardWrap>
    </>
  );
};

export default CardList;
