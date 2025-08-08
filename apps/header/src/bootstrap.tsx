import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from 'shared/queries/client';
import 'shared/styles/global-import';

import Header from './Header';
import { Helmet } from 'react-helmet';

const container = document.getElementById('app');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <>
    <Helmet>
      <title>Header App</title>
    </Helmet>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </QueryClientProvider>
  </>
);
