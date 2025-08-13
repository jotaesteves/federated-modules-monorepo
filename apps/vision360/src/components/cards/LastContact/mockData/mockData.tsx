import type { CardAccordionItemContactsProps } from 'src/components/cards/LastContact/components/CardAccordionItemContacts';

export const CardAccordionItemContactsMapData: CardAccordionItemContactsProps[] = [
  {
    header: {
      icon: 'phoneCall',
      iconBackground: 'bg-green',
      date: '22-04-2025',
      time: '05h30',
      title: 'Cartões - Cancelamento / Bloqueio',
    },
    body: [
      {
        icon: 'ringCall',
        label: 'Origem',
      },
      {
        icon: 'callCenterWorker',
        label: 'Comunicador',
        value: 'x230876 | El Kaizen',
      },
    ],
  },
  {
    header: {
      icon: 'phoneCall',
      iconBackground: 'bg-blue',
      date: '18-04-2025',
      time: '01h30',
      title: 'Cartões - Cancelamento / Bloqueio',
    },
    body: [
      {
        icon: 'ringCall',
        label: 'Origem',
      },
      {
        icon: 'callCenterWorker',
        label: 'Comunicador',
        value: 'x230876 | El Kaizen',
      },
    ],
  },
];
