import type React from 'react';
import { CardAccordion, Icon } from 'shared/components';
import type { ItemData } from '../../../../../context/HistoryInteractionsContext';
import { CardAccordionHeader } from '../../../../CardAccordionHeader/CardAccordionHeader';
import { CardAccordionItem } from '../../../../CardAccordionItem/CardAccordionItem';
import { useOccurrenceConfig } from '../../hooks/useOccurrenceConfig';
import type {
  ComplainsData,
  IncidentsData,
  MemosData,
  OccurrenceType
} from '../../types/occurrence.types';
import { ComplaintCard } from '../ui/ComplaintCard';
import { IncidentCard } from '../ui/IncidentCard';
import { MemoCard } from '../ui/MemoCard';

interface OccurrenceSectionProps {
  type: OccurrenceType;
  items: ItemData[];
  data: ComplainsData[] | IncidentsData[] | MemosData[];
}

export const OccurrenceSection: React.FC<OccurrenceSectionProps> = ({ type, items, data }) => {
  const { getConfigByType } = useOccurrenceConfig();
  const config = getConfigByType(type);

  const renderCard = (_item: ItemData, originalData: ComplainsData | IncidentsData | MemosData) => {
    switch (type) {
      case 'complains':
        return <ComplaintCard complaint={originalData as ComplainsData} />;
      case 'incidents':
        return <IncidentCard incident={originalData as IncidentsData} />;
      case 'memos':
        return <MemoCard memo={originalData as MemosData} />;
      default:
        return null;
    }
  };

  return (
    <CardAccordion
      header={
        <CardAccordionHeader
          icon={<Icon type={config.iconType} className="bg-orange-500" />}
          title={config.title}
        />
      }
    >
      {items.map((item, index) => {
        const originalData = data[index];
        const key = `${type}-${item.originalId}`;

        return (
          <CardAccordionItem key={key} itemData={item}>
            {renderCard(item, originalData)}
          </CardAccordionItem>
        );
      })}
    </CardAccordion>
  );
};
