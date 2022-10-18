import UiReducer, {
  initialUiState,
  toggleButtonActionCreator,
} from "./uiSlice";

describe("Given a uiReducer function", () => {
  describe("When it's invoked with an unkown action and the wrong state", () => {
    test("Then it should return the previous state", () => {
      const wrongState = undefined;
      const unkownAction = { type: "" };

      const uiReducerReturn = UiReducer(wrongState, unkownAction);

      expect(uiReducerReturn).toStrictEqual(initialUiState);
    });

    describe("When it's invoked with a toggleButtonActionCreator", () => {
      test("Then it should return the state togled", () => {
        const initialState = initialUiState;
        const expectedResult = { buttonDisabled: true };
        const uiReducerReturn = UiReducer(
          initialState,
          toggleButtonActionCreator
        );

        expect(uiReducerReturn).toEqual(expectedResult);
      });
    });
  });
});
