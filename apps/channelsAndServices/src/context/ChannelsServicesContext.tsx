import type { ReactNode } from 'react';
import React, { createContext, useContext, useState } from 'react';

export interface ItemData {
  id: string; // This will be a unique identifier combining type, category, and original id
  originalId: string; // The original ID from the data
  type: 'mobile' | 'internet' | 'millennium-line' | 'insurance' | 'extracts';
  category: 'channels' | 'other-services';
  name: string;
  data: any; // The full data object for the item
}

// Helper function to create unique IDs
export const createUniqueId = (type: string, category: string, originalId: string): string => {
  return `${category}-${type}-${originalId}`;
};

export interface BreadCrumbItem {
  label: string;
}
export interface BreadcrumbState {
  items: BreadCrumbItem[];
}

interface ChannelsServicesContextType {
  activeItem: ItemData | null;
  setActiveItem: (item: ItemData | null) => void;
  breadcrumbs: BreadcrumbState;
  setBreadcrumbs: (breadcrumbs: BreadcrumbState) => void;
  updateBreadcrumbsForItem: (item: ItemData) => void;
}

const ChannelsServicesContext = createContext<ChannelsServicesContextType | undefined>(undefined);

interface ChannelsServicesContextProviderProps {
  children: ReactNode;
}

export const ChannelsServicesProvider: React.FC<ChannelsServicesContextProviderProps> = ({
  children,
}) => {
  const [activeItem, setActiveItem] = useState<ItemData | null>(null);
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbState>({ items: [] });

  const getCategoryDisplayName = (category: ItemData['category']) => {
    const categoryMap: Record<ItemData['category'], string> = {
      channels: 'Canais',
      'other-services': 'Outros Serviços',
    };
    return categoryMap[category];
  };

  const getTypeDisplayName = (type: ItemData['type']) => {
    const typeMap: Record<ItemData['type'], string> = {
      mobile: 'Mobile',
      internet: 'Internet Banking',
      'millennium-line': 'Linha millennium bim',
      insurance: 'Seguros',
      extracts: 'Extratos',
    };
    return typeMap[type];
  };

  const updateBreadcrumbsForItem = (item: ItemData) => {
    const newBreadcrumbs: BreadCrumbItem[] = [
      { label: getCategoryDisplayName(item.category) },
      { label: getTypeDisplayName(item.type) },
    ];
    setBreadcrumbs({ items: newBreadcrumbs });
  };

  return (
    <ChannelsServicesContext.Provider
      value={{ activeItem, setActiveItem, breadcrumbs, setBreadcrumbs, updateBreadcrumbsForItem }}
    >
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
