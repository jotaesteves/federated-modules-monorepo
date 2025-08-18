import React from 'react';
import Icon from 'shared/components/Icon';

interface CardItemIncidentsProps {
  type: string;
  title: string;
  link: string;
}

const CardItemIncidents: React.FC<CardItemIncidentsProps> = ({ type, title, link }) => {
  return (
    <div className="flex gap-2 p-2">
      <Icon type="exclamation" className="bg-red" rounded size="sm" />
      <div className="flex flex-col gap-1">
        <span className="font-bold text-gray-800 leading-[100%]">22-04-2025 | {type}</span>
        <p className="text-gray-800 font-medium leading-[100%]">{title}</p>
      </div>
      <Icon type="chevronRight" className="ml-auto" />
    </div>
  );
};

export default CardItemIncidents;
