import React from 'react';
import { CommunicationsSectionContainer } from './components/CommunicationsSectionContainer';
import type { CallData, SmsData, EmailData } from './types/communication.types';

interface CommunicationsSectionProps {
  calls?: CallData[];
  smsPush?: SmsData[];
  emails?: EmailData[];
}

export const CommunicationsSection: React.FC<CommunicationsSectionProps> = (props) => {
  return <CommunicationsSectionContainer {...props} />;
};
