import React from 'react';

import { CardTabs, LineBreak, Icon } from 'shared/components';
import type { CardTabItem } from 'shared/components/CardTabs';

import { CardAccordionItemContacts } from 'src/components/cards/LastContact/components/CardAccordionItemContacts';
import {
  CardAccordionItemContactsMapData,
  CardItemMessagesMapData,
} from 'src/components/cards/LastContact/mockData/mockData';
import { CardItemMessages } from 'src/components/cards/LastContact/components/CardItemMessages';

const tabs: CardTabItem[] = [
  {
    value: 'calls',
    label: 'Chamadas',
    content: (
      <>
        {CardAccordionItemContactsMapData.map((props, index) => (
          <React.Fragment key={index}>
            <CardAccordionItemContacts {...props} />
            {index < CardAccordionItemContactsMapData.length - 1 && <LineBreak />}
          </React.Fragment>
        ))}
      </>
    ),
  },
  {
    value: 'messages',
    label: 'Mensagens',
    content: (
      <>
        {CardItemMessagesMapData.map((props, index) => (
          <React.Fragment key={index}>
            <CardItemMessages {...props} />
            {index < CardItemMessagesMapData.length - 1 && <LineBreak />}
          </React.Fragment>
        ))}
      </>
    ),
  },
];

const LastContact: React.FC = () => {
  return (
    <CardTabs
      title="Últimos contactos"
      icon={<Icon type="history" className="bg-purple" size="lg" />}
      tabs={tabs}
      defaultValue="calls"
      className="w-full"
    />
  );
};

export default LastContact;
