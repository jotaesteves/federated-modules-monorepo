import React from 'react';
import { Helmet } from 'react-helmet';
import ErrorBoundary from 'shared/components/ErrorBoundary';

const Kpis: React.FC = () => {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    console.error('Kpis Error:', error, errorInfo);
  };

  return (
    <ErrorBoundary onError={handleError}>
      <Helmet>
        <title>Kpis Views</title>
      </Helmet>
      <h1>Kpis Views</h1>
    </ErrorBoundary>
  );
};

export default Kpis;
