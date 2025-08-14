import { createContext, useContext, useState, type ReactNode, type FC } from 'react';

export interface ItemData {
  id: string; // This will be a unique identifier combining type, category, and original id
  originalId: string; // The original ID from the data
  type: 'calls' | 'sms-push' | 'emails' | 'complains' | 'incidents' | 'memos';
  category: 'communications' | 'occurrences';
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

interface CommunicationsContextType {
  activeItem: ItemData | null;
  setActiveItem: (item: ItemData | null) => void;
  breadcrumbs: BreadcrumbState;
  setBreadcrumbs: (breadcrumbs: BreadcrumbState) => void;
  updateBreadcrumbsForItem: (item: ItemData) => void;
}

const HistoryInteractionsContext = createContext<CommunicationsContextType | undefined>(undefined);

interface HistoryInteractionsProviderProps {
  children: ReactNode;
}

export const HistoryInteractionsProvider: FC<HistoryInteractionsProviderProps> = ({ children }) => {
  const [activeItem, setActiveItem] = useState<ItemData | null>(null);
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbState>({ items: [] });

  const getCategoryDisplayName = (category: ItemData['category']) => {
    const categoryMap: Record<ItemData['category'], string> = {
      communications: 'Comunicações',
      occurrences: 'Ocorrências',
    };
    return categoryMap[category];
  };

  const getTypeDisplayName = (type: ItemData['type']) => {
    const typeMap: Record<ItemData['type'], string> = {
      calls: 'Chamadas',
      'sms-push': 'SMS/Push',
      emails: 'E-mails',
      complains: 'Reclamações',
      incidents: 'Incidentes',
      memos: 'Memos',
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
    <HistoryInteractionsContext.Provider
      value={{
        activeItem,
        setActiveItem,
        breadcrumbs,
        setBreadcrumbs,
        updateBreadcrumbsForItem,
      }}
    >
      {children}
    </HistoryInteractionsContext.Provider>
  );
};

export const useHistoryInteractions = () => {
  const context = useContext(HistoryInteractionsContext);
  if (context === undefined) {
    throw new Error('useHistoryInteractions must be used within a HistoryInteractionsProvider');
  }
  return context;
};
