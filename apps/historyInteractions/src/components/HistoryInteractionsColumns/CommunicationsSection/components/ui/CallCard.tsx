import type React from 'react';
import type { CallData } from '../../types/communication.types';

interface CallCardProps {
  call: CallData;
}

export const CallCard: React.FC<CallCardProps> = ({ call }) => {
  return (
    <div className="flex flex-row justify-between items-center w-full space-y-1 pr-[14px]">
      <p className="font-semibold">
        {call.phoneNumber}{' '}
        <span className="pl-[1.875rem] capitalize">{call.direction.toLowerCase()}</span>
      </p>
      <div className="flex-col text-right">
        <p className="text-[0.6875rem]">{call.time}</p>
        <p className="text-[0.6875rem]">{call.date}</p>
      </div>
    </div>
  );
};

// React Preview
const CallCardPreview = () => {
  const mockCall: CallData = {
    id: '1',
    phoneNumber: 'X9999999',
    direction: 'INBOUND',
    date: '2023-01-01',
    time: '10:00:35'
  };

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="mb-4 font-semibold">Call Card Preview</h3>
      <CallCard call={mockCall} />
    </div>
  );
};

export default CallCardPreview;
