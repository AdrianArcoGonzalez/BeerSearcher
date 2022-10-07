import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Beer } from "../../interfaces/interfaces";

const initialBeersState: Beer[] = [];

export const beerSlice = createSlice({
  name: "beers",
  initialState: initialBeersState,
  reducers: {
    loadBeers: (state, action: PayloadAction<Beer[]>) => [...action.payload],
  },
});

const BeersReducer = beerSlice.reducer;
export const { loadBeers: loadBeersActionCreator } = beerSlice.actions;

export default BeersReducer;
