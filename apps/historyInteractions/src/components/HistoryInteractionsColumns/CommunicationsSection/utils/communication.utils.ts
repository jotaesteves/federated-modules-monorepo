import type { CommunicationConfig, CommunicationType } from '../types/communication.types';

/**
 * Gets configuration for each communication section
 */
export const getCommunicationConfig = (): Record<CommunicationType, CommunicationConfig> => ({
  calls: {
    type: 'calls',
    title: 'Mobile Banking',
    icon: '📱',
  },
  'sms-push': {
    type: 'sms-push',
    title: 'SMS/Push',
    icon: '💻',
  },
  emails: {
    type: 'emails',
    title: 'E-mails',
    icon: '☎️',
  },
});

/**
 * Formats call direction display
 */
export const formatCallDirection = (direction: 'OUTBOUND' | 'INBOUND'): string => {
  return direction === 'INBOUND' ? 'Recebida' : 'Efetuada';
};

/**
 * Generates call name for ItemData
 */
export const generateCallName = (
  direction: 'OUTBOUND' | 'INBOUND',
  phoneNumber: string
): string => {
  return `Chamada ${formatCallDirection(direction)} - ${phoneNumber}`;
};

/**
 * Generates email name for ItemData
 */
export const generateEmailName = (title: string, email: string): string => {
  return `${title} - ${email}`;
};
