import type React from 'react';
import { Badge } from 'shared/components/ui';
import type { CallData } from '../HistoryInteractionsColumns/mock-data/mock-communication-data';

interface CallDetailsProps {
  call: CallData;
}

export const CallDetails: React.FC<CallDetailsProps> = ({ call }) => {
  const getDirectionBadgeVariant = (direction: CallData['direction']) => {
    return direction === 'INBOUND' ? 'active' : 'inactive';
  };

  const getDirectionLabel = (direction: CallData['direction']) => {
    return direction === 'INBOUND' ? 'Entrada' : 'Saída';
  };

  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-4">
        <h3 className="text-xl font-semibold text-gray-900">Detalhes da Chamada</h3>
        <p className="text-sm text-gray-600">ID: {call.id}</p>
        <Badge variant={getDirectionBadgeVariant(call.direction)} className="mt-2">
          {getDirectionLabel(call.direction)}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Número de Telefone</h4>
          <p className="text-lg font-semibold text-gray-800">{call.phoneNumber}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Direção</h4>
          <p className="text-lg font-semibold text-gray-800">{getDirectionLabel(call.direction)}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Data</h4>
          <p className="text-lg font-semibold text-gray-800">{call.date}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Hora</h4>
          <p className="text-lg font-semibold text-gray-800">{call.time}</p>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-medium text-blue-900 mb-2">Informações Adicionais</h4>
        <div className="grid grid-cols-1 gap-2 text-sm text-blue-800">
          <p>
            <strong>Tipo:</strong>{' '}
            {call.direction === 'INBOUND' ? 'Chamada recebida' : 'Chamada efetuada'}
          </p>
          <p>
            <strong>Duração:</strong> Não disponível
          </p>
          <p>
            <strong>Status:</strong> Concluída
          </p>
        </div>
      </div>
    </div>
  );
};
