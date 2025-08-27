// Import shared component declarations
/// <reference path="../../../packages/@config/webpack-config/shared-components.d.ts" />

// to be able to import jpg/jpeg/png files
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';

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

declare module 'home/Home' {
  import type { ComponentType } from 'react';

  const HomeComponent: ComponentType<unknown>;
  export default HomeComponent;
}

// Module Federation remotes typings
declare module 'vision360/Vision360' {
  import type { ComponentType } from 'react';

  const Vision360Component: ComponentType<unknown>;
  export default Vision360Component;
}

declare module 'personalData/PersonalData' {
  import type { ComponentType } from 'react';

  const PersonalDataComponent: ComponentType<unknown>;
  export default PersonalDataComponent;
}

declare module 'assetsProducts/AssetsProducts' {
  import type { ComponentType } from 'react';

  const AssetsProductsComponent: ComponentType<unknown>;
  export default AssetsProductsComponent;
}

declare module 'header/Header' {
  import type { ComponentType } from 'react';

  const HeaderComponent: ComponentType<unknown>;
  export default HeaderComponent;
}

declare module 'header/Sidebar' {
  import type { ComponentType } from 'react';

  const SidebarComponent: ComponentType<unknown>;
  export default SidebarComponent;
}

declare module 'footer/Footer' {
  import type { ComponentType } from 'react';

  const FooterComponent: ComponentType<unknown>;
  export default FooterComponent;
}

declare module 'records/Records' {
  import type { ComponentType } from 'react';

  const RecordsComponent: ComponentType<unknown>;
  export default RecordsComponent;
}
declare module 'sales/Sales' {
  import type { ComponentType } from 'react';

  const SalesComponent: ComponentType<unknown>;
  export default SalesComponent;
}
declare module 'documentation/Documentation' {
  import type { ComponentType } from 'react';

  const DocumentationComponent: ComponentType<unknown>;
  export default DocumentationComponent;
}
declare module 'outbounds/Outbounds' {
  import type { ComponentType } from 'react';

  const OutboundsComponent: ComponentType<unknown>;
  export default OutboundsComponent;
}
declare module 'scriptsView/ScriptsView' {
  import type { ComponentType } from 'react';

  const ScriptsComponent: ComponentType<unknown>;
  export default ScriptsComponent;
}
declare module 'kpi/Kpi' {
  import type { ComponentType } from 'react';

  const KpiComponent: ComponentType<unknown>;
  export default KpiComponent;
}
declare module 'settingsView/SettingsView' {
  import type { ComponentType } from 'react';

  const SettingsViewComponent: ComponentType<unknown>;
  export default SettingsViewComponent;
}
