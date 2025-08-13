import { QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import queryClient from 'shared/queries/client';
import 'shared/styles/global-import';

import Header from './Header';
import SideBarNav from './Sidebar';

const container = document.getElementById('app');

const root = createRoot(container!);
root.render(
  <>
    <Helmet>
      <title>Header App</title>
    </Helmet>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <SideBarNav />
      </BrowserRouter>
    </QueryClientProvider>
  </>
);
