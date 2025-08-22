import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import GlobalStylesProvider from 'shared/styles/Global';
import App from './App';

const container = document.getElementById('app');
const root = createRoot(container!);

root.render(
  <>
    <GlobalStylesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalStylesProvider>
  </>
);
