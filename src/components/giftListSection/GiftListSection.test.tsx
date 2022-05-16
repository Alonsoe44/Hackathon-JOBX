import { render } from "@testing-library/react";
import { giftListCardData } from "../../utils/apiData";
import GiftListSection, { actionPlaceholder } from "./GiftListSection";

describe("Given a GiftListSection component", () => {
  describe("When it receives a group of gift list card data", () => {
    test("Then it should display the data in the cards", () => {
      render(<GiftListSection cardsData={giftListCardData} />);
    });
  });
});

describe("Given an actionPlaceholder function", () => {
  describe("When it's instanciated", () => {
    test("It should log in the console 'click", () => {
      const logSpy = jest.spyOn(console, "log");
      const expectedText = "click";

      actionPlaceholder();

      expect(logSpy).toHaveBeenCalledWith(expectedText);
    });
  });
});
