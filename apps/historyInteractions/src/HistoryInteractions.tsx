import type * as React from 'react';
import { Helmet } from 'react-helmet';
import { DetailsSection } from './components/DetailsSection/DetailsSection';
import { DetailsRouter } from './components/details/DetailsRouter';
import { HistoryInteractionsColumns } from './components/HistoryInteractionsColumns/HistoryInteractionsColumns';
import { HistoryInteractionsProvider } from './context/HistoryInteractionsContext';

const HistoryInteractions: React.FC = () => {
  return (
    <HistoryInteractionsProvider>
      <Helmet>
        <title>Histórico de Interações</title>
      </Helmet>
      <div className="h-full max-h-[calc(75vh)] overflow-hidden">
        <div className="relative grid grid-cols-24 gap-2 px-4 py-5 rounded-lg  w-full overflow-y-auto h-[calc(100vh_-_194px_-_107px)]">
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
