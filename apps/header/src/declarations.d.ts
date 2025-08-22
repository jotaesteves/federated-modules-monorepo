// to be able to import jpg/jpeg/png/svg files
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
  }
}
