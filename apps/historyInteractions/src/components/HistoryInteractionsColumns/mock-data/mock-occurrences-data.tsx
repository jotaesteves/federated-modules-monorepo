export interface ComplainsData {
  id: string;
  complainId: string;
  badge: 'SUBMITED' | 'CONCLUDED';
  transferName: string;
  transferValue: string;
  startDate: string;
  endDate: string;
}

export interface IncidentsData {
  id: string;
  incidentId: string;
  message: string;
  date: string;
}

export interface MemosData {
  id: string;
  memoId: string;
  message: string;
  date: string;
}

export const mockComplainsData: ComplainsData[] = [
  {
    id: '1',
    complainId: '133342212',
    badge: 'SUBMITED',
    transferName: 'Transferência e-mola',
    transferValue: '600,00',
    startDate: '26/03/2025',
    endDate: '25/04/2025',
  },
  {
    id: '2',
    complainId: '133342212',
    badge: 'CONCLUDED',
    transferName: 'Transferência e-mola',
    transferValue: '600,00',
    startDate: '26/03/2025',
    endDate: '25/04/2025',
  },
  {
    id: '3',
    complainId: '133342212',
    badge: 'SUBMITED',
    transferName: 'Transferência e-mola',
    transferValue: '600,00',
    startDate: '26/03/2025',
    endDate: '25/04/2025',
  },
];

export const mockIncidentsData: IncidentsData[] = [
  {
    id: '1',
    incidentId: 'INIBCHQS',
    message: 'Conta inibida de requisitar cheques',
    date: '22-04-2025',
  },
  {
    id: '2',
    incidentId: 'INIBCHQS',
    message: 'Conta inibida de requisitar cheques',
    date: '22-04-2025',
  },
];

export const mockMemosData: MemosData[] = [
  {
    id: '1',
    memoId: 'OPE',
    message: 'Cliente tem operações para o estrangeiro',
    date: '22-04-2025',
  },
];
