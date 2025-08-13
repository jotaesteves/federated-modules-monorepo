import React from 'react';

interface CardAccordionHeaderProps {
  icon?: React.ReactNode;
  title: string;
  value?: string;
  currency?: string;
}

export const CardAccordionHeader: React.FC<CardAccordionHeaderProps> = ({
  icon,
  title,
  value,
  currency,
}) => {
  return (
    <div className="flex items-center justify-between w-full">
      <h4 className="text-base font-bold flex items-center gap-2">
        <span className="text-2xl">{icon}</span>
        {title}
      </h4>
      <p className="text-md font-bold">
        {value} <span className="text-xs font-normal text-gray-500">{currency}</span>
      </p>
    </div>
  );
};
