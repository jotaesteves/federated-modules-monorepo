import * as React from 'react';
import { Global, css } from '@emotion/react';
import { fontFamily } from './utils';
import TailwindProvider from './TailwindProvider';
// Import the Tailwind CSS and global styles through the wrapper
import './global-import';

const GlobalStyles: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <TailwindProvider>
      <Global
        styles={css`
          html,
          body {
            font-family: ${fontFamily};
          }
        `}
      />
      {children}
    </TailwindProvider>
  );
};

export default GlobalStyles;
