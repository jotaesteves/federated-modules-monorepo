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
      <CardAccordion header={<CardAccordionHeader icon={'☂️'} title="Seguros" />}>
        {accounts.map((account) => {
          const itemData: ItemData = {
            id: createUniqueId('loan', 'passives', account.id),
            originalId: account.id,
            type: 'calls',
            category: 'communications',
            name: account.name,
            data: account,
          };

          return (
            <CardAccordionItem key={account.id} itemData={itemData}>
              <div className="flex flex-col w-full space-y-1">
                <h3 className="text-sm font-bold">{account.name}</h3>
                <p> Número de conta - {account.accountNumber}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-500">Valor inicial</p>
                  <p className="text-xs text-gray-500 text-right">Valor Remanescente</p>
                </div>
                <div className="flex justify-between text-xs">
                  <p>
                    {account.initialValue} {account.currency}
                  </p>
                  <p className="text-right">
                    {account.remainingValue} {account.currency}
                  </p>
                </div>
              </div>
            </CardAccordionItem>
          );
        })}
      </CardAccordion>

      <CardAccordion header={<CardAccordionHeader icon={'📃'} title="Extratos" />}>
        {accounts.map((account) => {
          const itemData: ItemData = {
            id: createUniqueId('credit-card', 'passives', account.id),
            originalId: account.id,
            type: 'sms-push',
            category: 'communications',
            name: account.name,
            data: account,
          };

          return (
            <CardAccordionItem key={`deposit-${account.id}`} itemData={itemData}>
              <div className="flex flex-col w-full space-y-1">
                <div className="flex justify-between items-center">
                  <p className="text-xs font-medium">{account.name}</p>
                  <p className="text-xs text-gray-500 text-right">{account.cardNumber}</p>
                </div>
                <div className="flex justify-between text-xs">
                  <p>
                    <Badge variant={account.status}>{account.status.toUpperCase()}</Badge>
                  </p>
                  <p className="text-right">Nº de Conta - {account.accountNumber}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500"></p>
                  <p className="text-xs text-gray-500 text-right">
                    Limite Utilizado ({account.initialValue} {account.currency})
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500"></p>
                  <p className="text-xs text-gray-500 text-right">
                    {account.initialValue} | {account.remainingValue}
                  </p>
                </div>
              </div>
            </CardAccordionItem>
          );
        })}
      </CardAccordion>
    </div>
  );
};
