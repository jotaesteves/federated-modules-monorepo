import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface ItemData {
  id: string; // This will be a unique identifier combining type, category, and original id
  originalId: string; // The original ID from the data
  type: 'account' | 'deposit' | 'debit-card' | 'loan' | 'credit-card';
  category: 'actives' | 'passives';
  name: string;
  data: any; // The full data object for the item
}

// Helper function to create unique IDs
export const createUniqueId = (type: string, category: string, originalId: string): string => {
  return `${category}-${type}-${originalId}`;
};

interface AssetsContextType {
  activeItem: ItemData | null;
  setActiveItem: (item: ItemData | null) => void;
}

const AssetsContext = createContext<AssetsContextType | undefined>(undefined);

interface AssetsProviderProps {
  children: ReactNode;
}

export const AssetsProvider: React.FC<AssetsProviderProps> = ({ children }) => {
  const [activeItem, setActiveItem] = useState<ItemData | null>(null);

  return (
    <AssetsContext.Provider value={{ activeItem, setActiveItem }}>
      {children}
    </AssetsContext.Provider>
  );
};

export const useAssets = () => {
  const context = useContext(AssetsContext);
  if (context === undefined) {
    throw new Error('useAssets must be used within an AssetsProvider');
  }
  return context;
};
