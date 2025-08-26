import React from 'react';
import { Helmet } from 'react-helmet';
// TODO: move the ErrorBoundary to the app shell
import { ErrorBoundary } from 'shared/components';
import { Routes, Route, Navigate } from 'react-router';
import { ROUTES_CONFIG } from './routes';

const Records: React.FC = () => {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    // eslint-disable-next-line no-console
    console.error('Records Error:', error, errorInfo);
  };

  return (
    <ErrorBoundary onError={handleError}>
      <Helmet>
        <title>Registos</title>
      </Helmet>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Registos</h1>
        <Routes>
          <Route path="/" element={<Navigate to="cards/cancels" replace />} />
          {ROUTES_CONFIG.map((category) =>
            category.routes.map((route) => {
              const fullPath = `${category.basePath}${route.path}`;
              return <Route key={fullPath} path={fullPath} element={<route.component />} />;
            })
          )}
          <Route path="*" element={<Navigate to="cards/cancels" replace />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
};

export default Records;
