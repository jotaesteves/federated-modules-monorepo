import * as React from 'react';
import { Helmet } from 'react-helmet';

import InteractionsList from './components/InteractionsList';
import InteractionFilters from './components/InteractionFilters';
import InteractionStats from './components/InteractionStats';

const HistoryInteractions: React.FC = () => {
  const [filters, setFilters] = React.useState({
    dateRange: 'last30Days',
    channel: 'all',
    status: 'all',
  });

  return (
    <>
      <Helmet>
        <title>Histórico de Interações</title>
      </Helmet>
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Histórico de Interações</h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Filters */}
            <div className="lg:col-span-1">
              <InteractionFilters filters={filters} onFiltersChange={setFilters} />
            </div>

            {/* Main content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Stats */}
              <InteractionStats filters={filters} />

              {/* Interactions list */}
              <InteractionsList filters={filters} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryInteractions;
