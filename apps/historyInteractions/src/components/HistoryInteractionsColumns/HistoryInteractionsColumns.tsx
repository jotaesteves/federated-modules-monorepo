import React from 'react';
import { ColumnsHeader } from './ColumnsHeader/ColumnsHeader';
import { OccurrencesSection } from './OccurrencesSection/OccurrencesSection';
import { CommunicationsSection } from './CommunicationsSection/CommunicationsSection';

interface HistoryInteractionsColumnsProps {
  leftTitle?: string;
  rightTitle?: string;
}

export const HistoryInteractionsColumns: React.FC<HistoryInteractionsColumnsProps> = ({
  leftTitle = 'Comunicações',
  rightTitle = 'Ocorrências',
}) => {
  return (
    <div className="col-span-14 grid grid-cols-2 gap-2 overflow-y-auto h-full relative content-start">
      <ColumnsHeader leftTitle={leftTitle} rightTitle={rightTitle} />

      {/* Column 1 - Communications */}
      <CommunicationsSection />

      {/* Column 2 - OccurrencesSection */}
      <OccurrencesSection />
    </div>
  );
};
