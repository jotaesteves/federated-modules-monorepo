import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Suspense } from 'react';
import ErrorBoundary from 'shared/components/ErrorBoundary';

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

const Home: React.FC = () => {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    console.error('Home Error:', error, errorInfo);
  };

  return (
    <ErrorBoundary onError={handleError}>
      <Helmet>
        <title>Ínicio</title>
      </Helmet>
      <div className="grid grid-cols-24 grid-rows-10 gap-4 px-4 py-5 rounded-lg bg-gray-100 w-full overflow-y-auto h-[calc(100vh_-_194px_-_107px)]"></div>
    </ErrorBoundary>
  );
};

export default Home;
