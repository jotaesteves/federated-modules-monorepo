import * as React from 'react';
import { AssetsHeader } from '../AssetsHeader/AssetsHeader';
import { ActivesSection } from '../CommunicationsSection/CommunicationsSection';
import { Occurrences } from '../Occurrences/Occurrences';

interface AssetsColumnsProps {
  leftTitle?: string;
  rightTitle?: string;
}

export const AssetsColumns: React.FC<AssetsColumnsProps> = ({
  leftTitle = 'Ativos',
  rightTitle = 'Passivos',
}) => {
  return (
    <div className="col-span-14 grid grid-cols-2 gap-2 overflow-y-auto h-full relative content-start">
      <AssetsHeader leftTitle={leftTitle} rightTitle={rightTitle} />

      {/* Column 1 - Assets */}
      <ActivesSection />

      {/* Column 2 - Liabilities */}
      <OccurrencesSection />
    </div>
  );
};
