import { useMemo } from 'react';
import type { ItemData } from '../../../../context/HistoryInteractionsContext';
import { createUniqueId } from '../../../../context/HistoryInteractionsContext';
import type {
  ComplainsData,
  IncidentsData,
  MemosData,
  OccurrenceType,
} from '../types/occurrence.types';
import { generateMemoContent } from '../utils/occurrence.utils';

interface UseOccurrenceDataProps {
  complains?: ComplainsData[];
  incidents?: IncidentsData[];
  memos?: MemosData[];
}

interface UseOccurrenceDataReturn {
  complainsItems: ItemData[];
  incidentsItems: ItemData[];
  memosItems: ItemData[];
}

export const useOccurrenceData = ({
  complains = [],
  incidents = [],
  memos = [],
}: UseOccurrenceDataProps): UseOccurrenceDataReturn => {
  const complainsItems = useMemo(
    () =>
      complains.map(
        (complain): ItemData => ({
          id: createUniqueId('complains', 'occurrences', complain.id),
          originalId: complain.id,
          type: 'complains' as OccurrenceType,
          category: 'occurrences',
          name: '',
          data: {
            ...complain,
          },
        })
      ),
    [complains]
  );

  const incidentsItems = useMemo(
    () =>
      incidents.map(
        (incident): ItemData => ({
          id: createUniqueId('incidents', 'occurrences', incident.id),
          originalId: incident.id,
          type: 'incidents' as OccurrenceType,
          category: 'occurrences',
          name: '',
          data: {
            ...incident,
          },
        })
      ),
    [incidents]
  );

  const memosItems = useMemo(
    () =>
      memos.map(
        (memo): ItemData => ({
          id: createUniqueId('memos', 'occurrences', memo.id),
          originalId: memo.id,
          type: 'memos' as OccurrenceType,
          category: 'occurrences',
          name: `Memo - ${memo.name}`,
          data: {
            ...memo,
            subject: `Memo - ${memo.name}`,
            content: generateMemoContent(memo.name, memo.initialValue, memo.currency, memo.status),
            author: 'Sistema',
            category: 'Seguros',
            priority: 'normal',
            status: 'sent',
            createdDate: '2024-01-17',
          },
        })
      ),
    [memos]
  );

  return {
    complainsItems,
    incidentsItems,
    memosItems,
  };
};
