import React from 'react';
import { AssetsHeader } from '../AssetsHeader/AssetsHeader';
import { ProductSection } from '../ProductSection/ProductSection';

interface AssetsColumnsProps {
  leftTitle?: string;
  rightTitle?: string;
}

export const AssetsColumns: React.FC<AssetsColumnsProps> = ({
  leftTitle = 'Ativos',
  rightTitle = 'Passivos',
}) => {
  return (
    <div className="col-span-14 grid grid-cols-2 gap-2 overflow-y-scroll relative content-start">
      <AssetsHeader leftTitle={leftTitle} rightTitle={rightTitle} />

      {/* Column 1 - Assets */}
      <ProductSection />

      {/* Column 2 - Liabilities */}
      <ProductSection />
    </div>
  );
};
