import GiftListCardInterface from "../../interfaces/GiftListCardInterface";
import GiftListCard from "../giftListCard/GiftListCard";
import NoGiftListCardsPlaceholder from "./noGiftListCardsPlaceholder/NoGiftListCardsPlaceholder";
import SectionTitle from "./sectionTitle/SectionTitle";
interface GiftListSectionProps {
  cardsData: GiftListCardInterface[];
}

export const actionPlaceholder = () => {
  console.log("click");
};

function GiftListSection({ cardsData }: GiftListSectionProps) {
  return (
    <article className="shadow sm:p-5 mb-5">
      <SectionTitle text="Gift lists 🎁" />
      <ul className="flex flex-wrap lg:flex-nowrap lg:overflow-x-scroll ">
        {cardsData.length ? (
          cardsData.map((giftListCardData) => (
            <GiftListCard
              {...giftListCardData}
              action={actionPlaceholder}
              key={giftListCardData.title + giftListCardData.description}
            />
          ))
        ) : (
          <NoGiftListCardsPlaceholder />
        )}
      </ul>
    </article>
  );
}

export default GiftListSection;
