interface GiftListCardProps {
  title: string;
  description: string;
  etiquettes: string[];
}
function GiftListCard({ title, description, etiquettes }: GiftListCardProps) {
  return (
    <div className="sm:w-80 h-40 justify-around border-gray-500 border rounded-md hover:bg-purple-200 hover:border-purple-800 p-3 flex flex-col text-bold">
      <h1 className="text-xl">{title}</h1>
      <p>{description}</p>
      <ul className=" flex flex-wrap">
        {etiquettes.map((etiquette) => (
          <li className="bg-green-600 px-4 mx-2  text-sm text-white rounded-2xl text-center">
            {etiquette}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GiftListCard;
