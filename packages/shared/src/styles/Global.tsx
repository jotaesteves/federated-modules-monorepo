import * as React from 'react';
import { Global, css } from '@emotion/react';
import { fontFamily } from './utils';
import TailwindProvider from './TailwindProvider';

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
