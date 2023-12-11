// import React from 'react'
// import styled from "styled-components";
// import ArrowLeft from '../assets/svg/arrowLeft.svg'
// import ArrowRight from '../assets/svg/arrowRight.svg'
// import CardList from '../organisms/CardList';


// const PopularToursWrap = styled.div`
// display: flex;
// justify-content: space-between;
// align-items: center;
// margin: 6% 9% 3% 8%;
// `

// const PopularToursText = styled.h2`
// font-family: 'Syne';
// font-size: 32px;
// font-weight: 800;
// text-align: center;
// text-transform: uppercase;
// `;

// const ButtonsWrap = styled.div`
//   display: flex;
//   gap: 10%;
// `;

// const ButtonArrowLeft = styled.button`
// width: 44px;
// height: 44px;
// border: none;
// color: black;
// background-color: #ececec;
// cursor: pointer;
// `
// const ButtonArrowRight = styled.button`
// width: 44px;
// height: 44px;
// border: none;
// color: black;
// background-color: #ececec;
// cursor: pointer;
// `

// const PopularTours = () => {

//   return (
//     <>
//     <PopularToursWrap id="popularToursSection">
//       <PopularToursText>Popular Tours </PopularToursText>
//       <ButtonsWrap>
//         <ButtonArrowLeft><img src={ArrowLeft} alt='left arrow'/></ButtonArrowLeft>
//         <ButtonArrowRight><img src={ArrowRight} alt='right arrow'/></ButtonArrowRight>
//       </ButtonsWrap>
//     </PopularToursWrap>
//     <CardList/>
//     </>
//   )
// }







// import React, { useState } from "react";
// import styled from "styled-components";
// import ArrowLeft from "../assets/svg/arrowLeft.svg";
// import ArrowRight from "../assets/svg/arrowRight.svg";
// import CardList from "../organisms/CardList";

// const PopularToursWrap = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 6% 9% 3% 8%;
// `;

// const PopularToursText = styled.h2`
//   font-family: "Syne";
//   font-size: 32px;
//   font-weight: 800;
//   text-align: center;
//   text-transform: uppercase;
// `;

// const ButtonsWrap = styled.div`
//   display: flex;
//   gap: 10%;
// `;

// const ButtonArrow = styled.button`
//   width: 44px;
//   height: 44px;
//   border: none;
//   color: black;
//   background-color: #ececec;
//   cursor: pointer;
// `;

// const PopularTours = () => {
//   const [currentPage, setCurrentPage] = useState(0);

//   const handleClickLeft = () => {
//     setCurrentPage((currentPage - 1 + 3) % 3);
//   };

//   const handleClickRight = () => {
//     setCurrentPage((currentPage + 1) % 3);
//   };

//   return (
//     <>
//       <PopularToursWrap>
//         <PopularToursText>Popular Tours</PopularToursText>
//         <ButtonsWrap>
//           <ButtonArrow onClick={handleClickLeft}>
//             <img src={ArrowLeft} alt="left arrow" />
//           </ButtonArrow>
//           <ButtonArrow onClick={handleClickRight}>
//             <img src={ArrowRight} alt="right arrow" />
//           </ButtonArrow>
//         </ButtonsWrap>
//       </PopularToursWrap>
//       <CardList currentPage={currentPage} />
//     </>
//   );
// };

// export default PopularTours;




import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArrowLeft from "../assets/svg/arrowLeft.svg";
import ArrowRight from "../assets/svg/arrowRight.svg";
import CardList from "../organisms/CardList";

const PopularToursWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6% 9% 3% 8%;
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

const PopularTours = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 2; // Number of total pages

  const handleClickLeft = () => {
    const nextPage = (currentPage - 1 + totalPages) % totalPages;
    setCurrentPage(nextPage);
  };
  
  const handleClickRight = () => {
    const nextPage = (currentPage + 1) % totalPages;
    setCurrentPage(nextPage);
  };

  return (
    <>
      <PopularToursWrap>
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

export default PopularTours;

