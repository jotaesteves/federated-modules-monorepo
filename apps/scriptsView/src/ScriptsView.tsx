import React from 'react';
import { Helmet } from 'react-helmet';
// TODO: move the ErrorBoundary to the app shell
import { ErrorBoundary } from 'shared/components';

const ScriptsView: React.FC = () => {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    console.error('ScriptsView Error:', error, errorInfo);
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

export default ScriptsView;
