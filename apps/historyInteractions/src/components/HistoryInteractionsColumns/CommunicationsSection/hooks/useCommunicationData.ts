import { useMemo } from 'react';
import type { ItemData } from '../../../../context/HistoryInteractionsContext';
import { createUniqueId } from '../../../../context/HistoryInteractionsContext';
import type { CallData, CommunicationType, EmailData, SmsData } from '../types/communication.types';
import { generateCallName, generateEmailName } from '../utils/communication.utils';

interface UseCommunicationDataProps {
  calls?: CallData[];
  smsPush?: SmsData[];
  emails?: EmailData[];
}

interface UseCommunicationDataReturn {
  callsItems: ItemData[];
  smsItems: ItemData[];
  emailsItems: ItemData[];
}

export const useCommunicationData = ({
  calls = [],
  smsPush = [],
  emails = []
}: UseCommunicationDataProps): UseCommunicationDataReturn => {
  const callsItems = useMemo(
    () =>
      calls.map(
        (call): ItemData => ({
          id: createUniqueId('calls', 'communications', call.id),
          originalId: call.id,
          type: 'calls' as CommunicationType,
          category: 'communications',
          name: generateCallName(call.direction, call.phoneNumber),
          data: call
        })
      ),
    [calls]
  );

  const smsItems = useMemo(
    () =>
      smsPush.map(
        (sms): ItemData => ({
          id: createUniqueId('sms-push', 'communications', sms.id),
          originalId: sms.id,
          type: 'sms-push' as CommunicationType,
          category: 'communications',
          name: sms.title,
          data: sms
        })
      ),
    [smsPush]
  );

  const emailsItems = useMemo(
    () =>
      emails.map(
        (email): ItemData => ({
          id: createUniqueId('emails', 'communications', email.id),
          originalId: email.id,
          type: 'emails' as CommunicationType,
          category: 'communications',
          name: generateEmailName(email.title, email.email),
          data: email
        })
      ),
    [emails]
  );

  return {
    callsItems,
    smsItems,
    emailsItems
  };
};
