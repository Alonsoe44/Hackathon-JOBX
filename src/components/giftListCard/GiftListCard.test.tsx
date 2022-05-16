import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GiftListCard, { GiftListCardProps } from "./GiftListCard";

describe("Given a GiftListCard component", () => {
  describe("When it's rendered passing in a title a description and etiquettes", () => {
    test("Then it should display the same title, description and etiquettes", () => {
      const GiftListCardProps: GiftListCardProps = {
        action: () => {
          console.log("Hellow world");
        },
        description: "I am a quick description to this card",
        etiquettes: ["fun", "christmas", "happines"],
        title: "Super Happy Card",
      };
      render(<GiftListCard {...GiftListCardProps} />);
      const expectedEtiquettesTexts = ["fun", "christmas", "happines"];

      const foundTitle = screen.getByRole("heading", {
        name: /Super Happy Card/i,
      });
      const foundDescription = screen.getByText(
        "I am a quick description to this card"
      );
      const foundEtiquettes = screen.getAllByRole("listitem");

      expect(foundTitle).toBeInTheDocument();
      expect(foundDescription).toBeInTheDocument();
      expect(
        foundEtiquettes.map((foundEtiquette) => foundEtiquette.textContent)
      ).toEqual(expectedEtiquettesTexts);
    });
  });

  describe("When it's rendered passing in an action", () => {
    test("Then when clicked it should do that action", async () => {
      const mockAction = jest.fn();
      const GiftListCardProps: GiftListCardProps = {
        action: () => mockAction(),
        description: "I am a quick description to this card",
        etiquettes: ["fun", "christmas", "happines"],
        title: "Super Happy Card",
      };
      render(<GiftListCard {...GiftListCardProps} />);

      const foundGiftListCard = screen.getByRole("button");
      userEvent.click(foundGiftListCard);

      expect(mockAction).toHaveBeenCalled();
    });
  });
});
