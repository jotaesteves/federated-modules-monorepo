import type { IconType } from 'shared/components';

export interface CallData {
  id: string;
  phoneNumber: string;
  direction: 'OUTBOUND' | 'INBOUND';
  date: string;
  time: string;
}

export interface SmsData {
  id: string;
  title: string;
  message: string;
}

export interface EmailData {
  id: string;
  title: string;
  email: string;
  date: string;
  time: string;
}

export type CommunicationType = 'calls' | 'sms-push' | 'emails';

export interface CommunicationConfig {
  type: CommunicationType;
  title: string;
  icon: IconType;
}

export type CommunicationData = CallData | SmsData | EmailData;
