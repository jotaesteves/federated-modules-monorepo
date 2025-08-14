import React from 'react';
import { Badge } from 'shared/components/ui';
import type { EmailData } from '../HistoryInteractionsColumns/mock-data/mock-communication-data';

interface EmailDetailsProps {
  email: EmailData;
}

export const EmailDetails: React.FC<EmailDetailsProps> = ({ email }) => {
  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-4">
        <h3 className="text-xl font-semibold text-gray-900">Detalhes do E-mail</h3>
        <p className="text-sm text-gray-600">ID: {email.id}</p>
        <Badge variant="active" className="mt-2">
          E-MAIL
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Título</h4>
          <p className="text-lg font-semibold text-gray-800">{email.title}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">E-mail</h4>
          <p className="text-lg font-semibold text-gray-800">{email.email}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Data</h4>
          <p className="text-lg font-semibold text-gray-800">{email.date}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Hora</h4>
          <p className="text-lg font-semibold text-gray-800">{email.time}</p>
        </div>
      </div>

      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-medium text-green-900 mb-2">Informações Adicionais</h4>
        <div className="grid grid-cols-1 gap-2 text-sm text-green-800">
          <p>
            <strong>Tipo:</strong> Comunicação por E-mail
          </p>
          <p>
            <strong>Status:</strong> Enviado
          </p>
          <p>
            <strong>Canal:</strong> Internet Banking
          </p>
          <p>
            <strong>Prioridade:</strong> Normal
          </p>
        </div>
      </div>
    </div>
  );
};
