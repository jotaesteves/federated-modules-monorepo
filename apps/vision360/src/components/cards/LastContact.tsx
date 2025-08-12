import * as React from 'react';
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
    <>
      {/* <Card icon="↺" title="Últimos contactos" className="h-full">
      <p className="text-sm text-muted-foreground">Data: 2025-08-01</p>
      <p className="text-sm text-muted-foreground">Canal: Phone</p>
      <p className="text-sm text-muted-foreground">Agente: John Doe</p>
      <p className="text-sm text-muted-foreground">Assunto: Account inquiry</p>
    </Card> */}
      <CardTabs
        title="Últimos contactos"
        icon={<span>↺</span>}
        tabs={tabs}
        defaultValue="overview"
        className="w-full"
      />
    </>
  );
};

export default LastContact;
