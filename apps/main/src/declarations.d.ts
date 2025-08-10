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
import type { ComponentType } from 'react';

declare module 'vision360/Vision360' {
  const Component: ComponentType<unknown>;
  export default Component;
}

declare module 'app2/App2' {
  const Component: ComponentType<unknown>;
  export default Component;
}

declare module 'personalData/PersonalData' {
  const Component: ComponentType<unknown>;
  export default Component;
}

declare module 'header/Header' {
  const Component: ComponentType<unknown>;
  export default Component;
}

declare module 'header/Sidebar' {
  const Component: ComponentType<unknown>;
  export default Component;
}

declare module 'footer/Footer' {
  const Component: ComponentType<unknown>;
  export default Component;
}
