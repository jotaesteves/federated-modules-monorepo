import type { ComplainsData, IncidentsData, MemosData } from '../types/occurrence.types';

export const mockComplainsData: ComplainsData[] = [
  {
    id: '1',
    complainId: 'REC001',
    badge: 'SUBMITED',
    transferName: 'Transferência Internacional',
    transferValue: '25,000.00',
    startDate: '15/08/2024',
    endDate: '20/08/2024',
  },
  {
    id: '2',
    complainId: 'REC002',
    badge: 'COMPLETE',
    transferName: 'Pagamento de Salário',
    transferValue: '45,000.00',
    startDate: '10/08/2024',
    endDate: '15/08/2024',
  },
];

export const mockIncidentsData: IncidentsData[] = [
  {
    id: '1',
    name: 'Falha no Sistema de Pagamentos',
    accountNumber: '1234567890',
    status: 'active',
  },
  {
    id: '2',
    name: 'Tentativa de Acesso Não Autorizado',
    accountNumber: '0987654321',
    status: 'blocked',
  },
];

export const mockMemosData: MemosData[] = [
  {
    id: '1',
    name: 'Seguro de Vida',
    accountNumber: '1122334455',
    initialValue: '150,000.00',
    currency: 'MZN',
    status: 'ativo',
  },
  {
    id: '2',
    name: 'Seguro Automóvel',
    accountNumber: '5544332211',
    initialValue: '85,000.00',
    currency: 'MZN',
    status: 'pendente',
  },
];
