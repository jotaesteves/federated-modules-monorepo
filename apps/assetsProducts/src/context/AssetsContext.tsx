import type { ReactNode } from 'react';
import React, { createContext, useContext, useState } from 'react';

export interface ItemData {
  id: string; // This will be a unique identifier combining type, category, and original id
  originalId: string; // The original ID from the data
  type: 'account' | 'deposit' | 'debit-card' | 'loan' | 'credit-card';
  category: 'actives' | 'passives';
  name: string;
  data: any; // The full data object for the item
}

export interface BreadCrumbItem {
  label: string;
}

export interface BreadcrumbState {
  items: BreadCrumbItem[];
}

// Helper function to create unique IDs
export const createUniqueId = (type: string, category: string, originalId: string): string => {
  return `${category}-${type}-${originalId}`;
};

interface AssetsContextType {
  activeItem: ItemData | null;
  setActiveItem: (item: ItemData | null) => void;
  breadcrumbs: BreadcrumbState;
  setBreadcrumbs: (breadcrumbs: BreadcrumbState) => void;
  updateBreadcrumbsForItem: (item: ItemData) => void;
}

const AssetsContext = createContext<AssetsContextType | undefined>(undefined);

interface AssetsProviderProps {
  children: ReactNode;
}

export const AssetsProvider: React.FC<AssetsProviderProps> = ({ children }) => {
  const [activeItem, setActiveItem] = useState<ItemData | null>(null);
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbState>({ items: [] });

  const getCategoryDisplayName = (category: ItemData['category']) => {
    const categoryMap: Record<ItemData['category'], string> = {
      actives: 'Ativos',
      passives: 'Passivos',
    };
    return categoryMap[category];
  };

  const getTypeDisplayName = (type: ItemData['type']) => {
    const typeMap: Record<ItemData['type'], string> = {
      account: 'Conta à Ordem',
      deposit: 'Depósito a Prazo',
      'debit-card': 'Cartão de Débito',
      loan: 'Empréstimo',
      'credit-card': 'Cartão de Crédito',
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
    <AssetsContext.Provider
      value={{
        activeItem,
        setActiveItem,
        breadcrumbs,
        setBreadcrumbs,
        updateBreadcrumbsForItem,
      }}
    >
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
