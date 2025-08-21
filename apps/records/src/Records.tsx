import React from 'react';
import { Helmet } from 'react-helmet';
import ErrorBoundary from 'shared/components/ErrorBoundary';

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
