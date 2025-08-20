import * as React from 'react';
import { Helmet } from 'react-helmet';
import { HistoryInteractionsColumns } from './components/HistoryInteractionsColumns/HistoryInteractionsColumns';
import { HistoryInteractionsProvider } from './context/HistoryInteractionsContext';
import { DetailsSection } from './components/DetailsSection/DetailsSection';
import { DetailsRouter } from './components/details/DetailsRouter';

const HistoryInteractions: React.FC = () => {
  return (
    <HistoryInteractionsProvider>
      <Helmet>
        <title>Histórico de Interações</title>
      </Helmet>
      <div className="p-2 h-full max-h-[calc(75vh)] overflow-hidden">
        <div className="relative h-full grid grid-cols-24 gap-2">
          <HistoryInteractionsColumns />
          <DetailsSection>
            <DetailsRouter />
          </DetailsSection>
        </div>
      </div>
    </HistoryInteractionsProvider>
  );
};

export default HistoryInteractions;
