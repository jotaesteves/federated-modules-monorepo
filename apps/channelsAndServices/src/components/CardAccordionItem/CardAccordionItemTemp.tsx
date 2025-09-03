import type React from 'react';
import { cn } from 'shared/lib/utils';

interface CardAccordionItemProps {
  children: React.ReactNode;
  itemData?: unknown; // Temporarily simplified
}

export const CardAccordionItem: React.FC<CardAccordionItemProps> = ({ children, itemData }) => {
  const handleClick = () => {
    // Temporarily disabled context logic
    console.log('Clicked item:', itemData);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        'px-4 py-2 flex items-center justify-between w-full rounded-lg border border-gray-100 transition-all duration-200 hover:border-l-primary-400 hover:border-l-8 active:border-l-primary-500 active:border-l-8 active:bg-primary-50 active:shadow-sm active:scale-[0.98] focus:border-l-primary-500 focus:border-l-4 focus:outline-none cursor-pointer'
      )}
    >
      <div className="flex items-center justify-between w-full">{children}</div>
    </button>
  );
};
