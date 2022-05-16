import { render, screen } from "@testing-library/react";
import GiftListCardInterface from "../../interfaces/GiftListCardInterface";
import GiftListSection, { actionPlaceholder } from "./GiftListSection";
import { faker } from "@faker-js/faker";

describe("Given a GiftListSection component", () => {
  describe("When it receives a group of gift list card data", () => {
    const cardsData: GiftListCardInterface[] = [
      {
        title: faker.company.bs(),
        description: faker.lorem.lines(1),
        etiquettes: [faker.word.noun(), faker.word.noun(), faker.word.noun()],
      },
      {
        title: faker.company.bs(),
        description: faker.lorem.lines(1),
        etiquettes: [faker.word.noun(), faker.word.noun(), faker.word.noun()],
      },
      {
        title: faker.company.bs(),
        description: faker.lorem.lines(1),
        etiquettes: [
          faker.word.noun(),
          faker.word.noun(),
          faker.word.noun(),
          faker.word.noun(),
        ],
      },
    ];
    test("Then it should display all the headings in cards", () => {
      render(<GiftListSection cardsData={cardsData} />);
      const expectedHeadings = [
        "Gift lists 🎁",
        ...cardsData.map((cardData) => cardData.title),
      ];

      const foundHeadings = screen.getAllByRole("heading");

      expect(
        foundHeadings.map((foundHeading) => foundHeading.textContent)
      ).toEqual(expectedHeadings);
    });

    test("Then it should display all the descriptions in the cards", () => {
      render(<GiftListSection cardsData={cardsData} />);

      const foundDescription = screen.getByText(cardsData[0].description);
      const foundDescription2 = screen.getByText(cardsData[1].description);
      const foundDescription3 = screen.getByText(cardsData[2].description);

      expect(foundDescription).toBeInTheDocument();
      expect(foundDescription2).toBeInTheDocument();
      expect(foundDescription3).toBeInTheDocument();
    });

    test("Then it should display the etiquettes in the cards", () => {
      render(<GiftListSection cardsData={cardsData} />);
      const expectedEtiquettes = [
        ...cardsData[0].etiquettes,
        ...cardsData[1].etiquettes,
        ...cardsData[2].etiquettes,
      ];

      const foundListItems = screen.getAllByRole("listitem");
      const foundEtiquettes = foundListItems
        .map((foundEtiquette) => foundEtiquette.textContent)
        .filter((foundListItem) => (foundListItem as string).length < 15);

      expect(foundEtiquettes).toEqual(expectedEtiquettes);
    });
  });

  describe("When it's rendered and you dont have gift lists", () => {
    test("Then it should display the NoGiftListCardsPlaceholder component with the 'no cards' text", () => {
      render(<GiftListSection cardsData={[]} />);
      const noCardsText =
        "It look's like you haven't created any gift list yet";

      const foundText = screen.getByRole("listitem");

      expect(foundText).toBeInTheDocument();
      expect(foundText.textContent).toBe(noCardsText);
    });
  });
});

describe("Given an actionPlaceholder function", () => {
  describe("When it's instanciated", () => {
    test("It should log in the console 'click'", () => {
      const logSpy = jest.spyOn(console, "log");
      const expectedText = "click";

      actionPlaceholder();

      expect(logSpy).toHaveBeenCalledWith(expectedText);
    });
  });
});
