export interface CallData {
  id: string;
  phoneNumber: string;
  direction: 'OUTBOUND' | 'INBOUND';
  date: string;
  time: string;
}

export interface SmsData {
  id: string;
  title: string;
  message: string;
}

export interface EmailData {
  id: string;
  title: string;
  email: string;
  date: string;
  time: string;
}

export const mockCallData: CallData[] = [
  {
    id: '1',
    phoneNumber: 'X9999999',
    direction: 'OUTBOUND',
    date: '2023-01-01',
    time: '10:00:35'
  },
  {
    id: '2',
    phoneNumber: 'X9999999',
    direction: 'INBOUND',
    date: '2023-01-02',
    time: '10:00:35'
  },
  {
    id: '3',
    phoneNumber: 'X9999999',
    direction: 'INBOUND',
    date: '2023-01-02',
    time: '10:00:35'
  }
];

export const mockSmsData: SmsData[] = [
  {
    id: '1',
    title: '03-04-2020 | 14h30',
    message:
      'A conta 562401098 recebeu o valor de 1000.00 MZN as 10:53 do dia 14/05/25. Se desconhece a transaccao ligue para 8003500.'
  },
  {
    id: '2',
    title: '03-04-2020 | 14h30',
    message:
      'A conta 562401098 recebeu o valor de 1000.00 MZN as 10:53 do dia 14/05/25. Se desconhece a transaccao ligue para 8003500.'
  },
  {
    id: '3',
    title: '03-04-2020 | 14h30',
    message:
      'A conta 562401098 recebeu o valor de 1000.00 MZN as 10:53 do dia 14/05/25. Se desconhece a transaccao ligue para 8003500.'
  }
];

export const mockEmailData: EmailData[] = [
  {
    id: '1',
    title: 'Contrato Digital Microcrédito',
    email: 'notificações@millenniumbim.co.mz',
    date: '25/04/2025',
    time: '15:35:02'
  }
];
