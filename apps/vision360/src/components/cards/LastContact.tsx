import CardTabs, { CardTabItem } from 'shared/components/CardTabs';

const tabs: CardTabItem[] = [
  {
    value: 'calls',
    label: 'Chamadas',
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Chamadas Content</h3>
        <p>This is the chamadas tab content. You can put any React components here.</p>
      </div>
    ),
  },
  {
    value: 'messages',
    label: 'Mensagens',
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Mensagens Content</h3>
        <p>This is the mensagens tab content. You can put any React components here.</p>
      </div>
    ),
  },
];

const LastContact: React.FC = () => {
  return (
    <CardTabs
      title="Últimos contactos"
      icon={<span>↺</span>}
      tabs={tabs}
      defaultValue="calls"
      className="w-full"
    />
  );
};

export default LastContact;
