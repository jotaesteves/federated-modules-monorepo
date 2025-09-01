import React from 'react';
import type { CardProps } from './Card';
export interface CardTabItem {
  value: string;
  label: React.ReactNode;
  content: React.ReactNode;
}
export interface CardTabsProps extends Omit<CardProps, 'children'> {
  tabs: CardTabItem[];
  defaultValue?: string;
  tabsListClassName?: string;
  tabsTriggerClassName?: string;
  tabsContentClassName?: string;
}
declare const CardTabs: React.ForwardRefExoticComponent<
  CardTabsProps & React.RefAttributes<HTMLDivElement>
>;
export default CardTabs;
//# sourceMappingURL=CardTabs.d.ts.map
