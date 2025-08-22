import * as React from 'react';
import FallbackSpinner from '../../components/FallbackSpinner/FallbackSpinner';

const ChannelsAndServices = React.lazy(() => import('channelsAndServices/ChannelsAndServices'));

export const ChannelsAndServicesPage: React.FC = () => {
  return (
    <React.Suspense
      fallback={
        <div className=" bg-white p-6 text-center">
          <FallbackSpinner />
        </div>
      }
    >
      <div className=" bg-gray-100 h-full">
        <ChannelsAndServices />
      </div>
    </React.Suspense>
  );
};

export default ChannelsAndServicesPage;
