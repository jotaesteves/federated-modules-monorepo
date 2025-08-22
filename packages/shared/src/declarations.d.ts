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

// Global Window interface extensions for microfrontend architecture
declare global {
  interface Window {
    // Navigation system for microfrontends
    navigation?: {
      navigateTo: (path: string) => void;
      getRouteFromTab?: (tab: string) => string;
      getTabFromRoute?: (route: string) => string;
    };

    // Event bus for inter-microfrontend communication
    eventBus?: {
      on: (type: string, listener: (event: unknown) => void) => void;
      off: (type: string, listener: (event: unknown) => void) => void;
      emit: (event: unknown) => void;
    };

    // Footer store for global state management
    globalFooterStore?: {
      getState: () => Record<string, unknown>;
      subscribe: (listener: () => void) => () => void;
    };
  }
}

// Module Federation subpath typings for navigation helpers
declare module 'shared/shared/navigation' {
  export type NavigateFn = (path: string) => void;
  export function setNavigator(fn?: NavigateFn): void;
  export function navigate(path: string): void;
  export const TAB_TO_ROUTE: Record<string, string>;
  export const ROUTE_TO_TAB: Record<string, string>;
  export function getRouteFromTab(tab: string): string;
  export function getTabFromRoute(route: string): string;
}
