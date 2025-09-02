import type React from 'react';
import { Helmet } from 'react-helmet';
// TODO: move the ErrorBoundary to the app shell
import { ErrorBoundary } from 'shared/components';

const SettingsView: React.FC = () => {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    console.error('SettingsView Error:', error, errorInfo);
  };

  return (
    <ErrorBoundary onError={handleError}>
      <Helmet>
        <title>Settings View</title>
      </Helmet>
      <h1>Settings View</h1>
    </ErrorBoundary>
  );
};

export default SettingsView;
