import React from 'react';
import { Helmet } from 'react-helmet';
// TODO: move the ErrorBoundary to the app shell
import { ErrorBoundary } from 'shared/components';

const Records: React.FC = () => {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    console.error('Records Error:', error, errorInfo);
  };

  return (
    <ErrorBoundary onError={handleError}>
      <Helmet>
        <title>Registos</title>
      </Helmet>
    </ErrorBoundary>
  );
};

export default Records;
