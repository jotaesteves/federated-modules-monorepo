import type React from 'react';
import { Icon } from 'shared/components';
import type { CommunicationConfig, CommunicationType } from '../types/communication.types';

/**
 * Helper function to render icons based on type
 */
export const renderCommunicationIcon = (type: CommunicationType): React.ReactNode => {
  switch (type) {
    case 'calls':
      return <Icon type="phoneCall" />;
    case 'sms-push':
      return '💻';
    case 'emails':
      return '☎️';
    default:
      return null;
  }
};

/**
 * Gets configuration for each communication section
 */
export const getCommunicationConfig = (): Record<CommunicationType, CommunicationConfig> => ({
  calls: {
    type: 'calls',
    title: 'Mobile Banking',
    icon: renderCommunicationIcon('calls')
  },
  'sms-push': {
    type: 'sms-push',
    title: 'SMS/Push',
    icon: renderCommunicationIcon('sms-push')
  },
  emails: {
    type: 'emails',
    title: 'E-mails',
    icon: renderCommunicationIcon('emails')
  }
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
