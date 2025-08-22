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

declare module 'shared/components/app-sidebar' {
  import type { ComponentType } from 'react';

  const AppSidebarComponent: ComponentType<unknown>;
  export default AppSidebarComponent;
}

declare module 'shared/components/Spinner' {
  import type { ComponentType } from 'react';

  const SpinnerComponent: ComponentType<unknown>;
  export default SpinnerComponent;
}

declare module 'shared/components/ui' {
  import type { ComponentType } from 'react';

  export const SidebarProvider: ComponentType<{ children: React.ReactNode }>;
  export const SidebarInset: ComponentType<unknown>;
  export const SidebarTrigger: ComponentType<unknown>;
  export const Breadcrumb: ComponentType<unknown>;
  export const BreadcrumbItem: ComponentType<unknown>;
  export const BreadcrumbLink: ComponentType<unknown>;
  export const BreadcrumbList: ComponentType<unknown>;
  export const BreadcrumbPage: ComponentType<unknown>;
  export const BreadcrumbSeparator: ComponentType<unknown>;
  export const Separator: ComponentType<unknown>;
  export const Card: ComponentType<unknown>;
  export const CardHeader: ComponentType<unknown>;
  export const CardTitle: ComponentType<unknown>;
  export const CardContent: ComponentType<unknown>;
  export const CardFooter: ComponentType<unknown>;
  export const CardDescription: ComponentType<unknown>;
}
