import * as React from 'react';
import Card, { CardProps } from './Card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';

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

const CardTabs = React.forwardRef<HTMLDivElement, CardTabsProps>(
  (
    {
      tabs,
      defaultValue,
      tabsListClassName,
      tabsTriggerClassName,
      tabsContentClassName,
      ...cardProps
    },
    ref
  ) => {
    const defaultTab = defaultValue || (tabs.length > 0 ? tabs[0].value : '');

    return (
      <Card ref={ref} {...cardProps}>
        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className={tabsListClassName}>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value} className={tabsTriggerClassName}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className={tabsContentClassName}>
              {tab.content}
            </TabsContent>
          ))}
        </Tabs>
      </Card>
    );
  }
);

CardTabs.displayName = 'CardTabs';

export default CardTabs;
