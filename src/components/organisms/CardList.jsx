// import React from "react";
// import { useQuery, gql } from "@apollo/client";
// import styled from "styled-components";
// import Card from "../molecules/Card";

// const GET_ROCKETS = gql`
//   query GetRockets {
//     rockets {
//       id
//       name
//       description
//     }
//   }
// `;

// const CardsWrap = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   margin: 0 6%;
// `;

// const CardList = () => {
//   const { loading, error, data } = useQuery(GET_ROCKETS);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   const limitedRockets = data.rockets.slice(0, 3);

//   return (
//     <>
//       <CardsWrap>
//         {limitedRockets.map((rocket) => (
//           <Card key={rocket.id} rocket={rocket} />
//         ))}
//       </CardsWrap>
//     </>
//   );
// };

// export default CardList;

// import React from "react";
// import { useQuery, gql } from "@apollo/client";
// import styled from "styled-components";
// import Card from "../molecules/Card";

// const GET_ROCKETS = gql`
//   query GetRockets {
//     rockets {
//       id
//       name
//       description
//     }
//   }
// `;

// const CardsWrap = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   margin: 0 6%;
// `;

// const CardList = ({ currentPage }) => {
//   const { data, loading, error } = useQuery(GET_ROCKETS);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   const limitedRockets = data.rockets.slice(currentPage * 3, (currentPage + 1) * 3);

//   return (
//     <>
//       <CardsWrap>
//         {limitedRockets.map((rocket) => (
//           <Card key={rocket.id} rocket={rocket} />
//         ))}
//       </CardsWrap>
//     </>
//   );
// };

// export default CardList;

import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";
import Card from "./Card";

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

const CardList = ({ currentPage }) => {
  const { loading, error, data } = useQuery(GET_ROCKETS);
  const [limitedRockets, setLimitedRockets] = useState([]);

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

  const images = [
    require("../assets/png/cardImgEarth.png"),
    require("../assets/png/cardImgSpaceMan.png"),
    require("../assets/png/cardImgWoman.png"),
  ];

  return (
    <>
      <CardsWrap>
        {limitedRockets.map((rocket, index) => (
          <Card key={rocket.id} rocket={rocket} image={images[index]} />
        ))}
      </CardsWrap>
    </>
  );
};

export default CardList;
