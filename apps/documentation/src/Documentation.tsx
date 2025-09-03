import type React from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router';
// TODO: move the ErrorBoundary to the app shell
import { ErrorBoundary } from 'shared/components';

export { type DocumentationRouteConfig, getDocumentationForOutlet } from './routes';

const Documentation: React.FC = () => {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    console.error('Documentation Error:', error, errorInfo);
  };

  return (
    <ErrorBoundary onError={handleError}>
      <Helmet>
        <title>Documentation View</title>
      </Helmet>
      <div className=" bg-gray-100 h-full">
        <h1>Documentation Views</h1>
        <Outlet />
      </div>
    </ErrorBoundary>
  );
};

export default Documentation;
