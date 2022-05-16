import { render, screen } from "@testing-library/react";
import NoGiftListCardsPlaceholder from "./NoGiftListCardsPlaceholder";

describe("Given a NoGiftListCardsPlaceholder component", () => {
  describe("When it's rendered", () => {
    test("Then it should display the default text", () => {
      const theDefaultText =
        "It look's like you haven't created any gift list yet";
      render(<NoGiftListCardsPlaceholder />);

      const foundText = screen.getByRole("listitem");

      expect(foundText.textContent).toBe(theDefaultText);
    });
  });
});
