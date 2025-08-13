import CardTabs from 'shared/components/CardTabs';
import { CardAccordionItemContacts } from 'src/components/cards/LastContact/components/CardAccordionItemContacts';
import type { CardTabItem } from 'shared/components/CardTabs';
import { CardAccordionItemContactsMapData } from 'src/components/cards/LastContact/mockData/mockData';

const tabs: CardTabItem[] = [
  {
    value: 'calls',
    label: 'Chamadas',
    content: (
      <>
        {CardAccordionItemContactsMapData.map((props, index) => (
          <CardAccordionItemContacts key={index} {...props} />
        ))}
      </>
    ),
  },
  {
    value: 'messages',
    label: 'Mensagens',
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Messages Content</h3>
        <p>This is the messages tab content. You can put any React components here.</p>
      </div>
    ),
  },
];

const LastContact: React.FC = () => {
  return (
    <CardTabs icon="👤↺" title="Últimos contactos" className="h-full" tabs={tabs} defaultValue="calls" />
  );
};

export default LastContact;
