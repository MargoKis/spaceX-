import React from "react";
import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";
import Header from "../organisms/Header";
import ImageOne from "../assets/png/backImgEarth.png";
import ImageTwo from "../assets/png/backImgWoman.png";
import ImageThree from "../assets/png/backImgSpaceMan.png";
import ArrowDown from "../assets/svg/arrowDown.svg";

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

const ArrowDownImg = styled.img`
  fill: white;
`;

const HomeFullScreen = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
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
      <Header variant="GrayLike" />
      <TitleWrap>
        <FirstLineOfTitle>The space is waiting for</FirstLineOfTitle>
        <SecondLineOfTitle>You</SecondLineOfTitle>
      </TitleWrap>
      <Link
        to="HomePopularTours"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <ExploreTourWrap>
          <ExploreTourText>Explore tours</ExploreTourText>
          <ArrowDownImg src={ArrowDown} alt="arrow down" />
        </ExploreTourWrap>
      </Link>
    </MainWrap>
  );
};

export default HomeFullScreen;