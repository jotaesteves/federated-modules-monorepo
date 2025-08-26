import * as React from 'react';
import Spinner from 'shared/components/Spinner';

const ChannelsAndServices = React.lazy(
  () => import(/* webpackPrefetch: true */ 'channelsAndServices/ChannelsAndServices')
);

const ChannelsAndServicesPage: React.FC = () => {
  return (
    <React.Suspense
      fallback={
        <div className=" bg-white p-6 text-center">
          <Spinner />
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
