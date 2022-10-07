import { Beer } from "../../interfaces/interfaces";
import { mockBeers } from "../../mocks/mocks";
import BeersReducer, { loadBeersActionCreator } from "./beersSlice";

describe("Given a beersReducer function", () => {
  const previousState: Beer[] = [];
  describe("When it's invoked with an unkown action and the wrong state", () => {
    test("Then it should return the previous state", () => {
      const wrongState = undefined;
      const unkownAction = { type: "" };

      const beersReducerReturn = BeersReducer(wrongState, unkownAction);

      expect(beersReducerReturn).toStrictEqual(previousState);
    });
  });

  describe("When it's invoked with the correct state and a loadBeers action", () => {
    test("Then it should return the new state with the new beers", () => {
      const beersReducerReturn = BeersReducer(
        previousState,
        loadBeersActionCreator(mockBeers)
      );

      expect(beersReducerReturn).toStrictEqual(mockBeers);
    });
  });
});
