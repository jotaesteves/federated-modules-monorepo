import React from 'react';
import { cn } from 'shared/lib/utils';
import type { ItemData } from '../../context/AssetsContext';
import { useAssets } from '../../context/AssetsContext';

interface CardAccordionItemProps {
  children: React.ReactNode;
  itemData?: ItemData;
}

export const CardAccordionItem: React.FC<CardAccordionItemProps> = ({ children, itemData }) => {
  const { activeItem, setActiveItem, updateBreadcrumbsForItem } = useAssets();
  const isActive = activeItem?.id === itemData?.id;

  const handleClick = () => {
    if (itemData) {
      // If clicking on the already active item, deactivate it
      if (isActive) {
        setActiveItem(null);
      } else {
        setActiveItem(itemData);
        updateBreadcrumbsForItem(itemData);
      }
    }
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        // Base sempre arredondado
        'relative px-4 py-2 flex items-center justify-between w-full border border-gray-100 transition-all duration-200 rounded-2xl cursor-pointer outline-none',
        // Pseudo-elemento base
        'before:content-[""] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0 before:bg-transparent before:transition-all before:duration-200 before:rounded-l-2xl',
        // Estados hover/active
        'hover:before:w-2 hover:before:bg-primary-500 hover:bg-primary-25',
        'active:before:w-2 active:before:bg-primary-400 active:bg-primary-50',
        'focus:before:w-2 focus:before:bg-primary-400 focus:outline-none',
        // Estado ativo
        isActive && 'before:w-2 before:bg-primary-400 bg-gray-100'
      )}
    >
      <div className="flex items-center justify-between w-full">{children}</div>
    </div>
  );
};
