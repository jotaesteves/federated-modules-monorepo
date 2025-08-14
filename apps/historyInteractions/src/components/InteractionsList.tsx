import * as React from 'react';

interface FilterOptions {
  dateRange: string;
  channel: string;
  status: string;
}

interface Interaction {
  id: string;
  date: string;
  time: string;
  channel: string;
  type: string;
  subject: string;
  agent: string;
  status: 'completed' | 'pending' | 'escalated' | 'cancelled';
  duration: string;
  satisfaction?: number;
}

interface InteractionsListProps {
  filters: FilterOptions;
}

const InteractionsList: React.FC<InteractionsListProps> = ({ filters }) => {
  // Mock data - in a real app this would come from an API
  const interactions: Interaction[] = [
    {
      id: '1001',
      date: '2024-01-15',
      time: '14:30',
      channel: 'phone',
      type: 'Consulta de Saldo',
      subject: 'Verificação de saldo da conta corrente',
      agent: 'Maria Silva',
      status: 'completed',
      duration: '3:45',
      satisfaction: 5,
    },
    {
      id: '1002',
      date: '2024-01-15',
      time: '11:15',
      channel: 'chat',
      type: 'Suporte Técnico',
      subject: 'Problema com acesso ao internet banking',
      agent: 'João Santos',
      status: 'pending',
      duration: '8:20',
    },
    {
      id: '1003',
      date: '2024-01-14',
      time: '16:45',
      channel: 'email',
      type: 'Reclamação',
      subject: 'Cobrança indevida de taxa',
      agent: 'Ana Costa',
      status: 'escalated',
      duration: '12:30',
      satisfaction: 2,
    },
    {
      id: '1004',
      date: '2024-01-14',
      time: '09:20',
      channel: 'whatsapp',
      type: 'Informação',
      subject: 'Horários de funcionamento das agências',
      agent: 'Carlos Mendes',
      status: 'completed',
      duration: '2:15',
      satisfaction: 4,
    },
  ];

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case 'phone':
        return '📞';
      case 'email':
        return '✉️';
      case 'chat':
        return '💬';
      case 'whatsapp':
        return '📱';
      case 'sms':
        return '📨';
      default:
        return '📋';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'escalated':
        return 'bg-red-100 text-red-800';
      case 'cancelled':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Concluído';
      case 'pending':
        return 'Pendente';
      case 'escalated':
        return 'Escalado';
      case 'cancelled':
        return 'Cancelado';
      default:
        return status;
    }
  };

  const renderSatisfactionStars = (rating?: number) => {
    if (!rating) return null;

    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-sm ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          >
            ⭐
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Histórico de Interações</h2>
        <p className="text-sm text-gray-500 mt-1">{interactions.length} interações encontradas</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Data/Hora
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Canal
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Assunto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Agente
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Duração
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Satisfação
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {interactions.map((interaction) => (
              <tr key={interaction.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div>
                    <div className="font-medium">{interaction.date}</div>
                    <div className="text-gray-500">{interaction.time}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="flex items-center">
                    <span className="mr-2">{getChannelIcon(interaction.channel)}</span>
                    <span className="capitalize">{interaction.channel}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <div>
                    <div className="font-medium">{interaction.type}</div>
                    <div className="text-gray-500 truncate max-w-xs">{interaction.subject}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {interaction.agent}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(interaction.status)}`}
                  >
                    {getStatusText(interaction.status)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {interaction.duration}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {renderSatisfactionStars(interaction.satisfaction)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InteractionsList;
