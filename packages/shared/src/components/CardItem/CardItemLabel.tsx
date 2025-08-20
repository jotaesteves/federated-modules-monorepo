interface CardItemLabelProps {
  title: string;
  text: string;
}

const CardItemLabel: React.FC<CardItemLabelProps> = ({ title, text }) => {
  return (
    <div className="text-gray-800">
      <span className="text-xs opacity-55 font-semibold">{title}</span>
      <p className="uppercase font-semibold">{text}</p>
    </div>
  );
};

export default CardItemLabel;
