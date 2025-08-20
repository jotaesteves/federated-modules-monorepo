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
declare module 'shared/components/ErrorBoundary' {
  import type { ComponentType } from 'react';

  export interface ErrorBoundaryProps {
    children: React.ReactNode;
    fallback?: React.ReactNode;
    onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  }

  const ErrorBoundaryComponent: ComponentType<ErrorBoundaryProps>;
  export default ErrorBoundaryComponent;
}
