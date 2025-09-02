import * as React from 'react';

const { lazy, Suspense } = React;

const HistoryInteractions = lazy(() => import('historyInteractions/HistoryInteractions'));

const HistoryInteractionsPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading Histórico de Interações...</div>}>
      <HistoryInteractions />
    </Suspense>
  );
};

export default HistoryInteractionsPage;
