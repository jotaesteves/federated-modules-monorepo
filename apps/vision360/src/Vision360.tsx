import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Suspense } from 'react';
import ErrorBoundary from 'shared/components/ErrorBoundary';
// import ChannelsAndServices from 'src/components/cards/ChannelsAndServices';
// import EstateAndProducts from 'src/components/cards/EstateAndProducts';
// import Incidents from 'src/components/cards/Incidents/Incidents';
// import LastContact from 'src/components/cards/LastContact';
// import PersonalData from 'src/components/cards/PersonalData';

// Loading Component
const LoadingCard: React.FC = () => (
  <div className="bg-white rounded-lg shadow-sm p-4 animate-pulse">
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
    <div className="space-y-2">
      <div className="h-3 bg-gray-200 rounded"></div>
      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
      <div className="h-3 bg-gray-200 rounded w-4/6"></div>
    </div>
  </div>
);

// Lazy load components with error handling
const LazyPersonalData = React.lazy(() =>
  import('src/components/cards/PersonalData').catch(() => ({
    default: () => (
      <div className="bg-white rounded-lg p-4 text-center text-red-500">
        Failed to load Personal Data component
      </div>
    ),
  }))
);

const LazyEstateAndProducts = React.lazy(() =>
  import('src/components/cards/EstateAndProducts').catch(() => ({
    default: () => (
      <div className="bg-white rounded-lg p-4 text-center text-red-500">
        Failed to load Estate and Products component
      </div>
    ),
  }))
);

const LazyLastContact = React.lazy(() =>
  import('src/components/cards/LastContact').catch(() => ({
    default: () => (
      <div className="bg-white rounded-lg p-4 text-center text-red-500">
        Failed to load Last Contact component
      </div>
    ),
  }))
);

const LazyChannelsAndServices = React.lazy(() =>
  import('src/components/cards/ChannelsAndServices').catch(() => ({
    default: () => (
      <div className="bg-white rounded-lg p-4 text-center text-red-500">
        Failed to load Channels and Services component
      </div>
    ),
  }))
);

const LazyIncidents = React.lazy(() =>
  import('src/components/cards/Incidents/Incidents').catch(() => ({
    default: () => (
      <div className="bg-white rounded-lg p-4 text-center text-red-500">
        Failed to load Incidents component
      </div>
    ),
  }))
);

const Vision360: React.FC = () => {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    console.error('Vision360 Error:', error, errorInfo);
  };

  return (
    <ErrorBoundary onError={handleError}>
      <Helmet>
        <title>Visão 360</title>
      </Helmet>
      <div className="grid grid-cols-24 grid-rows-10 gap-4 px-4 py-5 rounded-lg bg-gray-100 w-full overflow-y-auto h-[calc(100vh_-_194px_-_107px)]">
        {/* Personal Data */}
        <div className="row-span-10 col-span-5">
          <ErrorBoundary>
            <Suspense fallback={<LoadingCard />}>
              <LazyPersonalData />
            </Suspense>
          </ErrorBoundary>
        </div>

        {/* Estate and Products */}
        <div className="col-span-13 col-start-6 row-span-5">
          <ErrorBoundary>
            <Suspense fallback={<LoadingCard />}>
              <LazyEstateAndProducts />
            </Suspense>
          </ErrorBoundary>
        </div>

        {/* Last Contact */}
        <div className="col-start-19 col-span-6 row-span-5">
          <ErrorBoundary>
            <Suspense fallback={<LoadingCard />}>
              <LazyLastContact />
            </Suspense>
          </ErrorBoundary>
        </div>

        {/* Channels and Services */}
        <div className="col-start-6 col-span-13 row-span-5 row-start-6">
          <ErrorBoundary>
            <Suspense fallback={<LoadingCard />}>
              <LazyChannelsAndServices />
            </Suspense>
          </ErrorBoundary>
        </div>

        {/* Incidents */}
        <div className="col-span-6 col-start-19 row-start-6 row-span-5">
          <ErrorBoundary>
            <Suspense fallback={<LoadingCard />}>
              <LazyIncidents />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Vision360;
