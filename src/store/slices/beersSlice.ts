import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Beer } from "../../interfaces/interfaces";

export interface InitialBeersState {
  randomBeer: Beer;
  foundBeers: Beer[];
}

export const initialBeersState: InitialBeersState = {
  randomBeer: {
    name: "",
    description: "",
    id: 0,
    imageSrc: "",
  },
  foundBeers: [],
};

export const beerSlice = createSlice({
  name: "beers",
  initialState: initialBeersState,
  reducers: {
    loadBeers: (state: InitialBeersState, action: PayloadAction<Beer[]>) => ({
      ...initialBeersState,
      foundBeers: action.payload,
    }),
    randomBeer: (state: InitialBeersState, action: PayloadAction<Beer>) => ({
      ...initialBeersState,
      randomBeer: action.payload,
    }),
  },
});

const BeersReducer = beerSlice.reducer;
export const {
  loadBeers: loadBeersActionCreator,
  randomBeer: randomBeerActionCreator,
} = beerSlice.actions;

export default BeersReducer;
