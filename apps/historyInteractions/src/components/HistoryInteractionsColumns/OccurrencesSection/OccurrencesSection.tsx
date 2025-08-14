import React from 'react';
import CardAccordion from 'shared/components/CardAccordion';
import { CardAccordionHeader } from '../../CardAccordionHeader/CardAccordionHeader';
import { CardAccordionItem } from '../../CardAccordionItem/CardAccordionItem';
import { Badge } from 'shared/components/ui';
import type { ItemData } from '../../../context/HistoryInteractionsContext';
import { createUniqueId } from '../../../context/HistoryInteractionsContext';

interface OccurrencesSectionData {
  id: string;
  accountNumber: string;
  name: string;
  initialValue: string;
  remainingValue: string;
  currency: string;
  status: 'active' | 'inactive';
}

interface ServicesSectionProps {
  accounts?: OccurrencesSectionData[];
}

const OccurrencesSectionDefault: OccurrencesSectionData[] = [
  {
    id: '1',
    accountNumber: '73653476234',
    name: 'Crédito Salário - 323',
    initialValue: '100.274,24',
    remainingValue: '50.000,24',
    currency: 'MZN',
    status: 'active',
  },
  {
    id: '736534723476',
    accountNumber: '3217909828',
    name: 'Microcrédito IZI - 321',
    initialValue: '5.000,00',
    remainingValue: '50.000,24',
    currency: 'MZN',
    status: 'inactive',
  },
];

export const OccurrencesSection: React.FC<ServicesSectionProps> = ({
  accounts = OccurrencesSectionDefault,
}) => {
  return (
    <div className="grid gap-2 content-start">
      <CardAccordion header={<CardAccordionHeader icon={'⚠️'} title="Reclamações" />}>
        {accounts.slice(0, 1).map((account) => {
          const itemData: ItemData = {
            id: createUniqueId('complains', 'occurrences', account.id),
            originalId: account.id,
            type: 'complains',
            category: 'occurrences',
            name: account.name,
            data: {
              ...account,
              title: account.name,
              description: `Reclamação relacionada a ${account.name}. Número de conta: ${account.accountNumber}`,
              category: 'Seguro',
              status: account.status === 'active' ? 'resolved' : 'pending',
              priority: 'medium',
              createdDate: '2024-01-15',
              department: 'Seguros',
            },
          };

          return (
            <CardAccordionItem key={`complaint-${account.id}`} itemData={itemData}>
              <div className="flex flex-col w-full space-y-1">
                <h3 className="text-sm font-bold">{account.name}</h3>
                <p>Número de conta - {account.accountNumber}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-500">Status</p>
                  <p className="text-xs text-gray-500 text-right">
                    <Badge variant={account.status}>
                      {account.status === 'active' ? 'RESOLVIDA' : 'PENDENTE'}
                    </Badge>
                  </p>
                </div>
              </div>
            </CardAccordionItem>
          );
        })}
      </CardAccordion>

      <CardAccordion header={<CardAccordionHeader icon={'�'} title="Incidentes" />}>
        {accounts.slice(1, 2).map((account) => {
          const itemData: ItemData = {
            id: createUniqueId('incidents', 'occurrences', account.id),
            originalId: account.id,
            type: 'incidents',
            category: 'occurrences',
            name: account.name,
            data: {
              ...account,
              title: `Incidente - ${account.name}`,
              description: `Incidente técnico relacionado a ${account.name}. Investigação em andamento.`,
              type: 'Técnico',
              severity: account.status === 'active' ? 'low' : 'high',
              status: account.status === 'active' ? 'resolved' : 'investigating',
              reportedDate: '2024-01-16',
              affectedServices: ['Mobile Banking', 'Internet Banking'],
            },
          };

          return (
            <CardAccordionItem key={`incident-${account.id}`} itemData={itemData}>
              <div className="flex flex-col w-full space-y-1">
                <h3 className="text-sm font-bold">{account.name}</h3>
                <p>Número de conta - {account.accountNumber}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-500">Severidade</p>
                  <p className="text-xs text-gray-500 text-right">
                    <Badge variant={account.status === 'active' ? 'default' : 'blocked'}>
                      {account.status === 'active' ? 'BAIXA' : 'ALTA'}
                    </Badge>
                  </p>
                </div>
              </div>
            </CardAccordionItem>
          );
        })}
      </CardAccordion>

      <CardAccordion header={<CardAccordionHeader icon={'📝'} title="Memos" />}>
        {accounts.map((account) => {
          const itemData: ItemData = {
            id: createUniqueId('memos', 'occurrences', account.id),
            originalId: account.id,
            type: 'memos',
            category: 'occurrences',
            name: `Memo - ${account.name}`,
            data: {
              ...account,
              subject: `Memo - ${account.name}`,
              content: `Memo interno relacionado a ${account.name}. Valor inicial: ${account.initialValue} ${account.currency}. Status da conta: ${account.status}.`,
              author: 'Sistema',
              category: 'Seguros',
              priority: 'normal',
              status: 'sent',
              createdDate: '2024-01-17',
            },
          };

          return (
            <CardAccordionItem key={`memo-${account.id}`} itemData={itemData}>
              <div className="flex flex-col w-full space-y-1">
                <h3 className="text-sm font-bold">Memo - {account.name}</h3>
                <p>Número de conta - {account.accountNumber}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-500">Data</p>
                  <p className="text-xs text-gray-500 text-right">17/01/2024</p>
                </div>
              </div>
            </CardAccordionItem>
          );
        })}
      </CardAccordion>
    </div>
  );
};
