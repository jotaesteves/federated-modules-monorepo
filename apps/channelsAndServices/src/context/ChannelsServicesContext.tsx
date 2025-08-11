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

interface ChannelsServicesContextType {
  activeItem: ItemData | null;
  setActiveItem: (item: ItemData | null) => void;
}

const ChannelsServicesContext = createContext<ChannelsServicesContextType | undefined>(undefined);

interface ChannelsServicesContextProviderProps {
  children: ReactNode;
}

export const ChannelsServicesProvider: React.FC<ChannelsServicesContextProviderProps> = ({
  children,
}) => {
  const [activeItem, setActiveItem] = useState<ItemData | null>(null);

  return (
    <ChannelsServicesContext.Provider value={{ activeItem, setActiveItem }}>
      {children}
    </ChannelsServicesContext.Provider>
  );
};

export const useChannelsServices = () => {
  const context = useContext(ChannelsServicesContext);
  if (context === undefined) {
    throw new Error('useChannelsServices must be used within a ChannelsServicesProvider');
  }
  return context;
};
