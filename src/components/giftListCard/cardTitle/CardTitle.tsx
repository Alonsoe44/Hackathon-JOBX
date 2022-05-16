interface CardtitleProps {
  text: string;
}
function CardTitle({ text }: CardtitleProps) {
  return <h3 className="text-xl font-semibold text-gray-900">{text}</h3>;
}

export default CardTitle;
