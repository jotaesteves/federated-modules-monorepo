import * as React from 'react';
import { Helmet } from 'react-helmet';
import ErrorBoundary from 'shared/components/ErrorBoundary';

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
