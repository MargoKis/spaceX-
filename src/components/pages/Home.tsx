import React from "react";
import HomeFullScreen from "../templates/HomeSlideImg";
import PopularTours from "../templates/HomePopularTours";

const Home: React.FC = () => {
  return (
    <div>
      <HomeFullScreen />
      <PopularTours />
    </div>
  );
};

export default Home;