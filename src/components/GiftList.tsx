interface GiftListCardProps {
  title: string;
  description: string;
  etiquettes: string[];
}
function GiftListCard({ title, description, etiquettes }: GiftListCardProps) {
  return (
    <div className="min-w-[24rem]  m-4 h-36 justify-between border-gray-500 border rounded-md hover:bg-purple-200 hover:border-purple-800 p-5 flex flex-col ">
      <h1 className="text-xl font-semibold">{title}</h1>
      <p>{description}</p>
      <ul className=" flex flex-wrap">
        {etiquettes.map((etiquette) => (
          <li
            key={etiquette}
            className="bg-green-600 px-4 mr-2  text-sm text-white rounded-2xl text-center"
          >
            {etiquette}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GiftListCard;
