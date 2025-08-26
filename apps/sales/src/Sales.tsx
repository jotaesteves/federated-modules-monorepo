import * as React from 'react';
import { Helmet } from 'react-helmet';
import ErrorBoundary from 'shared/components/ErrorBoundary';

// Loading Component

const Sales: React.FC = () => {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    console.error('Sales Error:', error, errorInfo);
  };

  return (
    <ErrorBoundary onError={handleError}>
      <Helmet>
        <title>Sales</title>
      </Helmet>
      <h1>Sales Page</h1>
    </ErrorBoundary>
  );
};

export default Sales;
