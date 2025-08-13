import CardTabs, { CardTabItem } from 'shared/components/CardTabs';

const tabs: CardTabItem[] = [
  {
    value: 'claims',
    label: 'Reclamações',
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Reclamações Content</h3>
        <p>This is the reclamações tab content. You can put any React components here.</p>
      </div>
    ),
  },
  {
    value: 'incidents',
    label: 'Incidentes',
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Incidentes Content</h3>
        <p>This is the incidentes tab content. You can put any React components here.</p>
      </div>
    ),
  },
];

const Incidents: React.FC = () => {
  return (
    <CardTabs
      icon="👤↺"
      title="Reclamações / Incidentes"
      className="h-full"
      tabs={tabs}
      defaultValue="claims"
    />
  );
};

export default Incidents;
