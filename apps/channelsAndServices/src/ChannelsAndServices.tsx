import type React from 'react';
import { Helmet } from 'react-helmet';
import { ChannelsServicesColumns } from './components/ChannelsServicesColumns/ChannelsServicesColumns';
import { DetailsSection } from './components/DetailsSection/DetailsSection';
import { DetailsRouter } from './components/details/DetailsRouter';
import { ChannelsServicesProvider } from './context/ChannelsServicesContext';

const ChannelsAndServices: React.FC = () => {
  return (
    <ChannelsServicesProvider>
      <Helmet>
        <title>Canais e Serviços</title>
      </Helmet>
      <div className="p-2 h-full max-h-[calc(75vh)] overflow-hidden">
        <div className="relative h-full grid grid-cols-24 gap-2">
          <ChannelsServicesColumns />
          <DetailsSection>
            <DetailsRouter />
          </DetailsSection>
        </div>
      </div>
    </ChannelsServicesProvider>
  );
};

export default ChannelsAndServices;
