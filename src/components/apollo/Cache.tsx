import { makeVar, ReactiveVar } from "@apollo/client";

type FavouritesArray = string[];

export const favouritesVar: ReactiveVar<FavouritesArray> =
  makeVar<FavouritesArray>([]);