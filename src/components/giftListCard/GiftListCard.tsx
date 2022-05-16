import CardTitle from "./cardTitle/CardTitle";
import Container from "./container/Container";
import DescriptionLines from "./descriptionLines/DescriptionLines";
import Etiquette from "./etiquette/Etiquette";

export interface GiftListCardProps {
  title: string;
  description: string;
  etiquettes: string[];
  action: () => void;
}
function GiftListCard({
  title,
  description,
  etiquettes,
  action,
}: GiftListCardProps) {
  return (
    <li className="w-full lg:min-w-[24rem] md:max-w-[24rem] m-4 border-gray-500 border rounded-md hover:bg-purple-200 hover:border-purple-800 p-5 flex flex-col active:scale-[0.99] ">
      <button onClick={() => action()} className="text-left">
        <CardTitle text={title} />
        <DescriptionLines text={description} />
        <Container
          items={etiquettes.map((etiquette) => (
            <Etiquette key={etiquette} text={etiquette} />
          ))}
        />
      </button>
    </li>
  );
}

export default GiftListCard;
