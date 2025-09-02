import type React from 'react';
import { Badge } from 'shared/components/ui';

interface MemoData {
  id: string;
  subject: string;
  content: string;
  author: string;
  recipient?: string;
  category: string;
  priority: 'low' | 'normal' | 'high' | 'urgent';
  status: 'draft' | 'sent' | 'read' | 'archived';
  createdDate: string;
  sentDate?: string;
  readDate?: string;
}

interface MemoDetailsProps {
  memo: unknown; // Fallback to unknown for existing data structures
}

export const MemoDetails: React.FC<MemoDetailsProps> = ({ memo }) => {
  // Fallback for existing data structures that might not match MemoData
  const m = (memo ?? {}) as Partial<MemoData> & Record<string, unknown>;
  const safeMemo = {
    id: (m.id as string | undefined) ?? 'N/A',
    subject:
      (m.name as string | undefined) ||
      (m.subject as string | undefined) ||
      (m.title as string | undefined) ||
      'Memo',
    content:
      (m.content as string | undefined) ||
      (m.description as string | undefined) ||
      'Conteúdo não disponível',
    author: (m.author as string | undefined) || 'Sistema',
    recipient: m.recipient as string | undefined,
    category: (m.category as string | undefined) || 'Geral',
    priority: (m.priority as MemoData['priority'] | undefined) || 'normal',
    status: (m.status as MemoData['status'] | undefined) || 'sent',
    createdDate:
      (m.createdDate as string | undefined) ||
      (m as Record<string, unknown>).date?.toString?.() ||
      new Date().toLocaleDateString(),
    sentDate: m.sentDate as string | undefined,
    readDate: m.readDate as string | undefined
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'read':
      case 'archived':
        return 'active';
      case 'sent':
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
      case 'normal':
        return 'default';
      default:
        return 'inactive';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'draft':
        return 'Rascunho';
      case 'sent':
        return 'Enviado';
      case 'read':
        return 'Lido';
      case 'archived':
        return 'Arquivado';
      default:
        return status;
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'low':
        return 'Baixa';
      case 'normal':
        return 'Normal';
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
        <h3 className="text-xl font-semibold text-gray-900">Detalhes do Memo</h3>
        <p className="text-sm text-gray-600">ID: {safeMemo.id}</p>
        <div className="flex gap-2 mt-2">
          <Badge variant={getStatusBadgeVariant(safeMemo.status)}>
            {getStatusLabel(safeMemo.status)}
          </Badge>
          <Badge variant={getPriorityBadgeVariant(safeMemo.priority)}>
            {getPriorityLabel(safeMemo.priority)}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Assunto</h4>
          <p className="text-lg font-semibold text-gray-800">{safeMemo.subject}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Categoria</h4>
          <p className="text-lg font-semibold text-gray-800">{safeMemo.category}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Autor</h4>
          <p className="text-lg font-semibold text-gray-800">{safeMemo.author}</p>
        </div>

        {safeMemo.recipient && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Destinatário</h4>
            <p className="text-lg font-semibold text-gray-800">{safeMemo.recipient}</p>
          </div>
        )}

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Data de Criação</h4>
          <p className="text-lg font-semibold text-gray-800">{safeMemo.createdDate}</p>
        </div>

        {safeMemo.sentDate && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Data de Envio</h4>
            <p className="text-lg font-semibold text-gray-800">{safeMemo.sentDate}</p>
          </div>
        )}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-2">Conteúdo</h4>
        <div className="bg-white p-3 rounded border">
          <p className="text-gray-800 whitespace-pre-wrap">{safeMemo.content}</p>
        </div>
      </div>

      {safeMemo.readDate && (
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-medium text-green-900 mb-2">Data de Leitura</h4>
          <p className="text-green-800">{safeMemo.readDate}</p>
        </div>
      )}
    </div>
  );
};
