import React from 'react';
import { useHistoryInteractions } from '../../context/HistoryInteractionsContext';
import { CallDetails } from './CallDetails';
import { SmsDetails } from './SmsDetails';
import { EmailDetails } from './EmailDetails';
import { ComplaintDetails } from './ComplaintDetails';
import { IncidentDetails } from './IncidentDetails';
import { MemoDetails } from './MemoDetails';

// const tableHeaders = [
//   { label: 'Data Transação' },
//   { label: 'Tipo Operação' },
//   { label: 'Conta Origem' },
//   { label: 'Montante (MZN)', boldColumn: true },
//   { label: '' },
// ];

// const tableData = [
//   {
//     cells: [
//       { content: '05/05/2025' },
//       { content: 'TRF. BIM/BIM' },
//       { content: '764682235' },
//       { content: '5 700,00' },
//       {
//         content: <Icon size="sm" className="p-0 h-auto cursor-pointer" type="eye" />,
//         className: 'flex',
//       },
//     ],
//   },
//   {
//     cells: [
//       { content: '05/05/2025' },
//       { content: 'TRF. BIM/BIM' },
//       { content: '764682235' },
//       { content: '5 700,00' },
//       {
//         content: <Icon size="sm" className="p-0 h-auto cursor-pointer" type="eye" />,
//         className: 'flex',
//       },
//     ],
//   },
//   {
//     cells: [
//       { content: '05/05/2025' },
//       { content: 'TRF. BIM/BIM' },
//       { content: '764682235' },
//       { content: '5 700,00' },
//       {
//         content: <Icon size="sm" className="p-0 h-auto cursor-pointer" type="eye" />,
//         className: 'flex',
//       },
//     ],
//   },
//   {
//     cells: [
//       { content: '05/05/2025' },
//       { content: 'TRF. BIM/BIM' },
//       { content: '764682235' },
//       { content: '5 700,00' },
//       {
//         content: <Icon size="sm" className="p-0 h-auto cursor-pointer" type="eye" />,
//         className: 'flex',
//       },
//     ],
//   },
//   {
//     cells: [
//       { content: '05/05/2025' },
//       { content: 'TRF. BIM/BIM' },
//       { content: '764682235' },
//       { content: '5 700,00' },
//       {
//         content: <Icon size="sm" className="p-0 h-auto cursor-pointer" type="eye" />,
//         className: 'flex',
//       },
//     ],
//   },
//   {
//     cells: [
//       { content: '05/05/2025' },
//       { content: 'TRF. BIM/BIM' },
//       { content: '764682235' },
//       { content: '5 700,00' },
//       {
//         content: <Icon size="sm" className="p-0 h-auto cursor-pointer" type="eye" />,
//         className: 'flex',
//       },
//     ],
//   },
//   {
//     cells: [
//       { content: '05/05/2025' },
//       { content: 'TRF. BIM/BIM' },
//       { content: '764682235' },
//       { content: '5 700,00' },
//       {
//         content: <Icon size="sm" className="p-0 h-auto cursor-pointer" type="eye" />,
//         className: 'flex',
//       },
//     ],
//   },
//   {
//     cells: [
//       { content: '05/05/2025' },
//       { content: 'TRF. BIM/BIM' },
//       { content: '764682235' },
//       { content: '5 700,00' },
//       {
//         content: <Icon size="sm" className="p-0 h-auto cursor-pointer" type="eye" />,
//         className: 'flex',
//       },
//     ],
//   },
//   {
//     cells: [
//       { content: '05/05/2025' },
//       { content: 'TRF. BIM/BIM' },
//       { content: '764682235' },
//       { content: '5 700,00' },
//       {
//         content: <Icon size="sm" className="p-0 h-auto cursor-pointer" type="eye" />,
//         className: 'flex',
//       },
//     ],
//   },
//   {
//     cells: [
//       { content: '05/05/2025' },
//       { content: 'TRF. BIM/BIM' },
//       { content: '764682235' },
//       { content: '5 700,00' },
//       {
//         content: <Icon size="sm" className="p-0 h-auto cursor-pointer" type="eye" />,
//         className: 'flex',
//       },
//     ],
//   },
//   {
//     cells: [
//       { content: '05/05/2025' },
//       { content: 'TRF. BIM/BIM' },
//       { content: '764682235' },
//       { content: '5 700,00' },
//       {
//         content: <Icon size="sm" className="p-0 h-auto cursor-pointer" type="eye" />,
//         className: 'flex',
//       },
//     ],
//   },
//   {
//     cells: [
//       { content: '05/05/2025' },
//       { content: 'TRF. BIM/BIM' },
//       { content: '764682235' },
//       { content: '5 700,00' },
//       {
//         content: <Icon size="sm" className="p-0 h-auto cursor-pointer" type="eye" />,
//         className: 'flex',
//       },
//     ],
//   },
// ];

export const DetailsRouter: React.FC = () => {
  const { activeItem } = useHistoryInteractions();

  if (!activeItem) {
    return (
      <div className="p-6 h-full">
        {/* Exemplo de uso do componente Tabela */}
        {/* <TableComponent headers={tableHeaders} data={tableData} /> */}
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
