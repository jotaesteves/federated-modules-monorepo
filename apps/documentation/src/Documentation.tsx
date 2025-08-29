import React from 'react';
import { Helmet } from 'react-helmet';
// TODO: move the ErrorBoundary to the app shell
import { ErrorBoundary } from 'shared/components';

const Documentation: React.FC = () => {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    console.error('Documentation Error:', error, errorInfo);
  };

  return (
    <ErrorBoundary onError={handleError}>
      <Helmet>
        <title>Documentation View</title>
      </Helmet>
      <h1>Documentation Views</h1>
    </ErrorBoundary>
  );
};

export default Documentation;
