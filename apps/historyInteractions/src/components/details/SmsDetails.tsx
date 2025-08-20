import React from 'react';
import { Badge } from 'shared/components/ui';
import type { SmsData } from '../HistoryInteractionsColumns/mock-data/mock-communication-data';

interface SmsDetailsProps {
  sms: SmsData;
}

export const SmsDetails: React.FC<SmsDetailsProps> = ({ sms }) => {
  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-4">
        <h3 className="text-xl font-semibold text-gray-900">Detalhes SMS/Push</h3>
        <p className="text-sm text-gray-600">ID: {sms.id}</p>
        <Badge variant="active" className="mt-2">
          SMS/PUSH
        </Badge>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Título</h4>
          <p className="text-lg font-semibold text-gray-800">{sms.title}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Mensagem</h4>
          <div className="bg-white p-3 rounded border">
            <p className="text-gray-800 whitespace-pre-wrap">{sms.message}</p>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-medium text-purple-900 mb-2">Informações Adicionais</h4>
        <div className="grid grid-cols-1 gap-2 text-sm text-purple-800">
          <p>
            <strong>Tipo:</strong> Notificação SMS/Push
          </p>
          <p>
            <strong>Status:</strong> Entregue
          </p>
          <p>
            <strong>Canal:</strong> Mobile Banking
          </p>
        </div>
      </div>
    </div>
  );
};
