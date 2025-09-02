import type React from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router';
// TODO: move the ErrorBoundary to the app shell
import { ErrorBoundary } from 'shared/components';

export { getRecordsForOutlet, type RecordsRouteConfig } from './routes';

const Records: React.FC = () => {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    // eslint-disable-next-line no-console
    console.error('Records Error:', error, errorInfo);
  };

  return (
    <ErrorBoundary onError={handleError}>
      <Helmet>
        <title>Registos</title>
      </Helmet>
      <div className=" bg-gray-100 h-full">
        <h1>Registos</h1>
        <Outlet />
      </div>
    </ErrorBoundary>
  );
};

export default Records;
