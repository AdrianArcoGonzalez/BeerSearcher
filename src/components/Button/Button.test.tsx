import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Given a Button component", () => {
  describe("When it's instantiated and it receive a click", () => {
    test("Then it's should call the actionOnClick function given", async () => {
      const actionClick = jest.fn();
      const text = "test button";

      render(<Button text={text} actionOnClick={actionClick} />);
      const button = screen.getByRole("button");
      await userEvent.click(button);

      expect(actionClick).toHaveBeenCalled();
      expect(button).toHaveTextContent(text);
    });
  });
});
