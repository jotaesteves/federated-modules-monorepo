import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from 'shared/queries/client';
import Global from 'shared/styles/Global';
import Sales from './Sales';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(
  <>
    <Global />
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Sales />
      </BrowserRouter>
    </QueryClientProvider>
  </>
);
