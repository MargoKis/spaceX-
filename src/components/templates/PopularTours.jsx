import React from 'react'
import styled from "styled-components";
import ArrowLeft from '../assets/svg/arrowLeft.svg'
import ArrowRight from '../assets/svg/arrowRight.svg'
import CardList from '../organisms/CardList';

const PopularTours = () => {

  // const CommonContainer = styled.div`
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   gap: 40%;
  //   
  // `;

  const PopularToursWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6% 9% 3% 8%;
  `

  const PopularToursText = styled.h2`
  font-family: 'Syne';
  font-size: 32px;
  font-weight: 800;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
  text-transform: uppercase;
`;

const ButtonsWrap = styled.div`
    display: flex;
    gap: 10%;
  `;

 const ButtonArrowLeft = styled.button`
 padding: 17px;
 border: none;
 color: black;
 background-color: #ececec;
 cursor: pointer;
 `
 const ButtonArrowRight = styled.button`
 padding: 17px;
 border: none;
 color: black;
 background-color: #ececec;
 cursor: pointer;
 `

  return (
    // <CommonContainer>
    <>
    <PopularToursWrap id="popularToursSection">
      <PopularToursText>Popular Tours </PopularToursText>
      <ButtonsWrap>
        <ButtonArrowLeft><img src={ArrowLeft} alt='left arrow'/></ButtonArrowLeft>
        <ButtonArrowRight><img src={ArrowRight} alt='right arrow'/></ButtonArrowRight>
      </ButtonsWrap>
    </PopularToursWrap>
    <CardList/>
    </>

    // </CommonContainer>
  )
}

export default PopularTours