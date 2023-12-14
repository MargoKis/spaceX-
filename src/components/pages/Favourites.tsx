import React from "react";
import FavouritesHalfScreen from "../templates/FavouritesHalfScreen";
import FavouritesCards from "../templates/FavouritesCards";

const Favourites: React.FC = () => {
  return (
    <>
      <FavouritesHalfScreen />
      <FavouritesCards />
    </>
  );
};

export default Favourites;