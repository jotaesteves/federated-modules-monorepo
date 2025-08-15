import React from 'react';
import CardAccordion from 'shared/components/CardAccordion';
import { CardAccordionHeader } from '../../CardAccordionHeader/CardAccordionHeader';
import { CardAccordionItem } from '../../CardAccordionItem/CardAccordionItem';
import { Badge } from 'shared/components/ui';
import type { ItemData } from '../../../context/HistoryInteractionsContext';
import { createUniqueId } from '../../../context/HistoryInteractionsContext';
import {
  mockComplainsData,
  mockIncidentsData,
  mockMemosData,
  type ComplainsData,
  type IncidentsData,
  type MemosData,
} from '../mock-data/mock-occurrences-data';
import { LogoIcon } from 'shared/assets/icons';

interface OccurrencesSectionProps {
  complains?: ComplainsData[];
  incidents?: IncidentsData[];
  memos?: MemosData[];
}

export const OccurrencesSection: React.FC<OccurrencesSectionProps> = ({
  complains = mockComplainsData,
  incidents = mockIncidentsData,
  memos = mockMemosData,
}) => {
  return (
    <div className="grid gap-2 content-start">
      <CardAccordion header={<CardAccordionHeader icon={'⚠️'} title="Reclamações" />}>
        {complains.map((complain, index) => {
          const itemData: ItemData = {
            id: createUniqueId('complains', 'occurrences', complain.id),
            originalId: complain.id,
            type: 'complains',
            category: 'occurrences',
            name: '',
            data: {
              ...complain,
            },
          };

          return (
            <CardAccordionItem key={`complaint-${complain.id}`} itemData={itemData}>
              <div className="flex flex-row w-full gap-1 leading-4">
                <div className="flex-col mr-[0.9375rem]">
                  <p className="flex items-center font-semibold">
                    <span className="mr-[0.625rem]">
                      <LogoIcon width="13" height="13" />
                    </span>
                    {complain.complainId}
                  </p>
                  <Badge
                    variant={complain.badge === 'SUBMITED' ? 'blocked' : 'active'}
                    className="ml-[1.4375rem] mt-[0.36625rem] text-[0.520625rem] px-1"
                  >
                    {complain.badge === 'SUBMITED' ? 'SUBMETIDO' : 'COMPLETA'}
                  </Badge>
                </div>
                <div className="flex-col w-full">
                  <p className="text-2xs flex text-zinc-600">
                    {complain.transferName.toUpperCase()}
                  </p>
                  <p className="flex-inline font-semibold mt-1 align-bottom">
                    {complain.transferValue} <span className="text-xs font-normal">MZN</span>
                  </p>
                </div>
                <div className="flex-col text-right w-full leading-4">
                  <p className="text-[0.6875rem]">{complain.startDate}</p>
                  <p className="text-[0.6875rem]">{complain.endDate}</p>
                </div>
              </div>
            </CardAccordionItem>
          );
        })}
      </CardAccordion>

      <CardAccordion header={<CardAccordionHeader icon={'🚨'} title="Incidentes" />}>
        {incidents.map((incident) => {
          const itemData: ItemData = {
            id: createUniqueId('incidents', 'occurrences', incident.id),
            originalId: incident.id,
            type: 'incidents',
            category: 'occurrences',
            name: '',
            data: {
              ...incident,
            },
          };

          return (
            <CardAccordionItem key={`incident-${incident.id}`} itemData={itemData}>
              <div className="flex flex-col w-full space-y-1">
                <h3 className="text-sm font-bold">{incident.name}</h3>
                <p>Número de conta - {incident.accountNumber}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-500">Severidade</p>
                  <p className="text-xs text-gray-500 text-right">
                    <Badge variant={incident.status}>
                      {incident.status === 'active' ? 'ALTA' : 'BAIXA'}
                    </Badge>
                  </p>
                </div>
              </div>
            </CardAccordionItem>
          );
        })}
      </CardAccordion>

      <CardAccordion header={<CardAccordionHeader icon={'📝'} title="Memos" />}>
        {memos.map((memo) => {
          const itemData: ItemData = {
            id: createUniqueId('memos', 'occurrences', memo.id),
            originalId: memo.id,
            type: 'memos',
            category: 'occurrences',
            name: `Memo - ${memo.name}`,
            data: {
              ...memo,
              subject: `Memo - ${memo.name}`,
              content: `Memo interno relacionado a ${memo.name}. Valor inicial: ${memo.initialValue} ${memo.currency}. Status da conta: ${memo.status}.`,
              author: 'Sistema',
              category: 'Seguros',
              priority: 'normal',
              status: 'sent',
              createdDate: '2024-01-17',
            },
          };

          return (
            <CardAccordionItem key={`memo-${memo.id}`} itemData={itemData}>
              <div className="flex flex-col w-full space-y-1">
                <h3 className="text-sm font-bold">Memo - {memo.name}</h3>
                <p>Número de conta - {memo.accountNumber}</p>
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
