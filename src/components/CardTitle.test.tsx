import { render, screen } from "@testing-library/react";
import CardTitle from "./CardTitle";

describe("Give a CarTitle component", () => {
  describe("When it's rendered passing 'Amazing super title' text", () => {
    test("Then it should display a Heading with that text", () => {
      render(<CardTitle text="Amazing super title" />);

      const foundTitle = screen.getByRole("heading", {
        name: /Amazing super title/i,
      });

      expect(foundTitle).toBeInTheDocument();
    });
  });
});
