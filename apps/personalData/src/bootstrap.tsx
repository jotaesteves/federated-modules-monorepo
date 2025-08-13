import { QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import queryClient from 'shared/queries/client';
import Global from 'shared/styles/Global';

import PersonalData from './PersonalData';

const container = document.getElementById('app');

const root = createRoot(container!);
root.render(
  <>
    <Global />
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <PersonalData />
      </BrowserRouter>
    </QueryClientProvider>
  </>
);
