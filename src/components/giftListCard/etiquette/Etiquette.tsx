interface EtiquetteProps {
  text: string;
}
function Etiquette({ text }: EtiquetteProps) {
  return (
    <li className="bg-green-700 px-4 mr-2 font-medium inline text-sm text-white rounded-2xl text-center mb-2">
      {text}
    </li>
  );
}

export default Etiquette;
