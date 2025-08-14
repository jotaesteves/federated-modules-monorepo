import React, { createContext, useContext, useState, type ReactNode } from 'react';

export interface ItemData {
  id: string; // This will be a unique identifier combining type, category, and original id
  originalId: string; // The original ID from the data
  type: 'calls' | 'sms-push' | 'emails' | 'complains' | 'incidents' | 'memos';
  category: 'communications' | 'occurrences';
  name: string;
  data: any;
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

const CommunicationsContext = createContext<CommunicationsContextType | undefined>(undefined);

interface CommunicationsProviderProps {
  children: ReactNode;
}

export const CommunicationsProvider: React.FC<CommunicationsProviderProps> = ({ children }) => {
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
    <CommunicationsContext.Provider
      value={{
        activeItem,
        setActiveItem,
        breadcrumbs,
        setBreadcrumbs,
        updateBreadcrumbsForItem,
      }}
    >
      {children}
    </CommunicationsContext.Provider>
  );
};

export const useCommunications = () => {
  const context = useContext(CommunicationsContext);
  if (context === undefined) {
    throw new Error('useCommunications must be used within a CommunicationsProvider');
  }
  return context;
};
