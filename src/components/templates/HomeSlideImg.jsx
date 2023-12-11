// import React from "react";
// import styled from "styled-components";
// import { Link } from 'react-scroll';
// import BackGroundImgEarth from "../assets/png/backImgEarth.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
// import Header from "../organisms/Header";


// const MainWrap = styled.div`
//   margin: 0;
//   padding: 0;
//   background-image: url(${BackGroundImgEarth});
//   background-size: cover;
//   height: 100vh;
// `;

// const TitleWrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   text-align: start;
//   margin-top: 10%;
//   line-height: 1;
// `;

// const FirstLineOfTitle = styled.h1`
//   margin: 0;
//   margin-right: 16px;
//   color: white;
//   font-family: "Syne";
//   font-size: 48px;
//   font-weight: 800;
//   text-transform: uppercase;
//   text-align: center;
// `;

// const SecondLineOfTitle = styled.h1`
//   margin: 0;
//   padding: 0;
//   color: white;
//   font-family: "Syne";
//   font-size: 310px;
//   font-weight: 800;
//   text-transform: uppercase;
//   text-align: center;
// `;

// const ExploreTourWrap = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   gap: 15px;
//   margin-top: 1%;
//   line-height: 1;
//   cursor: pointer;
// `;

// const ExploreTourText = styled.p`
//   font-family: "Lato", sans-serif;
//   font-size: 32px;
//   font-weight: 300;
//   line-height: 38px;
//   letter-spacing: 0em;
//   text-align: center;
//   text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
//   color: white;
// `;

// const HomeFullScreen = () => {
//   return (
//     <MainWrap>
//       <Header />
//       <TitleWrap>
//         <FirstLineOfTitle>The space is waiting for</FirstLineOfTitle>
//         <SecondLineOfTitle>You</SecondLineOfTitle>
//       </TitleWrap>
//       <Link
//       to="popularToursSection"
//       spy={true}
//       smooth={true}
//       offset={-100} 
//       duration={500} 
//     >
//       <ExploreTourWrap>
//         <ExploreTourText>Explore tours</ExploreTourText>
//         <FontAwesomeIcon
//           icon={faArrowDown}
//           size="2x"
//           style={{ color: "white" }}
//         />
//       </ExploreTourWrap>
//       </Link>
//     </MainWrap>
//   );
// };

// export default HomeFullScreen;







import React from "react";
import styled,  { keyframes } from "styled-components";
import { Link } from 'react-scroll';
import BackGroundImgEarth from "../assets/png/backImgEarth.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Header from "../organisms/Header";
 import { useState, useEffect } from "react";
import ImageOne from "../assets/png/backImgEarth.png";
import ImageTwo from "../assets/png/backImgWoman.png";
import ImageThree from "../assets/png/backImgSpaceMan.png";

const images = [ImageOne, ImageTwo, ImageThree];

const slideAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const MainWrap = styled.div`
  margin: 0;
  padding: 0;
  background-size: cover;
  height: 100vh;
  animation: ${slideAnimation} 1s ease-in-out;
  transition: background-image 1s ease-in-out;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-top: 10%;
  line-height: 1;
  position: relative;
`;

const FirstLineOfTitle = styled.h1`
margin: 0;
margin-right: 16px;
color: white;
font-family: "Syne";
font-size: 48px;
font-weight: 800;
text-transform: uppercase;
text-align: center;
`;

const SecondLineOfTitle = styled.h1`
margin: 0;
padding: 0;
color: white;
font-family: "Syne";
font-size: 310px;
font-weight: 800;
text-transform: uppercase;
text-align: center;
`;

const preloadImages = (images) => {
  return images.map((src) => {
    const img = new Image();
    img.src = src;
    return img;
  });
};

const lazyLoadImages = () => {
  const images = document.querySelectorAll(".MainWrap img");
  images.forEach((img) => {
    img.addEventListener("load", () => {
      img.classList.remove("lazy");
    });
  });
};

const ExploreTourWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  cursor: pointer;
`;

const ExploreTourText = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 32px;
  font-weight: 300;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  color: white;
`;

const HomeFullScreen = () => {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const preloadedImages = preloadImages(images);
    return () => {
      preloadedImages.forEach((img) => URL.revokeObjectURL(img.src));
    };
  }, []);

  useEffect(() => {
    lazyLoadImages();
  }, []);

  return (
    <MainWrap style={{ backgroundImage: `url(${images[currentImage]})` }}>
      <Header />
      <TitleWrap>
      <FirstLineOfTitle>The space is waiting for</FirstLineOfTitle>
      <SecondLineOfTitle>You</SecondLineOfTitle>
    </TitleWrap>
      <Link
      to="popularToursSection"
      spy={true}
      smooth={true}
      offset={100} 
      duration={500} 
    >
      <ExploreTourWrap>
        <ExploreTourText>Explore tours</ExploreTourText>
        <FontAwesomeIcon
          icon={faArrowDown}
          size="2x"
          style={{ color: "white" }}
        />
      </ExploreTourWrap>
      </Link>
    </MainWrap>
  );
};

export default HomeFullScreen;
