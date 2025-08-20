import React from 'react';
import CardAccordion from 'shared/components/Card';
import { CardAccordionHeader } from '../CardAccordionHeader/CardAccordionHeader';
import { CardAccordionItem } from '../CardAccordionItem/CardAccordionItem';
import { Badge } from 'shared/components/ui';
import type { ItemData } from '../../context/ChannelsServicesContext';
import { createUniqueId } from '../../context/ChannelsServicesContext';

interface AccountData {
  id: string;
  cellphoneNumber: string;
  cellphoneStatus: 'active' | 'inactive';
  simSwapStatus: 'blocked' | 'unblocked';
  simSwapDate: string;
  transactionalLimit: string;
  rechargeLimit: string;
  currency: string;
  name?: string; // Optional field for account name
}

interface ChannelsSectionProps {
  accounts?: AccountData[];
}

const defaultMobileAccounts: AccountData[] = [
  {
    id: '73653476234',
    cellphoneNumber: '84 1234 5678',
    cellphoneStatus: 'active',
    simSwapStatus: 'blocked',
    simSwapDate: '2025-05-20',
    transactionalLimit: '450.000,24',
    rechargeLimit: '2.000,24',
    currency: 'MZN',
    name: 'Principal',
  },
];

export const ChannelsSection: React.FC<ChannelsSectionProps> = ({
  accounts = defaultMobileAccounts,
}) => {
  return (
    <div className="grid gap-2 content-start">
      <CardAccordion icon={'📱'} title="Mobile Banking">
        {accounts.map((account) => {
          const itemData: ItemData = {
            id: createUniqueId('mobile', 'channels', account.id),
            originalId: account.id,
            type: 'mobile',
            category: 'channels',
            data: account,
            name: account.name || '',
          };

          return (
            <CardAccordionItem key={account.id} itemData={itemData}>
              <div className="flex flex-col w-full space-y-1">
                <div className="flex justify-between items-center">
                  <p className="text-xs font-medium">
                    {account.id} - {account.name}
                  </p>
                  <p className="text-xs text-gray-500 text-right">Saldo disponível</p>
                </div>
                <div className="flex justify-between text-xs">
                  <p>
                    <Badge variant={'active'}>{'active'.toUpperCase()}</Badge>
                  </p>
                  <p className="text-right">{account.currency}</p>
                </div>
              </div>
            </CardAccordionItem>
          );
        })}
      </CardAccordion>

      <CardAccordion icon={'💻'} title="Internet Banking">
        {accounts.map((account) => {
          const itemData: ItemData = {
            id: createUniqueId('internet', 'channels', account.id),
            originalId: account.id,
            type: 'internet',
            category: 'channels',
            name: account.name || '',
            data: account,
          };

          return (
            <CardAccordionItem key={`deposit-${account.id}`} itemData={itemData}>
              <div className="flex flex-col w-full space-y-1">
                <div className="flex justify-between items-center">
                  <p className="text-xs font-medium">
                    {account.id} - {account.name}
                  </p>
                  <p className="text-xs text-gray-500 text-right">Saldo disponível</p>
                </div>
                <div className="flex justify-between text-xs">
                  <p>
                    <Badge variant={'blocked'}>{'blocked'.toUpperCase()}</Badge>
                  </p>
                  <p className="text-right">{account.currency}</p>
                </div>
              </div>
            </CardAccordionItem>
          );
        })}
      </CardAccordion>

      <CardAccordion icon={'☎️'} title="Linha Millennium Bim">
        {accounts.map((account) => {
          const itemData: ItemData = {
            id: createUniqueId('millennium-line', 'channels', account.id),
            originalId: account.id,
            type: 'millennium-line',
            category: 'channels',
            name: account.name || '',
            data: account,
          };

          return (
            <CardAccordionItem key={`card-${account.id}`} itemData={itemData}>
              <div className="flex flex-col w-full space-y-1">
                <div className="flex justify-between items-center">
                  <p className="text-xs font-medium">
                    {account.id} - {account.name}
                  </p>
                  <p className="text-xs text-gray-500 text-right">Saldo disponível</p>
                </div>
                <div className="flex justify-between text-xs">
                  <p>
                    <Badge variant={'active'}>{'active'.toUpperCase()}</Badge>
                  </p>
                  <p className="text-right">{account.currency}</p>
                </div>
              </div>
            </CardAccordionItem>
          );
        })}
      </CardAccordion>
    </div>
  );
};
