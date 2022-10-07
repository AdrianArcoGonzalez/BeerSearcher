import { render, screen } from "@testing-library/react";
import { mockBeer1 } from "../../mocks/mocks";
import Beer from "./Beer";

describe("Given a Beer comonent", () => {
  describe("When it's instantiated with a mockbeer", () => {
    test("Then it should show the title of the beer", () => {
      render(<Beer />);
      const title = screen.getByRole("heading");

      expect(title).toHaveTextContent(mockBeer1.name);
    });

    test("Then the src and the alt text should match with the beer", () => {
      render(<Beer />);
      const image = screen.getByRole("img");

      expect((image as HTMLImageElement).src).toBe(mockBeer1.image_url);
      expect((image as HTMLImageElement).alt).toBe(mockBeer1.name);
    });

    test("Then it should show description of the beer", () => {
      render(<Beer />);
      const description = screen.getByText(mockBeer1.description);

      expect(description).toBeInTheDocument();
    });
  });
});
