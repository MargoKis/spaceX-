import React from "react";
import styled from "styled-components";

const Card = ({ rocket }) => {
  const CardInner = styled.div`
    display: flex;
    flex-direction: column;
    width: 24%;
    border: 1px solid #ccc;
    padding: 20px;
  `;

  const CardTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 10px;
  `;

  const CardDescription = styled.p`
    margin-bottom: 15px;
  `;

  const Button = styled.button`
    padding: 8px 15px;
    border: none;
    cursor: pointer;
    margin-right: 10px;
  `;

  const BuyButton = styled(Button)`
    background-color: #00f;
    color: #fff;
  `;

  const LikeButton = styled(Button)`
    background-color: #f00;
    color: #fff;
  `;

  return (
    <CardInner>
      <CardTitle>{rocket.name}</CardTitle>
      <CardDescription>{rocket.description}</CardDescription>
      <BuyButton>Buy</BuyButton>
      <LikeButton>Like</LikeButton>
    </CardInner>
  );
};

export default Card;
