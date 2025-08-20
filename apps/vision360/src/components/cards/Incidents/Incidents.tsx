import React from 'react';
import type { CardTabItem } from 'shared/components/CardTabs';
import CardTabs from 'shared/components/CardTabs';
import LineBreak from 'shared/components/LineBreak';
import { CardAccordionItemClaims } from 'src/components/cards/Incidents/components/CardAccordionItemClaims';
import CardItemIncidents from 'src/components/cards/Incidents/components/CardItemIncidents';
import {
  CardAccordionItemClaimsMapData,
  CardItemIncidentsMapData,
} from 'src/components/cards/Incidents/mockData/mockData';

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
      <>
        {CardItemIncidentsMapData.map((props, index) => (
          <React.Fragment key={index}>
            <CardItemIncidents {...props} />
            {index < CardItemIncidentsMapData.length - 1 && <LineBreak />}
          </React.Fragment>
        ))}
      </>
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
