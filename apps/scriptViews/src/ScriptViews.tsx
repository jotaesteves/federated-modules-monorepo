import React from 'react';
import { Helmet } from 'react-helmet';
import ErrorBoundary from 'shared/components/ErrorBoundary';

const ScriptViews: React.FC = () => {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    console.error('Records Error:', error, errorInfo);
  };

  return (
    <ErrorBoundary onError={handleError}>
      <Helmet>
        <title>Scripts Views</title>
      </Helmet>
      <h1>Scripts Views</h1>
    </ErrorBoundary>
  );
};

export default ScriptViews;
