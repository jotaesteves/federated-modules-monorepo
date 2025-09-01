import { CardAccordion } from 'shared/components';

export interface CardAccordionItemClaimsProps {
  number: string;
  registerDate: string;
  deadlineDate: string;
  status: string;
  amount: string;
  type: string;
}

export const CardAccordionItemClaims: React.FC<CardAccordionItemClaimsProps> = ({
  number,
  registerDate,
  deadlineDate,
  status,
  amount,
  type,
}) => {
  const infoItems = [
    { label: 'Data Registro | Prazo', value: `${registerDate} | ${deadlineDate}` },
    { label: 'Estado', value: status },
    { label: 'Montante', value: amount },
    { label: 'Tipo', value: type },
  ];

  return (
    <CardAccordion
      header={
        <div className="flex gap-2">
          <div className="flex flex-col">
            <p className="flex font-semibold text-gray-800 gap-1">
              Nº Reclamação - <span className="font-normal">{number}</span>
            </p>
          </div>
        </div>
      }
    >
      <div className="flex flex-col gap-1">
        {infoItems.map(({ label, value }) => (
          <div key={label} className="flex justify-between gap-5">
            <p className="font-medium whitespace-nowrap">{label}</p>
            <span className="text-gray-600 text-right">{value}</span>
          </div>
        ))}
      </div>
    </CardAccordion>
  );
};
