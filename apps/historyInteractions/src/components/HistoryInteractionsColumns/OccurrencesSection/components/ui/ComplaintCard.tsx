import React from 'react';
import { Badge } from 'shared/components/ui';
import { LogoIcon } from 'shared/assets/icons';
import type { ComplainsData } from '../../types/occurrence.types';
import { getBadgeConfig, formatCurrency } from '../../utils/occurrence.utils';

interface ComplaintCardProps {
  complaint: ComplainsData;
}

export const ComplaintCard: React.FC<ComplaintCardProps> = ({ complaint }) => {
  const badgeConfig = getBadgeConfig(complaint.badge, 'complains');

  return (
    <div className="flex flex-row w-full gap-1 leading-4">
      <div className="flex-col mr-[0.9375rem]">
        <p className="flex items-center font-semibold">
          <span className="mr-[0.625rem]">
            <LogoIcon width="13" height="13" />
          </span>
          {complaint.complainId}
        </p>
        <Badge
          variant={badgeConfig.variant}
          className="ml-[1.4375rem] mt-[0.36625rem] text-[0.520625rem] px-1"
        >
          {badgeConfig.label}
        </Badge>
      </div>
      <div className="flex-col w-full">
        <p className="text-2xs flex text-zinc-600">{complaint.transferName.toUpperCase()}</p>
        <p className="flex-inline font-semibold mt-1 align-bottom">
          {formatCurrency(complaint.transferValue)}
        </p>
      </div>
      <div className="flex-col text-right leading-4">
        <p className="text-[0.6875rem]">{complaint.startDate}</p>
        <p className="text-[0.6875rem]">{complaint.endDate}</p>
      </div>
    </div>
  );
};

// React Preview
const ComplaintCardPreview = () => {
  const mockComplaint: ComplainsData = {
    id: '1',
    complainId: 'REC001',
    badge: 'SUBMITED',
    transferName: 'Transferência Internacional',
    transferValue: '25,000.00',
    startDate: '15/08/2024',
    endDate: '20/08/2024',
  };

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="mb-4 font-semibold">Complaint Card Preview</h3>
      <ComplaintCard complaint={mockComplaint} />
    </div>
  );
};

export default ComplaintCardPreview;
