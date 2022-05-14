import Etiquette from "./Etiquette";

interface GiftListCardProps {
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
      className="min-w-[24rem]  m-4 h-36 justify-between border-gray-500 border rounded-md hover:bg-purple-200 hover:border-purple-800 p-5 flex flex-col active:scale-[0.99] "
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{description}</p>
      <ul className=" flex flex-wrap">
        {etiquettes.map((etiquette) => (
          <Etiquette key={etiquette} text={etiquette} />
        ))}
      </ul>
    </button>
  );
}

export default GiftListCard;
