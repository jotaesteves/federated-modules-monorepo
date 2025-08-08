import * as React from 'react';
// Import the main globals.css which contains the @theme and Tailwind configuration
import './globals.css';
import './global-demo.css';

/**
 * TailwindProvider component that loads Tailwind CSS styles
 * This should be imported and used in the root of applications
 * that want to use Tailwind CSS from the shared package
 */
const TailwindProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default TailwindProvider;
