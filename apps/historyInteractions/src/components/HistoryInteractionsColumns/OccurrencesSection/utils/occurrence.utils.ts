import type { BadgeVariant, OccurrenceConfig, OccurrenceType } from '../types/occurrence.types';

/**
 * Maps badge status to variant and label
 */
export const getBadgeConfig = (status: string, type: OccurrenceType): BadgeVariant => {
  switch (type) {
    case 'complains':
      return {
        variant: status === 'SUBMITED' ? 'blocked' : 'active',
        label: status === 'SUBMITED' ? 'SUBMETIDO' : 'COMPLETA',
      };
    case 'incidents':
      return {
        variant: status as 'blocked' | 'active',
        label: status === 'active' ? 'ALTA' : 'BAIXA',
      };
    case 'memos':
      return {
        variant: 'active',
        label: 'NORMAL',
      };
    default:
      return {
        variant: 'active',
        label: 'DEFAULT',
      };
  }
};

/**
 * Gets configuration for each occurrence section
 */
export const getOccurrenceConfig = (): Record<OccurrenceType, OccurrenceConfig> => ({
  complains: {
    type: 'complains',
    title: 'Reclamações',
    iconType: 'complains' as const,
    iconClassName: 'bg-orange-500',
  },
  incidents: {
    type: 'incidents',
    title: 'Incidentes',
    iconType: 'alertFolder' as const,
    iconClassName: 'bg-orange-500',
  },
  memos: {
    type: 'memos',
    title: 'Memos',
    iconType: 'packageWarning' as const,
    iconClassName: 'bg-orange-500',
  },
});

/**
 * Formats currency display
 */
export const formatCurrency = (value: string, currency: string = 'MZN'): string => {
  return `${value} ${currency}`;
};

/**
 * Generates memo content for ItemData
 */
export const generateMemoContent = (
  name: string,
  initialValue: string,
  currency: string,
  status: string
): string => {
  return `Memo interno relacionado a ${name}. Valor inicial: ${initialValue} ${currency}. Status da conta: ${status}.`;
};
