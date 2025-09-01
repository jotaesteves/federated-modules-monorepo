import React from 'react';
import { CardAccordion } from 'shared/components';
import type { IconProps } from 'shared/components';
import { Icon } from 'shared/components';
import { cn } from 'shared/lib/utils';

export interface CardHeaderProps {
  icon: IconProps['type'];
  iconBackground: string;
  date: string;
  time: string;
  title: string;
}

export interface CardBodyItemProps {
  icon: IconProps['type'];
  label: string;
  value?: string;
}

export interface CardAccordionItemContactsProps {
  header: CardHeaderProps;
  body: CardBodyItemProps[];
}

export const CardAccordionItemContacts: React.FC<CardAccordionItemContactsProps> = ({
  header: { icon, iconBackground, date, time, title },
  body,
}) => {
  return (
    <CardAccordion
      header={
        <div className="flex gap-2">
          <Icon type={icon} className={cn(iconBackground)} rounded size="sm" />
          <div className="flex flex-col">
            <span className="text-gray-800 opacity-55 text-xs font-semibold">
              {date} | {time}
            </span>
            <p>{title}</p>
          </div>
        </div>
      }
    >
      <div className="flex flex-col">
        {body.map(({ icon: itemIcon, label, value }, index) => (
          <div key={index} className="flex text-gray-800 items-center">
            <Icon type={itemIcon} />
            <div className="flex justify-between items-center w-full">
              <p>{label}</p>
              {value && <span className="text-gray-600 text-right">{value}</span>}
            </div>
          </div>
        ))}
      </div>
    </CardAccordion>
  );
};
