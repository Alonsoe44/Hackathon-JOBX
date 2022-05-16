import { render, screen } from "@testing-library/react";
import SectionTitle from "./SectionTitle";

describe("Given a SectionTitle component", () => {
  describe("When it's rendered passing in a 'Happy New Year' text", () => {
    test("Then it should display a heading with that same text", () => {
      render(<SectionTitle text="Happy New Year" />);

      const foundedHeading = screen.getByRole("heading", {
        name: /Happy New year/i,
      });

      expect(foundedHeading).toBeInTheDocument();
    });
  });
});
