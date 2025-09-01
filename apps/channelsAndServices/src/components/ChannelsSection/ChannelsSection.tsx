import React from 'react';
import { CardAccordion } from 'shared/components';
import { Badge } from 'shared/components/ui';

import { CardAccordionHeader } from '../CardAccordionHeader/CardAccordionHeader';
import { CardAccordionItem } from '../CardAccordionItem/CardAccordionItem';

import type { ItemData } from '../../context/ChannelsServicesContext';
import { createUniqueId } from '../../context/ChannelsServicesContext';

interface AccountData {
  id: string;
  cellphoneNumber: string;
  cellphoneStatus: 'active' | 'inactive';
  simSwapStatus: 'blocked' | 'unblocked';
  simSwapDate: string;
  activationDate: string;
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
    activationDate: '2025-01-15 | 15:33',
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
      <CardAccordion header={<CardAccordionHeader icon={'📱'} title="Mobile Banking" />}>
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
                  <p className="text-2xs text-gray-500 font-medium uppercase">
                    Telemóvel (Principal)
                  </p>
                  <p className="text-2xs text-gray-500 font-medium uppercase">
                    Limite Transacional
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="flex items-center">
                    <span className="mr-2 text-base font-semibold">{account.cellphoneNumber}</span>
                    <Badge variant={'active'}>{'ativo'.toUpperCase()}</Badge>
                  </p>
                  <p>
                    <span className="text-base font-semibold">{account.transactionalLimit} </span>
                    <span className="text-2xs">{account.currency}</span>
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-2xs text-gray-500 font-medium uppercase">
                    <span className="mr-2">Simswap</span>
                    <Badge variant={'blocked'}>{'bloqueado'.toUpperCase()}</Badge>
                  </p>

                  <p className="text-2xs text-gray-500 font-medium uppercase">Limite de Recargas</p>
                </div>
                <div className="flex justify-between text-xs">
                  <p className="flex items-center text-xs">
                    <span className="text-2xs mr-2">Data: {account.simSwapDate}</span>
                  </p>
                  <p>
                    <span className="text-base font-semibold">{account.rechargeLimit} </span>
                    <span className="text-2xs">{account.currency}</span>
                  </p>
                </div>
              </div>
            </CardAccordionItem>
          );
        })}
      </CardAccordion>

      <CardAccordion header={<CardAccordionHeader icon={'💻'} title="Internet Banking" />}>
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
                  <p className="text-2xs text-gray-500 font-medium uppercase">Utilizador</p>
                  <p className="text-2xs text-gray-500 font-medium uppercase">
                    Limite Transacional
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="flex items-center">
                    <span className="mr-2 text-base font-semibold">{account.id}</span>
                    <Badge variant={'active'}>{'ativo'.toUpperCase()}</Badge>
                  </p>
                  <p>
                    <span className="text-base font-semibold">{account.transactionalLimit} </span>
                    <span className="text-2xs">{account.currency}</span>
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-2xs text-gray-500 font-medium uppercase">
                    <span className="mr-2">Simswap</span>
                    <Badge variant={'blocked'}>{'bloqueado'.toUpperCase()}</Badge>
                  </p>

                  <p className="text-2xs text-gray-500 font-medium uppercase">Telemóvel</p>
                </div>
                <div className="flex justify-between text-xs">
                  <p className="flex items-center text-xs">
                    <span className="text-2xs mr-2">{account.simSwapDate}</span>
                  </p>
                  <p>
                    <span className="text-base font-semibold">{account.cellphoneNumber}</span>
                  </p>
                </div>
              </div>
            </CardAccordionItem>
          );
        })}
      </CardAccordion>

      <CardAccordion header={<CardAccordionHeader icon={'☎️'} title="Linha Millennium Bim" />}>
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
              <div className="flex w-full space-y-1 justify-between items-center">
                <div className="flex flex-col justify-end">
                  <p className="flex items-center">
                    <span className="mr-2 text-base font-semibold uppercase">PIN 2</span>
                    <Badge variant={'active'}>{'ativo'.toUpperCase()}</Badge>
                  </p>
                </div>

                <div className="flex flex-col justify-between">
                  <p className="text-2xs text-gray-500 font-medium uppercase text-right">
                    Data de Ativação
                  </p>
                  <p>
                    <span className="text-base font-semibold">{account.activationDate} </span>
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
