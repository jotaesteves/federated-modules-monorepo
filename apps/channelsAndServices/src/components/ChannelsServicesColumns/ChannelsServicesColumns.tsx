import type React from 'react';
import { ChannelsSection } from '../ChannelsSection/ChannelsSection';
import { ChannelsServicesHeader } from '../ChannelsServicesHeader/ChannelsServicesHeader';
import { ServicesSection } from '../ServicesSection/ServicesSection';

interface ChannelsServicesColumnsProps {
  leftTitle?: string;
  rightTitle?: string;
}

export const ChannelsServicesColumns: React.FC<ChannelsServicesColumnsProps> = ({
  leftTitle = 'Canais',
  rightTitle = 'Outros Serviços'
}) => {
  return (
    <div className="col-span-14 grid grid-cols-2 gap-2 overflow-y-auto h-full relative content-start">
      <ChannelsServicesHeader leftTitle={leftTitle} rightTitle={rightTitle} />

      {/* Column 1 - Assets */}
      <ChannelsSection />

      {/* Column 2 - Liabilities */}
      <ServicesSection />
    </div>
  );
};
