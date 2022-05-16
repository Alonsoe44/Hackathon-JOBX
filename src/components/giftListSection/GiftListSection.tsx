import GiftListCardInterface from "../../interfaces/GiftListCardInterface";
import GiftListCard from "../giftListCard/GiftListCard";
import SectionTitle from "./sectionTitle/SectionTitle";
interface GiftListSectionProps {
  cardsData: GiftListCardInterface[];
}

export const actionPlaceholder = () => {
  console.log("click");
};

function GiftListSection({ cardsData }: GiftListSectionProps) {
  return (
    <article className="shadow sm:p-5">
      <SectionTitle text="Gift list" />
      <ul className="flex flex-wrap lg:flex-nowrap lg:overflow-x-scroll ">
        {cardsData.map((giftListCardData) => (
          <li key={giftListCardData.title + giftListCardData.description}>
            <GiftListCard {...giftListCardData} action={actionPlaceholder} />
          </li>
        ))}
      </ul>
    </article>
  );
}

export default GiftListSection;
