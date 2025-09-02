import type React from 'react';
import { useCommunicationData } from '../hooks/useCommunicationData';
import { mockCallData, mockEmailData, mockSmsData } from '../mock-data/mock-communication-data';
import type { CallData, EmailData, SmsData } from '../types/communication.types';
import { CommunicationSection } from './containers/CommunicationSection';

interface CommunicationsSectionContainerProps {
  calls?: CallData[];
  smsPush?: SmsData[];
  emails?: EmailData[];
}

export const CommunicationsSectionContainer: React.FC<CommunicationsSectionContainerProps> = ({
  calls = mockCallData,
  smsPush = mockSmsData,
  emails = mockEmailData
}) => {
  const { callsItems, smsItems, emailsItems } = useCommunicationData({
    calls,
    smsPush,
    emails
  });

  return (
    <div className="grid gap-2 content-start">
      <CommunicationSection type="calls" items={callsItems} data={calls} />

      <CommunicationSection type="sms-push" items={smsItems} data={smsPush} />

      <CommunicationSection type="emails" items={emailsItems} data={emails} />
    </div>
  );
};

// React Preview
const CommunicationsSectionContainerPreview = () => {
  return (
    <div className="p-4">
      <h3 className="mb-4 font-semibold">Communications Section Preview</h3>
      <CommunicationsSectionContainer />
    </div>
  );
};

export default CommunicationsSectionContainerPreview;
