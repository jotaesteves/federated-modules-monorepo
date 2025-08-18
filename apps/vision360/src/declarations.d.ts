// to be able to import jpg/jpeg/png files
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';

// CSS Modules typings
declare module '*.module.css' {
  const classes: { [className: string]: string };
  export default classes;
}

// Global CSS imports (side-effectful CSS like Tailwind)
declare module '*.css' {
  const content: string;
  export default content;
}

// to be able to import CSS files as strings (for regular CSS imports)
declare module '*.css?raw' {
  const content: string;
  export default content;
}

// Module Federation remotes typings
declare module 'shared/components/Card' {
  import type { ComponentType } from 'react';

  interface CardProps {
    icon?: React.ReactNode;
    title?: React.ReactNode;
    description?: React.ReactNode;
    footer?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
  }

  const CardComponent: ComponentType<CardProps>;
  export default CardComponent;
}

declare module 'shared/components/CardTabs' {
  import type { ComponentType } from 'react';

  export interface CardTabItem {
    value: string;
    label: React.ReactNode;
    content: React.ReactNode;
  }

  export interface CardTabsProps {
    icon?: React.ReactNode;
    title?: React.ReactNode;
    tabs: CardTabItem[];
    defaultValue?: string;
    className?: string;
    tabsListClassName?: string;
    tabsTriggerClassName?: string;
    tabsContentClassName?: string;
  }

  const CardTabsComponent: ComponentType<CardTabsProps>;
  export default CardTabsComponent;
}

declare module 'shared/components/CardAccordion' {
  import type { ComponentType } from 'react';

  interface CardAccordionProps {
    header: React.ReactNode;
    children: React.ReactNode;
    className?: string;
  }

  const CardAccordionComponent: ComponentType<CardAccordionProps>;
  export default CardAccordionComponent;
}

declare module 'shared/components/Icon' {
  import type { ComponentType } from 'react';

  export interface IconProps {
    type: string;
    className?: string;
    rounded?: boolean;
    size?: 'sm' | 'md' | 'lg';
  }

  const IconComponent: ComponentType<IconProps>;
  export default IconComponent;
}

declare module 'shared/components/LineBreak' {
  import type { ComponentType } from 'react';

  const LineBreakComponent: ComponentType;
  export default LineBreakComponent;
}

declare module 'shared/lib/utils' {
  export function cn(...classes: (string | undefined)[]): string;
}

declare module 'shared/styles/Global' {
  import type { ComponentType } from 'react';

  const GlobalComponent: ComponentType;
  export default GlobalComponent;
}
