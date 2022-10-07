import { mockBeer1, mockBeers } from "../../mocks/mocks";
import BeersReducer, {
  initialBeersState,
  loadBeersActionCreator,
  randomBeerActionCreator,
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

  describe("When it's invoked with the correct state and a randomBeer action", () => {
    test("Then it should return the new state with the new beer", () => {
      const beersReducerReturn = BeersReducer(
        initialBeersState,
        randomBeerActionCreator(mockBeer1)
      );

      expect(beersReducerReturn.randomBeer).toStrictEqual(mockBeer1);
    });
  });
});
