interface DescriptionLinesProps {
  text: string;
}
function DescriptionLines({ text }: DescriptionLinesProps) {
  return (
    <p className="break-words line-clamp-2 text-gray-800 text-left h-12 my-3">
      {text}
    </p>
  );
}

export default DescriptionLines;
