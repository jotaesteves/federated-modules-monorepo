import { createContext, useContext, useState, type ReactNode, type FC } from 'react';

export interface ItemData {
  id: string; // This will be a unique identifier combining type, category, and original id
  originalId: string; // The original ID from the data
  type: 'calls' | 'sms-push' | 'emails' | 'complains' | 'incidents' | 'memos';
  category: 'communications' | 'occurrences';
  name?: string; // Display name for the item
  data?: any; // The actual data object for the item
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
  openItemDetails: (item: ItemData) => void;
  closeItemDetails: () => void;
  isItemDetailsOpen: boolean;
}

const HistoryInteractionsContext = createContext<CommunicationsContextType | undefined>(undefined);

interface HistoryInteractionsProviderProps {
  children: ReactNode;
}

export const HistoryInteractionsProvider: FC<HistoryInteractionsProviderProps> = ({ children }) => {
  const [activeItem, setActiveItem] = useState<ItemData | null>(null);
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbState>({ items: [] });
  const [isItemDetailsOpen, setIsItemDetailsOpen] = useState<boolean>(false);

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

    // Add item name if available
    if (item.name) {
      newBreadcrumbs.push({ label: item.name });
    }

    setBreadcrumbs({ items: newBreadcrumbs });
  };

  const openItemDetails = (item: ItemData) => {
    setActiveItem(item);
    updateBreadcrumbsForItem(item);
    setIsItemDetailsOpen(true);
  };

  const closeItemDetails = () => {
    setActiveItem(null);
    setBreadcrumbs({ items: [] });
    setIsItemDetailsOpen(false);
  };

  return (
    <HistoryInteractionsContext.Provider
      value={{
        activeItem,
        setActiveItem,
        breadcrumbs,
        setBreadcrumbs,
        updateBreadcrumbsForItem,
        openItemDetails,
        closeItemDetails,
        isItemDetailsOpen,
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
