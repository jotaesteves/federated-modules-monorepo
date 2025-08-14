import React from 'react';
import { useHistoryInteractions } from '../../context/HistoryInteractionsContext';
import { CallDetails } from './CallDetails';
import { SmsDetails } from './SmsDetails';
import { EmailDetails } from './EmailDetails';
import { ComplaintDetails } from './ComplaintDetails';
import { IncidentDetails } from './IncidentDetails';
import { MemoDetails } from './MemoDetails';

export const DetailsRouter: React.FC = () => {
  const { activeItem } = useHistoryInteractions();

  if (!activeItem) {
    return (
      <div className="p-6 text-center content-center h-full">
        <div className="max-w-md mx-auto">
          <div className="mb-4 text-6xl">📊</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Selecione um item para ver os detalhes
          </h3>
          <p className="text-gray-600">
            Clique em qualquer comunicação ou ocorrência do painel esquerdo para ver informações
            detalhadas aqui.
          </p>
        </div>
      </div>
    );
  }

  // Route to appropriate detail component based on item type
  switch (activeItem.type) {
    case 'calls':
      return <CallDetails call={activeItem.data} />;
    case 'sms-push':
      return <SmsDetails sms={activeItem.data} />;
    case 'emails':
      return <EmailDetails email={activeItem.data} />;
    case 'complains':
      return <ComplaintDetails complaint={activeItem.data} />;
    case 'incidents':
      return <IncidentDetails incident={activeItem.data} />;
    case 'memos':
      return <MemoDetails memo={activeItem.data} />;
    default:
      return (
        <div className="p-6 text-center">
          <div className="max-w-md mx-auto">
            <div className="mb-4 text-6xl">❓</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Tipo de item desconhecido</h3>
            <p className="text-gray-600">
              O tipo do item selecionado não é reconhecido. Por favor, tente selecionar um item
              diferente.
            </p>
          </div>
        </div>
      );
  }
};
