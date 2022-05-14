interface DescriptionLinesProps {
  text: string;
}
function DescriptionLines({ text }: DescriptionLinesProps) {
  return (
    <p className="break-words line-clamp-2 text-gray-800 text-left">{text}</p>
  );
}

export default DescriptionLines;
