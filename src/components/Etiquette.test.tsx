import { render, screen } from "@testing-library/react";

import Etiquette from "./Etiquette";

describe("Given an Etiquette component", () => {
  describe("When it's rendered with a word 'Nintendo'", () => {
    test("Then it should display that word", () => {
      const word = "Nintendo";
      render(<Etiquette text="Nintendo" />);

      const foundWord = screen.getByRole("listitem");

      expect(foundWord.textContent).toBe(word);
    });
  });
});
