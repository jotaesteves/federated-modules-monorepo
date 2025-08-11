import React, { useState } from 'react';
import { cn } from 'shared/lib/utils';

interface CardAccordionItemProps {
  children: React.ReactNode;
}

export const CardAccordionItem: React.FC<CardAccordionItemProps> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        'px-4 py-2 flex items-center justify-between w-full rounded-lg border border-gray-300 transition-all duration-200 hover:border-l-primary-400 hover:border-l-8 active:border-l-primary-500 active:border-l-8 active:bg-primary-50 active:shadow-sm active:scale-[0.98] focus:border-l-primary-500 focus:border-l-4 focus:outline-none cursor-pointer',
        isActive && 'border-l-primary-500 bg-gray-100 border-l-8 shadow-sm'
      )}
    >
      <div className="flex items-center justify-between w-full">{children}</div>
    </div>
  );
};
