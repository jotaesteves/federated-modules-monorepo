import React from 'react';
import CardAccordion from 'shared/components/CardAccordion';
import { CardAccordionHeader } from '../../CardAccordionHeader/CardAccordionHeader';
import { CardAccordionItem } from '../../CardAccordionItem/CardAccordionItem';
import {
  mockCallData,
  mockSmsData,
  mockEmailData,
  type CallData,
  type SmsData,
  type EmailData,
} from '../mock-data/mock-communication-data';
import { LogoIcon } from 'shared/assets/icons';
import { type ItemData, createUniqueId } from '../../../context/HistoryInteractionsContext';

interface CommunicationsSectionProps {
  calls?: CallData[];
  smsPush?: SmsData[];
  emails?: EmailData[];
}

export const CommunicationsSection: React.FC<CommunicationsSectionProps> = ({
  calls = mockCallData,
  smsPush = mockSmsData,
  emails = mockEmailData,
}) => {
  return (
    <div className="grid gap-2 content-start">
      <CardAccordion header={<CardAccordionHeader icon={'📱'} title="Mobile Banking" />}>
        {calls.map((call) => {
          const itemData: ItemData = {
            id: createUniqueId('calls', 'communications', call.id),
            originalId: call.id,
            type: 'calls',
            category: 'communications',
            name: `Chamada ${call.direction === 'INBOUND' ? 'Recebida' : 'Efetuada'} - ${call.phoneNumber}`,
            data: call,
          };

          return (
            <CardAccordionItem key={`call-${call.id}`} itemData={itemData}>
              <div className="flex flex-row justify-between items-center w-full space-y-1 pr-[14px]">
                <p className="font-semibold">
                  {call.phoneNumber} <span className="pl-[1.875rem]">{call.direction}</span>
                </p>
                <div className="flex-col text-right text-[0.6875rem]">
                  <p>{call.time}</p>
                  <p>{call.date}</p>
                </div>
              </div>
            </CardAccordionItem>
          );
        })}
      </CardAccordion>

      <CardAccordion header={<CardAccordionHeader icon={'💻'} title="SMS/Push" />}>
        {smsPush.map((sms, index) => {
          const itemData: ItemData = {
            id: createUniqueId('sms-push', 'communications', sms.id),
            originalId: sms.id,
            type: 'sms-push',
            category: 'communications',
            name: sms.title,
            data: sms,
          };

          return (
            <CardAccordionItem key={`sms-${sms.id}`} itemData={itemData}>
              <div className="flex flex-col w-full space-y-1">
                <p className="font-semibold flex items-center">
                  <span className="mr-[0.625rem]">
                    {index === 0 && <LogoIcon width="13" height="13" />}
                  </span>
                  {sms.title}
                </p>
                <p className="leading-6 ml-[1.4375rem]">{sms.message}</p>
              </div>
            </CardAccordionItem>
          );
        })}
      </CardAccordion>

      <CardAccordion header={<CardAccordionHeader icon={'☎️'} title="E-mails" />}>
        {emails.map((email, index) => {
          const itemData: ItemData = {
            id: createUniqueId('emails', 'communications', email.id),
            originalId: email.id,
            type: 'emails',
            category: 'communications',
            name: `${email.title} - ${email.email}`,
            data: email,
          };

          return (
            <CardAccordionItem key={`email-${email.id}`} itemData={itemData}>
              <div className="flex flex-row w-full gap-1 leading-4">
                <div className="flex-col">
                  <p className="text-2xs flex items-center">
                    <span className="mr-[0.625rem]">
                      {index === 0 && <LogoIcon width="13" height="13" />}
                    </span>
                    {email.title.toUpperCase()}
                  </p>
                  <p className="ml-[1.4375rem] mt-0 font-semibold">{email.email}</p>
                </div>
                <div className="flex-col text-right text-[0.6875rem] w-full leading-4">
                  <p>{email.time}</p>
                  <p>{email.date}</p>
                </div>
              </div>
            </CardAccordionItem>
          );
        })}
      </CardAccordion>
    </div>
  );
};
