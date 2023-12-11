import React from "react";
import styled from "styled-components";
import Heart from "../assets/svg/heart.svg";
import ButtonStyled from "../atoms/Button";

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 26%;
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
  color: #556B84;

`;

const ButtonsWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  gap: 12px;
`;

const Card = ({ rocket, image }) => {
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
        <ButtonStyled variant="GrayLike">
          <img src={Heart} alt="heart icon" />
        </ButtonStyled>
      </ButtonsWrap>
    </CardWrap>
  );
};

export default Card;
