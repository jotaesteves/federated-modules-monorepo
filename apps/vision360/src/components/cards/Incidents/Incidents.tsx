import React from 'react';
import type { CardTabItem } from 'shared/components/CardTabs';
import CardTabs from 'shared/components/CardTabs';
import LineBreak from 'shared/components/LineBreak';
import { CardAccordionItemClaims } from 'src/components/cards/Incidents/components/CardAccordionItemClaims';
import { CardAccordionItemClaimsMapData } from 'src/components/cards/Incidents/mockData/mockData';

const tabs: CardTabItem[] = [
  {
    value: 'claims',
    label: 'Reclamações',
    content: (
      <>
        {CardAccordionItemClaimsMapData.map((props, index) => (
          <React.Fragment key={index}>
            <CardAccordionItemClaims {...props} />
            {index < CardAccordionItemClaimsMapData.length - 1 && <LineBreak />}
          </React.Fragment>
        ))}
      </>
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
