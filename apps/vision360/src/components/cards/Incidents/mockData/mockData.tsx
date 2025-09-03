import type { CardAccordionItemClaimsProps } from 'src/components/cards/Incidents/components/CardAccordionItemClaims';

export const CardAccordionItemClaimsMapData: CardAccordionItemClaimsProps[] = [
  {
    id: '1',
    number: '1333422312',
    registerDate: '09/03/2025',
    deadlineDate: '26/03/2025',
    status: 'Submetido',
    amount: '800,00 MZN',
    type: 'Tranferência e-Mola'
  },
  {
    id: '2',
    number: '1333422313',
    registerDate: '21/12/2025',
    deadlineDate: '29/12/2025',
    status: 'Submetido',
    amount: '1000,00 MZN',
    type: 'Tranferência e-Mola'
  }
];

export const CardItemIncidentsMapData = [
  {
    id: '1',
    date: '22-04-2025',
    type: 'INIBCHQS',
    title: 'Conta inibida de requisitar cheques',
    link: '/incident1'
  },
  {
    id: '2',
    date: '22-04-2025',
    type: 'MEMO',
    title: 'Conta sem assinatura digitalizada',
    link: '/incident2'
  },
  {
    id: '3',
    date: '22-04-2025',
    type: 'INIBCHQS',
    title: 'Conta inibida de requisitar cheques',
    link: '/incident3'
  }
];
