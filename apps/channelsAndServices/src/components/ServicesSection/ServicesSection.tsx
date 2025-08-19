import React from 'react';
import CardAccordion from 'shared/components/Card';
import { CardAccordionHeader } from '../CardAccordionHeader/CardAccordionHeader';
import { CardAccordionItem } from '../CardAccordionItem/CardAccordionItem';
import { Badge } from 'shared/components/ui';
import type { ItemData } from '../../context/ChannelsServicesContext';
import { createUniqueId } from '../../context/ChannelsServicesContext';

interface EnsuraceAccountData {
  id: string;
  policyNumber: string;
  name: string;
  subscriptionDate: string;
}
interface ExtractsData {
  id: string;
  accountNumber: string;
  subscriptionDate: string;
  type: 'simples' | 'combinado';
  email: string;
}

interface ServicesSectionProps {
  accounts?: EnsuraceAccountData[];
  extracts?: ExtractsData[];
}

const EnsuranceAccountsDefault: EnsuraceAccountData[] = [
  {
    id: '73653476234',
    policyNumber: '73653476234',
    name: 'Seguro em Paz',
    subscriptionDate: '2025-01-15',
  },
  {
    id: '736534723476',
    policyNumber: '736534723476',
    name: 'Seguro Vida',
    subscriptionDate: '2025-02-20',
  },
];
const ExtractsDataDefault: ExtractsData[] = [
  {
    id: '1',
    accountNumber: '1234567890',
    subscriptionDate: '2025-01-15',
    type: 'simples',
    email: 'cliente1@example.com',
  },
  {
    id: '2',
    accountNumber: '0987654321',
    subscriptionDate: '2025-02-20',
    type: 'combinado',
    email: 'cliente2@example.com',
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  accounts = EnsuranceAccountsDefault,
  extracts = ExtractsDataDefault,
}) => {
  return (
    <div className="grid gap-2 content-start">
      <CardAccordion icon={'☂️'} title="Seguros">
        {accounts.map((account) => {
          const itemData: ItemData = {
            id: createUniqueId('insurance', 'other-services', account.id),
            originalId: account.id,
            type: 'insurance',
            category: 'other-services',
            name: account.name,
            data: account,
          };

          return (
            <CardAccordionItem key={account.id} itemData={itemData}>
              <div className="flex w-full justify-between">
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold">{account.name}</h3>
                  <p className="flex justify-between items-center text-xs">
                    Apólice: {account.policyNumber}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-2xs text-gray-500 font-medium uppercase">Data de adesão</p>
                  <p className="text-right font-semibold">{account.subscriptionDate}</p>
                </div>
              </div>
            </CardAccordionItem>
          );
        })}
      </CardAccordion>

      <CardAccordion icon={'📃'} title="Extratos">
        {extracts.map((extract) => {
          const itemData: ItemData = {
            id: createUniqueId('extracts', 'other-services', extract.id),
            originalId: extract.id,
            type: 'extracts',
            category: 'other-services',
            name: extract.email,
            data: extract,
          };

          return (
            <CardAccordionItem key={`deposit-${extract.id}`} itemData={itemData}>
              <div className="flex w-full justify-between space-y-1 ">
                <div className="flex flex-col">
                  <h3 className="text-base font-semibold"> Conta - {extract.accountNumber}</h3>
                  <p className="text-xs">Tipo: {extract.type}</p>
                  <p className="text-xs">Email: {extract.email}</p>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-2xs text-gray-500 font-medium uppercase">Data de Subscrição</p>
                  <p className="text-right font-semibold text-base">{extract.subscriptionDate}</p>
                </div>
              </div>
            </CardAccordionItem>
          );
        })}
      </CardAccordion>
    </div>
  );
};
