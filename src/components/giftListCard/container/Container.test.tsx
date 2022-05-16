import { render, screen } from "@testing-library/react";
import Container from "./Container";

describe("Given a Container component", () => {
  describe("When it's rendered passing in 2 components", () => {
    test("Then it should display them all", () => {
      const expectedLenght = 2;

      render(
        <Container
          items={
            <>
              <li>I am some text</li>
              <li>i am more text</li>
            </>
          }
        />
      );
      const foundItems = screen.getAllByRole("listitem");

      expect(foundItems.length).toBe(expectedLenght);
    });
  });
});
