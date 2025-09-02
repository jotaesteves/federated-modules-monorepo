import type React from 'react';
import { Badge } from 'shared/components/ui';

interface ComplaintData {
  id: string;
  title: string;
  description: string;
  category: string;
  status: 'pending' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdDate: string;
  resolvedDate?: string;
  agent?: string;
  department: string;
}

interface ComplaintDetailsProps {
  complaint: unknown; // Fallback to unknown for existing data structures
}

export const ComplaintDetails: React.FC<ComplaintDetailsProps> = ({ complaint }) => {
  // Fallback for existing data structures that might not match ComplaintData
  const c = (complaint ?? {}) as Partial<ComplaintData> & Record<string, unknown>;
  const safeComplaint = {
    id: (c.id as string | undefined) ?? 'N/A',
    title: (c.name as string | undefined) || (c.title as string | undefined) || 'Reclamação',
    description: (c.description as string | undefined) || 'Descrição não disponível',
    category: (c.category as string | undefined) || 'Geral',
    status: (c.status as string | undefined) || 'pending',
    priority: (c.priority as string | undefined) || 'medium',
    createdDate:
      (c.createdDate as string | undefined) ||
      (c as Record<string, unknown>).date?.toString?.() ||
      new Date().toLocaleDateString(),
    resolvedDate: c.resolvedDate as string | undefined,
    agent: c.agent as string | undefined,
    department: (c.department as string | undefined) || 'Call Center'
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'resolved':
      case 'closed':
        return 'active';
      case 'in-progress':
        return 'default';
      default:
        return 'inactive';
    }
  };

  const getPriorityBadgeVariant = (priority: string) => {
    switch (priority) {
      case 'urgent':
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
      case 'pending':
        return 'Pendente';
      case 'in-progress':
        return 'Em Progresso';
      case 'resolved':
        return 'Resolvida';
      case 'closed':
        return 'Fechada';
      default:
        return status;
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'low':
        return 'Baixa';
      case 'medium':
        return 'Média';
      case 'high':
        return 'Alta';
      case 'urgent':
        return 'Urgente';
      default:
        return priority;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-4">
        <h3 className="text-xl font-semibold text-gray-900">Detalhes da Reclamação</h3>
        <p className="text-sm text-gray-600">ID: {safeComplaint.id}</p>
        <div className="flex gap-2 mt-2">
          <Badge variant={getStatusBadgeVariant(safeComplaint.status)}>
            {getStatusLabel(safeComplaint.status)}
          </Badge>
          <Badge variant={getPriorityBadgeVariant(safeComplaint.priority)}>
            {getPriorityLabel(safeComplaint.priority)}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Título</h4>
          <p className="text-lg font-semibold text-gray-800">{safeComplaint.title}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Categoria</h4>
          <p className="text-lg font-semibold text-gray-800">{safeComplaint.category}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Data de Criação</h4>
          <p className="text-lg font-semibold text-gray-800">{safeComplaint.createdDate}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Departamento</h4>
          <p className="text-lg font-semibold text-gray-800">{safeComplaint.department}</p>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-2">Descrição</h4>
        <div className="bg-white p-3 rounded border">
          <p className="text-gray-800 whitespace-pre-wrap">{safeComplaint.description}</p>
        </div>
      </div>

      {safeComplaint.agent && (
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">Agente Responsável</h4>
          <p className="text-blue-800">{safeComplaint.agent}</p>
        </div>
      )}

      {safeComplaint.resolvedDate && (
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-medium text-green-900 mb-2">Data de Resolução</h4>
          <p className="text-green-800">{safeComplaint.resolvedDate}</p>
        </div>
      )}
    </div>
  );
};
