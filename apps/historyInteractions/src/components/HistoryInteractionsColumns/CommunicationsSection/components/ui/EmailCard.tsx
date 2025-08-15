import React from 'react';
import { LogoIcon } from 'shared/assets/icons';
import type { EmailData } from '../../types/communication.types';

interface EmailCardProps {
  email: EmailData;
  showIcon?: boolean;
}

export const EmailCard: React.FC<EmailCardProps> = ({ email, showIcon = false }) => {
  return (
    <div className="flex flex-row w-full gap-1 leading-4">
      <div className="flex-col">
        <p className="text-2xs flex items-center">
          <span className="mr-[0.625rem]">{showIcon && <LogoIcon width="13" height="13" />}</span>
          {email.title.toUpperCase()}
        </p>
        <p className="ml-[1.4375rem] mt-0 font-semibold break-all">{email.email}</p>
      </div>
      <div className="flex-col text-right text-[0.6875rem] w-full leading-4">
        <p>{email.time}</p>
        <p>{email.date}</p>
      </div>
    </div>
  );
};

// React Preview
const EmailCardPreview = () => {
  const mockEmail: EmailData = {
    id: '1',
    title: 'Contrato Digital Microcrédito',
    email: 'notificações@millenniumbim.co.mz',
    date: '25/04/2025',
    time: '15:35:02',
  };

  return (
    <div className="p-4 border rounded-lg space-y-4">
      <h3 className="mb-4 font-semibold">Email Card Preview</h3>
      <div>
        <h4 className="text-sm font-medium mb-2">With Icon:</h4>
        <EmailCard email={mockEmail} showIcon={true} />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Without Icon:</h4>
        <EmailCard email={mockEmail} showIcon={false} />
      </div>
    </div>
  );
};

export default EmailCardPreview;
