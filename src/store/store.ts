import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import BeersReducer from "./slices/beersSlice";
export const store = configureStore({
  reducer: { beers: BeersReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
