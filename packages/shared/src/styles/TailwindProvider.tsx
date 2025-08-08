import * as React from 'react';
import './tailwind.css';

/**
 * TailwindProvider component that loads Tailwind CSS styles
 * This should be imported and used in the root of applications
 * that want to use Tailwind CSS from the shared package
 */
const TailwindProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default TailwindProvider;
