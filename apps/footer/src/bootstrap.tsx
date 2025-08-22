import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from 'shared/queries/client';
import Global from 'shared/styles/Global';

import Footer from './Footer';
import { Helmet } from 'react-helmet';

const container = document.getElementById('app');

const root = createRoot(container!);
root.render(
  <>
    <Helmet>
      <title>Footer App</title>
    </Helmet>
    <Global />
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  </>
);
