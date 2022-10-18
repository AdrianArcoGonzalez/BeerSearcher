import { createSlice } from "@reduxjs/toolkit";

export interface InitialUiState {
  buttonDisabled: boolean;
}

export const initialUiState: InitialUiState = {
  buttonDisabled: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    disableButton: (state: InitialUiState) => ({
      ...state,
      buttonDisabled: !state.buttonDisabled,
    }),
  },
});

const UiReducer = uiSlice.reducer;
export const { disableButton: DisableButtonActionCreator } = uiSlice.actions;

export default UiReducer;
