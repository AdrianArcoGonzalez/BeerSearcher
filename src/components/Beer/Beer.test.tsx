import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockBeer1 } from "../../mocks/mocks";
import { store } from "../../store/store";
import Beer from "./Beer";

const mockUseBeers = {
  getRandomBeer: jest.fn().mockReturnValue(mockBeer1),
};
jest.mock("../../hooks/useBeerApi", () => () => mockUseBeers);

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}
const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

describe("Given a Beer comonent", () => {
  describe("When it's instantiated with a mockbeer", () => {
    test("Then it should show the title of the beer", () => {
      render(
        <Wrapper>
          <Beer />
        </Wrapper>
      );
      const title = screen.getByRole("heading");

      expect(title).toBeInTheDocument();
    });

    test("Then the src and the alt text should match with the beer", () => {
      render(
        <Wrapper>
          <Beer />
        </Wrapper>
      );
      const image = screen.getByRole("img");

      expect(image).toBeInTheDocument();
    });
  });
});
