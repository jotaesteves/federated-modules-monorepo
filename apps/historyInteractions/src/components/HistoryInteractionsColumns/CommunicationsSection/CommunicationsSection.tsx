import React from 'react';
import CardAccordion from 'shared/components/CardAccordion';
import { CardAccordionHeader } from '../../CardAccordionHeader/CardAccordionHeader';
import { CardAccordionItem } from '../../CardAccordionItem/CardAccordionItem';
import { Badge } from 'shared/components/ui';
import type { ItemData } from '../../../context/HistoryInteractionsContext';
import { createUniqueId } from '../../../context/HistoryInteractionsContext';
import {
  mockCallData,
  mockSmsData,
  mockEmailData,
  type CallData,
  type SmsData,
  type EmailData,
} from '../mock-data/mock-communication-data';
import { LogoIcon } from 'shared/assets/icons';

interface CommunicationsSectionProps {
  calls?: CallData[];
  smsPush?: SmsData[];
  emails: EmailData[];
}

export const CommunicationsSection: React.FC<CommunicationsSectionProps> = ({
  calls = mockCallData,
  smsPush = mockSmsData,
  emails = mockEmailData,
}) => {
  return (
    <div className="grid gap-2 content-start">
      <CardAccordion header={<CardAccordionHeader icon={'📱'} title="Mobile Banking" />}>
        <CardAccordionItem>
          {calls.map((call) => {
            return (
              <div className="flex flex-row justify-between items-center w-full space-y-1 pr-[14px]">
                <p className="font-semibold">
                  {call.phoneNumber} <span className="pl-[1.875rem]">{call.direction}</span>
                </p>
                <div className="flex-col text-xs text-right text-[0.6875rem]">
                  <p>{call.time}</p>
                  <p>{call.date}</p>
                </div>
              </div>
            );
          })}
        </CardAccordionItem>
      </CardAccordion>

      <CardAccordion header={<CardAccordionHeader icon={'💻'} title="SMS/Push" />}>
        <CardAccordionItem>
          {smsPush.map((sms, index) => {
            return (
              <div className="flex flex-col w-full space-y-1" key={`sms-${index}`}>
                <p className="font-semibold flex items-center">
                  <span className="mr-[0.625rem]">
                    {index === 0 && <LogoIcon width="13" height="13" />}
                  </span>
                  {sms.title}
                </p>
                <p className="leading-6 ml-[1.4375rem]">{sms.message}</p>
              </div>
            );
          })}
        </CardAccordionItem>
      </CardAccordion>

      <CardAccordion header={<CardAccordionHeader icon={'☎️'} title="E-mails" />}>
        {emails.map((email) => {
          const itemData: ItemData = {
            id: createUniqueId('debit-card', 'actives', email.id),
            originalId: email.id,
            type: 'emails',
            category: 'communications',
          };

          return (
            <CardAccordionItem key={`card-${email.id}`} itemData={itemData}>
              <div className="flex flex-col w-full space-y-1">
                <div className="flex justify-between items-center">
                  <p className="text-xs font-medium">
                    {email.id} - {email.title}
                  </p>
                  <p className="text-xs text-gray-500 text-right">Saldo disponível</p>
                </div>
                <div className="flex justify-between text-xs">
                  <p>
                    <Badge variant={'active'}>{'active'.toUpperCase()}</Badge>
                  </p>
                  <p className="text-right">
                    {email.date} {email.time}
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
