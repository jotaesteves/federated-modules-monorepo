import type React from 'react';
import { ActivesSection } from '../ActivesSection/ActivesSection';
import { AssetsHeader } from '../AssetsHeader/AssetsHeader';
import { PassivesSection } from '../PassivesSection/PassivesSection';

interface AssetsColumnsProps {
  leftTitle?: string;
  rightTitle?: string;
}

export const AssetsColumns: React.FC<AssetsColumnsProps> = ({
  leftTitle = 'Ativos',
  rightTitle = 'Passivos'
}) => {
  return (
    <div className="col-span-14 grid grid-rows-[auto_1fr] gap-2 h-full relative content-start rounded-[20px] overflow-hidden">
      <AssetsHeader leftTitle={leftTitle} rightTitle={rightTitle} />

      {/* Column 1 - Assets */}
      <div className="grid grid-cols-2 gap-2 min-h-0">
        <ActivesSection />

        {/* Column 2 - Liabilities */}
        <PassivesSection />
      </div>
    </div>
  );
};
