import * as React from 'react';
import { Global, css } from '@emotion/react';
import { fontFamily } from './utils';
// Tailwind v3 entry + theme tokens
import './global-import';

const GlobalStyles: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            font-family: ${fontFamily};
          }
        `}
      />
      {children}
    </>
  );
};

export default GlobalStyles;
