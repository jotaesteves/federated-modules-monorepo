import * as React from 'react';

interface FilterOptions {
  dateRange: string;
  channel: string;
  status: string;
}

interface InteractionStatsProps {
  filters: FilterOptions;
}

const InteractionStats: React.FC<InteractionStatsProps> = ({ filters }) => {
  // Mock data - in a real app this would come from an API
  const stats = {
    total: 1247,
    completed: 1156,
    pending: 67,
    escalated: 24,
    avgResponseTime: '2.3 min',
    satisfactionScore: 4.2,
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Estatísticas do Período</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
          <div className="text-sm text-gray-500">Total</div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
          <div className="text-sm text-gray-500">Concluídas</div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
          <div className="text-sm text-gray-500">Pendentes</div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold text-red-600">{stats.escalated}</div>
          <div className="text-sm text-gray-500">Escaladas</div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600">{stats.avgResponseTime}</div>
          <div className="text-sm text-gray-500">Tempo Médio</div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold text-orange-600">{stats.satisfactionScore}</div>
          <div className="text-sm text-gray-500">Satisfação</div>
        </div>
      </div>
    </div>
  );
};

export default InteractionStats;
