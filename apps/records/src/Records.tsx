import React from 'react';
import { Helmet } from 'react-helmet';
// TODO: move the ErrorBoundary to the app shell
import { ErrorBoundary } from 'shared/components';

export { getRoutesForOutlet, type RouteConfig } from './routes';
import { Outlet } from 'react-router';

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
