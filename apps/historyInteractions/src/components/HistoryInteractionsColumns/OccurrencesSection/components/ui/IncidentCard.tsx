import type React from 'react';
import { Badge } from 'shared/components/ui';
import type { IncidentsData } from '../../types/occurrence.types';
import { getBadgeConfig } from '../../utils/occurrence.utils';

interface IncidentCardProps {
  incident: IncidentsData;
}

export const IncidentCard: React.FC<IncidentCardProps> = ({ incident }) => {
  const badgeConfig = getBadgeConfig(incident.status, 'incidents');

  return (
    <div className="flex flex-col w-full space-y-1">
      <h3 className="text-sm font-bold">{incident.name}</h3>
      <p>Número de conta - {incident.accountNumber}</p>
      <div className="flex justify-between items-center">
        <p className="text-xs text-gray-500">Severidade</p>
        <p className="text-xs text-gray-500 text-right">
          <Badge variant={badgeConfig.variant}>{badgeConfig.label}</Badge>
        </p>
      </div>
    </div>
  );
};

// React Preview
const IncidentCardPreview = () => {
  const mockIncident: IncidentsData = {
    id: '1',
    name: 'Falha no Sistema de Pagamentos',
    accountNumber: '1234567890',
    status: 'active'
  };

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="mb-4 font-semibold">Incident Card Preview</h3>
      <IncidentCard incident={mockIncident} />
    </div>
  );
};

export default IncidentCardPreview;
