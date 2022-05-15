interface EtiquetteProps {
  text: string;
}
function Etiquette({ text }: EtiquetteProps) {
  return (
    <li className="bg-green-600 px-4 mr-2  inline text-sm text-white rounded-2xl text-center">
      {text}
    </li>
  );
}

export default Etiquette;
