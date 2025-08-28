import React from 'react';
import { Helmet } from 'react-helmet';
// TODO: move the ErrorBoundary to the app shell
import { ErrorBoundary } from 'shared/components';

const Outbounds: React.FC = () => {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    console.error('Outbounds Error:', error, errorInfo);
  };

  return (
    <ErrorBoundary onError={handleError}>
      <Helmet>
        <title>Outbounds Views</title>
      </Helmet>
      <h1>Outbounds Views</h1>
    </ErrorBoundary>
  );
};

export default Outbounds;
