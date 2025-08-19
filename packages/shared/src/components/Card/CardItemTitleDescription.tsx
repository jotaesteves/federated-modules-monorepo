interface CardTitleDescriptionProps {
  title: string;
  text: string;
}

const CardTitleDescription: React.FC<CardTitleDescriptionProps> = ({ title, text }) => {
  return (
    <div className="text-gray-800">
      <span className="text-xs opacity-55 font-semibold">{title}</span>
      <p className="uppercase font-semibold">{text}</p>
    </div>
  );
};

export default CardTitleDescription;
