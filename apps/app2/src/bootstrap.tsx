import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from 'shared/queries/client';
import Global from 'shared/styles/Global';
// Import Tailwind CSS styles via JS wrapper to prevent double-processing
// import 'shared/styles/tailwind';
import App2 from './App2';

const container = document.getElementById('app');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <>
    <Global />
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App2 />
      </BrowserRouter>
    </QueryClientProvider>
  </>
);
