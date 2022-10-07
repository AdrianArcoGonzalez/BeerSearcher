import { mockBeers } from "../../mocks/mocks";
import BeersReducer, {
  initialBeersState,
  loadBeersActionCreator,
} from "./beersSlice";

describe("Given a beersReducer function", () => {
  describe("When it's invoked with an unkown action and the wrong state", () => {
    test("Then it should return the previous state", () => {
      const wrongState = undefined;
      const unkownAction = { type: "" };

      const beersReducerReturn = BeersReducer(wrongState, unkownAction);

      expect(beersReducerReturn).toStrictEqual(initialBeersState);
    });
  });

  describe("When it's invoked with the correct state and a loadBeers action", () => {
    test("Then it should return the new state with the new beers", () => {
      const beersReducerReturn = BeersReducer(
        initialBeersState,
        loadBeersActionCreator(mockBeers)
      );

      expect(beersReducerReturn.foundBeers).toStrictEqual(mockBeers);
    });
  });
});
