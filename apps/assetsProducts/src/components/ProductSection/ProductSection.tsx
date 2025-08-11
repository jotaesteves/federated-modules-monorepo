import React from 'react';
import CardAccordion from 'shared/components/CardAccordion';
import { CardAccordionHeader } from '../CardAccordionHeader/CardAccordionHeader';
import { CardAccordionItem } from '../CardAccordionItem/CardAccordionItem';
import { Badge } from 'shared/components/ui';

interface AccountData {
  id: string;
  name: string;
  balance: string;
  currency: string;
  status: 'active' | 'inactive';
}

interface ProductSectionProps {
  accounts?: AccountData[];
}

const defaultAccounts: AccountData[] = [
  {
    id: '73653476234',
    name: 'Conta Salário',
    balance: '0.24',
    currency: 'MZN',
    status: 'active',
  },
  {
    id: '736534723476',
    name: 'Conta Jovem',
    balance: '10.272.00',
    currency: 'MZN',
    status: 'inactive',
  },
];

export const ProductSection: React.FC<ProductSectionProps> = ({ accounts = defaultAccounts }) => {
  return (
    <div className="grid gap-2 content-start">
      <CardAccordion
        header={
          <CardAccordionHeader
            icon={'📊'}
            title="Contas à Ordem"
            value="16.272.24"
            currency="MZN"
          />
        }
      >
        {accounts.map((account) => (
          <CardAccordionItem key={account.id}>
            <div className="flex flex-col w-full space-y-1">
              <div className="flex justify-between items-center">
                <p className="text-xs font-medium">
                  {account.id} - {account.name}
                </p>
                <p className="text-xs text-gray-500 text-right">Saldo disponível</p>
              </div>
              <div className="flex justify-between text-xs">
                <p>
                  <Badge variant={account.status}>{account.status.toUpperCase()}</Badge>
                </p>
                <p className="text-right">
                  {account.balance} {account.currency}
                </p>
              </div>
            </div>
          </CardAccordionItem>
        ))}
      </CardAccordion>

      <CardAccordion
        header={
          <CardAccordionHeader
            icon={'💰'}
            title="Depósitos a Prazo"
            value="16.272.24"
            currency="MZN"
          />
        }
      >
        {accounts.map((account) => (
          <CardAccordionItem key={`deposit-${account.id}`}>
            <div className="flex flex-col w-full space-y-1">
              <div className="flex justify-between items-center">
                <p className="text-xs font-medium">
                  {account.id} - {account.name}
                </p>
                <p className="text-xs text-gray-500 text-right">Saldo disponível</p>
              </div>
              <div className="flex justify-between text-xs">
                <p>
                  <Badge variant={account.status}>{account.status.toUpperCase()}</Badge>
                </p>
                <p className="text-right">
                  {account.balance} {account.currency}
                </p>
              </div>
            </div>
          </CardAccordionItem>
        ))}
      </CardAccordion>

      <CardAccordion header={<CardAccordionHeader icon={'🎴'} title="Cartões de Débito" />}>
        {accounts.map((account) => (
          <CardAccordionItem key={`card-${account.id}`}>
            <div className="flex flex-col w-full space-y-1">
              <div className="flex justify-between items-center">
                <p className="text-xs font-medium">
                  {account.id} - {account.name}
                </p>
                <p className="text-xs text-gray-500 text-right">Saldo disponível</p>
              </div>
              <div className="flex justify-between text-xs">
                <p>
                  <Badge variant={account.status}>{account.status.toUpperCase()}</Badge>
                </p>
                <p className="text-right">
                  {account.balance} {account.currency}
                </p>
              </div>
            </div>
          </CardAccordionItem>
        ))}
      </CardAccordion>
    </div>
  );
};
