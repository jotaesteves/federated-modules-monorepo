import type React from 'react';
import { CardAccordion, Icon } from 'shared/components';
import type { ItemData } from '../../../../../context/HistoryInteractionsContext';
import { CardAccordionHeader } from '../../../../CardAccordionHeader/CardAccordionHeader';
import { CardAccordionItem } from '../../../../CardAccordionItem/CardAccordionItem';
import { useCommunicationConfig } from '../../hooks/useCommunicationConfig';
import type {
  CallData,
  CommunicationType,
  EmailData,
  SmsData
} from '../../types/communication.types';
import { CallCard } from '../ui/CallCard';
import { EmailCard } from '../ui/EmailCard';
import { SmsCard } from '../ui/SmsCard';

interface CommunicationSectionProps {
  type: CommunicationType;
  items: ItemData[];
  data: CallData[] | SmsData[] | EmailData[];
}

export const CommunicationSection: React.FC<CommunicationSectionProps> = ({
  type,
  items,
  data
}) => {
  const { getConfigByType } = useCommunicationConfig();
  const config = getConfigByType(type);

  const renderCard = (
    _item: ItemData,
    originalData: CallData | SmsData | EmailData,
    index: number
  ) => {
    switch (type) {
      case 'calls':
        return <CallCard call={originalData as CallData} />;
      case 'sms-push':
        return <SmsCard sms={originalData as SmsData} showIcon={index === 0} />;
      case 'emails':
        return <EmailCard email={originalData as EmailData} showIcon={index === 0} />;
      default:
        return null;
    }
  };

  return (
    <CardAccordion
      header={
        <CardAccordionHeader
          icon={<Icon type={config.icon} className="bg-teal" />}
          title={config.title}
        />
      }
    >
      {items.map((item, index) => {
        const originalData = data[index];
        const key = `${type}-${item.originalId}`;

        return (
          <CardAccordionItem key={key} itemData={item}>
            {renderCard(item, originalData, index)}
          </CardAccordionItem>
        );
      })}
    </CardAccordion>
  );
};
