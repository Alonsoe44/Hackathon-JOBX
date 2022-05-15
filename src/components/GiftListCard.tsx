import CardTitle from "./CardTitle";
import Container from "./Container";
import DescriptionLines from "./DescriptionLines";
import Etiquette from "./Etiquette";

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
    <button
      onClick={() => action()}
      className="min-w-[24rem]  m-4 h-40 justify-between border-gray-500 border rounded-md hover:bg-purple-200 hover:border-purple-800 p-5 flex flex-col active:scale-[0.99] "
    >
      <CardTitle text={title} />
      <DescriptionLines text={description} />
      <Container
        items={etiquettes.map((etiquette) => (
          <Etiquette key={etiquette} text={etiquette} />
        ))}
      />
    </button>
  );
}

export default GiftListCard;
