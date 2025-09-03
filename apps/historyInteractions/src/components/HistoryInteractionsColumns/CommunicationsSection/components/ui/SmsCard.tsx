import type React from 'react';
import { LogoIcon } from 'shared/assets/icons';
import type { SmsData } from '../../types/communication.types';

interface SmsCardProps {
  sms: SmsData;
  showIcon?: boolean;
}

export const SmsCard: React.FC<SmsCardProps> = ({ sms, showIcon = false }) => {
  return (
    <div className="flex flex-col w-full space-y-1">
      <p className="font-semibold flex items-center">
        <span className="mr-[0.625rem]">{showIcon && <LogoIcon width="13" height="13" />}</span>
        {sms.title}
      </p>
      <p className="leading-6 ml-[1.4375rem]">{sms.message}</p>
    </div>
  );
};

// React Preview
const SmsCardPreview = () => {
  const mockSms: SmsData = {
    id: '1',
    title: '03-04-2020 | 14h30',
    message:
      'A conta 562401098 recebeu o valor de 1000.00 MZN as 10:53 do dia 14/05/25. Se desconhece a transaccao ligue para 8003500.'
  };

  return (
    <div className="p-4 border rounded-lg space-y-4">
      <h3 className="mb-4 font-semibold">SMS Card Preview</h3>
      <div>
        <h4 className="text-sm font-medium mb-2">With Icon:</h4>
        <SmsCard sms={mockSms} showIcon={true} />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Without Icon:</h4>
        <SmsCard sms={mockSms} showIcon={false} />
      </div>
    </div>
  );
};

export default SmsCardPreview;
