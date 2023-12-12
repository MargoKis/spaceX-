// import React from "react";
// import styled from "styled-components";
// import Heart from "../assets/svg/heart.svg";
// import Delete from "../assets/svg/trash.svg"
// import ButtonStyled from "../atoms/Button";
// import { favouritesVar } from '../apollo/Cache';

// const CardWrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   width: 30%;
//   border: 1px solid #ccc;
//   margin-bottom: 3%;
// `;

// const Image = styled.img`
//   width: 100%;
//   display: block;
//   object-fit: cover;
//   border: 1px solid #ccc;
//   border-bottom: none;
// `;

// const CardInnerText = styled.div`
//   text-align: center;
//   padding: 0 20px;
// `;

// const CardTitle = styled.h3`
//   font-family: Syne;
//   font-size: 24px;
//   font-weight: 700;
//   margin-bottom: 10px;
// `;

// const CardDescription = styled.p`
//   font-family: Lato;
//   font-size: 24px;
//   font-weight: 300;
//   color: #556b84;
// `;

// const ButtonsWrap = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   padding: 20px;
//   gap: 12px;
// `;

// const Card = ({ rocket, image, isDelete }) => {
//   const handleLikeClick = () => {
//     const currentFavourites = favouritesVar();
//     const isAlreadyFavourite = currentFavourites.some((fav) => fav.image === image);

//     if (!isAlreadyFavourite) {
//       favouritesVar([...currentFavourites, { rocket, image }]);
//     }
//   };

//   return (
//     <CardWrap>
//       <div>
//         <Image src={image} alt="space tour" />
//         <CardInnerText>
//           <CardTitle>{rocket.name}</CardTitle>
//           <CardDescription>{rocket.description}</CardDescription>
//         </CardInnerText>
//       </div>
//       <ButtonsWrap>
//         <ButtonStyled variant="Buy">Buy</ButtonStyled>
//         {isDelete ? ( // условие для отображения разных иконок
//           <ButtonStyled variant="GrayLike" onClick={handleLikeClick} icon={Delete} />
//         ) : (
//           <ButtonStyled variant="GrayLike" onClick={handleLikeClick} icon={Heart} />
//         )}
//       </ButtonsWrap>
//     </CardWrap>
//   );
// };

// export default Card;

import React from "react";
import styled from "styled-components";
import Heart from "../assets/svg/heart.svg";
import Delete from "../assets/svg/trash.svg"
import ButtonStyled from "../atoms/Button";
import { favouritesVar } from '../apollo/Cache';

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  border: 1px solid #ccc;
  margin-bottom: 3%;
`;

const Image = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
  border: 1px solid #ccc;
  border-bottom: none;
`;

const CardInnerText = styled.div`
  text-align: center;
  padding: 0 20px;
`;

const CardTitle = styled.h3`
  font-family: Syne;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-family: Lato;
  font-size: 24px;
  font-weight: 300;
  color: #556b84;
`;

const ButtonsWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  gap: 12px;
`;

const Card = ({ rocket, image, isDelete }) => {
  const handleLikeClick = () => {
    const currentFavourites = favouritesVar();
    const isAlreadyFavourite = currentFavourites.some((fav) => fav.image === image);

    if (!isAlreadyFavourite) {
      favouritesVar([...currentFavourites, { rocket, image }]);
    }
  };

  const handleDeleteClick = () => {
    const currentFavourites = favouritesVar();
    const updatedFavourites = currentFavourites.filter((fav) => fav.image !== image);
    favouritesVar(updatedFavourites);
  };

  return (
    <CardWrap>
      <div>
        <Image src={image} alt="space tour" />
        <CardInnerText>
          <CardTitle>{rocket.name}</CardTitle>
          <CardDescription>{rocket.description}</CardDescription>
        </CardInnerText>
      </div>
      <ButtonsWrap>
        <ButtonStyled variant="Buy">Buy</ButtonStyled>
        {isDelete ? (
          <ButtonStyled variant="GrayLike" onClick={handleDeleteClick}>
            <img src={Delete} alt="trash icon" />
          </ButtonStyled>
        ) : (
          <ButtonStyled variant="GrayLike" onClick={handleLikeClick} >
            <img src={Heart} alt="heart icon" />
          </ButtonStyled>
        )}
      </ButtonsWrap>
    </CardWrap>
  );
};

export default Card;

