import type React from 'react';
import { Badge } from 'shared/components/ui';

interface IncidentData {
  id: string;
  title: string;
  description: string;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'investigating' | 'resolved' | 'closed';
  reportedDate: string;
  resolvedDate?: string;
  reportedBy?: string;
  assignedTo?: string;
  name?: string;
  date?: string;
  affectedServices?: string[];
}

interface IncidentDetailsProps {
  incident: IncidentData; // Fallback to any for existing data structures
}

export const IncidentDetails: React.FC<IncidentDetailsProps> = ({ incident }) => {
  // Fallback for existing data structures that might not match IncidentData
  const safeIncident = {
    id: incident?.id || 'N/A',
    title: incident?.name || incident?.title || 'Incidente',
    description: incident?.description || 'Descrição não disponível',
    type: incident?.type || 'Técnico',
    severity: incident?.severity || 'medium',
    status: incident?.status || 'open',
    reportedDate: incident?.reportedDate || incident?.date || new Date().toLocaleDateString(),
    resolvedDate: incident?.resolvedDate,
    reportedBy: incident?.reportedBy,
    assignedTo: incident?.assignedTo,
    affectedServices: incident?.affectedServices || []
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'resolved':
      case 'closed':
        return 'active';
      case 'investigating':
        return 'default';
      default:
        return 'inactive';
    }
  };

  const getSeverityBadgeVariant = (severity: string) => {
    switch (severity) {
      case 'critical':
      case 'high':
        return 'blocked';
      case 'medium':
        return 'default';
      default:
        return 'inactive';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'open':
        return 'Aberto';
      case 'investigating':
        return 'Em Investigação';
      case 'resolved':
        return 'Resolvido';
      case 'closed':
        return 'Fechado';
      default:
        return status;
    }
  };

  const getSeverityLabel = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'Baixa';
      case 'medium':
        return 'Média';
      case 'high':
        return 'Alta';
      case 'critical':
        return 'Crítica';
      default:
        return severity;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-4">
        <h3 className="text-xl font-semibold text-gray-900">Detalhes do Incidente</h3>
        <p className="text-sm text-gray-600">ID: {safeIncident.id}</p>
        <div className="flex gap-2 mt-2">
          <Badge variant={getStatusBadgeVariant(safeIncident.status)}>
            {getStatusLabel(safeIncident.status)}
          </Badge>
          <Badge variant={getSeverityBadgeVariant(safeIncident.severity)}>
            {getSeverityLabel(safeIncident.severity)}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Título</h4>
          <p className="text-lg font-semibold text-gray-800">{safeIncident.title}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Tipo</h4>
          <p className="text-lg font-semibold text-gray-800">{safeIncident.type}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Data de Reporte</h4>
          <p className="text-lg font-semibold text-gray-800">{safeIncident.reportedDate}</p>
        </div>

        {safeIncident.resolvedDate && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Data de Resolução</h4>
            <p className="text-lg font-semibold text-gray-800">{safeIncident.resolvedDate}</p>
          </div>
        )}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-2">Descrição</h4>
        <div className="bg-white p-3 rounded border">
          <p className="text-gray-800 whitespace-pre-wrap">{safeIncident.description}</p>
        </div>
      </div>

      {safeIncident.reportedBy && (
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h4 className="font-medium text-yellow-900 mb-2">Reportado por</h4>
          <p className="text-yellow-800">{safeIncident.reportedBy}</p>
        </div>
      )}

      {safeIncident.assignedTo && (
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">Atribuído a</h4>
          <p className="text-blue-800">{safeIncident.assignedTo}</p>
        </div>
      )}

      {safeIncident.affectedServices.length > 0 && (
        <div className="bg-red-50 p-4 rounded-lg">
          <h4 className="font-medium text-red-900 mb-2">Serviços Afetados</h4>
          <div className="flex flex-wrap gap-1">
            {safeIncident.affectedServices.map((service: string) => (
              <Badge key={safeIncident.id} variant="blocked">
                {service}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
