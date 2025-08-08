import * as React from 'react';
// Import the main globals.css which contains the @theme and Tailwind configuration
// This is the single entry point for all Tailwind CSS across the monorepo
import './globals.css';

/**
 * TailwindProvider component that loads Tailwind CSS styles for the entire monorepo
 *
 * Architecture:
 * - This component imports globals.css which contains @import 'tailwindcss' and all @theme definitions
 * - Each microfrontend imports this provider via module federation
 * - PostCSS processing happens at the shared package level with root postcss.config.js
 * - No individual postcss.config.js needed in apps
 *
 * Usage in apps:
 * import { GlobalStyles } from 'shared/styles'
 * <GlobalStyles>{app content}</GlobalStyles>
 */
const TailwindProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default TailwindProvider;
