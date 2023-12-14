import React, { useState } from "react";
import styled from "styled-components";
import ArrowLeft from "../assets/svg/arrowLeft.svg";
import ArrowRight from "../assets/svg/arrowRight.svg";
import CardList from "../organisms/CardList";

const PopularToursWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6% 8% 3% 7%;
`;

const PopularToursText = styled.h2`
  font-family: "Syne";
  font-size: 32px;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
`;

const ButtonsWrap = styled.div`
  display: flex;
  gap: 10%;
`;

const ButtonArrow = styled.button`
  width: 44px;
  height: 44px;
  border: none;
  color: black;
  background-color: #ececec;
  cursor: pointer;
`;

const HomePopularTours: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const totalPages: number = 2;

  const handleClickLeft = () => {
    const nextPage: number = (currentPage - 1 + totalPages) % totalPages;
    setCurrentPage(nextPage);
  };

  const handleClickRight = () => {
    const nextPage: number = (currentPage + 1) % totalPages;
    setCurrentPage(nextPage);
  };

  return (
    <>
      <PopularToursWrap id="HomePopularTours">
        <PopularToursText>Popular Tours</PopularToursText>
        <ButtonsWrap>
          <ButtonArrow onClick={handleClickLeft}>
            <img src={ArrowLeft} alt="left arrow" />
          </ButtonArrow>
          <ButtonArrow onClick={handleClickRight}>
            <img src={ArrowRight} alt="right arrow" />
          </ButtonArrow>
        </ButtonsWrap>
      </PopularToursWrap>
      <CardList currentPage={currentPage} />
    </>
  );
};

export default HomePopularTours;